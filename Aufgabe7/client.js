"use strict";
var Aufgabe4;
(function (Aufgabe4) {
    const interpretInput = (document.querySelector("#interpret"));
    const priceInput = (document.querySelector("#price"));
    const enterbutton = (document.querySelector("#enter"));
    const tbody = (document.querySelector("tbody"));
    const deleteButton = (document.getElementById("delete"));
    function enterEvent(_evt) {
        _evt.preventDefault();
        console.log(interpretInput.value);
        console.log(priceInput.value);
    }
    function addRow(_e) {
        _e.preventDefault();
        tbody.innerHTML += `<tr><td>${interpretInput.value}</td><td>${priceInput.value}</td><td><button>Delete</button></td></tr>`;
        let allButtons = document.querySelectorAll("button");
        for (const ele of allButtons) {
            ele.addEventListener("click", function () {
                this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
            });
        }
    }
    function deleteItem(ele) {
        ele.parentElement.parentElement.parentElement.removeChild(ele.parentElement.parentElement);
    }
    enterbutton.addEventListener("click", enterEvent);
    enterbutton.addEventListener("click", addRow);
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=client.js.map