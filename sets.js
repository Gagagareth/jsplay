let mySet = new Set()

mySet.add(1)           // Set [ 1 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add('some text') // Set [ 1, 5, 'some text' ]
let o = { a: 1, b: 2 }
mySet.add(o)

mySet.add({ a: 1, b: 2 })   // o is referencing a different object, so this is okay

mySet.forEach(e => console.log(e));
