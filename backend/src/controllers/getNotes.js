const getNotes = (userId, usersDB)=>{
    const user = usersDB.users.find(user => user.id === userId)
    return user.notes
}

module.exports = getNotes