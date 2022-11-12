---
id: '1p56sFJe04z4knjZh4xtZ1RbzdzLsKRaG2Ak-hfynOfs'
title: 'DICOM Modality Work List (MWL)'
date: '2020-03-24T15:53:13.829Z'
version: 51
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1p56sFJe04z4knjZh4xtZ1RbzdzLsKRaG2Ak-hfynOfs'
wikigdrive: '64fa77a2dd4586094b6074a78ed6769886b60894'
menu:
  main:
    name: 'DICOM Modality Work List (MWL)'
    identifier: '1p56sFJe04z4knjZh4xtZ1RbzdzLsKRaG2Ak-hfynOfs'
    parent: '1a3QmGdXV6MW1Ef2Yu8jPUiRSd8o-WENsm3_OK5roV-U'
    weight: 850
---
In most cases, once MWL is installed and configured on the base system, configuring MWL for a DICOM entity is as simple as checking a box.
1. Navigate to the DICOM sidemenu, and click the <strong>View Application Entities</strong> link in the upper-right corner.

  
![](../dicom-modality-work-list-mwl.assets/10000201000006400000029A91D47FB6CCC283CB.png)  


2. Once the list of configured entities has loaded, click <strong>Edit</strong> on the entity you wish to configure for MWL.

  
![](../dicom-modality-work-list-mwl.assets/100002010000064000000318AC447FC38858D6DB.png)  


3. When the Application Entity editor opens, checkmark the <strong>Allow MWL Query</strong> option and click the <strong>Submit Changes</strong> button. This option gives the configured device the ability to send MWL queries to the server and receive orders based upon the query criteria.
   <img src="../dicom-modality-work-list-mwl.assets/100002010000064000000439F1C402DE29DB40BB.png" />

This is all that is required to enable MWL on a configured DICOM entity, so long as the device supports standard MWL protocol.
  
## MWL Configuration  
  
The MWL configuration requires the installation of the dicomd_mwl application. 
