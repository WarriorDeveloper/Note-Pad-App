const { v4 : uuid } = require('uuid')

const addNote = (user, title, description, image)=>{
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