const express = require('express')
const router = require('./routes/routes')
const db= require('./db')
const Cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require("cookie-parser");
dotenv.config()

//App config
const app = express();
const port = process.env.PORT || 8000

//Middleware
const corsOptions = {
  origin: 'http://localhost:5173', // Update with your frontend URL
  credentials: true,
};

app.use(Cors(corsOptions));
// app.use(Cors());
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use("/api",router);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log("Server successfully started at port ", port);
  });