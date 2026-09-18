const welcomeText = document.querySelector("#welcomeText");
const doorSection = document.querySelector("#doorSection");

const passwordInput = document.querySelector("#password");
const unlockBtn = document.querySelector("#unlockBtn");
const error = document.querySelector("#error");

const continueBtn = document.querySelector("#continueBtn");
const secretMessage = document.querySelector("#secretMessage");
const storySection = document.querySelector("#storySection");

const nextBtn = document.querySelector("#nextBtn");


// =========================
// FIRST SCREEN
// =========================

welcomeText.addEventListener("click", function () {

    welcomeText.style.display = "none";

    doorSection.style.display = "flex";

});


// =========================
// PASSWORD + GATE
// =========================

unlockBtn.addEventListener("click", function () {

    // PASSWORD = 1119

    if (passwordInput.value === "1911") {

        error.textContent = "";

        // Open gate

        document
            .querySelector(".door")
            .classList.add("open");


        // Show secret message after gate opens

        setTimeout(function () {

            secretMessage.style.display = "block";

            continueBtn.style.display =
                "inline-block";

            continueBtn.style.visibility =
                "visible";

            continueBtn.style.opacity =
                "1";

        }, 1500);


    } else {

        error.textContent =
            "Wrong password 😅 Try again!";

    }

});


// =========================
// CONTINUE BUTTON
// =========================

continueBtn.addEventListener("click", function () {

    // Hide secret message

    secretMessage.style.display =
        "none";


    // Hide gate

    document
        .querySelector(".door")
        .style.display =
        "none";


    // Hide password section

    document
        .querySelector("#doorSection > h2")
        .style.display =
        "none";

    document
        .querySelector("#doorSection > p")
        .style.display =
        "none";

    passwordInput.style.display =
        "none";

    unlockBtn.style.display =
        "none";

    error.style.display =
        "none";


    // Show story

    storySection.style.display =
        "block";

});


// =========================
// STORY NEXT BUTTON
// =========================

nextBtn.addEventListener("click", function () {

    window.location.href =
        "page2.html";

});