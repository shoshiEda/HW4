const Student = require("../models/studentModel")
const gradeService = require("./gradeService")


const getAllStudents = async()=>{
    const students = await Student.find({})
    return students
}
const getStudentById = async (id)=>{
    const student = await Student.findById(id)
    return student
}

const getFaculties = async ()=>{
    const students = await Student.find({})
    const faculties = []
    students.forEach((student)=>{
        if(! faculties.includes(student.Faculty))
            faculties.push(student.Faculty)
    })
    return faculties
}

const getStudentWithGrades = async ()=>{
    const students = await getAllStudents()
    const studentsWithGrades = await Promise.all(students.map(async (student)=>{
        const grades = await gradeService.getGradeByStudent(student._id)
        const updatedGrades = grades.map(grade => ({Profession:grade.Profession,Score: grade.Score}))
        const { _id, Name, City, Faculty } = student._doc || student
        const updatedStudent = { _id, Name, City, Faculty, Grades: updatedGrades }
        return updatedStudent
    }))
    return studentsWithGrades
}

module.exports = {getAllStudents,getStudentById,getFaculties,getStudentWithGrades}