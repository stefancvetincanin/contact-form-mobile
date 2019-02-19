// kako uraditi animacije?
const s = selektor => document.getElementById(selektor)

const inputName = s("name")
const inputSurname = s("surname")
const inputEmail = s("email")

const steps1 = s("steps1")
const steps2 = s("steps2")
const steps3 = s("steps3")
const steps4 = s("steps4")

const loader1 = s("loader1")
const loader2 = s("loader2")
const loader3 = s("loader3")
const loader4 = s("loader4")

// Name polje
inputName.addEventListener("click", function () {
    steps1.innerHTML = "";
    loader1.style = "display: block"
})
inputName.addEventListener("focusout", function () {
    loader1.style = "display: none"
    if (inputName.value.length > 2) {
        steps1.innerHTML = "&#10004;";
    } else {
        steps1.innerHTML = "1";
    }
})

// Surname polje
inputSurname.addEventListener("click", function () {
    steps2.innerHTML = "";
    loader2.style = "display: block"
})
inputSurname.addEventListener("focusout", function () {
    loader2.style = "display: none"
    if (inputSurname.value.length > 2) {
        steps2.innerHTML = "&#10004;";
    } else {
        steps2.innerHTML = "2";
    }
})

// Email polje
inputEmail.addEventListener("click", function () {
    steps3.innerHTML = "";
    loader3.style = "display: block"
})
inputEmail.addEventListener("focusout", function () {
    loader3.style = "display: none"
    if (inputSurname.value.length > 2) {
        steps3.innerHTML = "&#10004;";
    } else {
        steps3.innerHTML = "3";
    }
})