const marks = [10, 2, 8, 4, 6];

console.log ([10, 2, 8, 4, 6][0]);
console.log ([10, 2, 8, 4, 6][1]);
console.log ([10, 2, 8, 4, 6][2]);
console.log ([10, 2, 8, 4, 6][3]);
console.log ([10, 2, 8, 4, 6][4]);
console.log ([10, 2, 8, 4, 6][7777]);

console.log(marks[marks.length - 1], marks.at(-1));
console.log(marks[marks.length - 2], marks.at(-2));
console.log(marks[marks.length - 3], marks.at(-3));
console.log(marks[marks.length - 4], marks.at(-4));
console.log(marks[marks.length - 5], marks.at(-5));

console.log('-------------');

const a = [1, 1, 1];
const b = [2, 2, 2];
const c = [3, 3, 3];
const d = a.concat(b).concat(c);
const e = a.concat(b, c);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log('-------------');
const rugsejis = [10, 2];
const spalis = [8, 4];
const lapkritis = [6];

const trimestras = rugsejis.concat(spalis, lapkritis);
console.log(trimestras);


console.log('-------------');

console.log(marks);
console.log(marks.includes(10));
console.log(marks.includes(7));

console.log(marks.indexOf(10));
console.log(marks.indexOf(2));
console.log(marks.indexOf(8));
console.log(marks.indexOf(4));
console.log(marks.indexOf(6));

console.log('-------------');

console.log(marks.join());
console.log(marks.join(', '));
console.log(marks.join('--==--'));

console.log('-------------');

//const x = 102846;
const x = parseInt(marks.join(''));
console.log(x);

console.log('-------------');

console.log(marks);
marks.reverse();

console.log(marks);
marks.reverse();

console.log(marks);


console.log('-------------'); 
 const marks1 = [5,4,3,2,1];

console.log(marks1);
marks1.reverse();

console.log(marks1);
marks1.reverse();

const alus = 'labas';
const sula = alus.startsWith
console.log(sula);

function reverseString(text) {
    return text.split('').reverse().join('');
}

console.log (reverseString ('alus'));
console.log (reverseString ('sula'));
console.log (reverseString ('sedekuzkedes'));
console.log (reverseString ('sedek'));

console.log('-------------'); 

const number = [10, 20, 30, 40, 50];
console.log(number.slice());
console.log(number.slice(2));
console.log(number.slice(1, 3));
console.log(number.slice(0,-1));
console.log(number.slice(0, -2));
