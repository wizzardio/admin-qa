'use strict';

const logger = require('../utils/logger');
const URL = require('./URL');

class Navigate {
    static async goToDummy() {
        try {
            logger.info(`Navigate to dummy page via URL ${URL.DUMMY}`);
            await global.page.goto(URL.DUMMY);
        } catch (e) {
            const msg = `Error while navigated to dummy page: ${e.message}`;
            logger.error(msg);
            throw new Error(msg);
        }
    }
}

module.exports = Navigate;