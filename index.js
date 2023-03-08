const { Client } = require("adapthealth-partner-apilib");
const createOrder = require("./createOrder");
const createPatient = require("./createPatient");
const retrieveOrder = require("./retrieveOrder");
const uploadDocumentonOrder = require("./uploadDocumentonOrder");

const client = new Client({
  timeout: 0,
  oAuthClientId: "5b2f389a0f1748ce8738bdee029404ef",
  oAuthClientSecret: "e414A8Eda3F34d60AEa4D8E93F5231Eb",
  oAuthToken: null,
});

const appFlow = async () => {
  const token = await client.clientCredentialsAuthManager.fetchToken();
  const newClient = client.withConfiguration({ oAuthToken: token });
  const PatientID = await createPatient(newClient);
  const OrderID = await createOrder(newClient);
  const DocumentID = await uploadDocumentonOrder(OrderID, newClient);
  const retrieveOrderResponse = await retrieveOrder(DocumentID,newClient);
//   console.log(OrderID)
//   console.log(PatientID)
  console.log(retrieveOrderResponse );
};

appFlow();
