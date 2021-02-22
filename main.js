//Global currentCatTax variable
let currentCatTax = 0;
let catImgAPI = "https://api.thecatapi.com/v1/images/search";
let catGifAPI = "https://gfycat.com/snivelingbeautifuljoey-cat";
var axios = require('axios');


// TODO: calcButtonClick function
// Function should handle the following items:
// 1) Generate a random, whole number between 0 and 20.
// 2) If the random number is not 0, update the amountOwed div to display "You owe {random number} cat tax! Pay up!"
// 3) If the random number is not 0, update the pay button text to display "Pay Cat Tax"
// 4) If the random number is not 0, update the pay button so that it is no longer hidden
// 5) If the random number is 0, update the amountOwed div to display "You owe {random number} cat tax! You've escaped this time!"
// 6) If the random number is 0, update the pay button so that it is hidden.
// 7) Both the amountOwed and pay amount button should be updated every time the calculate cat tax button is clicked.

function calcButtonClick(){
	console.log('clicked');
	let random = Math.floor(Math.random()*21);
	console.log(random);
	if(random != 0){
		currentCatTax = random;
		updateAmountOwe();
	}
	updatePayBtn();
}

function updatePayBtn(){
	let payBtn = document.getElementById("payBtn");
	if(currentCatTax == 0){
		payBtn.style.display = "none";
	}else{
		payBtn.style.display = "inline-block";
	}
}

function updateAmountOwe(){
	let amountOwedP = document.getElementById("amountOwed");
	if(currentCatTax > 0){
		amountOwedP.innerHTML = `You owe ${currentCatTax} cat tax! Pay up!`;
	}else{
		amountOwedP.innerHTML = `Your debts are paid...`;
	}
	
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
	currentCatTax = currentCatTax -1;
	updateAmountOwe();
	if(currentCatTax > 0){
		axios.get(catImgAPI).then(res=>{
			let url = res.data[0].url
			addImageOrGif(url);
		}).catch(error=>{
			console.log(error);
		})
	}else{
		axios.get(catGifAPI).then(res=>{
			let url = res.data[0].url
			addImageOrGif(url);
		}).catch(error=>{
			console.log(error)
		})
	}
}

function addImageOrGif(url){
	let imageContainer = document.getElementById("imageContainer");
	if(currentCatTax == 0){
		let child = imageContainer.lastElementChild;
		while(child){
			imageContainer.removeChild(child);
			child = imageContainer.lastElementChild;
		}
	}
	let imgElement = new Image(100,100);
	imgElement.src = url;
	imageContainer.appendChild(imgElement);
}



