document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the div element
  var project1 = document.getElementById("project1");

  // Add a click event listener to the div
  project1.addEventListener("click", function () {
    // Redirect to page2.html
    window.location.href = "seathefuture.html";
  });
});
