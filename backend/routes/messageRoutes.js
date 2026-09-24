const express = require("express");
const fs = require("fs");
const path = require("path");

const Message = require("../models/Message");

const router = express.Router();

const messagesFile = path.join(__dirname, "../messages.json");

// POST - Save a new message
router.post("/", (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Check if all fields are filled
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields."
            });
        }

        // Read existing messages
        let messages = [];

        if (fs.existsSync(messagesFile)) {
            const data = fs.readFileSync(messagesFile, "utf8");

            if (data.trim()) {
                messages = JSON.parse(data);
            }
        }

        // Create new message
        const newMessage = new Message(
            name,
            email,
            message
        );

        // Add new message
        messages.push(newMessage);

        // Save messages
        fs.writeFileSync(
            messagesFile,
            JSON.stringify(messages, null, 4)
        );

        // Send response
        res.status(201).json({
            success: true,
            message: "Your message has been sent successfully!"
        });

    } catch (error) {
        console.error("Error saving message:", error);

        res.status(500).json({
            success: false,
            message: "Server error. Please try again later."
        });
    }
});


// GET - View all messages
router.get("/", (req, res) => {
    try {
        let messages = [];

        if (fs.existsSync(messagesFile)) {
            const data = fs.readFileSync(messagesFile, "utf8");

            if (data.trim()) {
                messages = JSON.parse(data);
            }
        }

        res.json(messages);

    } catch (error) {
        console.error("Error reading messages:", error);

        res.status(500).json({
            success: false,
            message: "Unable to read messages."
        });
    }
});


module.exports = router;