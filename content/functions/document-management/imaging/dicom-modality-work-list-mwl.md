---
title: "DICOM Modality Work List (MWL)"
date: "2020-03-24T15:53:13.829Z"
url: "functions/document-management/imaging/dicom-modality-work-list-mwl.html"
version: 39
id: "1p56sFJe04z4knjZh4xtZ1RbzdzLsKRaG2Ak-hfynOfs"
source: "https://drive.google.com/open?id=1p56sFJe04z4knjZh4xtZ1RbzdzLsKRaG2Ak-hfynOfs"
menu:
    main:
        name: "DICOM Modality Work List (MWL)"
        identifier: "1p56sFJe04z4knjZh4xtZ1RbzdzLsKRaG2Ak-hfynOfs"
        parent: "1a3QmGdXV6MW1Ef2Yu8jPUiRSd8o-WENsm3_OK5roV-U"
        weight: 850
---
In most cases, once MWL is installed and configured on the base system, configuring MWL for a DICOM entity is as simple as checking a box.

1. Navigate to the DICOM sidemenu, and click the <strong>View Application Entities</strong> link in the upper-right corner.



![](dicom-modality-work-list-mwl.images/image1.png)



2. Once the list of configured entities has loaded, click <strong>Edit</strong> on the entity you wish to configure for MWL.



![](dicom-modality-work-list-mwl.images/image2.png)



3. When the Application Entity editor opens, checkmark the <strong>Allow MWL Query</strong> option and click the <strong>Submit Changes</strong> button. This option gives the configured device the ability to send MWL queries to the server and receive orders based upon the query criteria. ![](dicom-modality-work-list-mwl.images/image3.png) 

This is all that is required to enable MWL on a configured DICOM entity, so long as the device supports standard MWL protocol.

## MWL Configuration

The MWL configuration requires the installation of the dicomd_mwl application. 

