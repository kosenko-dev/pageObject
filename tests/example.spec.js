const {test, expect} = require('@playwright/test');
const {MainPage} = require('../pages/main-page');
const {ArticlePage} = require('../pages/article-page');

test('Guest click on first article and see it', async ({page}) => {
    await page.goto('/');
    await page.locator('[class=tm-articles-list__item] [class*=tm-title_h2]').first().click()
    await page.locator('[class*=article-formatted-body]').waitFor({state: "visible"})
})

test('Guest are searching topic ', async ({page}) => {
    await page.goto('/');
    await page.locator('[class*=tm-header-user-menu__search]').click();
    await page.locator('input[name=q]').fill('QA');
    await page.locator('[class*=tm-search__icon]').click();

    await page.locator('[class=tm-articles-list]').waitFor({state: "visible"});

    await expect(page).toHaveURL(/q=QA/)

})

test('the same search', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    const searchPage = await mainPage.header.clickSearchBtn();
    const searchResultPage = await searchPage.searchArticle('QA')

    await searchResultPage.seeResultArticles();

    await expect(page).toHaveURL(/q=QA/)
})

test('the same click article', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.clickOnFirstArticle()

    const articlePage = new ArticlePage(page)
    await articlePage.seeArticleText();
})
