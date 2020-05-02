---
title: "Transcription Report"
date: 2020-02-27T20:17:14.867Z
url: "general-functionality/reports/transcription-report.html"
version: 15
id: 1bTJ6VujPQavXt-wY3eUY2U9Q2hqrlw1Mu59Aasd0OfM
source: https://drive.google.com/open?id=1bTJ6VujPQavXt-wY3eUY2U9Q2hqrlw1Mu59Aasd0OfM
menu:
    main:
        name: "Transcription Report"
        identifier: "1bTJ6VujPQavXt-wY3eUY2U9Q2hqrlw1Mu59Aasd0OfM"
        parent: "1tumzkTBh0NospSPjdaGGHBFgQH6_k5j-sFMaSI0VnSY"
        weight: 4360
---
You must have security role access to the Reports module/tab. This setting is in the Security Role Editor and is in {{% system-name %}} controls called STATISTICS. Set to Yes or No. This allows users within a role to access the entire Reports left-side bar tab (except Tran Stats tab). Also allows users within a role to access the Statistics tab in Control. Additionally, you must have security role access to the Transcription Stats. This setting is in the Security Role Editor and is in {{% system-name %}} controls called VIEW TRANSCRIPTION STATS. Set to None, View Own Stats, or View Others Stats. This allows users within a role to access the Tran Report tab in the Report left side-bar tab.

Click *Reports* tab on the left side-bar menu.

Click *Tran Reports* tab from the top tab menu.

You do not have to fill out every single field. These fields are different ways to report stats and each field gets more specific and narrows your search down.

![](../../external_files/fd82366faa7158e80cb4efa80353ac03.png)

* <strong>Select Dept</strong>: You can select a specific department you wish to view transcription stats for using the drop-down arrow.
* <strong>Select User:</strong> If you selected a department in the field prior, the <em>Select User</em> field will only show users within that department. You can narrow down your transcription report by a specific user in that department. If you do not select a department in the field prior, all users in your system will show up in the <em>Select User</em> field to choose from. You can narrow down the results by a specific user in your system.
* <strong>Limit To Provider:</strong> Begin typing in the last or first name of the provider (physician) you want to limit transcription statistics to. The results will show dictation statistics related to that specific provider only. If you do not select a provider in this field, the transcription results will be for any and all providers.

![](../../external_files/62751ca8a0e884a9bab946ddbfae3491.png)

* <strong>Document Type</strong>: Select the specific document type you wish the stats to be reported on or leave as All Document Types.
* <strong>Exclude Selected Document Type:</strong> You can select a document type, then check-mark the box to <em>Exclude Selected Document Type</em>. This will run transcription stats on <strong>all</strong> document types <strong>except</strong> the <strong>one</strong> that you selected from the drop- down arrow box.
* <strong>Subtract Template Stats:</strong> Template characters are words/lines/characters that someone already typed in a ‘word' document as a template/guide to follow. When a word template is added, the word/line/character counts are stored in a database table, and if this ‘subtract template stats' option is selected, the report will subtract those totals from the final documents that the transcriptionists add. If the pre-typed template has 1000 characters in it, and the transcriptionist types an additional 1000 when adding a document of that type, then there are 2000 characters in the document. If someone wants to see how much actual typing the transcriptionist did, they want to be able to subtract that original 1000 characters. The subtract templates stats does deduct what prefills into the template (ie. Name:, Date: MR #, etc.) but it does not subtract the data that autopopulates (ie. the actual patient name, the actual date, the actual medical record NUMBER, etc.).
* <strong>Transcription Type:</strong> Select the transcription type to be limited to or leave as All Transcription Types to be reported. If you select ‘All Transcriptions' or ‘Encounter Observations' for the Transcription Type, the ‘Document Type' choice will be reset to ‘All' and the ‘Exclude' option is cleared and grayed out. When you select ‘Text/Word Documents' the ‘Exclude' option is enabled. This is because the document type only really matters when you are looking at Text/Word Documents.
* <strong>Transcribed Date Range #1:</strong> Type in a date range of statistics to show. If left blank, it will pull everything ever done. Leaving starting date blank will include everything before ending date. Leaving ending date blank will include everything after starting date. If both are blank, all dates will be included.
* <strong>Transcribed Date Range #2:</strong> Enter a date range here if you wish to run stats comparing this date range against the Date Range #1 field. At least one date must be valid or no comparison will be made. In Date Range #1 you would enter a date range, and here in Date Range #2, you would enter a different date range. The statistics display results as a comparison of two different date ranges.

![](../../external_files/374e7df17d7037ff90874ce921d11e7a.png)

Click *Run Query* button to run the Transcription Statistics Report.

It will then run and at the bottom of the screen it will show each username with their specific statistics.

The columns have titles to result the information.

* <strong>Editing Time</strong> column displays total number of minutes based on the time difference between when the transcription window is opened until it is closed. This is simply a metric, not performance metric.
* <strong>Dictation MM:SS</strong> column is the total number of minutes and seconds of dictation that was used to transcribe the documents in the report.

![](../../external_files/02f4d111614bbf7cc6e830b079724a6d.png)

