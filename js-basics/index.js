// //Variables
// let myname = "Sravan NK"
// const age = 29
// var isDeveloper = true
// console.log(myname,age,isDeveloper)

// //data types
// let numbers =[1,2,3,4]
// let person = {
//     name: "sravan",
//     job: "future developer"
// }

// console.log(numbers)
// console.log(person)

// //operators
// let a = 10
// let b = 3
// console.log(a+b)
// console.log(a % b)
// console.log(a == "10")
// console.log(a === "10")

// //condition
// let mark = 45

// if (mark >=40){
//     console.log("pass")
// }
// else{
//     console.log("fail")
// }

// //loop
// for (let i=1; i<=5; i++){
//     console.log("count:", i)
// }



//Practice DAY-1


let usrName = "Sravan NK"
const myage = 29
let city = "Kannur"
console.log("My name is:",usrName)
console.log("My age is:",myage)
console.log("My city is:",city)

// simple calculator
let a = 10 
let b = 20
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

//even or odd number checking
let testNum = 9
if (testNum % 2 == 0){
    console.log("you have entered an even number")
}
else(
    console.log("you have entered an odd number")
)

//programme to check pass or fail

let mark = 78
if (mark >= 40) {
    console.log("pass")
}
else("fail")

//largest of three numbers
let listofNumbers = [599,34,89]
let largest=0
for(let i=0; i<=listofNumbers.length; i++){
    if (listofNumbers[i] > largest){
        largest=listofNumbers[i]
    }
}
console.log("largest number is:",largest)

//printing even numbers
let limit = 20
for (let i=1; i<=limit; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

//printing 1 to 100 using while loop
let newlimit=1
while(newlimit<=100){
    console.log(newlimit)
    newlimit++
}

//sum of numbers
let sum=0;
for (let i=0; i<=10; i++){
    sum+=i
}
console.log("sum of the ten numbers",sum)

//multiplication table of 5
let digit=5;
for (let i=1; i<=10; i++){
    console.log(i,"x",digit, "=",i*digit)
}

//reverse printing

for (let i =10; i>=1; i--){
    console.log(i)
}