$(function () {
    $("#container").hide().slideDown(1000);
    $("#user-input").focus();
    $("#heading").hide().fadeIn(1000);
    $(".square").hide();


    $(".btn").on("click", function () {
        fetchData();
    });

    $("#user-input").on("keydown", function (event) {
        if (event.keyCode === 13) {
            fetchData();
        }
    });

    function fetchData() {
        $(".square").show();

        var city = $("#user-input").val();
        var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d4be8e123adba5a49a451c7bd54e558b`;
        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                $(".square").hide();
                if (data.cod === 200) {
                    var Temperature = (data.main.temp - 273.15).toFixed(0);
                    var feels_like = (data.main.feels_like - 273.15).toFixed(0);
                    var weatherInfo = `
                            <div class="image__div d-flex w-32 m-auto">
                                <img id='weather-icon' src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon" class="weather-icon img-fluid w-16 h-16">
                                <hr class="my-6">
                            </div>
                            <h2>Weather in <span class="text-green-500">${data.name}</span>, <span class="text-green-500">${data.sys.country}</span></h2>
                            <hr class="my-6 w-2/4 m-auto">
                            <p>Temperature: <span class="text-green-500 text-5xl">${Temperature}°C</span></p>
                            <p>Feels like <span class="text-green-500 text-5xl">${feels_like}°C</span></p>
                            <hr class="my-6 w-2/4 m-auto">
                            <p>Weather: <span class="text-green-500">${data.weather[0].main}</span></p>
                            <p>Humidity: <span class="text-green-500">${data.main.humidity}%</span></p>
                            <p>Wind Speed: <span class="text-green-500">${data.wind.speed} m/s</span></p>
                        `;
                    $('#field').html(weatherInfo);
                    $("#weather-icon").css("margin-left", "30px");
                } else {
                    $('#field').html(`<p>${data.message}</p>`);
                }
            },
            error: function (error) {
                $(".square").hide();
                console.error('Error fetching weather data:', error);
                $('#field').html('<p>Error fetching weather data</p>');
            }
        });
    }
});