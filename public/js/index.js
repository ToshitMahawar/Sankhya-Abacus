const textEl = document.getElementById("sliderText");

const words = ["Learn and become a visual learner !" , "Knowledge is Sword of a Student !"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function textSlider() {
    let currentWord = words[wordIndex];

    if (!isDeleting) {
        textEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(textSlider, 1000); // pause after typing
            return;
        }
    } else {
        textEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(textSlider, isDeleting ? 50 : 100);
}

textSlider();
