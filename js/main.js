
// let form = document.getElementById("form");
// let yearOfBirth = document.getElementById("year");
// let monthOfBirth = document.getElementById("month");
// let dateOfBirth = document.getElementById("date");
// let myResult = document.querySelector("#result")

// form.addEventListener("submit", (event) =>{
//   event.preventDefault();

//   var e = document.getElementById("form");
// e.addEventListener('click',function(){location.reload()});

//   // function myLogin(){
//   //   if(dateOfBirth.value.length=="" || monthOfBirth.value.length==""){
//   //     document.getElementById("form").innerHTML="PLEASE FILL ALL THE FIELDS!!"
//   //    return false;
//   //   }
//   // //   if(yearOfBirth.value<1900 && yearOfBirth.value>2022)
//   // //   alert("invalid");
//   // }


//   let genderOfGenders = form.gender.value;

  
// console.log(`${yearOfBirth.value}
// ${monthOfBirth.value}
// ${dateOfBirth.value}
// ${genderOfGenders}`)
// var result = getName(yearOfBirth.value, monthOfBirth.value, dateOfBirth.value, genderOfGenders)

//     myResult.innerHTML = `Your Akan name is: ${result}`;
// })

// function getName(year, month, day, gender){
//   var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   var maleGender = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
//   var femaleGender = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

//   if (gender === "maleGender"){
//       var date = new Date(parseInt(year), parseInt(month), parseInt(day))
//       var dayOfWeek = weekDay[date.getDay()];
//    return maleGender[date.getDay()]
//   }else{
//     var date = new Date(parseInt(year), (parseInt(month)-1), parseInt(day))
//     var dayOfWeek = weekDay[date.getDay()];
//     return femaleGender[date.getDay()]
// }
// }
   

let maleName = ["Kwasi", "Kwa", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function getName() {
    var day = document.getElementById("day").value;
    var dd = parseInt(day);
    var month = document.getElementById("month").value;
    var mm = parseInt(month);
    var year = document.getElementById("year").value;
    var yy = parseInt(year);
    var cc = (yy - 1) / 100 + 1;
    // var bDay = new Date(mm + "/" + dd + "/" + yy);
    // var weekDay = bDay.getDay();
    var bornDay = parseInt(cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7;
    if (document.getElementById("gender").checked) {
        var gender = "male";
    } else {
        var gender = "female";
    }
    // form validation
    if (dd <= 0 || dd == "" || dd > 31) {
        alert("invalid Date");
    } else if (mm <= 0 || mm > 12 || mm == "" || mm == 2 && dd > 29) {
        alert("invalid Month");
    } else if (Math.abs(bornDay) == 1 && gender === "male") {
        alert("Your Name is " + maleName[1]);
    } else if (Math.abs(bornDay) == 2 && gender === "male") {
        alert("Your Name is " + maleName[2]);
    } else if (Math.abs(bornDay) == 3 && gender === "male") {
        alert("Your Name is " + maleName[3]);
    } else if (Math.abs(bornDay) == 4 && gender === "male") {
        alert("Your Name is " + maleName[4]);
    } else if (Math.abs(bornDay) == 5 && gender === "male") {
        alert("Your Name is " + maleName[5]);
    } else if (Math.abs(bornDay) == 6 && gender === "male") {
        alert("Your Name is " + maleName[6]);
    } else if (Math.abs(bornDay) == 0 && gender === "male") {
        alert("Your Name is " + maleName[0]);
    } else if (Math.abs(bornDay) == 1 && gender === "female") {
        alert("Your Name is " + femaleName[1]);
    } else if (Math.abs(bornDay) == 2 && gender === "female") {
        alert("Your Name is " + femaleName[2]);
    } else if (Math.abs(bornDay) == 3 && gender === "female") {
        alert("Your Name is " + femaleName[3]);
    } else if (Math.abs(bornDay) == 4 && gender === "female") {
        alert("Your Name is " + femaleName[4]);
    } else if (Math.abs(bornDay) == 5 && gender === "female") {
        alert("Your Name is " + femaleName[5]);
    } else if (Math.abs(bornDay) == 6 && gender === "female") {
        alert("Your Name is " + femaleName[6]);
    } else if (Math.abs(bornDay) == 0 && gender === "female") {
        alert("Your Name is " + femaleName[0]);
    } else {
        alert("inputs required")
    }
}