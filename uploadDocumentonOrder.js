// import the SDK and necessary modules (autogen code)
import {
  ApiError,
  FileWrapper,
  OrdersController,
} from "adapthealth-partner-apilib";

import fs from "fs";

// Define an asynchronous function to upload document on order
const uploadDocumentonOrder = async (id, newClient) => {
  //call the uploadADocument method (autogen code)
  const ordersController = new OrdersController(newClient);
  const file = new FileWrapper(fs.createReadStream("./Test file.pdf"));
  try {
    const { result, ...httpResponse } = await ordersController.uploadADocument(
      id,
      file
    );
    // fetch document correlationId
    return result.correlationId;
  } catch (error) {
    if (error instanceof ApiError) {
      const errors = error.result;
      // const { statusCode, headers } = error;
    }
  }
};

// Export the uploadDocumentonOrder function
export default uploadDocumentonOrder;
