var Thing;

{
  let privateScope = new WeakMap();
  let counter = 0;

  Thing = function() {
    this.someProperty = 'foo';
    
    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function() {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function() {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"

var thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

console.log(thing.showPrivate());

console.log('-----------------------');

var moz = 'moz';
let zilla = 'zilla';

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
      console.log(moz);
      console.log(zilla);
      console.log(window);
      console.log(window.moz);
      console.log(window.zilla);
  }
  displayName();
}
init();

console.log('-----------------------');
var title;

function makeFunc() {
  var tag = 'Mozilla';
  function displayName() {
    console.log(title);
  }
  return displayName;
}

title = 'Firefox';
var myFunc = makeFunc();
myFunc();

title = 'Chrome';
var myFunc2 = makeFunc();
myFunc();
myFunc2();
