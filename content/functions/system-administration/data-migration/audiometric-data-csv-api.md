---
id: '14Q9LWFz8E5pjz1_Is_4mpmATDyGNYo7Jb178BZukbTA'
title: 'Audiometric Data CSV API'
date: '2020-02-27T20:45:01.208Z'
version: 19
mimeType: 'text/x-markdown'
links:
  - 'https://miewiki.med-web.com/wiki/index.php/Import_Overview'
  - 'https://docs.google.com/a/mieweb.com/spreadsheets/d/12V2YudNHsXrdoE098z_Hxh-e4SUjZzBUBdtthSkLQO4/edit?usp=sharing'
  - 'https://miewiki.med-web.com/wiki/index.php/Data_Import_Standards#Data_Import_User_Instructions'
  - 'https://miewiki.med-web.com/wiki/index.php/Data_Import_Standards'
  - 'https://docs.google.com/spreadsheets/d/1OOX4f8ZthFYu0e2oIszoHFqCTOW5lktyPMnmUTZisK4/pub'
  - 'https://docs.google.com/spreadsheets/d/1OOX4f8ZthFYu0e2oIszoHFqCTOW5lktyPMnmUTZisK4/pub?output=csv'
  - 'https://docs.google.com/a/mieweb.com/spreadsheets/d/1gtMinRE8kX9znznYtIHlU15qT3P_yET9hAD06JHfOzg/edit?usp=sharing'
  - 'https://miewiki.med-web.com/wiki/index.php/Data_Import_Master_List'
source: 'https://drive.google.com/open?id=14Q9LWFz8E5pjz1_Is_4mpmATDyGNYo7Jb178BZukbTA'
wikigdrive: '2abeb591fccd09f9dcebef69bca681875d9cdcb0'
menu:
  main:
    name: 'Audiometric Data CSV API'
    identifier: '14Q9LWFz8E5pjz1_Is_4mpmATDyGNYo7Jb178BZukbTA'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 5170
---
The following page defines data and fields that may be imported into MIE systems (Enterprise Health, WebChart) for audiometry using the Audiometric Data CSV API.

  
### **Audience**  
  
The abstract that follows should be presented to decision-makers or stakeholders interested in a general explanation of the Audiometric Data CSV API. DBAs, report writers, or the people charged with extracting data from the legacy system and importing it to EH should refer to the technical details provided in the remaining sections.

  
### **Abstract**  
  
Enterprise Health stores discrete data for occupational audiogram tests, which can be displayed in multiple ways.  
It is valuable to recognize the following terminology as it pertains to MIE systems:
* A <strong>chart</strong> is an employee's (patient's) electronic medical information organized in tabular form. A chart is simply a way to collect different information on one topic, just like a physical patient chart would contain a variety of information on an individual. Audio tests are linked to a chart through a document.
* A <strong>document</strong> in EH is a way of storing non-discrete information in patient charts. This includes patient photographs, insurance cards, physician or nurse notes, imaging studies, past medical histories, CCDs and CDAs, email correspondence about a patient, injections, and many other forms of data.
* An <strong>encounter</strong> documents a visit with a employee, and is also known as a patient visit. An encounter is a template of specific items to be addressed, in part or completely, during an appointment including the subjective, objective, assessment and plan. This is a tool used for recording information collected during an appointment and, in turn, the data collected will be stored and also incorporated in the final desired outcome: the visit report/note, which is a document stored in EH.
CSV refers to the type of file and format of data needed to import information into an EH system. API refers to how the data interacts with the EH system. See the [Import Overview](https://miewiki.med-web.com/wiki/index.php/Import_Overview) page for a more detailed explanation of terminology.


  
### **Screenshots**  
  
TBD

  
## **Workflow Considerations**  


  
### **Standard Threshold Shift (STS) Calculation**  
  
In the case that the legacy audio data does not contain STS information or is incomplete, it is possible to calculate the shifts after importing.  
In addition to having the baselines set (audio.left_baseline, audio.right_baseline), these are the required fields for the calculation:
* Left 2 kHz (audio.left2)
* Left 3 kHz (audio.left3)
* Left 4 kHz (audio.left4)
* Right 2 kHz (audio.right2)
* Right 3 kHz (audio.right3)
* Right 4 kHz (audio.right4)
* Test Datetime (audio.test_datetime)
* Patient's Sex (patients.sex)
* Patient's Birth Date (patients.birth_date)
A shift is set when both of the following conditions are met:
1. The age corrected shift from the baseline is >= 10
2. AND the average of 2kHz, 3kHz, and 4kHz >= 25
The age corrected shift is the average shift from the most recent baseline at the 2k, 3k, and 4k ranges after the test and baseline have been adjusted for the patient's age. Adjustments are calculated in the database routine wc_audio_age_adjustment_value.

  
## **Specifications**  
  
The following sections provide insight for technical personnel working with the provided import specifications. Although the specifications provided include details on each field utilized in the import, the sections below include further discussion on best practices for imported data to provide the best functionality in Enterprise Health.  
[The Audiometric Data CSV API specifications are available here.](https://docs.google.com/a/mieweb.com/spreadsheets/d/12V2YudNHsXrdoE098z_Hxh-e4SUjZzBUBdtthSkLQO4/edit?usp=sharing)  
Note: The specification may be downloaded as Excel, CSV, or duplicated as an online spreadsheet under the File menu.  
Additionally, [user instructions](https://miewiki.med-web.com/wiki/index.php/Data_Import_Standards#Data_Import_User_Instructions) are available for importing data in EH.

  
### **Column Definitions and Specific Coded Values**  
  
Definitions for the columns utilized in the specification, as well as commonly used specific coded values appear on the [Data Import Standards](https://miewiki.med-web.com/wiki/index.php/Data_Import_Standards) page.

  
### **Field Requirements**  
  
The following fields (indicated in the Data Name column) are noted as required (R) or are recommended as best practice (BP) in the MIE CSV Import Spec for Audiometric Data. Additional details and considerations are provided here.

  
#### **Required**  
  
The following fields are required:
* <em>Chart Identifier</em> (documents.pat_id) and Chart ID Type (documents.pat_id_type) are used to correctly identify a chart.
* <em>External ID</em> (documents.ext_doc_id) identifies a record in the original data source (this is often the primary or unique key on the table of the legacy database that is being migrated to the MIE system).
* <em>Test Date/Time</em> (audio.test_datetime) is required in order to compare tests for an employee (patient).

  
#### **Best Practice**  
  
Although this information is not required, it is considered a best practice to use at least some of these fields to populate information in the header of a document for identification and organizational purposes.  
Most OSHA reporting standards include calibration data. It is best practice to include *Calibration Date* (audio.calibration_date).  
Left and right ear measurements for 2, 3, and 4 kHz are utilized for hearing conservation standard threshold shift (STS) calculation. It is considered best practice to include the following:
* <em>Left 2 kHz</em> (audio.left2)
* <em>Left 3 kHz</em> (audio.left3)
* <em>Left 4 kHz</em> (audio.left4)
* <em>Right 2 kHz</em> (audio.right2)
* <em>Right 3 kHz</em> (audio.right3)
* <em>Right 4 kHz</em> (audio.right4)

  
#### **Optional Fields**  
  
The following optional fields are needed to link the document to a patient encounter:
* <em>Encounter External Identifier</em> (encounters.ext_id)
* <em>Encounter Interface</em> (encounters.interface)
Including the field encounter order_id will also create an encounter order of the identified in the field.

  
## **Examples**  
  
The following examples are available:
* [Google spreadsheet](https://docs.google.com/spreadsheets/d/1OOX4f8ZthFYu0e2oIszoHFqCTOW5lktyPMnmUTZisK4/pub)
* [Downloadable CSV](https://docs.google.com/spreadsheets/d/1OOX4f8ZthFYu0e2oIszoHFqCTOW5lktyPMnmUTZisK4/pub?output=csv)

  
## **Validation**  
  
Validation between the previous system and the new EH system requires the client to provide a number of test patients. This data can be compared in the previous system and EH using the [validation test script.](https://docs.google.com/a/mieweb.com/spreadsheets/d/1gtMinRE8kX9znznYtIHlU15qT3P_yET9hAD06JHfOzg/edit?usp=sharing)

  
## **Related Pages**  

* [Data Import Master List](https://miewiki.med-web.com/wiki/index.php/Data_Import_Master_List)
