---
id: '1N6H4YEgK5O5BzM2oWsVL-k6RTG8KUlGVUaqjP1sC5r0'
title: 'Fee Schedule Import Tool'
date: '2025-04-07T16:59:59.593Z'
version: 44
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1N6H4YEgK5O5BzM2oWsVL-k6RTG8KUlGVUaqjP1sC5r0'
wikigdrive: '9a3c47814c851f1e3ce25659ea66b7640ddaf209'
---
This wiki page is to document how fee schedule data needs to be constructed in order to import using WebChart's Fee Schedule Import Tool.

* File format: Data file shall be formatted in Comma Separated Values (CSV).
* The first row of the file shall contain column header information.
* Each subsequent row shall represent a fee schedule.

## Column Definition

The fee schedule column definition shall contain all columns listed below regardless if there is a value or not.

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
<td>Billing Code</td>
<td>char 15</td>
<td>R</td>
<td>Billing code to load</td>
</tr>
<tr>
<td>Description</td>
<td>char 255</td>
<td>R</td>
<td>Description of the Billing Code</td>
</tr>
<tr>
<td>Amount</td>
<td>double(9,2)</td>
<td>R</td>
<td>Dollar amount for Billing Code (max 9 digits before decimal, 2 digits after, ie 123456789.00)</td>
</tr>
</table>

## Examples of CSV

### Fee Schedule Example

This example shows how to import multiple Billing codes into 1 fee schedule labeled 'DEF Biz'.

{{% pre %}}
```

Fee Schedule Name,Billing Code,Description,Amount
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
```
{{% /pre %}}
