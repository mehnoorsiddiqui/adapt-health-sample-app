// import the SDK  (autogen code)
import { ApiError, PatientsController } from "adapthealth-partner-apilib";

// Define an asynchronous function to create a patient
const createPatient = async (newClient) => {
  // create an instance of the PatientsController class (autogen code)
  const patientsController = new PatientsController(newClient);

  // Define the body of the request with the necessary fields for a new patient
  const bodyName = {
    family: "Doe",
    given: "John",
    prefix: "Mr",
    suffix: "",
  };
  const bodyTelecom = [
    {
      system: "phone",
      value: "6108251191",
      use: "billing",
    },
  ];

  const body = {
    identifier: [],
    name: bodyName,
    telecom: bodyTelecom,
    gender: "male",
    birthDate: "1957-09-01",
    address: [],
    contact: [],
    coverage: [],
  };
  //call the createAPatient method (autogen code)
  try {
    const { result, ...httpResponse } = await patientsController.createAPatient(
      body
    );
    return result.correlationId;
  } catch (error) {
    console.log(error);
    if (error instanceof ApiError) {
      const errors = error.result;
      // const { statusCode, headers } = error;
    }
  }
};

// Export the createPatient function
export default createPatient;
