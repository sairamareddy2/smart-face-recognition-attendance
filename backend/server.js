const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Node backend is running");
});

// Attendance route (calls Flask ML API)
app.get("/attendance", async (req, res) => {
  try {
    const response = await axios.get(
  "http://127.0.0.1:5000/mark-attendance",
  { timeout: 60000 }
);

    res.json(response.data);
  } catch (error) {
    console.error("NODE → FLASK ERROR:", error.message);
    res.status(500).json({
      status: "error",
      message: "Failed to connect to ML service",
    });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Node server running on http://localhost:${PORT}`);
});
