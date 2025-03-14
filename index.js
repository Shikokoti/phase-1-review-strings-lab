// Write your code in this file!
const currentUser = 'Grace Hopper';
//this is me creating a variable called current and assigning it a string value called Grace Hopper

//const welcomeMessage = 'Welcome to Flatbook, ';
const welcomeMessage = `Welcome to Flatbook, , ${currentUser}!`;
// if i want to add a string to my variable and js not to read it a s a string, 
// we have to inperpolate the code by ${ then the variable} all of these stored in ``
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// if i want ot upper case a variable, all i have to do is to call that variable and past to it a function 
// toUppercase() in order to change the whole text to caps!!

 const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`; 
 // the .slice truncates the string



