// function validateName (nameString) {
// 	const arrayName = nameString.split('');
// 	if (arrayName.length > 0 && arrayName.length <= 40) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

function validateEmail (emailString) {
	const arrayEmail = emailString.split('');
	for (let i = 0; i < arrayEmail.length; i += 1) {
		if (arrayEmail[i] === '@') {
		} else {
			return false
		}
	}
	if (arrayEmail.length > 0 && arrayEmail.length <= 50) {
		return true
	} else {
		return false
	}
}
console.log(validateEmail('luiz@gmail.com'))