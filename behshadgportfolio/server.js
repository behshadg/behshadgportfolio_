const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Middleware to enable CORS
const corsOptions = {
  origin: 'https://behshadg-portfolio.netlify.app/', // Update this with your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Route to handle the contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Process the form data (e.g., send an email, save to a database, etc.)
  console.log('Received form data:', { name, email, message });

  // Send a response back to the client
  res.json({ message: 'Form data received successfully' });
});

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
