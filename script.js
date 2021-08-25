//console tricks from https://youtu.be/Mus_vwhTCq0

const first = { name: "1", age: "11", hero: true };
const second = { name: "2", age: "22", hero: false };
const third = { name: "3", age: "33", hero: true };

console.log("%c lacjnote", "color: orange");
console.log({
  first,
  second,
  third,
});

console.log("%c lacjnote 2", "color: red");
console.table([first, second, third]);

console.log("%c lacjnote 2", "color: blue");

console.time("looper");

let i = 0;
while (i > 1000000) {
  i++;
}
console.timeEnd("looper");

console.log("%c lacjnote 3", "color: hotpink");

const whereIsIt = () => console.trace("here we are");

whereIsIt();
whereIsIt();
