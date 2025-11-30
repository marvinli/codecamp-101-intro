function whenKeyIsPressed(key, action) {
    document.addEventListener('keydown', (e) => {
        if (e.key === key) {
            action();
        }
    });
}
