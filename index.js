const express = require('express');
const connectDB = require('./config/db.js');
const bodyParser = require('body-parser');

const app = express();

//Connect Database
connectDB()

//Init Middleware
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send("API started")
})

// Define Routes
app.use('/api/users', require('./routes/api/users.js'));
app.use('/api/auth', require('./routes/api/auth.js'));
app.use('/api/profile', require('./routes/api/profile.js'));
app.use('/api/post', require('./routes/api/post.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
