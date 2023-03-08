# Orders

```ts
const ordersController = new OrdersController(client);
```

## Class Name

`OrdersController`

## Methods

* [Create an Order](../../doc/controllers/orders.md#create-an-order)
* [Cancel an Order](../../doc/controllers/orders.md#cancel-an-order)
* [Get Order Status by ID](../../doc/controllers/orders.md#get-order-status-by-id)
* [Upload a Document](../../doc/controllers/orders.md#upload-a-document)


# Create an Order

Request the creation of a new order, submits the order record to AdaptHealth

```ts
async createAnOrder(
  body: Order,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Order`](../../doc/models/order.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiResponse1`](../../doc/models/api-response-1.md)

## Example Usage

```ts
const contentType = null;
const bodyIdentifier: Identifier[] = [];

const bodyidentifier0: Identifier = {
  use: 'internal',
  type: 'patient',
  value: 'value7',
};

bodyIdentifier[0] = bodyidentifier0;

const bodyidentifier1: Identifier = {
  use: 'external',
  type: 'payor',
  value: 'value8',
};

bodyIdentifier[1] = bodyidentifier1;

const bodyTelecom: ContactPoint[] = [];

const bodytelecom0: ContactPoint = {
  system: 'email',
  value: 'value3',
  use: 'billing',
};

bodyTelecom[0] = bodytelecom0;

const bodyAddress: Address = {
  type: 'physical',
  line1: 'line14',
  line2: 'line26',
  city: 'city2',
  state: 'state8',
  postalCode: 'postalCode4',
  country: 'country6',
};

const bodySubjectIdentifier: Identifier[] = [];

const bodySubjectidentifier0: Identifier = {
  use: 'external',
  type: 'payor',
  value: 'value3',
};

bodySubjectIdentifier[0] = bodySubjectidentifier0;

const bodySubjectidentifier1: Identifier = {
  use: 'source',
  type: 'NPI',
  value: 'value4',
};

bodySubjectIdentifier[1] = bodySubjectidentifier1;

const bodySubject: Reference = {
  type: 'order',
  identifier: bodySubjectIdentifier,
};

const bodyServices: Service[] = [];

const bodyservices0Identifier: Identifier[] = [];

const bodyservices0identifier0: Identifier = {
  use: 'internal',
  type: 'patient',
  value: 'value7',
};

bodyservices0Identifier[0] = bodyservices0identifier0;

const bodyservices0Quantity: Quantity = {
  quantity: 160,
  unit: 'unit0',
};

const bodyservices0: Service = {
  identifier: bodyservices0Identifier,
  quantity: bodyservices0Quantity,
};

bodyServices[0] = bodyservices0;

const bodyRequesterIdentifier: Identifier[] = [];

const bodyRequesteridentifier0: Identifier = {
  use: 'internal',
  type: 'patient',
  value: 'value7',
};

bodyRequesterIdentifier[0] = bodyRequesteridentifier0;

const bodyRequesterName: HumanName = {
  family: 'family8',
  given: 'given2',
  prefix: 'prefix4',
  suffix: 'suffix6',
};

const bodyRequesterTelecom: ContactPoint = {
  system: 'fax',
  value: 'value0',
  use: 'delivery',
};

const bodyRequesterAddress: Address = {
  type: 'delivery',
  line1: 'line14',
  line2: 'line26',
  city: 'city2',
  state: 'state8',
  postalCode: 'postalCode4',
  country: 'country6',
};

const bodyRequesterQualification: Qualification[] = [];

const bodyRequesterqualification0Identifier: Identifier[] = [];

const bodyRequesterqualification0identifier0: Identifier = {
  use: 'external',
  type: 'payor',
  value: 'value8',
};

bodyRequesterqualification0Identifier[0] = bodyRequesterqualification0identifier0;

const bodyRequesterqualification0: Qualification = {
  identifier: bodyRequesterqualification0Identifier,
};

bodyRequesterQualification[0] = bodyRequesterqualification0;

const bodyRequesterqualification1Identifier: Identifier[] = [];

const bodyRequesterqualification1identifier0: Identifier = {
  use: 'internal',
  type: 'patient',
  value: 'value7',
};

bodyRequesterqualification1Identifier[0] = bodyRequesterqualification1identifier0;

const bodyRequesterqualification1identifier1: Identifier = {
  use: 'other',
  type: 'cpt',
  value: 'value6',
};

bodyRequesterqualification1Identifier[1] = bodyRequesterqualification1identifier1;

const bodyRequesterqualification1: Qualification = {
  identifier: bodyRequesterqualification1Identifier,
};

bodyRequesterQualification[1] = bodyRequesterqualification1;

const bodyRequesterqualification2Identifier: Identifier[] = [];

const bodyRequesterqualification2identifier0: Identifier = {
  use: 'other',
  type: 'cpt',
  value: 'value6',
};

bodyRequesterqualification2Identifier[0] = bodyRequesterqualification2identifier0;

const bodyRequesterqualification2identifier1: Identifier = {
  use: 'destination',
  type: 'order',
  value: 'value5',
};

bodyRequesterqualification2Identifier[1] = bodyRequesterqualification2identifier1;

const bodyRequesterqualification2identifier2: Identifier = {
  use: 'source',
  type: 'NPI',
  value: 'value4',
};

bodyRequesterqualification2Identifier[2] = bodyRequesterqualification2identifier2;

const bodyRequesterqualification2: Qualification = {
  identifier: bodyRequesterqualification2Identifier,
};

bodyRequesterQualification[2] = bodyRequesterqualification2;

const bodyRequester: Practicioner = {
  identifier: bodyRequesterIdentifier,
  name: bodyRequesterName,
  telecom: bodyRequesterTelecom,
  address: bodyRequesterAddress,
  qualification: bodyRequesterQualification,
};

const bodyDiagnoses: string[] = ['diagnoses8', 'diagnoses9'];
const body: Order = {
  identifier: bodyIdentifier,
  status: 'active',
  neededTime: '2016-03-13T12:52:32.123Z',
  telecom: bodyTelecom,
  address: bodyAddress,
  subject: bodySubject,
  services: bodyServices,
  requester: bodyRequester,
  diagnoses: bodyDiagnoses,
  note: 'note8',
};

try {
  const { result, ...httpResponse } = await ordersController.createAnOrder(body);
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


# Cancel an Order

Request cancellation of an order

```ts
async cancelAnOrder(
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
  const { result, ...httpResponse } = await ordersController.cancelAnOrder(id);
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


# Get Order Status by ID

Retrieve order status by ID

```ts
async getOrderStatusByID(
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
  const { result, ...httpResponse } = await ordersController.getOrderStatusByID(id);
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
          "type": "order",
          "value": "172de01a-1682-4c58-a558-9d24a38fe5ac"
        },
        {
          "use": "destination",
          "type": "order",
          "value": "a4b7acb2-2dd1-49f9-836d-6258fb7c9095"
        },
        {
          "use": "internal",
          "type": "order",
          "value": "be5e6e5c-c7df-4c96-b26f-bf2b34b8a12e"
        }
      ],
      "status": "on-hold"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 500 | TODO: Add error message | [`ApiResponseError`](../../doc/models/api-response-error.md) |


# Upload a Document

Upload a document on the given order

```ts
async uploadADocument(
  id: string,
  file: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `file` | `FileWrapper` | Form, Required | The file to be uploaded |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiResponse1`](../../doc/models/api-response-1.md)

## Example Usage

```ts
const id = 'id0';
const file = new FileWrapper(fs.createReadStream('dummy_file'));
try {
  const { result, ...httpResponse } = await ordersController.uploadADocument(id, file);
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

