import loginPage from '../pages/LoginPage'
import { expect } from 'chai'
const configData = require('../config')
const constants = require('../constants')

describe('Login page feature test', ()=>{

    it('Verify Login',()=>{
        loginPage.open('/');
        loginPage.doLogin(configData.username,configData.password)
        expect(loginPage.errorMessage.getText()).to.contains(constants.ERROR_MESSAGE)
    })
})