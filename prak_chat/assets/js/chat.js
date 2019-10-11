/*  
    Tugas Praktikum PWD
    judul       : chat
    nim         : 0110218069
    nama        : ade trihadi s
    prodi       : ti weekend 2018
    thanks to   : w3school, javascript info, stackoverflow dll
*/
'use strict';

function chat() {
    // get value text from input
    let isiChat = document.getElementById("fillChat").value;
    // get element
    let ulChat = document.getElementById("itChat");
    // select element area chat
    let divChat = document.querySelector(".chat-area");
    // create element list
    let liChat = document.createElement("LI");
    // add div into list
    let addDiv = document.createElement("div");
    // insert text chat
    let bubChat = document.createTextNode(isiChat);

    // check if text chat not empty
    if (isiChat != "") {
        // adding class to every new div
        addDiv.classList.add("bubble-chat");
        // adding div to list element
        liChat.appendChild(addDiv);
        // adding text chat into div
        addDiv.appendChild(bubChat);
        // adding element list with div class bubble-chat
        ulChat.appendChild(liChat);

        // keep scrollbar in bottom for view new chat
        divChat.scrollTop = divChat.scrollHeight - divChat.clientHeight;
    }
}