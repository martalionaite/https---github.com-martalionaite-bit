/*
NUMBERS

- sveikiehi / desimtainiai
    sveikiehi: 1, 2, 5, -7
    desimtainiai: 3.14, -2.727
- teigiami / neigiami
    teigiami: 1, 2.5
    neigiami: 8, -2.5
- normalus / "ne normalus"
    normalus: visi virsuhe
    "ne normalus": NaN (not-a-number), Infinity, -Infinity

KINTAMUhU INICIAVIMAS:
- const (default)
- let (kai reiksme tures keistis)
- var (NIEKADA, nebent zinai ka darai ir megsti nuotykius 👀)

MATEMATINIAI PRISKIRIMO OPERATORIAI:
a = a + 5;      ->      a += 5;
a = a - 5;      ->      a -= 5;
a = a * 5;      ->      a *= 5;
a = a / 5;      ->      a /= 5;
a = a % 5;      ->      a %= 5;

MATEMATINIAI OPERATORIAI:
++ (didinti 1 vienetu) 
-- (mazinti 1 vienetu)

*/
const a = 5;
console.log('a');
console.log(a);

const b = 3.14;
console.log(b);

const c = -77;
console.log(c);
const d = -2.272
console.log(d);

console.log(0);
console.log(-0);

const e = Infinity;
const f = -Infinity;
console.log(e, f);

console.log('labas', 123, a, b, 'rytas');

const n1 = 7;
const n2 = 5;
const suma = n1 + n2;
const n = 2 + 2;
console.log(n1, '+', n2, '=', suma);

console.clear();

const n3 = 7;
const n4 = 5;

const k1 = n3 + n4;
console.log (k1);

const k2 = n3 - n4;
console.log(k2);

const k3 = n3 * n4;
console.log(k3);

const k4 = n3 / n4;
console.log(k4);

const k5 = n4 / n3;
console.log(k5);

console.log (0.1 + 0.2);
console.log (0.3 - 0.2);
console.log (0.3 - 0.1);

console.log('% -------');
const k6 = n3 % n4;
console.log(k6);


console.log(10 % 3);
console.log(10 % 4);
console.log(10 % 5);
console.log(10 % 6);


console.clear();


const n8 = 1;
const n9 = 2;
const n10 = 3;
const n11 = 4;
const n12 = 5;

const k12 = n8 - n9 + n10 - n11 + n12;
console.log(k12);

console.clear();

let index = 0;
console.log(index);

index ++;
console.log(index);

index ++;
console.log(index);

index ++;
console.log(index);

index ++;
console.log(index);

console.clear();

let i = 0;
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);


console.log('----------');

let h = 0;

console.log(++h);
console.log(++h);
console.log(++h);
console.log(++h);
console.log(++h);
console.log(++h);


console.log('----------');

let k = 0;

console.log(k--);
console.log(k--);
console.log(k--);
console.log(k--);
console.log(k--);
console.log(k--);

console.log('----------');

let l = 0;

console.log(--l);
console.log(--l);
console.log(--l);
console.log(--l);
console.log(--l);
console.log(--l);

console.clear();


// NAMU DARBAI
// Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console

const a1 = 9;
const a2 = 2;
const a3 = 4;

console.log(a1);
console.log(a2);
console.log(a3);

console.log('--------------');
//Susumuoti visus skaičiaus tipo kintamuosius. Rezultatą išvesti į console

const h1 = a1 + a2 + a3;
console.log(h1);

const h2 = a1 - a2 - a3;
console.log(h2);

const h3 = a1 * a2 * a3;
console.log(h3);

const h4 = a1 / a2 / a3;
console.log(h4);

const h5 = a1 % a2 % a3;
console.log(h5);