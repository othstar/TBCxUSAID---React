// Slider Logic

// Dropdown logic
const dropDown = document.querySelectorAll(".question");
const questionContent = document.querySelectorAll(".question-content");

for (let i = 0; i < dropDown.length; i++) {
  dropDown[i].addEventListener("click", function () {
    questionContent[i].classList.toggle("hidden");
    for (let j = 0; j < dropDown.length; j++) {
      if (questionContent[i] != questionContent[j]) {
        questionContent[j].classList.add("hidden");
      }
    }
  });
}
