---
id: '1DepI9YVtfst5VTBsH24GZilzfqqzTMmvw8GYf-yq1R4'
title: 'E-Sign All Pending Tab'
date: '2025-02-06T16:05:49.590Z'
version: 108
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'https://mie.talentlms.com/shared/start/key:AOTHRKMF'
source: 'https://drive.google.com/open?id=1DepI9YVtfst5VTBsH24GZilzfqqzTMmvw8GYf-yq1R4'
wikigdrive: '0008bcbb1563384efe0a28ada6f97e9432e65f10'
---
From within the E-Sign sidemenu tab, there is an All Pending tab which displays all pending e-sign requests for the system.  To access the All Pending tab, it requires security permission.

In the All Pending tab, it lists all users who have documents pending e-sign requests assigned to them along with a total count.  This tab can be used as an audit tool to see how many users have requests pending, along with the count as of today's date.

![](../e-sign-all-pending-tab.assets/72bc369a1725797e1a9e8da656057b9e.png)

### Signing a Document in Pending Documents Queue

If you have security permission, you can click on the underlined user's name and view all the individual documents pending the user's e-sign.  By clicking on a specific Doc ID, you yourself can also sign that document to set your signature as preliminary signed. This is done by clicking the Sign Doc link found in the top right of the document header.

![](../e-sign-all-pending-tab.assets/7b1a0bbf0f40bf3310bafd58c71e704e.png)

When clicking Sign Doc,  would then e-sign your name as preliminary, not the person it was requested from.  It does not take the document out of the user's queue though since you are only marked as ‘preliminary' signed.  The document remains in the requested signature's queue to also sign as final.

![](../e-sign-all-pending-tab.assets/a77ab6e85dd5646cc6ed120bd1e9595b.png)

{{% note %}}
If you have security permission to proxy sign, then it will sign the document as Final, instead of preliminary.  However, the document continues to stay in the queue of the requested user to also sign on.
{{% /note %}}

## Clear Queue

If have security permission to delete in the All Pending tab, the option Clear Queue is displayed in the options column at the far right side.

This method is to clear a user's entire e-sign queue.  It will clear their entire e-sign queue (un-request all that are pending this user's e-sign) and the count will be set to zero.  Once a queue is cleared, there is no way to get those back unless you individually request e-signature again from each individual document.

To clear a user's entire e-sign queue, simply click on the Clear Queue link from the All Pending e-sign tab.

![](../e-sign-all-pending-tab.assets/3b6c0805fb238feccb328db6df14238f.png)

It will then pop up a confirmation box asking if you really wish to delete all the pending e-sign requests for that user. Click OK to continue or cancel.

![](../e-sign-all-pending-tab.assets/bc168dbedc7bbb9955367cbe80587291.png)

After clicking OK, it will display a confirmation at the top of the screen that it has successfully removed all pending requests from the e-sign queue for that user.

![](../e-sign-all-pending-tab.assets/cced9f1b7168eea069beb73e290818ae.png)

## Proxy Sign

If have security permission to view the All Pending tab and have security permission to Proxy Signing,  the option Proxy Sign is displayed in the options column at the far right side.  Proxy Sign means you can replace that assigned user's signature with your own, as a final signature, without having to wait for that other user to return to e-sign.  A use case for proxy signing may be when a physician is on vacation for a couple weeks, another physician may be allowed to proxy sign those documents for the other physician during that time frame.

![](../e-sign-all-pending-tab.assets/c50023bc3460dd52e93ac5a73d8c2acc.png)

When Proxy Sign is clicked, the multi-review queue will open and the user with proxy sign rights will be able to choose the documents he/she wants to sign.  It will list all the documents in that other user's queue on one screen. It will also state at the top that you are in PROXY SIGNING mode and for which user's queue.  The Mark All As Signed button and other buttons like priority, sign, reject, etc buttons appear in the multi-review mode.  Select the documents you wish to proxy sign for the other user by scrolling through the screen.

![](../e-sign-all-pending-tab.assets/3d48f6194e37d5611f8f8d322aabeee1.png)

Once you have marked the documents to be signed and clicked the Sign Marked Documents button that the bottom of the multi-review queue.  The document(s) are then marked signed with your e-signature and you see a confirmation message of that at the top.  The other user's e-sign pending request for their signature has then been removed. Using the Proxy Sign will also remove the document from that user's pending e-sign requests queue after you've proxy signed it.

![](../e-sign-all-pending-tab.assets/2a94ec9b2a276b4cb6ff27bcc069f814.png)

## E-Sign Reports

Using the Document Report found in the Reports sidemenu, a report can be run to list documents according to some e-sign criteria.  When in the Document Report, choose the optional column named E-Sign.  Then you can run reports to result on documents to see the status of their E-Sign. The optional column Select E-Sign Filters is a field that you can checkmark to find documents that result by specific e-sign filters. If no E-Sign filters are indicated, the report will generate a list of any and all E-Sign statuses on documents.

![](../e-sign-all-pending-tab.assets/d698e86f8a8c740e7069a1fef88b3962.png)

Once the report results, an E-Signature can be requested right there from the report by clicking Request Signature option at the far right.

![](../e-sign-all-pending-tab.assets/77e5e6d6e835b9e35155f4b66a0a0ea6.png)

## E-Sign DataVis

Users can switch from the legacy E-Sign view to the DataVis format by changing a My Settings user preference of *Use DataVis in E-sign* to Yes.

![](../e-sign-all-pending-tab.assets/ec51e069b7783150e7c5fbffafe3daab.png)

If your My Settings preference to Use DataVis in E-Sign is enabled,you will see the e-sign screen as a datavis of rows and columns.  Once can create their own perspective(s) as needed also.

![](../e-sign-all-pending-tab.assets/d066ac6f453063033b47af0b13d406c7.png)

Select a row or multiple rows of pending documents that need e-signed, then click the *Review Selected E-Sign* function button below the datavis table.  Doing that then opens a pop-up with the document(s) within it to review and sign document(s) individually from the E-sign Review screen.

![](../e-sign-all-pending-tab.assets/0ab87717298b27fc042bbb6e526a6176.png)

Users with Proxy Signing security permission will have an option to search for other users and toggle to other users pending E-Sign requests list and be able to sign documents on behalf of another. If the user does not have Proxy Signing security rights, the user search field does not display to be able to search for pending e-signs requested for another user.

## Learning Management System

To learn more about the E-Sign All Pending Tab, follow the link below to the Learning Management System course:

* [Esign](https://mie.talentlms.com/shared/start/key:AOTHRKMF)
