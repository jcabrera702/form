const password = document.querySelector("#password-input");
const confirm = document.querySelector("#confirm-password");

function validatePasswords (){
    if (password.value !== confirm.value){
        confirm.setCustomValidity("Passwords do not match");
        confirm.setAttribute("aria-invalid", "true");
    } else {
        confirm.setCustomValidity("");
        confirm.removeAttribute("aria-invalid");
    }
}

password.addEventListener("input", validatePasswords);
confirm.addEventListener("input", validatePasswords);


