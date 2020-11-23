// Import Dependencies
const express = require("express");


// Server setup
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Verify server is running
app.listen(PORT, () => {
    console.log(`API server running on ${PORT}`);
    
})