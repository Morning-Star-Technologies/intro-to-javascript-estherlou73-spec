/*
* Using a common theme (pick whatever you like) demonstrate two of the
* following categories of operators:
*
* - Arithmetic Operators (+, -, *, /)
* - Comparison Operators (===, !==, >, <, >=, <=)
* - Logical Operators (&&, ||, !)
* - String Operator (+)
*
* You will need to create variables to hold values and then log some
* sort of output to the console that demonstrates the use of these operators.
*
* Example:
*    let peasantHealth = 50;
*    const wolfDamage = 20;
*    peasantHealth = peasantHealth - wolfDamage;
*    console.log('The peasant has', peasantHealth, 'health left after the wolf attack.');
*/

// Begin writing your code below

/*Assignment Operators*/
let nightwingHealth = 100;
const jokerDamage = 25;
nightwingHealth = nightwingHealth - jokerDamage;
console.log('Nightwing is down by', jokerDamage, 'points and has', nightwingHealth, 'health left.');

/*Comparison Operators*/
let isNightwingAlive = nightwingHealth > 0;
console.log('Is Nightwing alive?', isNightwingAlive);
let isJokerStrongerThanNightwing = jokerDamage > nightwingHealth;
console.log('Is the Joker stronger than Nightwing?', isJokerStrongerThanNightwing);

/*Logical Operators*/
let isNightwingInDanger = isNightwingAlive && isJokerStrongerThanNightwing;
console.log('Is Nightwing in danger?', isNightwingInDanger)
let shouldNightwingRunAway = isNightwingInDanger || nightwingHealth < 30;
console.log('Should Nightwing run away?', shouldNightwingRunAway);

/*String Operator*/
let nightwingSecretIdentity = 'r' + 'i' + 'c' + 'h' + 'a' + 'r' + 'd' + ' '+ 'g' + 'r' + 'a' + 'y';
console.log('Nightwing\'s secret identity is', nightwingSecretIdentity);

/* was reading a DC teen titans graphic novel and decided to theme
this off of it lol */