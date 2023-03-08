# Health

```ts
const healthController = new HealthController(client);
```

## Class Name

`HealthController`


# Get Health

Can check the availability of this service and connected services

```ts
async getHealth(
  depth: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<HealthResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `depth` | `number` | Query, Required | Sets the depth of connected services to check for a health response.<br>The default of 1 will only check this service.<br>0 will check the health of all services descending from this one.<br>Any other positive number will be limited, for example 3 would check this service, connected services and ask connected services to check the health of any connected services to them. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`HealthResponse`](../../doc/models/health-response.md)

## Example Usage

```ts
const depth = 1;
try {
  const { result, ...httpResponse } = await healthController.getHealth(depth);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

