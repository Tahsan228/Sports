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
            if (index === 0) { 
                window.location.href = 'Knicks.html';
            } else {
                console.log('Button clicked:', this.textContent);
            }

            if (index === 1) { 
                window.location.href = 'football.html';
            } else {
                console.log('Button clicked:', this.textContent);
            }
        });
    });

    // Add event listeners to Player buttons (for Knicks.html page)
    const playerButtons = document.querySelectorAll('.Player');
    const iframe = document.querySelector('iframe');

    if (playerButtons.length > 0 && iframe) {
        playerButtons.forEach((button, index) => {
            button.addEventListener('click', function() {
                if (index === 0) { // Player 1 - original iframe
                    iframe.src = 'https://goalstreamz.com/events/stream1/';
                    iframe.width = '750';
                    iframe.height = '400';
                } else if (index === 1) { // Player 2 - different iframe source
                    iframe.src = 'http://shelfnoise.net/embed/pdiez3cpk4198';
                    iframe.width = '750';
                    iframe.height = '400';
                }
            });
        });
    }
});