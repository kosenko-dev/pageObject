exports.SearchResultPage = class SearchResultPage {

    constructor(page) {
        this.page = page;
        this.articlesList = page.locator('[class=tm-articles-list]')

    }


    async seeResultArticles() {
        await this.articlesList.waitFor({state: "visible"})
    }

};
