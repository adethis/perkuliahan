/*  
    Tugas Praktikum PWD
    judul       : otentikasi login
    nim         : 0110218069
    nama        : ade trihadi s
    prodi       : ti weekend 2018
    thanks to   : w3school, javascript info, stackoverflow dll
*/

'use strict';

function login() {
    let f_oten = document.getElementById("form_oten");
    let u_name = f_oten.o_name.value;
    let u_pass = f_oten.o_pass.value;
    if( u_name != "" && u_pass != "" ) {
        if( u_name == "ahmad2017" && u_pass == "integrity" ) {
            alert("Log In berhasil");
            window.location = "log_success.html";
        } else if( u_name == "ahmad2017" && u_pass != "integrity" ) {
            alert("Password salah!");
            let i_error = document.getElementById("i_error");
            i_error.innerHTML = "Password salah!";
            i_error.classList.add("info-error");            
        } else if( u_name != "ahmad2017" && u_pass == "integrity" ) {
            alert("Username salah!");
            let i_error = document.getElementById("i_error");
            i_error.innerHTML = "Username salah!";
            i_error.classList.add("info-error");            
        } else {
            alert("Username dan Password salah!");
            let i_error = document.getElementById("i_error");
            i_error.innerHTML = "Username dan Password salah!";
            i_error.classList.add("info-error");
        }
    } else {
        alert("Username dan Password tidak boleh kosong!");
        let i_error = document.getElementById("i_error");
        i_error.innerHTML = "Username dan Password tidak boleh kosong!";  
        i_error.classList.add("info-error");      
    }
}