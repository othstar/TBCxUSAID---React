//Courses
const courses = [
  {
    courseName: "iOS Development",
    imgSrc: "./assets/image/ios-dev.jpg",
  },

  { courseName: "React", imgSrc: "./assets/image/react.jpg" },

  {
    courseName: "Intro to Python",
    imgSrc: "./assets/image/python-intro.jpg ",
  },

  {
    courseName: "Advanced Python",
    imgSrc: "./assets/image/python-adv.jpg ",
  },

  {
    courseName: "Advanced Cybersecurity Course",
    imgSrc: "./assets/image/cyber-sec.jpg",
  },

  {
    courseName: "ToT - Training of Trainers",
    imgSrc: "./assets/image/ToT.jpg",
  },

  {
    courseName: "Blockchain",
    imgSrc: "./assets/image/blockchain.jpg",
  },

  {
    courseName: "DevOps",
    imgSrc: "./assets/image/devops.jpg ",
  },

  {
    courseName: "Information Security Governance",
    imgSrc: "./assets/image/IS.jpg",
  },
];

// Questions

const FAQ = [
  {
    question: "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?",
    answer: `<h4>კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:</h4>
            <p>
              <span>I ეტაპი - </span>პირველ ეტაპზე საჭიროა, შეავსო სასურველი
              კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია
              კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება
              შემოსული განცხადებების გადარჩევა.
            </p>
            <p>
              <span>II ეტაპი - </span>შერჩევის მეორე ეტაპი კურსების მიხედვით
              განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ
              კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის
              შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.
            </p>
            <p>
              <span>III ეტაპი - </span>მესამე ეტაპი კურსების მიხედვით
              განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური
              ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის
              შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა
              მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც თქვენი
              კვლევისა და თვითსწავლის უნარს ამოწმებს.
            </p>
            <p>
              <span>IV ეტაპი - </span>შერჩევის ბოლო მეოთხე ეტაპი მოიცავს
              გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის
              შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი
              ხელშეკრულება.
            </p>
            <p class="add-info">
            * სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო
            კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია
            თუ არა კურსს დასწრების წინაპირობა.
            </p>`,
  },
  {
    question: "შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?",
    answer: `<p class="description">
              TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს
              აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information
              Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ
              შესაძლებელია სწავლის გაგრძელება Advance დონეზე.
             </p>`,
  },
  {
    question: "რა ღირს სწავლა პროგრამის ფარგლებში?",
    answer: `<p class="description">
              პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი
              ბანკისა და USAID-ის მიერ.
             </p>`,
  },
];

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
                                      <a href="#"
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

////////////////////////////////////////////// Header transparent
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-transparent", window.scrollY > 30);
});

////////////////////////////////////////////// Burger bar
const bar = document.querySelector(".burger-bar");
const burgerDiv = document.querySelector(".burger-div");
const overDiv = document.querySelector(".overdiv");
const body = document.querySelector("body");
const openDiv = document.querySelector(".openbar");
const closeDiv = document.querySelector(".closebar");

function closeModal() {
  burgerDiv.classList.toggle("hidden");
  overDiv.classList.toggle("hidden");
  body.classList.toggle("overflow");
  openDiv.classList.toggle("hidden");
  closeDiv.classList.toggle("hidden");
}

bar.addEventListener("click", closeModal);

overDiv.addEventListener("click", closeModal);
