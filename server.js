const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // ✅ Railway will inject its own port

app.get("/", (req, res) => {
  res.send("Hnji bhai sahab chal gaye ");
});

// ✅ Correct redirect
app.get("/vanijya", (req, res) => {
  res.redirect("https://vanijyatechh.in");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
