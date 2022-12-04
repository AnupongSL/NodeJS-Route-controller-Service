const express = require('express')

const app = express()

app.use(express.json())
app.use(require('./src/routes/routes'))
app.listen(3000)

//คำสั่งที่ใช้ไป
//npm init
//npm i express