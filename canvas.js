const $canvas = document.querySelector('.js-canvas');
const ctx = $canvas.getContext('2d');

ctx.moveTo(0, $canvas.clientHeight);
for (let i  = 0; i < 100; i += 0.1) {
    const xPosition = (i / 100) * $canvas.clientWidth;
    const normalizedX = window.getNormalizedX(i / 100);
    const yPercentage = window.normalDistribution(normalizedX);
    const yPosition = $canvas.clientHeight - (yPercentage * $canvas.clientHeight);
    ctx.lineTo(xPosition, yPosition);
}

ctx.stroke();