---
id: '1hyDYvLJrjLq1NQuCLqllfCDwmGQhzru2rj1Y-Lh4-Vk'
title: 'Audio Tool Tab'
date: '2020-02-27T20:26:28.878Z'
version: 45
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1hyDYvLJrjLq1NQuCLqllfCDwmGQhzru2rj1Y-Lh4-Vk'
wikigdrive: 'eb4f9f8e82d104274f4630740771c9319ef63af0'
menu:
  main:
    name: 'Audio Tool Tab'
    identifier: '1hyDYvLJrjLq1NQuCLqllfCDwmGQhzru2rj1Y-Lh4-Vk'
    parent: '1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q'
    weight: 5430
---
Within {{% system-name %}} , you may have a chart tab named *Audio Tool* where you can import audiogram results manually or by device interface. Contact your MIE Implementer for set up. From the *Audio Tool* chart tab you can click Add Audiogram to add data results.
![](audio-tool-tab.assets/100002010000030E00000104A8DBA2AEAB977B22.png)
Prior result data displays on the top portion of the Audio tool. If aren't any prior audiogram results on file, this box will be empty.
![](audio-tool-tab.assets/100002010000029A000001310EFFE6CD7B999363.png)
Click the NEW button to manually add audio results or to Import data from an MIE approved integrated device. If you need to edit an existing study on file, click the EDIT button.
![](audio-tool-tab.assets/1000000000000191000000D6654F8430F6C203FE.jpg)
For manual entry:
Enter results from the device output
* Data results are 1-2 numeric characters in increments of 5.
* NR- No Result should be manually entered as 99.
Manually enter New or Edit existing results for left ear, right ear, test date, calibration date and outside service provider and location if applicable, then click the SAVE button. The user may at any time click the CANCEL button to cancel data entry.
![](audio-tool-tab.assets/10000000000001C3000000F3323720171F7E50A6.jpg)
Once saved, you will get confirmation. Click OK to close success message.
![](audio-tool-tab.assets/1000020100000119000000B0097465D2254C5A66.png)
The Service Provider field on the audio tool shows the author of the audio document if it's set instead of the user that most recently modified the test.
Click the Baseline History Button to see a history of baseline studies.
![](audio-tool-tab.assets/100002010000021B00000086BEA7409201BAA772.png)
User may indicate a "reason for test" as listed in the drop down and type any free text comments. There is also an *asset* field which you can the name of an audiogram asset (if your practice utilizes the Asset Management module). By selecting a specific audiogram (using this auto-complete field) tied to your asset module, it will use the last calibration date chosen for the current audiogram asset. The calibration date will automatically be filled based off the current selected asset from this field.
{{% info %}}

this field will be "remembered" and will pre-populate upon next audiogram add for any patient.
{{% /info %}}
![](audio-tool-tab.assets/1000020100000255000000917EB1C07E9336ED63.png)
Importing data from a device: *see additional help documentation named Device Interfaces-Audio Systems.pdf*
If the client uses an MIE-approved integrated audio device, the user may point their smartcard folder to wherever the user stores audio results on their PC. [See changing your smart card folder at the bottom of this guide.] The user may select the results to import and click the "Upload File" button. NOTE: The user should follow their audio device instructions on exporting results, creating an export data file and storing that file on their PC. Once the export file is successfully created from the audio device software, it may be imported into {{% system-name %}} .
![](audio-tool-tab.assets/10000201000002AF000000CC578DA4E3041CFE88.png)
Regardless of manual or imported results, the user should ask the patient the minimum OSHA audio questionnaire and document the patient's responses.
![](audio-tool-tab.assets/100002010000039500000109924BDFC51B7FB385.png)
The user may select a prior Audio result (baseline- highlighted in neon green) and compare it to any other previous result dated after the baseline. Comparison results will calculate any shift in hearing and adjust for normal age corrected hearing deficits. The system will then analyze the results and determine if the shifts in hearing are Stable or if a shift has occurred that would be recordable to OSHA.
![](audio-tool-tab.assets/10000000000001E800000178EAB6EF074D0357D3.jpg)
A Standard Threshold Shift, or STS, is defined as a change in hearing threshold, relative to the baseline audiogram, of an average of 10 decibels (dB) or more at the 2, 3, 4 kHz in one or both ears. If an employee's hearing test reveals that the employee has experienced a work-related Standard Threshold Shift (STS) in hearing in one or both ears, and the employee's hearing level is 25 decibels (dB) or more above audiometric zero (averaged at 2, 3, 4 kHz) in the same ear(s) as the STS, an employer must record the case on the OSHA 300 Log.
Audio Results display with a "Non Age Corrected Shift" and "Age Corrected Shift".  Providers should use the Corrected STS based on the appropriate standard mandated by corporate, state or federal guidelines. Example 1: Company XYZ medical protocol may require all STS's are calculated using an age corrected shift. Example 2: The State of Oregon law requires all STS's be calculated without using age correction. Example 3: some OSHA panels, like Mining Health Surveillance, require results be calculated without age correction. Clinicians and Reviewing Medical Officers should reference their company standard operating procedures for appropriate guidelines to be followed.
![](audio-tool-tab.assets/10000000000001E70000003B75FC41E7FED6A119.jpg)
By system default, if a STS is NOT detected, the "Analysis" field will display as ‘Stable' and the "Possible OSHA Recordable" field will display as ‘no'. If a STS is detected, the "Analysis" field will display with a red ‘STS' and the "Possible OSHA Recordable" field will display as ‘yes'.
Upon request, both the age shift criteria and the guidelines to flag a possible OSHA recordable event may be customized with additional configuration. Additional logic can also be scoped for clients with very specific needs. For example, patients located in China may follow a different shift standard than those patients observed in the United States. Clients should contact their MIE Implementer if additional configuration is required for a level of effort to be determined.
Upon saving the Audiogram results, the user is prompted with a message that states the audiogram has successfully saved.
![](audio-tool-tab.assets/10000000000000990000005F2E8B650FA82C1F45.jpg)
In the event an STS has been detected a second pop up message will display warning the user that an STS has been detected and to retest any employees in the Hearing Conservation Program within 21 days.  All other patients/employees should be counseled or appropriate referrals made as considered by the clinician.
![](audio-tool-tab.assets/10000000000001380000008597CA38252FBEACAE.jpg)
The system default warning notifies the user to retest *within* 21 days.  OSHA requires the employee be retested *within* 30 days of the first test. If the retest does not confirm the recordable STS, you are not required to record the hearing loss case on the OSHA 300 Log. If the retest confirms the recordable STS, you must record the hearing loss illness within seven (7) days of the retest. **To record the hearing loss illness, a Work-Related Injury/Illness Case must manually be opened by the clinician or appropriate staff member confirming the OSHA Recordable STS.** *See other online help guide named Cases-Adding OSHA Case.pdf*
Graphing:
Users may graph Audio results by clicking the GRAPH button. The graph button is grayed out and not available to user if the user has not selected 2 studies for comparison. Once 2 studies have been selected for comparison, click the GRAPH button to display the graph comparison. To select 2 studies for comparison, while on the first graph you hold the control key down and select the second test and then click graph.
![](audio-tool-tab.assets/1000020100000343000001D55840973A6C4D8C3A.png)
The final document is inserted into the chart with the test data, graphs and supplemental questionnaire information. Additionally, users my click on the "Compare" link from the document in the chart to compare today's results with other results on file.
![](audio-tool-tab.assets/1000020100000509000001BEF8D85BD4623CCDE0.png)
Changing your smartcard folder:
Right click in the import file box, click on "Set SmartCard Folder"
![](audio-tool-tab.assets/100002010000025A000001814F6AA9B7122FFA32.png)
Select the folder where you save the exported audiogram results and click OK. You have now set your smartcard folder.
![](audio-tool-tab.assets/10000201000001470000015397A70E223CD2C40D.png)
You can also capture results doing it from the patient's chart tab (manual vs. device upload), doing it from within an encounter exam (when you ‘Add to Exam' the order and it opens up that section within the encounter to do it either manual vs. device upload) and doing a mass import from the sidemenu tab.  The data can also be captured using a bubble form from forms library and indexing by processing bubbles.
![](audio-tool-tab.assets/10000201000001EC0000024F40EECE424DEB4AD9.png)
