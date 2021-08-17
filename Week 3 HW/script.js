// // Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// // Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let firstMinusLast = ages[ages.length - 1] - ages[0];
console.log(firstMinusLast);

// // Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

let pushNumber = ages.push(7);
console.log(ages);

// // Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let total = 0;
let avg = 0;

for (let i = 0; i < ages.length; i++) {
    total += ages[i];
    avg = total / ages.length;
}
console.log(avg);

// // Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// // Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

let ageTotal = ""
let nameAvg = "";

for (let i = 0; i < names.length; i++) {
    ageTotal += names[i];
}
console.log(ageTotal.length / names.length);

// // Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

for (let i = 0; i < names.length; i++) {
    console.log(names.join(' '));
}

// // How do you access the last element of any array?
let arry1 = [2, 4, 6, 8, 10, 12, 14, 16];
console.log(arry1[arry1.length - 1]);

// // How do you access the first element of any array?
let arry2 = [2, 4, 6, 8, 10, 12, 14, 16];
console.log(arry2[0]);

// // Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = [];

for (let i = 0; i < names.length; i++) {
    nameLengths += names[i].length;
    console.log(nameLengths.split(""));

}

// // Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.


// //                                          COME BACK TO THIS!!!
// for (let i = 0; i < nameLengths.length; i++) {
//     nameLengths += nameLengths[i];
//     console.log(nameLengths);
// }

// // Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

let word = twoParam('Hello', 3);
function twoParam(param1, param2) {
    let concatFun = param1.repeat(param2);
    console.log(concatFun);
}

// // Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

let name = fullName('Adam', 'Plon');
function fullName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
}

// // Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let aryTest7 = [7, 3, 5];


function numArry(arrayTest) {
    let sum = 0;
    for (let i = 0; i <= arrayTest.length; i++) {
        sum += arrayTest[i]
        console.log(sum);
    }
    if (sum > 100) {
        return true
    }
}

// Write a function that takes an array of numbers and returns the average of all the elements in the array.

let someNumberedArray = numAvgArr[3, 4, 5, 6, 7, 8];

let total2 = 0;
let avg2 = 0;

function numAvgArr(array18) {
    for (let i = 0; i < array18.length; i++) {
        total2 += array18[i];
    }
    let avg2 = total2 / array18.length;
    return avg2;
}

// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let arrayProblem1 = myFunction([10, 9, 8, 7, 6], [1, 2, 3, 4, 5]);

function myFunction(arrays1, arrays2) {
    let arraySum1 = 0;
    let arraySum1Avg = 0;
    let arraySum2 = 0;
    let arraySum2Avg = 0;
    for (let i = 0; i < arrays1.length; i++) {
        arraySum1 += arrays1[i];
        arraySum1Avg = arraySum1 / arrays1.length
    }
    for (let i = 0; i < arrays2.length; i++) {
        arraySum2 += arrays2[i];
        arraySum2Avg = arraySum2 / arrays2.length;
    }
    if (arraySum1Avg > arraySum2Avg) {
        return true;
    }
}

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let buyDrinkExample = willBuyDrink(true, 11);

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true
    } else {
        return false
    };

};

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//Function Should I feed my dog today?



function feedDog() {
    let bigQuestion = prompt('Is your dog alive?');
    if (bigQuestion === 'yes' || bigQuestion === 'Yes' || bigQuestion === 'YES') {
        console.log('Feed your dam dog!');
    } else {
        (':(');
    }

}

feedDog();