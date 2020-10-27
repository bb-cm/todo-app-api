const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use((req, res) => res.status(404).json({ message: 'Not found' }));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})