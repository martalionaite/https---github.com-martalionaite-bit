const a = 'labas';
console.log (a, typeof a);

console.log(a.length);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

console.log('----------->');

console.log(a.at(0), a[0]);
console.log(a.at(4), a[4]);
console.log(a.at(-1), a[a.length - 1]);
console.log(a.at(-2), a[a.length - 2]);
console.log(a.at(-3), a[a.length - 3]);
console.log(a.at(-4), a[a.length - 4]);
console.log(a.at(-5), a[a.length - 5]);

console.log('----------->');
console.log('Labas'. includes('a'));
console.log('Labas'. includes('d'));
console.log('Labas'. includes('aba'));
console.log('Labas'. includes('Aba'));

console.log('Labas'. indexOf('L'));
console.log('Labas'. indexOf('a'));
console.log('Labas'. indexOf('b'));
console.log('Labas'. indexOf('a', 2));
console.log('Labas'. indexOf('s'));
console.log('Labas'. indexOf('aba'));
console.log('Labas'. indexOf('x'));

console.log('----------->');

console.log('Labas' .startsWith('Laba'));
console.log('Labas' .startsWith('L'));
console.log('Labas' .startsWith('b'));

console.log('Labas' .endsWith('a'));
console.log('Labas' .endsWith('s'));
console.log('Labas' .endsWith('as'));
console.log('Labas' .endsWith('bas'));

console.log('----------->');

console.log('Labas'.charAt(1));
console.log('Labas'.at(1));

console.log('----------->');

console.log('Labas'.charCodeAt(0));
console.log('Labas'.charCodeAt(1));
console.log('Labas'.charCodeAt(2));
console.log('Labas'.charCodeAt(3));
console.log('Labas'.charCodeAt(4));

console.log(String.fromCharCode(76));
console.log(String.fromCharCode(97));
console.log(String.fromCharCode(98));

console.log('Labas'. repeat(0));
console.log('Labas'. repeat(1));
console.log('Labas'. repeat(2));
console.log('Labas'. repeat(5));

console.log('----------->');

console.log('labas'.slice());
console.log('labas'.slice(0));
console.log('labas'.slice(0, 0));
console.log('labas'.slice(0, 1));
console.log('labas'.slice(0, 2));
console.log('labas'.slice(0, 3));
console.log('labas'.slice(1, 3));
console.log('labas'.slice(1, 4));
console.log('labas'.slice(1, 5));
console.log('labas'.slice(-3));
console.log('Labas '.repeat(5).slice(0, -1) + '.');
console.log('Labas '.repeat(5).slice(0, -2));

console.log('----------->');
console.log('Kopustas' .replace('p', 'k'));
console.log('Vasara' .replace('a', '-'));
const Vasara = 'Vasara' 
    .replace('a', '-')
    .replace('a', '-')
    .replace('a', '-');
console.log(Vasara);

const kisk = 'Bepasikiskekopusteliaudamasis'
    .replaceAll('i', '-')
console.log(kisk);

const sakinys = 'Siandien yra labai grazi nauju metu diena!';
const dalys = sakinys.split(' ');
console.log(dalys);
console.log('Zodziu sakinyje:', dalys.length);

const raides = 'Raudonas pomidoras'.split ('');
console.log(raides)


