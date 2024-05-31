const express = require("express")
const router = express.Router()
const gradeService = require("../services/gradeService")

router.get("/", async (req, res) => {
    try {
        const grades = await gradeService.getAllGrades()
        return res.json(grades)
    } catch (e) {
        return { error: e.message }
    }

})


router.get("/:profession", async (req, res) => {
    try {
        const profession = req.params.profession
        const grade = await gradeService.getGradeByProfession(profession)
        return res.json(grade)
    } catch (e) {
        return { error: e.message }
    }

})



module.exports = router