const bar = document.querySelector(".bar");
const links = document.getElementsByClassName("link");
// const links = document
bar.addEventListener("click", () => {
  setTimeout(myFunction, 100);
  for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle("show");
  }
});
function myFunction() {
  if (bar.firstElementChild.classList.contains("fa-x")) {
    bar.firstElementChild.classList.replace("fa-x", "fa-bars");
  } else {
    bar.firstElementChild.classList.replace("fa-bars", "fa-x");
  }
}

// Back to top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

document.getElementById("myBtn").addEventListener("click", topFunction);
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
