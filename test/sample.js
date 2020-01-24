const { expect } = require('chai');

const setupDriver = require('../source/driver/driver');
const Navigate = require('../source/url/Navigate');

describe('simple test', async () => {
    before(async () => {
        await setupDriver();
        await Navigate.goToDummy();
    });

    after(async () => {
        await global.page.close();
    });

    it('What is it', async () => {
        console.log('Hello, this is Sparta!!!');
    });
});