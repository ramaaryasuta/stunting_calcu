document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const dialog = document.getElementById('myDialog'); // Ubah id dialog sesuai dengan yang Anda gunakan di HTML
    const closeDialogBtn = document.getElementById('closeDialog');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        const weight = document.getElementById('weight').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        // kondsi masih empty
        let status = '';

        const birthdateObj = new Date(birthdate);
        const currentDate = new Date();

        if (birthdateObj > currentDate) {
            alert("Tanggal lahir tidak boleh lebih dari tanggal saat ini.");
            return;
        }

        const diffInMilliseconds = currentDate - birthdateObj;
        const diffInYears = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
        const remainingAfterYears = diffInMilliseconds % (1000 * 60 * 60 * 24 * 365.25);

        const diffInMonths = Math.floor(remainingAfterYears / (1000 * 60 * 60 * 24 * 30.4375));
        const remainingAfterMonths = remainingAfterYears % (1000 * 60 * 60 * 24 * 30.4375);

        const diffInDays = Math.floor(remainingAfterMonths / (1000 * 60 * 60 * 24));

        console.log(`Umur ${name}: ${diffInYears} tahun, ${diffInMonths} bulan, dan ${diffInDays} hari.`);

        if (gender === 'male') {
            const { minSD, maxSD } = maleCalculate(diffInYears, diffInMonths, diffInDays, weight);
            const result = statusGiziBbUmur(minSD, maxSD);
            status = result;
        } else {
            console.log('female');
            console.log('Belum tersedia');
        }

        const formData = {
            name: name,
            birthdate: birthdate,
            weight: weight,
            gender: gender,
            ageYears: diffInYears,
            ageMonths: diffInMonths,
            ageDays: diffInDays
        };

        localStorage.setItem('formData', JSON.stringify(formData));

        // Tampilkan dialog setelah semua proses selesai
        showDialog(name, birthdate, weight, status);
    });

    // Fungsi untuk menampilkan dialog
    function showDialog(name, birthdate, weight, status) {
        const dialogName = document.getElementById('dialog-name');
        const dialogBirthdate = document.getElementById('dialog-birthdate');
        const dialogWeight = document.getElementById('dialog-weight');
        const dialogMessage = document.getElementById('dialog-message');

        dialogName.textContent = `Nama: ${name}`;
        dialogBirthdate.textContent = `Tanggal Lahir: ${birthdate}`;
        dialogWeight.textContent = `Berat Badan: ${weight} kg`;

        dialogMessage.textContent = `Status Gizi: ${status}`;

        dialog.style.display = 'block';
    }

    // Event listener untuk tombol tutup dialog
    closeDialogBtn.addEventListener('click', function() {
        dialog.style.display = 'none';
    });
});
