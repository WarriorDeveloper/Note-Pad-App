const router = require('express').Router()
const db = require('../database/index')

// CONTROLLERS
const getNotes = require('../controllers/getNotes')
const addNote = require('../controllers/addNote')
const deleteNote = require('../controllers/deleteNote')

router.get('/', (req, res)=>{
    // if (Object.entries(db.currentUser).length === 0) res.redirect('/')
    const notes = getNotes(db.currentUser)
    res.status(200).json(notes)
})

router.get('/add', (req, res)=>{
    // if(Object.entries(db.currentUser).length === 0) res.redirect('/')
    const {title, description, image} = req.body
    if (!title || !description) return res.status(400).json({ error: 'missing data' })
    const newNote = addNote(db.currentUser, title, description, image)
    res.status(200).json({ message: 'note created successfully', newNote })
})

router.delete('/delete/:id', (req, res)=>{
    // if(Object.entries(db.currentUser).length === 0) res.redirect('/')
    const {id} = req.params
    if (!id) return res.status(400).json({error: 'missing data'})
    try{
        const noteDeleted = deleteNote(id)
        res.status(200).json(noteDeleted)
    } catch(err) {
        res.status(400).json({error: err.message})
    }
})

module.exports = router