const express = require("express");
const connectDB = require("./config/db");
const libraryRoutes = require("./routes/library.routes");

const app = express();
app.use(express.json());

// Connect DB
connectDB();

// Use Routes
app.use("/", libraryRoutes);

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
