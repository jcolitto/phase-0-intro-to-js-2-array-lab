const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat() {
  cats.push("Ralph");
}
console.log(cats);

function destructivelyPrependCat() {
  cats.unshift("Bob");
}
console.log(cats);

function destructivelyRemoveLastCat() {
  cats.pop();
}
console.log(cats);

function destructivelyRemoveFirstCat() {
  cats.shift();
}
console.log(cats);

function appendCat() {
  return [...cats, "Broom"];
}

function prependCat(name) {
  return ["Arnold", ...cats];
}

function removeLastCat(name) {
  return cats.slice(0, cats.length -1);
}

function removeFirstCat() {
  return cats.slice(1);
}



