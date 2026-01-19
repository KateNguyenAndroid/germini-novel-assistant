const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { registerUser, loginUser } = require('./users');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const result = registerUser(username, password);
    res.send(result);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const result = loginUser(username, password);
    res.send(result);
});

app.post('/generate', (req, res) => {
    const { idea, language } = req.body;
    const generatedContent = `Generated content based on idea: "${idea}" in ${language}`;
    res.send(generatedContent);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
