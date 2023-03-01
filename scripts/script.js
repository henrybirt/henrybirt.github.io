/* Open */
function openNav() {
  document.getElementById("overlay").style.display = "block";
}

/* Close */
function closeNav() {
  document.getElementById("overlay").style.display = "none";
}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let title = document.getElementById("title")
  let navlist = document.getElementById("links")
  let menubtn = document.getElementById("menu-btn")

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    title.style.fontSize= "2.5em";
    menubtn.style.fontSize= "2em";
    navlist.style.fontSize= "0em";

  } else {
    title.style.fontSize= "5em";
    menubtn.style.fontSize = "4em";
    navlist.style.fontSize = "2em";

  }
}
