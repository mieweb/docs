---
id: '15eZmf2L3oj-KaYbjeWGVut1tWKU-miUYPKINCy1h8DM'
title: 'ADFS 3.0 Configuration for SSO'
date: '2020-02-27T20:26:04.497Z'
version: 44
mimeType: 'text/x-markdown'
links:
  - 'https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/ad-fs-user-sign-in-customization'
source: 'https://drive.google.com/open?id=15eZmf2L3oj-KaYbjeWGVut1tWKU-miUYPKINCy1h8DM'
wikigdrive: 'a61f512444631f29662815085800f0e066b316db'
menu:
  main:
    name: 'ADFS 3.0 Configuration for SSO'
    identifier: '15eZmf2L3oj-KaYbjeWGVut1tWKU-miUYPKINCy1h8DM'
    parent: '15KoZbfqM4pYdbjCGSSBQzf1JC4NwpF3-KK3pjBDfxpY'
    weight: 5290
---
This document assumes that the ADFS 3.0 software component is properly configured in the Active Directory domain.
  
## Exchange XML Metadata Files  

1. Locate your ADFS XML metadata. This information can be found at this address: https://[SERVER_FQDN]/FederationMetadata/2007-06/FederationMetadata.xml
2. Download the XML file, or copy and paste the text into a text document, and send this to MIE.
3. MIE will send back an XML metadata file. Save this file on the ADFS server and be sure the file extension is XML.
  
## Add Relying Party Trust  

1. On the ADFS server, open the Server Manager.
2. Click <strong>Tools</strong>, and select <strong>AD FS Management</strong>



   <img src="../adfs-3.0-configuration-for-sso.assets/1000020100000270000001E4BA4E543A543A7A49.png" />



3. In the AD FS Management MMC, expand AD FS and Trust Relationships.
4. Click on <strong>Add Relying Party Trust</strong> in the right pane (or from the context [right-click] menu on the folder tree).



   <img src="../adfs-3.0-configuration-for-sso.assets/100002010000027000000150AD0BE38092D13A78.png" />



5. Click <strong>Start</strong>.



   <img src="../adfs-3.0-configuration-for-sso.assets/100002010000027100000200A7458089EAB91794.png" />



6. Select <strong>Import data about the relying party from a file</strong>.
7. Browse to and select the XML document that was provided by MIE.
8. Click <strong>Next</strong>.



   <img src="../adfs-3.0-configuration-for-sso.assets/1000020100000271000001E84A29F4C5B6D7C639.png" />



9. Give the Relying Party a proper name and description, and then click <strong>Next</strong>.
10. Leave this set to <strong>I do not want to configure multi-factor authentication settings…</strong>
11. Click <strong>Next</strong>.



    <img src="../adfs-3.0-configuration-for-sso.assets/1000020100000272000002028A77C0B994952D73.png" />



12. Leave this set to <strong>Permit all users to access this relying party</strong>, and then click <strong>Next</strong>.



    <img src="../adfs-3.0-configuration-for-sso.assets/1000020100000272000001FB44A5EA907A1CC3AB.png" />



13. Click <strong>Next</strong> - <em>Do not change any settings on this page</em>.



    <img src="../adfs-3.0-configuration-for-sso.assets/1000020100000270000001F73B25AA6A416662D2.png" />  

  
## Edit Claim Rules  

1. In the AD FS MMC, expand the Trust Relationships and click on Relying Parties Trusts.
2. Right-click the new Relying Party that was just created, and select <strong>Edit Claim Rules…</strong>



   <img src="../adfs-3.0-configuration-for-sso.assets/1000020100000271000001DCD3E7DE9A2F970D27.png" />



3. Click <strong>Add Rule…</strong>
4. Select <strong>Send LDAP Attributes as Claims</strong> from the dropdown list.
5. Click <strong>Next</strong>.



   <img src="../adfs-3.0-configuration-for-sso.assets/100002010000027000000165E43D6EA5924FCF90.png" />



6. In the <strong>Claim rule name</strong> field enter <em>Get LDAP Attributes</em>.
7. For the <strong>Attribute store</strong> field, select <em>Active Directory</em> from the drop down list.
8. In the mapping table, select <em>E-Mail-Addresses</em> from the dropdown list under <strong>LDAP Attribute</strong> (<strong>Select type…</strong>).
9. Select <em>E-Mail Address</em> from the dropdown list under the <strong>Outgoing Claim Type…</strong>
10. Click <strong>Finish</strong>.



    <img src="../adfs-3.0-configuration-for-sso.assets/1000020100000271000001E4C799DCE7B88B4793.png" />  

11. Click <strong>Add Rule…</strong>, again.
12. Select <em>Transform an Incoming Claim</em> from the <strong>Claim rule template</strong> dropdown list.
13. Click <strong>Next</strong>.



    <img src="../adfs-3.0-configuration-for-sso.assets/10000201000002700000019CC9DB90E8BBF6E09C.png" />



14. Name the Claim rule <strong>Email to Name ID</strong>.
15. Select <em>E-Mail Address</em> from the <strong>Incoming claim type</strong> dropdown list.
16. Select <em>Name ID</em> from the <strong>Outgoing claim type</strong> dropdown list.
17. Select <em>Email</em> from the <strong>Outgoing name ID format</strong> dropdown list.
18. Click <strong>Finish</strong>.



    <img src="../adfs-3.0-configuration-for-sso.assets/1000020100000270000001EB81FA22856A13DEBC.png" />



19. Click <strong>OK</strong>.



    <img src="../adfs-3.0-configuration-for-sso.assets/1000020100000269000002368B151A447B3E8F18.png" />  

  
## Set Relying Partying SAML Logout Endpoint & Secure Hash Algorithm  

1. In the AD FS MMC, expand the Trust Relationships and click on Relying Parties Trusts.
2. Double-click the new Relying Party Trust (or right-click and select Properties).
3. Click the <strong>Endpoints</strong> tab.
4. Click <strong>Add SAML…</strong>
5. Select <em>SAML Logout</em> from the <strong>Endpoint type</strong> dropdown menu.
6. Make sure that <em>POST</em> is selected from the <strong>Binding</strong> drop down menu.
7. Enter the ADFS server sign-out URL in the <strong>Trusted URL</strong> field. The default URL is: https://[SERVER_FQDN]/adfs/ls/?wa=wsignout1.0
8. Click <strong>OK</strong> to close the Add an Endpoint window.



   <img src="../adfs-3.0-configuration-for-sso.assets/100002010000026D0000022BD87FB9C1FEDA5151.png" />  


  
## Configure AD Access Groups (Optional)  

1. In the AD FS MMC, expand the Trust Relationships and click on Relying Parties Trusts.
2. Right-click the new Relying Party just created, and select <strong>Edit Claim Rules…</strong>
3. Click the <strong>Issuance Authorization Rule</strong> tab.
4. Click <strong>Add Rule…</strong>



   <img src="../adfs-3.0-configuration-for-sso.assets/1000020100000246000001F3DC78A7AF1087D34D.png" />



5. Select <strong>Permit or Deny Users Based on Incoming Claim</strong> from the dropdown list.



   <img src="../adfs-3.0-configuration-for-sso.assets/1000020100000205000001A0B380E2CB31D19C9E.png" />



6. Enter a claim rule name.
7. Select the appropriate criteria from the <strong>Incoming claim type</strong> drop down list. In this example, we are basing it on AD group.



   <img src="../adfs-3.0-configuration-for-sso.assets/1000020100000270000001FC44DF349B5FB41F62.png" />  

  
## Restart the ADFS Service  

1. On your ADFS server, open the Server Manager.
2. Click <strong>Tools</strong>, and select <strong>Services</strong>.



   <img src="../adfs-3.0-configuration-for-sso.assets/1000020100000270000001DFF3F0E8C2AEED6587.png" />



3. Right-click the <strong>Active Directory Federation Services</strong> service.
4. Click <strong>Restart</strong>.



   <img src="../adfs-3.0-configuration-for-sso.assets/100002010000027100000142AA69866E3997E6A7.png" />  

  
## Customize ADFS User Sign-in Page (Optional)  
  
Options for changing the way your user sign-in page looks and behaves can be found here:  
[https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/ad-fs-user-sign-in-customization](https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/ad-fs-user-sign-in-customization)
