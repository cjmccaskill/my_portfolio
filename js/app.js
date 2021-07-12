const $projects = $("#projects");

// Asynchronous Request for the Data in our JSON
$.ajax("./json/projects.json")
  // when the data arrives, do something with it
  .then((data) => {
    // loop over the array of the projects
    data.forEach((project, index) => {
      const $div = $("<div>");
      $div.html(`<h3 class ='project-name'>${project.name}</h3>
        <p class ='project-info'>${project.description}</p>
        <img src ='${project.image}'/>`);

      $("#projects").append($div); //append the div to the projects section
    });
  })
  .catch((error) => console.log(error));

// Event listner for contact form
