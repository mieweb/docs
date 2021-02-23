---
title: "E-Sign All Pending Tab"
date: 2020-03-10T14:20:34.885Z
url: "general-functionality/e-sign-electronic-signature/e-sign-all-pending-tab.html"
author: aquandt
version: 31
id: 1DepI9YVtfst5VTBsH24GZilzfqqzTMmvw8GYf-yq1R4
source: https://drive.google.com/open?id=1DepI9YVtfst5VTBsH24GZilzfqqzTMmvw8GYf-yq1R4
menu:
    main:
        name: "E-Sign All Pending Tab"
        identifier: "1DepI9YVtfst5VTBsH24GZilzfqqzTMmvw8GYf-yq1R4"
        parent: "1eOjuYvCVKoiTlMeMzqy6HG8-S3ony9TFD_qIZvh3854"
        weight: 2440
---
From within the E-Sign sidemenu tab, there is an All Pending tab which displays all pending e-sign requests for the system.  To access the All Pending tab, it requires security permission.

In the All Pending tab, it lists all users who have documents pending e-sign requests assigned to them along with a total count.  This tab can be used as an audit tool to see how many users have requests pending, along with the count as of today's date.



![](../../external_files/694d6b4c36cdd2778ffd9d4898e85a5f.png)



### Signing a Document in Pending Documents Queue

If you have security permission, you can click on the underlined user's name and view all the individual documents pending the user's e-sign.  By clicking on a specific Doc ID, you yourself can also sign that document to set your signature as preliminary signed. This is done by clicking the Sign Doc link found in the top right of the document header.



![](../../external_files/f3f9abd1b30881670a5d312d5c7384ac.png) 



When clicking Sign Doc,  would then e-sign your name as preliminary, not the person it was requested from.  It does not take the document out of the user's queue though since you are only marked as ‘preliminary' signed.  The document remains in the requested signature's queue to also sign as final.



![](../../external_files/1b2be2b3cdc011da9c5123aa3e113ff2.png)



{{% note %}}

If you have security permission to proxy sign, then it will sign the document as Final, instead of preliminary.  However, the document continues to stay in the queue of the requested user to also sign on.

{{% /note %}}


## Clear Queue

If have security permission to delete in the All Pending tab, the option Clear Queue is displayed in the options column at the far right side.

This method is to clear a user's entire e-sign queue.  It will clear their entire e-sign queue (un-request all that are pending this user's e-sign) and the count will be set to zero.  Once a queue is cleared, there is no way to get those back unless you individually request e-signature again from each individual document.

To clear a user's entire e-sign queue, simply click on the Clear Queue link from the All Pending e-sign tab.



![](../../external_files/3a3bb19283051b19e11d41cfe6669914.png)



It will then pop up a confirmation box asking if you really wish to delete all the pending e-sign requests for that user. Click OK to continue or cancel.



![](../../external_files/47549e73d97e1d58ae49aa5efcfdd5de.png)



After clicking OK, it will display a confirmation at the top of the screen that it has successfully removed all pending requests from the e-sign queue for that user.



![](../../external_files/e0e2178b127db244fb315d1ca533dac3.png)



## Proxy Sign

If have security permission to view the All Pending tab and have security permission to Proxy Signing,  the option Proxy Sign is displayed in the options column at the far right side.  Proxy Sign means you can replace that assigned user's signature with your own, as a final signature, without having to wait for that other user to return to e-sign.  A use case for proxy signing may be when a physician is on vacation for a couple weeks, another physician may be allowed to proxy sign those documents for the other physician during that time frame.



![](../../external_files/730e11a0261b6b27bac203eb158f2373.png)



When Proxy Sign is clicked, the multi-review queue will open and the user with proxy sign rights will be able to choose the documents he/she wants to sign.  It will list all the documents in that other user's queue on one screen. It will also state at the top that you are in PROXY SIGNING mode and for which user's queue.  The Mark All As Signed button and other buttons like priority, sign, reject, etc buttons appear in the multi-review mode.  Select the documents you wish to proxy sign for the other user by scrolling through the screen.



![](../../external_files/121771f256cb32af6f72a2473a219764.png)



Once you have marked the documents to be signed and clicked the Sign Marked Documents button that the bottom of the multi-review queue.  The document(s) are then marked signed with your e-signature and you see a confirmation message of that at the top.  The other user's e-sign pending request for their signature has then been removed. Using the Proxy Sign will also remove the document from that user's pending e-sign requests queue after you've proxy signed it.



![](../../external_files/d2d78fa07427c814c09de5b5abe31079.png)

## E-Sign Reports

Using the Document Report found in the Reports sidemenu, a report can be run to list documents according to some e-sign criteria.  When in the Document Report, choose the optional column named E-Sign.  Then you can run reports to result on documents to see the status of their E-Sign. The optional column Select E-Sign Filters is a field that you can checkmark to find documents that result by specific e-sign filters. If no E-Sign filters are indicated, the report will generate a list of any and all E-Sign statuses on documents.



![](../../external_files/58ef1c47e3cd7790e6300db0966c4bf6.png)



Once the report results, an E-Signature can be requested right there from the report by clicking Request Signature option at the far right.



![](../../external_files/e1182372337e0d6477193c31722a7097.png)



