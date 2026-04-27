document.addEventListener("DOMContentLoaded", () => {

  const button = document.querySelectorByClass(".clear");
  const beads = document.querySelectorAll(".bead-upper");

  let isUp = false;

  button.addEventListener("click", () => {
    beads.forEach(bead => {
      bead.classList.toggle("up", !isUp);
    });
    isUp = !isUp;
  });

});
