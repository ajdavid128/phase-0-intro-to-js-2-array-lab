// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function arrayFunction() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function arrayFunction() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function arrayFunction() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function arrayFunction() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

const copyOfCats = cats.slice();

function appendCat() {
    copyOfCats.push("Broom");
    return(copyOfCats);
}

function arrayFunction() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

const copyOfCats2 = cats.slice();

function prependCat() {
    copyOfCats2.unshift("Arnold");
    return(copyOfCats2);
}

function arrayFunction() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

const copyOfCats3 = cats.slice();

function removeLastCat() {
    copyOfCats3.pop();
    return(copyOfCats3);
}

function arrayFunction() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

const copyOfCats4 = cats.slice();

function removeFirstCat() {
    copyOfCats4.shift();
    return(copyOfCats4);
}
