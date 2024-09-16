function getImage() {
    $('.square').show();
    $('.download__button').attr('disabled', true);

    const category = $('.catogories__options').val();
    const url = `https://api.unsplash.com/photos/random?query=${category}&orientation=landscape&client_id=1n7sSMtCh8Hs_MrBOjhQ1SygTDA-BJ550UdX3rwLYZQ`;

    $.ajax({
        url: url,
        success: function (data) {
            const imageUrl = data.urls.regular;
            $('.random__image').attr('src', imageUrl);
            $('.square').hide();
            $('.download__button').attr('disabled', false);
            $('.downloadLinktoGO').attr('href', data.links.download);
        }
    });

}

$(function () {
    // disable button
    $('.download__button').attr('disabled', true);
});