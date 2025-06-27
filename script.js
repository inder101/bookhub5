// Handle tab switching
const tabs = document.querySelectorAll('.tab-link');
const tabPanes = document.querySelectorAll('.category-cards .card');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.classList.toggle('active')

        // Add active class to the clicked tab
        cards.forEach(card => {
            card.style.display='block'
        });
    });
});

// Handle mobile menu toggle 
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});
