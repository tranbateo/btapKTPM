// JavaScript to add interactivity to the webpage

// Function to add smooth scrolling to anchor links
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for fixed header height
            behavior: 'smooth'
        });
    });
});


    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('class');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
// JavaScript để ẩn thông báo
document.addEventListener("DOMContentLoaded", function() {
    // Thêm sự kiện click để ẩn thông báo khi người dùng nhấn vào
    const notifications = document.querySelectorAll('.notification-box');

        });
    
