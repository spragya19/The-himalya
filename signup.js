var loadfile = function (event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

function signup() {
	var img = document.getElementById('imgfile').value;
	var name = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	var pass = document.getElementById('pass').value;

	var date = document.getElementById('date').value;

	console.log(img, name, phone, email, pass, date);
}
document.querySelector('form'),
	addEventListener('submit', (e) => {
		e.preventDefault();
	});

function validate() {
	var name = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	var pass = document.getElementById('pass').value;

	var date = document.getElementById('date').value;

	if (name == '') {
		document.getElementById('uname').innerHTML =
			'** please Fill the user name **';
		return false;
	}
	if (name.length < 3) {
		document.getElementById('uname').innerHTML =
			'** user name must be a 3 to 20 chracter only **';
		return false;
	}
	if (name.length > 20) {
		document.getElementById('uname').innerHTML =
			'** user name must be a 3 to 20 chracter only **';
		return false;
	}
	if (!isNaN(name)) {
		document.getElementById('uname').innerHTML =
			' ** Only Chracter Are allowed';
		return false;
	}
	if (email == '') {
		document.getElementById('emails').innerHTML =
			'** please Fill the  Email id **';
		return false;
	}
	if (email.indexOf('@') <= 0) {
		document.getElementById('emails').innerHTML = '** Invalid @ Position';
		return false;
	}
	if (
		email.charAt(email.length - 4) != '.' &&
		email.charAt(email.length - 3) != '.'
	) {
		document.getElementById('emails').innerHTML = '** Invalid Positions';
		return false;
	}

	if (pass == '') {
		document.getElementById('passs').innerHTML =
			'** please Fill the password **';
		return false;
	}
	if (pass.length <= 6) {
		document.getElementById('passs').innerHTML =
			'** password must be a 6 chracter';
		return false;
	}
	if (pass.length > 20) {
		document.getElementById('passs').innerHTML =
			'**  password  must be a less than  30 chracter';
		return false;
	}

	if (phone == '') {
		document.getElementById('phones').innerHTML =
			'** please Fill the phoneNumber **';
		return false;
	}
	if (phone.length != 10) {
		document.getElementById('phones').innerHTML =
			'** Mobile Number must be a  10 digit only';
		return false;
	}
	if (date == '') {
		document.getElementById('dates').innerHTML = '** please Fill the DOB **';
		return false;
	} else {
		signup();
	}
}
