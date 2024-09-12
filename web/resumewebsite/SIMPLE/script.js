$(document).ready(function () {
    $(".container").hide();
    $(".footer").hide();
    $(".profile__image").hide();
    $(".navbar__div").hide();
    $(".navbar__ul").hide();
    $(".name__heading").hide();
    $(".profession__heading").hide();


    $(".container").slideDown(1000);
    $(".footer").slideDown(1000);
    $(".navbar__ul").fadeIn(3000);
    $(".navbar__div").slideDown(1000);
    $(".profile__image").fadeIn(3000);
    $(".name__heading").fadeIn(3000);
    $(".profession__heading").fadeIn(3000);
});