import cookieParser from "cookie-parser";
import express from "express";
import postRoute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js"

const app = express();
// require('dotenv').config();

app.use(express.json())
app.use(cookieParser())

app.use("/api/posts", postRoute)
app.use("/api/auth", authRoute)

app.listen(8800, () => {
    console.log("Server is running!")
})