const BasePage = require("./base-page");

class MainPage extends BasePage {

    constructor(page) {
        super(page);
        this._firstArticle = page.locator('xpath=//*[starts-with(@id,"post-")]/header/h2/a').first();
    }

    async open() {
        await this.page.goto('/');
    }

    async clickOnFirstArticle() {
        await this._firstArticle.click();
    }
}

module.exports = MainPage;
