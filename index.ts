import express from 'express';

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("hi world 🌎")
})

app.listen(port, () => {
    console.log(`${port} porting 👀`)
})