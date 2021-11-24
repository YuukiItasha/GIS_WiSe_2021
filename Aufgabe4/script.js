"use strict";
var Aufgabe4;
(function (Aufgabe4) {
    const interpretInput = (document.querySelector("#interpret"));
    const priceInput = (document.querySelector("#price"));
    const dateInput = (document.querySelector("#date"));
    const enterbutton = (document.querySelector("#enter"));
    const table = (document.querySelector("table"));
    function enterEvent(_evt) {
        _evt.preventDefault();
        console.log(interpretInput.value);
        console.log(priceInput.value);
    }
    const tbody = (document.querySelector("tbody"));
    function addRow(_e) {
        _e.preventDefault();
        tbody.innerHTML += `<tr><td>${interpretInput.value}</td><td>${priceInput.value}</td><td>${dateInput.value}</td><td><button class="delete">Delete</button></td></tr>`;
    }
    function deleteRow() {
    }
    enterbutton.addEventListener("click", enterEvent);
    enterbutton.addEventListener("click", addRow);
    table.addEventListener("click", deleteRow);
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=script.js.map