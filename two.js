function log( logMessage ) {
    // return decorator function
    return function ( target, property, descriptor ) {
        // save original value, which is method (function)
        let originalMethod = descriptor.value;
        // replace method implementation
        descriptor.value = function( ...args ) {
            console.log( '[LOG]', logMessage );
            // here, call original method
            // `this` points to the instance
            return originalMethod.call( this, ...args );
        };
        return descriptor;
    }
}
class User {
    constructor( firstname, lastName ) {
        this.firstname = firstname;
        this.lastName = lastName;
    }
    //@log('calling getFullName method on User class')
    getFullName() {
        return this.firstname + ' ' + this.lastName;
    }
    
    static getVersion() {
    return 'v1.0.0';
}
}
var user = new User( 'John', 'Doe' );
//console.log(user);
//console.log( user.getFullName() );
//console.log(User.getVersion());

const sayHello = function sayHello() {
    return 'Hello!';
}

//console.log(sayHello);
//console.log(sayHello.name);

function first () {
  var firstFunctionVariable = 'First!';
}

function second () {
  console.log(first.firstFunctionVariable = 'second');
  first();
}
//console.log(second());

function secret (secretCode) {
  return {
    saySecretCode () {
      console.log(secretCode);
    }
  }
}

const theSecret = secret('CSS Tricks is amazing');
console.log(theSecret);
theSecret.saySecretCode();