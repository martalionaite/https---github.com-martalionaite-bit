function biggest (list){
   if (!Array.isArray(list)) {
    return 'ERROR: duok array tipo reiksme';
   }
let maxNumber = list[0];

for (let i = 0; i<list.length; i++) {
   if (list[i] > maxNumber) {
      maxNumber = list[i];   }
}

   return maxNumber;
    
}


console.log(biggest());
console.log(biggest('Labas'));
console.log(biggest(1526));
console.log(biggest(true));
console.log(biggest(false));
console.log(biggest(Infinity));
console.log(biggest(NaN));
console.log(biggest(biggest));
console.log(biggest(null));
console.log(biggest(undefined));
console.log(biggest({}));


console.log(biggest([1]), '---->', 1);
console.log(biggest([1, 2, 3,]), '---->', 3);
console.log(biggest([4, 5, 1, 7]), '---->', 7);
console.log(biggest([-5, 78, 14, 0, 18]), '---->', 78);
console.log(biggest([69, 69, 69, 69, 66]), '---->', 69);
console.log(biggest([-1, -2, -3, -4, -5, -6, -7, -8]), '---->', -1);
console.log(biggest([-11, -22, -23, -44, -55, -66,]), '---->', -11);

console.log(biggest[4, 5, 1, 7, 'labas','----->', 7]);
console.log(biggest[4, 5, 1, 7, 'labas','----->', 7]);