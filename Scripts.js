// JavaScript for Dr. Matano Herbalist Website
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            nav.classList.toggle('active');
            document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                // Close mobile menu if open
                if (nav && nav.classList.contains('active')) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    nav.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Image Gallery Modal
    const galleryLinks = document.querySelectorAll('.gallery-link');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const modalClose = document.querySelector('.modal__close');
    const modalPrev = document.querySelector('.modal__nav--prev');
    const modalNext = document.querySelector('.modal__nav--next');
    
    let currentImageIndex = 0;
    const galleryImages = Array.from(galleryLinks);
    
    function openModal(index) {
        const link = galleryImages[index];
        const img = link.querySelector('img');
        const caption = link.querySelector('.gallery-overlay__text').textContent;
        
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modalCaption.textContent = caption;
        currentImageIndex = index;
        
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    galleryLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(index);
        });
    });
    
    // Modal Navigation
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            imageModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    if (modalPrev) {
        modalPrev.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            openModal(currentImageIndex);
        });
    }
    
    if (modalNext) {
        modalNext.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            openModal(currentImageIndex);
        });
    }
    
    // Close modal when clicking outside
    imageModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imageModal.classList.contains('active')) {
            imageModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Navigate with arrow keys
        if (imageModal.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
                openModal(currentImageIndex);
            } else if (e.key === 'ArrowRight') {
                currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
                openModal(currentImageIndex);
            }
        }
    });
    
    // Payment Button Animation
    const paymentButtons = document.querySelectorAll('.payment-btn');
    
    paymentButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Copy phone number to clipboard
            const phoneNumber = '254799936380';
            
            // Create a temporary input element
            const tempInput = document.createElement('input');
            tempInput.value = phoneNumber;
            document.body.appendChild(tempInput);
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // For mobile devices
            
            // Copy the text
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            
            // Show feedback
            const originalBackground = this.style.background;
            this.style.background = 'linear-gradient(135deg, #0c8f35, #096f28)';
            this.innerHTML = '<i class="fas fa-check"></i> Number Copied!';
            
            setTimeout(() => {
                this.style.background = originalBackground;
                this.innerHTML = `
                    <div class="payment-btn__icon">
                        ${button.querySelector('.payment-btn__icon').innerHTML}
                    </div>
                    <div class="payment-btn__content">
                        <div class="payment-btn__name">${button.querySelector('.payment-btn__name').textContent}</div>
                        <div class="payment-btn__number">${button.querySelector('.payment-btn__number').textContent}</div>
                    </div>
                `;
            }, 2000);
            
            // Open WhatsApp after copying
            setTimeout(() => {
                window.open(`https://wa.me/${phoneNumber}?text=Hi%20Dr.%20Matano,%20I've%20made%20a%20payment%20to%20${phoneNumber}.%20Please%20confirm.`, '_blank');
            }, 500);
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(12, 143, 53, 0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.boxShadow = 'var(--shadow-sm)';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .card, .principle, .gallery-item, .payment-btn').forEach(element => {
        observer.observe(element);
    });
    
    // Initialize animations on page load
    setTimeout(() => {
        document.querySelectorAll('.service-card, .card, .principle, .gallery-item, .payment-btn').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('animate-in');
            }
        });
    }, 100);
    
    // Service tags hover effect
    const serviceTags = document.querySelectorAll('.service-tag');
    serviceTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // WhatsApp click tracking
    const whatsappButtons = document.querySelectorAll('a[href*="whatsapp"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('WhatsApp button clicked:', this.href);
        });
    });
    
    // Prevent default for payment buttons (they're not links)
    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
});
