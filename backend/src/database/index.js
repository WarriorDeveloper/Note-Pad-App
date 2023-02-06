const { v4: uuid } = require('uuid')

let db = {
    users: [
        { id: uuid(), username: 'Yao Yao', password: 'rabano', age: 14, notes: [] }
    ]
}

module.exports = db