---
id: '13v_jK8-1_nsjToIIrBFwXvI7rU4m5FI_Yi0O0lOKdco'
title: 'Device Interface - Quantifit 2'
date: '2024-11-26T21:25:37.486Z'
version: 15
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=13v_jK8-1_nsjToIIrBFwXvI7rU4m5FI_Yi0O0lOKdco'
wikigdrive: '2aacb51f060d0354a678419290943a99bd16aad1'
---
## Overview

The Quantifit 2 uses the OHD Logic software to operate the device and save results.  Enterprise Health can process files exported from that software and make respirator fit records from them.

## Exporting Data

1. In the OHD software go to the reports side menu.
2. Change the Report Type to "Fit Test Log"
3. Change the filters to get the tests that need to be transferred
4. Click the Search button
5. Click the Export CSV button and save the file to a directory on the PC

## Importing Data

1. Go to the Quantifit 2 File Upload page
2. Select the file exported from OHD  
    ![](../device-interface-quantifit-2.assets/1290b57dbb9fe67d0779189d66fd9749.png)
3. Click the Upload Device File button
4. A notification will appear with the status of the file upload and how many records were saved.  
    ![](../device-interface-quantifit-2.assets/cfa0509fec9d81f8f338519ae1363308.png)

## Notes

* Matching is done based on MRN (all partitions) and patient's first and last name.
* When the file is processed, if there is another test on the same day for the same sized mask, that record will be updated.  This is to prevent duplicate records from being created.
* For users utilizing RC202303 and newer, the Quantifit Data Import tool has been updated to pull the "EqFitFactor" as the Final Fit Factor when creating respirator fit records. This will get the overall fit factor from all tests instead of just the fit factor for the specific step from the row.

![](../device-interface-quantifit-2.assets/1d514ce2ec8e2082b40ddf44d58bf213.png)

![](../device-interface-quantifit-2.assets/192b8edb07824f055ef833a8f74dcbd5.png)
