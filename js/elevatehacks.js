//about us
// Original JavaScript code by Chirp Internet: chirpinternet.eu
// Please acknowledge use of this code by including this header.

window.addEventListener("DOMContentLoaded", function (e) {

  var stage = document.getElementById("stage");
  var fadeComplete = function (e) { stage.appendChild(arr[0]); };
  var arr = stage.getElementsByTagName("a");
  for (var i = 0; i < arr.length; i++) {
    arr[i].addEventListener("animationend", fadeComplete, false);
  }

}, false);

// schedule 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("schedule-slide");
  var dots = document.getElementsByClassName("schedule-dot");
  var day1 = 14;

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  var date = day1 + slideIndex - 1;
  document.getElementById("schedule-date").innerHTML = "August " + date + "th";

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var events = [{ name: "Zoom Opening", description: "Zoom Opening" },
{ name: "Opening Ceremony + Theme Declaration", description: "Opening Ceremony + Theme Declaration" },
{ name: "Team Formation", description: "Team Formation" },
{ name: "Intro to GitHub", description: "Intro to GitHub" },
{ name: "Intro to Web Development (Qoom)", description: "Intro to Web Development (Qoom)" },
{ name: "AI Ethics ft College Pressors", description: "AI Ethics ft College Pressors" },
{ name: "Women in Tech Panel", description: "Women in Tech Panel" },
{ name: "College Tech Leaders Panel", description: "College Tech Leaders Panel" },
{ name: "Intro to IOS/Android Development", description: "Intro to IOS/Android Development" },
{ name: "Creative Coding with Python (ImagiLabs)", description: "Creative Coding with Python (ImagiLabs)" },
{ name: "Pitching Basics", description: "Pitching Basics" },
{ name: "Zoom Reopens", description: "Zoom Reopens" },
{ name: "Submissions Due", description: "Submissions Due" },
{ name: "Submission Validation", description: "Submission Validation" },
{ name: "Late Submissions Due (FINAL CALL)", description: "Late Submissions Due (FINAL CALL)" },
{ name: "Judging & Presentation Period", description: "Judging & Presentation Period" },
{ name: "Intro to LinkedIn & Resume Building", description: "Intro to LinkedIn & Resume Building" },
{ name: "Social Hour & Game Period", description: "Social Hour & Game Period" },
{ name: "Awards and Closing Ceremony", description: "Awards and Closing Ceremony" }
];

function clickedScheduleRow(row) {
  var eventTitle = row.getElementsByTagName("td")[0].innerHTML;

  document.getElementById("event-box-title").innerHTML = eventTitle;
  for (i = 0; i < events.length; i++) {
    if (events[i].name === eventTitle) {
      document.getElementById("event-description-text-testing").innerHTML = events[i].description;
      break;
    }
  }
}
