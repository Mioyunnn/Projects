
const signInBtn = document.getElementById("sign");
const registerBtn = document.getElementById("register");
const header = document.querySelector(".notice h2")
const headerQuote = document.querySelector(".notice h4")



function signInForm(){
    const inputName = document.querySelector(".form-name");
    const formName = document.getElementById("name");
    const formWrapper = document.querySelector(".form-wrapper");
    const formMsg = document.querySelector(".form-message");
    const inputMsg = document.getElementById("msg");
    inputName.style.display = "none";
    formName.style.display= "none";
    formMsg.style.display = "none";
    inputMsg.style.display = "none";
    formWrapper.style.height = "35vh";
}

function registerForm(){
    const inputName = document.querySelector(".form-name");
    const formName = document.getElementById("name");
    const formWrapper = document.querySelector(".form-wrapper");
    const formMsg = document.querySelector(".form-message");
    const inputMsg = document.getElementById("msg");
    inputName.style.display = "block";
    formName.style.display= "block";
    formMsg.style.display = "block";
    inputMsg.style.display = "block";
    formWrapper.style.height = "53vh";

}


signInBtn.addEventListener("click", () => {
    header.innerText = "Sign In"
    headerQuote.innerText = "Welcome back."
    signInForm();
})

registerBtn.addEventListener("click", () => {
    header.innerText = "Register"
    headerQuote.innerText = "Nice to meet you."
    registerForm();
})

/*form*/

let pass = document.getElementById("password");
let errorMsg = document.getElementById("errorMsg");
let str = document.getElementById("strength");

pass.addEventListener("input", () => {
    if(pass.value.length > 0){
        pass.style.border = "1px solid #888888";
        errorMsg.style.display = "block";
    }
    else{
        pass.style.border= "1px solid #d4d4d4";
        errorMsg.style.display = "none";
    }
    if(pass.value.length < 4){
        str.innerText = "weak.";
        pass.style.borderColor = "#ff5925";
        errorMsg.style.color = "#ff5925";
    }
    else if(pass.value.length >= 4 && pass.value.length <=8){
        str.innerText= "medium.";
        pass.style.borderColor = "yellow";
        errorMsg.style.color = "yellow";
    }
    else if(pass.value.length >=8){
        str.innerText = "strong.";
        pass.style.borderColor = "#26d730"
        errorMsg.style.color = "#26d730";
    }
})

let emailError = document.getElementById("email-error");
let email = document.getElementById("email");

email.addEventListener("input", () => {

    if(email.value.length == 0){
        emailError.style.display = "block"
        emailError.style.color = "#ff5925"
        emailError.innerHTML = "Email is required."
    }
    else if(email.value.length >= 10){
        emailError.style.display = "block"
        emailError.innerHTML = ""
    }
});

const submit = document.getElementById("submit");

function checkFormValidity() {
    const isValid = email.value.length > 10 && pass.value.length > 8;
    submit.disabled = !isValid;
}

email.addEventListener('input', checkFormValidity);
pass.addEventListener('input', checkFormValidity);

submit.addEventListener("click", (e) => {
    if(header.innerText === "Sign In"){
        e.preventDefault();
        alert("Successfully Sign in !");
    }
    else{
        e.preventDefault();
        alert("Successfully Register !");
    }
})

