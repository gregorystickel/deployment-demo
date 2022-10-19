const express = require('express')
const cors = require('cors')
const port= process.env.PORT || 4000 
const app = express()

app.use(express.json())
app.use(cors())

const {getHTML, getCSS, getJS} = require('./controller')
app.get('/', getHTML)
app.get('/css', getCSS)
app.use(express.static('/client'))
app.get('/js', getJS)


app.listen(port, console.log(`Server running on ${port}`))