const highest = this;
console.log('highest level', highest);

const testerObject = {
  id: 'testerObject',
  func1: function() {
    const that = this;
    console.log('func1 this', this);
    const nestedFunc = function() {
      console.log('nestedFunc this', this);
      console.log('nestedFunc that', that);
    };
    nestedFunc();
    return this;
  },
  func2: () => {
    console.log('func2 this', this);
    console.log('this === highest', this === highest);
    const nestedArrow = () => {
      console.log('nestedArrow this', this);
    };
    nestedArrow();
    return this;
  }
}

console.log('tO', testerObject);

const this1 = testerObject.func1();
const this2 = testerObject.func2();

console.log(this1 === this);
console.log(this2 === this);
