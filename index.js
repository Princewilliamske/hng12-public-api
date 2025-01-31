
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// API Endpoint
app.get("/", (req, res) => {
    res.json({
        email: "johnwilliammuga@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Princewilliamske/hng12-public-api",
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
