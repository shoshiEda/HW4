const mongoose = require("mongoose")


const studentSchema = new mongoose.Schema({
    Name: {required: true, type: String},
    City: String,
    Faculty: String,
})

module.exports = mongoose.model("student", studentSchema)