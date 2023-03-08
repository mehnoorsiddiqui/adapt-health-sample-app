const {
    ApiError,
    // Client,
    PatientsController,
  } = require( 'adapthealth-partner-apilib');
  
//   const client = new Client({
//     timeout: 0,
//     oAuthClientId: '5b2f389a0f1748ce8738bdee029404ef',
//     oAuthClientSecret: 'e414A8Eda3F34d60AEa4D8E93F5231Eb',
//     oAuthToken: null,
//   });


const retrieveOrder = async(id, newClient)=>{
    // const token = await client.clientCredentialsAuthManager.fetchToken();
    // console.log(token);
    // const newClient = client.withConfiguration({ oAuthToken: token });
    const patientsController = new PatientsController(newClient);
    const pageNumber = 1;
    const pageSize = 10;
    try {
      const { result, ...httpResponse } = await patientsController.getPatientOrders(id, pageNumber, pageSize);
      // Get more response info...
      // const { statusCode, headers } = httpResponse;
    //   console.log(result)
      return result
    } catch(error) {
      if (error instanceof ApiError) {
        const errors = error.result;
        // const { statusCode, headers } = error;
      }
    }
}
// retrieveOrder('13f01411-f85d-44b5-8bed-f45aef99a340')
module.exports = retrieveOrder;