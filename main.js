//Global currentCatTax variable
let currentCatTax = 0;

const calculateButton = document.getElementById("calculateBtn");
console.log(calculateButton);
calculateButton.addEventListener("click", calcButtonClick);
const payBtn = document.getElementsByClassName("payBtn")[0];
console.log(payBtn);
payBtn.addEventListener("click", payButton);

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
    let imageContainer = document.getElementsByClassName("imageContainer")[0];
    imageContainer.innerHTML = '';
    currentCatTax = Math.floor(Math.random() * 21);
    console.log(currentCatTax);
    const amountOwed = document.getElementById('amountOwed');
    const payButton = document.getElementsByClassName('payBtn')[0];
    if (currentCatTax != 0) {
        amountOwed.innerHTML = "You owe " + currentCatTax + " cat tax! Pay up!";
        payButton.innerHTML = "Pay Cat Tax";
        payButton.style.visibility = "visible";
    }
    else {
        amountOwed.innerHTML = "You owe " + currentCatTax + " cat tax! You've escaped this time!";
        payButton.style.visibility = "hidden";
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
    console.log(currentCatTax);
    prevCatTax = currentCatTax;
    currentCatTax--;
    const amountOwed = document.getElementById('amountOwed');
    const payBtn = document.getElementsByClassName('payBtn')[0];
    if (currentCatTax > 0) {
        amountOwed.innerHTML = "You still owe " + currentCatTax + " cat tax! Pay up!";
    }
    else {
        amountOwed.innerHTML = "Your debts are paid...";
    }

    if (prevCatTax > 0) {
        fetch("https://api.thecatapi.com/v1/images/search", {
            headers: { "Content-Type": "image" },
            method: 'GET',
        })
            .then(response => (response.text()))
            .then(result => {
                console.log('Success:', result);
                const imageContainer = document.getElementsByClassName("imageContainer")[0];
                const image = document.createElement('img');
                image.setAttribute('src', JSON.parse(result)[0].url);
                image.setAttribute("height", "100px");
                image.setAttribute("width", "125x");
                imageContainer.prepend("       ", image);
                console.log(JSON.parse(result)[0].url);
                console.log(typeof (result));
            }).catch(error => { console.error('Error:', error); });
    }
    else {
        let imageContainer = document.getElementsByClassName("imageContainer")[0];
        imageContainer.innerHTML = "<iframe src='https://gfycat.com/ifr/SnivelingBeautifulJoey' frameborder='0' scrolling='no' allowfullscreen width='640' height='846'></iframe>";
    }
}

