const BasePage = require("./base-page");
const {expect} = require("@playwright/test");

class ContactPage extends BasePage {

    constructor(page) {
        super(page);
        this._contactsAuthorTelegramText = page.locator('xpath=//*[@id="post-2"]/div/p[4]');
        this._contactsAuthorTwitterText = page.locator('xpath=//*[@id="post-2"]/div/p[5]');
    }

    async open() {
        await this.page.goto('/contacts/')
    }

    async authorTelegramTextIs(text) {
        await expect(this._contactsAuthorTelegramText).toHaveText(text);
    }

    async authorTwitterTextIs(text) {
        await expect(this._contactsAuthorTwitterText).toContainText(text);
    }
}

module.exports = ContactPage;
