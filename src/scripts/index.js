let speed = 20;

function updateSpeed() {
    document.querySelector('.speed').textContent = `${speed} mph`;
    animateBackground({ speed });
    spinWheels({ speed });
    wobbleHead({ speed });
}

const MIN_SPEED = 0;
const MAX_SPEED = 60;
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

updateSpeed();
