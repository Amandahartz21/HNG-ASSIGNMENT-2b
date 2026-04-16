function updateTime() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    if (timeElement) {
        timeElement.textContent = Date.now().toString();
    }
}

updateTime();

setInterval(updateTime, 500);
