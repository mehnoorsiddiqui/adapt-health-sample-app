
# Practicioner

## Structure

`Practicioner`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identifier` | [`Identifier[]`](../../doc/models/identifier.md) | Required | - |
| `name` | [`HumanName`](../../doc/models/human-name.md) | Required | - |
| `telecom` | [`ContactPoint`](../../doc/models/contact-point.md) | Required | - |
| `address` | [`Address`](../../doc/models/address.md) | Required | - |
| `qualification` | [`Qualification[]`](../../doc/models/qualification.md) | Required | - |

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
  ],
  "name": {
    "family": "family2",
    "given": "given6",
    "prefix": "prefix8",
    "suffix": "suffix0"
  },
  "telecom": {
    "system": "fax",
    "value": "value0",
    "use": "delivery"
  },
  "address": {
    "type": "physical",
    "line1": "line18",
    "line2": "line20",
    "city": "city6",
    "state": "state2",
    "postalCode": "postalCode8",
    "country": "country0"
  },
  "qualification": [
    {
      "identifier": [
        {
          "use": "source",
          "type": "NPI",
          "value": "value4"
        },
        {
          "use": "external",
          "type": "payor",
          "value": "value3"
        }
      ]
    }
  ]
}
```

