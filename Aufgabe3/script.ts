// -- [Aufgabe 1]

/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
 let age: number = 30;

 /**
  * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
  */
 let firstName: string = `Sarah`;
 
 function func1(age: number): number {
   return 2021 - age;
 }
 
 let output: string = func2(firstName);
 
 function func3(meal?: string): string {
   console.log(`Ich esse gerne ${meal || "Pizza"}.`);
   return func1(age) > 1995
     ? `Ich gehöre zur Generation Z`
     : `Ich gehöre zur Generation Y`;
 }
 
 console.log(output);
 
 function func2(name: string): string {
   console.log(`Ich heiße ${name}.`);
   return func3();
 }
 
 /* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
  * -- Ich heiße Sarah.
       Ich esse gerne Pizza.
       Ich gehöre zur Generation Y.
  */
 
 // -- [Aufgabe 2]
 
 let events: any[][] = [
   ["Mark Knopfler", 10.1],
   ["Pink Floyd", 15.9],
   ["Metallica", 20.1],
   ["Michael Bublé", 11.1],
   ["Dire Straits", 12.2],
   ["Mariah Carey", 1.1],
   ["Cat Stevens", 12.99],
   ["Mark Forster", 2.1],
   ["Helene Fischer", 3.1],
   ["Bee Gees", 25.2],
 ];
 
 // -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 2 EINTRAGEN
 
 // Lösung a) ...
 
 console.log(events.length); 
 
 // Lösung b) ...
 
 /*for (var i = 0; i < events.length; i++) {
   console.log(events[i]);
 }*/


 console.log(events[0][0],events[0][1]);
 console.log(events[1][0],events[1][1]);
 console.log(events[2][0],events[2][1]);
 console.log(events[3][0],events[3][1]);
 console.log(events[4][0],events[4][1]);
 console.log(events[5][0],events[5][1]);
 console.log(events[6][0],events[6][1]);
 console.log(events[7][0],events[7][1]);
 console.log(events[8][0],events[8][1]);
 console.log(events[9][0],events[9][1]);

 
 // Lösung c) ...
function max(..._events: any[][]): any {


 let preise: any[][] = _events[0][0];
for (let i: any = 0; i < _events.length; i++) {
  const sNr: any = _events[i];
  if (sNr < preise) {
  preise = sNr;
}

}
return preise;
}
let maxi: any[][] = [
  ["Mark Knopfler", 20],
  ["Pink Floyd", 70],
  ["Metallica", 90],
  ["Michael Bublé", 30],
  ["Dire Straits", 65],
  ["Mariah Carey", 80],
  ["Cat Stevens", 45],
  ["Mark Forster", 40],
  ["Helene Fischer", 10],
  ["Bee Gees", 85],
];

console.log(...maxi);

 // Lösung d) ...
 
 // Lösung e) ...

 let faktorial: number = 1;
  let nummer: number = 5;
  function factorial(){ 
    while(nummer >1) { 
    faktorial = faktorial * nummer; 
    nummer--;   
    console.log("The factorial  is "+ faktorial);
    }
  } 
  factorial();
 
 // Lösung f) ...

 for (let i: number = 1; i <= 100; i++)  {
  if (i % 3 == 0) {
     console.log(i);
  }
}
 
 // Lösung g) ...

 class ConcertEvent{
  interpret: string;
  price: number;
   concertEvent: any;

  constructor(interpret: string) {
    this.interpret = interpret;
  
  }

  preis():  void {
     this.price++;
  }
 
    show() {
      console.log(this.interpret,this.price);
      
    }
  }
 
 // Lösung h) ...

 

 let c: ConcertEvent = new ConcertEvent("Mark Knopfler");
 c.preis();
 console.log(c.show());


