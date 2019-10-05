const $trackContainer = document.querySelector('.js-track-container');
const $trackButton = document.querySelector('.js-track-button');

let isDragging = false;

$trackButton.addEventListener('mousedown', function() {
    isDragging = true;
});

document.addEventListener('mousemove', function(e) {
    if (!isDragging) {
        return;
    }

    const { xPosition, yPosition } = getXAndYPosition(e.clientX);
    $trackButton.style.left = `${xPosition}px`;
    $trackButton.style.top = `${yPosition}px`;
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});

$trackButton.addEventListener('keydown', function(e) {
    const keyCode = e.key;
    let direction = 0;
    if (keyCode === 'ArrowRight') {
        direction = 1;
    } else if (keyCode === 'ArrowLeft') {
        direction = -1;
    } else {
        return;
    }

    const STEP_INCREMENT = 10;
    const step = direction * STEP_INCREMENT;
    const originalX = $trackButton.style.left ?
        +$trackButton.style.left.substring(0, $trackButton.style.left.length - 2) :
        0.1;
    const { xPosition, yPosition } = getXAndYPosition(originalX + step);

    $trackButton.style.left = `${xPosition}px`;
    $trackButton.style.top = `${yPosition}px`;
});

function getXAndYPosition(rawXPosition) {
    const xPosition = Math.max(0, Math.min(rawXPosition, $trackContainer.clientWidth - $trackButton.clientWidth));
    const xPercentage = xPosition / ($trackContainer.clientWidth - $trackButton.clientWidth);
    const normalizedX = window.getNormalizedX(xPercentage);
    const yPercentage = window.normalDistribution(normalizedX);
    const yPosition = $trackContainer.clientHeight - ($trackContainer.clientHeight * yPercentage) - $trackButton.clientHeight;

    return {
        xPosition,
        yPosition
    };
}