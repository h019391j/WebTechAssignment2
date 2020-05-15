//Constants
const imgfruit1 = document.getElementById("CartFruit1");
const imgfruit2 = document.getElementById("CartFruit2");
const imgfruit3 = document.getElementById("CartFruit3");
const btnSpin = document.getElementById("spin");
const btnWinnings = document.getElementById("winnings");
const txtSlotCredit = document.getElementById("SlotCredit");
const txtwinnings = document.getElementById("Winnings");
const button = document.getElementById("button")

//eventlisteners
btnSpin.addEventListener("click", spin);
btnWinnings.addEventListener("click", winnings);
button.addEventListener("click", buttonClick)

//button functions
var i = 0;
var x = 0;

function buttonClick() {
    i++;
    document.getElementById('SlotCredit').innerHTML = i;
}

//spin functions//different images//jackpot//double//
function spin() {
    i--;
    document.getElementById('SlotCredit').innerHTML = i;
 {
        let CartFruit1 = Math.floor(Math.random() * 7) + 1;
        imgfruit1.setAttribute("src", "Images/Cartoon" + CartFruit1 + ".png");
        SlotCredit--;
       
        let CartFruit2 = Math.floor(Math.random() * 7 + 1);
        imgfruit2.setAttribute("src", "Images/Cartoon" + CartFruit2 + ".png");
        SlotCredit--;

        let CartFruit3 = Math.floor(Math.random() * 7) + 1;
        imgfruit3.setAttribute("src", "Images/Cartoon" + CartFruit3 + ".png");
        SlotCredit--;

        btnWinnings.disabled = false; 

        if (CartFruit3 == CartFruit2 || CartFruit1 == CartFruit2) {
            x = x + 5;
            document.getElementById('Winnings').innerHTML = x;
        }  if (CartFruit1==CartFruit2&&CartFruit2==CartFruit3)
            x = x + 10;
        document.getElementById('Winnings').innerHTML = x;
    }

}
//this function is to collect the users winnings and then refreshes the page
function winnings() {
    if (i > 0){
    alert("Thank you for playing my Fruit Slot Machine! Game Refresh!");
    window.location.reload();
    }

}