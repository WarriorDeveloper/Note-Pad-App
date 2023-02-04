const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const loginRoute = require('./loginRoute')
const notesRoutes = require('./notesRoutes')

app.use(cors())
app.use(morgan('dev'))

app.use('/log',loginRoute)
app.use('/notes', notesRoutes)

module.exports = app