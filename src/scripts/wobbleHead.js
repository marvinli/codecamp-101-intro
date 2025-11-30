function wobbleHead({ speed }) {
    const izzy = document.querySelector('.izzy');

    if (speed === 0) {
        izzy.style.animationPlayState = 'paused';
    } else {
        const wobbleDuration = 80 / speed;
        izzy.style.animationDuration = `${wobbleDuration}s`;
        izzy.style.animationPlayState = 'running';
    }
}
