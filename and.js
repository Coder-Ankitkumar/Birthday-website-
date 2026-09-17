const song = document.querySelector("#song");
const playBtn = document.querySelector("#playBtn");

let isPlaying = false;


// =========================
// AUTO PLAY AFTER 1.2 SEC
// =========================

setTimeout(() => {

    song.play().then(() => {

        isPlaying = true;
        playBtn.textContent = "❚❚";

    }).catch(() => {

        console.log("Autoplay blocked by browser.");

    });

}, 1200);


// =========================
// PLAY / PAUSE BUTTON
// =========================

playBtn.addEventListener("click", function () {

    if (song.paused) {

        song.play();

        playBtn.textContent = "❚❚";
        isPlaying = true;

    } else {

        song.pause();

        playBtn.textContent = "▶";
        isPlaying = false;

    }

});