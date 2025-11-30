function spinWheels({ speed }) {
    const wheels = document.querySelectorAll('.wheel');

    if (speed === 0) {
        wheels.forEach(wheel => wheel.style.animationPlayState = 'paused');
    } else {
        const wheelDuration = 40 / speed;
        wheels.forEach(wheel => {
            wheel.style.animationDuration = `${wheelDuration}s`;
            wheel.style.animationPlayState = 'running';
        });
    }
}
