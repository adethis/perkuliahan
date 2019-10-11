/*  
    Tugas Praktikum PWD
    judul       : konversi kurs rupiah
    nim         : 0110218069
    nama        : ade trihadi s
    prodi       : ti weekend 2018
    thanks to   : w3school, javascript info, stackoverflow dll
*/

'use strict';

function kurs() {
    // get value by id from select option
    let mat_uang = document.getElementById("valas").value;
    // get value by name from input 
    let i_uang = parseInt(document.getElementsByName("n_awal")[0].value);
    // get elements field hasil by id
    let i_hasil = document.getElementById("n_hasil");
    // declare variable hasil
    let hasil;
    // for formating number (source: dev.mozilla)
    let formatnya = new Intl.NumberFormat();
    
    // condition for convertion from rupiah to other mata uang
    switch(mat_uang) {
        case "us":
            hasil = i_uang * 9915;
            i_hasil.value = formatnya.format(hasil);
            break;
        case "sg":
            hasil = i_uang * 13472;
            i_hasil.value = formatnya.format(hasil);
            break;
        case "rm":
            hasil = i_uang * 874;
            i_hasil.value = formatnya.format(hasil);
            break;
        case "yen":
            hasil = i_uang * 120;
            i_hasil.value = formatnya.format(hasil);
            break;
        case "eu":
            hasil = i_uang * 15888;
            i_hasil.value = formatnya.format(hasil);
            break;
        case "ras":
            hasil = i_uang * 3592;
            i_hasil.value = formatnya.format(hasil);
            break;
        default:
            i_hasil.value = 0;
    }

    // Change result NaN to 0
    if( i_hasil.value == "NaN" ) {
        i_hasil.value = 0;
    }
}