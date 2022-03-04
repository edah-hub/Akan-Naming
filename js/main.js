// function navText(){
//     document.getElementById(nav-text)=navText.toUpperCase();
// }

const form  = document.getElementById('signup');

form.addEventListener('submit', (event) => {
    // handle the form data
});

form.addEventListener('submit', (event) => {
   // stop form submission
   event.preventDefault();
});

// function navText(){
//    let akan=document.getElementById("nav-text").innerHTML.toUpperCase()
//    alert(akan);
// }
navText()

var header = document.getElementById("nav-text");
header.innerHTML = header.innerHTML.toUpperCase();

// To Get Akan Name
function getAkanName () {
   let yearOfBirth = document.getElementById("year-input").value;
   let monthOfBirth = Number(document.getElementById("month-input").value);
   let dayOfBirth = Number(document.getElementById("day-input").value);
}

// To Get Genders
function getGender () {
   for (let gender of genders){
     if (gender.checked){
       return gender.value;
     }
   }
 }
 let myGenderValue = getGender();

 console.log(myGenderValue);

//  To Validate Functions
  function monthValidator () {
    if (monthOfBirth < 1 || monthOfBirth > 12) {
      return false;
    } else {
      return true;
    }
  }

  function dayValidator () {
   if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
     if (dayOfBirth > 28 || dayOfBirth < 1) {
       return false;
     } else if (monthOfBirth === 2 && dayOfBirth > 29) {
       return false;
     } else if (monthOfBirth === 2 && dayOfBirth < 1) {
       return false;
     } else {
       return true;
     }
   } else if (dayOfBirth < 1 || dayOfBirth > 31){
     return false;
   } else {
     return true;
   }
 }

//  Variable validation
let monthValid = monthValidator();
let dayValid = dayValidator();

// Formula To Get Day Of dayOfBirth
let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);





 