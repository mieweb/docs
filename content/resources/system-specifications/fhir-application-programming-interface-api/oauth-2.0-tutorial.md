---
id: '1y6n0lw4prz4Rg_7HKbhcgPN6p9y4wNa5m2dw4rr9Tfk'
title: 'OAuth 2.0 Tutorial'
date: '2022-10-24T17:40:03.843Z'
version: 336
lastAuthor: 'Sam Stuck'
mimeType: 'text/x-markdown'
links:
  - 'https://oauth.net/2/'
source: 'https://drive.google.com/open?id=1y6n0lw4prz4Rg_7HKbhcgPN6p9y4wNa5m2dw4rr9Tfk'
wikigdrive: '64fa77a2dd4586094b6074a78ed6769886b60894'
---
# OAuth 2.0 Overview  
  
OAuth 2.0 is the industry standard for allowing external applications access to protected resources. Additional information about the technology may be found at [https://oauth.net/2/](https://oauth.net/2/).

  
## App Registration  
  
Applications can be registered within the Login Trusts editor within the EHR. Contact your implementation specialist for assistance.
  
## Patient Standalone Launch  
  
Registered applications can utilize the OAuth 2.0 authorization code workflow in order to access the EHR.

Utilizing applications conforming to the SMART launch workflow, users will be directed to the EHR's Scope confirmation page.

On this page, individual accesses may be customized or denied altogether.
  
![](../oauth-2.0-tutorial.assets/100000000000024D000003A9E512DDE35DF1AC55.png)  

If allowed, the application will then be permitted to access the user's data via the FHIR API.
  
## EHR Launch  
  
The Quickview contains a FHIR Launch portlet which allows launching configured applications.

Navigate to the Quickview sidemenu tab
  
![](../oauth-2.0-tutorial.assets/10000000000003DB000001C70C0E56B3DBAD3017.png)  


Open the Select Portlets manager
  
![](../oauth-2.0-tutorial.assets/10000000000003DB000001C70E6B9C263A13A149.png)  

Select the FHIR Launch portlet
  
![](../oauth-2.0-tutorial.assets/10000000000001F300000244AD6BDD366A9426B8.png)  

Utilizing the links to the configured applications present in the FHIR Launch portlet will allow EHR Practitioner access to those applications.
  
![](../oauth-2.0-tutorial.assets/1000000000000259000001B92CBF914EFE4B3ECB.png)  

  
## Revocation of Access  
  
Users may revoke access to any applications previously granted access via the Token Administration tool.
  
![](../oauth-2.0-tutorial.assets/1000000000000741000003C39F434CC820EAC450.png)  

  
## SMART Backend Services  
  
Applications may utilize the FHIR Bulk access workflow order to consume EHR resources.  
The EHR supports authentication of JWT access tokens via out of band supplied JWKS url.
  
## Additional Information  

* PKCE is not currently supported.
