/*
 * Create a new object as an object literal. You can be creative and use anything you'd like as your
 * object, but you must complete the following requirements:
 *   - it must have four properties using at least two data types
 *   - it must contain two methods
 *   - one of the methods must use the "this" keyword to interact with one of the object's properties
 *   - show that your object properties and methods work by using them and logging the results to the console
 */

// Begin writing your code below

class PeterBParker {
    constructor(name, age, weight, isSpiderman) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.isSpiderman = isSpiderman;
    }
}        

const peter = new PeterBParker("Peter B. Parker", 38, "A little pudgy", true);
console.log(peter.name);
console.log(peter.age);
console.log(peter.weight);
console.log(peter.isSpiderman);
