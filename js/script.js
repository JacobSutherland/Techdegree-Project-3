const nameTextField = document.getElementsByTagName('label')[0];
const otherJobInput = document.querySelector('#other-title');
const jobsField = document.querySelector('#title');
const shirtThemeField = document.querySelector('#design');
const shirtColorField = document.querySelector('#color');
const colorOptions = document.querySelectorAll('#color option');
const themeOptions = document.querySelectorAll('#design option');
const activitiesField = document.querySelector('.activities');
const activitiesCheckboxes = document.querySelectorAll('.activities input');

/* --------------------------  NAME FIELD ------------------------*/
//Auto focuses the first texr field on page load
nameTextField.focus();
otherJobInput.style.display = 'none';

//Hides and shows the input field for the "Other" jobs option by checking the target's value for 'other' and toggling display 
jobsField.addEventListener( 'change', e => {
    if (e.target.value ==='other'){
        otherJobInput.style.display = 'block';
    } else {
        otherJobInput.style.display = 'none';
    }
})

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

function scheduleChecker(){
    let totalEventCosts = 0;
    for(let i = 0; i < activitiesCheckboxes.length; i++){
        activitiesCheckboxes[i].addEventListener('change', e => {
                if(e.target.checked && e.target.name === "js-frameworks"){
                    totalEventCosts += parseInt(e.target.dataset.cost);
                    activitiesCheckboxes[3].disabled = true;
                    console.log(totalEventCosts)
                } else if(e.target.checked === false && e.target.name === "js-frameworks"){
                    activitiesCheckboxes[3].disabled = false;
                    totalEventCosts -= parseInt(e.target.dataset.cost);
                    console.log(totalEventCosts)
                 } 
                 if(e.target.checked && e.target.name === "express"){
                    console.log(totalEventCosts)
                    totalEventCosts += parseInt(e.target.dataset.cost);
                    activitiesCheckboxes[1].disabled = true;
                } else if(e.target.checked === false && e.target.name === "express"){
                    console.log(totalEventCosts)
                    totalEventCosts -= parseInt(e.target.dataset.cost);
                    activitiesCheckboxes[1].disabled = false;
                 } 
                 if(e.target.checked && e.target.name === "js-libs"){
                    console.log(totalEventCosts)
                    totalEventCosts += parseInt(e.target.dataset.cost);
                    activitiesCheckboxes[4].disabled = true;
                } else if(e.target.checked === false && e.target.name === "js-libs"){
                    console.log(totalEventCosts)
                    totalEventCosts -= parseInt(e.target.dataset.cost);
                    activitiesCheckboxes[4].disabled = false;
                 } 
                 if(e.target.checked && e.target.name === "node"){
                    console.log(totalEventCosts)
                    totalEventCosts += parseInt(e.target.dataset.cost);
                    activitiesCheckboxes[2].disabled = true;
                } else if(e.target.checked === false && e.target.name === "node"){
                    console.log(totalEventCosts)
                    totalEventCosts -= parseInt(e.target.dataset.cost);
                    activitiesCheckboxes[2].disabled = false;
                 } 
                 if(e.target.checked && e.target.name === "all"){
                    totalEventCosts += parseInt(e.target.dataset.cost);
                    console.log(totalEventCosts)
                } else if(e.target.checked === false && e.target.name === "all"){
                    console.log(totalEventCosts)
                    totalEventCosts -= parseInt(e.target.dataset.cost);
                 } 
            }) 
        }
    const cart = document.createElement('div');
    const finalTotal = document.createElement('p');
    finalTotal.textContent = totalEventCosts;
    cart.appendChild(finalTotal);
    activitiesField.appendChild(cart);
    }
scheduleChecker() 
