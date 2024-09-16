$(function () {
    $(".pfp__div").hide();
    $(".background").hide();
    $(".background").fadeIn(2000);
    $(".pfp__div").fadeIn(500);
    
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 600, 'linear');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#backToTopBtn').removeClass('hidden');
        } else {
            $('#backToTopBtn').addClass('hidden');
        }
    });

    // Scroll to top when the button is clicked
    $('#backToTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
        return false;
    });

    $(".navbar__toggle__button__btn").click(function () {
        $(".navbar__div").show();
    });

    var strings = ["Software Developer", "Web Developer", "Python Expert", "AI/ML Enthusiast"];
    var currentStringIndex = 0;
    var typingSpeed = 50;
    var deletingSpeed = 30;
    var delayBetweenStrings = 2000;
    var $typewriter = $(".profession__heading");

    function typeString(string, index, callback) {
        if (index < string.length) {
            $typewriter.append(string[index]);  // Append next character
            setTimeout(function () {
                typeString(string, index + 1, callback);  // Call function recursively for the next character
            }, typingSpeed);
        } else {
            setTimeout(callback, delayBetweenStrings);  // Move to the next string after delay
        }
    }

    // Function to delete the current string
    function deleteString(callback) {
        var currentText = $typewriter.html();
        if (currentText.length > 0) {
            $typewriter.html(currentText.slice(0, -1));  // Remove last character
            setTimeout(function () {
                deleteString(callback);  // Call function recursively until the text is deleted
            }, deletingSpeed);
        } else {
            callback();
        }
    }

    // Function to loop through the strings
    function startTypewriterEffect() {
        typeString(strings[currentStringIndex], 0, function () {
            deleteString(function () {
                currentStringIndex = (currentStringIndex + 1) % strings.length;  // Move to the next string
                startTypewriterEffect();  // Repeat the process
            });
        });
    }

    startTypewriterEffect();
});