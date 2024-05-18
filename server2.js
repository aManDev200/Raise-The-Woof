const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');

app.use(express.json());

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? 'infinite' : a / b);
const subtract = (a, b) => a - b;

const Operations = (a, b, f) => {
    try {
        const result = f(Number(a), Number(b));
        return result.toString();
    } catch (error) {
        return 'Invalid operation';
    }
};

app.get('/', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    const f = req.query.f;

    // Check if f is a valid function
    const isValidFunction = ['sum', 'multiply', 'divide', 'subtract'].includes(f);
    
    if (isValidFunction) {
        res.send(Operations(a, b, eval(f)));
    } else {
        res.send('Invalid operation');
    }
});

app.listen(port, () => {
    console.log(`The server is active on ${port}`);
});
