const nameTextField = document.getElementsByTagName('label')[0];
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
        //function is called on every checkbox event so we need to prevent more than one total from being displayed
        if(activitiesField.children.length > 9){
            let previousTotal = cart.previousElementSibling;
            activitiesField.removeChild(previousTotal);
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
    //toggleCounter keeps track of clicks on the form to act as a switch
    let toggleCounter = 0;
    paymentField.addEventListener('click', () => {
        //Removes the "Select Payment Method" once the field is active to avoid it being submited
        paymentOptions[0].style.display = 'none'
        toggleCounter += 1;
        //Makes the default selected option credit card once the form is active so if it is submited, credit card is selected
        if(toggleCounter <= 1)
        paymentOptions[1].selected = true;
    })
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
