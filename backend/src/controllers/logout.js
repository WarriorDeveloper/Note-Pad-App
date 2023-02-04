let db = require('../database/index')

const logout = ()=>{
    db.currentUser = {}
    return {message: 'session closed successfully'}
}

module.exports = logout