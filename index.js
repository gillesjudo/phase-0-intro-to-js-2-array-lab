// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push('Ralph');
}
function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    cats.shift();
}
function appendCat(name) {
let cats1 = [...cats ,name];
console.log(cats1);
return cats1;
}
appendCat("Bruno")
function prependCat(name) {
  let cats2 = [name, ...cats];
  console.log(cats2);
  return cats2;
}
prependCat("Arnold");
function removeLastCat() {
    let cats3 = [...cats]
    return cats3.splice(0,2)
  }
removeLastCat();
function removeFirstCat() {
    let cats4 = [...cats]
    return cats4.splice(1,2)
  }
removeFirstCat();