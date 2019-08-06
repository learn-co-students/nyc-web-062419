const data = [
  {
    id: 1,
    name: "Settlers of Catan",
    description: "Friendships will be tested.",
    img_url: "https://crowscastle.com/375-large_default/the-settlers-of-catan.jpg"
  },
  {
    id: 2,
    name: "Monopoly",
    description: "Friendships will end.",
    img_url: "https://i5.walmartimages.com/asr/e9009e67-fbb0-4e96-83c5-5af0eeb13b28_1.f17117ff29f8aa4992cb93bad9205dc4.jpeg"
  },
  {
    id: 3,
    name: "Azul",
    description: "Great fun with the friends!.",
    img_url: "https://cf.geekdo-images.com/itemrep/img/ql-0-t271LVGqbmWA1gdkIH7WvM=/fit-in/246x300/pic3718275.jpg"
  }
]

data.forEach(function(game){
  // find where you want to put stuff
  const container = document.querySelector("div#container")

  // add the stuff
  container.innerHTML += `
    <div class="tile">
      <h3 id="container">${game.name}</h3>
      <button class="close">X</button>
      <p>${game.description}</p>
      <div class="image-wrapper">
        <img src="${game.img_url}" alt="${game.name}">
      </div>
      <span>Likes: </span><span class="counter" data-id=${game.id}>0</span>
      <button class="button like" data-id=${game.id}>Like it</button>
      <button class="button love" data-id=${game.id}>Love it</button>
      <button class="button gotta">Gotta have it</button>
    </div>
  `
})





const container = document.querySelector("div#container")

container.addEventListener("click", function(e){
  if (e.target.className === "button like"){
    let targetSpan;

    document.querySelectorAll("span.counter").forEach(function(span){
      if (span.dataset.id === e.target.dataset.id){
        targetSpan = span
      }
    })

    targetSpan.textContent++

  } else if (e.target.className === "button love"){

    let targetSpan;

    document.querySelectorAll("span.counter").forEach(function(span){
      if (span.dataset.id === e.target.dataset.id){
        targetSpan = span
      }
    })

    targetSpan.textContent = parseInt(targetSpan.textContent) + 5

  } else if (e.target.className === "close"){
    e.target.parentNode.remove()
  }
})