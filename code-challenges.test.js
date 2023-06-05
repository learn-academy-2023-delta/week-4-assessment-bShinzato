// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffles", () => {
  it("removes the first item from the array and shuffles the remaining content.", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(shuffles(colors1)).toEqual(expect.arrayContaining(colors1))
    expect(shuffles(colors2)).toEqual(expect.arrayContaining(colors2))
  })
})

//  ReferenceError: shuffles is not defined

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

const shuffles = (array) => {
  array.shift()
  return array.sort(() => {Math.random() - 1/2})
}

// console.log(shuffles(colors1))

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// Pseudo code:
// 1. create function called shuffles. Has one parameter called array.
// 2. remove first item (element) from the array. Use built in method .shift()
// 3. use .sort(), within the argument pass an anonymous function to sort from ascending order.
// 4. use Math.random() for 0 including and 1 excluding.
// 5. minus -.5 to make each element a 50/50 to be negative or positive.

// Create a function called shuffle with 1 parameter called array
const shuffle = (array) => {
  // use shift to drop the first element in the array
  array.shift()
  // use a for loop to iterate over each index
  for(let i = 0; i < array.length; i++) {
    // declare new variable. Use math.floor to round down the number. Within the argument use math.random to return a float multipled by i.
    let randomIndex = Math.floor(Math.random() * i)
    // declare a new variable set equal to array[i]
    let newIndex = array[i]
    // set array[i] equal to array[randomIndex]. This will generate a random index of array
    array[i] = array[randomIndex]
    // have array[randomIndex] equal to newIndex. 
    array[randomIndex] = newIndex
  }
  return array
}

console.log(shuffle(colors1))


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("totalTally", () => {
  it("returns end tally of up and down votes.", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    expect(totalTally(votes1)).toEqual(11)
    expect(totalTally(votes2)).toEqual(-31)
  })
})

// ReferenceError: totalTally is not defined

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

const totalTally = (tallies) => {
  return tallies.upVotes - tallies.downVotes
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

//console.log(totalTally(votes2))
// Pseudo code:
// 1. Create function called totalTally.
// 2. Has 1 parameter called tallies
// 3. Use dot notation to call upon the key value pairs.
// 4. Use arithmetic Operator -/minus to make downVotes negative. 

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noDups", () => {
  it("returns one array with no duplicate values.", () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(noDups(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

//  ReferenceError: noDups is not defined

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

const noDups = (array1, array2) => {
    return array1.concat(array2).filter((value, index, array) => {
      return array.indexOf(value) === index 
  })
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// Pseudo code:
// 1. Create a function named NoDups.
// 2. Takes two parameters, called array1, array2.
// 3. Use built in method .concat to join both arrays.
// 4. Use HOF .filter() for the boolean value. Checks for duplicates of the same strings. Has three parameters; value, index, array.
// 5. return array with built in method .indexOf(value)
        // call upon array; the array that the HOF is called upon.
        // .indexOf(value); returns the index of the value on iteration
// 6. Use strict equality operator set to index.
        // boolean value(s) sees if .indexOf(value) is strictly equal to index.
