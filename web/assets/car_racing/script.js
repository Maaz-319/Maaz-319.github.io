const canvas = document.getElementById('game__canvas');
const ctx = canvas.getContext('2d');
const bgImage = new Image();
bgImage.src = 'assets/bg.png';

function draw_car(x, y) {
    car = new Image();
    car.src = 'assets/car.png';
    car.onload = function () {
        ctx.drawImage(car, x, y, 100, 100);
    };
}

bgImage.onload = function () {
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
};

draw_car(350, 500);

canvas.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'ArrowLeft':
            draw_car(250, 500);
            break;
        case 'ArrowRight':
            draw_car(450, 500);
            break;
    }
    canvas.requestAnimationFrame();
});