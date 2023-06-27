$(document).ready(function() {
    var cities = []; // Array to store the fetched city data

    // Fetch city data from the database
    $.ajax({
        url: 'https://en.wikipedia.org/wiki/List_of_cities_in_India_by_population',
        method: 'GET',
        dataType: 'html',
        success: function(response) {
            // Extract city data from the response
            var table = $(response).find('.wikitable');
            var rows = table.find('tbody > tr');

            rows.each(function(index, row) {
                var columns = $(row).find('td');
                var city = {
                    rank: columns.eq(0).text().trim(),
                    name: columns.eq(1).text().trim(),
                    population2011: columns.eq(2).text().trim(),
                    population2001: columns.eq(3).text().trim(),
                    state: columns.eq(4).text().trim()
                };

                cities.push(city);
            });
        }
    });

    // Handle user input in the text field
    $('#searchField').on('input', function() {
        var searchText = $(this).val().toLowerCase();
        var matchedCities = cities.filter(function(city) {
            return city.name.toLowerCase().startsWith(searchText);
        });

        // Update the dropdown content
        var dropdownContent = $('#dropdownContent');
        dropdownContent.empty();

        matchedCities.forEach(function(city) {
            var link = $('<a></a>').text(city.name).attr('href', '#');
            link.on('click', function() {
                displayCityInfo(city);
            });
            dropdownContent.append(link);
        });
    });

    // Display city information when a city is selected
    function displayCityInfo(city) {
        $('#rank').text('Rank: ' + city.rank);
        $('#population2011').text('Population (2011): ' + city.population2011);
        $('#population2001').text('Population (2001): ' + city.population2001);
        $('#state').text('State or Union Territory: ' + city.state);
    }
});
