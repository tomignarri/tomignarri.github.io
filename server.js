const express = require('express');
const app = express();

const port = 3000;

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Ensure the file path is correct
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
