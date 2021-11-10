"use strict";
// -- [Aufgabe 1]
/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age = 30;
/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
let firstName = `Sarah`;
function func1(age) {
    return 2021 - age;
}
let output = func2(firstName);
function func3(meal) {
    console.log(`Ich esse gerne ${meal || "Pizza"}.`);
    return func1(age) > 1995
        ? `Ich gehöre zur Generation Z`
        : `Ich gehöre zur Generation Y`;
}
console.log(output);
function func2(name) {
    console.log(`Ich heiße ${name}.`);
    return func3();
}
/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * -- Ich heiße Sarah.
      Ich esse gerne Pizza.
      Ich gehöre zur Generation Y.
 */
// -- [Aufgabe 2]
let events = [
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
console.log(events[0][0], events[0][1]);
console.log(events[1][0], events[1][1]);
console.log(events[2][0], events[2][1]);
console.log(events[3][0], events[3][1]);
console.log(events[4][0], events[4][1]);
console.log(events[5][0], events[5][1]);
console.log(events[6][0], events[6][1]);
console.log(events[7][0], events[7][1]);
console.log(events[8][0], events[8][1]);
console.log(events[9][0], events[9][1]);
// Lösung c) ...
function max(..._events) {
    let preise = _events[0][0];
    for (let i = 0; i < _events.length; i++) {
        const sNr = _events[i];
        if (sNr < preise) {
            preise = sNr;
        }
    }
    return preise;
}
let maxi = [
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
let faktorial = 1;
let nummer = 5;
function factorial() {
    while (nummer > 1) {
        faktorial = faktorial * nummer;
        nummer--;
        console.log("The factorial  is " + faktorial);
    }
}
factorial();
// Lösung f) ...
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}
// Lösung g) ...
class ConcertEvent {
    interpret;
    price;
    concertEvent;
    constructor(interpret) {
        this.interpret = interpret;
    }
    preis() {
        this.price++;
    }
    show() {
        console.log(this.interpret, this.price);
    }
}
// Lösung h) ...
let c = new ConcertEvent("Mark Knopfler");
c.preis();
console.log(c.show());
//# sourceMappingURL=script.js.map