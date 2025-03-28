document.querySelectorAll('nav ul li').forEach(item => {
    let hideTimeout;

    item.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
        const dropdownContent = item.querySelector('.dropdown-content');
        if (dropdownContent) {
            dropdownContent.style.display = 'block';
            setTimeout(() => {
                dropdownContent.style.opacity = '1';
                dropdownContent.style.transform = 'translateY(0)';
            }, 10);
        }
    });


    item.addEventListener('mouseleave', () => {
        const dropdownContent = item.querySelector('.dropdown-content');
        if (dropdownContent) {
            dropdownContent.style.opacity = '0';
            dropdownContent.style.transform = 'translateY(-10px)';
            hideTimeout = setTimeout(() => {
                dropdownContent.style.display = 'none';
            }, 400);        }
    });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");
const images = document.querySelectorAll(".gallery-img");

images.forEach((img) => {
   img.addEventListener("click", function () {
       lightbox.style.display = "flex";
        lightboxImg.src = this.src;
        caption.innerHTML = this.alt;
    });
});

const closeLightbox = document.querySelector(".close");
closeLightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
});


// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mainNav = document.querySelector('.main-nav');

mobileMenuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Dynamic project loading
async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const projects = await response.json();
        
        const projectGrid = document.querySelector('.project-grid');
        projects.forEach(project => {
            const card = createProjectCard(project);
            projectGrid.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card animate-on-scroll';
    card.innerHTML = `
        <img src="${project.thumbnail}" alt="${project.title}" loading="lazy">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="project-link">Learn More</a>
    `;
    return card;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});
