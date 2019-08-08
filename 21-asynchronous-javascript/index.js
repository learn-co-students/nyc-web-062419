let globalQuotes;

function sleep(time){
  const start = new Date()
  while (new Date() - start < time){}
}

function createHeaderContents(){
  const header = document.getElementById("header")
  const div = document.createElement("div")

  div.innerHTML = `
    <h3>Wutup</h3>
    <p>This is a paragraph</p>
    <button>Click me!</button>
  `
  header.append(div)
}

// this is what nonblocking code looks like
// setTimeout(function(){console.log("Hello!")}, 5000)

// this is what blocking looks like
// sleep(5000)


fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes/5")
.then(function(response){
  return response.json()
})
.then(function(quotes){ 

  globalQuotes = quotes

  renderQuotes(quotes)
  
})


function renderQuotes(quotes){
  quotes.forEach(quote => {
    const container = document.getElementById("body")
    container.insertAdjacentHTML("beforeend", `<h3>${quote}</h3>`)
  })
}








const steakForm = document.querySelector("#steak-form")

steakForm.addEventListener("submit", function(e){
  e.preventDefault()

  // const nameInput = document.querySelector("#steak-name")
  // const flavorInput = document.querySelector("#steak-flavor")

  sendSteakData(e.target)
})





function sendSteakData(form){
  fetch("http://localhost:3000/steaks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json"
    },
    body: JSON.stringify({name: nameInput.name.value, delishFactor: flavorInput.delishFactorm.value})
  })
  .then(response => response.json())
  .then(newSteak => {
    const container = document.getElementById("body")
    container.insertAdjacentHTML("beforeend", `<h3>${newSteak.name}</h3>`)

    nameInput.value = ""
    flavorInput.value = ""
  })
}

