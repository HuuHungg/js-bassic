let interestRate = 0.5
interestRate = 2

console.log(interestRate)
 

let name = "Mosh"
let age = 30
let isApproved = false
let firstName = undefined
let selectedColor = null

// Object
let person = {
    name: 'Mosh',
    age: 30,
    addrest: 'HN,VN'
}

person.name= 'John Mosh'

let selection = 'name'
person[selection] = 'Mary';

console.log(person.name)


// Array
let newArray = ['blue','red']
newArray[2] = 'Javascript',
newArray[3] = 'ReactJS'

console.log(newArray.length)

// Function
function greet(name, lastName) {
    console.log('毎日ITを勉強してる頑張りましょう' + name + ' ' + lastName)
}

greet('２時間ぐらい', '頑張ってください')

// Calculating a value
function square(number) {
    return number * number
}

let number = square(4)
console.log(number)

console.log(square(10))