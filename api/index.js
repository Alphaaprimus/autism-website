import express from "express"  
import authRoutes from "./routes/auth.js"
import usersRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import multer from "multer"


const app = express()

app.use(express.json())

// app.use(cors());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true, // Allow credentials (cookies)
  }));

app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now()+file.originalname)
    }
  })

const upload = multer({ storage })

app.post('/api/upload', upload.single('file'), function (req, res) {
    const file = req.file
  res.status(200).json(file.filename)
})



app.use("/api/posts",postRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/users",usersRoutes)







app.listen(8800,() =>{
    console.log("running on port 8800")
})  