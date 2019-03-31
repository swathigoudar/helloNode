const express = require('express')
const app = express()
const port = 4200

app.get('/', (req, res) => res.send('RCB vs SRH. RCB: 268/2 , SRH: 128/10, Ee Sala Cup Namde!! And  What do we do after each match? https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-qoacubcg7ht53umeo8npdsvbc1-20180827232157.Medi.jpeg '))

app.listen(port, () => console.log(`No, No We are not 420!  ${port}!`))
