const { v4: uuid } = require('uuid')

let db = {
    users: [
        { id: uuid(), username: 'Lisa', password: 'lisaElectro', age: 32, notes: [] },
        { id: uuid(), username: 'Rosaria', password: 'tempanoHielo', age: 24, notes: [] },
        { id: uuid(), username: 'Xianling', password: 'comida', age: 14, notes: [] }
    ],
    currentUser: {}
}

module.exports = db