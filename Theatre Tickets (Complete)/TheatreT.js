//constants
const AS1 = document.getElementById("AS1");
const NOS1 = document.getElementById("NOS1");
const SP1 = document.getElementById("SP1");
const Results1 = document.getElementById("Results1");
const MOD1 = document.getElementById("MOD1");
const ET1 = document.getElementById("ET1");
const CFBO1 = document.getElementById("CFBO1");
const P1 = document.getElementById("P1");

//eventlisteners for the drop-downlists, number inputs and the buttons
AS1.addEventListener("select", add);
NOS1.addEventListener("select", add);
SP1.addEventListener("click", add);
MOD1.addEventListener("select", add);
ET1.addEventListener("click",  calculate);
CFBO1.addEventListener("click", calculate);
P1.addEventListener("click", calculate);


//function code for the calculations and the discounts
function add() {

    var AS1 = document.getElementById('AS1').value;
    var NOS1 = document.getElementById('NOS1').value;
    var result = AS1 * NOS1;
    document.getElementById('Results1').innerHTML =("£" + result.toFixed(2));

    if(NOS1 == 6 || NOS1 == 7 || NOS1 == 8 || NOS1 == 9){
    document.getElementById('Results2').innerHTML = ("Discount 10%")
    var results2 = result - [AS1 * NOS1] * 10 / 100;
    document.getElementById('Results3').innerHTML =("£" + results2.toFixed(2));
    }
    else if (NOS1 == 10 || NOS1 > 10 ){
    document.getElementById('Results2').innerHTML = ("Discount 15%")
    var results2 = result - [AS1 * NOS1] / 100 * 15;
    document.getElementById('Results3').innerHTML =("£" + result2.toFixed(2));
    }
    else{
        document.getElementById('Results2').innerHTML = ("Discount 0%")
    var results2 = result 
    document.getElementById('Results3').innerHTML =("£" + results2.toFixed(2));
    }
    document.getElementById('overallcost').innerHTML = results2 
}

//Calculating the method of delivery
function calculate(){
    if(document.getElementById('ET1').checked){
        document.getElementById('mod').innerHTML = ("E-Ticket");
        document.getElementById('Results4').innerHTML = ("£"+ ET1.value);
    }
    if(document.getElementById('CFBO1').checked){
        document.getElementById('mod').innerHTML = ("Collect From Box Office");
        document.getElementById('Results4').innerHTML = ("£"+ CFBO1.value);
    }
    if(document.getElementById('P1').checked){
        document.getElementById('mod').innerHTML = ("Posted");
        document.getElementById('Results4').innerHTML = ("£"+ P1.value);
    }
}
