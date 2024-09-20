const fs = require('fs');
const path = require('path')

window.addEventListener("DOMContentLoaded", () => {
    var links = [
        { name: 'Crazy Coins', path: './a821a94edc92/index.html' },
        { name: 'ERROR page', path: './ERROR/index.html' }
    ];

    var ul = document.getElementById("links-list");

    links.forEach((link, i, arr) => {
        let li = document.createElement('li');
        let a = document.createElement('a');

        a.href = link.path;
        a.textContent = link.name;

        li.appendChild(a);
        ul.appendChild(li);
    });
});