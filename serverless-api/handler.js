'use strict';

module.exports.sender = async (event) => {
  try {
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