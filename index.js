let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
const enquiryRouter = require("./App/routes/web/enquiryRoutes");
require("dotenv").config()
let app = express();
app.use(cors())

app.use(express.json())

//Routes

app.use("/api/website/enquiry", enquiryRouter)

//http://localhost:8020/api/website/enquiry/insert




// connect to mongoose

mongoose.connect(process.env.DBURL).then(() => {
    console.log("Connect to MongoDB")
    app.listen(process.env.PORT || 3000, () => { //http://localhost:8020
        console.log("Server is running")
    })
}).catch((err) => {
    console.log(err)
})
