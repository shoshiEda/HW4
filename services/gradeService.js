const Grade = require("../models/gradeModel")

const getAllGrades = async () =>{
    const grades = await Grade.find({})
    return grades
}
const getGradeByProfession = async (profession) =>{
    const grades = await Grade.find({Profession:profession})
    return grades
}

const getGradeByStudent = async (id) =>{
    const grades = await Grade.find({StudentId:id})
    return grades
}

module.exports = {getAllGrades,getGradeByProfession,getGradeByStudent}