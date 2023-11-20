const BasePage = require("./base-page");
const {expect} = require("@playwright/test");

class LinksPage extends BasePage {

    constructor(page) {
        super(page);
        this._titleText = page.locator('xpath=//*[@id="post-11"]/header/h1');
        this._firstLink = page.locator('xpath=//*[@id="post-11"]/div/p/a').first();
    }

    async open() {
        await this.page.goto('/contacts/')
    }

    async titleTextIs(text) {
        await expect(this._titleText).toHaveText(text);
    }

    async firstLinkNameIs(text) {
        await expect(this._firstLink).toContainText(text);
    }
}

module.exports = LinksPage;
