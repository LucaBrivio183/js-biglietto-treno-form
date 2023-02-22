//strict rules

'use strict'

//define a const variable for price∀km (for future changes)

const KmPrice = 0.21;

//define a const variables for taking value  from html inputs

const userKm = document.getElementById("input-km").value;
const userAge = document.getElementById("input-age").value;

//calc and define a let variable for total price (price∀km * kms)
 
let price = KmPrice * userKm

//define a variable for showing discount on ticket

let discountGroup = 'Biglietto standard';

//apply 20% discount for minors  //apply 40% discount for over65

if( userAge ===  'minor') {
    price -= price * 0.2;
    discountGroup = 'Sconto minorenni';
    
} else if ( userAge ===  'over65') {
    price -= price * 0.4;
    discountGroup = 'Sconto over 65';
}

//define a variable for generate button 

const inputButton = document.getElementById('generate-btn');

//define a variable for user name from input

const userName = document.getElementById('input-name').value;

//define a const variable for ticket item to change class on click

const ticket = document.querySelector('.ticket');

//define const variable for CPcode and wagon number (all random)

const wagonNumber = Math.floor(Math.random() * 11);
const CPcode = Math.floor(Math.random() * 100001) + Math.floor(Math.random() * 10001) + Math.floor(Math.random() * 1001) + Math.floor(Math.random() * 101) + Math.floor(Math.random() * 11);

//show details in ticket element after click

inputButton.addEventListener('click', 
    
    function() {
        document.getElementById('name').innerHTML = `${userName}`
        document.getElementById('price').innerHTML = `${price.toFixed(2)} €`
        ticket.classList.add('show');
        document.getElementById('offer').innerHTML = `${discountGroup}`
        document.getElementById("carrozza").innerHTML = `${wagonNumber}`;
        document.getElementById("codicecp").innerHTML = `${CPcode}`;
});
 




