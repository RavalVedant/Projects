const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookies = require('cookie-parser')
const UserModel = require('./Models/User')

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(cookies())

mongoose.connect('mongodb://127.0.0.1:27017/Viavi_Web', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("MongoDB connected...");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});

// Route for user registration (sign-up)
app.post('/signUp', (req, res) => {
    const { name, email, password } = req.body;

    // Check if email already exists
    UserModel.findOne({ email })
        .then(existingUser => {
            if (existingUser) {
                return res.status(400).json({ status: "error", message: "Email already in use!" });
            }

            // Hash password before saving it to the database
            bcrypt.hash(password, 10)
                .then(hash => {
                    UserModel.create({ name, email, password: hash })
                        .then(user => res.json({ status: "OK", user }))
                        .catch(err => res.status(500).json({ status: "error", message: "Failed to create user." }));
                })
                .catch(err => res.status(500).json({ status: "error", message: "Error hashing password." }));
        })
        .catch(err => res.status(500).json({ status: "error", message: "Error checking email." }));
});

// Route for user login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    UserModel.findOne({ email })
        .then(user => {
            if (user) {
                // Compare passwords
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        // Generate JWT token
                        const token = jwt.sign({ email: user.email, role: user.role, name: user.name }, process.env.JWT_SECRET_KEY || "jwt-secret-key", { expiresIn: '1d' });
                        res.cookie('token', token, { httpOnly: true, secure: false, maxAge: 24 * 60 * 60 * 1000 }); // Set cookie with JWT token
                        return res.json({ status: "Success", message: "Logged in successfully", role: user.role, name: user.name });
                    } else {
                        return res.json({ status: "error", message: "Incorrect password!" });
                    }
                });
            } else {
                return res.json({ status: "error", message: "No account found with this email!" });
            }
        })
        .catch(err => res.status(500).json({ status: "error", message: "Error during login." }));
});

// Middleware to verify the JWT token (for protected routes)
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ status: "error", message: "No token provided!" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY || "jwt-secret-key", (err, decoded) => {
        if (err) {
            return res.status(401).json({ status: "error", message: "Invalid token!" });
        }
        req.user = decoded;  // Attach decoded user info to the request
        next();
    });
};

// Route to get the user's name after login (use token verification)
app.get('/user', verifyToken, (req, res) => {
    const user = req.user;  // User info from the JWT token
    res.json({ name: user.name });  // Send user name as response
});

// Start the server
app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});