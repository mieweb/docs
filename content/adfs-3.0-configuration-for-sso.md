---
title: "ADFS 3.0 Configuration for SSO"
date: 2020-02-27T20:26:04.497Z
url: "adfs-3.0-configuration-for-sso.md"
id: 15eZmf2L3oj-KaYbjeWGVut1tWKU-miUYPKINCy1h8DM
source: https://drive.google.com/open?id=15eZmf2L3oj-KaYbjeWGVut1tWKU-miUYPKINCy1h8DM
menu:
    main:
        name: "ADFS 3.0 Configuration for SSO"
        identifier: "15eZmf2L3oj-KaYbjeWGVut1tWKU-miUYPKINCy1h8DM"
        parent: "15KoZbfqM4pYdbjCGSSBQzf1JC4NwpF3-KK3pjBDfxpY"
        weight: 5290
---
This document assumes that the ADFS 3.0 software component is properly configured in the Active Directory domain.

## Exchange XML Metadata Files

* Locate your ADFS XML metadata. This information can be found at this address: https://[SERVER_FQDN]/FederationMetadata/2007-06/FederationMetadata.xml
* Download the XML file, or copy and paste the text into a text document, and send this to MIE.
* MIE will send back an XML metadata file. Save this file on the ADFS server and be sure the file extension is XML.

## Add Relying Party Trust

* On the ADFS server, open the Server Manager.
* Click <strong>Tools</strong>, and select <strong>AD FS Management</strong>    ![](external_files/f99a449cdd1c425dd95fa3c9bcb69249.png)   
* In the AD FS Management MMC, expand AD FS and Trust Relationships.
* Click on <strong>Add Relying Party Trust</strong> in the right pane (or from the context [right-click] menu on the folder tree).    ![](external_files/d7005885edd6e527c6bef405ee7e8de9.png)   
* Click <strong>Start</strong>.    ![](external_files/a8a1e987da60c91a6827e736a344f9f5.png)   
* Select <strong>Import data about the relying party from a file</strong>.
* Browse to and select the XML document that was provided by MIE.
* Click <strong>Next</strong>.    ![](external_files/8bdd0d06963d2481368de893a771eaa3.png)   
* Give the Relying Party a proper name and description, and then click <strong>Next</strong>.
* Leave this set to <strong>I do not want to configure multi-factor authentication settings…</strong>
* Click <strong>Next</strong>.    ![](external_files/624fd16f7566491559f156a14f9db161.png)   
* Leave this set to <strong>Permit all users to access this relying party</strong>, and then click <strong>Next</strong>.    ![](external_files/5df63162bd11ec588ff74dedc52225bf.png)   
* Click <strong>Next</strong> - <em>Do not change any settings on this page</em>.    ![](external_files/0f4d7ee0ffb75b2ec6f76307a0023e5b.png)

## Edit Claim Rules

* In the AD FS MMC, expand the Trust Relationships and click on Relying Parties Trusts.
* Right-click the new Relying Party that was just created, and select <strong>Edit Claim Rules…</strong>    ![](external_files/02efdfb328382145e791fc2ac2ff7594.png)   
* Click <strong>Add Rule…</strong>
* Select <strong>Send LDAP Attributes as Claims</strong> from the dropdown list.
* Click <strong>Next</strong>.    ![](external_files/3319a9047e1fa91707b9da3a3508fe5a.png)   
* In the <strong>Claim rule name</strong> field enter <em>Get LDAP Attributes</em>.
* For the <strong>Attribute store</strong> field, select <em>Active Directory</em> from the drop down list.
* In the mapping table, select <em>E-Mail-Addresses</em> from the dropdown list under <strong>LDAP Attribute</strong> (<strong>Select type…</strong>).
* Select <em>E-Mail Address</em> from the dropdown list under the <strong>Outgoing Claim Type…</strong>
* Click <strong>Finish</strong>.    ![](external_files/eb1981ae8e3651e4852075bb4f97eb81.png)
* Click <strong>Add Rule…</strong>, again.
* Select <em>Transform an Incoming Claim</em> from the <strong>Claim rule template</strong> dropdown list.
* Click <strong>Next</strong>.    ![](external_files/3604340598687a314c72ba9c74953657.png)   
* Name the Claim rule <strong>Email to Name ID</strong>.
* Select <em>E-Mail Address</em> from the <strong>Incoming claim type</strong> dropdown list.
* Select <em>Name ID</em> from the <strong>Outgoing claim type</strong> dropdown list.
* Select <em>Email</em> from the <strong>Outgoing name ID format</strong> dropdown list.
* Click <strong>Finish</strong>.    ![](external_files/1c61ccae6e01911d9aaee7e1a5b94912.png)   
* Click <strong>OK</strong>.    ![](external_files/65871f7af93d5c7400a18e635a6877a1.png)

## Set Relying Partying SAML Logout Endpoint & Secure Hash Algorithm

* In the AD FS MMC, expand the Trust Relationships and click on Relying Parties Trusts.
* Double-click the new Relying Party Trust (or right-click and select Properties).
* Click the <strong>Endpoints</strong> tab.
* Click <strong>Add SAML…</strong>
* Select <em>SAML Logout</em> from the <strong>Endpoint type</strong> dropdown menu.
* Make sure that <em>POST</em> is selected from the <strong>Binding</strong> drop down menu.
* Enter the ADFS server sign-out URL in the <strong>Trusted URL</strong> field. The default URL is: https://[SERVER_FQDN]/adfs/ls/?wa=wsignout1.0
* Click <strong>OK</strong> to close the Add an Endpoint window.    ![](external_files/b1e5081bbe360787259776ec72beb177.png)



## Configure AD Access Groups (Optional)

* In the AD FS MMC, expand the Trust Relationships and click on Relying Parties Trusts.
* Right-click the new Relying Party just created, and select <strong>Edit Claim Rules…</strong>
* Click the <strong>Issuance Authorization Rule</strong> tab.
* Click <strong>Add Rule…</strong>    ![](external_files/29f1a72f48a8ef957943203137540c0e.png)   
* Select <strong>Permit or Deny Users Based on Incoming Claim</strong> from the dropdown list.    ![](external_files/54848224a4227be417d71959ebf1eaba.png)   
* Enter a claim rule name.
* Select the appropriate criteria from the <strong>Incoming claim type</strong> drop down list. In this example, we are basing it on AD group.    ![](external_files/2081ce38a5c00c17018e7daa9cfb1f6f.png)

## Restart the ADFS Service

* On your ADFS server, open the Server Manager.
* Click <strong>Tools</strong>, and select <strong>Services</strong>.    ![](external_files/c5c26b1a4961a570cc022d9d6e37d8e5.png)   
* Right-click the <strong>Active Directory Federation Services</strong> service.
* Click <strong>Restart</strong>.    ![](external_files/e414ada7eda97189c71eba03df2cf0da.png)

## Customize ADFS User Sign-in Page (Optional)

Options for changing the way your user sign-in page looks and behaves can be found here:

[https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/ad-fs-user-sign-in-customization](https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/ad-fs-user-sign-in-customization)

