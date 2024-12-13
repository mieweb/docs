---
id: '1d6JDOjLPbEZ4hDhR-Qj9-DmT3-zskOyTRgJQaYmTfYg'
title: 'Data Migration File Format Standard'
date: '2020-03-17T01:50:37.727Z'
version: 43
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1d6JDOjLPbEZ4hDhR-Qj9-DmT3-zskOyTRgJQaYmTfYg'
wikigdrive: '18b16f57bdd63152bb21ca8c0a880f6721201af5'
---
This is an overview of what MIE expects from data files that are received from clients for data migration. Because it is time consuming and often unreliable to find and fix any problems with these files, MIE will return to the client any files that do not meet the following requirements.

## CSV Exports

Comma separated values (CSV) files have each datum separated by a delimiter (traditionally a comma). To ensure data exports correctly:

* The delimiter can be any single character, but it must be consistent throughout the entire file.
* Fields can be enclosed using another character, usually quotation marks ("). Any data fields that contain the character used as the delimiter, or a newline must be enclosed.
* If the enclosing character is in a quoted field, then it must be escaped. This can be done with another character, such as a backslash ('\') or by repeating the enclosure character (""). Some examples of this common mistake are below.
* Each row must have the same number of fields.
* The first row should be a header row, which indicates the column name for each datum in the rest of the file.
* The file should be encoded in UTF-8, or another unicode format (UTF-16 or UTF-32). UTF-8 is preferred; however, other formats are possible, if mutually agreeable.
* The name of the file should be the name of the table with the extension, if any. For example, if a table named myTable was exported, the CSV file should be called myTable.csv, or myTable.dat and myTable.txt are also acceptable.

### Common problems

The following sections show some common errors, with examples of how they should be addressed.

#### Delimiter character is not enclosed

```

12345,2015-03-03,This string has a comma, but it isn't enclosed,56789,more data
```

* The above example has a problem, because the delimiter (comma) is also used within one of the data fields (i.e., This string has a comma<strong>,</strong> but it isn't enclosed). The field needs to be enclosed, to indicate where the string is intended to end. Otherwise, it will be split into two fields when trying to load the data.
```

12345,2015-03-03,"This string has a comma, but it isn't enclosed",56789,more data

```

* Enclosing the data field indicates that the enclosed delimiter is not the end of the field.

#### Enclosed quote character is not escaped

```

12345,2015-03-03,'This time the string is enclosed, but the apostrophe isn't escaped, which could be nasty.',O'Reilly

```

* This example has a problem, because the enclosure character (apostrophe) is used within the string (i.e., isn<strong>'</strong>t) and the apostrophe is not escaped like it needs to be.
```

12345,2015-03-03,'This time the string is enclosed, but the apostrophe isn''t escaped, which could be nasty.',O'Reilly

```

* Because the delimiter is an apostrophe and the string contains an apostrophe, the delimiter character within the string will need to be escaped. The string is now enclosed, and the apostrophe within the string has been escaped, (e.g., 'This time the string is enclosed, but the apostrophe isn''t escaped, which could be nasty'). Because the string <em>O'Reilly</em> is not enclosed with apostrophes, the apostrophe does not need to be escaped. 

{{% tip %}}
A backslash ( \ ) can also be used to escape, as needed (e.g., 'isn''t' could also have been escaped like this: 'isn\'t').
{{% /tip %}}

### Exporting to CSV

Common applications have the capability of saving data in a CSV format with UTF-8 encoding.

#### Microsoft Excel

The following are steps used to save an Excel worksheet as a Unicode CSV file:

{{% note %}}
In a workbook that has multiple worksheets, each worksheet will need to be exported separately.
{{% /note %}}

1. Select the worksheet to be exported.
2. In the <strong>File</strong> menu, click <strong>Save As</strong>.
3. When the file browser opens, select <strong>Unicode Text</strong> as the file type.
4. Enter the name of the table as the file name.
5. <strong>Save</strong> the file.
6. In the box that pops up, click <strong>OK</strong>.
7. In the next box, click <strong>Yes</strong>.

#### Microsoft Access

The following steps are used to export an Access table as a Unicode CSV file:

1. Select the table to be exported.
2. Click the <strong>External Data</strong> tab.
3. In the <strong>Exports</strong> section, click <strong>Text File</strong>.
4. In the export wizard, enter the file name.
    1. Ensure that the <em>Export data with formatting and layout</em> checkbox is <strong>unchecked.</strong>
5. Click <strong>OK</strong>.
6. Select <strong>Delimited</strong>.
7. Click <strong>Next</strong>.
8. Choose a delimiter (any should work; just be consistent).
9. Make sure that the <em>Include Field Names on First Row</em> checkbox is <strong>checked.</strong>
10. Click <strong>Finish</strong>.
