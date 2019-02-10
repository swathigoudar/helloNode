const express = require('express')
const app = express()
const port = 4200

app.get('/', (req, res) => res.send('Hello World, This is toe check the updated code!'))

app.listen(port, () => console.log(`New Zealand is 150/3 in 14.4 overs.  ${port}!`))
