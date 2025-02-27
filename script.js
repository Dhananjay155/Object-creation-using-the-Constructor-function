function animal(noOfLegs, vegetarian) {
    return {
      noOfLegs: noOfLegs,
      vegetarian: vegetarian,
      eat: function() {
        return "eating...";
      },
      greet: function() {
        return `Hi, I have ${this.noOfLegs} legs.`;
      }
    };
  }
  
  let a1 = animal(4, true);
  console.log(a1.eat()); // "eating..."
  console.log(a1.greet()); // "Hi, I have 4 legs."

  function AnimalCF(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
    this.eat = function() {
      return "eating...";
    };
    this.greet = function() {
      return `Hi, I have ${this.noOfLegs} legs.`;
    };
  }
  
  let animalCF = new AnimalCF(4, true);
  console.log(animalCF.eat()); // "eating..."
  console.log(animalCF.greet()); // "Hi, I have 4 legs."

  class AnimalES6 {
    constructor(noOfLegs, vegetarian) {
      this.noOfLegs = noOfLegs;
      this.vegetarian = vegetarian;
    }
  
    eat() {
      return "eating...";
    }
  
    greet() {
      return `Hi, I have ${this.noOfLegs} legs.`;
    }
  }
  
  let animalES6 = new AnimalES6(4, true);
  console.log(animalES6.eat()); // "eating..."
  console.log(animalES6.greet()); // "Hi, I have 4 legs."

  let animalObj = {};
AnimalCF.call(animalObj, 4, true);
console.log(animalObj.eat()); // "eating..."
console.log(animalObj.greet()); // "Hi, I have 4 legs."

let animalObj2 = {};
AnimalCF.apply(animalObj2, [4, true]);
console.log(animalObj2.eat()); // "eating..."
console.log(animalObj2.greet()); // "Hi, I have 4 legs."
