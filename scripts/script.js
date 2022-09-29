var ph = window.innerHeight;
const os = 0.25
const pages = ['.home', '.music', '.tickets']

window.addEventListener('scroll', () => {
  vh = window.innerHeight;
  for (var i = 0; i < pages.length; i++) {
    updatePage(document.querySelector(pages[i]),i)
  }
})

function updatePage(page, pn){
  //console.log(window.scrollY);
  topOS = ph*0.2
  bttOS = ph*0.2
  if (window.scrollY >= ph*(pn-1)+topOS && window.scrollY <= ph*(pn+1)-bttOS) {
    page.classList.remove("fadeout");
    page.classList.add("fadein");
  }
  else {
    page.classList.remove("fadein");
    page.classList.add("fadeout");
  }
}
