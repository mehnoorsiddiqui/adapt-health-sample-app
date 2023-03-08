
# Qualification

provider qualifications, including NPI, Medicaid numbers, etc.

## Structure

`Qualification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identifier` | [`Identifier[]`](../../doc/models/identifier.md) | Required | - |

## Example (as JSON)

```json
{
  "identifier": [
    {
      "use": "external",
      "type": "payor",
      "value": "value3"
    },
    {
      "use": "source",
      "type": "NPI",
      "value": "value4"
    },
    {
      "use": "destination",
      "type": "order",
      "value": "value5"
    }
  ]
}
```

