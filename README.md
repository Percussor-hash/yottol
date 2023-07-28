**City Data Search**<br>
This project is a simple web application that allows users to search for information about different cities. It uses Ajax to fetch city data from the server in real-time and displays the information on the webpage dynamically.<br>
<br>
**How to Use**<br>
Clone the repository to your local machine.<br>
Open the index.html file in your web browser.<br>
Enter the name of a city in the search box.<br>
The application will fetch city data from the server and display it below the search box.<br>
<br>**Dependencies**<br>
jQuery: This project uses jQuery to handle user input and make Ajax requests to the server for city data.<br>
<br>**Server Endpoint**<br>
The application expects the server to provide city data in response to a POST request to the /getCityData endpoint. The server should return data in JSON format with the following structure:<br>
[
  {
    "rank": 1,
    "name": "City Name",
    "population2011": 1000000,
    "population2001": 800000,
    "state": "State or Union Territory"
  },
  ...
]<br>
**Example Response:**<br>
[
  {
    "rank": 1,
    "name": "Mumbai",
    "population2011": 12442373,
    "population2001": 11978450,
    "state": "Maharashtra"
  },
  {
    "rank": 2,
    "name": "Delhi",
    "population2011": 11034555,
    "population2001": 9873609,
    "state": "Delhi"
  },
  ...
]<br>
Please ensure that the server is set up to handle the /getCityData endpoint and provides data in the specified JSON format.<br>
<br>
**Note:**<br>
The city data provided in this example is for illustration purposes only and does not represent real data.<br>
<br>
Feel free to modify and enhance the project according to your needs.<br>
