---
id: '1C5IsXjz0r1av5vusmT8ud4GsjtI9kOOY7Z5dqTVhvZ0'
title: 'Device Interface - Clinitek Status+Urine Analyzer'
date: '2024-10-07T20:30:50.557Z'
version: 45
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/system-administration/interfaces/installing-mie-device-app/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/system-controls/translation-manager/'
source: 'https://drive.google.com/open?id=1C5IsXjz0r1av5vusmT8ud4GsjtI9kOOY7Z5dqTVhvZ0'
wikigdrive: '860e59f919b06774886561eebaacd677071ab78c'
---
The Clinitek Status device interface is compatible with the Clinitek Status Software version lower than 2.0.

## Installation Help

Every computer that is connected to a Clinitek device will need to have the [MIE Device app](https://docs.enterprisehealth.com/functions/system-administration/interfaces/installing-mie-device-app/) installed.  A link to this can be found on the top right of the Plugins page.  The device will need to be configured via the devices .ini file to use the correct COM port and configuration.  There is a silent installer option so that the device app can be pushed to workstations by a managing engine.

![](../device-interface-clinitek-statusurine-analyzer.assets/a9c14002aa03e55ab32ce44523970579.png)

## Workflow Summary

The device app sits on the PC and is constantly listening for a new test result. When a test result is completed, Clinitek will initiate a transfer of the results into {{% system-name %}}. Therefore, results get into {{% system-name %}} without any user interaction. Since results are received one by one upon completion, there is not a batch send option.

Results are stored as discrete observations and summarized in a Lab Result document (WCLAB).

## Collected Fields

The following observations are sent from the Clinitek. The abbreviation in parenthesis is the code sent from the device and what is used for obs code mappings.

Albumin (ALB)

Bilirubin (BIL)

Creatinine (CRE)

Glucose (GLU)

Ketone (KET)

Leukocyte (LEU)

Nitrite (NIT)

Occult Blood (BLO)

pH (pH)

Protein (PRO)

Specific Gravity (SG)

Urobilinogen (URO)

The results are stored as discrete observations in {{% system-name %}}.  The reference ranges that display in {{% system-name %}} are pulled directly from the obs code.  The obs code must either match the name of the observations being sent from the Clinitek, or they can be mapped using the ‘Device-Clinitek' translations.  For more information on using the translation manager click [here](https://docs.enterprisehealth.com/functions/system-administration/system-controls/translation-manager/). When results are received from the Clinitek Status device, the observations are inserted into {{% system-name %}} and a document is created using the WCLAB document type.

![](../device-interface-clinitek-statusurine-analyzer.assets/12491ccd4dadfdbb040bb9ab7c0ff054.png)
