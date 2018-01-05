// ---------------------- Basic Iterator ------------------------------
let ids = [9001, 9002, 9003];
// console.log(typeof ids[Symbol.iterator]);
let it = ids[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// ---------------------- Custom Iterator ------------------------------
let IdMaker = {
  [Symbol.iterator]() {
    let nextId = 8000;
    return {
      next() {
        let value = nextId > 8002 ? undefined : nextId++;
        let done = !value;
        return {
          value,
          done
        };
      }
    };
  }
};

let it = IdMaker[Symbol.iterator]();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

for (v of IdMaker) {
  if (v > 8003) break;
  console.log(v);
}

// ---------------------- Spread operator on Iterator ------------------------------
let ids = [8000, 8001, 8002];
function processx(id1, id2, id3) {
  console.log(id3);
}
processx(...ids);
