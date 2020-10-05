//Global currentCatTax variable
let currentCatTax = 0;

// TODO: calcButtonClick function
// Function should handle the following items:
// 7) Both the amountOwed and pay amount button should be updated every time the calculate cat tax button is clicked.

function calcButtonClick() {
    let rand_num = Math.floor(Math.random() * Math.floor(21));
    if (rand_num == 0){
        document.getElementById('amountOwed').innerText='You owe ' + rand_num + ' cat tax! You\'ve escaped this time';
        currentCatTax = 0;
    }
    else{
        document.getElementById('amountOwed').innerText='You owe ' + rand_num + ' cat tax! Pay up!';
        document.getElementById('payBtn').style='display:inline';
        currentCatTax = rand_num;
    }
}

// TODO: payButton function
// Function should handle the following items:

function payButton() {
    if(currentCatTax>0){
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            //.then(data => console.log(data[0].url))
            .then(data => {
                image = data;
                var img = document.createElement('img');
                img.src = image[0].url
                document.getElementsByClassName('imageContainer')[0].appendChild(img);
            })
    }
    else if(currentCatTax==0){
        var ifr = document.createElement('iframe')
        ifr.src = "https://gfycat.com/ifr/SnivelingBeautifulJoey"
        ifr.frameBorder = 0;
        ifr.scrolling = "no";
        ifr.allowFullscreen = true;
        ifr.width = 640
        ifr.height = 640
        document.getElementsByClassName('container')[0].innerHTML = '';
        document.getElementsByClassName('container')[0].appendChild(ifr);
    }
    currentCatTax--;
    if(currentCatTax>0){
        document.getElementById('amountOwed').innerText='You still owe ' + currentCatTax + ' cat tax! Pay up!';
    }
    else if(currentCatTax<=0){
        document.getElementById('amountOwed').innerText='Your debts are paid...';
    }
}


