const express = require('express')
const app = express()
const path = require('path')

const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('index.html')
})

app.listen(port)
console.log('Server up on port: ' + port)