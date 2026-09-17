// =========================
// BIRTHDAY HEART
// =========================

const birthdayHeart = document.querySelector("#birthdayHeart");

birthdayHeart.addEventListener("click", function () {

    // Small click effect
    birthdayHeart.style.transform = "scale(1.4)";

    birthdayHeart.style.filter =
        "drop-shadow(0 0 50px rgba(255, 100, 150, 1))";


    // Open birthday page
    setTimeout(function () {

        window.location.href = "birthday.html";

    }, 600);

});