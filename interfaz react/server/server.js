const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post("/api", (req, res) => {
    console.log(req.body)
    y = (1.02589262 * req.body.x1) + 
        (1.48746607 * req.body.x2) + 
        (-1.9861158 * req.body.x3) - 
        198.45377362066;
    console.log(y)
    res.status(201).send({resultado: y})
})

app.listen(6535, () => {console.log("Ya estoy trabajando en el puerto 6535!")})