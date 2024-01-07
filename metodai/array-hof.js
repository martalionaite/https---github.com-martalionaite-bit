/* HOF - higher order function */
/* "tevine" funkcija, kuri gaunama kita funkcija kaip atgumenta */

function doubleTrouble(n) {
    if (n * 2 > 10) {
        return 10;
    }
    return n * 2;
}

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const doubleMarks = [];

for (let i = 0; i < marks.length; i++) {
    doubleMarks.push(doubleTrouble(marks[i]));
}

console.log(doubleMarks);


console.log('-----------------');

const doubleMarksMap = marks.map(doubleTrouble);
console.log(doubleMarksMap); 

const tripleMarks= marks.map(n => n * 3);
console.log(tripleMarks); 

const forth = n => n * 4 ;
const forthMarks= marks.map(forth);
console.log(forthMarks); 

console.clear();

const bool = [true, false, true, false, true, false, true, false];
const allTrue = bool.map(x => true);
console.log(allTrue);

const students = ['Jonas', 'Martyte', 'Petras', 'Ona'];
const inicialiai = students.map(s => s[0]);
console.log(inicialiai);

const matrix = [
    [1, 2],
    [3],
    [4, 5, 6],
    [7, 8, 9, 10, 11],
    [0]
];

const matrixCount = matrix.map(m => m.length);
console.log(matrixCount);

console.log('-----------------');

const mandarinai = [
    [true, false],
    [true],
    [true, true, true],
    [false, false, false, false, false],
    [true, true, true, false],
];
// [1, 1, 3, 0, 3]

function prinokusiuMandarinuKiekis(krepselis) {
    let geruKiekis = 0;

    for (let i = 0; i < krepselis.length; i++) {
        const mandarinas = krepselis[i];
        if (mandarinas === true) {
            geruKiekis++;
        }
    }

    return geruKiekis;
}

const prinukusiuKiekis = mandarinai.map(prinokusiuMandarinuKiekis);
console.log(prinukusiuKiekis);

console.clear();

function filterAllowedPeople(weights) {
    const weightsLimit = 80;

    if (weights > weightsLimit) {
        return false;
    }
    return true;
}

const weights = [100, 10, 50, 70, 66, 99, 150, 20];


const allowedWheights =[];

for (let i=0; i < weights.length; i++)
if (filterAllowedPeople(weights[i])) {
    allowedWheights.push(weights[i]);
}

console.log(allowedWheights);

const allowedWheightsFilter = weights.filter(filterAllowedPeople);
console.log(allowedWheights);

const allowedWheights2 = weights.filter(w => w > 80);
console.log(allowedWheights2);

const allowedWheights3 = weights.filter(w => w <= 80);
console.log(allowedWheights3);

const allowedWheights4 = weights.filter(w => w <= 80 && w > 30);
console.log(allowedWheights4);

const mandarinai2 = [
    [true, false],
    [true],
    [true, true, true],
    [false, false, false, false, false],
    [true, true, true, false],
];

const mandarinaiFilter = mandarinai2
.map(krep => krep.filter(mad => mad === true).length);
console.log(mandarinaiFilter);