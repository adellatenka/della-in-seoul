document.addEventListener('DOMContentLoaded', () => {

    Array.from(document.getElementsByClassName("big-cover")).forEach(cover => {
        const audioId = cover.id.replace('cover', 'mp3');
        const audio = document.getElementById(audioId);

        cover.addEventListener('mousedown', () => {
            // if the image at the top of the concert screen box is clicked, pause/play music
            if (!audio.paused && audio.currentTime > 0 && !audio.ended) {
                audio.pause();
            } else {
                audio.play();
            }
        });

        const ipodId = cover.id.replace('cover', 'ipod');
        const ipod = document.getElementById(ipodId);
        ipod.addEventListener('keydown', function (event) {
            // if enter is hit on any of the concert buttons then open the screen (for keyboard accessibility)
            if (event.key === 'Enter') {
                const concertId = cover.id.replace('-cover', '');
                toggleConcert(concertId);
            }
        });

        cover.addEventListener('keydown', function (event) {
            // enter key also triggers music pause/play if the photo is tabbed on
            if (event.key === 'Enter') {
                if (!audio.paused && audio.currentTime > 0 && !audio.ended) {
                    audio.pause();
                } else {
                    audio.currentTime = 0;
                    audio.play();
                }
            }
        });

    });
});

function toggleConcert(concert_id) {
    var concert = document.getElementById(concert_id);

    if (concert.classList.contains('visible')) {
        hideConcert(concert_id);
    }
    else {
        showConcert(concert_id);
    }
}

function hideConcert(concert_id) {
    var concert = document.getElementById(concert_id);

    const audioId = concert_id + '-mp3';
    const audio = document.getElementById(audioId);

    concert.classList.remove('visible');
    concert.classList.add('hidden');
    concert.setAttribute('aria-hidden', 'true')
    if (!audio.paused && audio.currentTime > 0 && !audio.ended) {
        audio.pause();
    }

}

function showConcert(concert_id) {
    var i, pages;

    pages = document.getElementsByClassName("concert-screen");
    for (i = 0; i < pages.length; i++) {
        if (pages[i].id !== concert_id) {
            hideConcert(pages[i].id);
        }
    }

    var concert = document.getElementById(concert_id);
    concert.classList.remove('hidden');
    concert.classList.add('visible');
    concert.setAttribute('aria-hidden', 'false')
}