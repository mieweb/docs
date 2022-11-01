---
id: '1jBh_K3fZbn14VfTBL_kY9Ft5tgywajmZA3SmpVz3ib0'
title: 'Print Manager'
date: '2020-03-16T22:51:33.990Z'
version: 34
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1jBh_K3fZbn14VfTBL_kY9Ft5tgywajmZA3SmpVz3ib0'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
menu:
  main:
    name: 'Print Manager'
    identifier: '1jBh_K3fZbn14VfTBL_kY9Ft5tgywajmZA3SmpVz3ib0'
    parent: '1V2Lt_MnbYoDNFBtcoH6JHJKm4he3obo6_GmOlfyW-L8'
    weight: 4550
---
You must have security to be able to View the Print Manager tab found in Control.
  
![](../print-manager.assets/10000201000000E60000001F57FA07CA6A496254.png)  

  
## Overview  
  
The Print Manager tab found in Control is a tab to see all the print jobs for the system. Those that are pending, errored out or completed and specific details.  
You can click on the Job ID hyperlink to see the printed queue job, but these print jobs are stored as temporary files in the {{% system-name %}} File System and are only accessible for 7 days. It's a script on the File system box that does the deletion. For ASP clients, it's set to 7 days. Other practices on their own server box could be longer IF they have enough disk space to support storing more {{% sys-name %}} FS temporary files.  This includes all thumbnails, decompressed files, and all {{% sys-name %}} FS Temp files also.  
{{% tip %}}

If you click the view link that is available next to the listed Print Job, you will see a text list of doc.id's and documents that were printed in that print job. This allows you visual of what was printed/rendered and can look up those document ids if needed.
{{% /tip %}}
  
![](../print-manager.assets/1000020100000546000001EFD0FE2E5421788EC9.png)  

MIE will set up printers for your practice using this tab and in order to manage printers, the security for *Manage Printers* needs to be set to Yes.
  
![](../print-manager.assets/10000201000000E40000001E4E114A1176E06BEF.png)  

  
## Print & Fax History Chart Tab  

The chart tab found in an individual's chart named *Print & Fax History* also shows the Print History pertaining to documents specific to the patient you are in. The Print Job ID hyperlink also is only available for 7 days as above since it's a temporary file. However you can click the view hyperlink to see a text list of the documents that were in that print job.
  
![](../print-manager.assets/10000201000004EF0000012C252F697612BED2AF.png)  

If you click the view link that is available next to the listed Print Job, you will see a text list of doc.id's and documents that were printed in that print job. This allows you visual of what was printed/rendered and can look up those document ids if needed.
  
![](../print-manager.assets/10000201000002EA000002613200EA11E2A4780D.png)  

  
## Alerts/Errors Module  

You can also see errored print jobs via the "Alerts" module via the taskbar at the top if any are errored out or via the Quick View sidemenu tab as a module. See other help documentation named *Alert-Errors-Failures-Interactive Tab.pdf*
  
![](../print-manager.assets/100002010000054E0000025F80D9BD712FD82084.png)  

