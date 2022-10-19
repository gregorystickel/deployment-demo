const express = require('express')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())

const {getHTML, getCSS, getJS} = require('./controller')
app.get('/', getHTML)
app.get('/css', getCSS)
app.use(express.static('/client'))
app.get('/js', getJS)


app.listen(4000, console.log('Server running on 4000'))