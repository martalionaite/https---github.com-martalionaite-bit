/*
 - arėjus, masyvas, sąrašas, listas, matrica
*/

const luckyNumber1 = 1;
const luckyNumber2 = 2;
const luckyNumber3 = 3;

console.log(luckyNumber1);
console.log(luckyNumber2);
console.log(luckyNumber3);

const luckySum = luckyNumber1 + luckyNumber2 + luckyNumber3;
console.log(luckySum);

const luckyNumbers = [1, 2, 3];
console.log(luckyNumbers);

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students);

const booleanList = [true, false, true, true, false, false];
console.log(booleanList);

const mix = [1, 'asd', true, []];
console.log(mix);

console.clear();

//koks pazymiu vidurkis?
const mark1 = 10;
const mark2 = 2;
const mark3 = 8;
const mark4 = 4;
const mark5 = 6;
const mark6 = 10;

const markSum = mark1 + mark2 + mark3 + mark4 + mark5 + mark6;
const markCount = 6;

const average = markSum / markCount;
console.log('Average:', average);

// index:       0  1  2  3  4 ....
const marks = [10, 2, 8, 4, 6];

console.log('>>>>>>', marks [0]);
console.log('>>>>>>', marks [1]);
console.log('>>>>>>', marks [2]);
console.log('>>>>>>', marks [3]);
console.log('>>>>>>', marks [4]);
console.log('>>>>>>', marks [5]);

let marksSum = 0;
let index = -1;


marksSum += marks [++index];                           
console.log(index, marksSum);

marksSum += marks [++index];           
console.log(index, marksSum);

marksSum += marks [++index];                 
console.log(index, marksSum);

marksSum += marks [++index];                    
console.log(index, marksSum);

marksSum += marks [++index];                          
console.log(index, marksSum);

console.log('Sum:', marksSum, 'index:', index);

const marksLength = marks.length;

const marksAverage = marksSum / marksLength;
console.log(' average:', marksAverage);

console.clear();

// NAMU DARBAI: Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console

const sarasas1 = [1, 2, 3, 4, 5];
const sarasas2 = [6, 7, 8, 9, 10];
const sarasas3 = [11, 12, 13, 14, 15];

console.log(sarasas1);
console.log(sarasas2);
console.log(sarasas3);


// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką 1-2+3-4+5

let sarasasSum = 0;

sarasasSum -= sarasas1[0];
sarasasSum += sarasas1[1];
sarasasSum -= sarasas1[2];
sarasasSum += sarasas1[3];
console.log('Suma:', sarasasSum)
const sarasas1Sum = sarasas1.length;

console.log('-----------');

// Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console

const studentai1 = ['Ugne', 'Karina', 'Zygis', 'Sigis', 'Ona'];
const studentai2 = ['Agne', 'Martynas', 'Tomas', 'Diana', 'Karolis'];
const studentai3 = ['Gytis', 'Rima', 'Marta', 'Rimgaile', 'Zigmas']
console.log(studentai1);
console.log(studentai2);
console.log(studentai3);


// Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas.


const a1 = 'Ugne';
const a2 = 'Karina';
const a3 = 'Zygis';
const a4 = 'Sigis';
const a5 = 'Ona'

const studentai4 = `Atbuline tvarka: ${a5}, ${a4}, ${a3}, ${a2}, ${a1}.`;
console.log(studentai4);


