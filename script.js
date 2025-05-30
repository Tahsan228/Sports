// Add event listeners to buttons and heading
document.addEventListener('DOMContentLoaded', function() {
    // Add click event to MWG SPORTS heading
    const heading = document.querySelector('h1');
    if (heading) {
        heading.style.cursor = 'pointer';
        heading.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    // Add event listeners to game buttons
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