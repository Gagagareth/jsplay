function Person(first, last, age, gender, interests) {
    this.name = {
      first: first,
      last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
      alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function () {
      alert('Hi! I\'m ' + this.name.first + '.');
    };
  }
  
  let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
  
  let got = Object.getPrototypeOf(person1);
  let prot = Person.prototype;
  
  console.log(got);
  console.log(prot);
  console.log(got === prot);
  
  let individual = { name: 'Bill' };
  
  let got2 = Object.getPrototypeOf(individual);
  let prot2 = individual.__proto__;
  console.log(got2);
  console.log(prot2);
  console.log(got2 === prot2);
  console.log(individual.prototype);
  
  Person.prototype.newProp = () => true;
  // person1.prototype.newProp = function() {return true;};
  
  let np = person1.newProp();
  console.log('np');
  console.log(np);
  
  console.log(person1.prototype);
  console.log(Object.prototype);
  