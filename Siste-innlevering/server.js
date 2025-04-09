const express = require('express'); 
const bodyParser = require('body-parser'); 
const mysql = require('mysql'); 
const bcrypt = require('bcrypt'); 
 
const app = express(); 
app.use(bodyParser.json()); 
 
const db = mysql.createConnection({ 
    host: 'localhost', 
    user: 'your_username', 
    password: 'your_password', 
    database: 'your_database' 
}); 
 
db.connect(err => { 
    if (err) throw err; 
    console.log('Database connected!'); 
}); 
 
// Signup endpoint 
app.post('/signup', (req, res) => { 
    const { username, password } = req.body; 
    const hashedPassword = bcrypt.hashSync(password, 10); 
 
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)'; 
    db.query(sql, [username, hashedPassword], (err, result) => { 
        if (err) { 
            return res.status(500).json({ message: 'Error signing up' }); 
        } 
        res.json({ message: 'Signup successful!' }); 
    }); 
}); 
 
// Login endpoint 
app.post('/login', (req, res) => { 
    const { username, password } = req.body; 
 
    const sql = 'SELECT * FROM users WHERE username = ?'; 
    db.query(sql, [username], (err, result) => { 
        if (err || result.length === 0) { 
            return res.status(401).json({ message: 'Invalid username or password' }); 
        } 
 
        const user = result[0]; 
        const isPasswordValid = bcrypt.compareSync(password, user.password); 
        if (!isPasswordValid) { 
            return res.status(401).json({ message: 'Invalid username or password' }); 
        } 
 
        res.json({ message: 'Login successful!' }); 
    }); 
}); 
 
// Start the server 
app.listen(3000, () => { 
    console.log('Server running on http://localhost:3000'); 
}); 