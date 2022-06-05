const express = require('express')
const app = express()
const cors = require('cors')
const { request } = require('express')
const PORT = 8000

app.use(cors())

const aliens = {
    'humans': {},
    'vulcans': {},
    'klingons': {},
    'romulans': {},
    'borg': {},
    'gorn': {},
    'trill': {}
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:alienName', (req,res) => {
    const alienName = req.params.alienName.toLowerCase()
    if(aliens[alienName]){
        res.json(aliens[alienName])
    }else{
        res.json(aliens['humans'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})