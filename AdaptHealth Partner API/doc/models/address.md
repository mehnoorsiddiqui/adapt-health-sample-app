
# Address

## Structure

`Address`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`AddressTypeEnum`](../../doc/models/address-type-enum.md) | Required | - |
| `line1` | `string` | Required | - |
| `line2` | `string` | Required | - |
| `city` | `string` | Required | - |
| `state` | `string` | Required | - |
| `postalCode` | `string` | Required | - |
| `country` | `string` | Required | - |

## Example (as JSON)

```json
{
  "type": "physical",
  "line1": "line12",
  "line2": "line24",
  "city": "city0",
  "state": "state4",
  "postalCode": "postalCode8",
  "country": "country4"
}
```

