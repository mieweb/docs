---
title: "Secure Email to Whitelisted Domain(s)"
date: 2020-02-27T20:21:13.177Z
url: "secure-email-to-whitelisted-domain-s.md"
id: 1Ib7pJ_sdehPHpT606NGgSAwW-rwHmXJPiGGxEOjDyIQ
source: https://drive.google.com/open?id=1Ib7pJ_sdehPHpT606NGgSAwW-rwHmXJPiGGxEOjDyIQ
menu:
    main:
        name: "Secure Email to Whitelisted Domain(s)"
        identifier: "1Ib7pJ_sdehPHpT606NGgSAwW-rwHmXJPiGGxEOjDyIQ"
        parent: "1V2Lt_MnbYoDNFBtcoH6JHJKm4he3obo6_GmOlfyW-L8"
        weight: 4630
---
{{% system-name %}}  provides the ability to securely email documents to specific whitelisted domains. Securely emailing is a network setup usually via VPN and/or a secure connection between MIE and the  {{% system-name %}} system domain, before they can be marked as whitelisted (in a system setting) to email to.  {{% system-name %}} must have a secure connection before having the ability to email out documents. Please contact your MIE Implementer for setup information.

The ability to send documents via ‘Direct' HISP connection does not rely on this setup. To email documents out to other domains must first have an established secure connection within  {{% system-name %}} (contact your MIE Implementer for that setup), then a system setting set, then security permission. Sending documents via "direct" for meaningful use is still valid via the send method.

{{% note %}}

Only certain storage types can be securely emailed using this secure email functionality. Lab Results, injection records, and the like are not supported. Only a base set of storage types are supported at this time.

{{% /note %}}


## Permissions and Security

Initially, the  {{% system-name %}} system must be setup with secure connection to other email domains. Work with your MIE Implementer and MIE developer for this connection. Once a secure connection between MIE and the  {{% system-name %}} system domain is established, the MIE Implementer or developer will set that domain into the system setting *Webchart*, *Email*, *Whitelist Domains* so the  {{% system-name %}} system knows which domains are setup as secure domains. You would never add gmail.com or those type of domains here in the system setting. MIE must establish a secure connection (via specific methods) to the domain you wish users to be able to email out to.

![](external_files/d221eb42e0e50f466a2d58940e1bcb45.png)

Lastly, the  {{% system-name %}} users must have security access to *securely email documents* if they are permitted to email out documents from  {{% system-name %}} to any whitelisted domains.

{{% tip %}}

This security permission is different than the security permission to email patients. This security setting is for being able to securely email documents/records from patient charts to others who use a whitelisted domain email address.

![](external_files/f44c5b7a53298d851527309609be3741.png)

{{% /tip %}}


## Securely Email an Individual Document

When in the patient's chart and you wish to email a specific (one) document, click the *Print* or *Fax* option on the top right of the opened document screen view.

{{% warning %}}

Do not go to File, then down to Print in the Microsoft Windows toolbar at the very top. This is not compatible with any printing in  {{% system-name %}} .

{{% /warning %}}


![](external_files/ec372b949628c7b7e3b9719bd1bcddeb.png)
The sending screen will open and here you select the radio button titled *Secure Email* in order to email this document to someone who has an email address within a specified whitelisted domain (whose domain connection was securely established previously with  {{% system-name %}} and is set in the system setting).

![](external_files/821fdd14921b93315a95c0323ce31f89.png)

Once the *secure email* radio button is selected, the bottom portion of that screen will show a few fields; *Recipients, Subject, free text box.*

![](external_files/27fa11042eae6b2f92938dc733d8168a.png)
* <strong>Recipients:</strong> Begin typing in the email address to whom you want to send the document to. Hit the <em>tab</em> keyboard key or the <em>add</em>button. If need to add another email address to email the same document to, continue again. Otherwise even if just sending to one email address, you need to hit the <em>tab</em> key or the <em>add</em> button. Doing that will trigger the  {{% system-name %}} system to process if that email domain is a secure connected whitelist domain or a ‘direct' HISP domain connection or if the email address is insecure and cannot be transmitted to.

![](external_files/c31e752df4c153a458f782d19e188c59.png)

If the email address (you are sending to) has a secure connection to  {{% system-name %}} and has been set in the system setting by the MIE developer or MIE Implementer, once you *tab* or *add* that email in this screen, you will see an envelope icon next to the recipient's email address. The envelope icon means it will send via email and this email address domain has been specified as whitelisted in your  {{% system-name %}} system settings.

![](external_files/70086ea8658405f589f41219cfa72949.png)

If the email address (you are sending to) has a HISP ‘direct' secure connection to {{% system-name %}} , you will see a lock icon next to the recipient's email address. The document will be transmitted via ‘direct' protocol exchange methods and not a regular secure whitelist email connection. It will also ‘send from' the sender's ‘direct' address. ‘Direct' HISP connection is separate from a whitelist domain connection. Contact your MIE Implementer to be set up with ‘direct' HISP secure connection exchange.

![](external_files/891e99407cf23ee665dcc7220179a783.png)

In review, the  {{% system-name %}} system can only email documents via secure whitelisted domains that were previously setup with secure connection by MIE developers otherwise you will see the pop-up message that you have entered in an insecure email address (domain) and  {{% system-name %}} cannot send the document via email.

![](external_files/ee7f4de6089ce8775bc55632d6a5e7af.png)

If you hover your mouse over the (?) help bubble in the recipients field, it will help explain the recipient must have a ‘direct' protocol exchange email address or an email address (domain) of what has been setup as whitelisted in your system. It will list those domains that were setup with secure connection in this (?) help bubble so you know what email address domains are secure to send documents to.

![](external_files/40c96e978fadfff999fd8b91a8ad4980.png)

* <strong>Email From:</strong> This is the address the recipient of the email will see as the ‘From'. It will auto-populate your email address from your  {{% system-name %}} username screen.
* <strong>Subject:</strong> Type in a subject for the email. The email will attach the document you selected, but this is the ‘subject line' of the email that the recipient will receive in their email inbox.
* <strong>Free Text Box:</strong> Type in any free text which will be received by the recipient in the body of the email (along with the attached document you selected to email out).

![](external_files/6f0d2a70f857304d6d349ca0e4abe00e.png)

Click SEND EMAIL button when wish to generate the email to be sent out.

{{% system-name %}}  will generate the email and your screen will show the processing. It displays the document that was sent in the email and once completed it will display the statement that the *Email Sent Successfully.* Again, only specific storage types can be emailed out, so if you (for example) send out an email with a lab result document, this screen will show that document as unsuccessful attaching that document, but the email and remainder of other documents (if applicable storage type) will be sent out successfully *(note: documents that are HTML storage type will be received in the email as a PDF attachment)*. *System Setting E-Chart*, *Email*, *Attach TIFF as PDF* (is enabled by default) when using secure email will force tiffs to be PDFs when attached to a message.

You can X out of that screen to get back to the chart you were in.

![](external_files/0a320f5800792436365abe4184190f49.png)

Here is an example of what the recipient receives:

![](external_files/6e63b77c642ba2c5a643f3df5d5ca4ac.png)

The *from* is the email address specified from the field when you generated the email. The document is an attachment in the email (in this example it was a word document of an Ultrasound report from the patient's chart). The *subject* has your typed subject from the field when you generated the email. The *free text notes* field is in the body of the email to the recipient.  {{% system-name %}} then adds automatically (to the body of the email) the name of the patient/employee the attachment is in regards to and the date of service (DOS) and what the document type/description is from {{% system-name %}} .

## Audit Log of Generated Emails

{{% system-name %}}  keeps a history of when a document was emailed. When you go find the individual document and click on the properties

![](external_files/a92cccabc6851619955442c7ace0a839.png)

When you scroll all the way to the bottom you will see the bucket *Email History on Document xxx*. Here you can see when and who emailed out this document.

![](external_files/96407e82d5e02cdac63fb2a766272029.png)

The generated email itself stores as a separate document within the patient/employee chart. It stores as a document named ‘email' with the date of service as the date the email was generated. This keeps record of what/when was emailed out as it's own separate document in the patient/employee chart.

![](external_files/69ab4fe93701f4b6fed364545b72cdfc.png)

If you click to open the stored email document that stored to the patient/employee chart it will display the specific email that was send out (generated) from the system and what document was emailed out.

![](external_files/de9a409ff88058dd6f6965372758e2f9.png)

