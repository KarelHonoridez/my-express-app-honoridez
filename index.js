const express = require('express');
const app = express();
const port = 3000;

// Middleware first
app.use(express.json());
app.use(express.static('public'));

// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Items array
let items = ['Apple', 'Banana', 'Orange'];

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const newItem = req.body.item;
    items.push(newItem);
    res.json(items);
});

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

// Error handling middleware - always LAST
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something broke!');
});
app.post('/submit', (req, res) => 
{
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

