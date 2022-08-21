/**
 * This code is deployed as the Lambda function in AWS.
 */

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(event),
  };
};
