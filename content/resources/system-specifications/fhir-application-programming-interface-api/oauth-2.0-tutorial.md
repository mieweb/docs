---
id: '1y6n0lw4prz4Rg_7HKbhcgPN6p9y4wNa5m2dw4rr9Tfk'
title: 'OAuth 2.0 Tutorial'
date: '2022-10-24T17:40:03.843Z'
version: 338
lastAuthor: 'sstuck'
mimeType: 'text/x-markdown'
links:
  - 'https://oauth.net/2/'
source: 'https://drive.google.com/open?id=1y6n0lw4prz4Rg_7HKbhcgPN6p9y4wNa5m2dw4rr9Tfk'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
# OAuth 2.0 Overview

OAuth 2.0 is the industry standard for allowing external applications access to protected resources. Additional information about the technology may be found at https://oauth.net/2/.

## App Registration

Applications can be registered within the Login Trusts editor within the EHR. Contact your implementation specialist for assistance.

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
