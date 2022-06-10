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
    <a href="${project.github}" class="btn btn-primary">GitHub</a>
    <a href="${project.deployment}" class="btn btn-secondary">Deployment</a>
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


// const resumeBtn = document.querySelector('#resume-button')

// resumeBtn.addEventListener('click', play())

// function play(){
//   let audio = document.querySelector('#resume-button');
//   audio.play();
// }


//figure out how to put mission statement on top of picture, centered
//type out About section
//edit cards




