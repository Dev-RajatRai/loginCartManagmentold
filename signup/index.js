
let form = document.getElementById("login")
form.addEventListener('submit', function (e) {
	e.preventDefault();

	var username = document.forms["signup"]["username"].value;
	var email = document.forms["signup"]["email"].value;
	var password = document.forms["signup"]["password"].value
	var confirmPassword = document.forms["signup"]["confirm-password"].value;

	if (username == "" || email == "" || password == "" || confirmPassword == "") {
		alert("Please fill in all fields");

	} else if (password != confirmPassword) {
		console.log(password, confirmPassword);
		// alert("Passwords do not match");

	} else {
		console.log("sucess");

		localStorage.setItem('name',`${username}`)
		let link = document.createElement('a')
		link.href = "index2.html"
		link.click()

	}
	return false;
})
