const nav = document.getElementById('nav');
const header = document.getElementById('header');
const burgBtn = document.getElementById('burgerBtn');
const burgBtnAlt = document.getElementById('burgerBtnAlt');

burgBtn.addEventListener("click", function(){
  document.getElementById('burger_items').classList.add("shown")
  burgBtn.style.display = "none";
  burgBtnAlt.style.display = "block";
})
burgBtnAlt.addEventListener("click", function(){
  document.getElementById('burger_items').classList.remove("shown")
  burgBtnAlt.style.display = "none";
  burgBtn.style.display = "block";
})

window.addEventListener("scroll", function(){
  var offset = window.pageYOffset; 

  // ANIMATION NAVBAR WHEN SCROLLED DOWN
  if(offset > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  // HEADER BACKGROUND PARALLAX
  if (window.innerWidth > 780) {
    header.style.backgroundPositionY = Math.floor(offset * .3) + "px";
  } else {
    header.style.backgroundPositionY = "0px";
  }

})