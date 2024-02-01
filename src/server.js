const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/takeSurvey', (req, res) => {
  console.log("Survey submitted");
  res.json({ message: "Survey submitted successfully" });
});

app.get('/scanQRCode', (req, res) => {
  console.log("QR Code scanned");
  res.json({ message: "QR Code scanned successfully" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
