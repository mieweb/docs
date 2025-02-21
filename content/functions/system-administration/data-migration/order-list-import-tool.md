---
id: '1G40DAPnlx7F9X5xRDxMUVkRSk50Ec_5HEyUdvk7yK_I'
title: 'Order List Import Tool'
date: '2024-01-25T13:02:09.403Z'
version: 87
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://drive.google.com/file/d/1SIBoNqMuYZoruef5PlDrJcbH9GAzLwrL/view?usp=sharing'
source: 'https://drive.google.com/open?id=1G40DAPnlx7F9X5xRDxMUVkRSk50Ec_5HEyUdvk7yK_I'
wikigdrive: '0008bcbb1563384efe0a28ada6f97e9432e65f10'
---
This page is to document how Order list items (Compendium of tests) data needs to be constructed in order to import using WebChart's Order List Import Tool.

* File format: Data file shall be formatted in Comma Separated Values (CSV).
* The first row of the file shall contain column header information.
* Each subsequent row shall represent an order item.
* The Order Type is specified on the upload file form. Each item in the list will be imported with the specified type.

## Column Definition

The order list column definition shall contain all columns listed below regardless if there is a value or not.

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
<td>Order name</td>
<td>char 2^24 (16MB)</td>
<td>R</td>
<td>This is the short form name or mneumonic of the order item</td>
</tr>
<tr>
<td>Order detail description</td>
<td>char 2^24 (16MB)</td>
<td>O</td>
<td>Detailed description of the order item</td>
</tr>
<tr>
<td>Order code</td>
<td>char 30</td>
<td>R</td>
<td>Unique order code for this order item</td>
</tr>
<tr>
<td>LOINC code</td>
<td>char 50</td>
<td>O</td>
<td>LOINC code</td>
</tr>
<tr>
<td>Billing code</td>
<td>char 30</td>
<td>O</td>
<td>CPT code</td>
</tr>
<tr>
<td>Collection instructions</td>
<td>char 2^24 (16MB)</td>
<td>O</td>
<td>Special instructions for at the time of collection</td>
</tr>
<tr>
<td>Patient instructions</td>
<td>char 2^24 (16MB)</td>
<td>O</td>
<td>Instructions for the patient prior to collection</td>
</tr>
<tr>
<td>Force separate order</td>
<td>char 1</td>
<td>O</td>
<td>If (Y)es, force a separate order to be placed, If (N)o, all this item to be grouped with other order items in a single order</td>
</tr>
</table>

## Examples of CSV

### Order List Example

This example shows how to import multiple order items into the complete order list.

{{% pre %}}
```

Order name,Order detail description,Order code,LOINC code,CPT code,Collection instructions,Patient instructions,Force separate order
CPSA,Complexed PSA (cPSA),LAB5725,33667-7,84153,"Container: Purple top tube, Storage: Room temperature",Patient fasting not required,N
BILTO,Bilirubin Total,LAB5017,1975-2,82247,SST,,N
CREAT,Creatinine,LAB5023,,82565,SST,,N
GLU,Glucose,LAB5062,14749-6,82947,SST,,N
BSS,"Occult Blood Screening, Stool",LAB5093,,82270,Non sterile container,,N
```
{{% /pre %}}

## Sample CSV files

Here is a sample CSV file to download and view in a text editor or a spreadsheet program.

[File:Order list.csv](https://drive.google.com/file/d/1SIBoNqMuYZoruef5PlDrJcbH9GAzLwrL/view?usp=sharing)
