const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const hospitalRoutes = require("./routes/hospitalRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin : "*",
}));
app.use(express.json());

app.use("/api/v1/hospitals", hospitalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
