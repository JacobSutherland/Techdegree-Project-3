const firstTextField = document.getElementsByTagName('label')[0];
const otherJobInput = document.querySelector('#other-title');
const jobsField = document.querySelector('#title');

//Auto focuses the first texr field on page load
firstTextField.focus();
otherJobInput.style.display = 'none';

//Hides and displays the input field for the "Other" jobs option 
jobsField.addEventListener( 'click', e => {
    if (e.target.value ==='other'){
        otherJobInput.style.display = 'block';
    } else {
        otherJobInput.style.display = 'none';
    }
})

