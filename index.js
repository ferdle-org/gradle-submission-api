const { Logger } = require('@micronaut/logging');
const axios = require('axios');
const lodash = require('lodash');
const moment = require('moment');
const uuid = require('uuid');

// Initialize logger
const logger = Logger.getLogger('MyApp');

// Example usage of libraries
logger.info('Application started');

const userId = uuid.v4();
logger.info(`Generated User ID: ${userId}`);

const currentDate = moment().format('YYYY-MM-DD');
logger.info(`Current Date: ${currentDate}`);

const data = { name: 'John Doe', age: 30 };
const clonedData = lodash.cloneDeep(data);
logger.info(`Cloned Data: ${JSON.stringify(clonedData)}`);

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    logger.info(`Fetched Data: ${JSON.stringify(response.data)}`);
  })
  .catch(error => {
    logger.error(`Error fetching data: ${error.message}`);
  });
