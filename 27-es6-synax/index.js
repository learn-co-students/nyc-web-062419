document.addEventListener("DOMContentLoaded", function(){
  // console.log("sup")


  // object destructuring
  const spaceship = {
    pilot: 'elon musk',
    guidance: 'marc zucc',
    chef: 'gordon ramsay',
    engine: {type: "the rock", fuel: "pure brawn"}
  }

  const { pilot } = spaceship
  const { engine:{ type } } = spaceship


  // array destructuring
  const array = [
    "Beef",
    "Chicken",
    "Fish"
  ]
  const [beef, chicken, fish] = array


  let pizza = "cheese"
  let steak = "sirloin"
  const meal = { pizza, steak }

})


function eatSnacks({ servingSize, snack, duration, salty }){
  console.log(`I have been eating a ${servingSize} of ${snack} for ${duration}`)

  if (salty){
    console.log("Please get me some water")
  } else {
    console.log("I need a nap")
  }
}



