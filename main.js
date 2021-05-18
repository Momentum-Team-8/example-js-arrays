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
