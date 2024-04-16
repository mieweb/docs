---
id: '1oJi_eiW1Rz4O5aJlJjXU2dc2IKUZ-vaeUOCw5M7hnpY'
title: 'Detailed Searching in E-Chart'
date: '2024-03-28T16:01:22.116Z'
version: 105
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1oJi_eiW1Rz4O5aJlJjXU2dc2IKUZ-vaeUOCw5M7hnpY'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
When in the {{% system-name %}} system, the E-Chart sidemenu tab displays recent charts you've accessed, along with ability to search charts by different methods.  E-Chart automatically defaults to search in **Simple** search.

To do a more detailed search, click the Detailed link from the list of Search Types.

![](../detailed-searching-in-e-chart.assets/9bde2d66fe2c7c9955d0d80d9e0fec04.png)

The detailed search filter screen will open with various filter fields to help narrow down a search for a chart by more detail.

![](../detailed-searching-in-e-chart.assets/be5328a4b81c9853b4f592f154594f91.png)

{{% tip %}}
To revert back to simple search, click the Simple search type link.
{{% /tip %}}

Within the Detailed search screen, there are many fields you can create a detailed search for and many criteria you can select from in each drop-down field. It is not necessary to select or set something in every field. You can search by any or as many fields as you wish in order to narrow down your results. The more fields filled out, the more detailed and narrower the search.

{{% tip %}}

## Contains Search

The percent sign (%) is a hotkey to perform a CONTAINS search, followed by the letters you wish to search. In this example, we typed %art in the name field and clicked the **Search** button.  The system resulted matching charts with names of the letters ‘art' in them.

![](../detailed-searching-in-e-chart.assets/6a46b0bd7f99d2479da83dc546bfbb51.png)

{{% /tip %}}

When done keying in any detailed search criteria fields, click the **Search** button to render the results or the **Clear All** button to start another search.

## SSN Search

By default, {{% system-name %}} system setting *Search for SSN* is disabled. This feature will allow for searching by SSN from simple and detailed searches, as well as the Document Queue search. 
![](../detailed-searching-in-e-chart.assets/2b65024220b01048e7ee520ccadf68c1.png)

{{% note %}}
Disabling the SSN search does not turn off the ability to search by SSN in other modules or layouts. Contact your MIE Implementer if you wish SSN search to be turned off in other modules/layouts of  {{% system-name %}}.
{{% /note %}}

If *Search for SSN* is enabled, the SSN radio button will display in the search field criteria and the "SSN" column will display. If your practice wishes not to offer the search by SSN nor show the "SSN" column in the patient search screen, make sure the system setting is disabled.

![](../detailed-searching-in-e-chart.assets/7c4ed8481cc53b68b5e7850f9ada05d8.png)

![](../detailed-searching-in-e-chart.assets/4e99c04b57f9c544f78e563c442a0167.png)

## Preferred Name Search

Two new system settings are available for clients on release 202403 and newer. Both settings are disabled by default, but can be enabled at the client's discretion. When the *Show Preferred Name Column* system setting is enabled, a new column called "PREFERRED" will display in the Recent Patient/Employee list.

![](../detailed-searching-in-e-chart.assets/4063f246e076fd3cc5f70b9ea4ae3923.png)

![](../detailed-searching-in-e-chart.assets/8d9d7e846bccc406f9b8b35dce5fb702.png)

When the system setting *Show preferred name on results* is enabled, the Simple and Detail patient search will return results that BEGIN with the first name or the preferred name as entered in the preferred name field. For example, if the name "Bill" is entered in the Preferred name field, and the search criteria of "Har, Bill" is entered, the Simple and Detailed search will locate charts that contain charts with a last name that begins with "Har" and the first or preferred name that begins with "Bill". If the Preferred name field is entered as "Billy Bob", and the search criteria is entered as "Har, Bob" it will not return this chart in the search results.

![](../detailed-searching-in-e-chart.assets/1d0354f184ccfd9fdc3fb563abb5ee36.png)

![](../detailed-searching-in-e-chart.assets/8cba6f95a29bcb0ee48e4cd0a1d20d3b.png)
