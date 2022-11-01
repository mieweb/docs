---
id: '1yR6OLFf8CPNyo8Nl6eo-dtuzP9HhW1kv1CKyJ_jMueQ'
title: 'TechOmni'
date: '2020-03-10T14:03:53.331Z'
version: 32
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'gdoc:1mTsD1oXYnV2ZVK_7okDnVLmvkG60cAj5x0-DwUypgk8'
  - 'gdoc:13Oulcj0nZoB3rk_Fc-Fd4FxrUr5Di_UXZM45NP3tde4'
source: 'https://drive.google.com/open?id=1yR6OLFf8CPNyo8Nl6eo-dtuzP9HhW1kv1CKyJ_jMueQ'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
menu:
  main:
    name: 'TechOmni'
    identifier: '1yR6OLFf8CPNyo8Nl6eo-dtuzP9HhW1kv1CKyJ_jMueQ'
    parent: '1a3QmGdXV6MW1Ef2Yu8jPUiRSd8o-WENsm3_OK5roV-U'
    weight: 860
---
The necessary setup for accessing and utilizing TechOmni is fairly simple and straightforward, requiring just a basic install of a layout that is then viewable as a sidemenu option in the {{% system-name %}} system ( {{% sys-name %}} ). When accessed, the TechOmni form and all open encounters (filtered by the determined criteria) will display.  
In populating the form, users will be able to input the Order Number, which can be used to tie back to the Transcribed Report (where available).

  
![](../techomni.assets/100002010000046100000326638321BB649A6EF4.png)  


TechOmni functions off of a simple process where images that are sent over as DICOM files to {{% sys-name %}} can be linked to the necessary encounter, created using the TechOmni functionality. Once ready, the transcriber can pull up any encounter and review the images from the TechOmni worklist, transcribing as needed. Once the transcribed report exists, the encounter will close.  
TechOmni is a powerful tool that can be used in conjunction with the [RadOmni](gdoc:1mTsD1oXYnV2ZVK_7okDnVLmvkG60cAj5x0-DwUypgk8) worklist as well as outside entities via HL7 interface to create complex workflows that enable features such as two-way communication between rads and techs, auto-launching of DICOM viewing applications and dictation/VR software, presentation of applicable prior studies and reports, order and results routing, order creation using CPT picklist and customized results delivery. Please contact our support team for more information regarding these advanced functions.
* Users with the appropriate permissions can create JSON files from {{% sys-name %}} , using the System Configuration tab of the Control Panel. This allows administrators to easily review, approve, and export a JSON file from one {{% sys-name %}} system (e.g., DEV, QA, etc.) and easily import into another (e.g., PROD), avoiding duplicative work and ensuring consistency. For more information, see our help documentation on how to [Import or Export JSON Files](gdoc:13Oulcj0nZoB3rk_Fc-Fd4FxrUr5Di_UXZM45NP3tde4).
* By default, the TechOmni layout displays All Encounters. Open Encounter Criteria can be added to the TechOmni All Encounters ListView, if necessary. The following criteria may be added to the layout:
   * <strong>Stages</strong>
      * If incoming encounters utilize staging, adding this option allows users to filter out completed or problematic records more easily.
      * Ex: WHERE="e.stage NOT IN ('Problem','Order Complete')"
   * <strong>Visit Types</strong>
      * If multiple types of encounter orders are being used, adding this option allows users to easily restrict the report to specific visit types, as needed.
      * Ex: WHERE="e.stage NOT IN ('Problem','Order Complete') AND e.visit_type='OUTPATIENT'"
   * <strong>Order Types</strong>
      * Adding this option allows users to easily display any encounters with encounter orders of any particular order type(s).
         * Imaging = IF
         * Labs = L
         * Referrals = RF
           <img src="../techomni.assets/100002010000010B000000DFB11E9F386043B2EB.png" />  

{{% tip %}}

See additional Order Types available under the Orders-List Editor tab of the Control Panel.
{{% /tip %}}

   * Ex: JOIN="inner join encounter_orders o ON o.enc_id=e.encounter_id and o.type='IF'
* <strong>Order Status</strong>
   * Every order is assigned an order status. Though TechOmni will likely be used for Pending orders, exclusively, the following is a list of all available order statuses and their respective identifiers:
   * REPEAT = -5
   * AUTO_DECLINED = -4
   * WAIVED = -3
   * DELETED   = -2
   * DECLINED  = -1
   * PENDING   = 0
   * ORDERED   = 1
   * COMPLETED = 2
   * INPROGRESS = 3
* <strong>Encounter Location</strong>
   * If multiple locations are used, adding this option allows users to easily restrict the report by the specific location(s), as needed.
   * Ex: WHERE="e.stage!='Problem' AND e.location!='CAM'"
