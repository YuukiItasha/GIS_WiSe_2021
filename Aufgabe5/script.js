"use strict";
var Aufgabe5;
(function (Aufgabe5) {
    const interpretInput = (document.querySelector("#interpret"));
    const priceInput = (document.querySelector("#price"));
    const enterbutton = (document.querySelector("#enter"));
    const tbody = (document.querySelector("tbody"));
    const saveButton = (document.getElementById("save-Button"));
    const loadButton = (document.getElementById("load-button"));
    const display = (document.getElementById("display"));
    function saveButtonHandler() {
        console.log("save");
        interpretInput.value;
        localStorage.setItem("storage-input", interpretInput.value);
        priceInput.value;
        localStorage.setItem("storage-input", priceInput.value);
    }
    function loadButtonHandler() {
        console.log("load");
        let localValue = localStorage.getItem("storage-input");
        console.log(localValue);
        display.textContent = localValue;
    }
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
    saveButton.addEventListener("click", saveButtonHandler);
    loadButton.addEventListener("click", loadButtonHandler);
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=script.js.map