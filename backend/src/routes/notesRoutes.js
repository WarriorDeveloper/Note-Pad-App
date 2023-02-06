const router = require('express').Router()
const db = require('../database/index')
const auth = require('../middleware/auth')

// CONTROLLERS
const getNotes = require('../controllers/getNotes')
const addNote = require('../controllers/addNote')
const deleteNote = require('../controllers/deleteNote')

router.get('/',auth, (req, res)=>{
    const notes = getNotes(req.user.id, db)
    res.status(200).json(notes)
})

router.get('/add',auth, (req, res)=>{
    const {title, description, image} = req.body
    if (!title || !description) return res.status(400).json({ error: 'missing data' })
    const newNote = addNote(req.user.id, db, title, description, image)
    res.status(200).json({ message: 'note created successfully', newNote })
})

router.delete('/delete/:id',auth, (req, res)=>{
    const {id} = req.params
    if (!id) return res.status(400).json({error: 'missing data'})
    try{
        const noteDeleted = deleteNote(req.user.id, db, id)
        res.status(200).json(noteDeleted)
    } catch(err) {
        res.status(400).json({error: err.message})
    }
})


module.exports = router