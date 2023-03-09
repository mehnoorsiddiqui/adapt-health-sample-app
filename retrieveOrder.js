// import the SDK (autogen code)
import { ApiError, PatientsController } from "adapthealth-partner-apilib";

// Define an asynchronous function to retrieve an order
const retrieveOrder = async (id, newClient) => {
  //  call getPatientsOrders method (auto gen)
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

// Export the retrieveOrder function
export default retrieveOrder;
