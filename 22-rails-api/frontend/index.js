let artifacts = []
let thieves = []

document.addEventListener("DOMContentLoaded", function(e){
  fetchArtifacts()
  fetchThieves()
})



function fetchArtifacts(){
  fetch("http://localhost:3000/api/v1/artifacts")
  .then(res => res.json())
  .then(data => {
    // console.log
    artifacts = data
    data.forEach(renderArtifact)
  })
}

function renderArtifact(artifact){
  const artifactContainer = document.getElementById("artifact-container")

  artifactContainer.insertAdjacentHTML("beforeend", `<div class="artifact card">
    <h3>${artifact.name}</h3>
    <div class="image-wrapper">
      <img class="image" src="${artifact.image_url}"/>
    </div>
    <strong>Value: $${artifact.value} million</strong><br>
  </div>`)
}

function fetchThieves(){
   fetch("http://localhost:3000/api/v1/thiefs")
  .then(res => res.json())
  .then(data => {
    thieves = data
    data.forEach(renderThief)
  })
}

function renderThief(thief){
  const thiefContainer = document.getElementById("thief-container")

  const artifact_ids = thief.marks.map(mark => mark.artifact_id)
  const targetArtifacts = artifact_ids.map(id => artifacts.find(artifact => artifact.id === id))

  const targetArtifactHTML = targetArtifacts.map(renderTargetArtifact).join("")


  thiefContainer.insertAdjacentHTML("beforeend", `<div class="thief card">
    <h3>${thief.name}</h3>
    <h4>Code Name: ${thief.code_name}</h4>
    <strong>Specialty: </strong><span>${thief.specialty}</span><br>
    <strong>Current score: </strong><span>$${thief.score} million</span><br>
    <div class="mark-container">
      ${targetArtifactHTML}
    </div>
  </div>`)
}

function renderTargetArtifact(artifact){
  return `
    <div>
      ${artifact.name}
    </div>
  `
}




