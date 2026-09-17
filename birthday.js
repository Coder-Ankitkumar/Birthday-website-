// // =========================
// // BIRTHDAY COUNTDOWN
// // =========================

// const startBtn = document.querySelector("#startBtn");
// const birthdayPage = document.querySelector(".birthday-page");
// const countdownScene = document.querySelector("#countdownScene");


// // Hide countdown initially
// countdownScene.style.display = "none";


// // =========================
// // START BUTTON
// // =========================

// startBtn.addEventListener("click", function () {

//     // Hide only the original birthday content
//     startBtn.style.display = "none";

//     document.querySelector(".birthday-small").style.display = "none";
//     document.querySelector("#birthdayText").style.display = "none";
//     document.querySelector(".birthday-heart").style.display = "none";
//     document.querySelector(".birthday-page h2").style.display = "none";
//     document.querySelector(".birthday-message").style.display = "none";


//     // Show countdown
//     countdownScene.style.display = "flex";
//     countdownScene.style.opacity = "1";

//     startCountdown();

// });


// // =========================
// // COUNTDOWN
// // =========================

// function startCountdown() {

//     function updateCountdown() {

//         const now = new Date();

//         let birthday = new Date(
//             now.getFullYear(),
//             8,
//             19,
//             0,
//             0,
//             0
//         );




//        // If this year's birthday has passed,
//        // use next year's birthday

//         if (now >= birthday) {

//             birthday = new Date(
//                 now.getFullYear() + 1,
//                 8,
//                 19,
//                 0,
//                 0,
//                 0
//             );

//         }


//         const difference = birthday - now;


//         const days = Math.floor(
//             difference / (1000 * 60 * 60 * 24)
//         );

//         const hours = Math.floor(
//             (difference / (1000 * 60 * 60)) % 24
//         );

//         const minutes = Math.floor(
//             (difference / (1000 * 60)) % 60
//         );

//         const seconds = Math.floor(
//             (difference / 1000) % 60
//         );


//         document.querySelector("#days").textContent =
//             String(days).padStart(2, "0");

//         document.querySelector("#hours").textContent =
//             String(hours).padStart(2, "0");

//         document.querySelector("#minutes").textContent =
//             String(minutes).padStart(2, "0");

//         document.querySelector("#seconds").textContent =
//             String(seconds).padStart(2, "0");

//     }


//     updateCountdown();

//     setInterval(updateCountdown, 1000);

// }




/// for now 
// =========================================================
// BIRTHDAY WEBSITE - FINAL JS
// =========================================================


// =========================================================
// ELEMENTS
// =========================================================

const startBtn =
    document.querySelector("#startBtn");

const birthdayPage =
    document.querySelector(".birthday-page");

const countdownScene =
    document.querySelector("#countdownScene");

const birthdayReveal =
    document.querySelector("#birthdayReveal");

const cakeScene =
    document.querySelector("#cakeScene");

const finalScene =
    document.querySelector("#finalScene");

const memoryScene =
    document.querySelector("#memoryScene");

const letterScene =
    document.querySelector("#letterScene");


// =========================================================
// INITIAL STATE
// =========================================================

if (countdownScene)
    countdownScene.style.display = "none";

if (birthdayReveal)
    birthdayReveal.style.display = "none";

if (cakeScene)
    cakeScene.style.display = "none";

if (finalScene)
    finalScene.style.display = "none";

if (memoryScene)
    memoryScene.style.display = "none";

if (letterScene)
    letterScene.style.display = "none";


// =========================================================
// START BUTTON
// =========================================================

if (startBtn) {

    startBtn.addEventListener("click", function () {

        startBtn.style.display = "none";

        const elementsToHide = [

            document.querySelector(".birthday-small"),

            document.querySelector("#birthdayText"),

            document.querySelector(".birthday-heart"),

            document.querySelector(".birthday-page > h2"),

            document.querySelector(".birthday-message")

        ];


        elementsToHide.forEach(function (element) {

            if (element) {
                element.style.display = "none";
            }

        });


        if (countdownScene) {

            countdownScene.style.display = "flex";

            countdownScene.style.opacity = "1";

        }


        startCountdown();

    });

}


// =========================================================
// COUNTDOWN
// =========================================================

let countdownTimer = null;

function startCountdown() {

    /*
       =====================================================
       TESTING MODE
       =====================================================

       Website testing ke liye birthday 30 seconds baad.

       ACTUAL DATE ke liye sirf ye date change karna:

       const birthday =
           new Date("2026-09-19T00:00:00");

       =====================================================
    */


    // const birthday =
    //     // new Date(
    //     //     Date.now() + 30 * 1000
    //     // );
        const birthday = new Date("2026-09-19T00:00:00");


    function updateCountdown() {

        const now =
            new Date();

        const difference =
            birthday - now;


        if (difference <= 0) {

            clearInterval(countdownTimer);

            if (countdownScene)
                countdownScene.style.display = "none";


            /*
               IMPORTANT:

               Birthday reveal sirf yahin se open hoga.
               Isliye duplicate HAPPY BIRTHDAY nahi aayega.
            */

            if (birthdayReveal) {

                birthdayReveal.style.display =
                    "flex";

            }

            return;

        }


        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (
                    difference /
                    (1000 * 60 * 60)
                ) % 24
            );


        const minutes =
            Math.floor(
                (
                    difference /
                    (1000 * 60)
                ) % 60
            );


        const seconds =
            Math.floor(
                (
                    difference /
                    1000
                ) % 60
            );


        const daysElement =
            document.querySelector("#days");

        const hoursElement =
            document.querySelector("#hours");

        const minutesElement =
            document.querySelector("#minutes");

        const secondsElement =
            document.querySelector("#seconds");


        if (daysElement)
            daysElement.textContent =
                String(days).padStart(2, "0");

        if (hoursElement)
            hoursElement.textContent =
                String(hours).padStart(2, "0");

        if (minutesElement)
            minutesElement.textContent =
                String(minutes).padStart(2, "0");

        if (secondsElement)
            secondsElement.textContent =
                String(seconds).padStart(2, "0");

    }


    updateCountdown();

    countdownTimer =
        setInterval(
            updateCountdown,
            1000
        );

}


// =========================================================
// CAKE BUTTON
// =========================================================

const cakeBtn =
    document.querySelector("#cakeBtn");


if (cakeBtn) {

    cakeBtn.addEventListener(
        "click",
        function () {

            if (birthdayReveal)
                birthdayReveal.style.display = "none";


            if (cakeScene)
                cakeScene.style.display = "flex";

        }
    );

}


// =========================================================
// MAKE A WISH
// =========================================================

const wishBtn =
    document.querySelector("#wishBtn");

const flame =
    document.querySelector("#cakeScene .flame");


let wishAlreadyMade = false;


if (wishBtn) {

    wishBtn.addEventListener(
        "click",
        function () {

            /*
               Prevent double click.
            */

            if (wishAlreadyMade)
                return;

            wishAlreadyMade = true;


            // =================================================
            // HIDE CAKE HEADING
            // =================================================

            const cakeHeadings =
                document.querySelectorAll(
                    "#cakeScene h1, #cakeScene h2"
                );


            cakeHeadings.forEach(
                function (heading) {

                    heading.style.transition =
                        "opacity 0.6s ease";

                    heading.style.opacity =
                        "0";

                    heading.style.pointerEvents =
                        "none";

                }
            );


            // =================================================
            // BLOW CANDLE
            // =================================================

            if (flame) {

                flame.style.animation =
                    "none";

                flame.style.transition =
                    "all 0.7s ease";

                flame.style.opacity =
                    "0";

                flame.style.transform =
                    "translateX(-50%) scale(0.2)";

            }


            // =================================================
            // HIDE WISH BUTTON
            // =================================================

            wishBtn.style.transition =
                "opacity 0.8s ease";

            wishBtn.style.opacity =
                "0";

            wishBtn.style.pointerEvents =
                "none";


            // =================================================
            // WISH TEXT
            // =================================================

            const wishText =
                document.querySelector(
                    "#cakeScene .wish-text"
                );


            if (wishText) {

                wishText.innerHTML =
                    "Your wish is safe with the stars... ✨";

                wishText.classList.add(
                    "wish-made"
                );

            }


            // =================================================
            // OPEN FINAL SCENE
            // =================================================

            setTimeout(
                function () {

                    if (cakeScene)
                        cakeScene.style.display =
                            "none";


                    if (finalScene)
                        finalScene.style.display =
                            "flex";


                    /*
                       Final scene 6.5 seconds ke baad
                       memory scene open karega.
                    */

                    setTimeout(
                        function () {

                            if (finalScene)
                                finalScene.style.display =
                                    "none";


                            if (memoryScene) {

                                memoryScene.style.display =
                                    "flex";

                                currentMemory = 0;

                                showMemory(
                                    currentMemory
                                );

                            }

                        },

                        6500
                    );

                },

                1800
            );

        }
    );

}


// =========================================================
// MEMORY
// =========================================================

// const memoryImage =
//     document.querySelector("#memoryImage");

// const memoryNumber =
//     document.querySelector("#memoryNumber");

// const memoryTitle =
//     document.querySelector("#memoryTitle");

// const memoryText =
//     document.querySelector("#memoryText");

const nextMemoryBtn =
    document.querySelector("#nextMemoryBtn");


const memories = [

    // {
    //     image:
    //         "last2.jpeg",

    //     number:
    //         "01",

    //     title:
    //         "That beautiful beginning...",

    //     text:
    //         "Some people enter your life " +
    //         "and quietly make it more beautiful."
    // },


    // {
    //     image:
    //         "last1.jpeg",

    //     number:
    //         "02",

    //     title:
    //         "The moments we remember...",

    //     text:
    //         "It's not always the big moments. " +
    //         "Sometimes the smallest memories mean the most."
    // },


    // {
    //     image:
    //         "images/memory3.jpg",

    //     number:
    //         "03",

    //     title:
    //         "Your smile... ❤️",

    //     text:
    //         "If happiness had a face, " +
    //         "I think it would look a little like your smile."
    // },


    {
        image:
            "birthdaypic.jpeg",

        // number:
        //     "04",

        // title:
        //     "And then there was you...",

        // text:
        //     "Out of all the people in this world, " +
        //     "I'm grateful that our paths crossed."
    }

];


let currentMemory = 0;


// =========================================================
// SHOW MEMORY
// =========================================================

function showMemory(index) {

    if (!memoryScene)
        return;


    const memory =
        memories[index];


    if (!memory)
        return;


    const card =
        memoryScene.querySelector(
            ".memory-card"
        );


    if (!card)
        return;


    card.classList.remove(
        "memory-change"
    );


    void card.offsetWidth;


    if (memoryImage)
        memoryImage.src =
            memory.image;


    if (memoryNumber)
        memoryNumber.textContent =
            memory.number;


    if (memoryTitle)
        memoryTitle.textContent =
            memory.title;


    if (memoryText)
        memoryText.textContent =
            memory.text;


    card.classList.add(
        "memory-change"
    );


    if (nextMemoryBtn) {

        if (
            index ===
            memories.length - 1
        ) {

            nextMemoryBtn.textContent =
                "Read My Letter 💌";

        } else {

            nextMemoryBtn.textContent =
                "Next Memory ✨";

        }

    }

}


// =========================================================
// NEXT MEMORY
// =========================================================

if (nextMemoryBtn) {

    nextMemoryBtn.addEventListener(
        "click",
        function () {

            currentMemory++;


            if (
                currentMemory >=
                memories.length
            ) {

                if (memoryScene)
                    memoryScene.style.display =
                        "none";


                openLetter();

                return;

            }


            showMemory(
                currentMemory
            );

        }
    );

}


// =========================================================
// LOVE LETTER
// =========================================================

const letterText =
    document.querySelector("#letterText");

const letterSign =
    document.querySelector(".letter-sign");

const letterContinueBtn =
    document.querySelector("#letterContinueBtn");


const letterMessage =
`Hey beautiful,

Pata nahi ye sab kaise likhun… kyunki jo feel karta hoon, usko words mein exactly bol paana mere liye kabhi easy nahi raha.

Bas itna pata hai ki tum meri life mein ho, aur ye mere liye genuinely special hai.

Tumhare saath judi hui chhoti-chhoti cheezein bhi mere liye important hain. Kabhi koi baat yaad aa jaati hai, kabhi koi photo dekh kar smile aa jaati hai… aur kabhi bina kisi reason ke tum yaad aa jaati ho.

Shayad tumhe pata bhi nahi hai ki tum meri life ka kitna important part ban chuki ho.

Main har baar express nahi kar pata, aur shayad har baar sahi words bhi nahi milte… but I hope you always know that I care about you, genuinely.

Aaj tumhara birthday hai, toh aaj bas tumhari smile dekhna chahta hoon.
Tum khush raho, apne dreams poore karo, aur hamesha wohi rehna jo tum ho.

Aur meri taraf se ek simple sa thank you…

Meri life ka hissa banne ke liye.
Un saari little memories ke liye.
Aur mere liye “special” ban jaane ke liye—bina shayad kabhi realise kiye. ❤️

Pata nahi future mein kya hai…
lekin jo bhi hai, main humari yaadon ko hamesha dil ke bahut kareeb rakhunga.

Happy Birthday, my special one. ❤️

Bas aaj ke din ek baar dil se smile karna…
kyunki tumhari smile sach mein bahut achhi lagti hai. ❤️

— Yours, always

Happy Birthday, beautiful. ❤️`;


let letterIndex = 0;

const typingSpeed = 35;

let letterTypingTimer = null;


// =========================================================
// OPEN LETTER
// =========================================================

function openLetter() {

    if (!letterScene)
        return;


    letterScene.style.display =
        "flex";


    if (letterText) {

        letterText.textContent =
            "";

        letterText.scrollTop =
            0;

    }


    if (letterSign) {

        letterSign.classList.remove(
            "show"
        );

    }


    if (letterContinueBtn) {

        letterContinueBtn.classList.remove(
            "show"
        );

    }


    letterIndex = 0;


    if (letterTypingTimer)
        clearTimeout(letterTypingTimer);


    typeLetter();

}


// =========================================================
// TYPE LETTER
// =========================================================

function typeLetter() {

    if (!letterText)
        return;


    if (
        letterIndex <
        letterMessage.length
    ) {

        letterText.textContent +=
            letterMessage.charAt(
                letterIndex
            );


        letterIndex++;


        /*
           =================================================
           AUTO SCROLL
           =================================================

           Jaise-jaise text type hoga,
           letter automatically neeche scroll karega.
        */

        letterText.scrollTo({

            top:
                letterText.scrollHeight,

            behavior:
                "smooth"

        });


        letterTypingTimer =
            setTimeout(
                typeLetter,
                typingSpeed
            );


        return;

    }


    // =====================================================
    // LETTER FINISHED
    // =====================================================

    setTimeout(
        function () {

            if (letterSign) {

                letterSign.classList.add(
                    "show"
                );

            }


            if (letterContinueBtn) {

                letterContinueBtn.classList.add(
                    "show"
                );

            }


            /*
               Final scroll
            */

            letterText.scrollTo({

                top:
                    letterText.scrollHeight,

                behavior:
                    "smooth"

            });

        },

        700
    );

}


// =========================================================
// ONE LAST THING
// =========================================================

if (letterContinueBtn) {

    letterContinueBtn.addEventListener(
        "click",
        function () {

            letterContinueBtn.style.opacity = "0";
            letterContinueBtn.style.pointerEvents = "none";


            // =================================================
            // ONE LAST THING
            // =================================================

            setTimeout(function () {

                letterScene.innerHTML = `

                    <div class="letter-stars"></div>

                    <p class="letter-small">
                        ✨ One last thing...
                    </p>

                    <div class="letter-card final-message-card">

                        <div class="letter-heart">
                            ❤️
                        </div>

                        <h1>
                            Happy Birthday
                        </h1>

                        <p class="final-message-text">

                            No matter where life takes us,

                            <br><br>

                            I hope you always keep that beautiful smile.

                            <br><br>

                            Keep shining.

                            <br>

                            Keep dreaming.

                            <br>

                            And never forget how special you are.

                            <br><br>

                            ❤️

                        </p>

                    </div>

                    <p
                        style="
                            position:relative;
                            z-index:2;
                            margin-top:18px;
                            color:#ffc5d8;
                            font-size:15px;
                            letter-spacing:1px;
                        "
                    >
                        Happy Birthday, beautiful. ✨
                    </p>

                `;


                // =================================================
                // FINAL SURPRISE
                // =================================================

                setTimeout(function () {

                    letterScene.innerHTML = `

                        <div class="letter-stars"></div>

                        <p
                            class="letter-small"
                            style="
                                margin-bottom:20px;
                            "
                        >
                            ✨ One final surprise...
                        </p>


                        <div class="letter-card final-message-card">

                            <div class="letter-heart">
                                ❤️
                            </div>


                            <h1>
                                You Mean A Lot To Me
                            </h1>


                            <p class="final-message-text">

                                In a world full of people,

                                <br>

                                I'm grateful that I found you.

                                <br><br>

                                I hope this little birthday surprise

                                <br>

                                becomes one of your beautiful memories.

                                <br><br>

                                Keep smiling.

                                <br>

                                Keep shining.

                                <br>

                                And always remember...

                                <br><br>

                                <strong
                                    style="
                                        color:#ffc5d8;
                                    "
                                >
                                    You are truly special. ❤️
                                </strong>

                            </p>

                        </div>


                        <p
                            style="
                                position:relative;
                                z-index:2;
                                margin-top:18px;
                                color:#ffc5d8;
                                font-size:15px;
                                letter-spacing:1px;
                            "
                        >
                            Happy Birthday, beautiful. ✨
                        </p>

                    `;

                }, 9000);


            }, 700);

        }
    );

}