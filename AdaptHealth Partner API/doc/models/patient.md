
# Patient

AdaptHealth Patient Type

## Structure

`Patient`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identifier` | [`Identifier[]`](../../doc/models/identifier.md) | Required | Unique identifiers for the patient record |
| `name` | [`HumanName`](../../doc/models/human-name.md) | Required | - |
| `telecom` | [`ContactPoint[]`](../../doc/models/contact-point.md) | Required | Contact types including phone, fax and email |
| `gender` | [`GenderEnum`](../../doc/models/gender-enum.md) | Required | - |
| `birthDate` | `string` | Required | - |
| `address` | [`Address[]`](../../doc/models/address.md) | Required | Patient delivery, billing and physical address |
| `contact` | [`ContactPoint[]`](../../doc/models/contact-point.md) | Required | Contact types including phone, fax and email |
| `coverage` | [`Coverage[]`](../../doc/models/coverage.md) | Required | Patient Insurance |

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
  "telecom": [
    {
      "system": "email",
      "value": "value1",
      "use": "billing"
    },
    {
      "system": "phone",
      "value": "value2",
      "use": "mobile"
    }
  ],
  "gender": "male",
  "birthDate": "2016-03-13T12:52:32.123Z",
  "address": [
    {
      "type": "billing",
      "line1": "line16",
      "line2": "line28",
      "city": "city4",
      "state": "state0",
      "postalCode": "postalCode6",
      "country": "country8"
    }
  ],
  "contact": [
    {
      "system": "email",
      "value": "value3",
      "use": "billing"
    },
    {
      "system": "phone",
      "value": "value4",
      "use": "mobile"
    }
  ],
  "coverage": [
    {
      "identifier": [
        {
          "use": "destination",
          "type": "order",
          "value": "value5"
        },
        {
          "use": "source",
          "type": "NPI",
          "value": "value4"
        }
      ],
      "period": {
        "start": "2016-03-13T12:52:32.123Z",
        "end": "2016-03-13T12:52:32.123Z"
      },
      "payor": [
        {
          "type": "order",
          "identifier": [
            {
              "use": "internal",
              "type": "patient",
              "value": "value2"
            },
            {
              "use": "other",
              "type": "cpt",
              "value": "value1"
            }
          ]
        }
      ],
      "subscriberId": "subscriberId6",
      "class": [
        {
          "type": "plan",
          "value": "value6",
          "name": "name4"
        },
        {
          "type": "medicaid",
          "value": "value7",
          "name": "name5"
        },
        {
          "type": "group",
          "value": "value8",
          "name": "name6"
        }
      ],
      "network": "network6",
      "order": 0,
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
  ]
}
```

