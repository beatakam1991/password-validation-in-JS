const password = document.querySelector("#password");
const passinfo = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const checkPassword = () => {
    if (password.value.length > minValue && password.value.match(letters) && password.value.match(numbers) && password.value.match(special)) {
        passinfo.innerHTML = "Masz bardzo dobre hasło";
        passinfo.style.color = "#7FFF00";      
    }
    else if (password.value.length > minValue && password.value.match(letters) && password.value.match(numbers)) {
        passinfo.innerHTML = "Masz dobre hasło";
        passinfo.style.color = "#FF8C00"; 
} 
    else {
        passinfo.innerHTML = "Masz za słabe hasło";
        passinfo.style.color = "#B22222";   
    }
};

password.addEventListener("keyup", function () {
    if (password.value !== ""){
       checkPassword()
    }
    else {
        passinfo.innerHTML = "Nie podałeś hasła...";
        passinfo.style.color = "#808080";   
    };
});
