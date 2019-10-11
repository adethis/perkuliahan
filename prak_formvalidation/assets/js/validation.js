'use strict';

function formCheck() {
    let f_div = document.getElementById("formDiv");
    let f_text = f_div.n_pel.value;

    if(f_text != "") {
	    if( f_text.length > 30 ) {
	        alert("Karakter melebihi 30");
	        document.getElementById("show_error").innerHTML = "Karakter melebihi 30 karakter";
	    }
	} else {
		alert("tidak boleh kossong ");
	}
}