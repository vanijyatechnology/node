const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // ✅ Important for Railway

app.get("/", (req, res) => {
  res.send("Hnji bhai sahab chal gaye ");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
