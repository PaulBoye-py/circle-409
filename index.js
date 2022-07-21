const telephone = document.querySelector(".telephone");
const telephoneValue = Number(telephone).value;

const mtn_image = document.querySelector(".mtn_image");
const glo_image = document.querySelector(".glo_image");
const etisalat_image = document.querySelector(".etisalat_image");
const airtel_image = document.querySelector(".airtel_image");
const wrong_image = document.querySelector(".wrong_image");

const mtn = [0803, 0806, 0703, 0706, 0813, 0816, 0810, 0814, 0903];
const glo = [0805, 0807, 0705, 0815, 0811, 0905];
const airtel = [0802, 0808, 0812, 0701, 0902];
const etisalat = [0809, 0818, 0817, 0909];


telephone.addEventListener("keyup", function () {
    console.log(telephone.value);
    console.log(typeof telephone.value);


    if (mtn.includes(Number(telephone.value.slice(0, 4)))) {
        mtn_image.classList.remove("hidden");
        glo_image.classList.add("hidden");
        airtel_image.classList.add("hidden");
        etisalat_image.classList.add("hidden");
        wrong_image.classList.add("hidden");


    } else if (glo.includes(Number(telephone.value.slice(0, 4)))) {
        glo_image.classList.remove("hidden");
        mtn_image.classList.add("hidden");
        airtel_image.classList.add("hidden");
        etisalat_image.classList.add("hidden");
        wrong_image.classList.add("hidden");

        
    } else if (airtel.includes(Number(telephone.value.slice(0, 4)))) {
        airtel_image.classList.remove("hidden");
        mtn_image.classList.add("hidden");
        glo_image.classList.add("hidden");
        etisalat_image.classList.add("hidden");
        wrong_image.classList.add("hidden");

        
    } else if (etisalat.includes(Number(telephone.value.slice(0, 4)))) {
        etisalat_image.classList.remove("hidden");
        mtn_image.classList.add("hidden");
        airtel_image.classList.add("hidden");
        glo_image.classList.add("hidden");
        wrong_image.classList.add("hidden");

        
    } else {
        wrong_image.classList.remove("hidden");
        mtn_image.classList.add("hidden");
        airtel_image.classList.add("hidden");
        glo_image.classList.add("hidden");
        etisalat_image.classList.add("hidden");
    }
});

const password = document.querySelector(".password")
const confirmPassword = document.querySelector(".confirmPassword")


confirmPassword.addEventListener("keyup", function() {
    if ((password.value) == (confirmPassword.value)) {
        document.getElementById("password").style.borderColor = "green";
        document.getElementById("password").style.transition = "0.5s";
        document.getElementById("confirmPassword").style.borderColor = "green"
        document.getElementById("confirmPassword").style.transition = "0.5s"
        console.log(password.value)
        console.log(confirmPassword.value)
        return
    } else if (password != confirmPassword) {
        document.getElementById("confirmPassword").style.borderColor = "red";
        document.getElementById("confirmPassword").style.transition = "0.5s"
        // document.getElementById("hidden").classList.remove("hidden")
        return
    }
})

let letter = document.getElementById("letter");
let capital = document.getElementById("capital")
let number = document.getElementById("number")
let length = document.getElementById("length")

password.addEventListener("focus", function () {
    document.getElementById("message").style.display = "block";
})

password.addEventListener("blur", function() {
    document.getElementById("message").style.display = "none";
})

password.addEventListener("keyup", function() {
    let lowerCaseLetters = /[a-z]/g;
    if (password.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid")
        letter.classList.add("valid")
    } else {
        letter.classList.add("invalid")
        letter.classList.remove("valid")
    }

    let upperCaseLetters = /[A-Z]/g;
    if(password.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid")
        capital.classList.add("valid")
    } else {
        capital.classList.add("invalid")
        capital.classList.remove("valid")
    }

    let numbers = /[0-9]/g;
    if (password.value.match(numbers)) {
        number.classList.remove("invalid")
        number.classList.add("valid")
    } else {
        number.classList.add("invalid")
        number.classList.remove("valid")
    }

    if (password.value.length >= 8) {
        length.classList.remove("invalid")
        length.classList.add("valid")
    } else {
        length.classList.add("invalid")
        length.classList.remove("valid")
    }
})