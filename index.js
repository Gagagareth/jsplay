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

// Above is just data to use
// Below is use, functions and feedback

var dt = l(new Date(2016, 4, 24));
const {PI} = Math;
l(PI);
//const piVal = l(pi);

f = ({ model }) => d(model);
f(mycar);
g = ({triple}) => d(triple);
g(objs1[3]);

h = ([,,,,,a]) => d(a);
h(chars3);

let {year, ...rest} = mycar;
l(rest);
l(rest.model);

j = () => console.log(this.mycar);
j();
k = { p: 'aProperty', f: function () { console.log(this.p) } };
k.f();
