//  1. Parašykite funkciją, kuri priima vartotojo vardą kaip argumentą ir grąžina pasveikinimo žinutę.//

function tekst(name) {
    return 'Labas, as esu ' + name;
}

console.log(tekst('Marta'));
console.log(tekst('Anna'));



// 2. Sukurkite funkciją, kuri priima du skaičius kaip argumentus ir grąžina jų sumą.//

function sum(a, b) {
    return a + b;
}

let result = sum(15, 10);
console.log(result);

// 3. Parašykite funkciją, kuri priima masyvą kaip argumentą ir grąžina visų masyvo elementų sumą.//

let arr = [1, 2, 3, 4, 5];

function sumArray(arr, index) {
    if (index === arr.length) {
      return 0;
    }
    return arr[index] + sumArray(arr, index +1);
  }

  console.log(sumArray(arr, 0));

  // 4. Sukurkite funkciją, kuri priima masyvą skaičių ir grąžina didžiausią skaičių masyve //

let arr1 = [90, 85, 70, 99, 10, 25, 45];

function sum1(arr1) {

    return Math.max(...arr1);
}

console.log(sum1(arr1));

//5.Parašykite funkciją, kuri priima tekstą kaip argumentą ir grąžina to teksto ilgį.


const text = 'Labas, mano vardas Marta.'

function ilgis(text) {
    return text.length;
}

console.log(ilgis(text));

// 6.: Sukurkite funkciją, kuri priima skaičių ir grąžina jo faktorialą.


let n = 3;


function factorial(n) {
   let ans = 1;

   if (n === 0)
   return 1;
for (let i = 2; i<= n; i++)
    ans = ans * i;
return ans;
}

console.log(factorial(n));


// 7.Parašykite funkciją, kuri priima masyvą skaičių ir skaičių kaip argumentus, o grąžina naują masyvą, kuriame yra tik tie skaičiai, kurie didesni už pateiktą skaičių.

let number5 = [90, 85, 70, 99, 10, 25, 45];
let threshold = 70;

function filter(arr2, num) {
    let filter = []

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > num) {
            filter.push(arr2[i])
        }
    }

    return filter;
}

console.log(filter(number5, threshold));

// 8. Sukurkite funkciją, kuri priima tekstą kaip argumentą ir grąžina jį atvirkštine tvarka.


function palindrom(text3) {
    const charcters = text3.split('');
    const palindrom = charcters.reverse().join('');
    return palindrom;
}

console.log(palindrom("Alus"));
console.log(palindrom("kedes"));

//9. Parašykite funkciją, kuri nustato, ar pateiktas tekstas yra palindromas.

let str1 = 'nitian';
let str2 = 'sigis';

function palindrom1(str) {
    let j = str.length -1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

console.log(palindrom1(str1));
console.log(palindrom1(str2));

// 10. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra lyginis, ir false, jei skaičius yra nelyginis.

const number2 = 6;
const number3 = 5;

function check(number) {
    if(number % 2 == 0) {
        return true;
    }
    return false;
}

console.log(check(number2));
console.log(check(number3));

//11.  Parašykite funkciją, kuri priima tekstą ir dvi eilutes: pakeistiną simbolį ir pakeitimo simbolį. Funkcija grąžina naują tekstą su pakeistais simboliais.

const str = "As manau, kad suo yra geriau!"
const newstr = str.replace(/suo/i, "kate");
console.log(newstr);


// 12. Sukurkite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir konvertuoja ją į Farenheito laipsnius.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(28));

// 13.  Parašykite funkciją, kuri priima masyvą ir grąžina naują masyvą be dublikatų.

let arr2 = [2, 4, 6, 8, 6, 4, 2];

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr2));

// 14. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra pirminis, ir false, jei ne.

function prime(num6){
    if (num6 <= 1) {
        return true;
    }
    for (let i = 2; i => Math.sqrt(num6);
    i ++) {
        if (num6 % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(prime(1));
console.log(prime(2));

//14. Parašykite funkciją, kuri priima masyvą skaičių ir grąžina jį surikiuotą mažėjančia tvarka.

const arr3 = [54,23,12,97,100];
 
function arrSort(arr) {
    arr.sort((a,b)=>a-b);
    arr.reverse();
    return arr;
}
 
console.log(arrSort(arr3));

// 15.  Sukurkite funkciją, kuri priima du skaičius kaip pradžios ir pabaigos intervalo ribas ir grąžina visų skaičių, esančių tame intervale, sumą

function sumRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum +=i;
    }
    return sum;
}
console.log(sumRange(1, 5));

//17.  Parašykite funkciją, kuri priima tekstą ir grąžina jį, pakeisdamas kiekvieną raidę į sekantį raidę abėcėlėje.

function LetterChange (str) {
    return str.replace(/[a-zA-Z]/g, function(x) {
        return String.fromCharCode(x.charCodeAt(0)+1);
    });
}
console.log(LetterChange('a b c d e f g h i y j k l m n o p'));

//18.  Sukurkite funkciją, kuri priima gimimo metus ir grąžina asmenio amžių.

function age(dob) {
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(age(new Date(1993, 6, 21)));

// 19.Parašykite funkciją, kuri priima tekstą ir simbolį, o grąžina, kiek kartų tas simbolis pasikartoja tekste.

function count(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count += 1;
        }
    }
    return count;
}

console.log(count("pasikiskopusteliaudamas", "i"));

//20. Parašykite funkciją, kuri priima kelių masyvų sąrašą ir grąžina naują masyvą, kuris sudarytas tik iš tų elementų, kurie pasikartoja visuose pradiniuose masyvuose.
// Reikalavimai:
// Universalumas: funkcija turėtų veikti su bet kokiu masyvu sudarytu iš skaičių.
// Veiksmingumas: stenkitės optimizuoti funkciją taip, kad ji veiktų kuo efektyviau su dideliais masyvais.
// Unikalumas: grąžinamame masyve neturėtų būti pasikartojančių elementų.
