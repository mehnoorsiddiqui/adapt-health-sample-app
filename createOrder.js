// import the SDK (autogen code)
import { ApiError, OrdersController } from "adapthealth-partner-apilib";

// Define an asynchronous function to create an order
const createOrder = async (newClient) => {

  // create an instance of the OrdersController class (autogen code)
  const ordersController = new OrdersController(newClient);

  // Define the body of the request with the necessary fields for a new order
  const bodyAddress = {
    type: "delivery",
    line1: "House no, Abc",
    line2: "area xyz",
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
        value: "56945",
      },
    ],
  };

  const bodyRequester = {
    identifier: [
      {
        use: "internal",
        type: "patient",
        value: "123456",
      },
    ],
    name: {
      family: "Doe",
      given: "Henry",
      prefix: "Dr.",
      suffix: "",
    },
    telecom: {
      system: "phone",
      value: "(123) 456-7890",
      use: "mobile",
    },
    address: {
      type: "physical",
      line1: "House no, xyz",
      line2: "area abc",
      city: "New York",
      state: "New York",
      postalCode: "10001",
      country: "USA",
    },
    qualification: [
      {
        identifier: [
          {
            use: "source",
            type: "NPI",
            value: "1234567890",
          },
        ],
      },
    ],
  };

  const body = {
    identifier: [],
    status: "active",
    neededTime: "2016-03-13T12:52:32.123Z",
    telecom: [],
    address: bodyAddress,
    subject: bodySubject,
    services: [],
    requester: bodyRequester,
    diagnoses: ["A00", "D50"],
    note: "no note",
  };

  // call the createAnOrder method (autogen code)
  try {
    const { result, ...httpResponse } = await ordersController.createAnOrder(
      body
    );
    //fetch correlationId
    return result.correlationId;
  } catch (error) {
    console.log(error);
    if (error instanceof ApiError) {
      const errors = error.result;
      // const { statusCode, headers } = error;
    }
  }
};

// Export the createOrder function
export default createOrder;
