const express = require('express')
const app = express()
const port = 4200

app.get('/', (req, res) => res.send('RCb vs SRH. RCB: 268/2 , SRH: 128/10'))

app.listen(port, () => console.log(`No, No We are not 420!  ${port}!`))
