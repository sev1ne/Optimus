// Form submission
const waitlistForm = document.getElementById('waitlistForm');

waitlistForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    
    // Here you would typically send this to a backend/email service
    // For now, we'll show a success message
    const button = this.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = '✓ Added to waitlist!';
    button.style.backgroundColor = '#00D4FF';
    button.style.color = '#0F0F1E';
    
    // Reset form
    this.reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
        button.style.color = '';
    }, 3000);
    
    console.log('Email added to waitlist:', email);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to waitlist function
function scrollToWaitlist() {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection.scrollIntoView({ behavior: 'smooth' });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all feature cards
document.querySelectorAll('.feature-card, .pricing-card, .step').forEach(el => {
    observer.observe(el);
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .feature-card, .pricing-card, .step {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Mobile menu toggle (if you add a mobile menu button)
console.log('Optimus - Game-Based Community Platform');
console.log('Landing page loaded successfully!');
