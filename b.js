// const continueBtn = document.querySelector("#continueBtn");

// continueBtn.addEventListener("click", function () {

//     window.location.href = "page2.html";

// });
// new

// const continueBtn = document.querySelector("#continueBtn");

// continueBtn.addEventListener("click", function () {

//     window.location.href = "and.html";

// });
// replcae
// const song = document.querySelector("#song");
// const playBtn = document.querySelector("#playBtn");

// let isPlaying = false;

// playBtn.addEventListener("click", function () {

//     if (!isPlaying) {

//         song.play();

//         playBtn.textContent = "❚❚";

//         isPlaying = true;

//     } else {

//         song.pause();

//         playBtn.textContent = "▶";

//         isPlaying = false;
//     }

// });

//  const continueBtn = document.querySelector("#continueBtn");

//  continueBtn.addEventListener("click", function () {

//   window.location.href = "and.html";

//  });


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


// =========================
// CONTINUE BUTTON
// =========================

const continueBtn = document.querySelector("#continueBtn");

continueBtn.addEventListener("click", function () {

    window.location.href = "and.html";

});