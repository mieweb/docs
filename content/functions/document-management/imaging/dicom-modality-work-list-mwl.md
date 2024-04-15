---
id: '1p56sFJe04z4knjZh4xtZ1RbzdzLsKRaG2Ak-hfynOfs'
title: 'DICOM Modality Work List (MWL)'
date: '2020-03-24T15:53:13.829Z'
version: 53
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1p56sFJe04z4knjZh4xtZ1RbzdzLsKRaG2Ak-hfynOfs'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
In most cases, once MWL is installed and configured on the base system, configuring MWL for a DICOM entity is as simple as checking a box.

1. Navigate to the DICOM sidemenu, and click the <strong>View Application Entities</strong> link in the upper-right corner.

![](../dicom-modality-work-list-mwl.assets/d562d23276c1f7b7e80e2334993c602f.png)

2. Once the list of configured entities has loaded, click <strong>Edit</strong> on the entity you wish to configure for MWL.

![](../dicom-modality-work-list-mwl.assets/aa9d5d82d21d6ddbfa345e060e7fbb3b.png)

3. When the Application Entity editor opens, checkmark the <strong>Allow MWL Query</strong> option and click the <strong>Submit Changes</strong> button. This option gives the configured device the ability to send MWL queries to the server and receive orders based upon the query criteria.  
    ![](../dicom-modality-work-list-mwl.assets/4095726184773bfcacde04d3ad797231.png)

This is all that is required to enable MWL on a configured DICOM entity, so long as the device supports standard MWL protocol.

## MWL Configuration

The MWL configuration requires the installation of the dicomd_mwl application.
