const pwd = document.querySelector('#pwd');
const pwdConfirm = document.querySelector('#pwdConfirm');
const fName = document.querySelector('#firstName');
const lName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phoneNum = document.querySelector('#phoneNumber');

const pwdError = document.querySelector('#pwdError');
const pwdConfirmError = document.querySelector('#pwdConfirmError');
const fNameError = document.querySelector('#fNameError');
const lNameError = document.querySelector('#lNameError');
const emailError = document.querySelector('#emailError');
const phoneNumError = document.querySelector('#phoneNumberError');

const btn = document.querySelector('.btn');

fName.addEventListener('input', function (event) {
	if (fName.value === '') fNameError.textContent = 'Enter your first name';
	else fNameError.textContent = '';
});
lName.addEventListener('input', function (event) {
	if (lName.value === '') lNameError.textContent = 'Enter your last name';
	else lNameError.textContent = '';
});
email.addEventListener('input', function (event) {
	if (email.value === '')
		emailError.textContent =
			'Enter a valid email for ex. (john.johnson@gmail.com)';
	else lNameError.textContent = '';
});

pwd.addEventListener('input', function (e) {
	if (pwd.validity.patternMismatch) {
		pwdError.textContent =
			'Your password must contain at least : one lowercase letter,one uppercase letter, one digit, one special character, have a minimum length of 8 characters';
		pwdError.textContent.toUpperCase();
	} else pwdError.textContent = '';
});

btn.addEventListener('click', (e) => {
	if (pwd.value != pwdConfirm.value)
		pwdConfirmError.textContent = 'Passwords do not match';
});
