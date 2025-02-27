$(function () {
    const texts = [
        "Software Developer",
        "Web Developer",
        "AI Enthusiast",
        "Pygame Developer"
    ];
    const typingSpeed = 45;
    const deletingSpeed = 30;
    const delayBetweenTexts = 1000;
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentText = texts[textIndex];
        const displayText = isDeleting
            ? currentText.substring(0, charIndex--)
            : currentText.substring(0, charIndex++);

        $('#typewriter').text(displayText);

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => (isDeleting = true), delayBetweenTexts);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; // Move to next text
        }

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(typeWriter, speed);
    }

    typeWriter(); // Start the effect
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 600, 'linear');
    });
});

function navToggle() {
    $('.inPage__links').slideToggle();
}