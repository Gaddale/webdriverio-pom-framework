class NavBar{
    get home(){
        return $('#homeMenu')
    }

    get onlineBanking(){
        return $('#inlineBankingMenu')
    }

    get feedback(){
        return $('#feedback')
    }

    get searchBox(){
        return $('#searchTerm')
    }

    get signInButton(){
        return $('#signin_button')
    }

    search(text){
        this.searchBox.waitForExist()
        this.searchBox.setValue(text)
        browser.keys('Enter')
    }
}

export default new NavBar()