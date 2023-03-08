const { ApiError, PatientsController } = require("adapthealth-partner-apilib");

const createPatient = async (newClient) => {
  try {
    const patientsController = new PatientsController(newClient);

    const bodyIdentifier = [];

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

module.exports = createPatient;
