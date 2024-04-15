---
id: '1mTsD1oXYnV2ZVK_7okDnVLmvkG60cAj5x0-DwUypgk8'
title: 'RadOmni'
date: '2020-02-27T21:01:07.965Z'
version: 18
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1mTsD1oXYnV2ZVK_7okDnVLmvkG60cAj5x0-DwUypgk8'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The necessary setup for accessing and utilizing RadOmni is fairly simple and straightforward, requiring just a basic install of a layout that is then viewable as a sidemenu option in the {{% system-name %}} system ( {{% sys-name %}} ). When accessed, the RadOmni form and all open encounters (filtered by the determined criteria) will display. RadOmni also provides options to Dictate, View Images, Add Tech Notes, and View the full encounter.

{{% info %}}
The RadOmni Worklist auto-refreshes every three (3) minutes.
{{% /info %}}

* By default, the RadOmni layout displays All Encounters. Open Encounter Criteria can be added to the RadOmni All Encounters ListView, if necessary. The following criteria may be added to the layout:
    * <strong>Stages</strong>
        * If incoming encounters utilize staging, adding this option allows users to filter out completed or problematic records more easily.
        * Ex: WHERE="e.location='CAM' AND e.stage='rad_order_completed'"
    * <strong>Visit Types</strong>
        * If multiple types of encounter orders are being used, adding this option allows users to easily restrict the report to specific visit types, as needed.
        * Ex: WHERE="e.visit_type IN ('ERVISIT','OUTPATIENT','INPATIENT','OFFICE') AND e.location='ENT'"
    * <strong>Encounter Location</strong>
        * If multiple locations are used, adding this option allows users to easily restrict the report by the specific location(s), as needed.
        * Ex: WHERE="e.location='CAM'"
