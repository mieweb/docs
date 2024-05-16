---
id: '1bTJ6VujPQavXt-wY3eUY2U9Q2hqrlw1Mu59Aasd0OfM'
title: 'Transcription Report'
date: '2024-05-16T13:35:19.003Z'
version: 56
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.google.com/document/u/0/d/1q7hhe_ityux9MD4-bbi_TVBr6tIoJMTnQd6f-DektHM/edit'
source: 'https://drive.google.com/open?id=1bTJ6VujPQavXt-wY3eUY2U9Q2hqrlw1Mu59Aasd0OfM'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The transcription report provides calculations of words per minute transcribed and time spent editing. These are calculations based on input to {{% system-name %}} and not performance metrics.

Use transcription reports to view statistics on transcription output. The report can present information based on department, provider, user, document type, and ranges of dates. A transcription report includes the following information:

* <em>User:</em> User name of the transcriptionist.
* <em>Last:</em> Last name of the transcriptionist.
* <em>First:</em> First name of the transcriptionist.
* <em>MI:</em> Middle initial of the transcriptionist.
* <em>Char.:</em> Quantity of characters not including spaces transcribed during the period of the report.
* <em>Char w/Space:</em> Quantity of characters including spaces transcribed during the period of the report.
* <em>Words:</em> Quantity of words transcribed during the period of the report.
* <em>Lines:</em> Quantity of lines of text not including spaces transcribed during the period of the report.
* <em>Lines w/Space:</em> Quantity of lines of text including spaces transcribed during the period of the report.
* <em>Paragraphs:</em> Quantity of paragraphs transcribed during the period of the report.
* <em>Pages:</em> Quantity of pages transcribed during the period of the report.
* <em>Total # Transcriptions:</em>
* <em>Editing Time:</em> Total number of minutes spent in transcription during the period of the report based on the amount of time the transcription window is open. This is simply a statistic, not a performance metric.
* <em>WPM:</em> Quantity of words transcribed per minute calculated by dividing the calculated editing time by the quantity of words per minute transcribed during the period of the report. This is simply a statistic, not a performance metric.
* <em>Dictation MM:SS:</em> Length of dictation in minutes and seconds included in the period of the report.

Some transcriptions are based on templated documents. Templates include characters, words, and lines (like a form) to which information is added. Typically for transcription statistics, it is undesirable to include the characters, words, and lines that are part of the template and which the transcriptionist did not transcribe. When generating a transcription status report, the system can exclude characters, words, and lines that are part of the template from the quantities of characters, words, and lines transcribed. For example, if a template contains a quantity of 100 characters, words, and lines and the transcriptionist transcribes an additional quantity of 100 characters, words, and lines that were entered into the template, the system may calculate a quantity of 200 characters, words, and lines transcribed if the quantity that are part of the template are not excluded. To exclude them, see [*Subtract Template Stats*](#xzjgkzxgargh) field.

The system can automatically provide a comparison of transcription statistics for two periods of time. When doing so, the system displays the statistics for each period and then the differences between them for each statistic reported. To produce a report including a comparison of statistics, see [*Transcribed Date Range #2*](#c41etjhwe7qt)** field.

You must have security role access to reports and to viewing transcription statistics before generating transcription reports. The access to reports is controlled by the *Statistics* setting and viewing transcription statistics is controlled by the *Tran Reports* setting in the Security Role Editor. See [Security Role Settings](https://docs.google.com/document/u/0/d/1q7hhe_ityux9MD4-bbi_TVBr6tIoJMTnQd6f-DektHM/edit).

1. Show the side menu. The side menu appears.
2. From the side menu, select <strong>Reports</strong>.
3. Select <strong>Dictation/Transcription</strong>. The <em>Dictation/Transcription</em> section appears.
4. From the <em>Dictation/Transcription</em> section, select <strong>Transcription Reports</strong>. The <em>Transcription Statistics</em> section appears.  
    ![](../transcription-report.assets/3216d1211586a09cb5a01a0538d4e9c4.png)
5. In the <em>Transcription Statistics</em> section, make selections and type in fields to generate the report:
    1. <em>Select</em>  <em>Department</em>: Select department for which to view transcription statistics.
    2. <em>Select User:</em> To limit the report to transcriptions performed by a system user, select that user.
    3. <em>Limit To Provider:</em> To limit the report to transcriptions performed for a provider, type the first or last name of the provider. If you do not select a provider in this field, the transcription results will be for all providers.
    4. <em>Document Type</em>: To limit the report to transcriptions performed on a type of document, select the document type. To not limit the report, leave set to <em>All Document Types</em>
    5. <em>Exclude Selected Document Type:</em> To exclude transcriptions performed on a type of document, select that type of document from the <em>Document Type</em> field and select this check box. The report will contain transcription statistics for all types of documents except that selected in the <em>Document Type</em> field.
    6. <em>Subtract Template Stats:</em> To exclude from transcription statistics words contained in a template on which the transcribed document is based, select this check box.
    7. <em>Transcription Type:</em> To produce a report limited to one type of information transcribed, select that type. If you select <em>All Transcriptions</em> or <em>Encounter Observations</em>, the system resets the <em>Document Type</em> field to <em>All</em> and the check box of the <em>Exclude Selected Document Type</em> is cleared and the field made unavailable because these are only applicable to document types.
    8. <em>Transcribed Date Range #1:</em> Do one:
        1. Leave all month, day, and year fields blank to show transcription statistics from all time.
        2. To show transcription statistics from a period of time, type in the left and right month, day, and year fields or select <strong>Today</strong> to use today's date or select <strong>Calendar</strong> to pick a date from a calendar.
        3. To show transcription statistics from a date to today, type in the left month, day, and year fields or select <strong>Calendar</strong> to pick a date from a calendar. Leave the right month, day, and year fields blank.
        4. To show transcription statistics from all time to a date, type in the right month, day, and year fields or select <strong>Today</strong> to use today's date or select <strong>Calendar</strong> to pick a date from a calendar.
    9. <em>Transcribed Date Range #2:</em> To see and compare transcription statistics of two ranges of dates, do one of the following. To not see nor compare transcription statistics of two ranges, of dates, leave these fields empty.
        1. Leave all month, day, and year fields blank to show transcription statistics from all time.
        2. To show transcription statistics from a period of time, type in the left and right month, day, and year fields or select <strong>Today</strong> to use today's date or select <strong>Calendar</strong> to pick a date from a calendar.
        3. To show transcription statistics from a date to today, type in the left month, day, and year fields or select <strong>Calendar</strong> to pick a date from a calendar. Leave the right month, day, and year fields blank.
        4. To show transcription statistics from all time to a date, type in the right month, day, and year fields or select <strong>Today</strong> to use today's date or select <strong>Calendar</strong> to pick a date from a calendar.
6. Select <strong>Run Query</strong> button. At the bottom of the screen, the system displays the report.

![](../transcription-report.assets/2d3508c79c37c6c0cc2c2a6567453fc7.png)
