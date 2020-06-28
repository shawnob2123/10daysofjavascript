// classes are 'special functions'

class Polygon { //class declaration 
  constructor(sides) { // constructor method is a special method for creating and initializing an object created with a class
      this.sides = sides; // accessing sides object = sides
  }

  perimeter() { // perimeter method
      let sum = 0;
      for(let i = 0; i < this.sides.length; i++) {
          sum += this.sides[i]; // sum = sum + sides object iterated 
      }
      return sum;
  }
}
