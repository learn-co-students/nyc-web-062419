document.addEventListener("DOMContentLoaded", () => {

  let barney = {
    name: "Barney",
    age: 6
  }
  
  function meow(){
    console.log(this)
  }
  
  const arrowMeow = () => {
    console.log(this)
  }

  barney.meow = meow
  barney.arrowMeow = arrowMeow

  barney.meow()
  barney.arrowMeow()
}) // end DOM Content Loaded