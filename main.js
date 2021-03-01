//Global currentCatTax variable
let currentCatTax = 0;

// TODO: calcButtonClick function
// Function should handle the following items:
// 1) Generate a random, whole number between 0 and 20.
// 2) If the random number is not 0, update the amountOwed div to display 'You owe {random number} cat tax! Pay up!'
// 3) If the random number is not 0, update the pay button text to display 'Pay Cat Tax'
// 4) If the random number is not 0, update the pay button so that it is no longer hidden
// 5) If the random number is 0, update the amountOwed div to display 'You owe {random number} cat tax! You've escaped this time!'
// 6) If the random number is 0, update the pay button so that it is hidden.
// 7) Both the amountOwed and pay amount button should be updated every time the calculate cat tax button is clicked.

function calcButtonClick() {
    currentCatTax = Math.floor(Math.random() * 21);
    let amountOwed = document.getElementById('amountOwed');
    let payBtn = document.getElementsByClassName('payBtn')[0];
    if(currentCatTax) {
        amountOwed.innerHTML = `You owe ${currentCatTax} cat tax! Pay up!`;
        payBtn.innerHTML = 'Pay Cat Tax';
        payBtn.style.display = 'inline-block';
    } else {
        amountOwed.innerHTML = `You owe ${currentCatTax} cat tax! You've escaped this time!`
        payBtn.style.display = 'none';
    }
}

// TODO: payButton function
// Function should handle the following items:
// 1) Decrement the currentCatTax amount by 1
// 2) If the remaining cat tax is greater than zero, update the amountOwed div to display 'You still owe {remaining amount} cat tax! Pay up!'
// 3) If the remaining cat tax is zero or fewer, update the amountOwed div to display 'Your debts are paid...'
// 4) If the cat tax was payable (amount was greater than 0) when the button was clicked, make a call to the cat api to get a cat image (https://api.thecatapi.com/v1/images/search)
// 5) Once the cat image is retrieved, append the image to the image container
// 6) If the cat wax was not payable (amount was less than or equal to 0) when the button was clicked, replace the entire contents of the container with the gif found here (https://gfycat.com/snivelingbeautifuljoey-cat)

function payButton() {
    let imageContainer =  document.getElementsByClassName('imageContainer')[0];
    if(currentCatTax > 0) {
        let amountOwed = document.getElementById('amountOwed');
        if(currentCatTax == 1) amountOwed.innerHTML = 'Your debts are paid...';
        else amountOwed.innerHTML = `You still owe ${currentCatTax-1} cat tax! Pay up!`
        let imageElement = document.createElement('img');
        fetch('https://api.thecatapi.com/v1/images/search/')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            imageElement.src = data[0].url;
            imageElement.width = 240;
            imageElement.height = 120;
            imageElement.className = 'catImage';
        });
        let child = document.getElementsByClassName('catImage')[0];
        imageContainer.insertBefore(imageElement,child);
        console.log(currentCatTax)
    } else if(currentCatTax <= 0) {
        let container = document.getElementsByTagName('BODY')[0];
        while(container.firstChild) container.removeChild(container.lastChild);
        let catGif = document.createElement('img');
        catGif.src = 'https://thumbs.gfycat.com/SnivelingBeautifulJoey-small.gif';
        catGif.className = 'catGif';
        container.appendChild(catGif);
    }
    currentCatTax--;
}

