const maleMatrix = [
    [0, 2.1, 2.5, 2.9, 3.3, 3.9, 4.4, 5.0],
    [1, 2.9, 3.4, 3.9, 4.5, 5.1, 5.8, 6.6],
    [2, 3.8, 4.3, 4.9, 5.6, 6.3, 7.1, 8.0],
    [3, 4.4, 5.0, 5.7, 6.4, 7.2, 8.0, 9.0],
    [4, 4.9, 5.6, 6.2, 7.0, 7.8, 8.7, 9.7],
    [5, 5.3, 6.0, 6.7, 7.5, 8.4, 9.3, 10.4],
    [6, 5.7, 6.4, 7.1, 7.9, 8.8, 9.8, 10.9],
    [7, 5.9, 6.7, 7.4, 8.3, 9.2, 10.3, 11.4],
    [8, 6.2, 6.9, 7.7, 8.6, 9.6, 10.7, 11.9],
    [9, 6.4, 7.1, 8.0, 8.9, 9.9, 11.0, 12.3],
    [10, 6.6, 7.4, 8.2, 9.2, 10.2, 11.4, 12.7],
    [11, 6.8, 7.6, 8.4, 9.4, 10.5, 11.7, 13.0],
    [12, 6.9, 7.7, 8.6, 9.6, 10.8, 12.0, 13.3],
    [13, 7.1, 7.9, 8.8, 9.9, 11.0, 12.3, 13.7],
    [14, 7.2, 8.1, 9.0, 10.1, 11.3, 12.6, 14.0],
    [15, 7.4, 8.3, 9.2, 10.3, 11.5, 12.8, 14.3],
    [16, 7.5, 8.4, 9.4, 10.5, 11.7, 13.1, 14.6],
    [17, 7.7, 8.6, 9.6, 10.7, 12.0, 13.4, 14.9],
    [18, 7.8, 8.8, 9.8, 10.9, 12.2, 13.7, 15.3],
    [19, 8.0, 8.9, 10.0, 11.1, 12.5, 13.9, 15.6],
    [20, 8.1, 9.1, 10.1, 11.3, 12.7, 14.2, 15.9],
    [21, 8.2, 9.2, 10.3, 11.5, 12.9, 14.5, 16.2],
    [22, 8.4, 9.4, 10.5, 11.8, 13.2, 14.7, 16.5],
    [23, 8.5, 9.5, 10.7, 12.0, 13.4, 15.0, 16.8],
    [24, 8.6, 9.7, 10.8, 12.2, 13.6, 15.3, 17.1],
];

// index 0 dan 8 mewakili jika nilai lebih kecil / besar
const headerArray = [-4,-3, -2, -1, 0, 1, 2, 3, 4];

function maleCalculate(year, month, day, weight) {
    const tahun = year;
    let bulan = month;
    const hari = day;
    const berat = weight 

    let minSD = 0;
    let maxSD = 0;

    // umur lebih dari 15 hari dibulatkan jadi 1 bulan
    if(hari > 15){
        bulan += 1
    }
    
    // konversi tahun ke bulan
    switch (tahun){
        case 0:
            bulan += 0
            break;
        case 1:
            bulan += 12
            break;
        case 2:
            bulan += 24
            break;
    }
    
    // cek nilai di matriks array
    // index 0 mewakili umur bulan anak
    for(let i = 1; i <= maleMatrix.length; i++) {
        if(maleMatrix[bulan][i] >= berat) {
            if(maleMatrix[bulan][i] == berat) {
                // kalkulasi ke atas jika berat sama dengan nilai yang ada di tabel
                console.log('berat sama');
                console.log(`di bulan ${bulan} antara ${maleMatrix[bulan][i]}kg dan ${maleMatrix[bulan][i + 1]}kg`);
                console.log(`Berada pada posisi ${headerArray[i]}SD dan ${headerArray[i + 1]}SD`);
                minSD = headerArray[i]
                maxSD = headerArray[i + 1]
            } else {
                console.log('berat beda')
                console.log(`di bulan ${bulan} antara ${maleMatrix[bulan][i-1]}kg dan ${maleMatrix[bulan][i]}kg`);
                console.log(`Berada pada posisi ${headerArray[i - 1]}SD dan ${headerArray[i]}SD`);
                console.log(`nilai i = ${i}`);
                minSD = headerArray[i - 1]
                maxSD = headerArray[i]
            }
            break;
        } else if(maleMatrix[bulan][i] < berat) {
            // lebih dari tabel
            minSD = headerArray[headerArray.length - 1];
            maxSD = minSD;
            continue;
        }
    }
    return { minSD, maxSD };
}