//strict rules

'use strict'

//define a const variable for price∀km (for future changes)

const KmPrice = 0.21;

//define a const variables for taking value  from html inputs

const userKm = document.getElementById("input-km");
const userAge = document.getElementById("input-age");


//define a variable for showing discount on ticket

let discountGroup = 'Biglietto standard';

//define a variable for generate button 

const inputGenerateButton = document.getElementById('generate-btn');

//define a variable for user name from input

const userName = document.getElementById('input-name');

//define a const variable for ticket item to change class on click

const ticket = document.querySelector('.ticket');

//define const variable for CPcode and wagon number (all random)

const wagonNumber = Math.floor(Math.random() * 11) + 1;
const CPcode = Math.floor(Math.random() * 100001) + Math.floor(Math.random() * 10001) + Math.floor(Math.random() * 1001) + Math.floor(Math.random() * 101) + Math.floor(Math.random() * 11);

//show details in ticket element after click

inputGenerateButton.addEventListener('click', 
    
    function() {
        //get current value at click
        const userKmValue =  Number(userKm.value);
        const userAgeValue =  userAge.value;
        const userNameValue =  userName.value;
        //calc price 
        let price = KmPrice * userKmValue;
        //apply correct discount 
        if( userAgeValue ===  'minor') {
            price -= price * 0.2;
            discountGroup = 'Sconto minorenni';
            
        } else if ( userAgeValue ===  'over65') {
            price -= price * 0.4;
            discountGroup = 'Sconto over 65';
        }

        ticket.classList.add('show');//show ticket on reset
        
        //show value on ticket
        document.getElementById('name').innerHTML = `${userNameValue}`;
        document.getElementById('price').innerHTML = `${price.toFixed(2)} €`;
        document.getElementById('offer').innerHTML = `${discountGroup}`;
        document.getElementById("carrozza").innerHTML = `${wagonNumber}`;
        document.getElementById("codicecp").innerHTML = `${CPcode}`;
}
);

//define variable for reset  button
const inputResetButton = document.getElementById('reset-btn');

//add event on click of reset  button
inputResetButton.addEventListener('click', 

    function() {
        ticket.classList.remove('show'); //hide ticket on reset
}       
);
