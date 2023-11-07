const container1 = document.getElementsByClassName("container1")[0];
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const bbc3 = document.getElementsByClassName("bbc3")[0];
const bbc4 = document.getElementsByClassName("bbc4")[0];
const button4 = document.getElementById("button4");
const button9 = document.getElementById("button9");
const audio = document.getElementById("bm");
const word_choice1 = document.getElementById("f1");
const word_choice2 = document.getElementById("nf1");
const word_choice3 = document.getElementById("f2");
const word_choice4 = document.getElementById("nf2");
const container2 = document.getElementsByClassName("container2")[0];
const container3 = document.getElementsByClassName("container3")[0];
const container4 = document.getElementsByClassName("container4")[0];

button1.addEventListener("mouseover", function () {
    button1.style.backgroundColor = "#35595e";
    word_choice1.style.color = "black";
});

button1.addEventListener("mouseout", function () {
    button1.style.backgroundColor = "#3a5358";
    word_choice1.style.color = "white";
});

button2.addEventListener("mouseover", function () {
    button2.style.backgroundColor = "#35595e";
    word_choice2.style.color = "black";
});

button2.addEventListener("mouseout", function () {
    button2.style.backgroundColor = "#3a5357";
    word_choice2.style.color = "white";
});

button3.addEventListener("mouseover", function () {
    button3.style.backgroundColor = "#35595e";
    word_choice3.style.color = "black";
});

button3.addEventListener("mouseout", function () {
    button3.style.backgroundColor = "#3a5357";
    word_choice3.style.color = "white";
});

button4.addEventListener("mouseover", function () {
    button4.style.backgroundColor = "#35595e";
    word_choice4.style.color = "black";
});

button4.addEventListener("mouseout", function () {
    button4.style.backgroundColor = "#3a5357";
    word_choice4.style.color = "white";
});

button9.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

button1.addEventListener("click", function () {
    if (container2.style.display === "none" && bbc3.style.display === "none" && bbc4.style.display === "none") {
        container2.style.display = "block";
        bbc3.style.display = "block";
        bbc4.style.display = "block";
        container1.style.display = "none";
        button1.style.display = "none";
        button2.style.display = "none";
    }
});

button3.addEventListener("click", function () {
    if (container3.style.display === "none") {
        container3.style.display = "block";
        container2.style.display = "none";
        button3.style.display = "none";
        button4.style.display = "none";
        // After 5 seconds, switch to container4 and hide container3
        setTimeout(() => {
            container4.style.display = "block";
            container3.style.display = "none";
        }, 5000);
    }
});


