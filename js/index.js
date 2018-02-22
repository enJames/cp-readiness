'use strict';

let searchBox  = document.getElementById('searchBox');
let error = document.querySelector('.error');
let form = document.getElementsByTagName('form')[0];
let notif = document.getElementById('notif');
/*
searchBox.addEventListener("submit", function (event) {
    if (searchBox.validity.valid) {
        error.innerHTML = "";
        error.className = "error";
    }
}, false);*/

form.addEventListener("submit", function (event) {
    if (searchBox.value == 0) {
        error.innerHTML = "Oops! We can't search nothing... Please tell us what to search";
        error.className = "error active";

        event.preventDefault();
    } else {
        let outcome = confirm(`Execute search for: "${searchBox.value}"?`);

        if (outcome == true) {
            notif.style.opacity = '1';
            notif.innerHTML = "Executing search query...";

            setTimeout(() => {
                notif.style.opacity = '0';
            }, 4000);
        } else {
            notif.style.opacity = '1';
            notif.innerHTML = "Search execution cancelled!";

            setTimeout(() => {
                notif.style.opacity = '0';
            }, 4000);
        }
    }
}, false);
