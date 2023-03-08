
# Coverage

coverage and payor information

## Structure

`Coverage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identifier` | [`Identifier[]`](../../doc/models/identifier.md) | Required | - |
| `period` | [`Period`](../../doc/models/period.md) | Required | a date-only range |
| `payor` | [`Reference[]`](../../doc/models/reference.md) | Required | - |
| `subscriberId` | `string` | Required | - |
| `mClass` | [`Class[]`](../../doc/models/class.md) | Required | - |
| `network` | `string` | Required | - |
| `order` | `number` | Required | - |
| `relationship` | [`RelationshipEnum`](../../doc/models/relationship-enum.md) | Required | - |
| `policyHolder` | [`PolicyHolder`](../../doc/models/policy-holder.md) | Required | - |

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
  "period": {
    "start": "2016-03-13T12:52:32.123Z",
    "end": "2016-03-13T12:52:32.123Z"
  },
  "payor": [
    {
      "type": "payor",
      "identifier": [
        {
          "use": "source",
          "type": "NPI",
          "value": "value4"
        },
        {
          "use": "destination",
          "type": "order",
          "value": "value5"
        },
        {
          "use": "other",
          "type": "cpt",
          "value": "value6"
        }
      ]
    }
  ],
  "subscriberId": "subscriberId6",
  "class": [
    {
      "type": "group",
      "value": "value4",
      "name": "name2"
    },
    {
      "type": "medicaid",
      "value": "value5",
      "name": "name3"
    }
  ],
  "network": "network4",
  "order": 32,
  "relationship": "self",
  "policyHolder": {
    "name": {
      "family": "family6",
      "given": "given0",
      "prefix": "prefix2",
      "suffix": "suffix4"
    },
    "birthdate": "2016-03-13T12:52:32.123Z",
    "gender": "other",
    "address": {
      "type": "billing",
      "line1": "line12",
      "line2": "line24",
      "city": "city0",
      "state": "state6",
      "postalCode": "postalCode2",
      "country": "country4"
    }
  }
}
```

