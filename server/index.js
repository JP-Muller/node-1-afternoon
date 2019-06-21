const express = require('express')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')


const app = express()
const port = 7777

app.get('/api/products', getProducts)

app.get('/api/product/:id', getProduct)


app.listen(port, () => {
    console.log(`We've got a pulse on port ${port}`)
})





