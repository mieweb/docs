---
title: "ADFS 3.0 Configuration for SSO"
date: "2020-02-27T20:26:04.497Z"
url: "functions/system-administration/security/adfs-3.0-configuration-for-sso.html"
version: 38
id: "15eZmf2L3oj-KaYbjeWGVut1tWKU-miUYPKINCy1h8DM"
source: "https://drive.google.com/open?id=15eZmf2L3oj-KaYbjeWGVut1tWKU-miUYPKINCy1h8DM"
menu:
    main:
        name: "ADFS 3.0 Configuration for SSO"
        identifier: "15eZmf2L3oj-KaYbjeWGVut1tWKU-miUYPKINCy1h8DM"
        parent: "15KoZbfqM4pYdbjCGSSBQzf1JC4NwpF3-KK3pjBDfxpY"
        weight: 5270
---
This document assumes that the ADFS 3.0 software component is properly configured in the Active Directory domain.

## Exchange XML Metadata Files

* Locate your ADFS XML metadata. This information can be found at this address: https://[SERVER_FQDN]/FederationMetadata/2007-06/FederationMetadata.xml
* Download the XML file, or copy and paste the text into a text document, and send this to MIE.
* MIE will send back an XML metadata file. Save this file on the ADFS server and be sure the file extension is XML.

## Add Relying Party Trust

* On the ADFS server, open the Server Manager.
* Click <strong>Tools</strong>, and select <strong>AD FS Management</strong>    ![](adfs-3.0-configuration-for-sso.images/image1.png)   
* In the AD FS Management MMC, expand AD FS and Trust Relationships.
* Click on <strong>Add Relying Party Trust</strong> in the right pane (or from the context [right-click] menu on the folder tree).    ![](adfs-3.0-configuration-for-sso.images/image3.png)   
* Click <strong>Start</strong>.    ![](adfs-3.0-configuration-for-sso.images/image2.png)   
* Select <strong>Import data about the relying party from a file</strong>.
* Browse to and select the XML document that was provided by MIE.
* Click <strong>Next</strong>.    ![](adfs-3.0-configuration-for-sso.images/image5.png)   
* Give the Relying Party a proper name and description, and then click <strong>Next</strong>.
* Leave this set to <strong>I do not want to configure multi-factor authentication settings…</strong>
* Click <strong>Next</strong>.    ![](adfs-3.0-configuration-for-sso.images/image4.png)   
* Leave this set to <strong>Permit all users to access this relying party</strong>, and then click <strong>Next</strong>.    ![](adfs-3.0-configuration-for-sso.images/image7.png)   
* Click <strong>Next</strong> - <em>Do not change any settings on this page</em>.    ![](adfs-3.0-configuration-for-sso.images/image6.png)

## Edit Claim Rules

* In the AD FS MMC, expand the Trust Relationships and click on Relying Parties Trusts.
* Right-click the new Relying Party that was just created, and select <strong>Edit Claim Rules…</strong>    ![](adfs-3.0-configuration-for-sso.images/image9.png)   
* Click <strong>Add Rule…</strong>
* Select <strong>Send LDAP Attributes as Claims</strong> from the dropdown list.
* Click <strong>Next</strong>.    ![](adfs-3.0-configuration-for-sso.images/image8.png)   
* In the <strong>Claim rule name</strong> field enter <em>Get LDAP Attributes</em>.
* For the <strong>Attribute store</strong> field, select <em>Active Directory</em> from the drop down list.
* In the mapping table, select <em>E-Mail-Addresses</em> from the dropdown list under <strong>LDAP Attribute</strong> (<strong>Select type…</strong>).
* Select <em>E-Mail Address</em> from the dropdown list under the <strong>Outgoing Claim Type…</strong>
* Click <strong>Finish</strong>.    ![](adfs-3.0-configuration-for-sso.images/image12.png)
* Click <strong>Add Rule…</strong>, again.
* Select <em>Transform an Incoming Claim</em> from the <strong>Claim rule template</strong> dropdown list.
* Click <strong>Next</strong>.    ![](adfs-3.0-configuration-for-sso.images/image10.png)   
* Name the Claim rule <strong>Email to Name ID</strong>.
* Select <em>E-Mail Address</em> from the <strong>Incoming claim type</strong> dropdown list.
* Select <em>Name ID</em> from the <strong>Outgoing claim type</strong> dropdown list.
* Select <em>Email</em> from the <strong>Outgoing name ID format</strong> dropdown list.
* Click <strong>Finish</strong>.    ![](adfs-3.0-configuration-for-sso.images/image11.png)   
* Click <strong>OK</strong>.    ![](adfs-3.0-configuration-for-sso.images/image13.png)

## Set Relying Partying SAML Logout Endpoint & Secure Hash Algorithm

* In the AD FS MMC, expand the Trust Relationships and click on Relying Parties Trusts.
* Double-click the new Relying Party Trust (or right-click and select Properties).
* Click the <strong>Endpoints</strong> tab.
* Click <strong>Add SAML…</strong>
* Select <em>SAML Logout</em> from the <strong>Endpoint type</strong> dropdown menu.
* Make sure that <em>POST</em> is selected from the <strong>Binding</strong> drop down menu.
* Enter the ADFS server sign-out URL in the <strong>Trusted URL</strong> field. The default URL is: https://[SERVER_FQDN]/adfs/ls/?wa=wsignout1.0
* Click <strong>OK</strong> to close the Add an Endpoint window.    ![](adfs-3.0-configuration-for-sso.images/image14.png)



## Configure AD Access Groups (Optional)

* In the AD FS MMC, expand the Trust Relationships and click on Relying Parties Trusts.
* Right-click the new Relying Party just created, and select <strong>Edit Claim Rules…</strong>
* Click the <strong>Issuance Authorization Rule</strong> tab.
* Click <strong>Add Rule…</strong>    ![](adfs-3.0-configuration-for-sso.images/image15.png)   
* Select <strong>Permit or Deny Users Based on Incoming Claim</strong> from the dropdown list.    ![](adfs-3.0-configuration-for-sso.images/image16.png)   
* Enter a claim rule name.
* Select the appropriate criteria from the <strong>Incoming claim type</strong> drop down list. In this example, we are basing it on AD group.    ![](adfs-3.0-configuration-for-sso.images/image17.png)

## Restart the ADFS Service

* On your ADFS server, open the Server Manager.
* Click <strong>Tools</strong>, and select <strong>Services</strong>.    ![](adfs-3.0-configuration-for-sso.images/image18.png)   
* Right-click the <strong>Active Directory Federation Services</strong> service.
* Click <strong>Restart</strong>.    ![](adfs-3.0-configuration-for-sso.images/image19.png)

## Customize ADFS User Sign-in Page (Optional)

Options for changing the way your user sign-in page looks and behaves can be found here:

[https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/ad-fs-user-sign-in-customization](https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/ad-fs-user-sign-in-customization)

