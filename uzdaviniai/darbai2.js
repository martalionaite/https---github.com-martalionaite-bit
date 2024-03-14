// 1. Sukurkite objektą, kuris saugotų jūsų mėgstamiausios knygos pavadinimą, autorių ir leidimo metus. Išveskite kiekvieną objekto savybę naudojant for in ciklą.

const favoriteBook = {
    pavadinimas: "Dienorastis",
    autorius: "Anna Frank",
    leidimoMetai: 2021
};

for (const property in favoriteBook) {
    console.log(`${property}: ${favoriteBook[property]}`);
}

// 2. Sukurkite masyvą, kuriame būtų kelios objektų reikšmės, kiekviena reikšmė turėtų vartotojo vardą ir amžių. Naudodami for of ciklą, išveskite kiekvieno vartotojo vardą ir amžių.

const masyvas = [
    { vardas: "Anna", metai: 30 },
    { vardas: "Tomas", metai: 20 },
    { vardas: "Ona", metai: 35 }
];

for (const vartotojas of masyvas) {
    console.log(`Vartotojo vardas: ${vartotojas.vardas}, amžius: ${vartotojas.metai}`);
}

//  3. Sąrašo Filtravimas: Turite objektų masyvą, kuriame saugoma informacija apie įvairius produktus (pavadinimas, kaina, kategorija). Parašykite funkciją, kuri naudojant for of ciklą grąžintų tik tuos produktus, kurie priklauso tam tikrai kategorijai.

const produktai = [
    {pavadinimas: "pienas", kaina: '1,99 €', kategorija: "maistas" },
    {pavadinimas: "kepure", kaina: '4,99 €', kategorija: "drabuziai" },
    {pavadinimas: "skalbimo milteliai", kaina: '9,99 €', kategorija: "namu apyvokos reikmenys" },
];

function filtruoti(produktai, kategorija) {
    const rezultatai = [];
    for (const produktas of produktai) {
        if (produktas.kategorija === kategorija) {
            rezultatai.push(produktas);
        }
    }
return rezultatai;
}

const rezultatai = filtruoti(produktai, "maistas");
console.log(rezultatai);

// 4. Parašykite funkciją, kuri naudojant for in ciklą sukurtų objekto kopiją.

const obj1 = { a: 1 };
const obj2 = { b: 2 };

const newObj = Object.assign({}, obj1, obj2);

console.log(newObj);

// 5. Turite vartotojo objektą su įvairiomis savybėmis. Naudodami for in ciklą, sukurti du masyvus: viename saugokite objekto raktus, o kitame - reikšmes.

const vartotoja = {
    vardas: 'Ona',
    pavarde: 'Onaite',
    amzius: 25,
    miestas: 'Kaunas'
};

const raktai = [];
const reiksmes = [];

for (const savybes in vartotoja) {
    raktai.push(savybes);
    reiksmes.push(vartotoja[savybes]);
}

console.log(raktai);
console.log(reiksmes);

// 6. Turite masyvą, kuriame yra skaičiai. Naudodami for ciklą, apskaičiuokite masyvo skaičių sumą.

const number = [1, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < number.length; i++) {
    suma += number[i];
}

console.log('Suma:', suma);

// 7. Turite skaičių masyvą. Naudodami for ciklą, raskite didžiausią skaičių masyve.

const skaiciai = [10, 25, 65, 74, 1, 58, 99, 45];
let didziausias = skaiciai[0];

for (let i = 1; i < skaiciai.length; i++) {
    if (skaiciai[i] > didziausias)  
        didziausias = skaiciai[i];
    }


console.log('Didziausias skaicius:', didziausias);

// 8. Sukurkite funkciją, kuri naudojant for in ciklą, grąžina objekto savybių skaičių.




// 9. Turite vartotojų masyvą su objektais, kuriuose yra vardas ir amžius. Naudodami for of ciklą, išveskite tik tuos vartotojus, kurių amžius yra didesnis nei 18.

const vartotojai = [
    { vardas: 'Ana', amzius: 18},
    { vardas: 'Petras', amzius: 17},
    { vardas: 'Tomas', amzius: 19},
];

for (const vartotojas of vartotojai) {
    if (vartotojas.amzius >= 18) {
        console.log(`Vartotojas ${vartotojas.vardas} yra pilnametis, jo amžius yra ${vartotojas.amzius}.`);
    }
}

//10. Turite objektą, kuriame saugomi įvairių žmonių amžiai. Naudodami for in ciklą, padidinkite kiekvieno asmens amžių 1 metais.

const zmones = {
    Ona: 25,
    Petras: 15,
    Tomas: 29
};

for (const zmogus in zmones) {
    zmones[zmogus]++;
}

console.log(zmones);