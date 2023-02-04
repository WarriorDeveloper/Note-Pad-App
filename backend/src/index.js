const app = require('./routes/index')
const PORT = process.env.PORT || 3001

app.listen(PORT, ()=> console.log(`server in port ${PORT}`))