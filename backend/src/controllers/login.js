let db = require('../database/index')

const login = (username, password)=>{
    const userLogin = db.users.find(user => user.username === username && user.password === password)
    if (!userLogin) throw Error('wrong username or password')
    db.currentUser = userLogin
    return userLogin
}

module.exports = login