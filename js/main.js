const s = selektor => document.getElementById(selektor)

const inputName = s("name")
const inputSurname = s("surname")
const inputEmail = s("email")
const radio1 = s("check-monday")
const radio2 = s("check-tuesday")

const steps1 = s("steps1")
const steps2 = s("steps2")
const steps3 = s("steps3")
const steps4 = s("steps4")

const loader1 = s("loader1")
const loader2 = s("loader2")
const loader3 = s("loader3")
const loader4 = s("loader4")

const percent = s("complete-percent")

let completion = 0
let first = false
let second = false
let third = false
let fourth = false

const emailPattern = /(\w|\d)+@(\w|\d)+/i

let radioIncomplete = true
let index = 0
var interval

const progressBar = s("progress-bar")
const obim = 19 * 2 * Math.PI
progressBar.style.strokeDasharray = `${obim} ${obim}`
progressBar.style.strokeDashoffset = obim

function setProgressBar(procenat) {
    let pomeraj = obim - procenat * obim;
    progressBar.style.strokeDashoffset = pomeraj;
}

function radioCheck() {
    loader4.style = "display: block"
    steps4.innerHTML = ""
    setTimeout(function () {
        loader4.style = "display: none"
        steps4.innerHTML = "&#10004;"
    }, 500)
}

function incComplete() {
    if (index < 100) {
        completion += 25
        setProgressBar(completion/100)
        interval = setInterval(intervalInc, 20)
    }
}

function intervalInc() {
    index++
    percent.innerHTML = `${index}%`
    if (index >= 100) {
        percent.innerHTML = "&#10004;"
    }
    if (index >= completion) clearInterval(interval)
}

function decComplete() {
    if (index > 0) {
        completion -= 25
        setProgressBar(completion/100)
        interval = setInterval(intervalDec, 20)
    }
}

function intervalDec() {
    index--
    percent.innerHTML = `${index}%`
    if (index < 0) {
        percent.innerHTML = "0%"
    }
    if (index <= completion) clearInterval(interval)
}

// Delaying the transition on progress bar
setTimeout(function() {
    progressBar.classList.add("progress-transition")
}, 300)

// Name polje
inputName.addEventListener("click", function () {
    steps1.innerHTML = ""
    loader1.style = "display: block"
})
inputName.addEventListener("focusout", function () {
    loader1.style = "display: none"
    if (inputName.value.length > 2) {
        steps1.innerHTML = "&#10004;"
        if (!first) {
            first = true
            incComplete()
        }
    } else if (inputName.value.length > 0) {
        s("lbl-name").classList.add("ph-label-invalid")
        steps1.innerHTML = "1"
        if (first) {
            first = false
            decComplete()
        }
    } else {
        steps1.innerHTML = "1"
        s("lbl-name").classList.remove("ph-label-invalid")
        if (first) {
            first = false
            decComplete()
        }
    }
})

// Surname polje
inputSurname.addEventListener("click", function () {
    steps2.innerHTML = ""
    loader2.style = "display: block"
})
inputSurname.addEventListener("focusout", function () {
    loader2.style = "display: none"
    if (inputSurname.value.length > 2) {
        steps2.innerHTML = "&#10004;"
        if (!second) {
            second = true
            incComplete()
        }
    } else if (inputSurname.value.length > 0) {
        s("lbl-surname").classList.add("ph-label-invalid")
        steps2.innerHTML = "2"
        if (second) {
            second = false
            decComplete()
        }
    } else {
        steps2.innerHTML = "2"
        s("lbl-surname").classList.remove("ph-label-invalid")
        if (second) {
            second = false
            decComplete()
        }
    }
})

// Email polje
inputEmail.addEventListener("click", function () {
    steps3.innerHTML = ""
    loader3.style = "display: block"
})
inputEmail.addEventListener("focusout", function () {
    loader3.style = "display: none"
    if (emailPattern.test(inputEmail.value)) {
        steps3.innerHTML = "&#10004;"
        if (!third) {
            third = true
            incComplete()
        }
    } else if (inputEmail.value.length > 0) {
        s("lbl-email").classList.add("ph-label-invalid")
        steps3.innerHTML = "3"
        if (third) {
            third = false
            decComplete()
        }
    } else {
        steps3.innerHTML = "3"
        s("lbl-email").classList.remove("ph-label-invalid")
        if (third) {
            third = false
            decComplete()
        }
    }
})

// Radio dugmad
radio1.addEventListener("change", function () {
    if (radioIncomplete) {
        radioIncomplete = false;
        radioCheck()
        if (!fourth) {
            fourth = true
            incComplete()
        }
    }
})
radio2.addEventListener("change", function () {
    if (radioIncomplete) {
        radioIncomplete = false;
        radioCheck()
        if (!fourth) {
            fourth = true
            incComplete()
        }
    }
})

s("contact-form").addEventListener("submit", function (e) {
    e.preventDefault()
    alert("Form submitted succesfully!")
})

// CODE FOR USING CHECKBOXES INSTEAD OF RADIO BUTTONS
// MAKING ONLY ONE CHECKBOX REQUIRED, NOT ALL OF THEM
// $(function(){

//     var requiredCheckboxes = $(':checkbox[required]');

//     requiredCheckboxes.change(function(){

//         if(requiredCheckboxes.is(':checked')) {
//             requiredCheckboxes.removeAttr('required');
//         }

//         else {
//             requiredCheckboxes.attr('required', 'required');
//         }
//     });

// });