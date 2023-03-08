
# Reference

a reference to another entity, typically with the resource identifier included

## Structure

`Reference`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`ReferenceTypeEnum`](../../doc/models/reference-type-enum.md) | Required | - |
| `identifier` | [`Identifier[]`](../../doc/models/identifier.md) | Required | - |

## Example (as JSON)

```json
{
  "type": "payor",
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

