const { ApiError, PatientsController } = require("adapthealth-partner-apilib");

const retrieveOrder = async (id, newClient) => {
  const patientsController = new PatientsController(newClient);
  const pageNumber = 1;
  const pageSize = 10;
  try {
    const { result, ...httpResponse } =
      await patientsController.getPatientOrders(id, pageNumber, pageSize);
    return result;
  } catch (error) {
    if (error instanceof ApiError) {
      const errors = error.result;
      // const { statusCode, headers } = error;
    }
  }
};
module.exports = retrieveOrder;
