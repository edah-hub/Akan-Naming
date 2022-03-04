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


 