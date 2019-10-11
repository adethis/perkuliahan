'use strict';

function imagePicker() {
    // get value from select option
    let l_img = document.getElementById("cImage").value;

    // check value empty or not
    if( l_img != "" ) {
        if( l_img == "beruang" ) {
            let beruang = "beruang.jpg";
            let gbrBeruang = '<img src="assets/img/'+ beruang +'" />';
            alert("Ini gambar " + beruang);
            document.getElementById("wHere").innerHTML = gbrBeruang;
        } else if( l_img == "burung" ) {
            let burung = "burung.jpg";
            let gbrBurung = '<img src="assets/img/'+ burung +'" />';
            alert("Ini gambar " + burung);
            document.getElementById("wHere").innerHTML = gbrBurung;
        } else if( l_img == "kucing" ) {
            let kucing = "kucing.jpg";
            let gbrKucing = '<img src="assets/img/'+ kucing + '" />';
            alert("Ini gambar "+ kucing);
            document.getElementById("wHere").innerHTML = gbrKucing;
        } else if( l_img == "panda" ) {
            let panda = "panda.jpg";
            let gbrPanda = '<img src="assets/img/'+ panda + '" />';
            alert("Ini gambar "+ panda);
            document.getElementById("wHere").innerHTML = gbrPanda;
        } else if( l_img == "unta" ) {
            let unta = "unta.jpg";
            let gbrUnta = '<img src="assets/img/'+ unta + '" />';
            alert("Ini gambar "+ unta);
            document.getElementById("wHere").innerHTML = gbrUnta;
        } else if( l_img == "monyet" ) {
            let monyet = "monyet.jpg";
            let gbrMonyet = '<img src="assets/img/'+ monyet + '" />';
            alert("Ini gambar "+ monyet);
            document.getElementById("wHere").innerHTML = gbrMonyet;
        }
        else {
            document.getElementById("wHere").innerHTML = "Tidak ada gambar";
        }
    } else {
        document.getElementById("wHere").innerHTML = "Tidak ada gambar";
    }
}