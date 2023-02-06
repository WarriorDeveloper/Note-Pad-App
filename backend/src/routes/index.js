require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const { v4: uuid } = require('uuid')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const auth = require('../middleware/auth')

const app = express()

const notesRoutes = require('./notesRoutes')

app.use(cookieParser())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

const db = require('../database/index')

app.post('/register', async (req, res)=>{
    const {username, password, age} = req.body
    if (!username || !password || !age) return res.status(400).json('All input is required')
    const oldUser = db.users.find(user => user.username === username)
    if (oldUser) return res.status(409).json({message: 'User Already Exist. Please Login'})

    const encryptedPassword = await bcrypt.hash(password, 10)

    const user = {
        id: uuid(),
        username,
        password: encryptedPassword,
        age,
        notes: []
    }
    db.users.push(user)

    const token = jwt.sign(
        {id: user.id, username: user.username},
        process.env.TOKEN_KEY,
        { expiresIn: '2h' }
    )
    user.token = token
    res.cookie('jwt', token, {
        maxAge: 60 * 60 * 1000
    })
    res.status(201).json(user)
})

app.post('/login', async(req, res)=>{
    const {username, password} = req.body
    if (!username || !password) return res.status(400).json({ error: 'All input is required' })
    const user = db.users.find(user => user.username === username)
    if (user && (await bcrypt.compare(password, user.password))){
        const token = jwt.sign(
            {id: user.id, username: user.username},
            process.env.TOKEN_KEY,
            { expiresIn: '2h' }
        )
        //user.token = token
        res.cookie('jwt', token, {
            maxAge: 60 * 60 * 1000
        })
        return res.status(200).json(user)
    }
    res.status(400).json({error: 'Invalid Credentials'})
})

app.get('/logout', auth ,(req, res)=>{
    res.clearCookie('jwt')
    res.status(200).json({message: 'closed session'})
})

app.get('/welcome', auth, (req, res)=>{
    res.json({
        message: 'Welcome',
        user: req.user
    })
})

app.use('/notes', notesRoutes)

// app.use('/log',loginRoute)
// app.use('/notes', notesRoutes)

module.exports = app