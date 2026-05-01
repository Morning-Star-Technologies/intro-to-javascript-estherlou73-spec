/**
* Using a common theme (pick whatever you like) create the following:
*
* 1. An if/else statement that evaluates to true using a boolean AND
*    comparison operator and logs a message to the console.
* 2. A switch statement with at least 3 cases and a default case that
*    logs a message to the console for each case.
*/

/* If/Else Boolean and Comparison Operator */

let dickGraysonIsRobin = true;
let dickGraysonWillBeNightwing = true;
let nightwingStrength = 100;
let robinStrength = 80;

if (dickGraysonIsRobin === true) {
    console.log('Dick Grayson is the current Robin')
}

if (nighwingStrength === 100 && robinStrength === 80 && nightwingStrength > robinStrength) {
    console.log('Nightwing is stronger than Robin')
} else {
    console.log('Nightwing is not stronger than Robin')
}

/* Switch Statement */
let batfamilyMember = 'Nightwing'

switch (batfamilyMember) {
    case 'Batman':
        console.log('This is Bruce Wayne')
        break
    case 'Nightwing':
        console.log('This is Dick Grayson')
        break
    case 'Robin':
        console.log('This is Damian Wayne')
        break
    default:
        console.log('This is not a recognized Bat-family member')
}
