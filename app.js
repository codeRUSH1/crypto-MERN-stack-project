const express = require('express')
const connectDB = require('./config/db')
let cors = require('cors')

// routes
const cryptos = require('./routes/api/cryptos')

const app = express()

// Connect our Database
connectDB()

// cors
app.use(cors({ origin: true, credentials: true }))

// Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('Hello world!'))

// use Routes
app.use('/api/cryptos', cryptos)

const port = process.env.PORT || 8082

app.listen(port, () => console.log(`Server running on port ${port}`))

