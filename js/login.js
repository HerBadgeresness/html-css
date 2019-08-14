users = [
	{
		"name": "king",
		"username": "melis",
		"password": "123"
	},
	{
		"name": "melises slut",
		"username": "fimelis",
		"password": "123"
	}
];


function handleButtonClick() {
	event.preventDefault()
	
	var username = document.getElementById("username").value.trim();
	var password = document.getElementById("password").value.trim();

	if(username === "" || password === "") {
		alert("Polja ne smeju biti prazna");
		return;
	}

	for(var i=0;i<users.length;i++){
		if(users[i].username === username && users[i].password === password)  {
			window.location.replace("index.html?name=" + users[i].name);
			return;
		}
	}
	alert("Nema ni jedan user sa ovim username/password");
	return;
}

document.getElementById("submitButton").addEventListener("click", handleButtonClick);

