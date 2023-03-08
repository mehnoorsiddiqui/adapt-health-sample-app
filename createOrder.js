const { ApiError, OrdersController } = require("adapthealth-partner-apilib");

const createOrder = async (newClient) => {
  const ordersController = new OrdersController(newClient);

  const bodyIdentifier = [];

  const bodyTelecom = [];

  const bodyAddress = {
    type: "physical",
    line1: "House no, Abc, area xyz",
    line2: "country unknown",
    city: "New York",
    state: "New York",
    postalCode: "10001",
    country: "USA",
  };

  const bodySubject = {
    type: "order",
    identifier: [
      {
        use: "external",
        type: "payor",
        value: "value3",
      },
      {
        use: "source",
        type: "NPI",
        value: "value4",
      },
    ],
  };

  const bodyServices = [];

  const bodyRequesterName = {
    family: "Doe",
    given: "John",
    prefix: "Mr",
    suffix: "",
  };

  const bodyRequesterTelecom = {
    system: "fax",
    value: "555-123-4567",
    use: "delivery",
  };

  const bodyRequesterAddress = {
    type: "delivery",
    line1: "line14",
    line2: "line26",
    city: "city2",
    state: "state8",
    postalCode: "postalCode4",
    country: "country6",
  };
  const bodyRequesterIdentifier = [
    {
      use: "internal",
      type: "patient",
      value: "value7",
    },
  ];
  const bodyRequesterQualification = [
    {
      identifier: [
        {
          use: "external",
          type: "payor",
          value: "456",
        },
      ],
    },
  ];
  const bodyRequester = {
    identifier: bodyRequesterIdentifier,
    name: bodyRequesterName,
    telecom: bodyRequesterTelecom,
    address: bodyRequesterAddress,
    qualification: bodyRequesterQualification,
  };

  const bodyDiagnoses = ["diagnoses8", "diagnoses9"];
  const body = {
    identifier: bodyIdentifier,
    status: "active",
    neededTime: "2016-03-13T12:52:32.123Z",
    telecom: bodyTelecom,
    address: bodyAddress,
    subject: bodySubject,
    services: bodyServices,
    requester: bodyRequester,
    diagnoses: bodyDiagnoses,
    note: "note8",
  };

  try {
    const { result, ...httpResponse } = await ordersController.createAnOrder(
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

module.exports = createOrder;
