const express = require('express')
const app = express()
const port = 4200

app.get('/', (req, res) => res.send('Hello World, This is toe check the updated code!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
