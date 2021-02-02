//Global currentCatTax variable
let currentCatTax = 0;


// TODO: calcButtonClick function
// Function should handle the following items:
// 1) Generate a random, whole number between 0 and 20.
// 2) If the random number is not 0, update the amountOwed div to display "You owe {random number} cat tax! Pay up!"
// 3) If the random number is not 0, update the pay button text to display "Pay Cat Tax"
// 4) If the random number is not 0, update the pay button so that it is no longer hidden
// 5) If the random number is 0, update the amountOwed div to display "You owe {random number} cat tax! You've escaped this time!"
// 6) If the random number is 0, update the pay button so that it is hidden.
// 7) Both the amountOwed and pay amount button should be updated every time the calculate cat tax button is clicked.

 let buttonList = document.getElementsByClassName("calculate btn-primary");
 let calcButton = buttonList[0];

 buttonList = document.getElementsByClassName("payBtn btn-success");
 let payBtn = buttonList[0];
 payBtn.style.display = "none";

let imageContainer = document.getElementsByClassName("imageContainer")[0];

 calcButton.addEventListener("click", calcButtonClick);
payBtn.addEventListener("click", payButton);

let message = document.getElementById("amountOwed");


function calcButtonClick(e) {

    currentCatTax = Math.random() * 21;
    currentCatTax = Math.round(currentCatTax);

    if(currentCatTax > 0)
    {
        message.innerText = `You owe ${currentCatTax} cat tax! Pay up!`;
        payBtn.style.display = "block";
    }
    else
    {
        message.innerText = `You owe 0 cat tax! You've escaped this time!`;
        payBtn.style.display = "none";
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

function payButton(e) {
    currentCatTax--;
    if(currentCatTax > 0)
    {
        message.innerText = `You still owe ${currentCatTax} cat tax! Pay up!`;

        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let img = document.createElement("img");
                img.src = data[0].url;
                imageContainer.appendChild(img);
            
            })
            .catch(error => console.error(error))

    }
    else if(currentCatTax == 0){
        message.innerText = `Your debts are paid...`;
    }
    else{
        e.preventDefault();
        imageContainer.innerHTML = '';
        let video = document.createElement("video");
        video.src = "https://thumbs.gfycat.com/SnivelingBeautifulJoey-mobile.mp4";
        video.autoplay = true;
        video.loop = true;
        imageContainer.appendChild(video);

    }

}
