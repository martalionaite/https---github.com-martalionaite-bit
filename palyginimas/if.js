/*
IF - palyginimas

LOGIKOS SABLONAI:
- if () {}
- if () {} else {}
- if () {} else if () {}
- if () {} else if () {} else {}
- if () {} else if () {} ... else if () {}
- if () {} else if () {} ... else if () {} else {}

PALYGINIMO OPERATORIAI:
- visi: > (daugiau), < (maziau),  >= (daugiau arba lygu), <= (maziau arba lygu), == (reiskia lygu), != ('!' reiskiasi NE lygu), ===, !==
- naudotini: >, <, >=, <=, (===, !== naudojami del saugumo sunkiau nuhakinti)
- nenaudotini: ==, !=  == (reiskia lygu), != ('!' reiskiasi NE lygu) 'Nenaudotini del saugumo, gali nuhakinti'.
*/

if (true){
        console.log('Tik kai TRUE');
}

console.log('-----------');



console.log('-----------------');

const colors = ['red', 'green', 'blue'];
const selectedColor = 'green';

if (selectedColor == colors[0]) {
    console.log('Pasirinkta: raudona.');
} else if (selectedColor == colors[1]) {
    console.log ('Pasirinkta: zalia.');
} else if (selectedColor == colors[2]) {
    console.log ('Pasirinkta: melyna.');
} else {
    console.log ('Tai spalvos nera tarp galimu pasirinkimu : (');
}

console.log ('end...');


if (selectedColor == colors[1]) {
    console.log('Pasirinkta: zalia.');
} else {
    console.log ('Ne zalia...');
}


if (selectedColor == colors[2]) {
    console.log('Pasirinkta: melyna.');
} else {
    console.log ('Ne melyna...');
}


//const a = 'A';
//const b = 'A';

//console.log('start');

// if (10 < 5) {}
// if (false) {}

//if (a != b) { 
    //console.log(`TAIP, ${a} yra daugiau uz ${b}`); 
//} else { 
    //console.log(`NE, ${a} nera daugiau uz ${b}`); 
//}

//console.log('end');

//const prekesKreplesioVerte = 1000;
//const nuolaidosRiba = 500;
//const nuolaidosDydisProcentai = 10;


//console.log('skaiciai pries skaiciavimus:....');

//if (prekesKreplesioVerte > nuolaidosRiba) {
//   console.log ('bandom pritaikyti nuolaida....');

//console.log ('tai kokia ta galutine kaina?..');


console.log ('----------------');

// '' (tuscias stringas) -> false
// 'asd' (ne tuscias st0ingas) -> true
// 0 (nulis) -> false
// 5 (bet koks kitas skaicius) -> true

const a = '15';  
const b = 10;  

if (a === b) {
    console.log('TAIP');
} else {
    console.log ('NE');
}

console.log('end....');

console.clear();

const day = 8;

if (day === 1) {
    console.log ('Pirmadienis');
} else if (day === 2) {
    console.log ('Antradienis');
} else if (day === 3) {
    console.log ('Treciadienis');
} else if (day === 4) {
    console.log ('Ketvir');
} else if (day === 5) {
    console.log ('Pnkt');
} else if (day === 6) {
    console.log ('Sest');
} else if (day === 7) {
    console.log ('Sekmad');
} else {
    console.log('Tokios savaites dienos nera.');
}

console.clear();


const diena = 2;

if (diena ===1) {
    console.log('Pirmadienis');
} else {
    console.log('Ne pirmadienis');
}

console.clear();

// NAMU DARBAI Kintamųjų palyginimas.

const z = 10;
const x = 15;

if (z > x){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');} 

if (z < x){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');} 

if (z === x){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');} 

if (z !== x){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');} 

if (z >= x){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');} 

if (z <= x){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');} 


console.clear();
