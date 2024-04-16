---
id: '1uF8fI9QX3B_x4NeMoieH6XXnsJBHKRnaU1F_J-t99sA'
title: 'Audiogram Data Entry'
date: '2024-03-15T15:05:52.573Z'
version: 257
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - '../scanning-and-indexing/indexing-bubble-forms.md'
  - '../scanning-and-indexing/indexing.md'
  - '../../system-administration/interfaces/audio-tool-tab.md'
  - '../../system-administration/interfaces/device-interface-audio-system.md'
  - '../../system-administration/interfaces/device-interface-audio-tremetrics-maico.md'
source: 'https://drive.google.com/open?id=1uF8fI9QX3B_x4NeMoieH6XXnsJBHKRnaU1F_J-t99sA'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Audiogram results can be addressed a few different ways in {{% system-name %}}. Bubble forms are an efficient solution for data entry and often used by clients with mobile audio units or remote clinics that may not have internet. Bubble forms are document type templates with special formatting that allow data to be collected discreetly when scanned and indexed into the {{% system-name %}} system.

Bubble forms also work well added to Print Definitions, particularly for providers that do not use interfaced equipment. Bubble forms can also be developed so that a stack of the forms can be printed and taken onsite, where they then can be scanned and indexed, afterward.

## Bubble Form

There is a standard audiogram bubble form that is available in the {{% system-name %}} system. This bubble form collects audiogram data, and once scanned and indexed into the system, the optical marks are read and the interpreted data is stored discreetly, within the appropriate chart.

To access and utilize a bubble form to record information, simply navigate to the Forms Library and print the *Audiogram Bubble Form*. After the form has been completed, scan the form into the system and index it, accordingly. If any of the indexed information needs editing immediately after scanning, simply use the confirmation window to edit and/or verify all other values were read correctly. Once the scanned document and values are confirmed, the data will index into the chart in context, as appropriate. To better understand the scanning and indexing of bubble forms, review the [Indexing Bubble Forms](../scanning-and-indexing/indexing-bubble-forms.md) and [Indexing](../scanning-and-indexing/indexing.md) documentation.

1. While in the appropriate chart, access and print the audiogram bubble form by clicking the <strong>Add Document</strong> link. This will open the Document/Forms Library, where all forms can be accessed.
2. Find and open the necessary form by visually locating it in the list and clicking the <strong>Form</strong> link. Otherwise, begin typing in the <strong>Doc Type Search</strong> autocomplete, select the appropriate form, and click <strong>Submit</strong> to open the document.

![](../audiogram-data-entry.assets/3ccbe73dd79d0d0eb7bfa330b4cfade6.png)

3. Print out the bubble form.
4. Record the results by coloring in the respective bubbles, then scan and index the form(s) back into the appropriate chart(s).

    ![](../audiogram-data-entry.assets/96ef6999eb9caae450f1a81a5a1a0c54.png)

{{% info %}}
Bubble forms can also be generated as generic, unassociated with a specific chart, to allow for mass use. Print a stack of generic forms to take onsite, and afterward, scan and index them into the appropriate charts.
{{% /info %}}

## Manual Entry

There are alternative, manual processes outside of using and scanning in bubble forms. These options include using an interfaced device and importing data into the system, which can be edited and/or updated, manually; or by using the appropriate encounter or adding and inputting the results as test/procedure results within or outside of an encounter. Both of these methods are also highly effective.

### Audio Tool Tab

#### Audio Questionnaire

Use the toggle button in the upper left hand corner of the Audio tool, to Show/Hide the Audiogram questionnaire. This questionnaire is the minimum set of pre exam questions as required by OSHA, however, additional questions can be configured upon request.

![](../audiogram-data-entry.assets/0a69052871b1e86df3c4ea1f89a1b421.png)

![](../audiogram-data-entry.assets/71167e3bdcf1b601296eb6b0fd868d35.png)

#### Audio Tool Data Entry

Legacy system client databases may have an **Audio Tool** chart tab. If using the **Audio Tool** chart tab, click the *Add Audiogram* link to add Audiogram test results.

![](../audiogram-data-entry.assets/511d152edeb215741ae057eec955a369.png)

{{% note %}}
In RC201812 and newer, the Add Audiogram link has been removed in favor of using the Order Quick Links patient portlet.
{{% /note %}}

Prior result data displays on the top portion of the Audio tool. If there aren't any prior audiogram results on file, this box will be empty.

![](../audiogram-data-entry.assets/b1f53b6c70cc23be084f1cf3b84babc1.png)

Click the NEW button to manually add audio results. To edit an existing study on file, click on the prior study located on the top half of the tool, then click the EDIT button.

![](../audiogram-data-entry.assets/9dc87835e7da23734b48a9886299875e.png)

For manual entry:

Enter results from the device output

* Data results are 1-2 numeric characters in increments of 5.
* NR- No Result should be manually entered as 99.

Manually enter New or Edit existing results for left ear, right ear, device number, test date, calibration date and outside service provider and location, if applicable.

![](../audiogram-data-entry.assets/00fb859014089142ae63823199cd0286.png)

The *device number* field is typically for device interfaces to prefill the serial number, etc from the device interface, however, for clients on RC202303 and newer, it is also a free text field where you can manually document your audio device's serial number for capture on the audiogram document.

![](../audiogram-data-entry.assets/1847c04d339edff9a1707207f3709c74.png)

Users may also choose to indicate a "Reason for Test" as listed in the drop down and type any free text comments. The *asset* field is an autocomplete that is tied to assets configured in the Asset Management module. This module must be implemented to utilize this field. If selected, the system will use the last calibration date chosen for the current audiogram asset. The calibration date will automatically pre populate based on the current selected asset from this field.

{{% info %}}
The Asset field will be "remembered" and will pre-populate upon the next audiogram entry for any patient.
{{% /info %}}

![](../audiogram-data-entry.assets/a3940329aeeed54a177e2f12923dceb8.png)

Once all applicable data has been entered, click the SAVE button. The user may at any time click the CANCEL button to cancel data entry.

![](../audiogram-data-entry.assets/a66edda62a5d20fb165312c66eed37ab.png)

Once saved, users will see a confirmation message. Click OK to close the success message.

![](../audiogram-data-entry.assets/56a782146598399b76f0ff63e46acfd4.png)

The data will be stored in the **Audiogram and Documents** chart tabs. If the Outside Service Provider field is entered on the audio tool, then this name will display as the author of the audio document rather than the user that most recently modified the test.

For additional information on the Audiogram Tool functionality, refer to the [Audio Tool Tab](../../system-administration/interfaces/audio-tool-tab.md) documentation.

### Add from Encounter Section

The preferred alternative to the bubble form and the Audio Tool Tab is entering results through the **Tests & Procedures** section of a Visit encounter.

The Audiogram may be added to a Visit encounter in multiple ways. One method is by simply clicking the *Lightening Bolt/Add to Exam* button to the right of the order.  This will add a dynamic encounter section to the exam for manual data entry.
![](../audiogram-data-entry.assets/d5216ff587e8de715069451e30f0cb27.png)

Another method in the **Tests & Procedures** section is to expand the section and manually select the audiogram order from the Pending Due List, then click the *Add to Exam* button.

![](../audiogram-data-entry.assets/15e3008ba23f9a95808335c727a2dae4.png)

If the audiogram is not found on the Pending Due List, the order can be found using the autocomplete and added to the visit encounter using the *Add to Exam* button.

![](../audiogram-data-entry.assets/33f261c5ff42de6ffd23563e00b0d537.png)

Alternatively, the audiogram may be selected using the **Picklist** icon by selecting the order from the list and adding it to the visit encounter.

![](../audiogram-data-entry.assets/cd79eef47f6094812902109c5baae480.png)

### Import Audio Data From Device

From the Test Results Audiogram encounter, or from the applied Audiogram section of the Visit encounter, users have the ability to import audiogram results from a device, instead of manually entering results. To utilize the semi-automatic process of uploading results from the device interface, simply scroll down to the bottom of the Audiogram encounter, or section. Several device interface options display. Select the applicable interface(s) that have been configured for your system to upload results. Audiogram interfaces do require additional configuration. If you don't currently have a device interface and are interested in one, please reach out to your support representative.

For more information on device interfaces and file uploads, see the help documentation [Device Interface – Audio System](../../system-administration/interfaces/device-interface-audio-system.md) and [Device Interface – Audio-Tremetrics-Maico](../../system-administration/interfaces/device-interface-audio-tremetrics-maico.md).

![](../audiogram-data-entry.assets/ee87c8b54dadf9d0ac39f44351884ab4.png)

![](../audiogram-data-entry.assets/f2bb4ffec262b708226112a51313289e.png)

## Reporting

{{% system-name %}} has several out of the box Audiogram reports. Click on the *Reports* sidemenu to navigate to the Reports module. The Reports landing page lists each report along the left side of the screen. While Audiogram reports display near the top of this list, other reports require scrolling. Therefore, top menu tabs have been added to break this list up into easily identifiable sections. Audio reports display under the Visits tab. Clicking on the main reports landing page or the report under the Visit tab, will navigate users to the standard Audiogram reports.

![](../audiogram-data-entry.assets/dc010928e17fc05064d152dd62d48477.png)
