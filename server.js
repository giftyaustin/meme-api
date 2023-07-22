const express = require('express')
const { dbConnection } = require('./database/dbConnection')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')


dotenv.config()
const app = express()
dbConnection();



app.use(express.json())
app.use(cors({
  origin: [process.env.CLIENT_URI, 'http://localhost:3000'],
  methods:["GET", "POST", "PUT", "DELETE"],
  credentials:true
}))
app.use(cookieParser())


const {signupRouter} = require('./Routers/signupRouter')
const {loginRouter} = require('./Routers/loginRouter')
const {imageRouter} = require('./Routers/imageRouter')
const { errorHandler } = require('./errorHandling/errorHandler')
const { userRouter } = require('./Routers/userRouter')

app.get('/', (req, res)=>{
  res.json({success:true, message:'working'})
  
})
app.use('/', userRouter)
app.use('/signup', signupRouter)
app.use('/login', loginRouter)
app.use('/image', imageRouter)




app.use(errorHandler)
app.listen(5000, ()=>{
    console.log("http://localhost:5000")
})