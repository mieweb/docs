---
id: '1vM0Bfw1f83jrfNAzCfM_vKp-YBldELtjEGMfwafO3OA'
title: 'Single Sign-On (SSO)'
date: '2020-02-27T21:22:11.490Z'
version: 35
lastAuthor: 'Alan Quandt'
mimeType: 'text/x-markdown'
links:
  - 'saml-based-single-sign-on.md'
  - 'https://en.wikipedia.org/wiki/Single_sign-on_'
  - 'single-sign-on-login-trust.md'
source: 'https://drive.google.com/open?id=1vM0Bfw1f83jrfNAzCfM_vKp-YBldELtjEGMfwafO3OA'
wikigdrive: 'dc9ec4e15828d59cf43699483d3f3e6ddbe5d23a'
---
The following document provides a general overview of using single sign-on (SSO) with {{% system-name %}} . SSO access is a standard for users accessing protected information, such as patient data. Access is provided by creating and enabling a login trust, so that when properly configured, users are redirected to a SSO login page to access the appropriate system(s), accordingly.  
There are differences in the SSO setup depending on the method of SSO employed. Available options currently include MIE SSO or [Security Assertion Markup Language (SAML)](saml-based-single-sign-on.md). All methods of SSO use a common editor for configuring the system to accept SSO requests. {{% system-name %}} provides a SAML-based SSO application program interface (API), and uses this SAML-based SSO API to integrate into a client's existing IDP (i.e., LDAP). To use SSO, a set of public and private keys are generated, typically from an X.509 certificate. The public keys and/or certificate must be generated (RSA or DSA algorithm) and registered with {{% sys-name %}} .
The sections that follow provide an overview of SSO, related features in the {{% system-name %}} system, and the basic details of login trusts in {{% sys-name %}} . This document does not cover installation of an identity provider by an outside entity, as it is not covered by MIE policies. For a more in-depth discussion of SSO, see the public Wikipedia page: [https://en.wikipedia.org/wiki/Single_sign-on](https://en.wikipedia.org/wiki/Single_sign-on_)

## Terminology

It is useful to recognize the following terminology in relation to single sign-on. The terms listed in this section are commonly encountered as a part of this topic:
* <strong>Application Program Interface</strong> (<strong>API</strong>): A set of routines, protocols, and tools for building software applications. The API specifies how software components should interact, and are used when programming graphical user interface (GUI) components.
* <strong>Binding/SAML Binding</strong>: Refers to a supported workflow.
  * IDP-Initiated Binding: A workflow in which the end user begins the authentication process by browsing to the SSO Server.
  * SP-Initiated Binding: A workflow in which the end user begins the authentication process by browsing to the {{% system-name %}} system.
* <strong>CGI Variable</strong>: A CGI (Common Gateway Interface) is a standard environment for web servers to interface with executable programs installed on a server, which generate web pages dynamically. A CGI variable is a user-supplied input (such as entering text into an open field).
* <strong>Client System</strong>: The {{% system-name %}} system that allows logins from a given IDP.
* Digital Signature Algorithm (<strong>DSA</strong>): A Federal Information Processing Standard for digital signatures.
* <strong>Identity Provider</strong> (<strong>IDP</strong>): Also known as Identity Assertion Provider, the IDP provides identifiers for users looking to interact with a system, asserting to such a system that such an identifier presented by a user is known to the provider, and possibly providing other information about the user that is known to the provider. An IDP, then, is any entity external to {{% system-name %}} , which is capable of generating a login assertion or ticket/signature usable by {{% system-name %}} .
* <strong>Lightweight Directory Access Protocol</strong> (<strong>LDAP</strong>): A directory service protocol that provides a mechanism to connect to, search, and modify Internet directories. LDAP directories are used by organizations to provide user access across multiple systems.
* <strong>Login Signature</strong>: A CGI variable which is a verifiable signature of the login ticket using a known public key.
* <strong>Login ticket</strong>: A CGI variable specifying an IDP and containing information about a user.
* <strong>SAML Metadata File:</strong> An XML file which is exchanged between a SAML SP and a SAML IDP containing information such as URLs, cryptography keys and information about required data fields. Both the IDP and the SP will provide such a file.
* <strong>OpenID</strong>: Authentication protocol. OpenID allows users to be authenticated by cooperating sites (known as Relying Parties or RPs) using a third-party service, eliminating the need for webmasters to provide ad hoc login systems, thus allowing users to login to multiple unrelated websites without having to have a separate identity and password for each.
* <strong>Private Key</strong>: In cryptography, a private key is an encryption/decryption key known only to the party or parties that exchange private messages.
* <strong>Public Key</strong>: In cryptography, a public key is a value provided by some designated authority as an encryption key that, combined with the private key from which the public key is derived, can be used to effectively encrypt messages and produce digital signatures.
* Security Assertion Markup Language (<strong>SAML</strong>): An extensible markup language (XML) standard that allows secure web domains to exchange user authentication and authorization data. SAML allows an online service provider to contact a separate online identity provider in order to authenticate users.
* <strong>SAML Assertion</strong>: An assertion is a package of information that supplies one or more statements made by a SAML authority.
* <strong>Service Provider</strong> (<strong>SP</strong>): A service provider is a website that hosts applications. {{% system-name %}} is a Service Provider.
* <strong>Shibboleth</strong>: A single-source single sign-on system based on SAML which is often used by universities or public service organizations.
* <strong>Sign-in Request</strong>: Refers to a client user that is attempting to log into {{% system-name %}} through the SSO system of the employer.
* <strong>RSA Algorithm</strong>: Named after the three men who invented the algorithm, the RSA cryptosystem is the most widely-used public key cryptography algorithm in the world. It can be used to encrypt a message without the need to exchange a secret key, separately. The RSA Algorithm can be used for both public key encryption and digital signatures.
* <strong>X.509 Certificate</strong>: A digital certificate that uses the widely accepted international X.509 public key infrastructure (PKI) standard to verify that a public key belongs to the user, computer, or service identity.

## SSO Setup

SSO is enabled by creating a login trust in the {{% sys-name %}} system. For details on how to create a login trust, see our [SSO Login Trust](single-sign-on-login-trust.md) online help documentation.

### Client-Provided Metadata

The information used to populate a new login trust is found in the SAML IDP metadata file of the client. The client will need to provide a copy of this file in order to populate the (SP) login trust form within {{% system-name %}} . The login trust is based on information found under the **IDPSSODescriptor** heading. For additional information, see our [SAML-based SSO documentation](saml-based-single-sign-on.md).
