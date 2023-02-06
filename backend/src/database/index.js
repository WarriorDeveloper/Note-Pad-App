const { v4: uuid } = require('uuid')

let db = {
    users: [
        {
            id: uuid(),
            username: "Yao Yao",
            password: "$2a$10$/ClPw5cPUhQtTJhAzBmj8eie5iq1dXQ1Chc50zAKxvreNB5bRwRTG",
            age: 14,
            notes: [],
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OGVjZjNlLWY4NWQtNDhkNS04ZDMyLTlhNDJmZTkwZmQ1ZSIsInVzZXJuYW1lIjoiWWFvIFlhbyIsImlhdCI6MTY3NTY4OTk3NywiZXhwIjoxNjc1Njk3MTc3fQ.PErPm2vZtjOeTtwD0bnXrwqGuz3WlGKYCID841yVdDg"
        }
    ]
}

module.exports = db