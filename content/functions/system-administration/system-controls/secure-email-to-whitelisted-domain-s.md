---
id: '1Ib7pJ_sdehPHpT606NGgSAwW-rwHmXJPiGGxEOjDyIQ'
title: 'Secure Email to Whitelisted Domain(s)'
date: '2020-02-27T20:21:13.177Z'
version: 58
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1Ib7pJ_sdehPHpT606NGgSAwW-rwHmXJPiGGxEOjDyIQ'
wikigdrive: 'a3f05807f0c9b9af2c79d6ec32e61b6933caadae'
menu:
  main:
    name: 'Secure Email to Whitelisted Domain(s)'
    identifier: '1Ib7pJ_sdehPHpT606NGgSAwW-rwHmXJPiGGxEOjDyIQ'
    parent: '1V2Lt_MnbYoDNFBtcoH6JHJKm4he3obo6_GmOlfyW-L8'
    weight: 4630
---
{{% system-name %}}  provides the ability to securely email documents to specific whitelisted domains. Securely emailing is a network setup usually via VPN and/or a secure connection between MIE and the  {{% system-name %}} system domain, before they can be marked as whitelisted (in a system setting) to email to.  {{% system-name %}} must have a secure connection before having the ability to email out documents. Please contact your MIE Implementer for setup information.  
The ability to send documents via ‘Direct' HISP connection does not rely on this setup. To email documents out to other domains must first have an established secure connection within  {{% system-name %}} (contact your MIE Implementer for that setup), then a system setting set, then security permission. Sending documents via "direct" for meaningful use is still valid via the send method.  
{{% note %}}

Only certain storage types can be securely emailed using this secure email functionality. Lab Results, injection records, and the like are not supported. Only a base set of storage types are supported at this time.
{{% /note %}}
  
## Permissions and Security  

Initially, the  {{% system-name %}} system must be setup with secure connection to other email domains. Work with your MIE Implementer and MIE developer for this connection. Once a secure connection between MIE and the  {{% system-name %}} system domain is established, the MIE Implementer or developer will set that domain into the system setting *Webchart*, *Email*, *Whitelist Domains* so the  {{% system-name %}} system knows which domains are setup as secure domains. You would never add gmail.com or those type of domains here in the system setting. MIE must establish a secure connection (via specific methods) to the domain you wish users to be able to email out to.
  
![](../secure-email-to-whitelisted-domain-s.assets/10000201000003FE0000005F18A5C9D97AE3BD1F.png)  

Lastly, the  {{% system-name %}} users must have security access to *securely email documents* if they are permitted to email out documents from  {{% system-name %}} to any whitelisted domains.
{{% tip %}}

This security permission is different than the security permission to email patients. This security setting is for being able to securely email documents/records from patient charts to others who use a whitelisted domain email address.
  
![](../secure-email-to-whitelisted-domain-s.assets/10000201000000F9000000230EAC46C2EE3B240E.png)  

{{% /tip %}}
  
## Securely Email an Individual Document  

When in the patient's chart and you wish to email a specific (one) document, click the *Print* or *Fax* option on the top right of the opened document screen view.
{{% warning %}}

Do not go to File, then down to Print in the Microsoft Windows toolbar at the very top. This is not compatible with any printing in  {{% system-name %}} .
{{% /warning %}}
  
![](../secure-email-to-whitelisted-domain-s.assets/10000201000004AC0000012B0C72D7FD8737FB1E.png)  

The sending screen will open and here you select the radio button titled *Secure Email* in order to email this document to someone who has an email address within a specified whitelisted domain (whose domain connection was securely established previously with  {{% system-name %}} and is set in the system setting).
  
![](../secure-email-to-whitelisted-domain-s.assets/100002010000022500000188D90980C742712735.png)  

Once the *secure email* radio button is selected, the bottom portion of that screen will show a few fields; *Recipients, Subject, free text box.*
  
![](../secure-email-to-whitelisted-domain-s.assets/10000201000001F800000176AA6D33448FBBB70F.png)  

* <strong>Recipients:</strong> Begin typing in the email address to whom you want to send the document to. Hit the <em>tab</em> keyboard key or the <em>add</em>button. If need to add another email address to email the same document to, continue again. Otherwise even if just sending to one email address, you need to hit the <em>tab</em> key or the <em>add</em> button. Doing that will trigger the  {{% system-name %}} system to process if that email domain is a secure connected whitelist domain or a ‘direct' HISP domain connection or if the email address is insecure and cannot be transmitted to.
  
![](../secure-email-to-whitelisted-domain-s.assets/10000201000002220000013674907047138CE292.png)  

If the email address (you are sending to) has a secure connection to  {{% system-name %}} and has been set in the system setting by the MIE developer or MIE Implementer, once you *tab* or *add* that email in this screen, you will see an envelope icon next to the recipient's email address. The envelope icon means it will send via email and this email address domain has been specified as whitelisted in your  {{% system-name %}} system settings.
  
![](../secure-email-to-whitelisted-domain-s.assets/10000201000001EC0000007EC32A37CEB4536509.png)  

If the email address (you are sending to) has a HISP ‘direct' secure connection to {{% system-name %}} , you will see a lock icon next to the recipient's email address. The document will be transmitted via ‘direct' protocol exchange methods and not a regular secure whitelist email connection. It will also ‘send from' the sender's ‘direct' address. ‘Direct' HISP connection is separate from a whitelist domain connection. Contact your MIE Implementer to be set up with ‘direct' HISP secure connection exchange.
  
![](../secure-email-to-whitelisted-domain-s.assets/1000020100000191000000F348E069857902F35C.png)  

In review, the  {{% system-name %}} system can only email documents via secure whitelisted domains that were previously setup with secure connection by MIE developers otherwise you will see the pop-up message that you have entered in an insecure email address (domain) and  {{% system-name %}} cannot send the document via email.
  
![](../secure-email-to-whitelisted-domain-s.assets/100002010000014F000000F18CF2465444EB22B2.png)  

If you hover your mouse over the (?) help bubble in the recipients field, it will help explain the recipient must have a ‘direct' protocol exchange email address or an email address (domain) of what has been setup as whitelisted in your system. It will list those domains that were setup with secure connection in this (?) help bubble so you know what email address domains are secure to send documents to.
  
![](../secure-email-to-whitelisted-domain-s.assets/10000201000001EB0000005199D177DBF789B629.png)  

* <strong>Email From:</strong> This is the address the recipient of the email will see as the ‘From'. It will auto-populate your email address from your  {{% system-name %}} username screen.
* <strong>Subject:</strong> Type in a subject for the email. The email will attach the document you selected, but this is the ‘subject line' of the email that the recipient will receive in their email inbox.
* <strong>Free Text Box:</strong> Type in any free text which will be received by the recipient in the body of the email (along with the attached document you selected to email out).
  
![](../secure-email-to-whitelisted-domain-s.assets/10000201000001FB0000009D1F8BFF30D52E45C0.png)  

Click SEND EMAIL button when wish to generate the email to be sent out.
{{% system-name %}}  will generate the email and your screen will show the processing. It displays the document that was sent in the email and once completed it will display the statement that the *Email Sent Successfully.* Again, only specific storage types can be emailed out, so if you (for example) send out an email with a lab result document, this screen will show that document as unsuccessful attaching that document, but the email and remainder of other documents (if applicable storage type) will be sent out successfully *(note: documents that are HTML storage type will be received in the email as a PDF attachment)*. *System Setting E-Chart*, *Email*, *Attach TIFF as PDF* (is enabled by default) when using secure email will force tiffs to be PDFs when attached to a message.
You can X out of that screen to get back to the chart you were in.
  
![](../secure-email-to-whitelisted-domain-s.assets/10000201000001EC0000006542EA17F1D819D62D.png)  

Here is an example of what the recipient receives:
  
![](../secure-email-to-whitelisted-domain-s.assets/100002010000054F000000EC3E454A7792A799D4.png)  

The *from* is the email address specified from the field when you generated the email. The document is an attachment in the email (in this example it was a word document of an Ultrasound report from the patient's chart). The *subject* has your typed subject from the field when you generated the email. The *free text notes* field is in the body of the email to the recipient.  {{% system-name %}} then adds automatically (to the body of the email) the name of the patient/employee the attachment is in regards to and the date of service (DOS) and what the document type/description is from {{% system-name %}} .
  
## Audit Log of Generated Emails  

{{% system-name %}}  keeps a history of when a document was emailed. When you go find the individual document and click on the properties
  
![](../secure-email-to-whitelisted-domain-s.assets/10000201000005450000005EA017C42C120103C9.png)  

When you scroll all the way to the bottom you will see the bucket *Email History on Document xxx*. Here you can see when and who emailed out this document.
  
![](../secure-email-to-whitelisted-domain-s.assets/100002010000053D00000164A52B9DC6A549D9EA.png)  

The generated email itself stores as a separate document within the patient/employee chart. It stores as a document named ‘email' with the date of service as the date the email was generated. This keeps record of what/when was emailed out as it's own separate document in the patient/employee chart.
  
![](../secure-email-to-whitelisted-domain-s.assets/10000201000003A1000000C2C0883B65F9017B74.png)  

If you click to open the stored email document that stored to the patient/employee chart it will display the specific email that was send out (generated) from the system and what document was emailed out.
  
![](../secure-email-to-whitelisted-domain-s.assets/100002010000054C000000E442D40FD90B1C6893.png)  

