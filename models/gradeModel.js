const mongoose = require("mongoose")


const gradeSchema = new mongoose.Schema({
    StudentId: {required: true, type: String},
    Profession: String,
    Score: Number,
})

module.exports = mongoose.model("grade", gradeSchema)