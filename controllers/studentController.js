const express = require("express")
const router = express.Router()
const studentService = require("../services/studentService")

router.get("/", async (req, res) => {
    try {
        const students = await studentService.getAllStudents()
        return res.json(students)
    } catch (e) {
        return { error: e.message }
    }

})


router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const student = await studentService.getStudentById(id)
        return res.json(student)
    } catch (e) {
        return { error: e.message }
    }
})

router.get("/category/faculty", async (req, res) => {
    try {
        const faculties = await studentService.getFaculties()
        return res.json(faculties)
    } catch (e) {
        return { error: e.message }
    }
})

router.get("/category/withgrades", async (req, res) => {
    try {
        const students = await studentService.getStudentWithGrades()
        return res.json(students)
    } catch (e) {
        return { error: e.message }
    }
})


module.exports = router