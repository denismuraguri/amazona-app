//building express server
import express from 'express'
import data from './data.js'

const app = express();

//create a route
app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.get('/', (req, res) => {
    res.send('Server is ready');
})
//to read the environment variable
const port = process.env.PORT || 5000;
{/**
    app.listen(5000, () =>{
        console.log('Serve at http://localhost:5000');
    })
*/}
app.listen(port, () =>{
    console.log(`Serve at http://localhost:${port}`);
})