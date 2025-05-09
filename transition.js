const videos = document.querySelectorAll('.car-video');
const nextButton = document.querySelector('.next-btn');

const movieList = [
    'videos/car-1.mp4',
    'videos/car-2.mp4',
    'videos/car-3.mp4',
    'videos/car-4.mp4'
];

let index = 0;

function switchVideo() {
    const current = document.querySelector('.car-video.active');
    const next = document.querySelector('.car-video.next');

    index = (index + 1) % movieList.length;
    next.src = movieList[index];

    next.load();
    next.play().then(() => {
        // Attach 'ended' listener once the video starts playing
        next.addEventListener('ended', switchVideo, { once: true });
    });

    next.classList.add('active');
    current.classList.remove('active');

    setTimeout(() => {
        current.classList.remove('next');
        next.classList.remove('next');

        current.classList.add('next');
        next.classList.add('active');
    }, 1000); // Transition duration
}

nextButton.addEventListener('click', () => {
    const current = document.querySelector('.car-video.active');
    current.removeEventListener('ended', switchVideo);
    switchVideo();
});

// Initial setup
videos[0].src = movieList[0];
videos[0].load();
videos[0].play().then(() => {
    videos[0].addEventListener('ended', switchVideo, { once: true });
});

//thankyou for seeing these files dont copy 