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

class Foo {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
    }
}

const SomeObj = {
    *[Symbol.iterator]() {
        yield 'a';
        yield 'b';
    }
}

console.log(Array.from(new Foo)); // [ 1, 2 ]
console.log(Array.from(SomeObj)); // [ 'a', 'b' ]

function* counter(value) {
    let step;

    while (true) {
        step = yield ++value;

        if (step) {
            value += step;
        }
    }
}

const generatorFunc = counter(0);
console.log(generatorFunc.next().value);   // 1
console.log(generatorFunc.next().value);   // 2
console.log(generatorFunc.next().value);   // 3
console.log(generatorFunc.next(10).value); // 14
console.log(generatorFunc.next().value);   // 15
console.log(generatorFunc.next(10).value); // 26
