---
title: "Request E-Signature"
date: 2020-03-10T14:26:13.228Z
url: "request-e-signature.md"
author: Alan Quandt
id: 1euO-n8bAKbLv_aPvr0MAhALo7WCGiQ1dEwtZSIpxs8c
source: https://drive.google.com/open?id=1euO-n8bAKbLv_aPvr0MAhALo7WCGiQ1dEwtZSIpxs8c
menu:
    main:
        name: "Request E-Signature"
        identifier: "1euO-n8bAKbLv_aPvr0MAhALo7WCGiQ1dEwtZSIpxs8c"
        parent: "1eOjuYvCVKoiTlMeMzqy6HG8-S3ony9TFD_qIZvh3854"
        weight: 2410
---
E-Sign is used to electronically mark a document by putting the label "Signed by: Michael Example, MD" on a document in {{% system-name %}} within a chart.  This ‘signature label' is called an E-sign (electronic signature).  It's not a wet signature in handwriting, but it is a place in the document properties header that says "Signed by: Michael Example, MD".   It puts the name of the person that reviewed the document and marked it as ‘sign'.

E-Sign is requested manually when a user clicks Request Signature when in a document.  The user assigns an e-sign request to a specific user.  E-Sign requests can also be automated based on event, document, or other criteria and are configured by MIE via the Esign Editor.  An example of Esign request automation would be when a specified document type such as lab results coming in electronically via an interface, an esign request can trigger for the specific ordering provider to review and mark as signed.  

## Manual Esign Request

To manually request an E-Signature on a document, when in a chart, click to get into the document itself so the document content is displayed.

The document header will appear above the document and at the right side in the document header, click the Request Signature link.



![](external_files/6d08453a62dcc3b882634eef69e286c9.png)



The screen will display the request signature fields for the user to select whom the request should go to.  Other fields to set esign request priority and a free text box to type any note regarding the manual esign request are also available.



![](external_files/816b02b51b685d351fbc7af4dd3517fa.png)



To assign the esign request to whom should sign the document, use the drop-down arrow to select the provider you want to esign the document. The drop-down displays a list of any user that is a member of the Physicians department in access control.



![](external_files/df8cb3ee72aaed892236aaaf74c001b7.png)



If the person whom you wish to request a signature from is not in that drop-down, use the autocomplete field instead.  Begin typing the user's first name, or last name in the autocomplete field. The system will result matching user's as choices to request a signature from.  Select a choice to indicate the person whom should receive the esign request.



![](external_files/3779110549662b1e97bd55b4709090f5.png)



The Priority field for the request is optional.  If no priority is selected, the request will be inserted as normal priority when the assignee receives it in their queue to work.  High priority goes to the top of their list, Low priority goes below high and normal priority requests in their E-sign list.

The Free-text notes field for the request is also optional.  A free-text box is provided if need to type a brief note regarding the request or the document being requested to sign. The notes here will attach to the document and be visible in the assigned user's signature queue.

Once done indicating to whom the request is to go to and setting any priority or notes, click the Request Signature button on the request.

A message will display that a signature has been requested for that document id.  Within the document header itself, when an esign has been requested for a document, the word Preliminary will appear.  This is to help be a quick visual reference that indicates the document is out to someone to be esigned.



![](external_files/db1db0abd6e68eee16fcc46930f7ea62.png)



By clicking on the Properties link on the document will display who the esign requests is out to.



![](external_files/b65c04a7eccf1121a46a422b307e4db0.png)



When a signature is requested, {{% system-name %}} stores ‘who' requested it in the properties of the document within the Needs Signed By or Signed By details.  The requestor information is available by clicking on the (?) icon next to the name of who needs to sign the document, or who has already signed it.



![](external_files/021f09bb3fd1e1689b1219c3d0a777be.png)



If a request was sent to an incorrect user, a request can be un-requested.  Please refer to [Un-Request E-signature](un-request-unassign-an-e-signature.md) help guide.

{{% tip %}}

You can manually request another signature for the same document by clicking Request Signature at the top right of the document header again.  This allows the document to be signed by multiple users if needed.  

{{% /tip %}}


Once the document has been esigned by the specified person, the Preliminary gets replaced by Signed (Final) and indicates the user along with date and time it was esigned.



![](external_files/e98b60fd072d43ee48572bd1ea953576.png)



{{% note %}}

When a document has been e-signed, if any revisions or edits are made to the document in the chart, the signer(s) who already signed the original document will receive another esign request upon revision.  This is regardless of esign editor rules that may be set up in the system also.

{{% /note %}}


## Automated Esign Request

MIE can set up esign rules in the {{% system-name %}} system that will automatically trigger esign requests to users for specific documents, upload, events, etc that occur in the system in real-time.  This eliminates the need for users to manually request esignatures for routine workflows or specific documents that are a high importance to catch and make sure are reviewed and marked as signed.  MIE configures automation of esign requests in the Esign Editor tab as security permission and super user permission is needed.



