// Form Validation

let form = document.getElementById("form");
let yearOfBirth = document.getElementById("year");
let monthOfBirth = document.getElementById("month");
let dateOfBirth = document.getElementById("date");
let myResult = document.querySelector("#result")

form.addEventListener("submit", (event) =>{
  event.preventDefault();

  let genderOfGenders = form.gender.value;

  
console.log(`${yearOfBirth.value}
${monthOfBirth.value}
${dateOfBirth.value}
${genderOfGenders}`)
var result = getName(yearOfBirth.value, monthOfBirth.value, dateOfBirth.value, genderOfGenders)

    myResult.innerHTML = `Your Akan name is: ${result}`;
})

function getName(year, month, day, gender){
  var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var maleGender = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  var femaleGender = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

  if (gender === "maleGender"){
      var date = new Date(parseInt(year), parseInt(month), parseInt(day))
      var dayOfWeek = weekDay[date.getDay()];
   return maleGender[date.getDay()]
  }else{
    var date = new Date(parseInt(year), (parseInt(month)-1), parseInt(day))
    var dayOfWeek = weekDay[date.getDay()];
    return femaleGender[date.getDay()]
}
}
   