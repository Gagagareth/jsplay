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
// Above is just data to use
// Below is use, functions and feedback

// objs1.forEach((val, index) => _d(`${val.single} ${val.double} ${val.triple} ${val.unit} ${val.ten} ${val.hundred}`));
const reducerFunction = (cur, val) => cur + val;
const initialValue = 0;
const aggregate3 = nums3.reduce(reducerFunction, initialValue);
d('total ' + aggregate3);

var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // returns true
1 in mycar; // returns true
l(mycar instanceof Array);
l(nums2 instanceof Object);
l(nums3);
