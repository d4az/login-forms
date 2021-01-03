const email = document.getElementById('email');
const phonenumber = document.getElementById('number');
const degree = document.getElementById('degreesel');
const agree = document.getElementById('agree');


//error paragraph
let name_error = document.getElementById("nameerror");
let email_error = document.getElementById('emailerr');
let phoneNum_error = document.getElementById("numerror");
let degree_error = document.getElementById("drgreeerr");
let terms_error = document.getElementById("checkboxerr");

const submit = document.getElementById("submit");

//name validation

document.getElementById('name').addEventListener("mouseenter", function() {
    const name = document.getElementById('name').value;

    if (name == '') {
        name_error.innerHTML = "please Enter your name.";
    } else {
        name_error.innerHTML = '';
    }


})

document.getElementById('name').addEventListener("keypress", function() {

    const name = document.getElementById('name').value;
    if (name == '') {
        name_error.innerHTML = "please Enter your name.";
    } else if (!isNaN(name)) {
        name_error.innerHTML = "Name Shouldnot Contain Numbers";
    } else {
        name_error.innerHTML = '';
    }


})

//email validation 

email.addEventListener("mouseenter", function() {

    if (email.value == '') {
        email_error.innerHTML = "please Enter Your email"
    } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        email_error.innerHTML = '';
    } else {
        email_error.innerHTML = "The Email Adress you enterd is wrong"
    }

})


//phone number validation 

phonenumber.addEventListener("mouseenter", function() {
    if (phonenumber.value == '') {
        phoneNum_error.innerHTML = "Please Enter Your Phone Number"
    } else if (!isNaN(phonenumber)) {
        phoneNum_error.innerHTML = "invalid Phone Number"
    } else {
        phoneNum_error.innerHTML = "";
    }
})

phonenumber.addEventListener("keypress", function() {
    if (phonenumber.value == '') {
        phoneNum_error.innerHTML = "Please Enter Your Phone Number";
    } else if (!isNaN(phonenumber)) {
        phoneNum_error.innerHTML = "invalid Phone Number"
    } else {
        phoneNum_error.innerHTML = "";
    }
})


degree.addEventListener("mouseenter", function() {
    if (degree.value == 0) {
        degree_error.innerHTML = "Please Select Job Titile"
    } else {
        degree_error.innerHTML = "";
    }

})

degree.addEventListener("mouseleave", function() {
    if (degree.value == 0) {
        degree_error.innerHTML = "Please Select your Job Title"
    } else {
        degree_error.innerHTML = "";
    }

})




//validation to the submit button at the end

submit.addEventListener("mouseenter", function() {
    //name
    const name = document.getElementById('name').value;
    if (name == '') {
        name_error.innerHTML = "please Enter your name.";
    } else if (!isNaN(name)) {
        name_error.innerHTML = "Name Shouldnot Contain Numbers";
    } else {
        name_error.innerHTML = '';
    }

    //email
    if (email.value == '') {
        email_error.innerHTML = "please Enter Your email"
    } else {
        email_error.innerHTML = '';
    }


    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        email_error.innerHTML = '';
    } else {
        email_error.innerHTML = "The Email Adress you enterd is wrong"
    }

    //phone number
    if (phonenumber.value == '') {
        phoneNum_error.innerHTML = "Please Enter Your Phone Number";
    } else if (!isNaN(phonenumber)) {
        phoneNum_error.innerHTML = "invalid Phone Number"
    } else {
        phoneNum_error.innerHTML = "";
    }


    //degree

    if (degree.value == 0) {
        degree_error.innerHTML = "Please Select your Job Title "
    }


    //terms and conditions

    if (agree.checked == false) {
        terms_error.innerHTML = "Please Agree to our terms and conditions ";
    } else {
        terms_error.innerHTML = "";
    }

})