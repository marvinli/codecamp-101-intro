let hillsPosition = 0;
let roadPosition = 0;
let backgroundSpeed = 0;

function backgroundLoop() {
    hillsPosition += 0.1 * backgroundSpeed;
    roadPosition += 0.3 * backgroundSpeed;

    document.querySelector('.hills').style.backgroundPosition = `${hillsPosition}px 0`;
    document.querySelector('.road').style.backgroundPosition = `${roadPosition}px 0`;

    requestAnimationFrame(backgroundLoop);
}

backgroundLoop();

function animateBackground({ speed }) {
  backgroundSpeed = speed;
}
