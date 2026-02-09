//basic array
let numbers = [10,20,30,40,50]
console.log(numbers)
console.log(numbers[0])
console.log(numbers[4])

//loop through arrays
for (let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}

//find sum of array
let sum=0
for (let i=0; i<numbers.length; i++){
    sum+=numbers[i]
}
console.log("sum of numbers:",sum)

//find largest number in an array
let findLarge = numbers[0]
for (let i=0; i<numbers.length; i++){
    if(findLarge < numbers[i]){
        findLarge=numbers[i]
    }
}
console.log("largest number in array:",findLarge)

//objects basics
let student = {
    name: "Sravan NK",
    age: 28,
    course: "React"
}
console.log(student)
console.log(student.name)
console.log(student.age)
console.log(student.course)

//array of objects
let ourStudents = [
    {name: "Akhil", mark: 78},
    {name: "Arjun", mark: 35},
    {name: "Anu", mark: 90}
]

for (let i=0; i<ourStudents.length; i++){
    console.log(ourStudents[i].name)
    console.log(ourStudents[i].mark)
}

//today tasks
let price = [78,899,23,149,2999]

//find sum of array
let findSum = 0
for (let i=0; i<price.length; i++){
    findSum+=price[i]
}
console.log("sum of the price is:",findSum)

//finding largest in a price array
let findHighest=price[0]
for (let i=0; i<price.length; i++){
    if (findHighest<price[i]){
        findHighest=price[i]
    }
}
console.log("Highest price in the array is:",findHighest)


//array of students
let myStudents = [
    {name: "X", mark: 50},
    {name: "Y", mark: 30},
    {name: "Z", mark: 80}
]

//passed students list
let passedStudents = "Passed Students:"
for (let i=0; i<myStudents.length; i++){
    if (myStudents[i].mark >= 40){
        passedStudents+=myStudents[i].name + " "
    }
}
console.log(passedStudents)

//class toper
let classToper = myStudents[0].mark
for (let i=0; i<myStudents.length; i++){
    if (classToper < myStudents[i].mark){
        classToper=myStudents[i].name
    }
}
console.log("Exam topper is:",classToper)