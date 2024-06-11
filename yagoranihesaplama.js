function calculateBodyFat() {
    var height = parseFloat(document.getElementById('height').value);
    var waist = parseFloat(document.getElementById('waist').value);
    var neck = parseFloat(document.getElementById('neck').value);
    var hip = parseFloat(document.getElementById('hip').value);
    var gender = 'male';  // Varsayılan olarak erkek

    // Cinsiyeti belirleme (kalça ölçüsü girilmişse kadın)
    if (!isNaN(hip)) {
        gender = 'female';
    }

    var bodyFatPercentage;

    if (gender === 'male') {
        // Erkekler için vücut yağ oranı hesaplama formülü
        bodyFatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    } else {
        // Kadınlar için vücut yağ oranı hesaplama formülü
        bodyFatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
    }

    document.getElementById('bodyFatPercentage').innerText = bodyFatPercentage.toFixed(2) + "%";
    document.getElementById('result').style.display = 'block';
}
