
# Health Response

## Structure

`HealthResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceName` | `string` | Required | The name of the MuleSoft app or external system being checked |
| `connected` | `boolean` | Required | true or false if the system responds |
| `serviceVersion` | `string` | Required | Deployed version id of the MuleSoft app or external system being checked |
| `detail` | `string \| undefined` | Optional | Additional information especially if the system is not responding correctly |
| `connectedServices` | `unknown[] \| undefined` | Optional | Any connected services that also hit their /health endpoint will embed results in the connectedServices array with same format |

## Example (as JSON)

```json
{
  "serviceName": "serviceName8",
  "connected": false,
  "serviceVersion": "serviceVersion4",
  "detail": null,
  "connectedServices": null
}
```

