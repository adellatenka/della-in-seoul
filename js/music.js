document.addEventListener('DOMContentLoaded', () => {

    Array.from(document.getElementsByClassName("big-cover")).forEach(cover => {
        const audioId = cover.id.replace('cover', 'mp3');
        const audio = document.getElementById(audioId);

        cover.addEventListener('mousedown', () => {
            if (!audio.paused && audio.currentTime > 0 && !audio.ended) {
                audio.pause();
            } else {
                audio.play();
            }
        });

        const ipodId = cover.id.replace('cover', 'ipod');
        const ipod = document.getElementById(ipodId);
        ipod.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                const concertId = cover.id.replace('-cover', '');
                toggleConcert(concertId);
            }
        });

        cover.addEventListener('keydown', function (event) {
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
    var i, tabcontent;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("concert-screen");
    for (i = 0; i < tabcontent.length; i++) {
        if (tabcontent[i].id !== concert_id) {
            hideConcert(tabcontent[i].id);
        }
    }

    var concert = document.getElementById(concert_id);
    concert.classList.remove('hidden');
    concert.classList.add('visible');
    concert.setAttribute('aria-hidden', 'false')
}