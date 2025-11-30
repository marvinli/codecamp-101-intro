let hillsPosition = 0;
let roadPosition = 0;
let speed = 20;

function animateBackground() {
    hillsPosition += 0.1 * speed;
    roadPosition += 0.3 * speed;

    document.querySelector('.hills').style.backgroundPosition = `${hillsPosition}px 0`;
    document.querySelector('.road').style.backgroundPosition = `${roadPosition}px 0`;

    requestAnimationFrame(animateBackground);
}

animateBackground();

function updateSpeed() {
    document.querySelector('.speed').textContent = `${speed} mph`;

    spinWheels({ speed });
    wobbleHead({ speed });
}

updateSpeed();

const MIN_SPEED = 0;
const MAX_SPEED = 65;
const SPEED_STEP = 5;

whenKeyIsPressed('ArrowUp', () => {
    if (speed < MAX_SPEED) {
        speed = speed + SPEED_STEP;
        if (speed > MAX_SPEED) speed = MAX_SPEED;
        updateSpeed();
    }
});

whenKeyIsPressed('ArrowDown', () => {
    if (speed > MIN_SPEED) {
        speed = speed - SPEED_STEP;
        if (speed < 0) speed = 0;
        updateSpeed();
    }
});
