document.addEventListener('DOMContentLoaded', function() {
    // Create floating elements
    createFloatingElements();
    
    // Initialize music control
    const musicControl = document.getElementById('music-control');
    const musicToggle = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('bg-music');
    
    // Show music control after 5 seconds
    setTimeout(() => {
        musicControl.classList.remove('hidden');
    }, 5000);
    
    // Toggle music
    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.innerHTML = '<i data-feather="volume-2"></i>';
            feather.replace();
        } else {
            bgMusic.pause();
            musicToggle.innerHTML = '<i data-feather="volume-x"></i>';
            feather.replace();
        }
    });
    
    // Gift button functionality
    const giftBtn = document.getElementById('gift-btn');
    const giftModal = document.getElementById('gift-modal');
    const closeGift = document.getElementById('close-gift');
    
    giftBtn.addEventListener('click', function() {
        giftModal.classList.remove('hidden');
    });
    
    closeGift.addEventListener('click', function() {
        giftModal.classList.add('hidden');
    });
    
    // Carousel auto-scroll
    const carousel = document.getElementById('memories-carousel');
    let scrollAmount = 0;
    
    function autoScrollCarousel() {
        scrollAmount += 1;
        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount = 0;
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    }
    
    setInterval(autoScrollCarousel, 50);
});

function createFloatingElements() {
    const container = document.getElementById('floating-elements');
    const types = ['heart', 'star', 'circle'];
    const colors = ['text-pink-300', 'text-purple-300', 'text-yellow-300'];
    
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        const type = types[Math.floor(Math.random() * types.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        element.className = `floating ${color}`;
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.fontSize = `${Math.random() * 20 + 10}px`;
        element.style.animationDuration = `${Math.random() * 10 + 5}s`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        
        if (type === 'heart') {
            element.innerHTML = '<i data-feather="heart"></i>';
        } else if (type === 'star') {
            element.innerHTML = '<i data-feather="star"></i>';
        } else {
            element.innerHTML = '<i data-feather="circle"></i>';
        }
        
        container.appendChild(element);
    }
    
    feather.replace();
}