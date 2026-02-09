let students = [
  { id: 1, name: "Akhil", mark: 78 },
  { id: 2, name: "Arjun", mark: 35 },
  { id: 3, name: "Anu", mark: 90 },
  { id: 4, name: "Rahul", mark: 20 },
  { id: 5, name: "Meera", mark: 60 }
];


//finding total marks of the class

let mark = students.map(({mark}) => mark)
let getTotalMarks = mark.reduce((sum, mark) => sum+mark)
console.log("Total marks of this class is:", getTotalMarks)

//passed students list
let getPassedStudents = students.filter(mark => mark.mark >= 40)
console.log("Passed students: ",getPassedStudents)

//passed students name
let passedStudentsName = getPassedStudents.map(( {name} ) => name)
console.log("Passed students are:", passedStudentsName)

//finding topper in class
function getTopper(students){
    let highest=0
    let topper =null
    for(let i=0; i < students.length; i++ ){
        if (students[i].mark > highest){
            highest = students[i].mark
            topper =students[i].name
        }
    }
    return {highest , topper}
}

let topperMark = getTopper(students)
console.log("Highest mark is:", topperMark,"\n","Name of class topper:",topperMark.topper)

//grade of the students
function getGrade(mark){
    if (mark >= 90){
        return "A grade"
    }
    else if (mark >= 75){
        return "B grade"
    }
    else if(mark >= 60){
        return "C grade"
    }
    else if (mark >= 40){
        return "D grade"
    }
    else{
        return "Fail"  }
}

for (let i=0; i<students.length; i++){
    let grade = getGrade(students[i].mark)
    console.log(students[i].name, "", grade)
}