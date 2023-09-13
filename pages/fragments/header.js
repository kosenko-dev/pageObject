const SearchPage = require("../search-page");

class Header {
    constructor(page) {
        this.page = page;
        this.root = page.locator('[class*=tm-base-layout__header_is-sticky]')
        this._searchBtn = page.locator('[class*=tm-header-user-menu__search]');
    }

    async clickSearchBtn() {
        await this._searchBtn.click();
        return new SearchPage(this.page);
    }
}

module.exports = Header;
