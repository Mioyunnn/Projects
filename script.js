const icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "dark theme icon/moon.png";
  } else {
    icon.src = "dark theme icon/sun.png";
  }
};
//連結們
document.getElementById("project-1").addEventListener("click", function () {
  window.location.href = "Product Page Design/index.html";
});
document.getElementById("project-2").addEventListener("click", function () {
  window.location.href = "Image Search Engine/index.html";
});
document.getElementById("project-3").addEventListener("click", function () {
  window.location.href = "todo-list/index.html";
});
document.getElementById("project-4").addEventListener("click", function () {
  window.location.href = "Voice Converter/index.html";
});
document.getElementById("project-5").addEventListener("click", function () {
  window.location.href = "Toast Notification/index.html";
});
document.getElementById("project-6").addEventListener("click", function () {
  window.location.href = "Subscribe Form to Google Sheet/index.html";
});
document.getElementById("project-7").addEventListener("click", function () {
  window.location.href = "Stop watch/index.html";
});
document.getElementById("project-8").addEventListener("click", function () {
  window.location.href = "Quote Generator/index.html";
});
document.getElementById("project-9").addEventListener("click", function () {
  window.location.href = "QR Code Generator/index.html";
});
document.getElementById("project-10").addEventListener("click", function () {
  window.location.href = "Popup/index.html";
});
document.getElementById("project-11").addEventListener("click", function () {
  window.location.href = "Password toggle/index.html";
});
document.getElementById("project-12").addEventListener("click", function () {
  window.location.href = "Password Strength detector/index.html"
});
document.getElementById("project-13").addEventListener("click", function () {
  window.location.href = "Notes App/index.html";
});
document.getElementById("project-14").addEventListener("click", function () {
  window.location.href = "Music Player/index.html";
});
document.getElementById("project-15").addEventListener("click", function () {
  window.location.href = "Mini Calendar/index.html";
});
document.getElementById("project-16").addEventListener("click", function () {
  window.location.href = "Image Background Transition/index.html";
});
document.getElementById("project-17").addEventListener("click", function () {
  window.location.href = "Horizontal Scroll Image Gallery/index.html";
});
document.getElementById("project-18").addEventListener("click", function () {
  window.location.href = "Form Validation/index.html";
});
document.getElementById("project-19").addEventListener("click", function () {
  window.location.href = "Select Menu/index.html";
});
document.getElementById("project-20").addEventListener("click", function () {
  window.location.href = "Coming Soon Page/index.html";
});
document.getElementById("project-21").addEventListener("click", function () {
  window.location.href = "Calculator/index.html";
});
document.getElementById("project-22").addEventListener("click", function () {
  window.location.href = "Age Calculator/index.html";
});
document.getElementById("project-23").addEventListener("click", function () {
  window.location.href = "Circular Progress Bar/index.html";
});
document.getElementById("project-24").addEventListener("click", function () {
  window.location.href = "Cryptocurrency/index.html";
});
document.getElementById("project-25").addEventListener("click", function () {
  window.location.href = "Digital Clock/index.html";
});
document.getElementById("project-26").addEventListener("click", function () {
  window.location.href = "Drag & Drop/index.html";
});
document.getElementById("project-27").addEventListener("click", function () {
  window.location.href = "Quiz App/index.html";
});
document.getElementById("project-28").addEventListener("click", function () {
  window.location.href = "Random Password Generator/index.html";
});
document.getElementById("project-29").addEventListener("click", function () {
  window.location.href = "projects/Shop/index.html";
});

let dates = [
  "2024 / 7 / 15",
  "2024 / 7 / 15",
  "2024 / 7 / 16",
  "2024 / 7 / 16",
  "2024 / 7 / 14",
  "2024 / 7 / 14",
  "2024 / 7 / 09",
  "2024 / 7 / 09",
  "2024 / 7 / 07",
  "2024 / 7 / 06",
  "2024 / 7 / 06",
  "2024 / 7 / 07",
  "2024 / 7 / 03",
  "2024 / 7 / 03",
  "2024 / 7 / 04",
  "2024 / 7 / 12",
  "2024 / 7 / 15",
  "2024 / 7 / 13",
  "2024 / 7 / 04",
  "2024 / 7 / 13",
  "2024 / 7 / 12",
  "2024 / 7 / 10",
  "2024 / 7 / 10",
  "2024 / 7 / 15",
  "2024 / 7 / 17",
  "2024 / 7 / 17",
  "2024 / 7 / 11",
  "2024 / 7 / 05",
  "2024 / 8 / 01",

];
let originLangs = "<span>HTML</span>, <span>CSS</span>, <span>JS</span>";
let currentLangs = document.querySelectorAll(".fr p");

currentLangs.forEach((langElement, index) => {
  langElement.addEventListener("mouseover", () => {
    langElement.innerHTML = dates[index];
  });

  langElement.addEventListener("mouseleave", () => {
    langElement.innerHTML = originLangs;
  });
});

const basicProjectsBtn = document.getElementById("btn-1");
const projectsBtn = document.getElementById("btn-2");
const basicProjects = document.querySelectorAll(".project-box div");
const projects = document.querySelectorAll(".project");


basicProjects.forEach(basicProject => {
  basicProjectsBtn.addEventListener("click", () => {
    basicProject.style.display = "block";
  });
  projectsBtn.addEventListener("click", () => {
    basicProject.style.display = "none";
  });
})

projects.forEach(project => {
  basicProjectsBtn.addEventListener("click", () => {
    project.style.display = "none";
  });
  projectsBtn.addEventListener("click", () => {
    project.style.display = "block";
  })
})

// TagName will call back a Collection, so I need to add [0] stuff.
const main = document.getElementsByTagName("main")[0];
const arrow = document.querySelector(".arrow");

arrow.addEventListener("click" , () => {
  const mainPosition = main.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: mainPosition, behavior: "smooth"});
})

// Search function

const searchBox = document.getElementById("search");

const filterItems = () => {
  const searchValue = searchBox.value.toLowerCase();
  const projects = document.querySelectorAll(".fr");

  projects.forEach(project => {
    const projectName = project.querySelector("h2").textContent.toLowerCase();
    if(projectName.includes(searchValue)){
      project.style.display = "block";
    }
    else{
      project.style.display = "none";
    }
  });
};

searchBox.addEventListener("input", filterItems);
