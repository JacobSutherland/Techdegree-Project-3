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

//Defaults "Shirt Color" options to none and sets Color option to "Select Theme"
    for(let i = 0; i < shirtColorField.children.length; i++){
        shirtColorField.children[i].style.display = 'none'
    }

//Toggles colors option on and off bases on theme  selection
function themeChecker(){
    if(shirtThemeField.value === 'Select Theme'){
        shirtColorField.children[0].textContent = 'Please select a T-shirt theme';
    } else {
        shirtColorField.children.textContent = one;
    }
       shirtThemeField.addEventListener('change', e => {
           if(e.target.value === 'Select Theme'){
               shirtColorField.children.textContent = 'Select Theme';
               for(let i = 0; i < shirtColorField.children.length; i++){
               shirtColorField.children[i].style.display = 'none'
            }
           } else if(e.target.value === 'I &#9829; JS'||'JS Puns'){
                for(let i = 0; i < shirtColorField.children.length; i++){
                shirtColorField.children[i].style.display = 'block'
           }
        }
       })
    }
//Calls theme checking function
themeChecker();

