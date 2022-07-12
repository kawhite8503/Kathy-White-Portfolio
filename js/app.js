import
{projectData, skills} from "./project-data.js"; 

const cardContainer = document.querySelector('#card-container')

let projectMarkup = projectData.map(project =>
  `
<div class="card" style="width: 18rem;">
  <img src="${project.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${project.title}</h5>
    <p class="card-text">${project.description}</p>
    <a href="${project.github}" target="_blank" class="btn btn-primary">GitHub</a>
    <a href="${project.deployment}" target="_blank" class="btn btn-secondary">Deployment</a>
  </div>
</div>
  `).join(' ')

let skillsElement = skills.map(skill =>
  `${skill}
  `).join(' | ')

cardContainer.innerHTML = projectMarkup

const skillList = document.querySelector('#skill-list')
const skillBtn = document.querySelector('#skills-button')
skillBtn.addEventListener('click', function(){
  skillList.innerHTML = skillsElement
  skillBtn.remove()
})


const simonPic = document.querySelector('#simon')
const dogName = document.querySelector('#simon-name')

simonPic.addEventListener('click', function(){
  dogName.innerHTML =  "Simon"
})


const kittyPic = document.querySelector('#kitty')
const catName = document.querySelector('#kitty-name')

kittyPic.addEventListener('click', function(){
  catName.innerHTML =  "Little Jerry Seinfeld"
})
