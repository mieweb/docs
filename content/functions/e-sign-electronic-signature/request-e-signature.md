---
id: '1euO-n8bAKbLv_aPvr0MAhALo7WCGiQ1dEwtZSIpxs8c'
title: 'Request E-Signature'
date: '2020-03-10T14:26:13.228Z'
version: 64
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'un-request-unassign-an-e-signature.md'
source: 'https://drive.google.com/open?id=1euO-n8bAKbLv_aPvr0MAhALo7WCGiQ1dEwtZSIpxs8c'
wikigdrive: 'a61f512444631f29662815085800f0e066b316db'
menu:
  main:
    name: 'Request E-Signature'
    identifier: '1euO-n8bAKbLv_aPvr0MAhALo7WCGiQ1dEwtZSIpxs8c'
    parent: '1eOjuYvCVKoiTlMeMzqy6HG8-S3ony9TFD_qIZvh3854'
    weight: 2410
---
E-Sign is used to electronically mark a document by putting the label "Signed by: Michael Example, MD" on a document in {{% system-name %}} within a chart.  This ‘signature label' is called an E-sign (electronic signature).  It's not a wet signature in handwriting, but it is a place in the document properties header that says "Signed by: Michael Example, MD".   It puts the name of the person that reviewed the document and marked it as ‘sign'.  
E-Sign is requested manually when a user clicks Request Signature when in a document.  The user assigns an e-sign request to a specific user.  E-Sign requests can also be automated based on event, document, or other criteria and are configured by MIE via the Esign Editor.  An example of Esign request automation would be when a specified document type such as lab results coming in electronically via an interface, an esign request can trigger for the specific ordering provider to review and mark as signed.  
  
## **Manual Esign Request**  
  
To manually request an E-Signature on a document, when in a chart, click to get into the document itself so the document content is displayed.  
The document header will appear above the document and at the right side in the document header, click the Request Signature link.

  
![](../request-e-signature.assets/10000201000004AA00000170B6656DB28651A445.png)  


The screen will display the request signature fields for the user to select whom the request should go to.  Other fields to set esign request priority and a free text box to type any note regarding the manual esign request are also available.

  
![](../request-e-signature.assets/10000201000001EB00000092BC2A3CBDD859EEFF.png)  


To assign the esign request to whom should sign the document, use the drop-down arrow to select the provider you want to esign the document. The drop-down displays a list of any user that is a member of the Physicians department in access control.

  
![](../request-e-signature.assets/10000201000001D400000094C8897F83F9221590.png)  


If the person whom you wish to request a signature from is not in that drop-down, use the autocomplete field instead.  Begin typing the user's first name, or last name in the autocomplete field. The system will result matching user's as choices to request a signature from.  Select a choice to indicate the person whom should receive the esign request.

  
![](../request-e-signature.assets/10000201000001C800000091B101BD5A58C9C819.png)  


The Priority field for the request is optional.  If no priority is selected, the request will be inserted as normal priority when the assignee receives it in their queue to work.  High priority goes to the top of their list, Low priority goes below high and normal priority requests in their E-sign list.  
The Free-text notes field for the request is also optional.  A free-text box is provided if need to type a brief note regarding the request or the document being requested to sign. The notes here will attach to the document and be visible in the assigned user's signature queue.  
Once done indicating to whom the request is to go to and setting any priority or notes, click the Request Signature button on the request.  
A message will display that a signature has been requested for that document id.  Within the document header itself, when an esign has been requested for a document, the word Preliminary will appear.  This is to help be a quick visual reference that indicates the document is out to someone to be esigned.

  
![](../request-e-signature.assets/10000201000004A1000000C13258D220395A73CA.png)  


By clicking on the Properties link on the document will display who the esign requests is out to.

  
![](../request-e-signature.assets/10000201000004BC0000010DB3556E75CB6A61C5.png)  


When a signature is requested, {{% system-name %}} stores ‘who' requested it in the properties of the document within the Needs Signed By or Signed By details.  The requestor information is available by clicking on the (?) icon next to the name of who needs to sign the document, or who has already signed it.

  
![](../request-e-signature.assets/1000020100000497000000F2D8E6D233C5E41FE1.png)  


If a request was sent to an incorrect user, a request can be un-requested.  Please refer to [Un-Request E-signature](un-request-unassign-an-e-signature.md) help guide.  
{{% tip %}}

You can manually request another signature for the same document by clicking Request Signature at the top right of the document header again.  This allows the document to be signed by multiple users if needed.  
{{% /tip %}}

Once the document has been esigned by the specified person, the Preliminary gets replaced by Signed (Final) and indicates the user along with date and time it was esigned.

  
![](../request-e-signature.assets/10000201000004A5000000CFC4BED6FED7AEF8F3.png)  


{{% note %}}

When a document has been e-signed, if any revisions or edits are made to the document in the chart, the signer(s) who already signed the original document will receive another esign request upon revision.  This is regardless of esign editor rules that may be set up in the system also.
{{% /note %}}
  
## **Automated Esign Request**  

MIE can set up esign rules in the {{% system-name %}} system that will automatically trigger esign requests to users for specific documents, upload, events, etc that occur in the system in real-time.  This eliminates the need for users to manually request esignatures for routine workflows or specific documents that are a high importance to catch and make sure are reviewed and marked as signed.  MIE configures automation of esign requests in the Esign Editor tab as security permission and super user permission is needed.

