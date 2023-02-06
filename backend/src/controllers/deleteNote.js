const {currentUser} = require('../database/index')

const deleteNote = (userID, usersDB, noteID)=>{
    const user = usersDB.users.find(user => user.id === userID)
    const noteDeleted = user.notes.find(note => note.id === noteID)
    if (!noteDeleted) throw Error('id is not found')
    user.notes = user.notes.filter(note => note.id !== noteID)
    return noteDeleted
}

module.exports = deleteNote