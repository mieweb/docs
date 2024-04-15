---
id: '1fpy2bWS8axvI2RAYvrKOr1g0iAJ-Lj5mO_y_fgM0EOU'
title: 'E-Orders - Refer To Advanced Search'
date: '2020-03-13T19:26:45.630Z'
version: 52
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1fpy2bWS8axvI2RAYvrKOr1g0iAJ-Lj5mO_y_fgM0EOU'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Companies using {{% system-name %}} may want a method to manage their external providers. System Administrators may compile as directory of providers commonly referred to or utilized. The directory may contain providers within their own practice and/or contracted providers. Details captured on the provider include location and contact information, languages spoken, specialty and contracted procedures listing. Out of the box credentialing information includes NPI, TIN, License numbers and expiration dates, DEA numbers and expiration dates and a next credentialing due date. Standard reports include detailed lists of providers requiring re-credentialing. The module can be custom configured to capture other specific details practices may wish to track, as well as any custom reporting on those fields.

If your practice manages external providers utilizing our Provider Management module and houses them as provider or provider organization ‘charts' within your {{% system-name %}} system, you will want the ability to Advanced Search when generating an e-order. Vendors (physician groups, ambulatory surgical centers, hospitals, transportation companies, etc.) are Provider Organizations in {{% system-name %}} . The Advanced Search functionality help users identify who an in-network or referable entity/provider may be for when they need to generate a referral order on a patient. It can also be utilized to perhaps to help users identify providers or referable entities that specialize in a particular body part, service, or speak in another language to assist with the patient's needs. We call this module Provider Management in {{% system-name %}} . See additional help documentation titled *Provider Management.pdf* This help document is addressing the Advanced Search hyperlink found while generating an e-order on a patient.

![](../e-orders-refer-to-advanced-search.assets/c1b3cec56d0d133e80dbdf2c466e4e4c.png)

The system setting System, External Provider, Use Charts must be enabled (value 1) for the Advanced Search hyperlink to appear while creating an e-order. Your practice must be managing external providers/organizations using the Provider Management module.

![](../e-orders-refer-to-advanced-search.assets/977e6a5d639de64dc1cb9fd50e6e0b2e.png)

The specific chart types to be looked at in resulting choices in the Advanced Search must also be set in the system setting System, External Provider, Chart Types.

![](../e-orders-refer-to-advanced-search.assets/b2476997f303d4f9e0791544275c6b4b.png)

In order for the Advanced Search functionality to result choices, the referable providers/organizations must first have been entered in the Provider Management module. See other help documentation titled *Provider Management.pdf*

![](../e-orders-refer-to-advanced-search.assets/7dd3be3e3d9eb1efba1a46c2bce21cf4.png)

While creating an e-order for the patient (either via the add order module or within a visit encounter), you will see the Advanced Search link next to the **Refer To** auto-complete field.

![](../e-orders-refer-to-advanced-search.assets/c1b3cec56d0d133e80dbdf2c466e4e4c.png)

Click Advanced Search to access the library of referable providers/organizations that are stored and managed in your Provider Management module.

![](../e-orders-refer-to-advanced-search.assets/0aa6847a67a94ea071acd0295d5aa59b.png)

{{% note %}}
The Advanced Search lists/results all chart choices where: 1) The chart type are those of which are set in the system setting "Chart Types" and 2) of those charts/chart types only lists/results the ones marked as "referable entity" and 3) are active charts. Only referable providers or provider organizations will display here for selection in the External Providers screen. So if you do not see a provider or organization listed here while utilizing the Advanced Search to document who is referring the patient to on the order, it is because that provider or organization chart is not flagged as a referable entity.
{{% /note %}}

![](../e-orders-refer-to-advanced-search.assets/4bec90c8d80bf805cce39fadae0b80b9.png)

While here in the *External Providers* selection screen, you see a grid of all referable providers or provider organizations that are managed in your Provider Management module. A Provider is a ‘Chart' for a provider. A Provider Organization is a ‘Chart' for an Provider Group that can have relationships to Providers. Again, only providers or organizations that are flagged as *referable entities* will display here for selection. If a provider practices at multiple locations, there will be a line item for that provider for *each* address so the user can decide which location to send the patient.

![](../e-orders-refer-to-advanced-search.assets/9ac35fc6c7d160098bb96cad1c807a9b.png)

You can utilize the right scroll bar at the bottom of the *External Providers* screen to see more identifying information regarding the referable provider or organization such as language, office hours, address, body parts they treat etc. This result grid can be a customized layout of specific columns/data you wish to result.

![](../e-orders-refer-to-advanced-search.assets/ed99fd066213e868dc4926af833b5279.png)

You can also use the filter feature on any column by clicking the ? icon on any column. You can filter the selections on this screen to perhaps only display to you providers that specialize in a particular language. You can utilize the filter on any column of this grid.

![](../e-orders-refer-to-advanced-search.assets/37ff715c9386f79d31e0d9765153a3b9.png)

You can also drag and drop columns in any order you wish. Perhaps *body part treated* is something always relevant to your selections when referring patients. You may want to drag and drop that column to be after the ‘name' column so you can easily visibly look for selections that way. The system will remember your column order preference.

![](../e-orders-refer-to-advanced-search.assets/516cd45c40e04be009b9bac7aad58863.png)

{{% note %}}
When you filter or drag/drop a column, the system will remember that for the next time you log in or access this External Providers screen. Please be careful when using the ‘filter' on a column because if you are filtering out some criteria, the next time you go to utilize this, it will remember and keep that column filtered according to your last performance.
{{% /note %}}

When ready, click Select next to the provider or organization and their name after verifying the specific location of that provider or organization you wish to select. A provider could work at several locations and the one you select will populate the address details on the order document.

![](../e-orders-refer-to-advanced-search.assets/52aae338dfb813c2576db2fbae8e5b6c.png)

It will then populate the name, of the referable entity you selected, into the **Refer To** section of the e-order.

![](../e-orders-refer-to-advanced-search.assets/49781ec9712343e7a228f1fe8f8add31.png)

You can utilize the auto-complete for the *Refer To* field if you already have memorized referable providers or entities that you commonly refer to and know they are referable entities. You don't always have to click the Advanced Search to be able to select referable entities. When the Advance Search functionality is enabled, this auto-complete in the *Refer To* field behaves the same way. It will result in choices (based on what you type in the auto-complete) of only referable entities or providers from the Provider Management module based on chart types specified in the system setting "Chart Types". *Note: If you do not see addresses next to the provider or organization in the auto-complete choices, contact your MIE Implementer. They will need to program the attribute to show the organizations and addresses a provider is linked to when using the auto-complete. This will help users select the right one as the order printable/faxable document will display that address info.*

![](../e-orders-refer-to-advanced-search.assets/0f1f4c315479f0f3d58168da5cf66505.png)

When the order(s) have been requested, you will be taken to the order document view. You will see the referable entities details that have been housed using the Provider Management module.

{{% info %}}
If you do not see the provider or organizations detailed address information, please contact your MIE Implementer. They will need to program the attribute to show the contact information details to this view.
{{% /info %}}

![](../e-orders-refer-to-advanced-search.assets/c35e8ceda86c4e5bd76cfe2759a9670d.png)
