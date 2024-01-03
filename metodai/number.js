console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.length);
console.log(Number.parseInt(5));
console.log(Number.parseInt('5'));
console.log(Number.parseInt('7.25'));
console.log('----------------------->')
console.log(Number.parseFloat(5));
console.log(Number.parseFloat('5'));
console.log(Number.parseFloat('7.25'));
console.log(parseInt(5));
console.log(parseInt('5'));
console.log(parseInt('7.25'));
console.log('------------------>');
console.log(parseFloat(5));
console.log(parseFloat('5'));
console.log(parseFloat('7.25'));
console.log('------------------>');
console.log(isFinite(0));
console.log(isFinite(7));
console.log(isFinite(-7));
console.log(isFinite(-7.5));
console.log(isFinite(7.5));
console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log('------------------>');
console.log(Number.isInteger(0));
console.log(Number.isInteger(7));
console.log(Number.isInteger(-7));
console.log(Number.isInteger(-7.5));
console.log(Number.isInteger(7.5));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));
console.log('------------------>');
console.log(Number.isNaN(0));
console.log(Number.isNaN(7));
console.log(Number.isNaN(-7));
console.log(Number.isNaN(-7.5));
console.log(Number.isNaN(7.5));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(Infinity));
console.log(Number.isNaN(-Infinity));
console.clear();
console.log('------------------>');
console.log(parseInt(5));
console.log(parseInt('213'));
console.log(parseInt('213,1452'));
console.log(parseInt('213.1452'));
console.log(parseInt('Labas'));
console.log(parseInt('Labas123'));
console.log(parseInt('123Labas'));
console.log(parseInt('123,155Labas'));
console.log(parseInt('123.155Labas'));
console.log(parseInt('123Labas155'));
console.log('------------------>');
console.log(parseFloat(5));
console.log(parseFloat('213'));
console.log(parseFloat('213,1452'));
console.log(parseFloat('213.1452'));
console.log(parseFloat('Labas'));
console.log(parseFloat('Labas123'));
console.log(parseFloat('123Labas'));
console.log(parseFloat('123,155Labas'));
console.log(parseFloat('123.155Labas'));
console.log(parseFloat('123Labas155'));

function atpazintiSveikajiSkaiciu(text) {
    return NaN;
}

console.log('------------------>');

console.log((1354852).toFixed());

const n1 = 1232321;
console.log(n1.toFixed(2));

const n2 = 3.14515;
console.log(n2.toFixed(0));
console.log(n2.toFixed(1));
console.log(n2.toFixed(2));
console.log(n2.toFixed(3));
console.log(n2.toFixed(4));


console.log(0.1 + 0.2);
console.log((0.1 + 0.2));
console.log(parseFloat((0.1 + 0.2).toFixed(10)));
console.log('' + parseFloat((0.1 + 0.2).toFixed(10)));
console.log((0.1 + 0.2).toFixed(1));

const a = 3.1415;
const b = a.toFixed(2);

console.log(a, typeof a);
console.log(b, typeof b);

const c = parseInt(b) + parseInt (b);
console.log(c);

console.log(isNaN(3));
console.log(isNaN(NaN));

console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(14562));