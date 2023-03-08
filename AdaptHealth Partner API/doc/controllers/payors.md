# Payors

```ts
const payorsController = new PayorsController(client);
```

## Class Name

`PayorsController`


# Get Payors

Retrieve a list of AdaptHealth Payors

```ts
async getPayors(
  pageNumber: number,
  pageSize: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pageNumber` | `number` | Query, Required | Current page number (used for paging results) |
| `pageSize` | `number` | Query, Required | Page size (used for paging results) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiSearchResponse`](../../doc/models/api-search-response.md)

## Example Usage

```ts
const pageNumber = 1;
const pageSize = 10;
try {
  const { result, ...httpResponse } = await payorsController.getPayors(pageNumber, pageSize);
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
        "id": "2285",
        "name": "MUTUAL OF OMAHA"
      },
      {
        "id": "381",
        "name": "NATIONWIDE (INS228)"
      },
      {
        "id": "184",
        "name": "BCBS OF IDAHO (INSF57)"
      }
    ]
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 500 | TODO: Add error message | [`ApiResponseError`](../../doc/models/api-response-error.md) |

