// Question 1
// Write a function to print "hello_USERNAME!" USERNAME is the input of the function. The first line of the code has been defined as below.

//     def hello_name(user_name):
//         .....

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter your username:', user_name => {
    console.log(`hello_${user_name.toUpperCase()}!`); //upper case
    readline.close();
  });

            /*
            const prompt = require('prompt-sync')();

            const user_name = prompt('Enter your username:');
            console.log(`hello_ ${user_name}`)

            prompt(), only runs in browser or download and run npm for the console
            */