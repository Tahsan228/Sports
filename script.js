// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.games');

    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (index === 0) { // First button (Pacers vs Knicks)
                window.location.href = 'Knicks.html';
            } else {
                console.log('Button clicked:', this.textContent);
            }
        });
    });
});