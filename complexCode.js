/**
 * Filename: complexCode.js
 * Content: Complex code that demonstrates various advanced JavaScript concepts.
 */

// Utility function that generates a random number between a given minimum and maximum value
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Class representing a rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate the area of the rectangle
  getArea() {
    return this.width * this.height;
  }

  // Method to calculate the perimeter of the rectangle
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Function to check if a string is palindrome
function isPalindrome(str) {
  const sanitizedStr = str.toLowerCase().replace(/\s/g, '');

  for (let i = 0, j = sanitizedStr.length - 1; i < j; i++, j--) {
    if (sanitizedStr[i] !== sanitizedStr[j]) {
      return false;
    }
  }

  return true;
}

// Higher-order function to filter an array based on a given condition
function filterArray(arr, condition) {
  const filteredArr = [];

  for (const item of arr) {
    if (condition(item)) {
      filteredArr.push(item);
    }
  }

  return filteredArr;
}

// Array of numbers to be filtered
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Square all the even numbers and filter the odd numbers
const filteredNumbers = filterArray(numbers, (number) => number % 2 === 0);

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to check if the person is an adult
  isAdult() {
    return this.age >= 18;
  }
}

// Create an array of person objects
const persons = [
  new Person("John", 25),
  new Person("Jane", 15),
  new Person("Tom", 40),
  new Person("Alice", 10),
];

// Filter out adults from the persons array
const adults = filterArray(persons, (person) => person.isAdult());

// Class representing a car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;
  }

  // Method to accelerate the car
  accelerate() {
    this.speed += getRandomNumber(10, 20);
  }

  // Method to decelerate the car
  decelerate() {
    this.speed -= getRandomNumber(5, 10);
  }
}

// Create an instance of the Car class
const myCar = new Car("Toyota", "Camry", 2020);

// Accelerate the car 10 times
for (let i = 0; i < 10; i++) {
  myCar.accelerate();
}

// Decelerate the car 5 times
for (let i = 0; i < 5; i++) {
  myCar.decelerate();
}

// Calculate the area of a rectangle with width 5 and height 10
const rectangle = new Rectangle(5, 10);
const area = rectangle.getArea();

console.log(area); // Output: 50

// Check if the string "level" is palindrome
console.log(isPalindrome("level")); // Output: true

// Print the filtered even numbers
console.log(filteredNumbers); // Output: [2, 4, 6, 8, 10]

// Print the filtered adults
console.log(adults);

// Print the current speed of the car
console.log(myCar.speed);

// Print the perimeter of the rectangle
console.log(rectangle.getPerimeter()); // Output: 30