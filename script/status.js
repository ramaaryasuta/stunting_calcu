function statusGiziBbUmur(minSD, maxSD) {
    console.log(`minSD: ${minSD}, maxSD: ${maxSD} pada status`);
    let status = '';
    if(minSD < -3 || maxSD < -3) {
        status = 'BB sangat Kurang';
    } else if (minSD >= -3 && maxSD <= -2) {
        status = 'BB Kurang';
    } else if (minSD >= -2 && maxSD <= 1) {
        status = 'BB normal';
    } else if (minSD > 1) {
        status = 'BB lebih';
    }
    return status;
}