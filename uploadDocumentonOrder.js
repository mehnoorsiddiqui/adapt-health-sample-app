const {
  ApiError,
  Client,
  FileWrapper,
  OrdersController,
} = require("adapthealth-partner-apilib");
const fs = require("fs");

const client = new Client({
  timeout: 0,
  oAuthClientId: "5b2f389a0f1748ce8738bdee029404ef",
  oAuthClientSecret: "e414A8Eda3F34d60AEa4D8E93F5231Eb",
  oAuthToken: null,
});

const uploadDocumentonOrder = async (id,newClient) => {
//   const token = await client.clientCredentialsAuthManager.fetchToken();
//   console.log(token);
//   const newClient = client.withConfiguration({ oAuthToken: token });
  const ordersController = new OrdersController(newClient);
  const file = new FileWrapper(fs.createReadStream("./Test file.pdf"));
  try {
    const { result, ...httpResponse } = await ordersController.uploadADocument(
      id,
      file
    );
    // Get more response info...
    // const { statusCode, headers } = httpResponse;
    console.log(result);
    return result.correlationId;
  } catch (error) {
    if (error instanceof ApiError) {
      const errors = error.result;
      // const { statusCode, headers } = error;
    }
  }
};
// uploadDocumentonOrder("699f5980-55f6-11ed-a6cf-121c5bd7fdbd");
module.exports = uploadDocumentonOrder;
