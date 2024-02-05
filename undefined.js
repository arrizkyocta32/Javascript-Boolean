function test(t) {
  if (t === undefined) {
    return 'Undefined value!';
  }
  return t;
}

let x;

console.log(test(x));
// Expected output: "Undefined value!"

// DON'T DO THIS

(() => {
  const undefined = "foo";
  console.log(undefined, typeof undefined); // foo string
})();

((undefined) => {
  console.log(undefined, typeof undefined); // foo string
})("foo");

//STRICT EQUALITY AND UNDEFINED
let x;
if (x === undefined) {
  // these statements execute
} else {
  // these statements do not execute
} 

// x has not been declared before
// evaluates to true without errors
if (typeof x === "undefined") {
  // these statements execute
}

// Throws a ReferenceError
if (x === undefined) {
}

type of OPERATOR AND UNDEFINED
let x;
if (typeof x === "undefined") {
  // these statements execute
}  
// x has not been declared before
// evaluates to true without errors
if (typeof x === "undefined") {
  // these statements execute
}

// Throws a ReferenceError
if (x === undefined) {
} 

operator instance
if ("x" in window) {
  // These statements execute only if x is defined globally
}

void operator and undefined
The void operator is a third alternative

let x;
if (x === void 0) {
  // these statements execute
}

// y has not been declared before
if (y === void 0) {
  // throws Uncaught ReferenceError: y is not defined
}
