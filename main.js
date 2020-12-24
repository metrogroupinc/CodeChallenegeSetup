//Global currentCatTax variable
let currentCatTax = 0;
const catTaxBtn = document.querySelector(".catTaxBtn")
const payBtn = document.querySelector(".payBtn")
const imageContainer = document.querySelector(".imageContainer")
const amountOwed = document.getElementById("amountOwed")
const container = document.querySelector(".container")

catTaxBtn.addEventListener('click', calcButtonClick)
payBtn.addEventListener("click", payButton)

// TODO: calcButtonClick function
// Function should handle the following items:
// 1) Generate a random, whole number between 0 and 20.
// 2) If the random number is not 0, update the amountOwed div to display "You owe {random number} cat tax! Pay up!"
// 3) If the random number is not 0, update the pay button text to display "Pay Cat Tax"
// 4) If the random number is not 0, update the pay button so that it is no longer hidden
// 5) If the random number is 0, update the amountOwed div to display "You owe {random number} cat tax! You've escaped this time!"
// 6) If the random number is 0, update the pay button so that it is hidden.
// 7) Both the amountOwed and pay amount button should be updated every time the calculate cat tax button is clicked.

function calcButtonClick() {
  currentCatTax = Math.floor(Math.random() * 20)
  
  if (currentCatTax !== 0){
    amountOwed.innerText = `You owe ${currentCatTax}`
    payBtn.innerText = "Pay Cat Tax "
  }
  if (currentCatTax === 0){
    amountOwed.innerText = `You owe ${Math.floor(Math.random())} cat tax! You've escaped this time!`
  }
  return currentCatTax
}

// TODO: payButton function
// Function should handle the following items:
// 1) Decrement the currentCatTax amount by 1
// 2) If the remaining cat tax is greater than zero, update the amountOwed div to display "You still owe {remaining amount} cat tax! Pay up!"
// 3) If the remaining cat tax is zero or fewer, update the amountOwed div to display "Your debts are paid..."
// 4) If the cat tax was payable (amount was greater than 0) when the button was clicked, make a call to the cat api to get a cat image (https://api.thecatapi.com/v1/images/search)
// 5) Once the cat image is retrieved, append the image to the image container
// 6) If the cat wax was not payable (amount was less than or equal to 0) when the button was clicked, replace the entire contents of the container with the gif found here (https://gfycat.com/snivelingbeautifuljoey-cat)

function payButton() {
  currentCatTax -= 1 
  if (currentCatTax > 0 ){
    amountOwed.innerText = `You still owe ${currentCatTax} cat tax! Pay up!`
    return fetchCatImg()
  } 
  if (currentCatTax <= 0){
    amountOwed.innerText = "Your debts are paid..."
    imageContainer.innerHTML = ""
  }
  if (currentCatTax < 0){
    container.innerHTML = ""
    const child = document.createElement("img") 
    child.src = "./SnivelingBeautifulJoey.gif"
    child.style.padding = "2px"
    child.style.height = "150%"
    child.style.width = "100%"
    return container.appendChild(child)
  }
}

function fetchCatImg(){
  fetch("https://api.thecatapi.com/v1/images/search")
  .then(response => response.json())
  .then(json => {
    const cat = document.createElement("img")
    cat.src = json[0].url
    cat.style.height = "90px"
    cat.style.width = "110px"
    cat.style.margin = "2rem"
    imageContainer.appendChild(cat)
  })
}

