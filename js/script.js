const nameTextField = document.getElementsByTagName('label')[0];
const otherJobInput = document.querySelector('#other-title');
const jobsField = document.querySelector('#title');
const shirtThemeField = document.querySelector('#design');
const shirtColorField = document.querySelector('#color');


//Auto focuses the first texr field on page load
nameTextField.focus();
otherJobInput.style.display = 'none';

//Hides and displays the input field for the "Other" jobs option 
jobsField.addEventListener( 'change', e => {
    if (e.target.value ==='other'){
        otherJobInput.style.display = 'block';
    } else {
        otherJobInput.style.display = 'none';
    }
})

//Checks the value of the of the design options and displays appropriate Color options or defaults to "Please select a T-shirt theme"
function themeChecker(){
    shirtColorField[0].textContent = 'Please select a T-shirt theme'
    for(let i = 0; i < shirtColorField.length; i++){
        shirtColorField[i].style.display = 'none';
    }
    shirtThemeField.addEventListener('change', e =>{
        if(e.target.value === "Select Theme"){
            shirtColorField[0].textContent = 'Please select a T-shirt theme';
            for(let i = 0; i < shirtColorField.length; i++){
                shirtColorField[i].style.display = 'none';
            }
        } else if(e.target.value === 'js puns'){
            shirtColorField[0].textContent = 'Cornflower Blue (JS Puns shirt onlys)';
            for(let i = 0; i < shirtColorField.length; i++){
                if(i >= 3){
                shirtColorField[i].style.display = 'none';
                } else {
                    shirtColorField[i].style.display = 'block';
                }
            } 
        } else if(e.target.value === 'heart js'){
            for(let i = 0; i < shirtColorField.length; i++){
                if(i < 3){
                shirtColorField[i].style.display = 'none';
                } else {
                    shirtColorField[i].style.display = 'block';
                }
            }
        }
    })
}
    
themeChecker(); 