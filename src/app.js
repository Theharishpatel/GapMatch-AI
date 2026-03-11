const express = require("express")

const app = express()

app.use(express.json())

/* require all the routes here */
const authRounter = require("./routes/auth.routes")

// using all the routes here
app.use("/api/auth", authRounter)

module.exports = app