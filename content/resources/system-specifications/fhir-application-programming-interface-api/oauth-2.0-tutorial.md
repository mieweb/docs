---
id: '1y6n0lw4prz4Rg_7HKbhcgPN6p9y4wNa5m2dw4rr9Tfk'
title: 'OAuth 2.0 Tutorial'
date: '2024-07-11T11:56:56.640Z'
version: 426
lastAuthor: 'horner'
mimeType: 'text/x-markdown'
links:
  - 'https://en.wikipedia.org/wiki/OpenID#OpenID_Connect_(OIDC)'
  - 'https://oauth.net/2/'
  - 'https://pm.mieweb.com/issues/106834'
  - 'https://pm.mieweb.com/issues/71437'
source: 'https://drive.google.com/open?id=1y6n0lw4prz4Rg_7HKbhcgPN6p9y4wNa5m2dw4rr9Tfk'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
# OAuth 2.0 Overview

OAuth 2.0 is the industry standard for allowing external applications access to protected resources. See [References for more about OAuth](#references)

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

## Patient Standalone Launch

Registered applications can utilize the OAuth 2.0 authorization code workflow in order to access the EHR.

Utilizing applications conforming to the SMART launch workflow, users will be directed to the EHR's Scope confirmation page.

On this page, individual accesses may be customized or denied altogether.

![](../oauth-2.0-tutorial.assets/9342a1b459cf31ae58c01edf74094894.png)

If allowed, the application will then be permitted to access the user's data via the FHIR API.

## EHR Launch

The Quickview contains a FHIR Launch portlet which allows launching configured applications.

Navigate to the Quickview sidemenu tab

![](../oauth-2.0-tutorial.assets/96badb5c6f9b75b63741a94bb9c552f2.png)

Open the Select Portlets manager

![](../oauth-2.0-tutorial.assets/c1629683b0a19ba5d8c3a9b36295fa1c.png)

Select the FHIR Launch portlet

![](../oauth-2.0-tutorial.assets/04d97094b29274c805888eb83963ad69.png)

Utilizing the links to the configured applications present in the FHIR Launch portlet will allow EHR Practitioner access to those applications.

![](../oauth-2.0-tutorial.assets/758ff21d8af26d1e930bcb8aed3706e4.png)

## Revocation of Access

Users may revoke access to any applications previously granted access via the Token Administration tool.

![](../oauth-2.0-tutorial.assets/1c635a0c5501b22f3688af9a5ba043cd.png)

## SMART Backend Services

Applications may utilize the FHIR Bulk access workflow order to consume EHR resources.

The EHR supports authentication of JWT access tokens via out of band supplied JWKS url.

## Additional Information

* PKCE is not currently supported.

## References

https://en.wikipedia.org/wiki/OpenID#OpenID_Connect_(OIDC)

[https://oauth.net/2](https://oauth.net/2/)

https://pm.mieweb.com/issues/106834

https://pm.mieweb.com/issues/71437
