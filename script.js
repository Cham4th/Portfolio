const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('light-theme');
    toggleBtn.textContent = body.classList.contains('light-theme') ? 'Dark Mode' : 'Light Mode';
});

const serviceCards = document.querySelector('.service-cards');
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');

let autoScrollInterval;

// Function to auto-scroll
function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        if (serviceCards.scrollLeft + serviceCards.clientWidth >= serviceCards.scrollWidth) {
            serviceCards.scrollTo({ left: 0, behavior: 'smooth' }); // Reset to start when reaching end
        } else {
            serviceCards.scrollBy({ left: 320, behavior: 'smooth' }); // Scroll right
        }
    }, 3000); // Change slides every 3 seconds
}

// Start auto-scrolling when page loads
startAutoScroll();

// Stop auto-scrolling on manual scroll
serviceCards.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
serviceCards.addEventListener('mouseleave', startAutoScroll);

// Manual Scroll Buttons
scrollLeft.addEventListener('click', () => {
    serviceCards.scrollBy({ left: -320, behavior: 'smooth' });
    clearInterval(autoScrollInterval);
    startAutoScroll();
});

scrollRight.addEventListener('click', () => {
    serviceCards.scrollBy({ left: 320, behavior: 'smooth' });
    clearInterval(autoScrollInterval);
    startAutoScroll();
});



