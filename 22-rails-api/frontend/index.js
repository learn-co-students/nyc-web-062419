let artifacts = []
let thieves = []

document.addEventListener("DOMContentLoaded", function(e){
  fetchArtifacts()
  fetchThieves()

  // route PATCH '/thiefs/:id'
  // fetch('http://localhost:3000/api/v1/thiefs/1', {
  //   method: 'PATCH',
  //   headers: {
  //     'content-type': 'application/json',
  //     'accepts': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     code_name: 'orange octopus'
  //   })
  // })
  //   .then(response=>response.json())
  //   .then(data => {
  //     console.log(data)
  //   })


  const artifactContainer = document.getElementById("artifact-container")
  const thiefContainer = document.getElementById("thief-container")

  thiefContainer.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submit the hunting')

    console.log(e.target.dataset.thiefId)
    const thiefId = e.target.dataset.thiefId
    const artifactId = e.target.querySelector('select').value





    fetch('http://localhost:3000/api/v1/marks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify({
        thief_id: thiefId,
        artifact_id: artifactId
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)

        let markContainers = document.querySelectorAll('mark-container')
        markContainers.forEach(markContainer => {
          if (markContainer.dataset.thiefId === data.thief_id) {
            const artifact = artifacts.find(artifact => artifact.id === data.artifact_id)
            markContainer.insertAdjacentHTML('beforeend', renderTargetArtifact(artifact))
          }

        })


        const artifactToUpdate = document.getElementById(data.artifact_id)
        artifactToUpdate.style.backgroundColor = 'pink'
      })
  })

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

  artifactContainer.insertAdjacentHTML("beforeend", `<div id=${artifact.id} class="artifact card">
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

  thiefContainer.insertAdjacentHTML("beforeend", `
    <div class="thief card">
      <h3>${thief.name}</h3>
      <h4>Code Name: ${thief.code_name}</h4>
      <strong>Specialty: </strong><span>${thief.specialty}</span><br>
      <strong>Current score: </strong><span>$${thief.score} million</span><br>
      <div class="mark-container" data-thief-id=${thief.id}>
        ${targetArtifactHTML}
      </div>

      <div>
        <form class="thiefForm" data-thief-id=${thief.id}>
          <select data-id=${thief.id}>
            ${artifacts.map(artifact => {
              return `<option value=${artifact.id}>${artifact.name}</option>`
            })}
          </select>
          <button>On the hunt</button>
        </form>
        
      </div>
    </div>
  `)
}

function renderTargetArtifact(artifact){
  return `
    <div>
      <li>${artifact.name}</li>
    </div>
  `
}




