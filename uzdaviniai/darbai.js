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

// Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra lyginis, ir false, jei skaičius yra nelyginis.

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