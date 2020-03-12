export default class BasePage {
    open(url){
        browser.url(url)
        browser.maximizeWindow()
    }

    wait(time){
        browser.pause(time)
    }
}