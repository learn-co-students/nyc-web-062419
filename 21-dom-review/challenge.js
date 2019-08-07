let interval;


// Manually increment counter
const plusButton = document.getElementById("+")
plusButton.addEventListener("click", function(event){
  changeCounter(1)
})

// Manually decrement counter
const minusButton = document.getElementById("-")
minusButton.addEventListener("click", function(event){
  changeCounter(-1)
})

// Pausing the timer
let pauseButton = document.getElementById("pause")
pauseButton.addEventListener("click", function(event){  
  if(pauseButton.innerText === "pause"){
    pause()
  } else {
    resume()
  }
})


// comment forms
let commentForm = document.getElementById("comment-form")
commentForm.addEventListener("submit", function(e){
  e.preventDefault()
  // grab the input
  const commentInput = document.getElementById("comment-input")

  // read its value
  const value = commentInput.value

  // grab target container
  const commentList = document.getElementById("list")

  // // create new comment and use value to set text content
  const newComment = document.createElement("div")
  newComment.innerHTML = `<h3>${value}</h3>`

  // append newly created comment element
  commentList.append(newComment)
  commentInput.value = ""
})

//-----------------------------------------------------------
// LIKING

// find the like button
let likeButton = document.getElementById("<3")
// add click handler
likeButton.addEventListener("click", function(e){
  // Before we do anything, we need to check if this number has been liked, so first, 

  // grab the counter
  const counter = document.getElementById("counter")
  // store the number that is currently displayed on the counter.
  const currentNum = counter.textContent


  // Now we need to check if this number has been liked by

  // grabbing all currently existing lis
  const lis = document.querySelectorAll("li")

  // check to see if there is an li with a matching data-num attribute
  let targetLi;
  lis.forEach(function(listItem){
    if(listItem.dataset.num === currentNum){
      targetLi = listItem
    }
  })

  // If targetLi is still undefined, then this number hasn't been liked before, so create a new li. If we found a matching li, this means that this number has been liked before, and we need to increment the number of likes
  if (targetLi){
    // We found a matching li! Let's update it's likes
    
    // Each li has a span inside containing the number of likes, so we have to update that number
    const span = targetLi.children[0]
    span.textContent++
  } else {
    // We didn't find a matching li! Let's make a new one

    // grab the container
    const likeList = document.getElementById("likes")

    // create li
    const newListItem = document.createElement("li")
    newListItem.dataset.num = currentNum
    newListItem.innerHTML = `${currentNum} has been liked <span>1</span> time.`

    // append new li to container
    likeList.append(newListItem)
  }
})
//-------------------------------------------------





function pause(){
  // stops my interval (auto incrementing)
  clearInterval(interval)

  // changes the text on pause button
  pauseButton.textContent = "resume"

  // disables every button EXCEPT the pause button}
  toggleAllButtons()
}

function resume(){
  // starting the interval
  startTimer()

  // change the text on the resume button
  pauseButton.textContent = "pause"

  // enable every button EXCEPT the pause button
  toggleAllButtons()
}

function startTimer(){
  interval = setInterval(function(){
      changeCounter(1)
    }, 1000)
}

function toggleAllButtons(){
  document.querySelectorAll("button").forEach(toggleButton)
}

function toggleButton(button){  
  if(button.id !== "pause"){
    button.disabled = !button.disabled
  }
}

function changeCounter(num){
  const counter = document.getElementById("counter")
  counter.textContent = parseInt(counter.textContent) + num
}


// Start timer that incremements counter every second
startTimer()




