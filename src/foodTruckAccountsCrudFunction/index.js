exports.handler =  (event, context,callback) => {
  // Log the event argument for debugging and for use in local development.
  console.log(JSON.stringify(event, undefined, 2));

  return {
    statusCode: 200,
    body: " This is through Stackery."
  };
};
