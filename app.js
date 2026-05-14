const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Bug: This endpoint returns wrong message
app.get('/status', (req, res) => {
  res.json({ status: 'error', message: 'Application is down' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;