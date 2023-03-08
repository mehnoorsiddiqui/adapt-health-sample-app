
# Order

AdaptHealth Order Type

## Structure

`Order`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identifier` | [`Identifier[]`](../../doc/models/identifier.md) | Required | Unique identifiers for the order record |
| `status` | [`StatusEnum`](../../doc/models/status-enum.md) | Required | Order status in the destination system |
| `neededTime` | `string` | Required | Date the order needs to be delivered |
| `telecom` | [`ContactPoint[]`](../../doc/models/contact-point.md) | Required | Contact must be of type "phone" |
| `address` | [`Address`](../../doc/models/address.md) | Required | Delivery address |
| `subject` | [`Reference`](../../doc/models/reference.md) | Required | Must reference an object of type "patient", even for a non-patient entity |
| `services` | [`Service[]`](../../doc/models/service.md) | Required | The type of service/item being provided and the quantity |
| `requester` | [`Practicioner`](../../doc/models/practicioner.md) | Required | Prescribing doctor for the order |
| `diagnoses` | `string[]` | Required | ICD-10 Diagnosis Codes |
| `note` | `string` | Required | Free-form text field for order notes |

## Example (as JSON)

```json
{
  "identifier": null,
  "status": null,
  "neededTime": null,
  "telecom": null,
  "address": null,
  "subject": null,
  "services": {
    "identifier": null,
    "quantity": {
      "quantity": null,
      "unit": "unit"
    }
  },
  "requester": null,
  "diagnoses": null,
  "note": null
}
```

