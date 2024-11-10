const express = require('express');
const sequelize = require('./sequelize');  // Import your Sequelize instance

const app = express();
app.use(express.urlencoded({ extended: true }));

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Use a parameterized raw SQL query to prevent SQL injection
        const [user] = await sequelize.query(
            "SELECT * FROM users WHERE username = ? AND password = ?",
            {
                replacements: [username, password],  // Safe binding to prevent SQL injection
                type: sequelize.QueryTypes.SELECT
            }
        );

        // Check if a user was found
        if (user) {
            res.send('Login successful');
        } else {
            res.send('Invalid username or password');
        }
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).send('An error occurred');
    }
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));