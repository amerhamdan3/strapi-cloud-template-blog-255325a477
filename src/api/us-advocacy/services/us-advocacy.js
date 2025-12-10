'use strict';

/**
 * us-advocacy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::us-advocacy.us-advocacy');
