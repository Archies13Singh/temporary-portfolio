function hamburger() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// typing logic
var typed = new Typed(".auto-input", {
  strings: [
    "Archies Singh",
    "Web Developer",
    "ML Enthusiast",
    "Technical Writer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// acordian skills
const skillsContent = document.querySelectorAll(".skills-content"),
  skillsHeader = document.querySelectorAll(".skills-header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-content skills__close";
  }

  if (itemClass === "skills-content skills__close") {
    this.parentNode.className = "skills-content skills__open";
  }
}

skillsHeader.forEach((e) => {
  e.addEventListener("click", toggleSkills);
});

// for project section , showing activeness in the tab
$(document).on("click", ".project-filter li", function () {
  $(this)
    .addClass("project-filter-active ")
    .siblings()
    .removeClass("project-filter-active");
});

// for project -filter

$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".Project-box").show("1000");
    } else {
      $(".Project-box")
        .not("." + value)
        .hide("1000");
      $(".Project-box")
        .filter("." + value)
        .show("1000");
    }
  });
});

// sticky attitude

$(window).scroll(function(e){ 
  var $el = $('.modes'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 200 && !isPositionFixed){ 
    $el.css({'position': 'fixed', 'top': '0px'}); 
  }
  if ($(this).scrollTop() < 200 && isPositionFixed){
    $el.css({'position': 'static', 'top': '0px'}); 
  } 
});


// mode

var icon = document.getElementById("icon")
icon.onclick= function(){
  document.body.classList.toggle("dark-theme")
  document.body.classList.toggle("special-case")

  if(document.body.classList.contains("dark-theme")){
    icon.src = "../images/moon.png"
  }
  else{
    icon.src ="../images/sun.png"
  }
}