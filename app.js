// Variables for Dom-manipulation

let navIcon1 = document.getElementById("mobile-nav-icon1");
let navIcon2 = document.getElementById("mobile-nav-icon2");
let nav = document.querySelector(".nav-links");
let blur=document.querySelector(".blur-background");
let applyForm=document.querySelector(".apply-form");
let form1=document.querySelector(".user-form");
let form2=document.querySelector(".apply-form");
let successBox=document.querySelector(".form-submited");


// Adding event-listener

form1.addEventListener('submit', (e)=>{
  e.preventDefault();
  form1.reset();
  successMessage();
});

form2.addEventListener('submit', (e)=>{
  e.preventDefault();
  form2.reset();
  successMessage();
});


// Mobile-responsive navbar functions

navIcon1.addEventListener("click", () => {
  navIcon1.style.display = "none";
  navIcon2.style.display = "inline-block";
  nav.style.display = "flex";
  nav.classList.add("mobile-nav");
  document.body.style.overflow = "hidden";
});

function closeNav() {
  if (nav.classList.contains("mobile-nav")) {
    navIcon2.style.display = "none";
    navIcon1.style.display = "inline-block";
    nav.style.display = "none";
    nav.classList.remove("mobile-nav");
    document.body.style.overflow = "auto";
  }
}

// Scroll to sections

function scrolltoElem(elem_class) {
  let section = document.getElementsByClassName(elem_class+'-section')[0];
  section.scrollIntoView({ behavior: "smooth" });
  // Calling CloseNav if mobile-nav is on
  closeNav();
}

// show apply form

function showForm(){
  blur.style.display="inline-block";
  applyForm.style.display="inline-block"
  applyForm.scrollIntoView({ behavior: "smooth"});
}
function closeForm(){
  blur.style.display="none";
  applyForm.style.display="none";
}

// Success message function

function successMessage(){
  document.body.style.overflow = "hidden";
  successBox.style.display="inline-block";
}
function closeMessage(){
  document.body.style.overflow = "auto";
  successBox.style.display="none";
}
