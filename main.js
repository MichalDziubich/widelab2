const username = document.getElementById('username');
const form = document.getElementById('form');
const zipCode = document.getElementById('zipcode');
const age = document.getElementById('age');
const male = document.getElementById('male');
const terms = document.getElementById('terms');


//Show error message and success

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


//Check if email is valid

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}




//Check required fileds
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

//Check input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must not be greater then ${max} characters`);
    } else {
        showSuccess(input)
    }
}



//Get fieldname

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners 
 form.addEventListener('submit', function(e) {
     e.preventDefault() 

    checkRequired([username, email, zipCode, age, terms]);
    checkLength(username, 3, 16);
    checkEmail(email);
 })
