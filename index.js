const express = require('express');
const path = require('path');
const app = express();



app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/users', require('./routes/api/user'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));