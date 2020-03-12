import NavBar from '../components/NavBar'
import LoginPage from '../pages/LoginPage'
import ForgottenPassword from '../pages/ForgottenPasswordPage'

describe('forgotten password',() => {

    it('click forgotten password link and request for new password',()=>{
        browser.url('http://zero.webappsecurity.com/index.html')
        browser.maximizeWindow()
        NavBar.signInButton.waitForExist()
        NavBar.signInButton.click()
        LoginPage.clickForgottenPasswordLink();
        ForgottenPassword.submitEmail('example@email.com')

    })
})