
# Api Response 1

## Structure

`ApiResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `boolean` | Required | - |
| `apiName` | `string` | Required | - |
| `version` | `string` | Required | - |
| `timeStamp` | `string` | Required | - |
| `correlationId` | `string` | Required | - |
| `response` | [`Response`](../../doc/models/response.md) | Required | - |

## Example (as JSON)

```json
{
  "success": false,
  "apiName": "apiName2",
  "version": "version4",
  "timeStamp": "2016-03-13T12:52:32.123Z",
  "correlationId": "correlationId0",
  "response": {
    "message": "message0",
    "data": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

