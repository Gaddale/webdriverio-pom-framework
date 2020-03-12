import BasePage from './BasePage'
import elementUtil from '../util/elementUtil'
const constants = require('../constants')

class LoginPage extends BasePage{

    get username() { return $('#user_login')}
    get password() { return $('#user_password')}
    get loginBtn() { return $('.btn-primary')} 
    get errorMessage(){ return $('.alert-error')}
    get forgottenPassword() { return $('*=Forgot your password ?')} 
    get signInBtn() {return $('#signin_button')}

    open(){
        super.open('')
    }

    doLogin(email, password){
        elementUtil.doSetValue(this.username, email)
        elementUtil.doSetValue(this.password, password)
        elementUtil.doClick(this.loginBtn)
    }

    clickForgottenPasswordLink(){
        // this.forgottenPassword.waitForExist(2000)
        this.forgottenPassword.click()
    }

}

export default new LoginPage();