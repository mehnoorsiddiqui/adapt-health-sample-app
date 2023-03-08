const {
  ApiError,
//   Client,
  PatientsController,
} = require("adapthealth-partner-apilib");

// const client = new Client({
//   timeout: 0,
//   oAuthClientId: "5b2f389a0f1748ce8738bdee029404ef",
//   oAuthClientSecret: "e414A8Eda3F34d60AEa4D8E93F5231Eb",
//   oAuthToken: null,
// });

const createPatient = async (newClient) => {
  try {
    // const token = await client.clientCredentialsAuthManager.fetchToken();
    // const newClient = client.withConfiguration({ oAuthToken: token });
    const patientsController = new PatientsController(newClient);

    const bodyIdentifier = [];

    const bodyName = {
      family: "Doe",
      given: "John",
      prefix: "Mr",
      suffix: "",
    };

    const bodyTelecom = [];

    const bodytelecom0 = {
      system: "phone",
      value: "6108251191",
      use: "billing",
    };

    bodyTelecom[0] = bodytelecom0;

    const bodyAddress = [];

    const bodyContact = [];

    const bodyCoverage = [];

    const body = {
      identifier: bodyIdentifier,
      name: bodyName,
      telecom: bodyTelecom,
      gender: "male",
      birthDate: "1957-09-01",
      address: bodyAddress,
      contact: bodyContact,
      coverage: bodyCoverage,
    };

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

// createPatient();
module.exports= createPatient;