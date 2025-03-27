// Display the current date and time on the Thank You page
document.addEventListener('DOMContentLoaded', () => {
    const timestampElement = document.getElementById('timestamp');
    const now = new Date();
    timestampElement.textContent = `You joined on: ${now.toLocaleString()}`;
});
