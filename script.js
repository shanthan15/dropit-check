document.addEventListener('DOMContentLoaded', function () {

    // Store timing logic
        const header = document.querySelector('.header');
        const now = new Date();
        const currentHour = now.getHours();
    
        // Store timings: 6:00 AM to 12:00 AM (midnight)
        if (currentHour < 6 || currentHour >= 24) {
            header.style.backgroundColor = '#800080';
    
        }
    
    });