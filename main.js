let people = ['Ellie', 'Sara', 'Robert', 'Logan']

let pets = ['Cosmo', 'Beans', 'Sully', 'Rimshot']

function greet(folks) {
  for (let index = 0; index < folks.length; index++) {
    console.log('Index number here is ', index)
    console.log('Hello, ' + folks[index] + '!')
  }
}

greet(people)
greet(pets)
greet(['Jessica', 'Jeanette', 'Dawn'])

function morningGreet(folksArray) {
  for (let folk of folksArray) {
    console.log('Good morning, ' + folk + '!')
  }
}

// I can call this function and pass in a different array each time I call it
morningGreet(people)
morningGreet(pets)

// AND! I can have an array of arrays
let folks = [people, pets]

// Then, I can loop through and call my greeting functino for each array!
for (let group of folks) {
  morningGreet(group)
}

// AFTERNOON CLASS EXAMPLES

let words = ['tapeworm', 'gnarly', 'armoire']

function transformArray(originalArray) {
  // create a new array
  const arrayOfLengths = []
  // loop over the original array
  for (const item of originalArray) {
    // for each thing in the original array, do something to transform it
    const length = item.length
    // push the transformed item into the new array
    arrayOfLengths.push(length)
  }

  // return the new array
  return arrayOfLengths
}

// console.log(transformArray(words))

function passingScore(scores) {
  let passingScores = []
  for (let score of scores) {
    console.log('score is ', score)
    console.log('Is the score greater than or eq to 60?', score >= 60)
    let trueOrFalse = score >= 60
    passingScores.push(trueOrFalse)
  }
  return passingScores
}

const scores = [91, 54, 78, 39, 81]

console.log(passingScore(scores))

for (let item of folks) {
  console.log('the value of item is: ', item)
}

// find the sum

function sum(numbers) {
  let sum = 0
  console.log('sum starts at ', sum)
  for (let score of scores) {
    console.log('Current score is ', score)
    console.log('add ' + score + ' to ' + sum)
    sum += score
    // ^ this is the same as: sum = sum + score
    console.log('sum is updated to ', sum)
  }
  console.log('now sum is ', sum)
  return sum
}

console.log(sum(scores))
