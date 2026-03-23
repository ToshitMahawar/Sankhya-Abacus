const button = document.querySelector(".clear");
const beads = document.querySelectorAll(".bead-upper");
const display = document.querySelector("#Display");
let isUp = false;

button.addEventListener("click", () => {
  beads.forEach(bead => {
    bead.classList.toggle("up", !isUp);
  });
  isUp = !isUp;
});

// const buttons = document.querySelectorAll(".btn");

// let expression = "";

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const value = button.innerText;

//     // Clear
//     if (value === "C") {
//       expression = "";
//       display.value = "";
//       return;
//     }

// //     // Calculate
// //     if (value === "=") {
// //       try {
// //         expression = Function("return " + expression)();
// //         display.value = expression;
// //       } catch {
// //         display.value = "Error";
// //         expression = "";
// //       }
// //       return;
// //     }

// //     // Append number/operator
// //     expression += value;
// //     display.value = expression;
// //   });
// // });


// SELECT DISPLAY
 display = document.querySelector(".display p");

// SELECT ALL BEADS
const upperBeads = document.querySelectorAll(".bead-upper");
const lowerBeads = document.querySelectorAll(".bead-lower");

// CLEAR BUTTON
const clearBtn = document.querySelector(".clear");

// ----------------------------
// 🟢 TOGGLE BEADS
// ----------------------------

// Upper beads (5 value)
upperBeads.forEach((bead, index) => {
    bead.addEventListener("click", () => {
        bead.classList.toggle("active");
        updateValue();
    });
});

// Lower beads (1 value)
lowerBeads.forEach((bead, index) => {
    bead.addEventListener("click", () => {
        bead.classList.toggle("active");
        updateValue();
    });
});


// ----------------------------
// 🧮 CALCULATE VALUE
// ----------------------------

function updateValue() {

    let total = 0;

    // LOOP THROUGH 18 RODS
    for (let i = 0; i < 18; i++) {

        let rodValue = 0;

        // Upper bead (each rod has 1)
        if (upperBeads[i].classList.contains("active")) {
            rodValue += 5;
        }

        // Lower beads (4 per rod)
        for (let j = i * 4; j < i * 4 + 4; j++) {
            if (lowerBeads[j].classList.contains("active")) {
                rodValue += 1;
            }
        }

        // PLACE VALUE (units, tens, hundreds...)
        total += rodValue * Math.pow(10, 17 - i);
    }

    display.innerText = total;
}


// ----------------------------
// ❌ CLEAR BUTTON
// ----------------------------

clearBtn.addEventListener("click", () => {

    upperBeads.forEach(bead => bead.classList.remove("active"));
    lowerBeads.forEach(bead => bead.classList.remove("active"));

    display.innerText = "0";
});

