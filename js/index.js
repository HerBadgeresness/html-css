//funkcija koja ocitava vrednost URL parametra pod nazivom 'name'
var url = new URL(window.location.href);
var userName = url.searchParams.get("name");
if(userName === null) {
    window.location.replace("login.html");
}
document.getElementById("userSpan").textContent = userName;
