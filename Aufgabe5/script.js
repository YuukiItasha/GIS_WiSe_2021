"use strict";
var Aufgabe5;
(function (Aufgabe5) {
    window.addEventListener("load", init);
    let inputInterpret;
    let inputPrice;
    let enterButton;
    let displayTable;
    let events = [];
    function init(_event) {
        inputInterpret = document.querySelector("#input-interpret");
        inputPrice = document.querySelector("#input-price");
        enterButton = document.querySelector("#input-enter");
        enterButton.addEventListener("click", mybuttonHandler);
        displayTable = document.querySelector("#display");
        updateTableFromLocalStorage();
    }
    function mybuttonHandler() {
        updateSingle();
    }
    function updateSingle() {
        let inputEventData = {
            interpret: inputInterpret.value,
            price: +inputPrice.value,
        };
        events.push(inputEventData);
        console.log(events);
        let row = displayTable.insertRow();
        insertDataInRow(row, inputEventData);
        updateLocalStorage();
    }
    function updateLocalStorage() {
        localStorage.setItem("events", JSON.stringify(events));
    }
    function updateTableFromLocalStorage() {
        let eventsString = localStorage.getItem("events");
        if (!eventsString) {
            return;
        }
        events = JSON.parse(eventsString);
        for (let index = 0; index < events.length; index++) {
            let row = displayTable.insertRow();
            insertDataInRow(row, events[index]);
        }
    }
    function insertDataInRow(_row, _data) {
        let interpretCell = document.createElement("td");
        let priceCell = document.createElement("td");
        let deleteButton = document.createElement("button");
        let eventDataRow = { event: _data, row: _row };
        deleteButton.addEventListener("click", onDeleteButton.bind(eventDataRow));
        interpretCell.innerHTML = _data.interpret;
        priceCell.innerHTML = _data.price.toString();
        deleteButton.innerHTML = "delete";
        _row.appendChild(interpretCell);
        _row.appendChild(priceCell);
        _row.appendChild(deleteButton);
    }
    function onDeleteButton(_event) {
        displayTable.deleteRow(this.row.rowIndex);
        events = events.filter(event => event !== this.event);
        updateLocalStorage();
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=script.js.map