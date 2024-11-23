const express = require('express')
const pool = require('./db/index')

const app = express()
const PORT = 3001

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ status: 'ok'})
})

app.post('/colors', (req, res) => {
    const {title, author, colors} = req.body
    const sql = `INSERT INTO palette (title, author) VALUES (?, ?)`
    

    const data =[title, author]
    try {
        pool.query(sql, data,  (error, data) => {
            if (error) throw error
    
            const {insertId: palletId} = data
            
            const valuesToInsert = colors.reduce((acc, curr) => `${acc} (${palletId}, '${curr}'),`, "").slice(0,-1)
            const sql = `INSERT INTO color (pallete_id, hex) VALUES ${valuesToInsert}`
    
            pool.query(sql, (error) => {
                if (error) throw error
    
                res.json({status: 200, data: {
                    palleteId: palletId
                }})
            })
        })
    } catch (error) {
        res.status(500).json({status: 500, message: "Houve algum problema para cadastrar a paleta de cores. Tente novamente mais tarde."})
    }
})

app.get('/colors', (_, res) => {
    try {
        const sql = 'SELECT * FROM palette ORDER BY RAND() LIMIT 1'
    
        pool.query(sql, (error, data) => {
            if (error) throw error

            const {id: palleteId, title, author} = data[0]
            const sql = `SELECT * FROM color WHERE pallete_id = ${palleteId}`

            pool.query(sql, (error, data) => {
                if (error) throw error
                
                const colors = data.map(item => item.hex)
                
                const response = {
                    title, author, palleteId, colors 
                }
                res.status(200).json({status: 200, data: response})
            })


        })
    } catch (error) {
        res.status(500).json({status: 500, message: "Ocorreu um problema ao procurar uma cor."})
    }
})

app.listen(PORT, () => {
    console.log(`app running at port: ${PORT}`)
})