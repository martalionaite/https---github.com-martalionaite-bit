/*
STRING - tekstas
Iniciavimo kabutes:
-viengubos (')
-dvigubos (")
-backtick (`)
*/

console.log('labas');

const a = 'labas';
console.log(a);

const b = 'labas';
console.log(b);

const c = "labas";
console.log(c);

// Vienguba (') kabute.
const kabutes1 = "Vienguba (') kabute";
console.log(kabutes1);

//Dviguba :(") kabute.
const kabutes2 = 'Dviguba" (") kabute.';
console.log(kabutes2);

const name = 'Chuck';
const surname = 'Norris';

const fullname = name + ' ' + surname;
console.log(fullname);

// Vienguba (') ir dviguba (") kabute.
const kabutes12 = "Vienguba (') ir" + ' dviguba (") kabute. ';
console.log(kabutes12);

const kabutes112 = 'Vienguba (\') ir dviguba (") kabute.';
console.log(kabutes112);

const kabutes212 = "Vienguba (') ir dviguba (\") kabute.";
console.log(kabutes212);

//Labas
//rytas,
//Lietuva!

const lrl1 = 'Labas rytas, Lietuva!';
console.log(lrl1);

// \r - return
// \n - new line
// \t - tab
const lrl2 = 'Labas\r\
rytas,\r\
Lietuva!';
console.log(lrl2);

console.log('Kopustas\rtau!');
console.log('Kopustasrtau!');
console.log('Labas\\rytas');

console.clear();
/*
<header>
    <img src="">
    <nav>
        <a> href=""</a>
        <a> href=""</a>
        <a> href=""</a>
    </nav>
</header>
*/

const html = '<header>\n\
\t<img src="">\n\
\t<nav>\n\
\t\t<a> href=""</a>\n\
\t\t<a> href=""</a>\n\
\t\t<a> href=""</a>\n\
\t</nav>\n\
</header>';

console.log(html);

console.clear();

const b1 = `Labas rytas, Lietuva!`;
console.log(b1);

const b12 = `vienguba (') ir dviguba (") kabute.`;
console.log(b12);

// backtick (`) kabute.
const b3 = `Backtick (\`) kabute.`;
console.log(b3);

const username = 'Superman';

// Bruce is not a Batman, or is he!? 

const batman = 'Bruce is not a ' + username + ', or is he!?';
const batman2 = `Bruce is not a ${username}, or is he!?`;
console.log(batman);
console.log(batman2);

const c1 = 'red';
const c2 = 'green';
const c3 = 'blue';
const c4 = 'white';
const c5 = 'black';

// My favorite color: 1, 2, 3, 4, 5.

const colors = 'My favorite color: '+ c1 + ', ' + c2 + ', ' + c3 + ', ' + c4 + ', ' + c5 + '. ';
console.log(colors);

const colors2 = `My favorite color: ${c1}, ${c2}, ${c3}, ${c4}, ${c5}.`;
console.log(colors);

console.clear();

//NAMU DARBAI 
//Sukurti 3 kintamuosius su teksto tipo reikšmėmis. Po kiekvieno jų inicijavimo, išvesti į console

const z1 = 'Marta';
const z2 = 'Lionaite';
const z3 = 'Kaunas';

console.log(z1);
console.log(z2);
console.log(z3);

const info = 'Apie mane: '+ z1 + ' ' + z2 + ' ' + z3 + ' ';
console.log(info);

console.clear();


// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.

const aktorius = 'Brad Pitt'
console.log(aktorius);


// Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). 
// Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

const manoVardas = 'Marta'
const manoPavarde = 'Lionaite.'
const manoMetai = '1993'
const sieMetai = '2023'
const kiekMetu = sieMetai - manoMetai;

console.log('Aš esu:', manoVardas, manoPavarde,'Man yra', kiekMetu, 'metu.');


// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
// Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

const aktorius1 = 'Brad';
const pabarde2 = 'Pitt';
const trys = 'Rad Itt'

console.log(aktorius, aktorius1, trys);


// Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. 
// Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.

const d1 = '*nce up*n a time in h*llyw**d';
console.log(d1);
