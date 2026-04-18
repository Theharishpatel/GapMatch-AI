const express = require("express")
const cookieParser = require("cookie-parser")

const cors = require("cors")

const app = express()


app.use(express.json())
app.use(cookieParser())

const allowedOrigin = process.env.NODE_ENV === 'production' 
            ? process.env.CLIENT_URL  // Aapki domain (e.g., https://gapmatch.ai)
            : "http://localhost:5173";
app.use(cors({
    origin: allowedOrigin,
    credentials: true
}))

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")


// using all the routes here
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)


app.get("/health", (req, res) => {
    res.status(200).send("Server is healthy!");
});



module.exports = app