import
{projectData} from "./project-data"; 

window.onscroll = function() {scrollFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scrollFunction() {
if (window.pageYOffset >= sticky) {
  navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// add github icon and linked in icon to nav bar
//get navbar to scroll with page
//fix picture styling - smaller, centered on page
//figure out how to put mission statement on top of picture, centered
//type out About section
//add card(s) for work section
//update resume
//attach resume to button?
