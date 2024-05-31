const express = require('express')
const app = express();
const port = 8000;



 require("./configs/database")

app.use(express.json())
const studentController = require("./controllers/studentController")
const gradeController = require("./controllers/gradeController")
app.use("/student", studentController)
app.use("/grade", gradeController)



app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});