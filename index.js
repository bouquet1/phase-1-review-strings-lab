// Write your code in this file!
const currentUser = 'Grace Hopper';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
//  or const welcomeMessage = "Welcome to Flatbook, " + currentUser + '!';

const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;
// or const excitedWelcomeMessage = welcomeMessage.toUpperCase; => this code didn't pass the test even though it can be written like that alternatively. (says canvas module/REAdMe.md line 231-243 but it didn't work when I run test so I wrote the code as it is said in the test fail results. also check indexTest.js line 30-31)
    // excitedWelcomeMessage
    //     1) contains "WELCOME TO FLATBOOK, "
    //     2) contains the value of the 'currentUser' variable
    //     3) ends with an exclamation point
// 

const  shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;
