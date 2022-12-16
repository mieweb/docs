---
id: '16p4qLN-NFRG4ZZ61_cRrU3X5iw7fmZ-B1JMZYh_Vo8c'
title: 'Indexing Bubble Forms'
date: '2020-03-09T15:08:14.503Z'
version: 41
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=miewebscan'
  - 'https://system/?f=admin&tabmodule=admin&tabselect=My+Settings'
source: 'https://drive.google.com/open?id=16p4qLN-NFRG4ZZ61_cRrU3X5iw7fmZ-B1JMZYh_Vo8c'
wikigdrive: '2abeb591fccd09f9dcebef69bca681875d9cdcb0'
menu:
  main:
    name: 'Indexing Bubble Forms'
    identifier: '16p4qLN-NFRG4ZZ61_cRrU3X5iw7fmZ-B1JMZYh_Vo8c'
    parent: '1pwmW3emkb6f6tktfbMmtsZOKMk1XGa6a8VtvCQz269w'
    weight: 690
---
Bubble forms are designed to record discrete data and index the information as observations in the chart. Bubble forms are document type templates that have special programming marks, which allow them to make quick and easy work of collecting granular data using the {{% system-name %}} WebScan module.

Generating a bubble form is as simple as navigating to the **Forms Library** and printing the preferred bubble form(s). Once printed, the form(s) can be completed and scanned into the {{% system-name %}} system. Scanning will read the optical marks, or bubbles, and the data will be picked up and indexed upon confirmation.  
{{% note %}}

It is important to scan in batches as black/white. If a bubble form is scanned in as grayscale, the system may not read the bubbles on the form correctly.
{{% /note %}}
In order to index data or address indexing tasks, users must have the appropriate security permissions provided. The *Add Observations* security permission requires a minimum of **Add** ability, in order to perform the necessary functions. An error notification will display if the user does not have the necessary permissions granted.
To index a bubble sheet:
1. Navigate to the [WebScan](https://system/?f=miewebscan) module from the sidemenu, and find the batch with the bubble forms to index. Click the <strong>Open</strong> link for the batch.
2. Once the batch opens to the <em>Index Information</em> screen, click the <strong>Process BarCodes</strong> button, found near the center of the toolbar, at the top of the window.
3. Next, click the <strong>Bubble</strong> button on the toolbar. The system will read the optical marks (i.e., bubbles) on the form and populate the data into a confirmation pop-up window.
  
![](../indexing-bubble-forms.assets/10000201000003D10000013EE2176F9B1EADD7C3.png)  
  
{{% info %}}  
Fields on bubble forms can be customized and configured, as needed. Fields can be set up with ranges, so result criteria falling outside of a specified range will produce an alert. Likewise, fields can be flagged as required, producing an alert if left blank.  
{{% /info %}}
4. Verify the values in the confirmation pop-up window. If an optical mark was not dark enough, or a bubble could not be read, changes may be updated or entered into the appropriate fields of the confirmation window. Fields with illegible marking, or that were left blank, will be skipped during processing, and the entry will display as blank. Zeroes (0) are not entered, by default.
  
![](../indexing-bubble-forms.assets/100002010000076F0000027FC4215DE4D2671D0E.png)  
  
{{% info %}}  
The confirmation window will always show U.S. customary units of measure, regardless of the preference setting for the user, or whether or not the bubble form was filled out with metric measurements. In this screenshot, the weight that was entered was 111.2 kg, but when the indexing was performed, the system read and converted the data, translating into an English equivalent of approximately 245.15 lbs.  
![](../indexing-bubble-forms.assets/10000201000002C600000169DAE085242CB50619.png)  

{{% /info %}}
5. Click the <strong>Confirm</strong> button to confirm the observation data. This stores the discrete data in the specified chart, immediately upon confirmation. If specific fields have assigned parameters and errors are detected, a pop-up window will appear allowing for changes to be made, accordingly.
6. Continue indexing any additional pages in the batch, as needed.
7. After indexing the entire batch, click the <strong>Upload to Chart</strong> button to upload the indexed documents to the specified chart.
  
![](../indexing-bubble-forms.assets/10000201000005550000008C651D15ADE5BB249F.png)  

Once uploaded, the form image will be stored in the respective chart, and the discrete data will feed into the appropriate chart as observations, where they can be reviewed under the **Medical Record Observations/Flowsheets** chart tab. Here, the uploaded observation values can be seen in detail with the date(s) from the indexed bubble form(s).
  
![](../indexing-bubble-forms.assets/100002010000039100000148739AD4946506D424.png)  

{{% tip %}}

The observation flowsheets display the unit of measure set in the [My Settings](https://system/?f=admin&tabmodule=admin&tabselect=My+Settings) menu. Select *Metric* or *English* for the **Preferred Unit System**.
{{% /tip %}}
