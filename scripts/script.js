/* Open */
function openNav() {
  document.getElementById("overlay").style.display = "block";
}

/* Close */
function closeNav() {
  document.getElementById("overlay").style.display = "none";
}

function changeImage(direction) {
  const images = ["images/open-my-eyes.jpeg","images/leave-here.jpeg","images/rainbows.jpeg"]
  const titles = ["OPEN MY EYES", "LEAVE HERE IN THE MORNING", "RAINBOWS I COULD NOT SEE"]
  const links = ["spotify:album:7i4nqSu22IDtVnNqTrFk2f","https://open.spotify.com/track/7f2vbvMPUMRjhrYKEpn4NC?si=VeyaMHmBQj-KpZg77ql49w","https://open.spotify.com/track/6nUThNvaU7ZuCcFVotmwxj?si=QHfYKP3lSDuLRW23YSaYZA"]
  let active = document.getElementById("active");
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");
  let text = document.getElementById("song-title");
  let link = document.getElementById("song-link");
  let imglink = document.getElementById("img-link");

  active.style.opacity = 0;
  if (direction == "left-btn"){
    prev.style.opacity = 1;
    prev.setAttribute("id", "active");
    str = prev.src
    str = str.substring(str.indexOf("images"));
    text.innerHTML = titles[images.indexOf(str)];
    link.href = links[images.indexOf(str)];
    imglink.href = links[images.indexOf(str)];

    active.setAttribute("id", "next");
    next.setAttribute("id", "prev");
  }
  else if (direction == "right-btn") {
    next.style.opacity = 1;
    prev.setAttribute("id", "next");
    active.setAttribute("id", "prev");
    next.setAttribute("id", "active");
    str = next.src
    str = str.substring(str.indexOf("images"));
    text.innerHTML = titles[images.indexOf(str)];
    link.href = links[images.indexOf(str)];
    imglink.href = links[images.indexOf(str)];
  }
  // document.getElementById("discog-img").src = "images/open-my-eyes.jpeg";
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

window.onload = function() {
  setInterval(function(){
       changeImage("right-btn");
   }, 5000);
};
