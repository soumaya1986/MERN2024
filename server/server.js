const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
console.log(process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/items", require("./routes/items"));
app.use(express.static(path.join(__dirname, "/../client/build")));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/../client/build/index.html"))
);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
