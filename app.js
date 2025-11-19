/* 
Data Types:

1. String
2. Number
3. Boolean
4. undefined
5. null
6. Array
7. Objects
*/

// declaring a new student
const myStudent = {
    name: 'Khaled',
    city: 'Manama',
    phoneNumber: 59667941,
    isStudent: true,
    course:'SEB',
}

console.log(myStudent)

console.log(myStudent.name)

console.log(myStudent.city)


console.log('I am ' + myStudent.name + ' and I am from ' + myStudent.city)


// updating a key value pair (property)
myStudent.city = 'Galali'

console.log(myStudent)


// Adding a new key value pair
myStudent.email = 'khaled@gmail.com'

console.log(myStudent)


// deleting a key value pair
delete myStudent.course
console.log(myStudent)


const allStudents = []

allStudents.push(myStudent)


const ahmedStudent = {
    name:'ahmed',
    isStudent:true,
    
}
console.log(allStudents.length)
