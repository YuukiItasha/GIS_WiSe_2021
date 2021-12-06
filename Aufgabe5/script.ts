namespace Aufgabe5 {

    window.addEventListener("load", init);


    let inputInterpret: HTMLInputElement;
    let inputPrice: HTMLInputElement;


    let enterButton: HTMLButtonElement;

    let displayTable: HTMLTableElement;

    let events: EventData[] = [];

    interface EventData {
        interpret: string,
        price: number,

    }



    interface EventDataRow {
        event: EventData,
        row: HTMLTableRowElement
    }

    function init(_event: Event): void {

        inputInterpret = <HTMLInputElement>document.querySelector("#input-interpret");
        inputPrice = <HTMLInputElement>document.querySelector("#input-price");


        enterButton = <HTMLButtonElement>document.querySelector("#input-enter");
        enterButton.addEventListener("click", mybuttonHandler);


        displayTable = <HTMLTableElement>document.querySelector("#display");

        updateTableFromLocalStorage();
    }


    function mybuttonHandler() {
        updateSingle();
    }

    function updateSingle(): void {



        let inputEventData: EventData = {
            interpret: inputInterpret.value,
            price: +inputPrice.value,
            
        };

        events.push(inputEventData);

        console.log(events);


        let row: HTMLTableRowElement = displayTable.insertRow();
        insertDataInRow(row, inputEventData);


        updateLocalStorage();
    }

    function updateLocalStorage(): void {
        localStorage.setItem("events", JSON.stringify(events));
    }

    function updateTableFromLocalStorage(): void {

        let eventsString: string = localStorage.getItem("events");
        if (!eventsString) {
            return;
        }
        events = <EventData[]>JSON.parse(eventsString);

        for (let index: number = 0; index < events.length; index++) {

            let row: HTMLTableRowElement = displayTable.insertRow();




            insertDataInRow(row, events[index]);
        }
    }

    function insertDataInRow(_row: HTMLTableRowElement, _data: EventData): void {

        let interpretCell: HTMLTableCellElement = document.createElement("td");
        let priceCell: HTMLTableCellElement = document.createElement("td");
        let deleteButton: HTMLButtonElement = document.createElement("button");

        let eventDataRow: EventDataRow = { event: _data, row: _row }
        deleteButton.addEventListener("click", onDeleteButton.bind(eventDataRow));

        interpretCell.innerHTML = _data.interpret;
        priceCell.innerHTML = _data.price.toString();

        deleteButton.innerHTML = "delete";

        _row.appendChild(interpretCell);
        _row.appendChild(priceCell);
        _row.appendChild(deleteButton);
    }

    function onDeleteButton(this: EventDataRow, _event: MouseEvent): void {

        displayTable.deleteRow(this.row.rowIndex);

        events = events.filter(event => event !== this.event);

        updateLocalStorage();
    }
}