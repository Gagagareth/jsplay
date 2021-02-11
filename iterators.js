const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const chars1 = [], chars2 = [], chars3 = [];
const nums1 = [], nums2 = [];
let nums3 = [], nums4 = [], nums5 = [];
let objs1 = [];

for (let i = 0; i < alphabet.length; i++) {
    const a = alphabet[i];
    chars1.push(a);
    chars2.push(a + a);
    chars3.push(a + a + a);
    nums1.push(i);
    nums2.push(i * 10);
    nums3.push(i * 100);
    objs1.push({
        single: a,
        double: a + a,
        triple: a + a + a,
        unit: i,
        ten: i * 10,
        hundred: i * 100
    });
}
var mycar = { make: 'BMW', model: '325i', year: 2007, colour: 'silver' };

// Above is just data to use Below is use, functions and feedback
//----------------------------------------------------------------------------------------------------------------------------------------------------

console.log('Hey!');

var x = 'x', y = 'y';
function funcOne() {
    console.log('funcOne');
}

var litTwo = {
    x,
    y,
    funcOne,
    functwo() {
        console.log('funcTwo');
    }
};

let someString = 'hi';
console.log(typeof someString[Symbol.iterator]); // "function"

let iterator = someString[Symbol.iterator]();
console.log(iterator + ''); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }

console.log([...someString]); // ["h", "i"]

// need to construct a String object explicitly to avoid auto-boxing
let twoString = new String('Two string!');
console.log([...twoString]);

// Redefine the iteration behavior by supplying our own @@iterator:
twoString[Symbol.iterator] = function () {
    return {
        // this is the iterator object, returning a single element (the string "bye")
        next: function () {
            return this._first ? {
                value: 'bye',
                done: (this._first = false)
            } : {
                    done: true
                }
        },
        _first: true
    };
};
console.log([...twoString]);

// need to construct a String object explicitly to avoid auto-boxing
let threeString = new String('Three string!');
// console.log(threeString);
// console.log([...threeString]);

// Redefine the iteration behavior by supplying our own @@iterator:
threeString[Symbol.iterator] = function* () {
    yield this;
};

for (let char of threeString) {
    console.log(char);
}

for (let char in threeString) {
    console.log(char);
}
