const {SearchResultPage} = require("./search-result-page");

exports.SearchPage = class SearchPage {


    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('input[name=q]');
        this.startSearchBtn = page.locator('[class*=tm-search__icon]');

    }

    async open() {
        await this.page.goto('/search')
    }

    async searchArticle(query) {
        await this.searchInput.fill(query);
        await this.startSearchBtn.click();
        return new SearchResultPage(this.page);
    }

};
