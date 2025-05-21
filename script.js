document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animations
    gsap.from('.hero-title', {
        opacity: 1,  // Ensure it's visible initially
        y: 50,
        duration: 1.5,
        ease: 'power2.out'
    });

    gsap.from('.hero-tagline', {
        opacity: 1,  // Ensure it's visible initially
        y: 50,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out'
    });

    // Intro Section Animation
    gsap.from('.intro-content', {
        scrollTrigger: {
            trigger: '.intro-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,  // Ensure it's visible initially
        y: 50,
        duration: 1,
        ease: 'power2.out'
    });

    // Feature Cards Animation
   gsap.utils.toArray('.feature-card').forEach(card => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,   // Animate to visible
        y: 0,         // Reset vertical position
        duration: 1,
        ease: 'power2.out'
    });
});


    // Products Page Animations
    gsap.utils.toArray('.product-card').forEach(card => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,   // Animate to visible
        y: 0,
        duration: 1,
        ease: 'power2.out'
    });
});


    // About Page Animations
    gsap.utils.toArray('.about-block').forEach(block => {
    gsap.to(block, {
        scrollTrigger: {
            trigger: block,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,  // Animate to visible
        x: block.classList.contains('quote-block') ? -50 : 50,
        duration: 1,
        ease: 'power2.out'
    });
});


    // Contact Page Animations
    gsap.utils.toArray('.contact-item').forEach(item => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 1,  // Animate to visible
        y: 0,         // Reset vertical position
        duration: 1,
        ease: 'power2.out'
    });
});


    // Footer Animation
    gsap.from('footer', {
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 90%',
            toggleActions: 'play none none none'
        },
        opacity: 1,  // Ensure it's visible initially
        y: 50,
        duration: 1,
        ease: 'power2.out'
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(
    ".hero-title, .hero-tagline, .section-text, .feature-card, .product-card, .about-block, .contact-item"
  );

  fadeInElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 300 * index); // stagger effect
  });
});
