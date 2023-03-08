
# Policy Holder

## Structure

`PolicyHolder`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`HumanName`](../../doc/models/human-name.md) | Required | - |
| `birthdate` | `string` | Required | - |
| `gender` | [`GenderEnum`](../../doc/models/gender-enum.md) | Required | - |
| `address` | [`Address`](../../doc/models/address.md) | Required | - |

## Example (as JSON)

```json
{
  "name": {
    "family": "family2",
    "given": "given6",
    "prefix": "prefix8",
    "suffix": "suffix0"
  },
  "birthdate": "2016-03-13T12:52:32.123Z",
  "gender": "male",
  "address": {
    "type": "physical",
    "line1": "line18",
    "line2": "line20",
    "city": "city6",
    "state": "state2",
    "postalCode": "postalCode8",
    "country": "country0"
  }
}
```

