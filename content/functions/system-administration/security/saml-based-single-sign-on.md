---
id: '1sfnQQ7KCRFR7LWm6QKve7akqAgZpqnxCXQvPgcYoLlc'
title: 'SAML-Based Single Sign-On'
date: '2020-02-27T21:22:13.838Z'
version: 22
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language'
  - 'single-sign-on-sso.md'
  - 'single-sign-on-login-trust.md'
source: 'https://drive.google.com/open?id=1sfnQQ7KCRFR7LWm6QKve7akqAgZpqnxCXQvPgcYoLlc'
wikigdrive: '2abeb591fccd09f9dcebef69bca681875d9cdcb0'
menu:
  main:
    name: 'SAML-Based Single Sign-On'
    identifier: '1sfnQQ7KCRFR7LWm6QKve7akqAgZpqnxCXQvPgcYoLlc'
    parent: '15KoZbfqM4pYdbjCGSSBQzf1JC4NwpF3-KK3pjBDfxpY'
    weight: 5310
---
SSO access is a standard for users accessing protected information, such as patient data. Access is provided by creating and enabling a login trust. This allows users to access all  {{% system-name %}} services by signing in *one time*. When properly configured, users are redirected to the SSO login page to access the system, accordingly.  
The following document provides details and considerations for using Security Assertion Markup Language (SAML)-based single sign-on (SSO) with the  {{% system-name %}} systems.  {{% system-name %}} currently supports SAML 2.0 SP-initiated or IDP-initiated workflows with the HTTP-POST binding.  {{% system-name %}} provides a SAML-based SSO application program interface (API). For an in-depth review of SAML, see the public Wikipedia page: [https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language)  
The majority of this document was created for technical staff to utilize for SAML SSO configuration. The sections that follow are technical in nature. For a list of terminology commonly encountered as part of this topic, please see our [SSO Documentation](single-sign-on-sso.md).
  
## SAML in  **_{{% system-name %}}_**  

SAML assertions utilize most of the options detailed throughout the [SSO Login Trust](single-sign-on-login-trust.md) documentation. Note that in order to set up the  {{% system-name %}} system as a SAML service provider (SP), the following must be known about the identity provider (IDP):
* <strong>The IDP Issuer</strong>: This goes in the Domain field of the Login Trust.
* <strong>Public Key/Certificate</strong>: Used to authenticate the assertions.
{{% note %}}
  SAML provides an option for including the public key in the assertion. This can pose a significant security vulnerability, so  {{% system-name %}}  does not support this functionality. The public key must be provided prior to processing assertions.
{{% /note %}}
* <strong>IDP Sign On Service URL</strong>: This goes in the Login URL field.
Also, identify any steps required to ensure the IDP-specified subjects will be present in the  {{% system-name %}} system. This may be an interface which creates users, a configuration allowing the IDP to create new users, on demand, or a manual process within the  {{% system-name %}} system.
  
### Assertion Requirements  

The IDP must include the following information in the Assertion (shown in XPath notation):
//Assertion/Subject/NameID - This must be the  {{% system-name %}} username, or match a known translation, if enabled.
//Assertion/Issuer - This is the login trust Domain. Identifies the login_trusts entry (IDP) used for validating the assertion.
* XMLDSig - The XML Signature. Must validate using the public key on file for the identified IDP.
* If the Create New Users option has been enabled, the following are also required:
   * //Assertion/AttributeStatement/Attribute[@Name="lastname"]/AttributeValue
   * //Assertion/AttributeStatement/Attribute[@Name="firstname"]/AttributeValue
   * Optional:
      * //Assertion/AttributeStatement/Attribute[@Name="email"]/AttributeValue

```
  
  
{{% pre language="xml" theme="RDark" %}}  
  
  
  
 https://saml.example.com  
   
    
     
     
     
      
       
       
      
      
    5zno9n7vQQIc6bnVbiaUM4272xk=  
     
    
  LlHu/jHpIbQAskUs+S1YCqvAo+E+nZnNX3QHZMTJJQ3nCK6Q9ApQk4akUoEqKRd77oJ/PVOXoqnUfWIdE1Mbxg78LCtYSqzT1fvw3Jbwi+eG14+PgjMP5Izx1bTtvFrg2cWI7lOsFrIRxepBgbvD+krTcJMAxVHJSOeYciMM+Vw=  
   
   
    
   
   
  https://saml.example.com  
    
   e9f91ee7-8cd0-4017-9a6c-c8e13be33645  
     
      
     
    
    
     
    123456789  
     
    
    
     
    Sam  
     
    
    
     
    Jones  
     
    
    
     
    urn:oasis:names:tc:SAML:2.0:ac:classes:Password  
     
    
   
  

```
  

```
  
  
{{% /pre %}}  
  
  

```
  
  

