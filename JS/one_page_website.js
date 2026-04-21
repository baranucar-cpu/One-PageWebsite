// Select all thumbnail images
const thumbnails = document.querySelectorAll('.thumbnail');

// Select lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

// Open lightbox when a thumbnail is clicked
thumbnails.forEach(img => {
    img.addEventListener('click', () => {
        const largeSrc = img.getAttribute('data-large') || img.src;
        lightboxImage.src = largeSrc;
        lightbox.style.display = 'flex';
    });
});

// Close lightbox when the close button is clicked
lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
