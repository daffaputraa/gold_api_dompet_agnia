const express = require('express') 
const cors = require('cors') 
const UserRouter = require("./routes/UserRoute") 
const KursusRouter = require("./routes/KursusRoute") 
const KategoriRouter = require("./routes/KategoriRoute") 
const EmasRouter = require("./routes/EmasRoutes") 

const PORT = 5000;

const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(UserRouter, KursusRouter, KategoriRouter, EmasRouter)

app.listen(PORT, ()=> console.log(`Server running dengan port localhost:${PORT}`))