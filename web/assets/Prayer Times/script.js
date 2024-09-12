var city = '';
var country = '';
var timezone = '';

function getLocation() {
    $('.to_hide').show();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        console.error("Geolocation is not supported by this browser.");
    }

    function successCallback(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getCityCountry(lat, lon);
    }

    function errorCallback(error) {
        $('.to_hide').html('Error');
        console.error("Error getting location: ", error);
    }
}

function getCityCountry(lat, lon) {
    const apiKey = 'bcb09fbf67a34310948c4156e48c082d';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`;
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.results && data.results.length > 0) {
                city = data.results[0].components.historical_division;
                country = data.results[0].components.country;
                timezone = data.results[0].annotations.timezone.name;
                $('.city').html(`City:<span class="font-bold text-2xl ml-4">${city}</span>`);
                getPrayerTimes();
            } else {
                console.error('No results found in API response');
            }
        },
        error: function (error) {
            $('.to_hide').html('Error');

            console.error('Error fetching data from API:', error);
        }
    });
}

function getPrayerTimes() {
    // get date in dd-mm-yyyy format
    const date = new Date();

    // Extract day, month, and year
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    // Format the date as dd-mm-yyyy
    const formattedDate = `${day}-${month}-${year}`;


    $.ajax({
        url: `https://api.aladhan.com/v1/timingsByCity/${date}?city=${city}&country=${country}&school=1&timezonestring=${timezone}&adjustment=-1`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var fajr = data.data.timings.Fajr;
            var dhuhr = data.data.timings.Dhuhr;
            var asr = data.data.timings.Asr;
            var maghrib = data.data.timings.Maghrib;
            var isha = data.data.timings.Isha;

            // changing to 12 hour format
            fajr = fajr.split(':');
            fajr = `${fajr[0] % 12}:${fajr[1]}`;

            dhuhr = dhuhr.split(':');
            dhuhr = `${dhuhr[0] % 12}:${dhuhr[1]}`;

            if (dhuhr[0] == 0) {
                if (dhuhr[2] < 10) {
                    dhuhr = `12:0${dhuhr[2]}`;
                } else {
                    dhuhr = `12:${dhuhr[2]}`;
                }
            }

            asr = asr.split(':');
            asr = `${asr[0] % 12}:${asr[1]}`;

            maghrib = maghrib.split(':');
            maghrib = `${maghrib[0] % 12}:${maghrib[1]}`;

            isha = isha.split(':');
            isha = `${isha[0] % 12}:${isha[1]}`;

            $('.to_hide').hide();

            $('.timezone').html(`TimeZone:<span class="font-bold text-2xl ml-4">${data.data.meta.timezone}</span>`);

            $('.Fajr').html(`Fajr:<span class="font-bold text-2xl ml-4">${fajr} AM</span>`);
            $('.Zohar').html(`Dhuhr:<span class="font-bold text-2xl ml-4">${dhuhr} PM</span>`);
            $('.Asr').html(`Asr:<span class="font-bold text-2xl ml-4">${asr} PM</span>`);
            $('.Maghrib').html(`Maghrib:<span class="font-bold text-2xl ml-4">${maghrib} PM</span>`);
            $('.Isha').html(`Isha:<span class="font-bold text-2xl ml-4">${isha} PM</span>`);

            // converting time to 12 hour format
            var sunset = data.data.timings.Sunset.split(':');
            sunset = `${sunset[0] % 12}:${sunset[1]}`;

            $('.hijri_date').html(`Hijri Date: <span class="font-bold lg:text-xl l:ml-4">${data.data.date.hijri.day} ${data.data.date.hijri.month.en} ${data.data.date.hijri.year} ${data.data.date.hijri.designation.abbreviated}</span>`);
            $('.sunrise').html(`Sunrise: <span class="font-bold lg:text-xl lg:ml-4">${data.data.timings.Sunrise} AM</span>`);
            $('.sunset').html(`Sunset: <span class="font-bold lg:text-xl lg:ml-4">${sunset} PM</span>`);
        },
        error: function (error) {
            $('.to_hide').html('Error');

            console.error('Error fetching data from API:', error);
        }
    });
}
// Call the getLocation function to start the process
$(function () {
    getLocation();
});