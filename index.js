// import the SDK  (autogen code)
import { Client } from "adapthealth-partner-apilib";

// Import necessary modules and functions
import createOrder  from "./createOrder.js";
import createPatient from "./createPatient.js";
import retrieveOrder from "./retrieveOrder.js";
import uploadDocumentonOrder from "./uploadDocumentonOrder.js";

import dotenv from 'dotenv';
dotenv.config();

// Create a new instance of the Client class (Autogen code)
const client = new Client({
  timeout: 0,
  oAuthClientId: process.env.CLIENT_ID,
  oAuthClientSecret: process.env.CLIENT_SECRET,
  oAuthToken: null,
});

// Define the application flow as an asynchronous function
const appFlow = async () => {
  // create tokenized client (autogen code from the step by step TS SDK tutorial)
  const token = await client.clientCredentialsAuthManager.fetchToken();
  const newClient = client.withConfiguration({ oAuthToken: token });

  //call the defined functions in order
  await createPatient(newClient);
  const OrderID = await createOrder(newClient);
  const DocumentID = await uploadDocumentonOrder(OrderID, newClient);
  const retrieveOrderResponse = await retrieveOrder(DocumentID, newClient);
  console.log(retrieveOrderResponse);
};

appFlow();
