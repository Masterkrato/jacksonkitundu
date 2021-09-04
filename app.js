const triggers = document.querySelectorAll('.cool > li');
const background  = document.querySelector('.dropdownBackground');
const nav  = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));


//scroll reveal animation

//event listeners
window.addEventListener('scroll', wavyreveal);


function wavyreveal () {
  var wavyreveals = document.querySelectorAll ('.wavyreveal');


  for (var i = 0; i < wavyreveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = wavyreveals [i].getBoundingClientRect().top;
    var revealpoint = 150;


    if (revealtop < windowheight - revealpoint) {
      wavyreveals [i].classList.add ('active');
    }

    else {
      wavyreveals [i].classList.remove ('active');
    }
  }
}




window.addEventListener('scroll', wavyreveals);


function wavyreveals () {
  var wavyreveals = document.querySelectorAll ('.wavyreveals');


  for (var i = 0; i < wavyreveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = wavyreveals [i].getBoundingClientRect().top;
    var revealpoint = 150;


    if (revealtop < windowheight - revealpoint) {
      wavyreveals [i].classList.add ('active');
    }

    else {
      wavyreveals [i].classList.remove ('active');
    }
  }
}

//wavyreveals 2
window.addEventListener('scroll', wavyreveals2);


function wavyreveals2 () {
  var wavyreveals2 = document.querySelectorAll ('.wavyreveals2');


  for (var i = 0; i < wavyreveals2.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = wavyreveals2 [i].getBoundingClientRect().top;
    var revealpoint = 150;


    if (revealtop < windowheight - revealpoint) {
      wavyreveals2 [i].classList.add ('active');
    }

    else {
      wavyreveals2 [i].classList.remove ('active');
    }
  }
}

//wavyreveals 3
window.addEventListener('scroll', wavyreveals3);


function wavyreveals3 () {
  var wavyreveals3 = document.querySelectorAll ('.wavyreveals3');


  for (var i = 0; i < wavyreveals3.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = wavyreveals3 [i].getBoundingClientRect().top;
    var revealpoint = 150;


    if (revealtop < windowheight - revealpoint) {
      wavyreveals3 [i].classList.add ('active');
    }

    else {
      wavyreveals3 [i].classList.remove ('active');
    }
  }
}


window.addEventListener('scroll', imageparallax);


function imageparallax () {
  var portfolioImg = document.querySelectorAll ('.portfolioIllustration');


  for (var i = 0; i < portfolioImg.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = portfolioImg [i].getBoundingClientRect().top;
    var revealpoint = 800;


    if (revealtop < windowheight - revealpoint) {
      portfolioImg [i].classList.add ('hide');
    }

    else {
      portfolioImg [i].classList.remove ('hide');
    }
  }
}

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to ('.hello', 5, {y: -1000})
.to ('.text', 5, {y: -200}, "-=5");

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("hello")
  .addTo(controller);


//MOBILE NAVIGATION CONTROL
const hamburger = document.querySelector (".hamburger");
const links = document.querySelectorAll (".top li");
const line1 = document.querySelector (".line1");
const line2 = document.querySelector (".line2");
const line3 = document.querySelector (".line3");
const body = document.querySelector ('.body');


hamburger.addEventListener('click', navanimation);

function navanimation () {
  if (nav.classList.contains ('open')){
    nav.classList.remove("open");
    line1.classList.remove('menuadd');
    line2.classList.remove('menuadd');
    line3.classList.remove('menuadd');
    body.classList.remove('fixedbody');
    nav.classList.remove('closetop');  
  }

  else {
    nav.classList.add("open");
    line1.classList.add('menuadd');
    line2.classList.add('menuadd');
    line3.classList.add('menuadd');
    body.classList.add('fixedbody');
  }

};

window.onload = () => {

  const transition_div = document.querySelector ('.transition');
  const transition_div2 = document.querySelector ('.transition2');
  const transition_div3 = document.querySelector ('.transition3');

  setTimeout(() => {
    transition_div.classList.remove ('is-active');
    transition_div2.classList.remove ('is-active2');
    transition_div3.classList.remove ('is-active3');
  }, 500);

}

// window.onload = () => {

//   const transition_div = document.querySelector ('.transition2');
//   const links = document.querySelector ('a');

//   setTimeout(() => {
//     transition_div.classList.remove ('is-active');
//   }, 500);

// }
// window.onload = () => {

//   const transition_div = document.querySelector ('.transition2');
//   const links = document.querySelector ('a');

//   setTimeout(() => {
//     transition_div.classList.remove ('is-active2');
//   }, 500);

// }


// window.onload = () => {

//   const transition_div = document.querySelector ('.transition3');
//   const links = document.querySelector ('a');

//   setTimeout(() => {
//     transition_div.classList.remove ('is-active3');
//   }, 500);

// }


// for (let i = 0; i < links.length; i++) {

//   const links = links [i];

//   links.addEventListener ('click', e =>{
//     e.preventDefault();
//     let target = e.target.href;

//     transition_div.classList.add ('is-active');


//   });

// }

//FORM MANAGEMENT


const formbtn = document.querySelector ('.contactForm');
const popupForm = document.querySelector ('.form-popup');
const formback = document.querySelector ('.formback');

formbtn.addEventListener ('click' , openCloseform);

function openCloseform() {
  if (popupForm.classList.contains ('form-open') && formback.classList.contains ('form-open')) {
    popupForm.classList.remove('form-open');
    formback.classList.remove ('form-open');
  }

  else {
    popupForm.classList.add('form-open');
    formback.classList.add ('form-open');
  }

};

//close the form
const formlineContainer = document.querySelector (".formline-container");
const formline1 = document.querySelector (".line2");
const formline2 = document.querySelector (".line3");


formlineContainer.addEventListener('click', closeform);

function closeform () {
  if (formlineContainer.classList.contains ('closeform')){
    popupForm.classList.remove("closeform");
    popupForm.classList.add('form-open');
    formback.classList.add ('form-open');
    formback.classList.remove ('closeform');
    
    // formline1.classList.remove('closeform');
    // formline2.classList.remove('closeform');
    
  }
  else {
    popupForm.classList.add("closeform");
    popupForm.classList.remove('form-open');
    formback.classList.remove ('form-open');
    // formback.classList.add ('closeform');
    // line1.classList.add('closeform');
    // line2.classList.add('closeform');
  }

};



document.onreadystatechange = function() {
	if (document.readyState !== "complete") {
		document.querySelector("body").style.visibility = "hidden";
		document.querySelector(".svg").style.visibility = "visible";
		document.querySelector(".transition2").style.visibility = "visible";
	} else {
		document.querySelector(".svg").style.display = "none";
		document.querySelector("body").style.visibility = "visible";
    document.querySelector(".transition2").style.visibility = "none";
	}
};

// navlinks.addEventListener('click', linkaction);

// const navlinks = document.querySelectorAll('.navlinks a');

// function linkaction () {
//   nav.classList.remove ('open');
// }

// footerLinks.addEventListener ('mouseover', footerevent);
 
// const footer = document.querySelector ('.footer');
// const footerLinks = document.querySelector ('.footerLinks');


// function footerevent() {
//   if (footer.classList.contains('colorchanged')) {
//     footer.classList.remove ('colorchanged');
//   }
  
//   else {
//     footer.classList.add ('colorchanged');
// }

// }

const worklinks = document.querySelectorAll('.worklinks')

worklinks.forEach(function(worklinks)
{
  worklinks.addEventListener('click', function() {
nav.classList.remove('open');
line1.classList.remove ('menuadd');
line2.classList.remove ('menuadd');
line3.classList.remove ('menuadd');
});
}
  );


  // const worklinks = document.querySelectorAll('.worklinks')
  // worklinks.forEach(function(worklinks){
  //   worklinks.addEventListener('click', function () {
  //     alert('click');
  //   });
  // });