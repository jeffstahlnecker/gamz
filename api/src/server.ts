import express from 'express'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import indexRouter from './routes/index'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use('/api', indexRouter)

const port = 8080 // default port to listen

app.get('/', (req, res) => {
  res.send('Hello world!')
})

// start the Express server
const server = app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
const io = require('socket.io')(server)

io.on('connection', (socket: any) => {
  console.log(`Client connected ${socket}`)
})

export default app
