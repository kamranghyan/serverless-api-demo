exports.handler = async (event) => {
    try {

      const message = JSON.parse(event.Records[0].body);
      console.log('Received message:', message);

    } catch (error) {

      console.error('Error processing SQS message:', error);
      
    }
  };
  