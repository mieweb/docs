---
id: '1x2tU52MiV1lV7D3azyXfuQCtKzdiNjFfPHQUxMlnCLs'
title: 'Observation Import'
date: '2024-12-18T14:18:29.424Z'
version: 47
lastAuthor: 'bhamm'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1x2tU52MiV1lV7D3azyXfuQCtKzdiNjFfPHQUxMlnCLs'
wikigdrive: 'v2.15.30'
---
This wiki page is to document how observation data needs to be constructed in order to import using WebChart's Observation data Import Tool.

* File format: Data file shall be formatted in Comma Separated Values (CSV).
* The first row of the file shall contain column header information.
* Each subsequent row shall represent an observation.

## Column Definition

The lab result column definition shall contain all columns listed below regardless if there is a value or not.

* R = Required
* O = Optional
<table>
<tr>
<td>Name</td>
<td>Type</td>
<td>Required</td>
<td>Comments</td>
</tr>
<tr>
<td>Patient ID</td>
<td>char 255</td>
<td>R</td>
<td>Patient identifier, usually an MRN</td>
</tr>
<tr>
<td>Patient Lastname</td>
<td>char 100</td>
<td>O</td>
<td>Last name of the patient</td>
</tr>
<tr>
<td>Patient Firstname</td>
<td>char 100</td>
<td>O</td>
<td>First name of the patient</td>
</tr>
<tr>
<td>Patient Class</td>
<td>char 1</td>
<td>O</td>
<td>I=Inpatient, O=Outpatient</td>
</tr>
<tr>
<td>Observation Datetime</td>
<td>datetime</td>
<td>R</td>
<td>Date the observation took place (YYYYMMDD)</td>
</tr>
<tr>
<td>Observation Code</td>
<td>int 10</td>
<td>O</td>
<td>Identifier of the specific observation</td>
</tr>
<tr>
<td>Observation Name</td>
<td>char 255</td>
<td>R</td>
<td>Name of the specific observation</td>
</tr>
<tr>
<td>Observation Order</td>
<td>int 5</td>
<td>O</td>
<td>Numeric value to indicate the order of the observations</td>
</tr>
<tr>
<td>Observation Result</td>
<td>char 64k</td>
<td>R</td>
<td>Result value of the observation</td>
</tr>
<tr>
<td>Observation Range</td>
<td>char 30</td>
<td>O</td>
<td>Range for the observation</td>
</tr>
<tr>
<td>Observation Units</td>
<td>char 20</td>
<td>O</td>
<td>Units that the observation result is in</td>
</tr>
<tr>
<td>Observation Flag</td>
<td>char 10</td>
<td>O</td>
<td>Flag to determine N=Normal/A=Abnormal</td>
</tr>
<tr>
<td>Observation Status</td>
<td>char 20</td>
<td>O</td>
<td>Status of the observation, F=final, P=preliminary</td>
</tr>
<tr>
<td>Observer Code</td>
<td>int 10</td>
<td>O</td>
<td>Code to ID the person doing the observation</td>
</tr>
<tr>
<td>Comment</td>
<td>char 64k</td>
<td>O</td>
<td>Comment on the observation result</td>
</tr>
<tr>
<td>Performing Lab</td>
<td>char 30</td>
<td>R</td>
<td>Name of lab where results took place</td>
</tr>
<tr>
<td>Encounter Ext ID</td>
<td>char 100</td>
<td>O</td>
<td>External identifier of encounter this obs is linked to</td>
</tr>
<tr>
<td>Encounter Interface</td>
<td>char 100</td>
<td>O</td>
<td>Interface value used when that encounter was imported</td>
</tr>
</table>

## Name Validation

If the patient's first or last name is given, then it will be compared to the name of the patient in the database.

## Examples of CSV

Please note that because of the width of a csv file, the lines have been split up for ease of reading here. A real CSV file will need to be contained in one line per record.

### 1 Observation

This example shows how to import 1 observation for 1 patient.

{{% pre %}}
```

Patient ID,Patient Lastname,Patient Firstname,Patient Class,Observation Datetime,Observation Code,Observation Name,
U111111,Doe,John,I,20110705,25,Systolic BP,
{{% /pre %}}


{{% pre %}}

Observation Order,Observation Result,Observation Range,Observation Units,
1,100,,mmhg,
{{% /pre %}}


{{% pre %}}

Observation Flag,Observation Status,Observer Code,Comment,Performing Lab
,F,,Result looks good,Quest
```
{{% /pre %}}

### 2 Observations, same patient

This example shows how to import 2 observations for the same patient.

{{% pre %}}
```

Patient ID,Patient Lastname,Patient Firstname,Patient Class,Observation Datetime,Observation Code,Observation Name,
U111111,Doe,John,I,20110705,25,Systolic BP,
U111111,Doe,John,I,20110705,26,Diastolic BP,
{{% /pre %}}


{{% pre %}}

Observation Order,Observation Result,Observation Range,Observation Units,
1,100,,mmhg,
2,70,,mmhg,
{{% /pre %}}


{{% pre %}}

Observation Flag,Observation Status,Observer Code,Comment,Performing Lab
,F,,Results look good,Quest
,F,,Results look good,Quest
```
{{% /pre %}}

### 2 Observations for 2 different patients

This example shows how to import 2 lab orders with 2 observation results each.

{{% pre %}}
```

Patient ID,Patient Lastname,Patient Firstname,Patient Class,Observation Datetime,Observation Code,Observation Name,
U111111,Doe,John,I,20110705,25,Systolic BP,
U111111,Doe,John,I,20110705,26,Diastolic BP,
U222222,Doe,Jane,I,20110705,30,URO,
U222222,Doe,Jane,I,20110705,31,BLD,
{{% /pre %}}


{{% pre %}}

Observation Order,Observation Result,Observation Range,Observation Units,
1,100,,mmhg,
2,70,,mmhg,
1,Normal,,mg/dl,
2,neg,,,
{{% /pre %}}


{{% pre %}}

Observation Flag,Observation Status,Observer Code,Comment,Performing Lab
,F,,Test results are good,Labcorp
,F,,Test results are good,Labcorp
,F,,Test results are good,Labcorp
,F,,Test results are good,Labcorp
```
{{% /pre %}}
