---
id: '1N6H4YEgK5O5BzM2oWsVL-k6RTG8KUlGVUaqjP1sC5r0'
title: 'Fee Schedule Import Tool'
date: '2020-02-27T20:46:06.612Z'
version: 19
mimeType: 'text/x-markdown'
links:
  - 'https://miewiki.med-web.com/wiki/index.php/File:Def_fee_sched.csv'
source: 'https://drive.google.com/open?id=1N6H4YEgK5O5BzM2oWsVL-k6RTG8KUlGVUaqjP1sC5r0'
wikigdrive: 'b7222904e37143b515987f6e0f083f595990e37a'
menu:
  main:
    name: 'Fee Schedule Import Tool'
    identifier: '1N6H4YEgK5O5BzM2oWsVL-k6RTG8KUlGVUaqjP1sC5r0'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 5030
---
This wiki page is to document how fee schedule data needs to be constructed in order to import using WebChart's Fee Schedule Import Tool.
* File format: Data file shall be formatted in Comma Separated Values (CSV).
* The first row of the file shall contain column header information.
* Each subsequent row shall represent an fee schedule.

## **Column Definition**

The fee schedule column definition shall contain all columns listed below regardless if their is a value or not.
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
<td>Fee Schedule Name</td>
<td>char 100</td>
<td>R</td>
<td>Name of fee schedule</td>
</tr>
<tr>
<td>CPT Code</td>
<td>char 15</td>
<td>R</td>
<td>CPT code to load</td>
</tr>
<tr>
<td>Description</td>
<td>char 255</td>
<td>R</td>
<td>Description of the CPT Code</td>
</tr>
<tr>
<td>Amount</td>
<td>double(9,2)</td>
<td>R</td>
<td>Dollar amount for CPT Code (max 9 digits before decimal, 2 digits after, ie 123456789.00)</td>
</tr>

</table>

## **Examples of CSV**


### **Fee Schedule Example**

This example shows how to import multiple cpt codes into 1 fee schedule labeled 'DEF Biz'.

{{% pre %}}
```


Fee Schedule Name,CPT Code,Description,Amount
DEF Biz,13153,REPAIR WOUND/LESION ADD-ON,$291.00
DEF Biz,15050,SKIN PINCH GRAFT,$751.00
DEF Biz,16000,INITIAL TREATMENT OF BURN(S),$120.00
DEF Biz,16020,TREATMENT OF BURN(S),$143.00
DEF Biz,16025,TREATMENT OF BURN(S),$245.00
DEF Biz,16030,TREATMENT OF BURN(S),$289.00
DEF Biz,17003,"DESTROY LESIONS, 2-14",$22.00
DEF Biz,17110,"DESTRUCT LESION, 1-14",$157.00
DEF Biz,17250,"CHEMICAL CAUTERY, TISSUE",$119.00
DEF Biz,20000,INCISION OF ABSCESS,$325.00
DEF Biz,20005,INCISION OF DEEP ABSCESS,$469.00

{{% /pre %}}


```

## **Sample CSV files**

Here is a sample CSV file to download and view in a text editor or a spreadsheet program.
[File:Def fee sched.csv](https://miewiki.med-web.com/wiki/index.php/File:Def_fee_sched.csv)
