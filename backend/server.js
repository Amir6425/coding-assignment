const app = require('./app');
const dotenv = require("dotenv");

const port = dotenv.config.PPRT || 5001;

app.listen(port, ()=>{
    console.log(`This server running on http://localhost:${port}`);
})