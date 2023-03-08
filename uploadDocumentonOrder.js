const {
  ApiError,
  FileWrapper,
  OrdersController,
} = require("adapthealth-partner-apilib");
const fs = require("fs");

const uploadDocumentonOrder = async (id, newClient) => {
  const ordersController = new OrdersController(newClient);
  const file = new FileWrapper(fs.createReadStream("./Test file.pdf"));
  try {
    const { result, ...httpResponse } = await ordersController.uploadADocument(
      id,
      file
    );
    return result.correlationId;
  } catch (error) {
    if (error instanceof ApiError) {
      const errors = error.result;
      // const { statusCode, headers } = error;
    }
  }
};

module.exports = uploadDocumentonOrder;
