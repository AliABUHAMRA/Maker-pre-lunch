// variables
const submit = document.querySelector('#submit')
const email = document.querySelector('#email')

submit.addEventListener('click', function (e) {
    e.preventDefault()
    checkEmail()
})

// checkEmail
function checkEmail() {
    let valueEmail = email.value
    if (!validateEmail(valueEmail)) {
        email.nextElementSibling.textContent = 'Oops! That doesn’t look like an email address'
    }
    else {
        email.nextElementSibling.textContent = 'valid ✔'

    }
}

// validateEmail
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}