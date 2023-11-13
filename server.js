const express = require('express')
const pg = require('pg')
const {Pool} = pg
const cors = require('cors')

const PORT = 3050

const app = express()

const pool = new Pool ({
    user: 'ryanpatino',
    database: 'hogwarts',
    password: 'Ryan',
    host: 'localhost',
    port: 5432
})

app.use(cors())
app.use(express.json())
app.use(express.static(__dirname, + 'public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// get all routes
app.get('/api/owners', async (req, res) => {
    try {
        const {rows} = await pool.query(`SELECT * FROM owners;`)
        res.status(200).send({rows})
    } catch (error) {
        res.status(500).send('Internal Server Error')
        res.json(error)
    }
})

app.get('/api/pets', async (req, res) => { 
    try {
        const {rows} = await pool.query(`SELECT * FROM pets;`)
        res.status(200).send({rows})
    } catch (error) {
        res.status(500).send('Internal Server Error')
        res.json(error)
    }
})


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})