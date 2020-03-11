const elementUtil = require('../util/elementUtil')
const constants = require('../constants')

class LoginPage{

    get username() { return $('#username')}
    get password() { return $('#password')}
    get loginBtn() { return $('#loginBtn')} 
    get signUpLink(){ return $('=Sign up')}

    getPageTitle(pageTitle){
      return elementUtil.doGetPageTitle(constants.LOGIN_PAGE_TITLE);
    }

    isSignUpLinkExist(){
        return elementUtil.doIsDiaplayed(this.signUpLink);
    }

    doLogin(email, password){
        elementUtil.doSetValue(this.username, email)
        elementUtil.doSetValue(this.password, password)
        elementUtil.doClick(this.loginBtn);
    }
}

module.exports = new LoginPage();