const {currentUser} = require('../database/index')

const deleteNote = (idNote)=>{
    console.log(currentUser)
    const noteDeleted = currentUser.notes.find(note => note.id === idNote)
    if (!noteDeleted) throw Error('id is not found')
    currentUser.notes = currentUser.notes.filter(note => note.id !== idNote)
    return noteDeleted
}

module.exports = deleteNote