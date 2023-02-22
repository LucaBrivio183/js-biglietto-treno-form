//strict rules

'use strict'

//define a const variable for price∀km (for future changes)

const KmPrice = 0.21;

//define a const variables for taking value  from html inputs

const userKm = document.getElementById("input-km").value;
const userAge = document.getElementById("input-age").value;

//calc and define a let variable for total price (price∀km * kms)
 
let price = KmPrice * userKm

//apply 20% discount for minors  //apply 40% discount for over65

if( userAge ===  'minor') {
    price -= price * 0.2;
    
} else if ( userAge ===  'over65') {
    price -= price * 0.4;
    
}

//print final price in console log

console.log(`${price}`);

//define a variable for generate button 

const inputButton = document.getElementById('generate-btn');

//show price in another element after click


inputButton.addEventListener('click', 
    
    function() {
        document.querySelector('h1').innerHTML = `${price.toFixed(2)} €`
    }
)





