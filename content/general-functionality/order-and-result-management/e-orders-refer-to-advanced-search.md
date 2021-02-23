---
title: "E-Orders - Refer To Advanced Search"
date: 2020-03-13T19:26:45.630Z
url: "general-functionality/order-and-result-management/e-orders-refer-to-advanced-search.html"
version: 44
id: 1fpy2bWS8axvI2RAYvrKOr1g0iAJ-Lj5mO_y_fgM0EOU
source: https://drive.google.com/open?id=1fpy2bWS8axvI2RAYvrKOr1g0iAJ-Lj5mO_y_fgM0EOU
menu:
    main:
        name: "E-Orders - Refer To Advanced Search"
        identifier: "1fpy2bWS8axvI2RAYvrKOr1g0iAJ-Lj5mO_y_fgM0EOU"
        parent: "103elDMKyCQlA8uZjycHzAZ90L6BR3FTzxRLYOKrgpo8"
        weight: 1920
---
Companies using {{% system-name %}} may want a method to manage their external providers. System Administrators may compile as directory of providers commonly referred to or utilized. The directory may contain providers within their own practice and/or contracted providers. Details captured on the provider include location and contact information, languages spoken, specialty and contracted procedures listing. Out of the box credentialing information includes NPI, TIN, License numbers and expiration dates, DEA numbers and expiration dates and a next credentialing due date. Standard reports include detailed lists of providers requiring re-credentialing. The module can be custom configured to capture other specific details practices may wish to track, as well as any custom reporting on those fields.



If your practice manages external providers utilizing our Provider Management module and houses them as provider or provider organization ‘charts' within your {{% system-name %}} system, you will want the ability to Advanced Search when generating an e-order. Vendors (physician groups, ambulatory surgical centers, hospitals, transportation companies, etc.) are Provider Organizations in {{% system-name %}} . The Advanced Search functionality help users identify who an in-network or referable entity/provider may be for when they need to generate a referral order on a patient. It can also be utilized to perhaps to help users identify providers or referable entities that specialize in a particular body part, service, or speak in another language to assist with the patient's needs. We call this module Provider Management in {{% system-name %}} . See additional help documentation titled *Provider Management.pdf* This help document is addressing the Advanced Search hyperlink found while generating an e-order on a patient.

![](../../external_files/a4feda83f04707d72b7a897e4a5030c6.png)

The system setting System, External Provider, Use Charts must be enabled (value 1) for the Advanced Search hyperlink to appear while creating an e-order. Your practice must be managing external providers/organizations using the Provider Management module.

![](../../external_files/81abe86920789638893fe2e8a32ac0f4.png)

The specific chart types to be looked at in resulting choices in the Advanced Search must also be set in the system setting System, External Provider, Chart Types.

![](../../external_files/7adee86ac12749779e2a266f1b4a7b95.png)

In order for the Advanced Search functionality to result choices, the referable providers/organizations must first have been entered in the Provider Management module. See other help documentation titled *Provider Management.pdf*

![](../../external_files/bb70bfbe5501b9eef4f2a970817f6f60.png)
While creating an e-order for the patient (either via the add order module or within a visit encounter), you will see the Advanced Search link next to the **Refer To** auto-complete field.

![](../../external_files/a4feda83f04707d72b7a897e4a5030c6.png)

Click Advanced Search to access the library of referable providers/organizations that are stored and managed in your Provider Management module.

![](../../external_files/58a3748210a7aec02268fc6c529c3b89.png)



{{% note %}}

The Advanced Search lists/results all chart choices where: 1) The chart type are those of which are set in the system setting "Chart Types" and 2) of those charts/chart types only lists/results the ones marked as "referable entity" and 3) are active charts. Only referable providers or provider organizations will display here for selection in the External Providers screen. So if you do not see a provider or organization listed here while utilizing the Advanced Search to document who is referring the patient to on the order, it is because that provider or organization chart is not flagged as a referable entity.

{{% /note %}}


![](../../external_files/d92ddb1ff95c98efaaac34c29f9d89b4.png)
While here in the *External Providers* selection screen, you see a grid of all referable providers or provider organizations that are managed in your Provider Management module. A Provider is a ‘Chart' for a provider. A Provider Organization is a ‘Chart' for an Provider Group that can have relationships to Providers. Again, only providers or organizations that are flagged as *referable entities* will display here for selection. If a provider practices at multiple locations, there will be a line item for that provider for *each* address so the user can decide which location to send the patient.

![](../../external_files/3d1a55adb2ec0ac41f5c66f15555b55b.png)

You can utilize the right scroll bar at the bottom of the *External Providers* screen to see more identifying information regarding the referable provider or organization such as language, office hours, address, body parts they treat etc. This result grid can be a customized layout of specific columns/data you wish to result.

![](../../external_files/c06fe006ac8c500d1fbd14177887d445.png)

You can also use the filter feature on any column by clicking the ? icon on any column. You can filter the selections on this screen to perhaps only display to you providers that specialize in a particular language. You can utilize the filter on any column of this grid.

![](../../external_files/d6235813457786b84d69f450fd990da0.png)

You can also drag and drop columns in any order you wish. Perhaps *body part treated* is something always relevant to your selections when referring patients. You may want to drag and drop that column to be after the ‘name' column so you can easily visibly look for selections that way. The system will remember your column order preference.

![](../../external_files/30d3c4b171fd86bd9906ae57fa292a48.png)



{{% note %}}

When you filter or drag/drop a column, the system will remember that for the next time you log in or access this External Providers screen. Please be careful when using the ‘filter' on a column because if you are filtering out some criteria, the next time you go to utilize this, it will remember and keep that column filtered according to your last performance.

{{% /note %}}




When ready, click Select next to the provider or organization and their name after verifying the specific location of that provider or organization you wish to select. A provider could work at several locations and the one you select will populate the address details on the order document.

![](../../external_files/cb5416317c24f5929f8c96964816c938.png)

It will then populate the name, of the referable entity you selected, into the **Refer To** section of the e-order.

![](../../external_files/e3c4470280462a932d02bf71641c35f3.png)

You can utilize the auto-complete for the *Refer To* field if you already have memorized referable providers or entities that you commonly refer to and know they are referable entities. You don't always have to click the Advanced Search to be able to select referable entities. When the Advance Search functionality is enabled, this auto-complete in the *Refer To* field behaves the same way. It will result in choices (based on what you type in the auto-complete) of only referable entities or providers from the Provider Management module based on chart types specified in the system setting "Chart Types". *Note: If you do not see addresses next to the provider or organization in the auto-complete choices, contact your MIE Implementer. They will need to program the attribute to show the organizations and addresses a provider is linked to when using the auto-complete. This will help users select the right one as the order printable/faxable document will display that address info.*

![](../../external_files/7e016d6068c51f785a9490734ae88eba.png)
When the order(s) have been requested, you will be taken to the order document view. You will see the referable entities details that have been housed using the Provider Management module.

{{% info %}}

If you do not see the provider or organizations detailed address information, please contact your MIE Implementer. They will need to program the attribute to show the contact information details to this view.

{{% /info %}}


![](../../external_files/98efa674c40c2dfa7a6052921e07930f.png)
