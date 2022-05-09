//Global currentCatTax variable
let currentCatTax = 0;

// TODO: calcButtonClick function
// Function should handle the following items:





// 7) Both the amountOwed and pay amount button should be updated every time the calculate cat tax button is clicked.

function calcButtonClick() {
    currentCatTax = Math.floor(Math.random() * 21)
    if(currentCatTax != 0){
        var amount_owed = document.getElementById('amountOwed')
        amount_owed.textContent = `You owe ${currentCatTax} cat tax! Pay up!`
        var pay_button = document.getElementsByClassName('payBtn')[0] 
       
        $(pay_button).removeClass("hidden") ;
        $(pay_button).html('Pay Cat Tax');
    }
    else{
        var amount_owed = document.getElementById('amountOwed')
        amount_owed.textContent = `You owe ${currentCatTax} cat tax! Pay up!`
        var pay_button = document.getElementsByClassName('payBtn')[0] 
        $(pay_button).addClass("hidden") ;
    }
}

// TODO: payButton function
// Function should handle the following items:



// 4) If the cat tax was payable (amount was greater than 0) when the button was clicked, make a call to the cat api to get a cat image (https://api.thecatapi.com/v1/images/search)

// 6) If the cat wax was not payable (amount was less than or equal to 0) when the button was clicked, replace the entire contents of the container with the gif found here (https://gfycat.com/snivelingbeautifuljoey-cat)

function payButton() {
    currentCatTax -= 1;
    if(currentCatTax > 0){
        var amount_owed = document.getElementById('amountOwed')
        amount_owed.textContent = `You still owe ${currentCatTax} cat tax! Pay up!`
        $.ajax({url: "https://api.thecatapi.com/v1/images/search", success: function(result){
            var curr_img = document.createElement('img');
            curr_img.src = result[0].url

      
            document.getElementsByClassName('imageContainer')[0].appendChild(curr_img)
        }})
    }
    else{
        var amount_owed = document.getElementById('amountOwed')
        amount_owed.textContent = "Your debts are paid..."
        document.getElementsByClassName('imageContainer')[0].innerHTML = '';
        var curr_img = document.createElement('img')
        curr_img.src = "https://gfycat.com/snivelingbeautifuljoey-cat";
        document.getElementsByClassName('imageContainer')[0].appendChild(curr_img)
    }
}
