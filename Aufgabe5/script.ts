namespace Aufgabe5{
    
    const interpretInput: HTMLInputElement = <HTMLInputElement>(
        document.querySelector("#interpret")
    );
    
    const priceInput: HTMLInputElement = <HTMLInputElement>(
        document.querySelector("#price")
    );
        
    const enterbutton: HTMLElement = <HTMLElement>(
       document.querySelector("#enter") 
    );
        
    const tbody: HTMLTableSectionElement = <HTMLTableSectionElement>(
        document.querySelector("tbody")
    );

    const saveButton: HTMLButtonElement = <HTMLButtonElement>(
        document.getElementById("save-Button")
    );

    const loadButton: HTMLButtonElement = <HTMLButtonElement>(
        document.getElementById("load-button")
    );

    const display: HTMLDivElement = <HTMLDivElement>(
        document.getElementById("display")
    );

    function saveButtonHandler(): void{
        console.log("save")
        interpretInput.value;
        localStorage.setItem("storage-input", interpretInput.value);
        priceInput.value;
        localStorage.setItem("storage-input", priceInput.value);
    }

    function loadButtonHandler(): void{
        console.log("load")
        let localValue: string = localStorage.getItem("storage-input");
        console.log(localValue);
        display.textContent = localValue;
    }

    const deleteButton: HTMLButtonElement = <HTMLButtonElement>(
        document.getElementById("delete")
    );

    function enterEvent(_evt: Event){
        _evt.preventDefault();
        console.log(interpretInput.value);
        console.log(priceInput.value);
    }
    
    function addRow(_e: Event){
    
        _e.preventDefault();
        tbody.innerHTML += `<tr><td>${interpretInput.value}</td><td>${priceInput.value}</td><td><button>Delete</button></td></tr>`;
    
        let allButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll("button");
    
        for ( const ele of allButtons ) {
            ele.addEventListener("click", function() {
                this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
            });
        }        
    }
    
    function deleteItem(ele: HTMLButtonElement): void{
        ele.parentElement.parentElement.parentElement.removeChild(ele.parentElement.parentElement);
    }

    enterbutton.addEventListener("click", enterEvent);
    enterbutton.addEventListener("click", addRow);
    saveButton.addEventListener("click", saveButtonHandler);
    loadButton.addEventListener("click", loadButtonHandler);

}