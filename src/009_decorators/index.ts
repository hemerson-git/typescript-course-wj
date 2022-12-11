// @Component
// @Selector

// Factory
// function Logger(prefix: string) {
//   return (target) => {
//     console.log(`${prefix} - ${target}`);
//   };
// }

//// Class decorator

// @Logger("test")
// class Foo {}

function setAPIVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}

// decorator - note API version
@setAPIVersion("1.0.0")
class API {}

// Property decorator

function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key];

    const getter = () => val;

    const setter = (value: string) => {
      if (value.length < length) {
        console.log(
          `Error: You can't create ${key} with less than ${length} characters.`
        );
      } else {
        val = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Movie {
  // validation - if length shorter than 5 - error
  @minLength(5)
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const movie = new Movie("Shooter");

// Method decorator

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Waiting ${ms}...`);

      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);
    };

    return descriptor;
  };
}

class Greeter {
  greeting: string;

  constructor(greeting: string) {
    this.greeting = greeting;
  }

  // Creates a delay in ms to run the method
  @delay(1000)
  greet() {
    console.log(this.greeting);
  }
}

const person = new Greeter("person!");
person.greet();

// Parameter decorator
// Accessor decorator
