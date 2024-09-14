function generatePassword() {
    const length = $('.selection').val();

    var password = '';

    const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';
    const includeAlpha = $('.alpha').is(':checked');
    const includeNumbers = $('.nums').is(':checked');
    const includeSymbols = $('.symb').is(':checked');

    if (length > 0 && (includeAlpha || includeNumbers || includeSymbols)) {
        while (length > password.length) {
            if (includeAlpha && length > password.length) {
                password += alphabets[Math.floor(Math.random() * alphabets.length)];
            }
            if (includeNumbers && length > password.length) {
                password += numbers[Math.floor(Math.random() * numbers.length)];
            }
            if (includeSymbols && length > password.length) {
                password += symbols[Math.floor(Math.random() * symbols.length)];
            }
        }
        $('.password__field').html(password);

    }
}
$(function () {
    $('.container').hide();
    $('.nav__bar').hide();

    $('.nav__bar').fadeIn(500);
    $('.container').fadeIn(2000);

    $(".search__input").on("keydown", function (event) {
        if (event.keyCode === 13) {
            generatePassword();
        }
    });
})