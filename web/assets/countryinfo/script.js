function getInfo() {
    var country = $("#country").val();
    var url = "https://restcountries.com/v3.1/name/pakistan"
    var info = "";

    $.ajax({
        url: url,
        method: "GET",
        success: function (data) {
            info = "";
            for (var i = 0; i < data.length; i++) {
                info += "<h2>" + data[i].name + "</h2>";
                info += "<p>Capital: " + data[i].capital + "</p>";
                info += "<p>Population: " + data[i].population + "</p>";
                info += "<p>Area: " + data[i].area + "</p>";
                info += "<p>Region: " + data[i].region + "</p>";
                info += "<p>Timezones: " + data[i].timezones + "</p>";
                info += "<p>Calling Codes: " + data[i].callingCodes + "</p>";
                info += "<p>Top Level Domain: " + data[i].topLevelDomain + "</p>";
                info += "<p>Currencies: " + data[i].currencies[0].name + "</p>";
                info += "<p>Languages: " + data[i].languages[0].name + "</p>";
                info += "<img src='" + data[i].flag + "' width='200'>";
            }
            $("#info").html(info);
        }
    });

    console.log(info);
}
