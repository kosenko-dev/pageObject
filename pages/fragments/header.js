class Header {
    constructor(page) {
        this.page = page;
        this.root = page.locator("#logo-container");
        this._contactHLink = page.getByRole('link', { name: 'Contact' });
        this._donateHLink = page.getByRole('link', { name: 'Donate' });
        this._downloadHLink = page.getByRole('link', { name: 'Download' });
        this._guideHLink = page.getByRole('link', { name: 'Guide' });
        this._linksHLink = page.getByRole('link', { name: 'Links' });
    }

    async clickRoot() {
        await this.root.click();
        return this.page;
    }

    async clickContactHLink() {
        await this._contactHLink.click();
        return this.page;
    };

    async clickDonateHLink() {
        await this._donateHLink.click();
        return this.page;
    };

    async clickDownloadHLink() {
        await this._downloadHLink.click();
        return this.page;
    };

    async clickGuideHLink() {
        await this._guideHLink.click();
        return this.page;
    };

    async clickLinksHLink() {
        await this._linksHLink.click();
        return this.page;
    };
}

module.exports = Header;
