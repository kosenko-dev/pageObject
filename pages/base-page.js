const {Header} = require("./fragments/header");

exports.BasePage = class BasePage {


    constructor(page) {
        this.page = page;
        this.header = new Header(page);
        this.firstArticle = page.locator('[class=tm-articles-list__item] [class*=tm-title_h2]').first();
    }

    async changeLangCookie(lang) {
        return null

    }

};
