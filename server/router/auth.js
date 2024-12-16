const express = require ('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/connect');
const User = require("../model/userSchema");

router.get('/',(req,res)=> {
    res.send("Hello World router");
});



//registration - signup
router.post('/register', async (req, res) => {
    const { name, email, password, cpassword } = req.body;

    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all fields properly" });
    }

    // Password conditions
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    if (!passwordRegex.test(password)) {
        return res.status(422).json({
            error: "Password must be at least 6 characters long and contain at least 1 special character and 1 number."
        });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        } else if (password !== cpassword) {
            return res.status(422).json({ error: "Passwords do not match" });
        } else {
            const user = new User({ name, email, password, cpassword });
            await user.save();
            res.status(201).json({ message: "User registration successful" });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


//sign-in -- login route


router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill in both email and password." });
        }

        const user = await User.findOne({ email: email });

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                res.status(200).json({ message: "User Signin Successful" });
            } else {
                res.status(400).json({ error: "Invalid Credentials - Incorrect Password" });
            }
        } else {
            res.status(400).json({ error: "Invalid Credentials - User not found" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router;