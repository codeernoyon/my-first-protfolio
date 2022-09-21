const first = document.querySelector("header");
const second = document.querySelector(".header-intro--area");
const option = {
  rootMargin: '0px 0px 0px 0px'
}
const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        first.classList.add("scroll-header");
        
      }
      else{
        first.classList.remove("scroll-header");
      }
    });
  
}, option);

observer.observe(second);








































// auto;slide

/*var slides = document.querySelectorAll('.silde');
var btn = document.querySelectorAll('.btn');
let slideCounter = 1;

// menual

var menual = function(menual){
  
   slides.forEach((slides) => {
    slides.classList.remove('active');
  });  
  btn.forEach((btn) => {
    btn.classList.remove('active');
  });
  
  slides[menual].classList.add('active');
  btn[menual].classList.add('active');
}

btn.forEach((btn, i) => {
  btn.addEventListener("click",() => {
    menual(i);
    counter= i;
  });
});


let repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;
};


var repeater = () => {
  setTimeout(function(){
    slides[i].classList.add('active');
    btn[i].classList.add('active');
    i++;
    
    if(slides.length === i){
      i = 0;
    }  
    if(i >= slides.length){
      return;
    }
  repeater();
  
  }, 10000);
  
  repeater();
}

repeat();*/











/*
var introText = document.querySelector('#intro-text');
var scroll = introText.getBoundingClientRect().top;
var screenPosition = window.innerHeight / 1.2;

function scrollAttribute(){
  if (screenPosition < scroll){
      introText.classList.add('intro-area');
  }
}
window.addEventListener("scroll", scrollAttribute);

*/



/* slider 2*/
/*
const slider = document.querySelector('.slider');
const sliderImg = document.querySelectorAll('.slider img');

const prvBtn = document.querySelector('#prvbtn');
const nextBtn = document.querySelector('#nextbtn');


let counter = 1;
const size = sliderImg[0].clientWidth;



slider.style.transform = 'translateX('+ (-size * counter) +'px)';





nextBtn.addEventListener('click',function(){
  if (counter >= sliderImg.length -1){
    return;
  };
  slider.style.transition = 'transform 1s ease-in-out';
  counter ++;
  slider.style.transform = 'translateX('+ (-size * counter) +'px)';
  
});

prvBtn.addEventListener('click', function() {
  if(counter <= 0){
    return;
  };
  slider.style.transition = 'transform 1s ease-in-out';
  counter--;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

slider.addEventListener('transitionend', function(){
  if (sliderImg[counter].id === 'lastCopy'){
      slider.style.transition = "none";
      counter = sliderImg.length -2;
      slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  
  if (sliderImg[counter].id === 'firstCopy'){
    slider.style.transition = 'none';
    counter = sliderImg.length - counter;
    slider.style.transform = 'translateX(' + (-size * counter) +'px)';
  }
});


*/
/*slider 1*/
/* 
var counter = 1;

setInterval(function(){
  document.getElementById('radio' + counter).checked= 
  1;
  counter ++;
  function h(){
    if(counter > 4){
     counter = 1;
   }};
  
}, 3000);
*/


/*
console.log('hello nayan');
console.log(555);
var x = 'nayan';
console.log(x);
*/

/*=======================
if else stratment
==========================*/


/*
var age = prompt('enter your age');
if (age == 18){
  console.log('You are adult');
}
else if (age > 1 && age <= 13){
  console.log('You are a kide');
}
else if (age < 18 && age > 13){
  console.log('You are a teenager');
}
else if (age >= 18 && age < 40){
  console.log('You are a younger man');
}

else if (age < 100 && age >= 40){
  console.log('You are a old man');
}

else { console.log('You are a ghost man');
}
*/


/*=====================
That is function area
=======================*/
/*

console.log('Enter your age');



var currentYear = prompt('Enter what you want to calculate of your birth year');
var birthYear = prompt('Enter your birth year');

function calculateAge(currentYear, birthYear){
  return currentYear - birthYear;
}

var properAge= calculateAge(currentYear, birthYear);
console.log(properAge);
*/
/*
var firstName = prompt('Enter your name');
function calculatedAge(birthyears, firstName) {
  return 2021 - birthyears;
}
var age = calculatedAge(prompt('Enter your birth age'))
console.log(firstName +' '+ 'your age is rigth now'+' '+age+ ' ' +'years old.' );






function age(years){
  var age = claculatedAge(years);
}
var retierment = 65 - age;
console.log(' Your retierment age are remaning' + ' ' +retierment+" year's old.");



*/
/*
//============== arrayyy areA ================//

var area= ['nayan', 'shanto', 'nippon', 'cricket'];
console.log(area);
console.log(area.length);


area[3]= 'Pubg';
console.log(area);


area.push('emu');
console.log(area);


area.unshift('All');
console.log(area);


area.pop();
console.log(area);


area.shift();
console.log(area);

area.pop(3);
console.log(area);
*/

//========== chelleng ================//
/*
function avaregTips(bill){
  var bill = prompt('Enter your amount');
  var percentage = prompt('Enter what u want to give percentage');
  if (bill < 1000000){
    percentage = percentage;
  }

  else{
  console.log('That amount is too much high');
 }
 return percentage /100 * bill;

}
var all = avaregTips(all);
console.log('Your percentage is '+' '+ all);
*/

/*var input = prompt("Plase input you marks");
 
 if(input >= 80 && input <= 100){
   console.log("You got A+");
 }
 
 else if(input >= 70 && input <= 79) {
   console.log("You got A");
 }
 
 else if (input >= 60 && input <= 69) {
   console.log("You got A-");
 }
 else if (input >= 50 && input <= 59) {
   console.log("You got B");
 }
 
 else if (input >= 40 && input <= 49) {
   console.log("You got C");
 }
 
 else if (input >= 33 && input <= 39) {
   console.log("You got D");
 }

else{
  console.log('You are fail');
};*/


/*
const firstSection = document.querySelector("header");
const secondSection = document.querySelector(".header-intro--area");

const option = {};
const observer = new IntersectionObserver(function(entries, observer){
  
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      firstSection.classList.add("scroll-header");
    }
    else{
      firstSection.classList.remove("scroll-header");
    }
    
     
    
    });
  
}, option);
observer.observe(secondSection);*/
