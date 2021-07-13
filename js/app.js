// Nav-bar button toggle
// const navToggle = document.querySelector(".nav-button-toggle");

// navToggle.addEventListener("click", () => {
//   document.body.classList.toggle("nav-is-open");
// });

const $button = document.querySelector(".nav-button-toggle"),
  $navmenu = $("#nav-menu"),
  visible = true;

button.addEventListener("click", () => {
  // document.body.classList.toggle("nav-is-open");
  if (visible) {
    $navmenu.slideUp("fast", () => {
      $navmenu.addClass("hide").slideDown(0);
    });
  } else {
    $navmenu.slideUp(0, () => {
      $navmenu.removeClass("hide").slideDown("fast");
    });
  }
  visible = !visible;
});



// Asynchronous Request for the Data in our JSON
const $projects = $("#projects");

$.ajax("./json/projects.json")
  // when the data arrives, do something with it
  .then((data) => {
    // loop over the array of the projects
    data.forEach((project, index) => {
      const $div = $("<div>");
      $div.html(`<h3 class ='project-name'>${project.name}</h3>
        <p class ='project-info'>${project.description}</p>
        <img src = '${project.image}'/>
        <a class ='project-github'>${project.github}</a>
        <a class ='project-deployed'>${project.deployed}</a>`);

      $("#projects").append($div); //append the div to the projects section
    });
  })
  .catch((error) => console.log(error));

// Event listner for contact form
