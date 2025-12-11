// script.js - Mobile Menu Functionality for Doctor Matano Website

document.addEventListener('DOMContentLoaded', function() {
    // Get mobile menu elements
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    // Only run if elements exist
    if (mobileMenuBtn && mainNav) {
        // Toggle mobile menu on button click
        mobileMenuBtn.addEventListener('click', function() {
            // Toggle active class on navigation
            mainNav.classList.toggle('active');
            
            // Change menu icon (bars to times)
            const icon = this.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking a navigation link
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', function() {
                // Close the menu
                mainNav.classList.remove('active');
                
                // Reset icon to bars
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // Optional: Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mainNav && mainNav.classList.contains('active')) {
            if (!event.target.closest('.main-nav') && 
                !event.target.closest('.mobile-menu-btn')) {
                mainNav.classList.remove('active');
                
                // Reset icon
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    // Optional: Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            
            // Only handle page-internal anchor links
            if (href.startsWith('#') && href.length > 1) {
                event.preventDefault();
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
