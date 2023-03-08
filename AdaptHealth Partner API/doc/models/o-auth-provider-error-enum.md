
# O Auth Provider Error Enum

OAuth 2 Authorization error codes

## Enumeration

`OAuthProviderErrorEnum`

## Fields

| Name | Description |
|  --- | --- |
| `invalidRequest` | The request is missing a required parameter, includes an unsupported parameter value (other than grant type), repeats a parameter, includes multiple credentials, utilizes more than one mechanism for authenticating the client, or is otherwise malformed. |
| `invalidClient` | Client authentication failed (e.g., unknown client, no client authentication included, or unsupported authentication method). |
| `invalidGrant` | The provided authorization grant (e.g., authorization code, resource owner credentials) or refresh token is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client. |
| `unauthorizedClient` | The authenticated client is not authorized to use this authorization grant type. |
| `unsupportedGrantType` | The authorization grant type is not supported by the authorization server. |
| `invalidScope` | The requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner. |

