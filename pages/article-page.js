exports.ArticlePage = class ArticlePage {


    constructor(page) {
        this.page = page;
        this.articleText = page.locator('[class*=article-formatted-body]')

    }

    async seeArticleText() {
        await this.articleText.waitFor({state: "visible"})
    }


};
