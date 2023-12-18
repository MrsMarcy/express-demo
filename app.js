const express = require('express');
const app = express()
const port = 3500

app.use(express.static('stuff'))

app.get('/colo?ur', (req, res) => {
    res.send('got you lols \n')
})

app.get(/i*flys?$/, (req, res) => {
    res.send('you can fly \n')
})

app.get(/i*apple$/, (req, res) => {
    res.send('apple \n')
})

app.route('/banana')
    .get((req, res) => {
        res.send('get request\n')
    })
    .put((req, res) => {
        res.send('get put\n')
    })
    .delete((req, res) => {
        res.send('get delete\n')
    })

app.get('/classTime/:from-to', (req,res))
app.listen(port, () => {
    console.log(`on port: ${port}`);
})