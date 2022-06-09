import
{projectData} from "./project-data.js"; 

const cardContainer = document.querySelector('#card-container')


let project = {
  title: "Tic Tac Toe",
  deployment: "",
  image: "",
  github: "",
  description:"Who will prevail? X or O?"
}

let projectMarkup = projectData.map(project =>
  `
<div class="card" style="width: 18rem;">
  <img src="${project.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${project.title}</h5>
    <p class="card-text">${project.description}</p>
    <a href="${project.github}" class="btn btn-primary">GitHub</a>
    <a href="${project.deployment}" class="btn btn-secondary">Deployment</a>
  </div>
</div>
  `).join(' ')



cardContainer.innerHTML = projectMarkup


const brandName = document.querySelector('#brand')




// function createDivs(){
//   projectData.forEach(element => {
//     const newDiv = document.createElement('div')
//   });
// }

// createDivs()

console.log(createDivs)




// window.onscroll = function() {scrollFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function scrollFunction() {
// if (window.pageYOffset >= sticky) {
//   navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }



// let wholeNav = document.querySelector('.whole-nav');
// let sticky = wholeNav.offsetTop;



// window.onscroll = function(){
//   stickyNav()
// }

// function stickyNav (){
//   if (window.pageYOffset > sticky) {
//     wholeNav.classList.add("fixed")
//   } else {
//     wholeNav.classList.remove("fixed")
//   }
// }



// add github icon and linked in icon to nav bar
//get navbar to scroll with page
//figure out how to put mission statement on top of picture, centered
//type out About section
//edit cards
//update resume
//attach resume to button?


