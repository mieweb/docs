---
id: '1hyDYvLJrjLq1NQuCLqllfCDwmGQhzru2rj1Y-Lh4-Vk'
title: 'Audio Tool Tab'
date: '2023-11-13T18:04:32.763Z'
version: 272
lastAuthor: 'Alice Uhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/injury-care/case-management/adding-osha-case/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/interfaces/device-interface-audio-system/'
  - 'https://docs.enterprisehealth.com/functions/system-administration/interfaces/device-interface-audio-tremetrics-maico/'
  - '../../document-management/scanning-and-indexing/indexing-bubble-forms.md'
  - '../../document-management/scanning-and-indexing/indexing.md'
source: 'https://drive.google.com/open?id=1hyDYvLJrjLq1NQuCLqllfCDwmGQhzru2rj1Y-Lh4-Vk'
wikigdrive: '18ac9a8be49637c0d2bea8d32c40badbcda9a0ca'
---
Within {{% system-name %}}, you may have a chart tab named *Audio Tool* where you can import audiogram results manually or by device interface. If using the *Audio Tool* chart tab, click the *Add Audiogram* link to add Audiogram test results. 

The Audiogram Tool tab is no longer configured by default in favor of using the Visit encounter for manual data entry. Should you want to utilize this chart tab, contact your support representative for assistance. The Audio Tool functionality is the same whether initiated from the Audio Tool chart tab or from within the Visit encounter. 

![](../audio-tool-tab.assets/511d152edeb215741ae057eec955a369.png)



### Audio Questionnaire

Use the toggle button in the upper left hand corner of the Audio tool, to Show/Hide the Audiogram questionnaire. This questionnaire is the minimum set of pre exam questions as required by OSHA, however, additional questions can be configured upon request.


![](../audio-tool-tab.assets/0a69052871b1e86df3c4ea1f89a1b421.png)



![](../audio-tool-tab.assets/71167e3bdcf1b601296eb6b0fd868d35.png)



### Audio Tool Data Entry

Prior test result data displays on the top portion of the Audio tool. If there aren't any prior audiogram results on file, this box will be empty.

![](../audio-tool-tab.assets/3df1ba0b8bc4f03379eb5ea3026b6c55.png)


Click the NEW button to manually add audio results. To edit an existing study on file, click on the prior study located on the top half of the tool, then click the EDIT button. 

![](../audio-tool-tab.assets/cdbcdc9a32fdba2e3ed2671e3bb0f0ab.png)

For manual entry:  
Enter results from the device output
* Data results are 1-2 numeric characters in increments of 5.
* NR- No Result should be manually entered as 99.
Manually enter New or Edit existing results for left ear, right ear, test date, calibration date and outside service provider and location, if applicable. 

![](../audio-tool-tab.assets/4b2bea1bf4433fe6eec7bd018ac9b687.png)


Users may also choose to indicate a "Reason for Test" as listed in the drop down and type any free text comments. The *asset* field is an autocomplete that is tied to assets configured in the Asset Management module. This module must be implemented to utilize this field. If selected, the system will use the last calibration date chosen for the current audiogram asset. The calibration date will automatically pre populate based on the current selected asset from this field.  
{{% info %}}

The Asset field will be "remembered" and will pre-populate upon the next audiogram entry for any patient.
{{% /info %}}

![](../audio-tool-tab.assets/a3940329aeeed54a177e2f12923dceb8.png)


Once all applicable data has been entered, click the *Save* button. The user may at any time click the *Cancel* button to cancel data entry.

![](../audio-tool-tab.assets/a66edda62a5d20fb165312c66eed37ab.png)


Once saved, users will see a confirmation message. Click OK to close the success message.

![](../audio-tool-tab.assets/56a782146598399b76f0ff63e46acfd4.png)


The data will be stored in the **Audiogram and Documents** chart tabs. If the Outside Service Provider field is entered on the audio tool, then this name will display as the author of the audio document rather than the user that most recently modified the test.

### Baselines and Alerts

Click the *Baseline History* button to see a history of baseline studies.

![](../audio-tool-tab.assets/3746462812d62a7c19d80be9308252d5.png)


Users may select a prior Audio result (baseline- highlighted in neon green) and compare it to any other previous result dated after the baseline. Comparison results will calculate any shift in hearing and adjust for normal age corrected hearing deficits. The system will then analyze the results and determine if the shift has occurred, as well as indicate if the shift is potentially recordable to OSHA.


![](../audio-tool-tab.assets/d72110f8ac9c70a2d280702a8627cef3.png)



### Alerts

By default *{{% system-name %}}* will alert the user when an Standard Threshold Shift, or STS, or OSHA recordable shift has been calculated. If no shift is detected, then the red alerts will not display. Clients may optionally display an additional alert for NSTS, National Institute for Occupational Safety and Health Standard Threshold Shift.

#### STS and OSHA Alert

A Standard Threshold Shift, or STS, is defined as a change in hearing threshold, relative to the baseline audiogram, of an average of 10 decibels (dB) or more at the 2, 3, 4 kHz in one or both ears. If an employee's hearing test reveals that the employee has experienced a work-related Standard Threshold Shift (STS) in hearing in one or both ears, and the employee's hearing level is 25 decibels (dB) or more above audiometric zero (averaged at 2, 3, 4 kHz) in the same ear(s) as the STS, an employer must record the case on the OSHA 300 Log. For customers that also log OSTS, please note that the OSHA alert definition is equivalent to the OSTS (Occupational Safety and Health Administration standard threshold shift) standard.

Audio Results display with a "Non Age Corrected Shift" and "Age Corrected Shift".  Providers should use the Corrected STS based on the appropriate standard mandated by corporate, state or federal guidelines. Example 1: Company XYZ medical protocol may require all STS's are calculated using an age corrected shift. Example 2: The State of Oregon law requires all STS's be calculated without using age correction. Example 3: some OSHA panels, like Mining Health Surveillance, require results be calculated without age correction. Clinicians and Reviewing Medical Officers should reference their company standard operating procedures for appropriate guidelines to be followed.


![](../audio-tool-tab.assets/3d8661afc09bca0f5ecc307e7e2fe092.png)


Upon request, both the age shift criteria and the guidelines to flag a possible OSHA recordable event may be customized with additional configuration. Additional logic can also be scoped for clients with very specific needs. For example, patients located in China may follow a different shift standard than those patients observed in the United States. Clients should contact their support representative if additional configuration is required and for a level of effort to be determined.

In the event a STS has been detected a second pop up message will display warning the user that an STS has been detected and to retest any employees in the Hearing Conservation Program within 21 days.  All other patients/employees should be counseled or appropriate referrals made as considered by the clinician.

![](../audio-tool-tab.assets/942795b0230c7d5b70035ee9c91aacc9.png)

The system default warning notifies the user to retest *within* 21 days.  OSHA requires the employee be retested *within* 30 days of the first test. If the retest does not confirm the recordable STS, you are not required to record the hearing loss case on the OSHA 300 Log. If the retest confirms the recordable STS, you must record the hearing loss illness within seven (7) days of the retest. **To record the hearing loss illness, a Work-Related Injury/Illness Case must manually be opened by the clinician or appropriate staff member confirming the OSHA Recordable STS.** *See additional online help guide named* [*Adding OSHA Case*](https://docs.enterprisehealth.com/functions/injury-care/case-management/adding-osha-case/)*.*

#### NSTS Alert

When the **Show NSTS Values** system setting (E-Chart, Audio, Show NSTS Values) is enabled, {{% system-name %}} will display an **NSTS** alert on the Audio Tool data entry screen if an NSTS is calculated. Additionally, a column for the NSTS alert flag will display on the finalized document. By default this system setting is disabled. The NSTS shift is defined as any one frequency (except for 8 KHz) that has a shift of greater than 15 dB, AND is greater than or equal to 25 dB.

![](../audio-tool-tab.assets/4cad2615bb6174102cfe410cddc85bc8.png)


![](../audio-tool-tab.assets/3d54e45325c2cb84bef3559f01295414.png)


### Stable

If no STS is observed after a baseline has been set, results will display as **Stable**.


![](../audio-tool-tab.assets/0bea7a501950a52c95b0673fd3e1329e.png)



### Graphing

Users may graph Audio results by clicking the *Graph* button. The *Graph* button is grayed out and not available to the user if the user has not selected 2 studies for comparison. Once 2 studies have been selected for comparison, click the *Graph* button to display the graph comparison. To select 2 studies for comparison, while on the first graph you hold the control key down and select the second test and then click the *Graph* button.

![](../audio-tool-tab.assets/87c6e757e5249e1e92746e3fcd10bde3.png)



![](../audio-tool-tab.assets/a8a9364b2c33ba2f672c56df6bedca5f.png)



### Importing Audiogram Results from a device

At the bottom of the Audio Tool users are provided with an option to import audiogram data from external devices. If audio device imports were not included with your *{{% system-name %}}* deployment, please contact your support representative. Additional configuration is required to import from devices.


![](../audio-tool-tab.assets/f2bb4ffec262b708226112a51313289e.png)



*See additional online help guide named* [*Device Interface-Audio System*](https://docs.enterprisehealth.com/functions/system-administration/interfaces/device-interface-audio-system/)* (MI),* [*Device Interface- Audio: Tremetrics/Maico*](https://docs.enterprisehealth.com/functions/system-administration/interfaces/device-interface-audio-tremetrics-maico/)


### Summary Document

When the audiogram has been completed and the encounter exam is archived and closed, a final summary document is inserted into the chart with the test data, graphs and supplemental questionnaire information. Additionally, users may click on the "Compare" link from within the document to compare today's results with other results on file.


![](../audio-tool-tab.assets/9749f8a5fb4ceee20d835e2c28ef6c60.png)



### Bubble Forms

*{{% system-name %}}* also offers a standard audiogram bubble form that is available by default in the {{% system-name %}} system. This bubble form collects audiogram data, and once scanned and indexed into the system, the optical marks are read and the interpreted data is stored discreetly, within the appropriate chart.

![](../audio-tool-tab.assets/a50c6d25ee271a8234b76c3017deae01.png)


To better understand the scanning and indexing of bubble forms, review the [Indexing Bubble Forms](../../document-management/scanning-and-indexing/indexing-bubble-forms.md) and [Indexing](../../document-management/scanning-and-indexing/indexing.md) online help documentation.
