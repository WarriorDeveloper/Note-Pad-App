const router = require('express').Router()
const db = require('../database/index')

// CONTROLLERS
const getNotes = require('../controllers/getNotes')

router.get('/', (req, res)=>{
    if (Object.entries(db.currentUser).length === 0) res.redirect('/')
    const response = getNotes(db.currentUser)
    res.status(200).json(response)
})

module.exports = router