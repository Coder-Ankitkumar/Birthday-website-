// =========================
// SONG
// =========================

const playBtn = document.querySelector("#playBtn");
const song = document.querySelector("#song");


// =========================
// AUTO PLAY AFTER 1.2 SEC
// =========================

setTimeout(() => {

    song.play().then(() => {

        playBtn.textContent = "❚❚";

    }).catch(() => {

        console.log("Autoplay blocked by browser.");

    });

}, 1200);


// =========================
// PLAY / PAUSE
// =========================

playBtn.addEventListener("click", function () {

    if (song.paused) {

        song.play();
        playBtn.textContent = "❚❚";

    } else {

        song.pause();
        playBtn.textContent = "▶";

    }

});


// =========================
// CONTINUE
// =========================

const continueBtn = document.querySelector("#continueBtn");

continueBtn.addEventListener("click", function () {

    window.location.href = "page2.html";

});