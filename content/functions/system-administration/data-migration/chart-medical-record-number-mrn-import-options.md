---
id: '1XdXZjpMl-nFhbNqYVZfRqVDD1-sCjB5Rrol0ohYGe7E'
title: 'Chart Medical Record Number (MRN) Import Options'
date: '2020-02-28T15:25:27.336Z'
version: 37
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'chart-data-csv-api.md'
  - 'https://miewiki.med-web.com/wiki/index.php/File:Di_mrn_opts.csv'
  - 'data-import-master-list.md'
source: 'https://drive.google.com/open?id=1XdXZjpMl-nFhbNqYVZfRqVDD1-sCjB5Rrol0ohYGe7E'
wikigdrive: '8934ab392b82c3a1d5a8ae9fb7795d99e93c12ca'
menu:
  main:
    name: 'Chart Medical Record Number (MRN) Import Options'
    identifier: '1XdXZjpMl-nFhbNqYVZfRqVDD1-sCjB5Rrol0ohYGe7E'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 5060
---
The following page was created for technical staff involved in importing data to an Enterprise Health (EH) system. It outlines the process for importing medical record numbers (MRNs) using the [Chart Data CSV API](chart-data-csv-api.md). These options give the import the ability to process MRNs in a number of ways. This is especially useful for systems where the MRNs may change or need to be removed entirely. Although the default process of simply adding MRNs works in most situations, the options that follow a user to fine tune how processed charts are identified.  
The processes discussed on this page should only be performed with the guidance of an MIE subject matter expert. Mistakes in this process could have detrimental effects on an EH system.

  
### **Definitions**  

* An <strong>insertion</strong> occurs when new record is created, without affecting any data that are already in the database.
* An <strong>update</strong> occurs when a record is replaced with the new information.
* A <strong>deletion</strong> occurs when a record is removed from the database.
Related terminology is discussed on the [Chart Data CSV API](chart-data-csv-api.md) page.

  
## **Processing Medical Record Numbers**  
  
To use these options for MRN processing, the values described below as 'INSERT Options' and 'Blank Handling Options' need to be within the header row of the data file. The options can be linked together to allow for both types of options. When linking them together, the options need to be separated by a 'space'. Regardless, when using options, a space must always follow the option. For example:


```
  
  
{{% pre %}}  
  
  
...,DELETE_BLANK UPDATE @patient_mrns.MR,...  
  
  
  
{{% /pre %}}  
  
  

```
Any partition and MRN combination must be unique in the database. An insertion or an update will not occur if the new data already exists in the database.
It is possible to configure the options through translations. See the [Translations](#gjdgxs) section for details.

  
### **Insert Options**  

The following options are available for insert commands.

  
#### **INSERT**  

Insert options affect how new MRNs are treated. The default behavior will always insert new MRNs, ignoring any blank entries. The new information is inserted. This means that a record can have more than one MRNs for a single partition, or across multiple partitions.

  
#### **UPDATE/REVISE**  

An existing entry is updated with the new information.
* If there is not an existing entry for this record, the new information is inserted.
* If there is more than one entry for this partition on the record, one of the entries is updated. With current functionality, it cannot be determined which entry should be updated.

  
#### **DELETE_THEN_INSERT**  

Delete MRNs in the partition that are attached to this record, then insert the new information.
* This will delete all of the MRNs that match this partition and record.
* If new data is not provided, the existing MRNs are still deleted.

  
### **Blank Handling Options**  

These options are applied when a record is not given any data for a partition. Blank values commonly fall into 2 categories, either ignore and leave as is, or delete the existing value. These options tell the import which way to handle it.

  
#### **IGNORE_BLANK**  

The record is skipped, with no additional processing done. The DELETE_THEN_INSERT option applies if used.

  
#### **DELETE_BLANK**  

Delete MRNs in the partition that are attached to this record. This deletes all of the MRNs that match this partition and record.

  
#### **AUTO_ASSIGN_IF_BLANK**  

This option works a little differently, depending on what's in the field. It also assumes that the partition is set up to auto assign incremental mrnumbers. If the partition is not set up as an auto increment partition, then an mrnumber will fail to be assigned.
If the mrnumber field with this option is empty, then an mrnumber will be assigned note that if the import is being used to add an mrnumber to an existing chart, the csv file must contain data that can be used to look up the chart.
If the mrnumber field with this option is populated, then this mrnumber could still be used to look up the chart. The import will not process this mrnumber, but will instead log a warning.

  
### **Examples**  

The following scenario provides examples of each type of processing possible for MRN import.
The patient MRNs listed in the screenshot below are used in this example.

The example import file is as follows:


```
  
  
{{% pre %}}  
  
  
@patient_mrns.MR,DELETE_THEN_INSERT @patient_mrns.NMC,INSERT INGORE_BLANK @patient_mrns.NMC,UPDATE @patient_mrns.CCHIT,DELETE_BLANK @patient_mrns.CCHIT,patients.first_name,patients.last_name,patients.birthdate  
1111,,,1000,,Test,Mrns1,01/01/2001  
2222,,,3000,42,Test,Mrns2,02#02#2002  
4444,123456789,987654319,,,Test,Mrns3,03/03/2003  
5555,123456780,,4000,43,Test,Mrns4,04-04-2004  
  
  
  
{{% /pre %}}  
  
  

```
[File:Di mrn opts.csv](https://miewiki.med-web.com/wiki/index.php/File:Di_mrn_opts.csv)

  
### **Import Logic**  

The imported file is processed as follows:

  
#### **First Column (MR partition, default options are implied)**  

No new data--none of these MRNs will change.

  
#### **Second column (NMC parition, DELETE_THEN_INSERT option)**  

All MRNs data are deleted and replaced by whatever is in this column.
* Mrn1: Existing MRNs are deleted, even though there is no data to replace it with.
* Mrn2: No existing data. Nothing is deleted. Nothing is inserted.
* Mrn3: Both MRNs are deleted. The new MRN is inserted.
* Mrn4: No existing data. Nothing is deleted. The new MRN is inserted.

  
#### **Third Column (partition, default options are explicitly stated)**  

Any new MRNs here are inserted.
* Mrn1: Nothing is inserted.
* Mrn2: Nothing is inserted.
* Mrn3: MRN matches one that was deleted. It is inserted.
* Mrn4: Nothing is inserted.

  
#### **Fourth Column (CCHIT partition, UPDATE option)**  

New MRNs replace an existing numbers, if available.
* Mrn1: MR number is the same as the existing entry. Nothing changes.
* Mrn2: One of the existing MRNs is replaced by the incoming number.
* Mrn3: No new MRN. Nothing changes.
* Mrn4: The existing MRN is replaced by the new number.

  
#### **Fifth Column (CCHIT partition, DELETE_BLANK option)**  

When a blank is submitted, existing MRNs are deleted.
* Mrn1: All CCHIT MRNs are deleted.
* Mrn2: Depends on which MRN was updated. The 42 MRN will either be unchanged, because it exists or is inserted because it was previously updated.
* Mrn3: Nothing is changed.
* Mrn4: The new MRN is inserted.

  
### **Post Processed Data**  

After the import finishes, the MRNs are updated.


{{% anchor sys="translations" %}}
Translations
If it is undesired to add the options directly into the file header, it is possible to configure the options thru translations; mapping the original column header name to the desired column header name.
A translation entry needs a translation name, something to translate from, and something to translate to. In this case, reverse translations are used. This means that translate from and translate to are switched.

  
### **Name**  

There are two parts to the name: interface name and the category. The interface name should match whatever is used for the interface when the file is loaded; "WC_DATA_IMPORT" is the default interface. "column_alias" is the category.
When using the translation manager, the interface is entered into the "Interface Name" field, and "column_alias" is entered into the "Other Category" field if it is not found in the category drop-down list.
When loading the translation directly into the database, the name field is the the interface and the category separated by a hyphen. (e.g. "WC_DATA_IMPORT-column_alias")

  
### **Trans From**  

The Trans From field is what will replace the header column in the file. This will have the options listed before the header field. (e.g. "UPDATE DELETE_BLANK @patient_mrns.CCHIT)

  
### **Trans To**  

The Trans To field is the alias for the column; this is what is in the file. (e.g. "EmpID")

  
### **Translation Manager**  

Here is an example of using the Translation Manager to add a translation.


  
## **Related Pages**  

* [Data Import Master List](data-import-master-list.md)
* [Chart Data CSV API](chart-data-csv-api.md)
