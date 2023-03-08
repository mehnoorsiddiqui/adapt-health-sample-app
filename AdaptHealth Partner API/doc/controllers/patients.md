# Patients

```ts
const patientsController = new PatientsController(client);
```

## Class Name

`PatientsController`

## Methods

* [Get Patients](../../doc/controllers/patients.md#get-patients)
* [Create a Patient](../../doc/controllers/patients.md#create-a-patient)
* [Get Patient by ID](../../doc/controllers/patients.md#get-patient-by-id)
* [Get Patient Orders](../../doc/controllers/patients.md#get-patient-orders)


# Get Patients

Search for vendor-posted patients

```ts
async getPatients(
  pageNumber: number,
  pageSize: number,
  firstName?: string,
  lastName?: string,
  birthDate?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pageNumber` | `number` | Query, Required | Current page number (used for paging results) |
| `pageSize` | `number` | Query, Required | Page size (used for paging results) |
| `firstName` | `string \| undefined` | Query, Optional | Patient's First Name |
| `lastName` | `string \| undefined` | Query, Optional | Patient's Last Name |
| `birthDate` | `string \| undefined` | Query, Optional | Patient's Birthdate |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiSearchResponse`](../../doc/models/api-search-response.md)

## Example Usage

```ts
const pageNumber = 1;
const pageSize = 10;
try {
  const { result, ...httpResponse } = await patientsController.getPatients(pageNumber, pageSize);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "success": true,
  "apiName": "partner-api-raml",
  "version": "v1",
  "timeStamp": "2022-10-27T12:53:54.417Z",
  "correlationId": "699f5980-55f6-11ed-a6cf-121c5bd7fdbd",
  "response": {
    "currentPage": 1,
    "pageSize": 10,
    "totalRecordCount": 3,
    "data": [
      {
        "identifier": [
          {
            "use": "source",
            "type": "patient",
            "value": "13f01411-f85d-44b5-8bed-f45aef99a340"
          },
          {
            "use": "destination",
            "type": "patient",
            "value": "76315278-d158-4868-9ebf-57a1b60f4e65"
          },
          {
            "use": "internal",
            "type": "patient",
            "value": "498875c7-88b0-4f4a-8883-890621cfdea2"
          }
        ],
        "name": {
          "family": "Doe",
          "given": "John",
          "prefix": "Mr",
          "suffix": ""
        },
        "birthDate": "1957-09-01"
      },
      {
        "identifier": [
          {
            "use": "source",
            "type": "patient",
            "value": "172de01a-1682-4c58-a558-9d24a38fe5ac"
          },
          {
            "use": "destination",
            "type": "patient",
            "value": "a4b7acb2-2dd1-49f9-836d-6258fb7c9095"
          },
          {
            "use": "internal",
            "type": "patient",
            "value": "be5e6e5c-c7df-4c96-b26f-bf2b34b8a12e"
          }
        ],
        "name": {
          "family": "Garden",
          "given": "Helen",
          "prefix": "",
          "suffix": ""
        },
        "birthDate": "1965-10-23"
      },
      {
        "identifier": [
          {
            "use": "source",
            "type": "patient",
            "value": "1583c51a-569a-4f1d-99c7-65f7faba03cd"
          },
          {
            "use": "destination",
            "type": "patient",
            "value": "07fcd975-36e4-41e7-9fb1-017a9ae49d76"
          },
          {
            "use": "internal",
            "type": "patient",
            "value": "de7864e2-f028-49c2-9686-fffece328d94"
          }
        ],
        "name": {
          "family": "Smith",
          "given": "James",
          "prefix": "Mr",
          "suffix": "Sr"
        },
        "birthDate": "1975-08-1"
      }
    ]
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 500 | TODO: Add error message | [`ApiResponseError`](../../doc/models/api-response-error.md) |


# Create a Patient

Request the creation of a new patient, submits the patient record to AdaptHealth

```ts
async createAPatient(
  body: Patient,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Patient`](../../doc/models/patient.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiResponse1`](../../doc/models/api-response-1.md)

## Example Usage

```ts
const contentType = null;
const bodyIdentifier: Identifier[] = [];

const bodyidentifier0: Identifier = {
  use: 'source',
  type: 'patient',
  value: '10004828',
};

bodyIdentifier[0] = bodyidentifier0;

const bodyName: HumanName = {
  family: 'Doe',
  given: 'John',
  prefix: 'Mr',
  suffix: '',
};

const bodyTelecom: ContactPoint[] = [];

const bodytelecom0: ContactPoint = {
  system: 'phone',
  value: '6108251191',
  use: 'billing',
};

bodyTelecom[0] = bodytelecom0;

const bodyAddress: Address[] = [];

const bodyaddress0: Address = {
  type: 'billing',
  line1: '123 Fake St',
  line2: 'Apt 12',
  city: 'Springfield',
  state: 'PA',
  postalCode: '19462',
  country: 'United States',
};

bodyAddress[0] = bodyaddress0;

const bodyContact: ContactPoint[] = [];

const bodycontact0: ContactPoint = {
  system: 'phone',
  value: '6108251191',
  use: 'billing',
};

bodyContact[0] = bodycontact0;

const bodyCoverage: Coverage[] = [];

const bodycoverage0Identifier: Identifier[] = [];

const bodycoverage0identifier0: Identifier = {
  use: 'source',
  type: 'patient',
  value: '1800181',
};

bodycoverage0Identifier[0] = bodycoverage0identifier0;

const bodycoverage0Period: Period = {
  start: '2020-01-01',
  end: '9999-12-31',
};

const bodycoverage0Payor: Reference[] = [];

const bodycoverage0payor0Identifier: Identifier[] = [];

const bodycoverage0payor0identifier0: Identifier = {
  use: 'destination',
  type: 'payor',
  value: '10004828',
};

bodycoverage0payor0Identifier[0] = bodycoverage0payor0identifier0;

const bodycoverage0payor0: Reference = {
  type: 'payor',
  identifier: bodycoverage0payor0Identifier,
};

bodycoverage0Payor[0] = bodycoverage0payor0;

const bodycoverage0Class: Class[] = [];

const bodycoverage0mClass0: Class = {
  type: 'plan',
  value: '1918181110',
  name: 'BCBS of PA',
};

bodycoverage0Class[0] = bodycoverage0mClass0;

const bodycoverage0PolicyHolderName: HumanName = {
  family: 'Doe',
  given: 'John',
  prefix: 'Mr',
  suffix: '',
};

const bodycoverage0PolicyHolderAddress: Address = {
  type: 'physical',
  line1: '1800 Star Blvd',
  line2: 'Apt 12',
  city: 'Springfield',
  state: 'PA',
  postalCode: '19462',
  country: 'United States',
};

const bodycoverage0PolicyHolder: PolicyHolder = {
  name: bodycoverage0PolicyHolderName,
  birthdate: '1957-09-01',
  gender: 'male',
  address: bodycoverage0PolicyHolderAddress,
};

const bodycoverage0: Coverage = {
  identifier: bodycoverage0Identifier,
  period: bodycoverage0Period,
  payor: bodycoverage0Payor,
  subscriberId: '181710181',
  mClass: bodycoverage0Class,
  network: 'Blue Cross Blue Shield of PA',
  order: 1,
  relationship: 'self',
  policyHolder: bodycoverage0PolicyHolder,
};

bodyCoverage[0] = bodycoverage0;

const body: Patient = {
  identifier: bodyIdentifier,
  name: bodyName,
  telecom: bodyTelecom,
  gender: 'male',
  birthDate: '1957-09-01',
  address: bodyAddress,
  contact: bodyContact,
  coverage: bodyCoverage,
};

try {
  const { result, ...httpResponse } = await patientsController.createAPatient(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "success": true,
  "apiName": "partner-patient-api",
  "version": "v1",
  "timeStamp": "2022-10-27T12:53:54.417Z",
  "correlationId": "699f5980-55f6-11ed-a6cf-121c5bd7fdbd",
  "response": {
    "message": "Record created successfully",
    "data": {
      "recordId": "bce4a124-5e1d-44d1-83b4-6ed38eca6f46"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 500 | TODO: Add error message | [`ApiResponseError`](../../doc/models/api-response-error.md) |


# Get Patient by ID

Retrieve specific patient information by ID

```ts
async getPatientByID(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiResponse1`](../../doc/models/api-response-1.md)

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await patientsController.getPatientByID(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "success": true,
  "apiName": "partner-patient-api",
  "version": "v1",
  "timeStamp": "2022-10-27T12:53:54.417Z",
  "correlationId": "699f5980-55f6-11ed-a6cf-121c5bd7fdbd",
  "response": {
    "message": "",
    "data": {
      "identifier": [
        {
          "use": "source",
          "type": "patient",
          "value": "13f01411-f85d-44b5-8bed-f45aef99a340"
        },
        {
          "use": "destination",
          "type": "patient",
          "value": "76315278-d158-4868-9ebf-57a1b60f4e65"
        },
        {
          "use": "internal",
          "type": "patient",
          "value": "498875c7-88b0-4f4a-8883-890621cfdea2"
        }
      ],
      "name": {
        "family": "Doe",
        "given": "John",
        "prefix": "Mr",
        "suffix": ""
      },
      "telecom": [
        {
          "system": "phone",
          "value": "6108251191",
          "use": "billing"
        }
      ],
      "gender": "male",
      "birthDate": "1957-09-01",
      "address": [
        {
          "type": "billing",
          "line1": "123 Fake St",
          "line2": "Apt 12",
          "city": "Springfield",
          "state": "PA",
          "postalCode": "19462",
          "country": "United States"
        }
      ],
      "contact": [
        {
          "system": "phone",
          "value": "6108251191",
          "use": "billing"
        }
      ],
      "coverage": [
        {
          "identifier": [
            {
              "use": "source",
              "type": "patient",
              "value": "13f01411-f85d-44b5-8bed-f45aef99a340"
            },
            {
              "use": "destination",
              "type": "patient",
              "value": "76315278-d158-4868-9ebf-57a1b60f4e65"
            },
            {
              "use": "internal",
              "type": "patient",
              "value": "498875c7-88b0-4f4a-8883-890621cfdea2"
            }
          ],
          "period": {
            "start": "2020-01-01",
            "end": "9999-12-31"
          },
          "payor": [
            {
              "type": "patient",
              "identifier": [
                {
                  "use": "source",
                  "type": "payor",
                  "value": "10004828"
                },
                {
                  "use": "internal",
                  "type": "payor",
                  "value": "61891811"
                },
                {
                  "use": "destination",
                  "type": "payor",
                  "value": "cf88641d-597a-42b4-b423-da46a72f4537"
                }
              ]
            }
          ],
          "subscriberId": "181710181",
          "class": [
            {
              "type": "plan",
              "value": "1918181110",
              "name": "BCBS of PA"
            }
          ],
          "network": "Blue Cross Blue Shield of PA",
          "order": "1",
          "relationship": "self",
          "policyHolder": {
            "name": {
              "family": "Doe",
              "given": "John",
              "prefix": "Mr",
              "suffix": ""
            },
            "birthdate": "1957-09-01",
            "gender": "male",
            "address": {
              "type": "physical",
              "line1": "1800 Star Blvd",
              "line2": "Apt 12",
              "city": "Springfield",
              "state": "PA"
            }
          }
        }
      ]
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 500 | TODO: Add error message | [`ApiResponseError`](../../doc/models/api-response-error.md) |


# Get Patient Orders

Retrieve all orders for a given patient

```ts
async getPatientOrders(
  id: string,
  pageNumber: number,
  pageSize: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `pageNumber` | `number` | Query, Required | Current page number (used for paging results) |
| `pageSize` | `number` | Query, Required | Page size (used for paging results) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiSearchResponse`](../../doc/models/api-search-response.md)

## Example Usage

```ts
const id = 'id0';
const pageNumber = 1;
const pageSize = 10;
try {
  const { result, ...httpResponse } = await patientsController.getPatientOrders(id, pageNumber, pageSize);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "success": true,
  "apiName": "partner-patient-api",
  "version": "v1",
  "timeStamp": "2022-10-27T12:53:54.417Z",
  "correlationId": "699f5980-55f6-11ed-a6cf-121c5bd7fdbd",
  "response": {
    "currentPage": 1,
    "pageSize": 10,
    "totalRecordCount": 3,
    "data": [
      {
        "identifier": [
          {
            "use": "source",
            "type": "order",
            "value": "13f01411-f85d-44b5-8bed-f45aef99a340"
          },
          {
            "use": "destination",
            "type": "order",
            "value": "76315278-d158-4868-9ebf-57a1b60f4e65"
          },
          {
            "use": "internal",
            "type": "order",
            "value": "498875c7-88b0-4f4a-8883-890621cfdea2"
          }
        ],
        "status": "on-hold"
      },
      {
        "identifier": [
          {
            "use": "source",
            "type": "order",
            "value": "1583c51a-569a-4f1d-99c7-65f7faba03cd"
          },
          {
            "use": "destination",
            "type": "order",
            "value": "07fcd975-36e4-41e7-9fb1-017a9ae49d76"
          },
          {
            "use": "internal",
            "type": "order",
            "value": "de7864e2-f028-49c2-9686-fffece328d94"
          }
        ],
        "status": "pending"
      },
      {
        "identifier": [
          {
            "use": "source",
            "type": "order",
            "value": "172de01a-1682-4c58-a558-9d24a38fe5ac"
          },
          {
            "use": "destination",
            "type": "order",
            "value": "a4b7acb2-2dd1-49f9-836d-6258fb7c9095"
          }
        ],
        "status": "in-process"
      }
    ]
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 500 | TODO: Add error message | [`ApiResponseError`](../../doc/models/api-response-error.md) |

