let numbers = [1,2,3,4,5]

//map in array
let double =numbers.map(function(n){
    return n*2
})
console.log(double)
console.log(numbers)

//filter
let price = [10,25,30,5,40]

let bigNumbers = price.filter(function(n){
    return n >20
})
console.log(bigNumbers)

//find in array
let found = price.find(function(n){
    return n === 30
})
console.log(found)

//real world examples

let students = [
    { name: "Akhil", mark: 78},
    {name: "Arjun", mark: 35},
    {name: "Anu", mark: 90},
    {name: "Rahul", mark: 20}
]


//passed students
let passed = students.filter(function(s){
    return s.mark >=40
})
console.log(passed)

//name only
let names = passed.map(function(s){
    return s.name
})
console.log(names)

//find students 90 and above
let topper = students.find(function(s){
    return s.mark>=90
})
console.log(topper)

//todays taks

let amount = [100,250,50,500,120]

let withTaxAmount = amount.map(function(price){
    let finalAmount = price * 18/100 + price  
    return finalAmount
})
console.log(withTaxAmount)

let highestPrice = withTaxAmount.filter(function(sort){
    return sort >=200
})
console.log(highestPrice)

//task 2
let users = [
    {name: "Ravi", active: true},
    {name: "Manu", active: false},
    {name: "Suresh", active: true}
]

let activeUser = users.find(function(user){
    return user.active === true
})
console.log(activeUser)

//Task 3
let myStudents = [
    {name: "A", mark: 45},
    {name: "B", mark: 25},
    {name: "C", mark: 90},
    {name: "D", mark: 60}
]

let whoPassed = myStudents.filter(function(s){
    return s.mark >= 40
})
console.log(whoPassed)

let nameOnly = whoPassed.map(function(s){
    return s.name
})
console.log(nameOnly)