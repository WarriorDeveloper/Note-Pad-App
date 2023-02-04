const router = require('express').Router()

// CONTROLLERS
const login = require('../controllers/login')
const logout = require('../controllers/logout')

router.get('/in', (req, res)=>{
    const {username, password} = req.query
    if (!username || !password) return res.status(400).json({ error: 'missing data' })
    try{
        const response = login(username, password)
        res.status(200).json({message: 'login successfully', user: response})
    } catch(err) {
        res.status(400).json({error: err.message})
    }
})

router.get('/out', (req, res)=>{
    const response = logout()
    res.status(200).json({message: response.message})
})

module.exports = router