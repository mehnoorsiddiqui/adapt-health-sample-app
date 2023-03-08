
# Custom Error

Standard error format to return for non-successful HTTP responses.
adapted from https://jsonapi.org/format/#error-objects

## Structure

`CustomError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `correlationId` | `string` | Required | a unique identifier for this particular occurrence of the problem.<br>https://docs.mulesoft.com/mule-runtime/4.4/correlation-id |
| `status` | `string` | Required | the HTTP status code applicable to this problem, expressed as a string value. |
| `code` | `string \| undefined` | Optional | an application-specific error code, expressed as a string value. |
| `title` | `string` | Required | a short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization. |
| `detail` | `string \| undefined` | Optional | a human-readable explanation specific to this occurrence of the problem. Like title, this field’s value can be localized. |
| `source` | `string \| undefined` | Optional | an object containing references to the source of the error |
| `meta` | `unknown \| undefined` | Optional | a meta object containing non-standard meta-information about the error. |

## Example (as JSON)

```json
{
  "correlationId": "correlationId0",
  "status": "status8",
  "code": null,
  "title": "title4",
  "detail": null,
  "source": null,
  "meta": null
}
```

