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

<script>
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
</script>
