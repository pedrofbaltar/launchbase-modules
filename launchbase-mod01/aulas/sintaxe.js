// Sintáxe
const classA = [
    {
        name: "Pedro",
        grade: 9.8 
    },
    {
        name: "Felipe",
        grade: 10
    },
    {
        name: "Baltar",
        grade: 2
    },
    {
        name: "One more student",
        grade: 10
    }
]

const classB = [
    {
        name: "Enzo",
        grade: 10
    },
    {
        name: "Luana",
        grade: 0
    },
    {
        name: "Waldir",
        grade: 0
    },
    {
        name: 'New student',
        grade: 0
    }
]


function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / 3
    return average
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)


function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congrats!`)
    } else {
        console.log(`${turma}  average: ${average}. Is not good.`)
    }
}

sendMessage(average1.toFixed(2), 'Class A')
sendMessage(average2.toFixed(2), 'Class B')


function markAsFlunked(student) {
    student.flunked = false
    if (student.grade < 5) {
        student.flunked = true
    } 
}

markAsFlunked(classA)
markAsFlunked(classB)


function sendFlunkedMessage(student) {
    if(student.flunked) {
        console.log(`${student.name} flunked!`)
    }
}

function studentsReprovados(students) {
    for (let student of students) {
       markAsFlunked(student)
       sendFlunkedMessage(student) 
    }
}

studentsReprovados(classA)
studentsReprovados(classB)