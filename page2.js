const nextBtn = document.querySelector("#nextBtn");
const gettingCloseCard = document.querySelector("#gettingCloseCard");


// =========================
// NEXT BUTTON
// =========================

nextBtn.addEventListener("click", function () {

    window.location.href = "page3.html";

});


// =========================
// GETTING CLOSER CARD
// =========================

gettingCloseCard.addEventListener("click", function () {

    window.location.href = "and.html";

});

const beginningCard = document.querySelector("#beginningCard");
const andThenCard = document.querySelector("#andThenCard");

beginningCard.addEventListener("click", function () {
    window.location.href = "b.html";
});


andThenCard.addEventListener("click", function () {
    window.location.href = "then.html";
});