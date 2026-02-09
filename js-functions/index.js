//simple function
function sayHello(){
    console.log("Hello Sravan")
}
sayHello()

//function with input
function greet(name){
    console.log("hello",name)
}
greet("SRAVAN")
greet("Laika")

//function with return value
function add(a,b){
    return a+b
}
let result = add(10,20)
console.log("result is:",result)


//even or odd using function
function checkEvenOdd(num){
    if (num % 2 ===0){
        return "even"
    }
    else{
        return "odd"
    }
}
console.log(checkEvenOdd(35))
console.log(checkEvenOdd(10))

//pass or fail using function
function checkResult(mark){
    if (mark >= 40){
        return "pass"
    }
    else{
        return "fail"
    }
}
console.log(checkResult(34))
console.log(checkResult(58))

//largest three using function
function findLargest(a,b,c){
    if (a>b && a>c){
        return a
    }
    else if (b>a && b>c){
        return b
    }
    else{
        return c
    }
}
console.log(findLargest(34,9,7))

//find sum of numbers using fuction
function findSum(num){
    let sum=0;
    for(let i=0; i<=num; i++){
        sum+=i
    }
    return sum
}
console.log(findSum(10))
console.log(findSum(5))
