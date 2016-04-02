'use strict';

module.exports.handler = function(event, context) {
  return context.succeed({
    event: event,
    message: 'Go Serverless! Your Lambda function executed successfully!'
  });
};
