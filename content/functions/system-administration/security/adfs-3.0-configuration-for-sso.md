---
id: '15eZmf2L3oj-KaYbjeWGVut1tWKU-miUYPKINCy1h8DM'
title: 'ADFS 3.0 Configuration for SSO'
date: '2020-02-27T20:26:04.497Z'
version: 45
mimeType: 'text/x-markdown'
links:
  - 'https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/ad-fs-user-sign-in-customization'
source: 'https://drive.google.com/open?id=15eZmf2L3oj-KaYbjeWGVut1tWKU-miUYPKINCy1h8DM'
wikigdrive: 'b79298d5e22adad5600e11ad6116c5fb4c39eb66'
---
This document assumes that the ADFS 3.0 software component is properly configured in the Active Directory domain.

## Exchange XML Metadata Files

1. Locate your ADFS XML metadata. This information can be found at this address: https://[SERVER_FQDN]/FederationMetadata/2007-06/FederationMetadata.xml
2. Download the XML file, or copy and paste the text into a text document, and send this to MIE.
3. MIE will send back an XML metadata file. Save this file on the ADFS server and be sure the file extension is XML.

## Add Relying Party Trust

1. On the ADFS server, open the Server Manager.
2. Click <strong>Tools</strong>, and select <strong>AD FS Management</strong>



   <img src="../adfs-3.0-configuration-for-sso.assets/cdb5b54598e2be5180502bcdf0f15591.png" />



3. In the AD FS Management MMC, expand AD FS and Trust Relationships.
4. Click on <strong>Add Relying Party Trust</strong> in the right pane (or from the context [right-click] menu on the folder tree).



   <img src="../adfs-3.0-configuration-for-sso.assets/5e5e130f7024996d675d7f21ce2cd008.png" />



5. Click <strong>Start</strong>.



   <img src="../adfs-3.0-configuration-for-sso.assets/c5975d39aba92d59c638b4f70939c156.png" />



6. Select <strong>Import data about the relying party from a file</strong>.
7. Browse to and select the XML document that was provided by MIE.
8. Click <strong>Next</strong>.



   <img src="../adfs-3.0-configuration-for-sso.assets/4fcf78b0e164376d55864fa47ab23810.png" />



9. Give the Relying Party a proper name and description, and then click <strong>Next</strong>.
10. Leave this set to <strong>I do not want to configure multi-factor authentication settings…</strong>
11. Click <strong>Next</strong>.



    <img src="../adfs-3.0-configuration-for-sso.assets/72352bf53e77e9ab0a757228b733e543.png" />



12. Leave this set to <strong>Permit all users to access this relying party</strong>, and then click <strong>Next</strong>.



    <img src="../adfs-3.0-configuration-for-sso.assets/f40433ef31122ccfb448911a77df5617.png" />



13. Click <strong>Next</strong> - <em>Do not change any settings on this page</em>.



    <img src="../adfs-3.0-configuration-for-sso.assets/62ee7e6bab7edeece7b3e67c3a1fb555.png" />


## Edit Claim Rules

1. In the AD FS MMC, expand the Trust Relationships and click on Relying Parties Trusts.
2. Right-click the new Relying Party that was just created, and select <strong>Edit Claim Rules…</strong>



   <img src="../adfs-3.0-configuration-for-sso.assets/0ee71feaaef75146c99951f6ecd85be8.png" />



3. Click <strong>Add Rule…</strong>
4. Select <strong>Send LDAP Attributes as Claims</strong> from the dropdown list.
5. Click <strong>Next</strong>.



   <img src="../adfs-3.0-configuration-for-sso.assets/0ef30a26b1b79bf619e10db16e767142.png" />



6. In the <strong>Claim rule name</strong> field enter <em>Get LDAP Attributes</em>.
7. For the <strong>Attribute store</strong> field, select <em>Active Directory</em> from the drop down list.
8. In the mapping table, select <em>E-Mail-Addresses</em> from the dropdown list under <strong>LDAP Attribute</strong> (<strong>Select type…</strong>).
9. Select <em>E-Mail Address</em> from the dropdown list under the <strong>Outgoing Claim Type…</strong>
10. Click <strong>Finish</strong>.



    <img src="../adfs-3.0-configuration-for-sso.assets/d619bb330d23d53aa494a17bec8ec44b.png" />

11. Click <strong>Add Rule…</strong>, again.
12. Select <em>Transform an Incoming Claim</em> from the <strong>Claim rule template</strong> dropdown list.
13. Click <strong>Next</strong>.



    <img src="../adfs-3.0-configuration-for-sso.assets/5fe74a646c8c0c1ed43bc1c8740f7549.png" />



14. Name the Claim rule <strong>Email to Name ID</strong>.
15. Select <em>E-Mail Address</em> from the <strong>Incoming claim type</strong> dropdown list.
16. Select <em>Name ID</em> from the <strong>Outgoing claim type</strong> dropdown list.
17. Select <em>Email</em> from the <strong>Outgoing name ID format</strong> dropdown list.
18. Click <strong>Finish</strong>.



    <img src="../adfs-3.0-configuration-for-sso.assets/2034faad7b3eeff8e17ec3180795e3e7.png" />



19. Click <strong>OK</strong>.



    <img src="../adfs-3.0-configuration-for-sso.assets/fd2dc373726b5ae61f94fc73b9e4adaa.png" />


## Set Relying Partying SAML Logout Endpoint & Secure Hash Algorithm

1. In the AD FS MMC, expand the Trust Relationships and click on Relying Parties Trusts.
2. Double-click the new Relying Party Trust (or right-click and select Properties).
3. Click the <strong>Endpoints</strong> tab.
4. Click <strong>Add SAML…</strong>
5. Select <em>SAML Logout</em> from the <strong>Endpoint type</strong> dropdown menu.
6. Make sure that <em>POST</em> is selected from the <strong>Binding</strong> drop down menu.
7. Enter the ADFS server sign-out URL in the <strong>Trusted URL</strong> field. The default URL is: https://[SERVER_FQDN]/adfs/ls/?wa=wsignout1.0
8. Click <strong>OK</strong> to close the Add an Endpoint window.



   <img src="../adfs-3.0-configuration-for-sso.assets/0d5e33ed652fa3902e869e757265f316.png" />



## Configure AD Access Groups (Optional)

1. In the AD FS MMC, expand the Trust Relationships and click on Relying Parties Trusts.
2. Right-click the new Relying Party just created, and select <strong>Edit Claim Rules…</strong>
3. Click the <strong>Issuance Authorization Rule</strong> tab.
4. Click <strong>Add Rule…</strong>



   <img src="../adfs-3.0-configuration-for-sso.assets/82ca00be6ff65ed92063ac0bddad78bd.png" />



5. Select <strong>Permit or Deny Users Based on Incoming Claim</strong> from the dropdown list.



   <img src="../adfs-3.0-configuration-for-sso.assets/6c54c406098dfea845b6951927821c60.png" />



6. Enter a claim rule name.
7. Select the appropriate criteria from the <strong>Incoming claim type</strong> drop down list. In this example, we are basing it on AD group.



   <img src="../adfs-3.0-configuration-for-sso.assets/7096c8e36e295e6505387671615c8ff4.png" />


## Restart the ADFS Service

1. On your ADFS server, open the Server Manager.
2. Click <strong>Tools</strong>, and select <strong>Services</strong>.



   <img src="../adfs-3.0-configuration-for-sso.assets/7f6f89c901e09de6ab25572598e1de1f.png" />



3. Right-click the <strong>Active Directory Federation Services</strong> service.
4. Click <strong>Restart</strong>.



   <img src="../adfs-3.0-configuration-for-sso.assets/be0bc532c5901e9c27c8d0c60b22e0b8.png" />


## Customize ADFS User Sign-in Page (Optional)

Options for changing the way your user sign-in page looks and behaves can be found here:  
[https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/ad-fs-user-sign-in-customization](https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/ad-fs-user-sign-in-customization)
