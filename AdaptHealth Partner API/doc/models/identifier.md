
# Identifier

any internal or external identifier used to represent an entity

## Structure

`Identifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `use` | [`IdentifierUseEnum`](../../doc/models/identifier-use-enum.md) | Required | - |
| `type` | [`IdentifierTypeEnum`](../../doc/models/identifier-type-enum.md) | Required | - |
| `value` | `string` | Required | - |

## Example (as JSON)

```json
{
  "use": "internal",
  "type": "patient",
  "value": "value2"
}
```

