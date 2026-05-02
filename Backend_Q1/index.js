const express = require('express');
const app = express();
app.use(express.json());

app.get('/',(req, res) =>{
    res.send("server is running well");
});

app.post('/test-api', (req, res) =>{
    const name = req.body.name;
    res.json({
        message: `hello ${name}, backend is working`, 
        status: "Success"
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is working on http://localhost:${PORT}`);
});