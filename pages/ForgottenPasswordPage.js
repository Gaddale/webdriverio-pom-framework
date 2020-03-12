import BasePage from '../pages/BasePage'

class ForgottenPasswordPage{

    get emailInput(){ $('#user_email')}
    get submitButton(){ $('.btn-primary')}

    submitEmail(email){
        this.emailInput.waitForExist()
        this.emailInput.setValue(email)
        this.submitButton.click()
    }
}
export default new ForgottenPasswordPage()