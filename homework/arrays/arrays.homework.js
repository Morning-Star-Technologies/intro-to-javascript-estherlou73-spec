/*
* Using a common theme (pick whatever you like) complete the following:
* 
* 1. Create an array that holds five strings
* 2. Log two of the elements in the array to the console
* 3. Replace the third element in the array with a number
* 4. Add two more elements to the end of the array, but make the new elements booleans
* 5. Log all the elements and the length of the array to the console
*/

// Begin writing your code below

/* Arrays */

let teenTitans = ['Robin', 'Starfire', 'Cyborg', 'Raven'];

console.log(teenTitans[0]);
console.log(teenTitans[2]);

console.log('There are ' + teenTitans.length + ' members of the Teen Titans.');

teenTitans[3] = 5;
console.log(teenTitans);

teenTitans[5] = 'Raven';
teenTitans[6] = 'Beast Boy';

teenTitans[7] = true;
teenTitans[8] = false;

console.log(teenTitans);
