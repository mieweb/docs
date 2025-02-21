---
id: '1LCFeOZz-oM3zqHHPhTmV523I3AsTJPjz5CPa9gpqB9A'
title: 'Pharmacy Filter Import'
date: '2024-12-18T13:48:13.385Z'
version: 30
lastAuthor: 'bhamm'
mimeType: 'text/x-markdown'
links:
  - 'data-import-master-list.md'
source: 'https://drive.google.com/open?id=1LCFeOZz-oM3zqHHPhTmV523I3AsTJPjz5CPa9gpqB9A'
wikigdrive: '0008bcbb1563384efe0a28ada6f97e9432e65f10'
---
The Pharmacy Filter allows you to import filter data on pharmacies based on either their NPI or NCPDPID.

The purpose of this page is to define data and fields that may be imported into MIE systems (Webchart, Enterprise Health) using the WC Pharmacy Filter Import.

## Specifications

### Quick Reference Specifications

* File format: Data files shall be formatted in Comma Separated Values (CSV)
* The first row of the file shall contain column header information.
* Each subsequent row shall represent an encounter order(s).

### Field Definitions by Table

### FILTER_NAME

* This is the name you give to your filter.

### NPI

* Provider specific id consisting of 9 numeric digits with 1 check digit.

### NCPDPID

* Provider specific id consisting of 7 numeric digits assigned to every licensed pharmacy.

## Column Definition

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
<td>FILTER_NAME</td>
<td>char</td>
<td>R</td>
<td>Name of the Filter</td>
</tr>
<tr>
<td>NPI</td>
<td>integer</td>
<td>O*</td>
<td>National Provider Identifier</td>
</tr>
<tr>
<td>NCPDPID</td>
<td>integer</td>
<td>O**</td>
<td>National Council for Prescription Drug Programs ID</td>
</tr>
</table>
```
*Optional when NCPDPID is present in row.
**Optional when NPI is present

```

## Examples of CSV

Import with 2 records: one record with a NPI identifier and another with a NCPDPID identifier.

{{% pre %}}
```


FILTER_NAME,NPI,NCPDPID
MyFilter1,1234567890,
MyFilter2,,1234567

```
{{% /pre %}}

Import with an additional record that contains both an NPI & NCPDPID. When this occurs, the NCPDPID identifier takes precedence.

{{% pre %}}
```


FILTER_NAME,NPI,NCPDPID
MyFilter1,1234567890,
MyFilter2,,1234567,
FilterWithBoth,1234212, 1251254150

```
{{% /pre %}}

## Related Pages

* [Data Import Master List](data-import-master-list.md)
