var checkFullName = document.getElementById('Check-fullname');
var checkEmail = document.getElementById('Check-email');
var checkPhoneNumber = document.getElementById('Check-phonenumber');
var checkSubmit = document.getElementById('Check-submit');

function FullNameValidation() {
    var fullname = document.getElementById('user-info').value;
    var fullnamelen = fullname.length;
    if (fullnamelen < 1) {
        checkFullName.innerHTML = "FullName is required";
        return false;
    }
    if (fullname != fullname.match(/^[A-ZA-z]+\s{1}[A-Za-z]+$/)) {
        checkFullName.innerHTML = "Please write the Name and LastName";
        return false;
    }
    checkFullName.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function EmailValidation() {
    var emailAddress = document.getElementById('user-email').value;
    var emaillAddresslen = emailAddress.length;
    if (emaillAddresslen < 1) {
        checkEmail.innerHTML = " Email is required";
        return false;
    }
    if (emailAddress != emailAddress.match(/^[A-Za-z\._\-0-9]+[@][A-Za-z]+[\.][a-z]{2,4}$/)) {
        checkEmail.innerHTML = "Please enter the valid EmailAddress";
        return false;
    }
    checkEmail.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function PhoneValidation() {
    var phoneNumber = document.getElementById('user-phone').value;
    var phoneNumberlen = phoneNumber.length;
    if (phoneNumberlen < 1) {
        checkPhoneNumber.innerHTML = "PhoneNumber is required";
        return false;
    }
    if (phoneNumberlen !== 10) {
        checkPhoneNumber.innerHTML = "PhoneNumber should not be less than 10 digits";
        return false;
    }
    if (phoneNumber != phoneNumber.match(/^[0-9]{10}$/)) {
        checkPhoneNumber.innerHTML = "Please enter the valid PhoneNumber";
        return false;
    }
    checkPhoneNumber.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if ((FullNameValidation() == false) || (EmailValidation() == false) || (PhoneValidation() == false)){
 
        checkSubmit.style.visibility="visible";
        checkSubmit.style.marginLeft="13px";
        checkSubmit.innerHTML = "Please check the form and correct the errors";
        setTimeout(function(){
            checkSubmit.style.visibility="hidden";
        },2500);
        return false;
    }
    else if (FullNameValidation() && EmailValidation && PhoneValidation){
        checkSubmit.style.visibility="visible";
        checkSubmit.style.marginLeft="13px";
        checkSubmit.innerHTML = "You have entered all the information correctly";
        setTimeout(function(){
            checkSubmit.style.visibility="hidden";
            document.getElementById('user-info').value = " ";
            document.getElementById('user-email').value = " ";
            document.getElementById('user-phone').value = " ";
            checkFullName.innerHTML = " ";
            checkEmail.innerHTML = " ";
            checkPhoneNumber.innerHTML = " ";
         
        },1500);
    }
}