function navToggle() {
    $('.inPage__links').slideToggle();
}

function enableButton() {
    $('.calculate__button').prop('disabled', false);
}

function calculate() {
    var birthDate = new Date($('.birth__date').val());
    var currentDate = new Date();
    let temp = '';
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() == birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 0) {
        $('.age__text').html('<span class="text-red-500">Please enter a valid date</span>');
        return;
    }
    var months = currentDate.getMonth() - birthDate.getMonth();
    if (months < 0) {
        months = 12 + months;
    }
    if (currentDate.getDate() < birthDate.getDate()) {
        months--;
    }
    if (currentDate.getMonth() < birthDate.getMonth()) {
        temp = `<br><br>• After ${12 - months} months, you will be ${age + 1} years old`;
    } else {
        temp = `<br><br>• Your birthday was ${months} months ago`;
    }
    $('.age__text').html(`• You are <span class="text-green-700">${age} years, ${months} months old</span><span class="text-black">${temp}</span>`);
}