const toggle = document.getElementById("toggle_btn");
const basicNum = document.querySelector(".basic-number");
const profNum = document.querySelector(".professional-number");
const masterNum = document.querySelector(".master-number");

toggle.addEventListener("change", function () {
  if (this.checked) {
    basicNum.innerHTML = "19.99";
    profNum.innerHTML = "24.99";
    masterNum.innerHTML = "39.99";
  } else {
    basicNum.innerHTML = "199.99";
    profNum.innerHTML = "249.99";
    masterNum.innerHTML = "399.99";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    toggle.checked = !toggle.checked;
    if (toggle.checked) {
      basicNum.innerHTML = "19.99";
      profNum.innerHTML = "24.99";
      masterNum.innerHTML = "39.99";
    } else {
      basicNum.innerHTML = "199.99";
      profNum.innerHTML = "249.99";
      masterNum.innerHTML = "399.99";
    }
  }
});
