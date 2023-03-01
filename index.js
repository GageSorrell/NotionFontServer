const express = require('express');
const app = express();
const cors = require("cors");

// Serve static files from the "public" directory
app.use(express.static('public'));

app.use(cors());
app.use("/my-font", express.static("."));

// Start the server and listen for incoming requests
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
