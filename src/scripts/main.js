// This file contains the JavaScript code for the project. 
// It may include functionality for interactivity, such as handling user events or dynamically loading content.

document.addEventListener('DOMContentLoaded', () => {
    const photoGallery = document.getElementById('photo-gallery');

    // Sample array of nature photo URLs
    const naturePhotos = [
        'assets/nature-photos/photo1.jpg',
        'assets/nature-photos/photo2.jpg',
        'assets/nature-photos/photo3.jpg',
        'assets/nature-photos/photo4.jpg',
        'assets/nature-photos/photo5.jpg'
    ];

    // Function to load photos into the gallery
    function loadPhotos() {
        naturePhotos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo;
            img.alt = 'Nature Photo';
            img.classList.add('gallery-image');
            photoGallery.appendChild(img);
        });
    }

    loadPhotos();
});