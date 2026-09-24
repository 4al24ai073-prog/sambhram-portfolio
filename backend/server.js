const express = require("express");
const cors = require("cors");

const messageRoutes = require("./routes/messageRoutes");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Portfolio backend is running!"
    });
});


// Contact message routes
app.use("/api/messages", messageRoutes);


// Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});