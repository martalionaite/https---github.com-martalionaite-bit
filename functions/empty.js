/*
FUNCTION - funkcija
perpanaudojamas logikos blokas
*/

function trys() {
    return 3;

}

function penki () {
    //funkcijos logikos blokas
    return 5;
}


const ats1 = penki();
console.log(ats1);

const ats2 = trys();
console.log(ats2);

const ats3 = penki();
console.log(ats3);

const ats4 = trys();
console.log(ats4);

console.log(penki());
console.log(trys());


function kazkasNaujo () {
    777;
}

console.log(kazkasNaujo());

function pomidoras (){
    console.log('va suveike pomidoras...');
    return 123; //kol kas tai kaip beprasme reiksme
}

pomidoras();           //nes nieko su ja nedarome
pomidoras();
pomidoras();
pomidoras();
pomidoras();


