const {test, expect} = require('@playwright/test');
const MainPage = require('../pages/main-page');
const ContactPage = require('../pages/contact-page');
const LinksPage = require('../pages/links-page');

test('Test last updated article click and part of its info on site', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.clickOnFirstArticle();
    await expect(page.locator('xpath=//*[starts-with(@id,"post-")]/header/div/time').first())
        .toHaveText('November 11, 2023');
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL('/2023/11/11/making-life-easier/');
})

test('Check author telegram contacts', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();

    const contactPage = new ContactPage(await mainPage.header.clickContactHLink());
    await page.waitForLoadState("networkidle");

    await contactPage.authorTelegramTextIs('@mrgreen_archbang');

    await expect(page).toHaveURL('/contacts/');
})

test('Check author twitter contacts', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();

    const contactPage = new ContactPage(await mainPage.header.clickContactHLink());
    await page.waitForLoadState("networkidle");

    await contactPage.authorTwitterTextIs('@ArchBang64');

    await expect(page).toHaveURL('/contacts/');
})

test('Check title text of Links site part', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();

    const linksPage = new LinksPage(await mainPage.header.clickLinksHLink());
    await page.waitForLoadState("networkidle");

    await linksPage.titleTextIs('Links');

    await expect(page).toHaveURL('/links/');
})

test('Check first link name attribute of Links site part', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.open();

    const linksPage = new LinksPage(await mainPage.header.clickLinksHLink());
    await page.waitForLoadState("networkidle");

        await linksPage.firstLinkNameIs('Twitter');

    await expect(page).toHaveURL('/links/');
})