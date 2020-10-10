const nameTextField = document.getElementsByTagName('label')[0];
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#mail');
const otherJobInput = document.querySelector('#other-title');
const jobsField = document.querySelector('#title');
const shirtThemeField = document.querySelector('#design');
const shirtColorField = document.querySelector('#color');
const colorOptions = document.querySelectorAll('#color option');
const themeOptions = document.querySelectorAll('#design option');
const activitiesField = document.querySelector('.activities');
const activitiesCheckboxes = document.querySelectorAll('.activities input');
const paymentField = document.querySelector('#payment');
const paymentOptions = document.querySelectorAll('#payment option');
const creditCardField = document.querySelector('#credit-card');
const payPal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');
const submitBtn = document.querySelector('button');
const form = document.querySelector('form');
const creditCardNum = document.querySelector('#cc-num');
const cardLabel = document.querySelector('.col-6 label');
const zipCode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');
/* --------------------------  NAME FIELD ------------------------*/
//Auto focuses the first texr field on page load
nameTextField.focus();
otherJobInput.style.display = 'none';

/* --------------------------  JOB ROLE  FIELD ------------------------*/
//Hides and shows the input field for the "Other" jobs option by checking the target's value for 'other' and toggling display 
jobsField.addEventListener( 'change', e => {
    if (e.target.value ==='other'){
        otherJobInput.style.display = 'block';
    } else {
        otherJobInput.style.display = 'none';
    }
})

/* --------------------------  T-SHIRT INFO FIELD------------------------*/
//Checks the value of the of the design and color options to displays appropriate Color options or defaults to "Please select a T-shirt theme"
function themeChecker(){
    //Created a default value for when a theme isn't selected
    const colorDefault = document.createElement('option');
    colorDefault.textContent = 'Please select a T-shirt theme'
    shirtColorField.style.display = 'none';
    shirtColorField.add(colorDefault, 1);
    //Deafaults the new option in color field and make it the initial selection
    shirtColorField[0].text = colorDefault.text;
    colorDefault.selected = true;
    //Deafaults all color options to 'display none' because a theme isn't selected
    for(let i = 0; i < colorOptions.length; i++){
        colorOptions[i].style.display = 'none';
    }
    //if the theme's event is triggered it adds/removes the default theme option, and also  toggles the display of colors in a theme collection based on user selection
    shirtThemeField.addEventListener('change', e =>{
        shirtColorField.add(colorDefault, 0);
        if(e.target.value === 'Select Theme'){
            shirtColorField.style.display = 'none';
        } else {
            shirtColorField.style.display = 'block';
        }
        if(e.target.value === "Select Theme"){
            colorOptions[0].text = colorDefault.text;
            for(let i = 0; i < colorOptions.length; i++){
                colorOptions[i].style.display = 'none';
            }
        } else if(e.target.value === "js puns"){
            shirtColorField.remove(colorDefault);
            colorOptions[0].text = 'Cornflower Blue (JS Puns shirt only)';
            for(let i = 0; i < colorOptions.length; i++){
                if(i >= 3){
                colorOptions[i].style.display = 'none';
                } else {
                    colorOptions[i].style.display = 'block';
                }
            } 
        } else if(e.target.value === "heart js"){
            shirtColorField.remove(colorDefault);
            colorOptions[0].text = colorOptions[3].text;
            for(let i = 0; i < colorOptions.length; i++){
                if(i < 3){
                colorOptions[i].style.display = 'none';
                } else {
                colorOptions[i].style.display = 'block';
                }
            }
        }
    })
}
themeChecker(); 

/* --------------------------  ACTIVITIES FIELD ------------------------*/
//Checks the values of the events names, whether a box is checked, and the cost of the event to prevent conflicts and maintain the running cost
function scheduleChecker(){
    let totalEventCosts = 0;
    //creates elements to sppend final cost of events attended
    function buildCart(){
        const cart = document.createElement('div');
        const finalTotal = document.createElement('p');
        finalTotal.textContent = `Total: $${totalEventCosts}`
        cart.appendChild(finalTotal);
        activitiesField.appendChild(cart);
        //function is called on every checkbox event so we need to prevent more than one total from being displayed, this will also remove the validation error message as it will aslo be appnded as a previous element  toi the cart f no option is selected
        if(activitiesField.children.length > 9){
            let previousTotal = cart.previousElementSibling;
            activitiesField.removeChild(previousTotal);
        }
        if(totalEventCosts === 0){
            activitiesField.removeChild(cart);
        }
    }
    for(let i = 0; i < activitiesCheckboxes.length; i++){
        //for each checkbox evaluate if checked, name value, add/subtract cost, and style conflicting events
                activitiesCheckboxes[i].addEventListener('change', e => {
                if(e.target.checked && e.target.name === "js-frameworks"){
                    totalEventCosts += parseInt(e.target.dataset.cost);
                    activitiesCheckboxes[3].disabled = true;
                    activitiesCheckboxes[3].parentElement.style.textDecoration = "line-through";
                } else if(e.target.checked === false && e.target.name === "js-frameworks"){
                    totalEventCosts -= parseInt(e.target.dataset.cost);
                    activitiesCheckboxes[3].disabled = false;
                    activitiesCheckboxes[3].parentElement.style.textDecoration = "none";
                 } 
                 if(e.target.checked && e.target.name === "express"){
                    totalEventCosts += parseInt(e.target.dataset.cost);
                    activitiesCheckboxes[1].disabled = true;
                    activitiesCheckboxes[1].parentElement.style.textDecoration = "line-through";
                } else if(e.target.checked === false && e.target.name === "express"){
                    totalEventCosts -= parseInt(e.target.dataset.cost);
                    activitiesCheckboxes[1].disabled = false;
                    activitiesCheckboxes[1].parentElement.style.textDecoration = "none";
                 } 
                 if(e.target.checked && e.target.name === "js-libs"){
                    totalEventCosts += parseInt(e.target.dataset.cost);
                    activitiesCheckboxes[4].disabled = true;
                    activitiesCheckboxes[4].parentElement.style.textDecoration = "line-through";
                } else if(e.target.checked === false && e.target.name === "js-libs"){
                    totalEventCosts -= parseInt(e.target.dataset.cost);
                    activitiesCheckboxes[4].disabled = false;
                    activitiesCheckboxes[4].parentElement.style.textDecoration = "none";
                 } 
                 if(e.target.checked && e.target.name === "node"){
                    totalEventCosts += parseInt(e.target.dataset.cost);
                    activitiesCheckboxes[2].disabled = true;
                    activitiesCheckboxes[2].parentElement.style.textDecoration = "line-through";
                } else if(e.target.checked === false && e.target.name === "node"){
                    totalEventCosts -= parseInt(e.target.dataset.cost);
                    activitiesCheckboxes[2].disabled = false;
                    activitiesCheckboxes[2].parentElement.style.textDecoration = "none";
                 } 
                 if(e.target.checked && e.target.name === "all"){
                    totalEventCosts += parseInt(e.target.dataset.cost);
                } else if(e.target.checked === false && e.target.name === "all"){
                    totalEventCosts -= parseInt(e.target.dataset.cost);
                 } 
                 if(e.target.checked && e.target.name === "build-tools"){
                    totalEventCosts += parseInt(e.target.dataset.cost);
                } else if(e.target.checked === false && e.target.name === "build-tools"){
                    totalEventCosts -= parseInt(e.target.dataset.cost);
                 } 
                 if(e.target.checked && e.target.name === "npm"){
                    totalEventCosts += parseInt(e.target.dataset.cost);
                } else if(e.target.checked === false && e.target.name === "npm"){
                    totalEventCosts -= parseInt(e.target.dataset.cost);
                 } 
                 buildCart()
            }) 
        }
    }
scheduleChecker() 

/* --------------------------  PAYMENT FIELD ------------------------*/
//Function hides and displays payment options based on user selection
function paymentChecker(){
    //initializes form by setting credit card as default and hide other options
    payPal.style.display = 'none';
    bitcoin.style.display = 'none';
    paymentOptions[0].style.display = 'none';
    paymentOptions[1].selected = true;
    //Listens for the option values changing in order to hide and display appropriate payment
    paymentField.addEventListener('change', e => {
        if(e.target.value === 'credit card'){
            creditCardField.style.display = 'block';
            bitcoin.style.display = 'none';
            payPal.style.display = 'none';
        } else if(e.target.value === 'paypal'){
            creditCardField.style.display = 'none';
            bitcoin.style.display = 'none';
            payPal.style.display = 'block';
        } else if(e.target.value === 'bitcoin'){
            creditCardField.style.display = 'none';
            bitcoin.style.display = 'block';
            payPal.style.display = 'none';
        }
    })
}

paymentChecker();

/* --------------------------  VALIDATION ------------------------*/
function nameValidator(e){
    const validName = /[a-zA-Z]+/
    if(nameInput.value === '' || nameInput.value === 'Name Required'){
        nameInput.style.borderColor = 'red';
        nameInput.value = 'Name Required';
        e.preventDefault();
    } else if(validName.test(nameInput.value) === false && nameInput.value.length >= 1){
        nameInput.style.borderColor = 'red';
        nameInput.value = 'Please Use Alphabetical Characters';
        e.preventDefault();
    }
    nameInput.addEventListener('click', () => {
    nameInput.style.borderColor = 'rgb(112, 157, 220)';
    nameInput.value = '';
    })
}

function emailValidator(e){
    const validEmail = /^\w+@[a-zA-Z]+\.(com|org|net|edu)$/;
    if(emailInput.value === '' || emailInput.value === 'Email Required'){
        emailInput.style.borderColor = 'red';
        emailInput.value = 'Email Address Required';
        e.preventDefault();
    } else if(validEmail.test(emailInput.value) === false && emailInput.value.length >= 1){
        emailInput.style.borderColor = 'red';
        emailInput.value = 'Please Use a Valid Email Address (email@email.com)';
        e.preventDefault();
    }
    emailInput.addEventListener('click', () => {
    emailInput.style.borderColor = 'rgb(112, 157, 220)';
    emailInput.value = '';
    })
}

function eventValidator(e){
    const eventError = document.createElement('p');
    let unchecked = 0;
    activitiesCheckboxes.forEach( i => {
        if(i.checked === false){
            unchecked++;
        }
        if(unchecked === activitiesCheckboxes.length){
            eventError.textContent = 'Please Select At Least One Activity'
            eventError.style.color = 'red';
            activitiesField.appendChild(eventError);
            if(activitiesField.children.length > 9){
                activitiesField.removeChild(activitiesField.lastElementChild);
            }
            e.preventDefault();
        }
    })
}

function paymentValidator(e){
    const validPayment = /^[0-9]{13,16}$/;
    if(validPayment.test(creditCardNum.value) === false){
        creditCardNum.style.borderColor = 'red';
        creditCardNum.value = 'Card Number Must be 13 - 16 Digits';
        e.preventDefault();
    }
}

function zipCodeValidator(e){
    const validZip = /^\d{5}$/
    if(validZip.test(zipCode.value) === false){
        zipCode.style.borderColor = 'red';
        zipCode.value = '5 digit Zip Code'
        e.preventDefault();
    } else if(validZip.test(zipCode.value) === true){
        zipCode.style.borderColor = 'rgb(112, 157, 220)';
    }
    zipCode.addEventListener('click', () => {
        zipCode.value = ''
        zipCode.style.borderColor = 'rgb(112, 157, 220)';
    })
}

function cvvValidator(e){
    const validCvv = /^\d{3}$/
    if(validCvv.test(cvv.value) === false){
        cvv.style.borderColor = 'red';
        cvv.value = '3 Digit #'
        e.preventDefault();
    } else if(validCvv.test(cvv.value) === true){
        cvv.style.borderColor = 'rgb(112, 157, 220)';
    }
    cvv.addEventListener('click', () => {
        cvv.value = ''
        cvv.style.borderColor = 'rgb(112, 157, 220)';
    })
}
/* -------------------------- LIVE CARD VALIDATION------------------------*/
creditCardNum.addEventListener('click', () => {
    creditCardNum.style.borderColor = 'initial';
    creditCardNum.style.borderColor = 'rgb(112, 157, 220)'
    if(creditCardNum.value === 'Card Number Must be 13 - 16 Digits'){
        creditCardNum.value = '';
    }
})
creditCardNum.addEventListener('input', () => {
    const validPayment = /^[0-9]{13,16}$/;
    if(validPayment.test(creditCardNum.value) === false){
    creditCardNum.style.borderColor = 'red';     
}   else if(validPayment.test(creditCardNum.value) === true){
        creditCardNum.style.borderColor = 'rgb(112, 157, 220)';
        cardLabel.textContent = 'Card Number:';
        cardLabel.style.color = 'initial';
} 
    if(creditCardNum.value.length > 1 && creditCardNum.value.length < 13){
        cardLabel.textContent = 'Too Short (Minimum 13 Digits)';
        cardLabel.style.color = 'red';
    } else if(creditCardNum.value.length > 16) {
        cardLabel.textContent = 'Too Long (Maximum 16 Digits)';
        cardLabel.style.color = 'red';
    } 
    else if(creditCardNum.value.length < 1){
        cardLabel.textContent = 'Card Number:';
        cardLabel.style.color = 'initial';
        creditCardNum.style.borderColor = 'rgb(112, 157, 220)';
    }
})

function valdidator(){
    form.addEventListener('submit', (e) => {
    nameValidator(e);
    emailValidator(e);
    eventValidator(e);
    paymentValidator(e);
    zipCodeValidator(e);
    cvvValidator(e);
})
}

valdidator();