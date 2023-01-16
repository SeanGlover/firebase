import { AuthErrorCodes } from "firebase/auth";
export const txtEmail = document.querySelector('#txtEmail')
export const txtPassword = document.querySelector('#txtPassword')
export const btnLogin = document.querySelector('#btnLogin')
export const divLoginError = document.querySelector('#divLoginError')
export const lblLoginErrorMsg = document.querySelector('#lblLoginErrorMsg')
export const btnSignup = document.querySelector('#btnSignup')

export const btnLogout = document.querySelector('#btnLogout')
export const divAuthState = document.querySelector('#divAuthState')
export const lblAuthState = document.querySelector('#lblAuthState')

export const showApp = () => {
    login.style.display = 'none'
    app.style.display = 'block'
}
export const showLoginForm = () => {
    login.style.display = 'block'
    app.style.display = 'none'
}
export function showLoginError(error) {
    divLoginError.style.display = 'block';
    if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
        lblLoginErrorMsg.innerHTML = 'Wrong userid or password. Try again.';
    }
    else if(error.code == AuthErrorCodes.INVALID_EMAIL){
        lblLoginErrorMsg.innerHTML = 'Email format is not correct. Try again.';
    }
    else if(error.code == AuthErrorCodes.USER_DELETED){
        lblLoginErrorMsg.innerHTML = 'User id not found - create one?';
        btnSignup.className = 'btn btn-outline-danger';
    }
    else if(error.code.toString() == 'auth/user-not-found') {

    }
}
export const hideLoginError = () => {
    divLoginError.style.display = 'none'
}