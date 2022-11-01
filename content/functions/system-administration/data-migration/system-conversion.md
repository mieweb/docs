---
id: '12BfxOgwAp35VUX7a-OHkI2NB6mjuLK1ocGaJMTL0_jE'
title: 'System Conversion'
date: '2020-02-27T21:31:21.718Z'
version: 68
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'gdoc:1d6JDOjLPbEZ4hDhR-Qj9-DmT3-zskOyTRgJQaYmTfYg'
  - 'https://miewiki.med-web.com/wiki/index.php/WebChart_Conversion#cite_note-0'
  - 'https://miewiki.med-web.com/wiki/index.php/WebChart_Conversion#cite_note-1'
  - 'https://miewiki.med-web.com/wiki/index.php/WebChart_Conversion#cite_ref-0'
  - 'https://docs.python.org/2/library/datetime.html#strftime-and-strptime-behavior'
  - 'https://miewiki.med-web.com/wiki/index.php/WebChart_Conversion#cite_ref-1'
  - 'https://docs.python.org/2/library/string.html#format-string-syntax'
  - 'gdoc:1FKm7Me6ryOw_1L4ja8i1Oj9NXzfRld-ybN-SDmcxpX8'
source: 'https://drive.google.com/open?id=12BfxOgwAp35VUX7a-OHkI2NB6mjuLK1ocGaJMTL0_jE'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
menu:
  main:
    name: 'System Conversion'
    identifier: '12BfxOgwAp35VUX7a-OHkI2NB6mjuLK1ocGaJMTL0_jE'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 5080
---
{{% system-name %}} Conversion is a tool for converting legacy databases into a variety of components:
* Non-discrete Summary Documents
* Discrete Observations
* Discrete Respirator Fit Test Data
* Discrete Pulmonary Function Test (PFT) Data
* Discrete Audiograms
* Encounters
There are a few stages involved in the conversion:
1. MIE obtains a snapshot of the Legacy Data in a MySQL dump or CSV format from the client — [Data Migration File Format Standard](gdoc:1d6JDOjLPbEZ4hDhR-Qj9-DmT3-zskOyTRgJQaYmTfYg) <strong><em>(see this page for data file requirements).</em></strong>
2. Legacy Data is loaded to development MySQL database using MIE's pysqlimport tool.
3. Generate <em>Data Mapping Spreadsheet</em> (Google Spreadsheet exportable to Excel/CSV for client use).
4. Perform data mapping and define WebChart components.
5. Define metadata for WebChart components.
6. Export data mapping and convert data using MIE's legacy data conversion tool.
This guide focuses on the Data Mapping Spreadsheet and how to define components to create in WebChart.  
The Data Mapping Spreadsheet is a Google Spreadsheet generated from the legacy database. The following worksheets appear in the spreadsheet:
1. Data Mapping: a full list of every table and every field along with details about the data type, contents, and usage. The Data Mapping worksheet contains columns for mapping legacy fields to WebChart components and defining discrete data.
2. Module Summary: used in conjunction with Data Mapping to define various metadata for the summary documents and discrete components. Examples of metadata include patient ID, user ID, doc type, location, and many other pieces of data that would apply to all of the items in a summary document or discrete component.

  
### **Data Mapping Worksheet**  

* Columns A-C, R-Y: details about legacy database.
   * <strong>A. Legacy DB</strong>: The name of the legacy database.
   * <strong>B. Legacy Table</strong>: The name of the legacy table.
   * <strong>C. Legacy Column</strong>: The name of the legacy column.
   * <strong>S. DB Field Type</strong>: The MySQL data type that was created by analyzing the legacy data using MIE's pysqlimport tool or mysqldump data from the legacy database.
   * <strong>T. DB Null</strong>: An indicator for whether or not the column has NULL values.
   * <strong>U. DB Key</strong>: The names of keys in which the legacy column is included.
   * <strong>V. DB Default</strong>: Default value from the legacy system if mysqldump was provided.
   * <strong>W. DB Count</strong>: The number of rows that have data in a given column.
   * <strong>X. DB Usage</strong>: Percentage of times the column is used (V/X).
   * <strong>Y. DB Total Rows</strong>: Total number of rows in a legacy table.
   * <strong>Z. Sample Data</strong>: (Optionally) sample data from the legacy data sorted by cardinality

     text if the column name is not sufficient.
* <strong>Column D: Comments</strong>: Take notes here; this column is not used by the MIE legacy data conversion tool.
* <strong>Column E: Description</strong>: Description of the legacy field, used for Documents as an alternate
* <strong>Column F: Module</strong>: Handle used to refer to a WebChart component to be created. This must match a line in Module Summary to be created.
* <strong>Column G: Order</strong>: Defines the order of component items.

  
### **Module Summary Worksheet**  


  
#### **Columns**  

* <strong>Column A: Module</strong>: Name of module used in Data Mapping.
* <strong>Column B: Component</strong>: Name of WebChart component. e.g. Summary Document, Observation, PFT, Fit Test, Audiogram.
* <strong>Columns C, D</strong>: Order of processing for module, component.
* <strong>Columns E-G</strong>: Reserved for developer use.
* <strong>Columns J-P</strong>: Define component metadata. See next section for documentation of options.

  
#### **Metadata options**  
  
These are a set of functions that can dynamically define component metadata per row or have a static value defined. Whether these functions are used depends on the component.  
**TODO:** Insert table here.
* get_pat_id -
* get_user_id -
* get_interface_name -
* get_ext_id - Apply an external ID to a component.
* get_subject -
* get_location -
* get_encounter_id - Link component to an Encounter.

  
#### **Updating**  
  
When entering data into the Google Spreadsheet, a menu item is available (WebChart Conversion>Update Module) to assist with completing the needed Module Summary lines. Click this at any point to update the module lines in this tab.
  
![](../system-conversion.assets/100002010000030800000061E1D52E0ED3DDCC27.png)  


  
## **Migration Mapping**  
  
Components require two parts to complete. First are the **Data Mapping** rows that share the same value for Column E, **Module**. Second, the component needs a matching line (Column A, **Module**) in the **Module Summary** that defines the rest of the metadata.

  
### **Encounters**  
  
An encounter documents a visit with a patient, and is also known as a patient visit. An encounter is a template of specific items to be addressed, in part or completely, during a patient appointment. This is a tool used for recording information collected during a patient appointment and, in turn, the data collected will be stored and also incorporated in the final desired outcome: the visit report/note.  
All aspects of the visit are covered in the encounter, such as the appointment type and time (apt_id), and when the patient checked in and out (pat_location table). Medications, allergies, and related documents are included or linked to an encounter with the encounters_link table.  
Data Mapping:
* Column F, Module: <em>My Encounter Module</em>
* Column K, Encounter Options
   * visit_type
   * primary_diagnosis
   * diagnosis2
   * diagnosis3
   * diagnosis4
   * service_code
   * priority
   * serv_date
   * discharge_date
   * accident_date
   * accident_code
   * accident_location
   * injury_code
   * comment (can be defined for multiple fields)
   * chief_complaint
   * stage
   * due_date
Module Summary:
* Column A, Module: <em>My Encounter Module</em>
* Column B, Component: <strong>Encounter</strong>
* Column C, Module Order: Order module is processed. Encounters are processed before any other components, so this is the order among encounters.
* Columns J-P: metadata fields
   * get_pat_id
   * get_user_id
   * get_interface_name
   * get_ext_id
   * get_location

  
#### **Example**  
  
The following table **encounters** is used for the Encounter example.
  
![](../system-conversion.assets/1000020100000304000001DAB83754C21AD9AC57.png)  

Notice:
1. The <strong>Data Mapping</strong> tab is selected.
2. The table <strong>encounters</strong> and it's columns have been located.
3. <strong>Sample Encounter</strong> has been entered for the <strong>Module</strong> column for each row of the table.
Based on the *Encounter Options* listed above, determine the mapping to legacy columns and complete the column **Encounter Options**.
  
![](../system-conversion.assets/1000020100000321000001E36FDA38CC537D14BF.png)  

Now that the **Data Mapping** tab has been filled, update the **Module Summary**.
  
![](../system-conversion.assets/10000201000003090000005FDD3C522DB81FDCB2.png)  

Click on the **Module Summary** tab to see a row automatically created for the **Sample Encounter** module.
  
![](../system-conversion.assets/10000201000002E20000011E2C8FDA7E2CF029DE.png)  

Notice:
1. The <strong>Module Summary</strong> tab is selected.
2. The module row has minimal information and will need to be completed.
The completed row:
  
![](../system-conversion.assets/1000020100000321000000B04BAF1C4DAB93A81D.png)  

Notice:
1. The "Module Summary" tab is still selected.
2. To create an Encounter, "Component" enter "ENCOUNTER" or "encounter". Case does not matter.
3. The supported metadata fields have been defined.
   1. get_pat_id - Looks for the patient in WebChart.
      1. partition=MIE - Look in the MIE partition for the patient.
      2. db_cols=mrnumber - In the "encounters" table, the column "mrnumber" matches a Medical Record Number.
   1. get_user_id - Looks for the Performing Doctor of the encounter.
      1. default=0 - Use a default ID of 0 (no user).
   1. get_interface_name - An identifier for the source of this data.
      1. default=sample_conversion - Use sample_conversion for the interface name.
   1. get_ext_id - Define an external identifier (identifies the individual record in the source data).
      1. db_cols=id - In the "encounters" table, the column "id" is used for an external identifier.
   1. get_location - Define the location where the encounter took place.
      1. default=OFFICE - Use OFFICE for the location code for all encounters created.
The example Encounters (Visits>Encounters) were crafted to be created for the patient William Hart.
  
![](../system-conversion.assets/10000201000002B8000001EEA7789543891A1C91.png)  

The newly generated Encounters:
  
![](../system-conversion.assets/1000020100000322000001B60326BE4EE8ADEC67.png)  


  
### **Summary Documents**  
  
A Document is defined as a piece of electronic matter that that serves as an official record in WebChart. A Document has a "document ID" and has the following properties:
* Persistence
* Stewardship
* Potential for authentication
* Context
* Human readability
Documents store a wide variety of information pertaining to patient charts in WebChart. This includes patient photographs, insurance cards, physician or nurse notes, imaging studies, past medical histories, physician tasks for a patient, CCDs and CDAs, email correspondence about a patient, injections, and many other forms of data. Aside from encounters, incidents, observations, and other types of discrete chart data, documents represent the primary mode of storing information on a chart. The doc_type column identifies the category of the document, such as those previously mentioned.  
There are several doc_types that are included as part of the default installation of WebChart, but they may be added and deleted to customize the system using the DocType Editor in WebChart. The storage_type identifies what kind of file is represented by the document. Examples of storage types include plain text documents, HTML files, PDF files, JPEG images, injections, audiograms, PFTs, and many others. Storage types are stored in the storage_types table. Each document in the documents table has a foreign key called storage_type, but these storage types may not be edited or customized in WebChart. Using the doc_type and storage_type of a document in the documents table, one can tell what sort of document it is and see how the document is stored and what other tables may be related to the document.  
Data Mapping:
* Column E, Module: My Document Module
* Column D, Description: Used for left column value
* Column F, Order: Order item appears on document
* Column G, Document Options: Additional options for the document.
   * service_date: The document's date of service.
   * skiprowifempty: Do not display the element if no value is stored.
* Column H, Element Type: Controls the display of an item on a document.
   * KeyValue: Displays the description and database value in 2 columns.
   * KeyDate: Same as KeyValue except this is for dates. This is planned to be merged into KeyValue.
   * Narrative: An extended area at the bottom of the document suitable for displaying extended text entries such as paragraphs. All fields specified will be combined into this area.
* Column I, Element Format: Display this field in a custom format. KeyDates accept formats like "%Y/%m/%d"[[1]](https://miewiki.med-web.com/wiki/index.php/WebChart_Conversion#cite_note-0), while KeyValues accept formats like "Hello {0}, {1}!"[[2]](https://miewiki.med-web.com/wiki/index.php/WebChart_Conversion#cite_note-1). String formatting uses an index (starting at 0) to refer to the Legacy Columns. 0 is the first, 1 is the second, and so on.
Module Summary:
* Column A, Module: <em>My Document Module</em>
* Column B, Component: <strong>Summary Document</strong>
* Column C, Module Order: Order module is processed.
* Column H, Doc Type: Document Type code.
* Column Q, Template: Used to provide a custom template. <strong>Not currently in use.</strong>
* Columns J-P: Metadata fields.
   * get_pat_id
   * get_user_id
   * get_subject
   * get_location
   * get_ext_id
   * get_interface_name

  
#### **Example**  
  
The following table **documents** is used for the Summary Documents example.
  
![](../system-conversion.assets/1000020100000322000001D5A38EFE4BAD3A34B3.png)  

Notice:
1. The <strong>Data Mapping</strong> tab is selected.
2. The table <strong>documents</strong> and it's columns have been located.
3. <strong>Sample Summary Document</strong> has been entered for the <strong>Module</strong> column for each row of the table.
Based on the *Document Options* and *Element Types* listed above, determine the mapping to legacy columns and complete the columns. The **Description** and **Order** has also been filled to demonstrate their effect on the created document.
  
![](../system-conversion.assets/100002010000032100000125090A706A96F1DB6F.png)  

Now that the **Data Mapping** tab has been filled, update the **Module Summary**.
  
![](../system-conversion.assets/100002010000030B0000006030AFDDFBE4213860.png)  

Click on the **Module Summary** tab to see a row automatically created for the **Sample Summary Document** module.
  
![](../system-conversion.assets/10000201000002B5000001166C5042B1A0CC4A72.png)  

Notice:
1. The <strong>Module Summary</strong> tab is selected.
2. The module row has minimal information and will need to be completed.
The completed row:
  
![](../system-conversion.assets/100002010000032200000094EF024611D9973E93.png)  

Notice:
1. The <strong>Module Summary</strong> tab is <em>still</em> selected.
2. To create a Summary Document, enter "SUMMARY DOCUMENT" or "summary document" in "Component". Case does not matter.
3. The supported metadata fields have been defined.
   1. Doc Type
      1. WCDOCNOT - Create a Doctor Note document type.
   1. get_pat_id - Looks for the patient in WebChart.
      1. partition=MIE - Look in the MIE partition for the patient.
      2. db_cols=mrnumber - In the "documents" table, the column "mrnumber" matches a Medical Record Number.
   1. get_user_id - Defines the author of the document.
      1. default=0 - Use a default ID of 0 (no user).
   1. get_interface_name - An identifier for the source of this data.
      1. default=sample_conversion - Use sample_conversion for the interface name.
   1. get_ext_id - Define an external identifier (identifies the individual record in the source data).
      1. db_cols=id - In the "documents" table, the column "id" is used for an external identifier.
   1. get_location - Define the location where the document was created.
      1. default=OFFICE - Use OFFICE for the location code for all documents created.
The example Summary Documents (Document Summary) were crafted to be created for the patient William Hart.
  
![](../system-conversion.assets/10000201000003010000021D05760394994B915F.png)  

The newly generated Summary Documents:
  
![](../system-conversion.assets/100002010000031F000001A5BB058EB1559B9660.png)  

Here is an example Summary Document. Descriptions appear on the left column, while database values appear on the right. At the bottom containing comments is the *narrative*. Both sections are sorted according to the order specified in the **Data Mapping**.
  
![](../system-conversion.assets/100002010000026A00000259EC7188983026D894.png)  


  
### **Observations**  
  
An observation in WebChart is a means of storing repeated historic data, such as vital signs, lab results, measurements, and other discrete data. Any discrete data can be stored as an observation, but some is stored on other custom tables, such as audiograms, demographics information, injections, medications, prescriptions, and allergies. The data in these other custom tables may also be stored as observations. A number of related tables define, store, and group observations in WebChart so that they can be collected and displayed in a patient's chart, including: observation_codes, obs_forms, observation_ranges, observations_current, translate, observation_codes_list, and lab_requests.  
The observations table stores discreet data related to an observation code (obs_code). The data defines where an observation appears in a WebChart system by relating the observation code to a patient (pat_id), the user who entered the observation (observer_id), when it was recorded (observed_datetime) and when it was revised (revision_number). Details in the observations table can override details stored on the observation_codes table, such as range, name, and units (obs_range, obs_name, obs_units).  
Observations are linked to users through the user ID (user_id). The users table stores information on providers and WebChart users.  
The translate table is used throughout WebChart for translations of all kinds, but is used specifically with observations to map an interface's own observation code to an obs_code in WebChart.  
Multiple observations can be created for a single module. Each observation is a module **component**, and uses the **handle**, **obs_name**, or **obs_code** to match the Data Mapping to Module Summary.  
Data Mapping:
* Column E, Module: <em>My Observations Module</em>
* Column K, Observation Options: Reserved for future use. Likely to combine L-N and also store handle here.
   * handle - Used to match Data Mapping row to Module Summary row. Use this when creating multiple observations with the same code in a single module.
   * observed - Specify the legacy column that contains the observed datetime.
* Column L, get_obs_name: The source of the observation code name.
   * name - Provide the obs_name.
   * code - Provide the obs_code.
   * description - Description column is the obs_name.
   * value - <strong>Future use</strong>, the field value is the obs_name.
* Column M, get_obs_result: Reserved for future use. When using value with get_obs_name, this will decide the obs_result. If blank, use field value as obs_result.
* Column N, get_obs_test_comments: A list of fields to combine and use as the observation comment.
Module Summary (one line per Observation):
* Column A, Module: <em>My Observations Module</em>
* Column B, Component: <strong>Observation:</strong> handle, obs_name, or obs_code
* Column C, Module Order: Order module is processed.
* Column D, Component Order: Order component/observation is processed.
* Columns J-P: Metadata fields.
   * get_pat_id
   * get_user_id
   * get_ext_id
   * get_interface_name

  
#### **Example**  
  
The following table **observations** is used for the Observations example.
  
![](../system-conversion.assets/100002010000031E000001B4ED5E151680D1990C.png)  

Notice:
1. The <strong>Data Mapping</strong> tab is selected.
2. The table <strong>observations</strong> and it's columns have been located.
3. <strong>Sample Observations</strong> has been entered for the Module column for each row of the table.
Based on the Observation Options, get_obs_name, and get_obs_test_comments options listed above, determine the mapping to legacy columns and complete the columns.
  
![](../system-conversion.assets/1000020100000323000000F9D4473772F15E2C5F.png)  

Three observations have been identified here. All are using the value of "test_date" for the observed date. They are also using the values of "comments1-4" for the observation comments.
1. obs_name BODY HEIGHT - The observation code is specified by name.
2. obs_code 2053 - The observation code is listed directly.
3. obs_name BMI - The observation code is specified by name. An optional handle of "body mass index" has been applied (to be used on the Module Summary).
Now that the **Data Mapping** tab has been filled, update the **Module Summary**.
  
![](../system-conversion.assets/100002010000030B0000006117778B6A353DA5A6.png)  

Click on the **Module Summary** tab to see a row automatically created for each **Sample Observations** component.
  
![](../system-conversion.assets/100002010000029A00000169BCE6011E72D12517.png)  

Notice:
1. The <strong>Module Summary</strong> tab is selected.
2. The module rows have minimal information and will need to be completed.
The completed rows:
  
![](../system-conversion.assets/1000020100000324000000E5D61ADBAA15323ED7.png)  

Notice:
1. The Module Summary tab is still selected.
2. To create an Observation, this must match "OBSERVATION:" or "observation:". Case does not matter. Following this must come the handle, obs_code, or obs_name specified in the Data Mapping tab.
3. The supported metadata fields have been defined.
   1. get_pat_id - Looks for the patient in WebChart.
      1. partition=MIE - Look in the MIE partition for the patient.
      2. db_cols=mrnumber - In the "observations" table, the column "mrnumber" matches a Medical Record Number.
   1. get_user_id - Looks for the Entered By user.
      1. default=0 - Use a default ID of 0 (no user).
   1. get_interface_name - An identifier for the source of this data.
      1. default=sample_conversion - Use sample_conversion for the interface name.
   1. get_ext_id - Define an external identifier (identifies the individual record in the source data).
      1. db_cols=id - In the "observations" table, the column "id" is used for an external identifier.
The example Observations (Medical Record>Observations/Flowsheets) were crafted to be created for the patient William Hart.
  
![](../system-conversion.assets/1000020100000293000001E4DE39A0A1ACF9BA2E.png)  

To see the results:
1. Select a date range that is limited to the results you need.
2. For the example, which contains vitals, select the <strong>Vitals</strong> flowsheet. Depending on the observations you select, you may need to view them on a custom or different flowsheet.

   <img src="../system-conversion.assets/10000201000002F1000002597AA63656BEF53CFF.png" />  

The newly generated Observations:
  
![](../system-conversion.assets/10000201000002B900000257C1934D26261F141F.png)  


  
### **Respirator Fit Test**  
  
Respirator fit details are stored on a custom table. The patient_respiratordetails table is a record of all respirator masks a patient/employee is tested on for use. This table records fit tests for a single patient and links to the patients table through the patient ID (pat_id).  
Data Mapping:
* Column E, Module: <em>My Fit Test Module</em>
* Column F, Order: Order comment is combined.
* Column Q, Fit Test Options
   * MaskType
   * Size
   * LastFitTestDate
   * LastFitExpires
   * LastFitPassFail
   * LastFitFinalFitFactor
   * comment (can be defined for multiple fields)
Module Summary:
* Column A, Module: <em>My Fit Test Module</em>
* Column B, Component: <strong>Fit Test</strong>
* Column C, Module Order: Order module is processed.
* Columns J-P: Metadata fields.
   * get_pat_id

  
#### **Example**  
  
The following table **fit_test** is used for the Respirator Fit Test example.
  
![](../system-conversion.assets/1000020100000309000001DD63ECDDB774B71E74.png)  

Notice:
1. The <strong>Data Mapping</strong> tab is selected.
2. The table <strong>fit_test</strong> and its columns have been located.
3. <strong>Sample Fit Test</strong> has been entered for the <strong>Module</strong> column for each row of the table.
Based on the *Fit Test Options* listed above, determine the mapping to legacy columns and complete the columns. The **Order** has also been filled to demonstrate its effect on the comments.
  
![](../system-conversion.assets/1000020100000321000001557FAF5CD701023497.png)  

Now that the **Data Mapping** tab has been filled, update the **Module Summary**.
  
![](../system-conversion.assets/100002010000030900000061CEB56377CE23B3F5.png)  

Click on the **Module Summary** tab to see a row automatically created for the **Sample Fit Test** module.
  
![](../system-conversion.assets/100002010000029A000000F78ECB92B9B4582390.png)  

Notice:
1. The <strong>Module Summary</strong> tab is selected.
2. The module row has minimal information and will need to be completed.
The completed row:
  
![](../system-conversion.assets/10000201000003240000016351621D22BE491BF7.png)  

Notice:
1. The <strong>Module Summary</strong> tab is <em>still</em> selected.
2. To create a Respirator Fit Test, enter "FIT TEST" or "fit test" in "Component". Case does not matter.
3. The supported metadata fields have been defined.
   1. get_pat_id - Looks for the patient in WebChart.
      1. partition=MIE - Look in the MIE partition for the patient.
      2. db_cols=mrnumber - In the "fit_test" table, the column "mrnumber" matches a Medical Record Number.
The example Respirator Fit Tests (Test Results>Respirator Info) were crafted to be created for the patient William Hart.
  
![](../system-conversion.assets/100002010000028E000001DFBCA948322A5ECF7C.png)  

The newly generated Respirator Fit Tests:
  
![](../system-conversion.assets/100002010000032100000191ED2BA9DF084A000F.png)  


  
### **Pulmonary Function Tests**  
  
Pulmonary function test (PFT) data is stored in a custom table. The pft table records details for PFT/spirometry for a patient. PFTs are linked to a patient through the documents table, using the foreign key doc_id, which contains the patient ID (pat_id). Additional information on the patient's height and weight is recorded on the pft table to compare to predicted results. Revisions to PFTs are recorded on the pft_revisions table.  
Data Mapping:
* Column E, Module: <em>My PFT Module</em>
* Column O, PFT Options
   * test_datetime
   * calibration_date
   * maneuver_datetime
   * test_age
   * test_height
   * test_weight
   * calibration_result
   * prediction_method
   * spirometer
   * test_reason
   * temperature
   * humidity
   * pressure
   * session_effort
   * position
   * fvc
   * fvc_predicted
   * fvc_abnormal
   * fev1
   * fev1_predicted
   * fev1_abnormal
   * fev1_fvc
   * fev1_fvc_predicted
   * fev1_fvc_abnormal
   * fef25_75
   * fef25_75_predicted
   * fef25_75_abnormal
   * pef
   * pef_predicted
   * pef_abnormal
   * manual
   * peak_1
   * peak_2
   * peak_3
   * fev6
   * fef25
   * fef50
   * fef75
   * fvc_lln
   * fev1_lln
   * fev6_lln
   * fev1_fvc_lln
   * fef25_75_lln
   * pef_lln
   * expiratory_time
   * pef_time
   * reference_correction
   * interpretation
   * btps_factor
   * curve
   * summary
   * best_maneuver
   * comment (can be defined for multiple fields)
Module Summary:
* Column A, Module: <em>My PFT Module</em>
* Column B, Component: <strong>PFT</strong>
* Column C, Module Order: Order module is processed.
* Columns J-P: Metadata fields.
   * get_pat_id
   * get_user_id
   * get_interface_name
   * get_ext_id
   * get_subject
   * get_location

  
#### **Example**  
  
The following table **pft** is used for the PFT example.
  
![](../system-conversion.assets/1000020100000307000001AB7BDEE6C6D8913D1D.png)  

Notice:
1. The <strong>Data Mapping</strong> tab is selected.
2. The table <strong>pft</strong> and it's columns have been located.
3. <strong>Sample PFT</strong> has been entered for the <strong>Module</strong> column for each row of the table.
Based on the PFT Options listed above, determine the mapping to legacy columns and complete the column **PFT Options**.
  
![](../system-conversion.assets/100002010000031F00000183FE90C030DC9DA6A9.png)  

Now that the **Data Mapping** tab has been filled, update the **Module Summary**.
  
![](../system-conversion.assets/100002010000030A00000063868F04B03A04D1D6.png)  

Click on the **Module Summary** tab to see a row automatically created for the **Sample PFT** module.
  
![](../system-conversion.assets/100002010000026D000001040B64D6091518951A.png)  

Notice:
1. The <strong>Module Summary</strong> tab is selected.
2. The module row has minimal information and will need to be completed.
The completed row:

Notice:
1. The <strong>Module Summary</strong> tab is <em>still</em> selected.
2. To create a Pulmonary Function Test, enter "PFT" or "pft" in "Component". Case does not matter.
3. The supported metadata fields have been defined.
   1. get_pat_id - Looks for the patient in WebChart.
      1. partition=MIE - Look in the MIE partition for the patient.
      2. db_cols=mrnumber - In the "pft" table, the column "mrnumber" matches a Medical Record Number.
   1. get_user_id - Looks for the Performing User of the Pulmonary Function Test.
      1. default=0 - Use a default ID of 0 (no user).
   1. get_interface_name - An identifier for the source of this data.
      1. default=sample_conversion - Use sample_conversion for the interface name.
   1. get_ext_id - Define an external identifier (identifies the individual record in the source data).
      1. db_cols=id - In the "pft" table, the column "id" is used for an external identifier.
   1. get_location - Define the location where the test took place.
      1. default=OFFICE - Use OFFICE for the location code for all tests created.
The example PFTs (Test Results>PFT) were crafted to be created for the patient William Hart.
  
![](../system-conversion.assets/1000020100000265000001DA86C3C38F4427C600.png)  

The newly generated PFTs:
  
![](../system-conversion.assets/10000201000001F60000025A689E22FB7719C2AD.png)  


  
### **Audiometric Data**  
  
The audio table stores discrete data for occupational audiogram tests. Audio tests are linked to a patient through the documents table, using the foreign key doc_id, which contains the patient ID (pat_id). Like many of the other testing-related tables, the documents generated by data from the audio table contain a number of specific tests and baselines aggregated into a single document or view. Revisions to audio data are recorded on the audio_revisions table.  
Data Mapping:
* Column E, Module: <em>My Audiogram Module</em>
* Column O, Audiogram Options
   * test_datetime
   * left05
   * left1
   * left2
   * left3
   * left4
   * left6
   * left8
   * right05
   * right1
   * right2
   * right3
   * right4
   * right6
   * right8
   * manual=[left05 - left8 or right05 - right8] (can be defined for multiple fields)
   * hcp
   * left_sts=[value of ‘Yes'] (can be defined for multiple fields)
   * right_sts=[value of ‘Yes'] (can be defined for multiple fields)
   * osha_recordable=[value of ‘Yes'] (can be defined for multiple fields)
   * left_baseline=[value of ‘Yes'] (can be defined for multiple fields)
   * right_baseline=[value of ‘Yes'] (can be defined for multiple fields)
   * test_reason
   * comment (can be defined for multiple fields)
   * outside provider
   * outside_location
   * audio_model
   * audio_serial
   * calibration_date
Module Summary:
* Column A, Module: <em>My Audiogram Module</em>
* Column B, Component: <strong>Audiogram</strong>
* Column C, Module Order: Order module is processed.
* Columns J-P: Metadata fields.
   * get_pat_id
   * get_user_id
   * get_interface_name
   * get_ext_id
   * get_subject
   * get_location

  
#### **Example**  
  
The following table **audio** is used for the Audiograms example.
  
![](../system-conversion.assets/10000201000002FB00000216F08229F9C6F78AD3.png)  

Notice:
1. The <strong>Data Mapping</strong> tab is selected.
2. The table <strong>audio</strong> and it's columns have been located.
3. <strong>Sample Audiogram</strong> has been entered for the <strong>Module</strong> column for each row of the table.
Based on the *Audio Options* listed above, determine the mapping to legacy columns and complete the columns. The **Order** has also been filled to demonstrate its effect on the comments.
  
![](../system-conversion.assets/1000020100000320000001F7A6BB626931F1030E.png)  

Now that the **Data Mapping** tab has been filled, update the **Module Summary**.
  
![](../system-conversion.assets/10000201000003070000006033B4A0A41AC2043C.png)  

Click on the **Module Summary** tab to see a row automatically created for the **Sample Audiogram** module.
  
![](../system-conversion.assets/10000201000002C00000011451EBE90935E5243E.png)  

Notice:
1. The <strong>Module Summary</strong> tab is selected.
2. The module row has minimal information and will need to be completed.
The completed row:
  
![](../system-conversion.assets/10000201000003220000009E043B5B19EB43E982.png)  

Notice:
1. The <strong>Module Summary</strong> tab is <em>still</em> selected.
2. To create an Audiogram, enter "AUDIOGRAM" or "audiogram" in "Component". Case does not matter.
3. The supported metadata fields have been defined.
   1. get_pat_id - Looks for the patient in WebChart.
      1. partition=MIE - Look in the MIE partition for the patient.
      2. db_cols=mrnumber - In the "audio" table, the column "mrnumber" matches a Medical Record Number.
   1. get_user_id - Looks for the Performing User of the test.
      1. default=0 - Use a default ID of 0 (no user).
   1. get_interface_name - An identifier for the source of this data.
      1. default=sample_conversion - Use sample_conversion for the interface name.
   1. get_ext_id - Define an external identifier (identifies the individual record in the source data).
      1. db_cols=id - In the "audio" table, the column "id" is used for an external identifier.
   1. get_subject - Define a subject for the Audiogram document.
      1. default=Sample Audiogram - Use "Sample Audiogram" as the subject for all tests created.
   1. get_location - Define the location where the test took place.
      1. default=OFFICE - Use OFFICE for the location code for all tests created.
The example Audiograms (Test Results>Audio) were crafted to be created for the patient William Hart.
  
![](../system-conversion.assets/1000020100000298000001E1C733D4E9C46C3654.png)  

The newly generated Audiograms:
  
![](../system-conversion.assets/1000020100000321000001F1762DB8B0EFA836B6.png)  


  
## **References**  

1. [↑](https://miewiki.med-web.com/wiki/index.php/WebChart_Conversion#cite_ref-0)[https://docs.python.org/2/library/datetime.html#strftime-and-strptime-behavior](https://docs.python.org/2/library/datetime.html#strftime-and-strptime-behavior)
2. [↑](https://miewiki.med-web.com/wiki/index.php/WebChart_Conversion#cite_ref-1)[https://docs.python.org/2/library/string.html#format-string-syntax](https://docs.python.org/2/library/string.html#format-string-syntax)

  
## **Related Pages**  

* [Data Migration Overview](gdoc:1FKm7Me6ryOw_1L4ja8i1Oj9NXzfRld-ybN-SDmcxpX8)
* [Data Requirements](gdoc:1d6JDOjLPbEZ4hDhR-Qj9-DmT3-zskOyTRgJQaYmTfYg)
