'use strict';

var myObj = {
    myPropOne: 1,
    myPropTwo: 2
};

// modify property descriptor
Object.defineProperty( myObj, 'myPropThree', {
    value: 3,
    writable: false,
    configurable: false,
    enumerable: true
} );

console.log(myObj);

var obj2 = {};

Object.defineProperties(obj2, {
    prop1: {},
    prop2: {
    value: 2,
    writable: true,
    configurable: true,
    enumerable: false
    },
    prop3: {
    value: 3,
    writable: true,
    configurable: false,
    enumerable: true
    },
    prop4: {
    value: 4,
    writable: true,
    configurable: true,
    enumerable: false
    }
});

obj2.prop5 = 5;

console.log(obj2);

let descriptor1 = Object.getOwnPropertyDescriptor(
    obj2, 'prop1'
);
console.log( descriptor1 );

let descriptor5 = Object.getOwnPropertyDescriptor(
    obj2, 'prop5'
);
console.log( descriptor5 );

var obj3 = Object.create(Object.prototype, {prop1: {value: 30, writable: true, configurable: true, enumerable: false}});
console.log( obj3 );

var obj4 = Object.create(null, { prop1: {value: 40}});
console.log( obj4 );

var obj5 = { prop1: Object.create(null, { prop1: {value: 40}})};
console.log( obj5 );

//Main taxonomic ranks
//Latin	English
//vitae	life
//regio	domain
//regnum	kingdom
//phylum	phylum (in zoology)
//classis	class
//ordo	order
//familia	family
//genus	genus
//species	species


function Life(name) {
    this.name = name;
}

function Domain(name) {
    this.name = name;
}

function Kingdom(name) {
    this.name = name;
}

function Phylum(name) {
    this.name = name;
}

function Class(name) {
    this.name = name;
}

function Order(name) {
    this.name = name;
}

function Family(name) {
    this.name = name;
}

function Genus(name) {
    this.name = name;
}

function Species(name) {
    this.name = name;
}
