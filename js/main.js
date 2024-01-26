////////////////////////////////////////////// Import Mock Data

//This is for FAQ questions and answers
const questionsParentElement = document.querySelector(".questions");

for (j = 0; j < FAQ.length; j++) {
  questionsParentElement.innerHTML += `<div class="question border-bottom">
                                        <p>${FAQ[j].question}</p>
                                        <img src="./assets/image/dropdown.png" alt="dropdown" />
                                        </div>
                                        <div class="question-content hidden">
                                        ${FAQ[j].answer}
                                      </div>`;
}

/////This if for Cycle for courses
const parentElement = document.querySelector(".cards-container");

for (u = 0; u < courses.length; u++) {
  parentElement.innerHTML += `   <div class="card">
                                  <div class="card-img">
                                    <img src="${courses[u].imgSrc}" />
                                  </div>
                                  <div class="card-info">
                                    <h3>${courses[u].courseName}</h3>
                                    <span>რეგისტრაცია დასრულებულია</span>
                                    <div class="details">
                                      <img src="./assets/image/right-arrow.png" alt="right-arrow" />
                                      <a href="https://www.tbcacademy.ge/usaid/ios-development"
                                        >კურსის დეტალები</a
                                      >
                                    </div>
                                  </div>
                                </div>`;
}

//////////////////////////////////////////////// Slider Logic
const leftArrow = document.querySelector(".left-arrow");
const rigthArrow = document.querySelector(".right-arrow");
const photos = document.querySelectorAll(".photos");
const dots = document.querySelectorAll(".dot");
let i = 0;

// Right arrow functionality
function rightArrowClick() {
  if (i == 2) {
    photos[i].classList.add("hidden");
    i = 0;
    photos[i].classList.remove("hidden");
  } else {
    photos[i].classList.add("hidden");
    photos[i + 1].classList.remove("hidden");
    i++;
  }
}

// Slide auto-switcher (left to right)
setInterval(() => {
  rightArrowClick();
}, 3000);

// Left arrow functionality
function leftArrowClick() {
  if (i == 0) {
    photos[i].classList.add("hidden");
    i = 2;
    photos[i].classList.remove("hidden");
  } else {
    photos[i].classList.add("hidden");
    photos[i - 1].classList.remove("hidden");
    i--;
  }
}

rigthArrow.addEventListener("click", rightArrowClick);
leftArrow.addEventListener("click", leftArrowClick);

// Dots functionality
function dotsSwitcher(i) {
  switch (i) {
    case 0:
      photos[0].classList.remove("hidden");
      photos[1].classList.add("hidden");
      photos[2].classList.add("hidden");
      break;
    case 1:
      photos[0].classList.add("hidden");
      photos[1].classList.remove("hidden");
      photos[2].classList.add("hidden");
      break;

    case 2:
      photos[0].classList.add("hidden");
      photos[1].classList.add("hidden");
      photos[2].classList.remove("hidden");
      break;
    default:
      break;
  }
}

for (let j = 0; j < dots.length; j++) {
  dots[j].addEventListener("click", function () {
    dotsSwitcher(j);
  });
}

////////////////////////////////////////////// Dropdown logic
const dropDown = document.querySelectorAll(".question");
const questionContent = document.querySelectorAll(".question-content");
const imgElement = document.querySelectorAll(".question img");
for (let i = 0; i < dropDown.length; i++) {
  dropDown[i].addEventListener("click", function () {
    questionContent[i].classList.toggle("hidden");
    questionContent[i].classList.toggle("border-bottom");
    dropDown[i].classList.toggle("border-bottom");
    // Rotate the image when the <p> tag is clicked
    imgElement[i].style.transform = questionContent[i].classList.contains(
      "hidden"
    )
      ? "rotate(0deg)"
      : "rotate(180deg)";
    for (let j = 0; j < dropDown.length; j++) {
      // Opening another question causes closing first one
      if (questionContent[i] != questionContent[j]) {
        questionContent[j].classList.add("hidden");
        questionContent[i].classList.add("border-bottom");
        dropDown[j].classList.add("border-bottom");
        imgElement[j].style.transform = "rotate(0deg)"; // Reset rotation for other images
      }
    }
  });
}

////////////////////////////////////////////// header transparent
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-transparent", window.scrollY > 30);
});

////////////////////////////////////////////// burger bar
const bar = document.querySelector(".burger-bar");
const burgerDiv = document.querySelector(".burger-div");
const overDiv = document.querySelector(".overdiv");
const body = document.querySelector("body");
const openDiv = document.querySelector(".openbar");
const closeDiv = document.querySelector(".closebar");

bar.addEventListener("click", function () {
  burgerDiv.classList.toggle("hidden");
  overDiv.classList.toggle("hidden");
  body.classList.toggle("overflow");
  openDiv.classList.toggle("hidden");
  closeDiv.classList.toggle("hidden");
});

overDiv.addEventListener("click", function () {
  burgerDiv.classList.toggle("hidden");
  overDiv.classList.toggle("hidden");
  body.classList.toggle("overflow");
  openDiv.classList.toggle("hidden");
  closeDiv.classList.toggle("hidden");
});
