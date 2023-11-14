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
app.use(express.static(__dirname, + '/public'))

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

// get one routes

app.get('/api/owners/:id', async (req, res) => {
    try {
        const {id} = req.params
        const { rows } = await pool.query(`SELECT * FROM owners WHERE id = ${id};`)

        if (rows.length === 1) {
            res.status(200).json(rows)
        } else {
            res.status(404).send('Not Found')
        }

    } catch (error) {
        res.status(500).send('Server Error')
        res.json(error)
    }
})

app.get('/api/pets/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await pool.query(`SELECT * FROM pets WHERE id = ${id};`);

        if (rows.length === 1) {
            res.status(200).json(rows);
        } else {
            res.status(404).send('Not Found');
        }

    } catch (error) {
        res.status(500).send('Server Error');
        console.error(error);
    }
});

app.post('/api/owners', async (req, res) => {
    const owner = req.body
    if ([owner.firstName, owner.lastName, owner.gender].includes(undefined)) {
        res.status(400).send('Bad Request')
    } else { 
        try {
            const { rows } = await pool.query(`INSERT INTO owners (firstname, lastname, gender) VALUES ($1, $2, $3) RETURNING *;`, [
                owner.firstName,
                owner.lastName,
                owner.gender
            ]);
            res.status(201).json(rows[0])
        } catch (error) {
            res.status(500).json(error)
            res.send('Internal Server Error')
        }
    }
})

app.post('/api/pets', async (req, res) => {
    const newPet = req.body
    if ([newPet.name, newPet.kind, newPet.age, newPet.ownerid].includes(undefined)) {
        res.status(400).send('Bad Request')
    } else { 
        try {
            const { rows } = await pool.query(`INSERT INTO pets (name, kind, age, ownerid) VALUES ('${newPet.name}', '${newPet.kind}', ${newPet.age}, ${newPet.ownerid}) RETURNING *;`)
            res.status(201).json(rows[0])
        } catch (error) {
            res.status(500).json(error)
            res.send('Internal Server Error')
        }
    }
})

app.put('/api/owners/:id', async (req, res) => {
    const updatedOwner = req.body
    const { id } = req.params

    if (id >= 0){
        try {
            const { rows } = await pool.query(`UPDATE owners SET firstname = '${updatedOwner.firstName}', lastname = '${updatedOwner.lastName}', gender = '${updatedOwner.gender}' WHERE id = ${id} RETURNING *;`)

            if (rows.length === 1) {
                res.status(200).json(rows)
            } else {
                res.status(404).send('Not Found')
            }
        } catch (error) {
            res.status(500).send('Internal Service Error')
        }
     } else {
        res.status(400).send('Bad Request')
     }
})

app.put('/api/pets/:id' , async (req, res) => {
     const updatedPet = req.body
     const { id } = req.params

     if (id >= 0) {
        try {
            const { rows } = await pool.query(`UPDATE pets SET name = '${updatedPet.name}', kind = '${updatedPet.kind}', age = ${updatedPet.age}, ownerid = ${updatedPet.ownerid} WHERE id = ${id} RETURNING *;`)

            if (rows.length === 1) {
                res.status(200).json(rows)
            } else {
                res.status(404).send('Not Found')
            }
        } catch (error) {
            res.status(500).send('Internal Service Error')
        }
     } else {
        res.status(400).send('Bad Request')
     }
})

app.delete('/api/owners/:id', async (req, res) => {
    const { id } = req.params
    if (id >= 0) {
        try {
            const { rows } = await pool.query(`DELETE FROM owners WHERE id = ${id} RETURNING *;`)

            if (rows.length === 1) {
                res.status(200).json(rows)
            } else {
                res.status(404).send('Not Found')
            }
        } catch (error) {
             res.status(500).send('Internal Server Error')
        }
    } else {
        res.status(404).send('Bad Request')
    }
})

app.delete('/api/pets/:id', async (req, res) => {
    const { id } = req.params
    if (id >= 0) {
        try {
            const { rows } = await pool.query(`DELETE FROM pets WHERE id = ${id} RETURNING *;`)

            if (rows.length === 1) {
                res.status(200).json(rows)
            } else {
                res.status(404).send('Not Found') 
            }
        } catch (error) {
            res.status(500).send('Internal Server Error')
        }
    } else {
        res.status(404).send('Bad Request')
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})