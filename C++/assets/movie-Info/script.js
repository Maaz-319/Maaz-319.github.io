function searchMovie() {
    $('.square').show();
    var movieTitle = $('.search__input').val();
    var url = 'https://www.omdbapi.com/?apikey=79204cd7&s=' + movieTitle;
    $.ajax({
        url: url,
        success: function (data) {
            var movieList = $('.search__gridView');

            $('.square').hide();

            if (data.Response == "False") {
                movieList.html('');
                var errorItem = $(`
                <div class="search__gridItem">
                    <div class="search__card bg-slate-500 text-white text-center p-4 justify-center hover:bg-gray-500">
                        <h1 class="search__cardTitle text-2xl font-bold mt-2">No movie found</h1>
                    </div>
                </div>`);
                $('.search__gridView').append(errorItem);
                return;
            }

            var movies = data.Search;
            movieList.html('');
            movies.forEach(function (movie) {
                var allMovieData = $.ajax({
                    url: 'https://www.omdbapi.com/?apikey=79204cd7&i=' + movie.imdbID,
                    async: false
                }).responseJSON;
                var movieItem = $(`
                <a href="#" class="search__gridItem">
                    <div class="search__card bg-slate-500 text-white text-center p-4 justify-center hover:bg-gray-500">
                        <img src="${movie.Poster}" alt="${movie.Title}" class="search__cardImage rounded-lg mx-auto">
                        <h1 class="search__cardTitle text-2xl font-bold mt-2">${movie.Title}</h1>
                        <p class="genre"><span class="font-bold">Genre: </span>${allMovieData.Genre}</p>
                        <p class="search__cardYear text-lg"><span class="font-bold">Year: </span>${allMovieData.Year}</p>
                        <p class="ratings"><span class="font-bold">Rating: </span>${allMovieData.Ratings[0].Value}</p>
                        <p class="duration"><span class="font-bold">Duration: </span>${allMovieData.Runtime}</p>
                    </div>
                </a>`);
                $('.search__gridView').append(movieItem);
            });
        },
        error: function () {
            $('.square').hide();
            movieList.html('');
            var errorItem = $(`
                <div class="search__gridItem">
                    <div class="search__card bg-slate-500 text-white text-center p-4 justify-center hover:bg-gray-500">
                        <h1 class="search__cardTitle text-2xl font-bold mt-2">No movie found</h1>
                    </div>
                </div>`);
            $('.search__gridView').append(errorItem);
        }

    });
}

$(function () {
    $(".search__input").focus();
    $(".search__input").on("keydown", function (event) {
        if (event.keyCode === 13) {
            searchMovie();
        }
    });
})