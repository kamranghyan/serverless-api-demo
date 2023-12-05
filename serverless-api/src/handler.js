'use strict';
const AWS = require('aws-sdk');

module.exports.sender = async (event) => {
  try {


    const message = { message: 'Hello from serverless! Message sending to SQS' };
    const SQS = new AWS.SQS({ endpoint:'http://localhost:4568'});
    
    await SQS.sendMessage({ QueueUrl: 'http://localhost:4568/queue/my-queue', MessageBody: JSON.stringify(message) }).promise();

    const response = {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello from serverless! Message sent to SQS.' }),
    };
    return response;
  } catch (error) {
    console.error('Error sending message to SQS:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error.' }),
    };
  }
};