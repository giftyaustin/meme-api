const express = require('express')
const { dbConnection } = require('./database/dbConnection')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

dotenv.config()
const app = express()
dbConnection();

const cors = require('cors')
corsOptions={origin:'http://localhost:3000', credentials:true}
app.use(cors(corsOptions))

app.use(express.json())
app.use(cookieParser())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });
const {signupRouter} = require('./Routers/signupRouter')
const {loginRouter} = require('./Routers/loginRouter')
const {imageRouter} = require('./Routers/imageRouter')
const { errorHandler } = require('./errorHandling/errorHandler')
const { userRouter } = require('./Routers/userRouter')


app.use('/', userRouter)
app.use('/signup', signupRouter)
app.use('/login', loginRouter)
app.use('/image', imageRouter)




app.use(errorHandler)
app.listen(5000, ()=>{
    console.log("http://localhost:5000")
})