const express = require('express');
const path = require('path');

const app = express();
const users = require('./public/Users');



app.get('/api/user/:id', (req, res) => {
    
    const found = users.some(user => user.id === parseInt(req.params.id));
    if (found) {
      
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    }
    else {
        
        res.status(400).json({ msg: 'Member not found' });
    }
});

//Get all Users
app.get('/api/user', (req, res) => {

    res.json(users);
});

app.use(express.static(path.join(__dirname, 'public')));


// app.get('/', (req, res) => {

//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));