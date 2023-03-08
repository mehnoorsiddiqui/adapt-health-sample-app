# Items

```ts
const itemsController = new ItemsController(client);
```

## Class Name

`ItemsController`


# Get Items

Retrieve a list of AdaptHealth Items

```ts
async getItems(
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
  const { result, ...httpResponse } = await itemsController.getItems(pageNumber, pageSize);
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
        "id": "2622",
        "name": "Disposable PAP Filter S9",
        "hcpc": "A7038"
      },
      {
        "id": "987",
        "name": "FlexiFit 407 Nasal Mask w/ headgear",
        "hcpc": "A7034"
      },
      {
        "id": "1611",
        "name": "DreamStation CPAP Auto",
        "hcpc": "E0601"
      }
    ]
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 500 | TODO: Add error message | [`ApiResponseError`](../../doc/models/api-response-error.md) |

