const {SearchPage} = require("../search-page");

exports.Header = class Header {
    constructor(page) {
        this.page = page;
        this.root = page.locator('[class*=tm-base-layout__header_is-sticky]')
        this.searchBtn = page.locator('[class*=tm-header-user-menu__search]');
    }

    async clickSearchBtn() {
        await this.searchBtn.click();
        return new SearchPage(this.page);
    }
};
