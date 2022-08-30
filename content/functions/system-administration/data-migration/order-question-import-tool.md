---
id: '1vLkcD7KVc8tHY6VZkVDbXirqGFbPMPUr97U68k6Tc-c'
title: 'Order Question Import Tool'
date: '2021-10-29T16:01:13.157Z'
version: 37
lastAuthor: 'Kate Barton'
mimeType: 'text/x-markdown'
links:
  - 'https://drive.google.com/file/d/1pCbkfLSSJUZo4Gs1YeGe9anLSpnyRrE9/view?usp=sharing'
source: 'https://drive.google.com/open?id=1vLkcD7KVc8tHY6VZkVDbXirqGFbPMPUr97U68k6Tc-c'
wikigdrive: '762e46ee0b866c028283dd665b3a8ee950fb436c'
menu:
  main:
    name: 'Order Question Import Tool'
    identifier: '1vLkcD7KVc8tHY6VZkVDbXirqGFbPMPUr97U68k6Tc-c'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 5040
---
This wiki page is to document how Order Questions (AOE) data needs to be constructed in order to import using WebChart's Order Questions Import Tool.
* File format: Data file shall be formatted in Comma Separated Values (CSV).
* The first row of the file shall contain column header information.
* Each subsequent row shall represent an order question.
* The Order Type is specified on the upload file form. Each item in the list will be imported to the order item that matches with the specified type.

## **Column Definition**

The order question column definition shall contain all columns listed below regardless if there is a value or not.
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
<td>Order code</td>
<td>char 30</td>
<td>R</td>
<td>The order code on which this question is to be asked when it is ordered.</td>
</tr>
<tr>
<td>Question code</td>
<td>char 30</td>
<td>R</td>
<td>Code that uniquely identifies the question.</td>
</tr>
<tr>
<td>Question</td>
<td>char 200</td>
<td>R</td>
<td>The Question to be asked.</td>
</tr>
<tr>
<td>Input Type</td>
<td>'T', 'Y', or 'R'</td>
<td>R</td>
<td>How the question is to be answered. The valid input types are (T)ext, (Y)esNo, and (R)adio button.</td>
</tr>
<tr>
<td>Answer List</td>
<td>char 1024</td>
<td>O</td>
<td>List of possible answers. Items must be separated by '|' (the bar/pipe character).</td>
</tr>
<tr>
<td>Asking display order</td>
<td>int 3</td>
<td>O</td>
<td>The order in which the questions are displayed.</td>
</tr>

</table>

## **Examples of CSV**


### Order Question** Example**

This example shows how to import multiple order questions (AOE) into 1 order item with code 'LAB5725'.

{{% pre %}}
```


Order code,Question code,Question,Input Type,Answer List,Asking display order
LAB5725,XN1,Type of Urine Collection,R,24 Hour|Random Specimen,1
LAB5725,XN2,Patient Fasting?,Y,,2
LAB5725,XN3,Source,T,,3

{{% /pre %}}


```

## **Sample CSV files**

Here is a sample CSV file to download and view in a text editor or a spreadsheet program.
File:[Order questions.csv](https://drive.google.com/file/d/1pCbkfLSSJUZo4Gs1YeGe9anLSpnyRrE9/view?usp=sharing)
