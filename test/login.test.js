const loginPage = require('../pages/login.page')
const configData = require('../config')
const constants = require('../constants')

describe('Login page feature test', function(){

    it('Verify login page title', function(){
        browser.url('/');
        browser.maximizeWindow();
        const title = loginPage.getPageTitle();
        assert.equal(title,constants.LOGIN_PAGE_TITLE, 'Title not found')
    })

    it('Verify Sign up link',function(){
        assert.equal(true, loginPage.isSignUpLinkExist());
    })

    it('Verify Login',function(){
        loginPage.doLogin(configData.username, configData.password);
    })
})