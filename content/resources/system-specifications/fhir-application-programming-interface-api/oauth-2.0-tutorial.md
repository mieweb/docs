---
id: '1y6n0lw4prz4Rg_7HKbhcgPN6p9y4wNa5m2dw4rr9Tfk'
title: 'OAuth 2.0 Tutorial'
date: '2025-05-13T13:23:58.982Z'
version: 814
lastAuthor: 'mpierzchala'
mimeType: 'text/x-markdown'
links:
  - 'https://url/webchart.cgi/.well-known/openid-configuration'
  - 'https://url/webchart.cgi/.well-known/smart-configuration'
  - 'https://github.com/mieweb/webchart-oauth-example'
  - 'https://youtu.be/-YaW9Qa5wvc'
  - 'http://hl7.org/fhir/smart-app-launch/app-launch.html'
  - 'http://hl7.org/fhir/smart-app-launch/backend-services.html'
  - 'https://github.mieweb.com/webchart/webchart/blob/e887aebeb0fb7e3747a25fb177855a36228dee51/src/webchart.c'
  - 'https://fhirr4sandbox.webch.art/webchart.cgi/jwks/'
  - 'https://datatracker.ietf.org/doc/html/rfc7517'
  - 'https://en.wikipedia.org/wiki/OpenID'
  - 'https://oauth.net/2/'
  - 'https://pm.mieweb.com/issues/106834'
  - 'https://pm.mieweb.com/issues/71437'
source: 'https://drive.google.com/open?id=1y6n0lw4prz4Rg_7HKbhcgPN6p9y4wNa5m2dw4rr9Tfk'
wikigdrive: '5455bbab25cad2721229bfc1e0cf5316add944a5'
---
# OAuth 2.0 Overview

OAuth 2.0 is the industry standard for allowing external applications access to protected resources. See [References for more about OAuth](#references-for-more-about-oauth)

OAuth 2.0 is a widely adopted standard that provides a secure method for external applications to access protected resources, such as user data, on behalf of the resource owner without needing to expose the user's credentials. It enables third-party apps to interact with systems like Electronic Health Records (EHRs) while maintaining strict privacy and security standards, especially within healthcare environments. OAuth 2.0 introduces workflows that cater to different use cases, ensuring flexible access management while aligning with specific healthcare and security requirements. These workflows include:
<table>
<tr>
<td><img src="../oauth-2.0-tutorial.assets/0ea7b68fa0b53d9b3a3f57924ba3985e.png" /><br />
<a href="#patient-standalone-launch">Patient Standalone Launch</a>: This method allows patients to directly authorize applications to access their personal health information through an OAuth 2.0 authorization code flow. It enables a seamless, user-initiated connection between patient applications and the healthcare system PORTAL, granting permission for data access based on defined scopes.</td>
<td><img src="../oauth-2.0-tutorial.assets/8b91751a10e2605d3eac3241f2bf577c.png" /><br />
<a href="#physician-ehr-launch">Physician EHR Launch</a>: Designed for healthcare providers, this workflow supports OAuth access for applications within the EHR that LAUNCH from a patient chart. By integrating with the healthcare provider's systems, practitioners can access and utilize third-party applications directly within their EHR interface, improving workflow efficiency and interoperability.</td>
<td><img src="../oauth-2.0-tutorial.assets/04e74bcd714b65cdc21d4acc8a89abe4.png" /><br />
<a href="#smart-bulk-backend-services">SMART Bulk Backend Services</a>: For more extensive data operations, this workflow enables large-scale, system-level access to healthcare data using backend services. It is typically utilized for bulk data transfer, supporting use cases like data analysis, reporting, and research that require programmatic access to large datasets.</td>
</tr>
</table>

Each method is tailored to specific needs within healthcare, balancing security, patient privacy, and ease of access. These OAuth 2.0 workflows are crucial for creating an interoperable ecosystem that respects data protection principles while empowering healthcare providers and patients with innovative applications.

* Patient
    * Shared secret for the app
    * Session/Bearer token for each patient authorized to a specific app/patient/scope
* Provider
    * Provider clicks on a link in the chart. A JWT is created for the provider for the specific patient (signed by the WebChart system)
    * Shared secret for app
    * Public/Private key for app is for signing JWT
    * Session/Bearer token for each provider authorized to a specific app/for a specific patient/scope
* Bulk

## Well Known Endpoint Information

[https://URL/webchart.cgi/.well-known/openid-configuration](https://url/webchart.cgi/.well-known/openid-configuration)

The .well-known path is a convention used in web development for serving metadata or configuration information in a standardized way. When working with OpenID Connect (OIDC), a well-known endpoint is often used to expose the OpenID Connect configuration details. Specifically, OpenID Connect defines a .well-known URL path where an identity provider (IdP) exposes its OpenID Connect metadata.

```
{
"issuer": "https://handle.url.com/fhirr4sandbox/webchart.cgi",
"authorization_endpoint": "https://handle.url.com/fhirr4sandbox/webchart.cgi/oauth/authorization/",
"jwks_uri": "https://handle.url.com/fhirr4sandbox/webchart.cgi/jwks/",
"response_types_supported": "code",
"subject_types_supported": "public",
"id_token_signing_alg_values_supported":"RS256",
"token_endpoint": "https://handle.url.com/fhirr4sandbox/webchart.cgi/oauth/token/",
"introspection_endpoint": "https://handle.url.com/fhirr4sandbox/webchart.cgi/oauth/introspect/",
"revocation_endpoint": "https://handle.url.com/fhirr4sandbox/webchart.cgi?f=jwt&opp=manage"
}
```

[https://URL/webchart.cgi/.well-known/smart-configuration](https://url/webchart.cgi/.well-known/smart-configuration)

The **smart-configuration** is a .well-known endpoint specific to SMART on FHIR, and its main goal is to expose important configuration information about how apps should interact with the healthcare system's OAuth and FHIR APIs.

```
{
"issuer": "",
"jwks_uri": "https://handle.url.com/handle/webchart.cgi/jwks/",
"authorization_endpoint": "https://handle.url.com/handle/webchart.cgi/oauth/authenticate/",
"grant_types_supported": ["authorization_code"],
"token_endpoint": "https://handle.url.com/handle/webchart.cgi/oauth/token/",
"token_endpoint_auth_methods_supported": ["private_key_jwt"],
"token_endpoint_auth_signing_alg_values_supported": ["RS384"],
"scopes_supported": ["patient/*.rs","system/*.read"],
"response_types_supported": "token",
"management_endpoint": "https://handle.url.com/handle/webchart.cgi?f=admin&s=jwt",
"introspection_endpoint": "https://handle.url.com/handle/webchart.cgi/oauth/introspect/",
"revocation_endpoint": "https://handle.url.com/handle/webchart.cgi?f=admin&s=jwt&opp=revoke",
"capabilities": ["sso-openid-connect", "launch-ehr", "client-confidential-symmetric", "context-banner", "context-style", "context-ehr-patient", "permission-offline", "permission-user", "launch-standalone", "client-public", "context-standalone-patient", "permission-patient"], 
"code_challenge_methods_supported": ["S256"]
}
```

## App Registration

Applications can be registered within the Login Trusts editor within the EHR. Contact your implementation specialist for assistance as it requires special permissions to add Login Trusts to a system.

If you have access to the Login Trust screens in your system, use the information below for 3rd party endpoints:

## Creating a 3rd party endpoint for FHIR in WebChart

Example screenshot of Create/Edit Login Trust in webchart:

![](../oauth-2.0-tutorial.assets/640fd9675415a734b06608a084d759a1.png)

### FINISH THE CONFIG

Note: The "allowed options" does not have the checkbox for FHIR.  SQL is required to enable FHIR.

## Data Points

* A set of production credentials (id and secret) to access your production environment for your clients  (Location 1 and 3 in Screenshot)
* Location 2 in Screenshot should be the redirect URL to the 3rd party app after validation.
* Make sure Key Format is PEM and Digest is SHA1 (Location 4 in Screenshot).

# Patient Standalone Launch

Registered applications can utilize the OAuth 2.0 authorization code workflow in order to access the EHR.

Utilizing applications conforming to the SMART launch workflow, users will be directed to the EHR's Scope confirmation page.

### Scopes

Typical scope for patients would be:

```
   var authURL = oauth2.getAuthorizeUrl({
       response_type: 'code', // Explicitly specify the response type
       redirect_uri: 'http://localhost:8080/code',
       scope: 'launch/patient openid fhirUser offline_access patient/*.read',
       aud: 'https://fhirr4sandbox.webch.art/webchart.cgi' // Add the correct audience
   });


```

* <strong>launch/patient</strong>: Indicates the app is launched by a patient and intends to retrieve patient-specific data.
* <strong>openid</strong>: Required for OpenID Connect to authenticate the user and issue an ID token.
* <strong>fhirUser</strong>: Allows the app to access FHIR resources associated with the user.
* <strong>offline_access</strong>: Enables the app to request refresh tokens for long-term access to data.
* <strong>patient/*.read</strong>: Grants read access to all FHIR resources related to the patient.

Example app: https://github.com/mieweb/webchart-oauth-example

![](../oauth-2.0-tutorial.assets/2f98e9d3c8a8bff93d51cde1ccbc5fd4.png)

https://youtu.be/-YaW9Qa5wvc

On this page, individual accesses may be customized or denied altogether.

By clicking on the item, it will turn "grey" indicated access to that resource will be **DENIED**. The first four (`launch/patient openid fhirUser offline_access`) are mandatory and cannot be denied.

![](../oauth-2.0-tutorial.assets/6a805673f87cb3e0a1ae5a9cfb96588f.png)

If allowed, the application will then be permitted to access the user's data via the FHIR API.

# Physician EHR Launch

Aka: [SMART "launch sequence" ](http://hl7.org/fhir/smart-app-launch/app-launch.html)

![](../oauth-2.0-tutorial.assets/9866a51b932bf0a393c78af3867dca89.png)

The Quickview contains a FHIR Launch portlet which allows launching configured applications.

Navigate to the Quickview sidemenu tab

Open the Select Portlets manager

![](../oauth-2.0-tutorial.assets/c1629683b0a19ba5d8c3a9b36295fa1c.png)

![](../oauth-2.0-tutorial.assets/04d97094b29274c805888eb83963ad69.png)

Utilizing the links to the configured applications present in the FHIR Launch portlet will allow EHR Practitioner access to those applications.

![](../oauth-2.0-tutorial.assets/758ff21d8af26d1e930bcb8aed3706e4.png)

![](../oauth-2.0-tutorial.assets/d3dc42af01980adbd1604ca8dbb7e8e3.png)

JWT created:

![](../oauth-2.0-tutorial.assets/bba95e49f0c20704e35bc30924cf4933.png)

![](../oauth-2.0-tutorial.assets/8bb6d92978d2f0ff8a8daccc03e44dbf.png)

# SMART Bulk Backend Services

Applications may utilize the [FHIR Backend Services](http://hl7.org/fhir/smart-app-launch/backend-services.html) for bulk workflow order to consume EHR resources.

![](../oauth-2.0-tutorial.assets/dbb20092fb5262d7d592da024cb36062.png)

# Management of Interfaces

## Revocation of Access

Admins may revoke access to any applications previously granted access via the Token Administration tool.

URL: ?f=layout&module=Login&name=OAuthCodes

![](../oauth-2.0-tutorial.assets/1c635a0c5501b22f3688af9a5ba043cd.png)
### JWT

webchart.cgi/jwt/

https://github.mieweb.com/webchart/webchart/blob/e887aebeb0fb7e3747a25fb177855a36228dee51/src/webchart.c#L4894

### JWKS

https://fhirr4sandbox.webch.art/webchart.cgi/jwks/

![](../oauth-2.0-tutorial.assets/90bec505d8d1e0b046dd6ef40b737442.png)

![](../oauth-2.0-tutorial.assets/78a24893c83f5ccd4dac4fea40628e7e.png)

webchart.cgi/jwks/

https://github.mieweb.com/webchart/webchart/blob/e887aebeb0fb7e3747a25fb177855a36228dee51/src/webchart.c#L4896

JWKS (JSON Web Key Sets): https://datatracker.ietf.org/doc/html/rfc7517#appendix-A

https://fhirr4sandbox.webch.art/webchart.cgi/jwks/

## Server Setup

```
$ openssl genrsa -out mykey.pem 2048
Generating RSA private key, 2048 bit long modulus (2 primes)
........................+++++
.......................................................+++++
e is 65537 (0x010001)
$ openssl rsa -in mykey.pem -pubout
writing RSA key
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvqTVtATjtY+gsbrbdZul
SwazoGNNJ3WoxjR2i2zZ+U8GhIWhKNdJJ/X4VuEaBKg1428JhAQ1+D35DywZyI9W
RcLLXeUWGnw+qJ04ZTQ7TZn8sP9oia++FRAdMKVGoN6Kw6Q/glHfhKDlxsp/UYtj
hai5ZqNBjMSgT6cLoq+HBeVrDgme7AZn00ur4YoYx49CvQXCSzQWX8gnsbkOMdts
epcpUTQ3XAj34ijjE+0sbzMTKD6ldb1Xzp7QGRXhsqt6bUqxBwaIm+S7iY/WLYA2
0q4bY+KpPmfRVslzIvCJx4PTS3qfko4brAxEZC/SxbOYmONN7K2xn9oYrmVKAZd6
7QIDAQAB
-----END PUBLIC KEY-----
```

```
insert into 
login_trusts 
set 
domain='MIE-localhost-launch', 
description='Local FHIR App Launch', 
allowed_options=8388608, 
login_url='http://localhost:8080/launch', 
private_key='-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEAvqTVtATjtY+gsbrbdZulSwazoGNNJ3WoxjR2i2zZ+U8GhIWh\nKNdJJ/X4VuEaBKg1428JhAQ1+D35DywZyI9WRcLLXeUWGnw+qJ04ZTQ7TZn8sP9o\nia++FRAdMKVGoN6Kw6Q/glHfhKDlxsp/UYtjhai5ZqNBjMSgT6cLoq+HBeVrDgme\n7AZn00ur4YoYx49CvQXCSzQWX8gnsbkOMdtsepcpUTQ3XAj34ijjE+0sbzMTKD6l\ndb1Xzp7QGRXhsqt6bUqxBwaIm+S7iY/WLYA20q4bY+KpPmfRVslzIvCJx4PTS3qf\nko4brAxEZC/SxbOYmONN7K2xn9oYrmVKAZd67QIDAQABAoIBAHdHUp3rYT07u+L3\nck/HLkgezUxQVPmXWB2KvZDGbiraEs3ffdG7wP3Lm7Ff7ZN0WyMNWfrLV6kVvTqM\n8STW6beEBRGeP5IaommE1MAdSe1npv5nDtT2rAsppdnFzsbf9hoqLcIvz5V/xcP2\n9mniuEXsJvPcuSqF63dqoJENGYHJ0BsKUYUQkVtMDo2gQ5EX5wV1VeVndH7P5eBI\nh3/ZYzct2RdGlA7gY4fLmF6wegJUP8GfQqW7EfqcqK6pBmI4A4tKuIRqPVlRy3yf\nZhMjF2u8dqvFf+azcbvYYgPwSGi9Rlgvc2xmB7nczVStAfZgKyDdFLcPhH0Wcag0\nYRlYB4ECgYEA3c3+sUQm6FWcbyI6tyxbVpAxQqV15rUKI+NyspSwtqyRVhDZ7HIs\nz43EizlXWXlofZIkoQf87HiAKhTypIeCfkKNLEvXPT2rhCIbF+PH63Y/ZEfepdYZ\ndr8YVwbsrJZyzdAo9VzOQUoJ4Lpmk1A5WzFlYe7ugB+elPGfUJLisiUCgYEA3AkC\n+76V6XP2DLagdjNeIGKx6jDcKsh1NrmU/+9fe/0EAB8D/VASiLmWtomxHYmX7PsT\nBevBa4aTgJxQQlFapUokdYcl/k24uXMGi3oJJDxEi6eW9R8dIQioQfd9bmd/W84L\nPjOxSvzQkqdMlx5blqCBG8n527B2W/asZMgHNykCgYEArldxf3J7RpmsSWpVTo9O\nB/90yNb3kmzw2H66NAZN1HhWEJlUQdcIw+fB+lELCKg2aqVJp015D4Iz81/dzVc6\nSfYTsyK1v0xPGaAZPbDr/ndGopMfPajJAR55ikZGF+51tLKOzzWwZX9Fvl+lqtsf\nCkAMWWsOCqVP5/D38cRS7gUCgYEAj2pgQ22pkIxAp3CxjdlVVI5/oEFQf6JAo/a6\nI0cGWW5EmT+d/hGewvcUQM3mX3Y7S/8qGwXbABarNXys40zbZDi7Is9/+Az4hgdv\nEKHuK2wM0Wnefs5U0h8ubDC/1KIo5NGbimNu/41g9PWOekETOU5MWKyA6qxNuQtC\nuj2WVmECgYEAni0m8n4P2wgs0w0Rm38/UxmAY7rBgFqpVqni8x3ASNUOujkosXYc\nCTR+MANXfp/VcvjvoCIP5M9/I/vLRGkv51nR9+8dgj17uzK6WWZ7UmAzW0K3Tuxj\nlLBDRTY4xzreE/oCFQXIQ7843qC3sBwvAMbzR6n2TZkC1iaucbXiiWU=\n-----END RSA PRIVATE KEY-----',public_key='-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvqTVtATjtY+gsbrbdZul\nSwazoGNNJ3WoxjR2i2zZ+U8GhIWhKNdJJ/X4VuEaBKg1428JhAQ1+D35DywZyI9W\nRcLLXeUWGnw+qJ04ZTQ7TZn8sP9oia++FRAdMKVGoN6Kw6Q/glHfhKDlxsp/UYtj\nhai5ZqNBjMSgT6cLoq+HBeVrDgme7AZn00ur4YoYx49CvQXCSzQWX8gnsbkOMdts\nepcpUTQ3XAj34ijjE+0sbzMTKD6ldb1Xzp7QGRXhsqt6bUqxBwaIm+S7iY/WLYA2\n0q4bY+KpPmfRVslzIvCJx4PTS3qfko4brAxEZC/SxbOYmONN7K2xn9oYrmVKAZd6\n7QIDAQAB\n-----END PUBLIC KEY-----',key_format='PEM'

```

## Additional Information

* PKCE is not currently supported.

## References

https://en.wikipedia.org/wiki/OpenID#OpenID_Connect_(OIDC)

[https://oauth.net/2](https://oauth.net/2/)

https://pm.mieweb.com/issues/106834

https://pm.mieweb.com/issues/71437
