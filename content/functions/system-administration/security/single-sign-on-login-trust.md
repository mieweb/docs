---
id: '1ao-kbdPxNzKp7H9ja8fzZHFKQxLixPcSJGO9qq5o4IM'
title: 'Single Sign-On Login Trust'
date: '2025-07-23T14:53:01.471Z'
version: 239
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language'
  - 'single-sign-on-sso.md'
  - 'saml-based-single-sign-on.md'
source: 'https://drive.google.com/open?id=1ao-kbdPxNzKp7H9ja8fzZHFKQxLixPcSJGO9qq5o4IM'
wikigdrive: 'v2.15.30'
---
The following instructions provide users with the necessary procedural details to enable single sign-on (SSO) via [SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) in the {{% system-name %}} system.

For more information on login trust terminology, see our [SSO Documentation](single-sign-on-sso.md).

## SAML Metadata

Beginning with RC201906, {{% system-name %}} can natively import and export SAML metadata files commonly used for setup between IDPs and SPs.

Older systems can utilize the *Manually Creating the Login Trust from SAML Metadata* instructions found below.

The first step is an exchange of metadata files. The Login Trusts editor under Control Panel → SuperUser is the access point for importing and exporting these files.

## Client-Provided Metadata

The information used to populate a new login trust is found in the IDP's SAML metadata file from the client. The client should provide a copy of this file to the {{% system-name %}} Implementation Specialist.  This file may be in the form of an internet URL, email attached file, or a block of text shared with the Specialist.

For additional client requirements information, see our [SAML-based SSO documentation](saml-based-single-sign-on.md).

## Provided Metadata

{{% system-name %}} is able to publish it's SAML SP metadata in three ways: an Internet URL, a file download which may be emailed to the client or block of text which may be copy/pasted in communications to the client.

![](./single-sign-on-login-trust.assets/ec8f773bd17136ba2f4591319fc7f746.png)

Once this metadata has been shared with them, most IDPs will then share their metadata with us.

## Setting up SAML

The IDP metadata file will be imported into the {{% system-name %}} system via the Import Metadata link in the Login Trusts editor.

![](./single-sign-on-login-trust.assets/8a941ddf026b2fe6f2337b4a9261149b.png)

The relevant data will be extracted from the metadata file and displayed in the Add Login Trust screen, as described below in Login Trust Fields.

![](./single-sign-on-login-trust.assets/c94bfa4f462f8f07512a0851dd30858a.png)

Verify the information and then click the Submit button at the bottom.

![](./single-sign-on-login-trust.assets/c6b03998c837ea7301b199f9c8147272.png)

The SAML IDP will now be available on the system's Login page under the Remote Log In heading.

![](./single-sign-on-login-trust.assets/d014dffed34b89b8324b7fb00b2539c1.png)

## Removing the Login page

Once an SSO connection has been configured and tested, the  login page can now be disabled. This is accomplished by making an SSO server the system Default authentication mechanism.

In the listing of the Login Trusts editor, there is an option for "Make Default". This link is used to disable the login page and direct all authentication requests to that specific SSO server.

![](./single-sign-on-login-trust.assets/9f69feed9741896e1942c8dbe414ff9c.png)

## Login Trust Fields

The {{% system-name %}} **Add Login Trust** screen displays the following options:

![](./single-sign-on-login-trust.assets/074115e061da6d47093885424d8d46fc.png)

The following list provides details and insight on using the fields available on the Add Login Trust screen:

**Domain** – **Required Field**: URL for single sign-on service domain.

* Found in the SAML metadata file with label <strong>entityID</strong>.
* This string must be alphanumeric and no more than 255 characters in length.

**Description** – **Required Field**: Text description of login trust.

* May be displayed to users at certain points during the login/logout process, and should be user-friendly.
* This string must be no more than 255 characters in length.

**Allowed Options**: Selected checkboxes will change the behavior of the SSO system. The following options are available:

* <strong>Make this Domain active</strong>: Required for the MIE SSO method.
* <strong>Allow a(n otherwise) successfully processed login ticket to re-activate login-disabled users</strong>: Reactivates an inactive {{% system-name %}} user when that user attempts to log in via the employer SSO system.
* <strong>Allow creation of new users from (otherwise) successfully processed login ticket</strong>: Creates a new {{% system-name %}} user when that person attempts to log in via the employer SSO system.
    * XML Login Tickets or SAML assertions are recommended for use with this option.
* <strong>Allow this domain to be used for OpenID authentication</strong>: Processes OpenID SSO requests. Required for use with OpenID.
* <strong>Pass current page's CGI variables to the login_url when re-authenticating</strong>: When a login session expires, the main window directs the user through the SSO server. If unchecked, expired sessions create a pop-up window to re-establish a valid user session.
    * The SSO server (IDP) must support this option.
* <strong>Only allow translated users to login</strong>: Requires all login requests to reference a known username via translation. Login requests which do not have a translation to an established {{% system-name %}} username will be rejected. This is generally used in conjunction with a periodic user import process or HR feed.
    * This option allows the {{% sys-name %}} system to dictate which users have access through SSO.
* <strong>Users may be, but need not be, translated</strong>: Translation allows lookup of the IDP-specified username against a lookup table. This allows the IDP and the {{% system-name %}} system to use a different identifier (username) for a user.
* <strong>Allow SAML requests from this domain</strong>: Indicates that SAML requests (assertions) are allowed from the listed domain.
* <strong>Use |System| initiated SAML instead of server initiated</strong>: Utilize SP-initiated bindings instead of IDP-initiated.
* <strong>Close the window on logout</strong>: For IDPs that log the user into {{% system-name %}} using a pop-up window; this closes that window once their session ends.
* <strong>Remove the question mark ( ? ) character from the target resource</strong>: For IDPs that require state variables be passed as part of the URL instead of as CGI variables to the URL. This is not common.
* <strong>Put a link to the domain on the login page</strong>: The login page will have a list of links to these IDPs, in addition to the standard non-SSO login form.
* <strong>Use RelayState instead of TargetResource in SAML requests</strong>: Some IDPs require a RelayState variable instead of a TargetResource variable.
    * Known IDPs requiring this to be checked include <strong>ADFS</strong>.  If you do not check this box, users will lose their place when their session expires.
* <strong>Use Shibboleth specific ‘target' instead of TargetResource in SAML Requests</strong>: Use with Shibboleth systems.

**Login URL**: The URL that users are redirected to for obtaining a new session when they do not have one, or when an existing session becomes invalid.

* If this URL forwards any additional CGI variables sent to it, make sure the <em>Pass current page's CGI Variables</em> option is checked. This will present a more seamless experience to the user.

{{% info %}}
Unless a Logout URL is also set, users will be redirected to this URL when they ask to have their session terminated.
{{% /info %}}

* This URL does not need to be accessible from within the MIE network.
* This URL must be accessible to all users who will utilize the SSO method.

**Logout URL**: Optional URL for users to be redirected to when they choose to end their session. If this is not provided, they will be sent to the Login URL.

**Public Key**: The key used to determine the validity of the SAML assertion or *login_signature* CGI variable. This will be provided by the SSO provider.

* The public key is also used to validate the digital signature in the SAML assertion.
* This key must be generated from the private key of the IDP. The private key should not be shared with MIE or any other entity.
* The most common key formats are PEM and X.509 certificate.

**Private Key**: May be used instead of the Public Key, but this would be extremely rare. Leave this field blank.

**Key Format**: The format of the Public/Private Key.

**Digest**: The hash algorithm used by the SSO provider for signing the login_ticket. SHA-256 is recommended.

* This option is specific to MIE SSO.
* SSO using SAML will ignore this field.

**Password Required**: This will generally not be used.

**Login Threshold**: Sets the frame of time for which a login_ticket is considered valid.

* This option is specific to MIE SSO.
* The default value is 180 seconds after the timestamp in the login_ticket. Additionally, login_tickets are only recognized as valid 15 seconds before the timestamp in the login_ticket.
* Systems with high network latency or a desire for a more strict security profile may request a customization of these times.

**Default Security Role**: Only needed if the *Allow Creation of New Users* option was selected. Newly created users will be assigned to the chosen Security Role.

**Default User Department**: Only needed if the *Allow Creation of New Users* option was selected. Newly created users will be placed into the chosen department (realm).

**Associate to an Employer Organization/Associated Employer Organization**: Allows each PO to manage its own SSO configuration without being able to access others.

### Manually Creating the Login Trust from SAML Metadata

The following instructions account for a system that is Shibboleth IDP-initiated, so be sure to adjust configuration, accordingly for other solutions.

To create a login trust for SSO:

1. Open the SAML metadata file provided by the client.
2. Log into the system.
3. Navigate to the <strong>Control Panel</strong> on the left side menu.
4. Click the <strong>Login Trusts</strong> tab.

    ![](./single-sign-on-login-trust.assets/37e061e9810bc8a611cbc3f4417cec8d.png)
5. Click the <strong>Add Login Trust</strong> link, in the top-right of the page.
6. In the received metadata file, search for <strong>entityID</strong>, to locate the <strong>Domain</strong>.

    ![](./single-sign-on-login-trust.assets/3bac18e766b99b1015cc7c94af23c2d7.png)
7. Enter that URL into the <strong>Domain</strong> field.
8. Enter the appropriate client information into the <strong>Description</strong> field.
9. Select the <strong>Allow SAML requests from this domain</strong> checkbox.
10. Select the <strong>Use Shibboleth specific target instead of TargetResource in SAML Requests</strong> checkbox. <em>Skip this step if not a Shibboleth system.</em>
11. Search the metadata file for <strong>IDPSSODescriptor</strong>, to find the remainder of the information necessary to populate the login trust form.
12. Sections after the heading <strong>AttributeAuthorityDescriptor</strong>, if present, can be collapsed by clicking the chevron in front of it. All information collected for the {{% sys-name %}} login trust (aside from the domain) appears under the heading <strong>IDPSSODescriptor</strong>.
13. In the metadata file, search for <strong>SingleSignOnService</strong>, to locate the login URL. The URL should indicate what type of SSO is used (in this case, IDP-initiated).

{{% info %}}
There may be multiple options for **SingleSignOnService**. It is important to pick the correct one. In most cases, and in this example, the link that includes the HTTP-redirect is correct.
{{% /info %}}

14. Enter the URL in the <strong>Login URL</strong> field.
15. Search the metadata file for <strong>X509Certificate</strong> to find the public key.
16. Enter the X509 Certificate information into the <strong>Public Key</strong> field. This public key should be a long string of characters.
17. The X509 certificate information must begin with <strong>—</strong>BEGIN CERTIFICATE<strong>—</strong> and end with <strong>—</strong>END CERTIFICATE<strong>—</strong>.
18. The certificate itself must have a multiple of 4 and be less than 80 characters, per line.
19. Select X509 from the <strong>Key Format</strong> dropdown.
20. Click the <strong>Submit</strong> button. A status message displays.
21. Click the <strong>View List</strong> button to view the login trusts.

### Updating a Certificate for SSO Login Trust

Do not perform this action unless you are certain that the new certificate is valid and has been configured as the **primary** certificate on the identity provider side.

During the certificate update process, **SSO authentication will be temporarily unavailable**, which means users will not be able to log in via SSO during the switchover. Plan the update accordingly to minimize user impact.

{{% info %}}
To access the Login Trust section, the user must have the Manage Login Trust role.

![](./single-sign-on-login-trust.assets/8cced263aef44e59008bd9429e161012.png)
{{% /info %}}

Starting with **RC202409**, the certificate associated with a login trust can be updated in two ways:

#### Option 1: Manual Update via the Login Trust Record

1. Navigate to the <strong>Control Panel</strong> on the left side menu.
2. Click the <strong>Login Trusts</strong> tab.
3. Open the relevant Login Trust record.
4. Locate the <strong>Signature Verification</strong> section.
5. Paste the updated certificate content (typically in PEM format).

![](./single-sign-on-login-trust.assets/3ffb12f26609622bf9c17a3cb2d779a2.png)

6. Click the Submit button.

#### Option 2: Importing Metadata (Available from RC202409)

Starting with **RC202409**, certificate updates can be streamlined by importing metadata:

1. Navigate to <strong>Control Panel > Login Trust</strong>.
2. Use the <strong>Import Metadata</strong> option.
3. Provide the metadata URL or upload a metadata file containing the updated certificate.

If the certificate contained in the metadata is identical to the currently configured one, the system will return the message:

![](./single-sign-on-login-trust.assets/692afaf69d305b3b2c0798e958d2db36.png)

If the certificate differs, a comparison view will be presented, showing the current and new certificate side by side. It is important to verify the certificate's validity period to ensure that the new certificate is active and correctly configured.

![](./single-sign-on-login-trust.assets/af9f841555138b66d672cb9173f30f6b.png)

4. Click the <strong>Update public key</strong> button.

![](./single-sign-on-login-trust.assets/a15d9ec23f2ae62392e95d3c14e34333.png)

The certificate from the metadata will automatically replace the existing public key.
