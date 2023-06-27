<?php
$url = 'https://en.wikipedia.org/wiki/List_of_cities_in_India_by_population';
$response = file_get_contents($url);
echo $response;
?>