/**
* Using a common theme (pick whatever you like) demonstrate the use of a while loop and include the following:
* - An if (or if/else) statement inside the while loop
* - At least one comparison operator somewhere in your code
*/

// Begin writing your code below

let teenTitans = ['Robin', 'Starfire', 'Cyborg', 'Raven', 'Beast Boy'];

let i = 0;
while (i < teenTitans.length) {
  if (teenTitans[i].includes('e')) {
    console.log(teenTitans[i]);
  } else {
    console.log('The names ' + teenTitans[i] + ' do not include the letter e.');
  }
    i++;
}

let dcHeroes = ['Superman', 'Batman', 'Wonder Woman'];

let i = 0
while (i < dcHeroes.length) {
  if (dcHeroes[i].length > 6) {
    console.log(dcHeroes[i]);
  }
    i++;
}

let teamCount = teenTitans.length > dcHeroes.length;
console.log('Are there more Teen Titans than DC heroes?', teamCount);
