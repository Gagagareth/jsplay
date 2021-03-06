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
const https = require('https')
const url = "https://jsonmock.hackerrank.com/api/movies";
https.get(url, res => {
    let data = '';
    res.on('data', chunk => {
        data += chunk;
    });
    res.on('end', () => {
        data = JSON.parse(data);
        console.log(data);
    })
}).on('error', err => {
    console.log(err.message);
})

// JavaScript
async function getIPAddress() {
    const url = 'https://httpbin.org/ip';
    const response = await fetch(url);
    const json = await response.json();
    const data = json.origin;
    return data;
}

async function main() {
    try {
        const ip = await getIPAddress();
        console.log(ip);
    } catch (error) {
        console.error(error);
    }
}

//main(); 

if ('LlI' !== true) {
    console.log('whoa!');
}
// Consolas, 'Courier New', monospace
// Fira Code


