const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/embed', (req, res) => {
  const gifUrl = 'https://media1.tenor.com/m/nr2ZeNXb37IAAAAd/sussy.gif';

  // Set Content-Type header to 'image/png'
  res.header('Content-Type', 'image/gif');

  // Redirect to the image URL
  res.redirect(gifUrl);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
