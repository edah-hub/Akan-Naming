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

function navText(){
   let akan=document.getElementById("nav-text").innerHTML.toUpperCase()
   alert(akan);
}
navText()

var header = document.getElementById("nav-text");
header.innerHTML = header.innerHTML.toUpperCase();