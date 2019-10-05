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

    const xPosition = Math.max(0, Math.min(e.clientX, $trackContainer.clientWidth - $trackButton.clientWidth));

    const xPercentage = xPosition / ($trackContainer.clientWidth - $trackButton.clientWidth);
    const normalizedX = window.getNormalizedX(xPercentage);
    const yPercentage = window.normalDistribution(normalizedX);
    const yPosition = $trackContainer.clientHeight - ($trackContainer.clientHeight * yPercentage) - $trackButton.clientHeight;

    $trackButton.style.left = `${xPosition}px`;
    $trackButton.style.top = `${yPosition}px`;
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});