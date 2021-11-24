namespace Aufgabe4{
    const interpretInput: HTMLInputElement = <HTMLInputElement>(
        document.querySelector("#interpret")
    );

    const priceInput: HTMLInputElement = <HTMLInputElement>(
        document.querySelector("#price")
    );

    const dateInput: HTMLInputElement = <HTMLInputElement>(
        document.querySelector("#date")
    );

    const enterbutton: HTMLElement = <HTMLElement>(
       document.querySelector("#enter") 
    );

    const table: HTMLElement = <HTMLElement>(
        document.querySelector("table")
    );

    function enterEvent(_evt: Event){
        _evt.preventDefault();
        console.log(interpretInput.value);
        console.log(priceInput.value)
    }

    const tbody: HTMLTableSectionElement = <HTMLTableSectionElement>(
        document.querySelector("tbody")
    );

    function addRow(_e: Event){
  
        _e.preventDefault();

        tbody.innerHTML += `<tr><td>${interpretInput.value}</td><td>${priceInput.value}</td><td>${dateInput.value}</td><td><button class="delete">Delete</button></td></tr>`
    }

    function deleteRow(){

        
    }
    
    enterbutton.addEventListener("click", enterEvent);
    enterbutton.addEventListener("click", addRow);
    table.addEventListener("click", deleteRow);
}