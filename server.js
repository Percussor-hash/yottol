/*const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

// Parse request bodies as JSON
app.use(bodyParser.json());*/
const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse request bodies as JSON
app.use(express.json());

// Define the route to handle the AJAX request
app.post('/getCityData', (req, res) => {
  const searchText = req.body.search;
  console.log(searchText+" search text");

  // Connect to the SQLite database
  const db = new sqlite3.Database('cities.db');

  // Query the database to retrieve city data based on the search text
  const query = `SELECT * FROM cities WHERE name LIKE '%${searchText}%'`;
  db.all(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch city data' });
    } else {
      
      console.log(rows);
      res.json(rows);
    }
  });

  // Close the database connection
  db.close();
});

// Serve the HTML file
app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
