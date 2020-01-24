'use strict';

const URL = require('./URL');

class Navigate {
    static async goToDummy() {
        console.log(`Navigate to "${URL.DUMMY}"`);
        try {
            await global.page.goto(URL.DUMMY);
        } catch (e) {
            throw new Error(`Error while navigated to dummy page: ${e.message}`);
        }
    }
}

module.exports = Navigate;