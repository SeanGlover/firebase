import { AuthErrorCodes } from "firebase/auth";
export const txtNameFirst = document.querySelector('#txtFirstName')
export const txtEmail = document.querySelector('#txtEmail')
export const txtPassword = document.querySelector('#txtPassword')
export const btnSignin = document.querySelector('#btnSignin')
export const lblSigninErrorMsg = document.querySelector('#lblSigninErrorMsg')
export const btnSignup = document.querySelector('#btnSignup')
export const lnkForgotPwd = document.querySelector('#forgotPassword')

export const btnSignout = document.querySelector('#btnSignout')

export const sectionSignin = document.querySelector('#sectionSignin')
export const sectionForm = document.querySelector('#sectionForm')

export const showFormSection = (userCreds) => {
    sectionSignin.style.display = 'none'
    sectionForm.style.display = 'block'
    autoSizeTexts();
}
export const showSigninSection = () => {
    sectionSignin.style.display = 'block'
    sectionForm.style.display = 'none'
}
export function showSigninError(error) {
    lblSigninErrorMsg.style.display = 'block';
    if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
        lblSigninErrorMsg.innerHTML = 'Wrong userid or password. Try again.';
    }
    else if(error.code == AuthErrorCodes.INVALID_EMAIL){
        lblSigninErrorMsg.innerHTML = 'Email format is not correct. Try again.';
    }
    else if(error.code == AuthErrorCodes.USER_DELETED){
        lblSigninErrorMsg.innerHTML = 'User id not found - create one?';
        btnSignup.className = 'btn btn-outline-danger';
    }
    else {
        alert(`error: ${error}`);
    }
}
export const hideSigninError = () => {
    divSigninError.style.display = 'none'
}
export function autoSizeTexts() {
    var txts = document.querySelectorAll("textarea");
    txts.forEach(element => {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight)+"px";
    });
}