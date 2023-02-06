const { v4 : uuid } = require('uuid')

const addNote = (userID, usersDB, title, description, image)=>{

    const user = usersDB.users.find(user => user.id === userID)

    const note = {
        id : uuid(),
        title,
        description,
        image
    }

    user.notes.push(note)
    return note
}

module.exports = addNote