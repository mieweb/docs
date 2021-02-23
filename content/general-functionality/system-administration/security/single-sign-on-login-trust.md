---
title: "Single Sign-On Login Trust"
date: 2020-02-27T21:22:18.806Z
url: "general-functionality/system-administration/security/single-sign-on-login-trust.html"
author: aquandt
version: 27
id: 1ao-kbdPxNzKp7H9ja8fzZHFKQxLixPcSJGO9qq5o4IM
source: https://drive.google.com/open?id=1ao-kbdPxNzKp7H9ja8fzZHFKQxLixPcSJGO9qq5o4IM
menu:
    main:
        name: "Single Sign-On Login Trust"
        identifier: "1ao-kbdPxNzKp7H9ja8fzZHFKQxLixPcSJGO9qq5o4IM"
        parent: "15KoZbfqM4pYdbjCGSSBQzf1JC4NwpF3-KK3pjBDfxpY"
        weight: 5300
---
The following instructions provide users with the necessary procedural details to enable single sign-on (SSO) via [SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) in the {{% system-name %}} system.

For more information on login trust terminology, see our [SSO Documentation](single-sign-on-sso.html).

## {{% system-name %}} and SAML Metadata

Beginning with RC201906, {{% system-name %}} can natively import and export SAML metadata files commonly used for setup between IDPs and SPs.

Older systems can utilize the *Manually Creating the Login Trust from SAML Metadata* instructions found below.

The first step is an exchange of metadata files. The Login Trusts editor under Control Panel → SuperUser is the access point for importing and exporting these files.

## Client-Provided Metadata

The information used to populate a new login trust is found in the IDP's SAML metadata file from the client. The client should provide a copy of this file to the {{% system-name %}} Implementation Specialist.  This file may be in the form of an internet URL, email attached file, or a block of text shared with the Specialist.

For additional client requirements information, see our [SAML-based SSO documentation](saml-based-single-sign-on.html).

## {{% system-name %}} -Provided Metadata

{{% system-name %}} is able to publish it's SAML SP metadata in three ways: an Internet URL, a file download which may be emailed to the client or block of text which may be copy/pasted in communications to the client.

![](../../../external_files/c4078ba6c7d555c3b2937a6dfda6a89b.png)

Once this metadata has been shared with them, most IDPs will then share their metadata with us.

## Setting up SAML in {{% system-name %}}

The IDP metadata file will be imported into the {{% system-name %}} system via the Import Metadata link in the Login Trusts editor.

![](../../../external_files/dd3b9d3ddad6419e52afc9689bc0d494.png)

The relevant data will be extracted from the metadata file and displayed in the Add Login Trust screen, as described below in Login Trust Fields.

![](../../../external_files/77291c383d82c2855677736159b34e7a.png)

Verify the information and then click the Submit button at the bottom.

![](../../../external_files/acae19d0df556df47117f5d9701c1505.png)

The SAML IDP will now be available on the system's Login page under the Remote Log In heading.

![](../../../external_files/b4151fdde14b4322dc3a9c006e368614.png)

## Removing the Login page

Once an SSO connection has been configured and tested, the  login page can now be disabled. This is accomplished by making an SSO server the system Default authentication mechanism.

In the listing of the Login Trusts editor, there is an option for "Make Default". This link is used to disable the login page and direct all authentication requests to that specific SSO server.

![](../../../external_files/34a0d90f23d11f23572a33059d1a3d38.png)

## Login Trust Fields

The {{% system-name %}} **Add Login Trust** screen displays the following options:

![](../../../external_files/60c4a739669b704f7e9dd94e65524fe2.png)

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

* Open the SAML metadata file provided by the client.
* Log into the system.
* Navigate to the <strong>Control Panel</strong> on the left side menu.
* Click the <strong>Login Trusts</strong> tab.  ![](../../../external_files/867cbe88510ee77ebe0e0da15613a0bb.png)
* Click the <strong>Add Login Trust </strong>link, in the top-right of the page.
* In the received metadata file, search for <strong>entityID</strong>, to locate the <strong>Domain</strong>.  ![](../../../external_files/9a11adebc95ba79927d13240e42e0856.png)
* Enter that URL into the <strong>Domain</strong> field.
* Enter the appropriate client information into the <strong>Description</strong> field.
* Select the <strong>Allow SAML requests from this domain</strong> checkbox.
* Select the <strong>Use Shibboleth specific target instead of TargetResource in SAML Requests</strong> checkbox. <em>Skip this step if not a Shibboleth system.</em>
* Search the metadata file for <strong>IDPSSODescriptor</strong>, to find the remainder of the information necessary to populate the login trust form.
* Sections after the heading <strong>AttributeAuthorityDescriptor</strong>, if present, can be collapsed by clicking the chevron in front of it. All information collected for the {{% sys-name %}} login trust (aside from the domain) appears under the heading <strong>IDPSSODescriptor</strong>.
* In the metadata file, search for <strong>SingleSignOnService</strong>, to locate the login URL. The URL should indicate what type of SSO is used (in this case, IDP-initiated). 

{{% info %}} There may be multiple options for **SingleSignOnService**. It is important to pick the correct one. In most cases, and in this example, the link that includes the HTTP-redirect is correct. {{% /info %}}

* Enter the URL in the <strong>Login URL</strong> field.
* Search the metadata file for <strong>X509Certificate</strong> to find the public key.
* Enter the X509 Certificate information into the <strong>Public Key</strong> field. This public key should be a long string of characters.
* The X509 certificate information must begin with <strong>—</strong>BEGIN CERTIFICATE<strong>—</strong> and end with <strong>—</strong>END CERTIFICATE<strong>—</strong>.
* The certificate itself must have a multiple of 4 and be less than 80 characters, per line.
* Select X509 from the <strong>Key Format</strong> dropdown.
* Click the <strong>Submit</strong> button. A status message displays.
* Click the <strong>View List</strong> button to view the login trusts.
