const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const plus = document.getElementById('plus');
const bmi = document.getElementById('bmi');
var sbb = document.getElementById('sbb');
var antara = document.getElementById('antara');
let angka1 = 0;
let angka2 = 0;
let angka3 = 0;
let hasil = 0;

plus.addEventListener('click', function() {
    bmi.innerHTML = hasil;
    angka1 = parseInt(input1.value);
    angka2 = parseInt(input2.value);
    angka3 = parseInt(input3.value);
    hasil = angka1 / angka3;
    bmi.innerHTML = hasil.toFixed(2);

    if (hasil >= 30) {
        sbb.innerHTML = "Anda memiliki berat badan yang kegemukan"
    } else if (hasil >= 25) {
        sbb.innerHTML = "Anda memiliki berat badan yang lebih"
    } else if (hasil >= 18.5) {
        sbb.innerHTML = "Anda memiliki berat badan yang normal"
    } else {
        sbb.innerHTML = "Anda memiliki berat badan yang kurang"
    }

    if (hasil >= 30) {
        antara.innerHTML = "Hasil BMI diantara 30.0 atau lebih <br> Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal."
    } else if (hasil >= 25) {
        antara.innerHTML = "Hasil BMI diantara 25.0 - 29.9 <br> Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal."
    } else if (hasil >= 18.5) {
        antara.innerHTML = "Hasil BMI diantara 18.5 - 24.9 <br> Anda berada dalam kategori berat badan normal. Cara terbaik untuk menstabilkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mempertahankan berat badan Anda."
    } else {
        antara.innerHTML = "Hasil BMI kurang dari 18.5 <br> Anda berada dalam kategori berat badan yang kurang. Cara terbaik untuk menambahkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk meningkatkan berat badan hingga batas normal."
    }
});