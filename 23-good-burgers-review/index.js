document.addEventListener("DOMContentLoaded", () => {
  let burgers = []
  let orders = []

  // first thing lets just fetch
  // real first thing grab the element on the page
  const burgerMenuContainer = document.getElementById('burger-menu')
  const orderListContainer = document.getElementById('order-list')

  fetch('http://localhost:3000/burgers')
    .then(res => res.json())
    .then(data => {
      // render our data
      burgers = data
      
      burgers.forEach(burger => {
        // console.log(burger)
        burgerMenuContainer.insertAdjacentHTML('beforeend', `
          <div data-burger-id=${burger.id} class="burger">
            <h3 class="burger_title">${burger.name}</h3>
            <img src=${burger.image}>
            <p class="burger_description">
              ${burger.description}
            </p>
            <button data-burger-button-id=${burger.id} class="button">Add to Order</button>
          </div>
        `)
      })
    })


  burgerMenuContainer.addEventListener('click', e => {
    // console.log('clikced')
    // debugger
    if (e.target.className ==='burger') {
      // OPTIMISTICALLY
      fetch(`http://localhost:3000/burgers/${e.target.dataset.burgerId}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify({
          name: 'Rspec Yourself'
        })
      })
        .then(res => res.json())
        .then(data => {
          console.log('updated that burger name to the truth')
          // PESSIMISTICALLY AFTER THE NETWORK REQUEST HAS COME BACK SUCCESFFULLL

          const updateTheBurger = document.querySelector(`[data-burger-id="${data.id}"]`)
          const findUpdateBurgerHeader = updateTheBurger.querySelector('h3')
          findUpdateBurgerHeader.innerText = data.name
        })

    }

    if (e.target.className === 'button') {

      const burgerId = parseInt(e.target.dataset.burgerButtonId)
      const orderedBurger = burgers.find(burger => {
        console.log(burger.id === burgerId)
        return burger.id === burgerId
      })
      orders.push(orderedBurger)
      console.log(orders)
      orderListContainer.insertAdjacentHTML('beforeend', `
        <li>${orderedBurger.name}</li>
      `)
    }
  })

  // grab the form
  // grab the form and add an event listener
  // get teh values from the form
  
  // event listener on the SUBMIT BUTTON
  // make a fetch post request

  const customBurgerForm = document.querySelector('#custom-burger')
  customBurgerForm.addEventListener('submit', e => {
    e.preventDefault()
    
    const burgerName =  e.target.name.value
    const burgerDescription =  e.target.description.value
    const burgerUrl =  e.target.url.value
    // console.log('FORM CONTENT FOR NEW BURGER', burgerName, description, url)

    // OPTIMISTIC HAPPENS regardless of the fetch and success of post

    // burgerMenuContainer.insertAdjacentHTML('beforeend', `
    //   <div data-burger-id=${1000000} class="burger">
    //     <h3 class="burger_title">${burgerName}</h3>
    //     <img src=${burgerUrl}>
    //     <p class="burger_description">
    //       ${burgerDescription}
    //     </p>
    //     <button data-burger-button-id=${2000000} class="button">Add to Order</button>
    //   </div>
    // `)
    fetch('http://localhost:3000/burgers', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        name: burgerName,
        description: burgerDescription,
        image: burgerUrl
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        console.log('not done pessimistically jk now its pessimistic')

        // if (burger comes back as ok)
        // if (data.success === 'ok) {
        burgers.push(data)
        burgerMenuContainer.insertAdjacentHTML('beforeend', `
          <div data-burger-id=${data.id} class="burger">
            <h3 class="burger_title">${data.name}</h3>
            <img src=${data.image}>
            <p class="burger_description">
              ${data.description}
            </p>
            <button data-burger-button-id=${data.id} class="button">Add to Order</button>
          </div>
        `)
        orderListContainer.insertAdjacentHTML('beforeend', `
          <li>${data.name}</li>
        `)
      // }
      })

    // PATCH 

  })


})
