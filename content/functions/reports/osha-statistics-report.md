---
id: '1y75-zBcAX1xWPT3-GOl3RRm9wqTRdYvFF54JjU5VtLQ'
title: 'OSHA Statistics Report'
date: '2024-01-16T15:47:55.490Z'
version: 227
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'https://www.osha.gov/injuryreporting'
  - 'https://www.osha.gov/sites/default/files/osha_ita_api_documentation_revised.pdf'
source: 'https://drive.google.com/open?id=1y75-zBcAX1xWPT3-GOl3RRm9wqTRdYvFF54JjU5VtLQ'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## OSHA Statistics Report

The OSHA Statistics report is found within the Reports module, and within the Safety grouping of reports available in {{% system-name %}}.

![](../osha-statistics-report.assets/90bd87f92f192cd0c318bf813fa133f9.png)

The OSHA Statistics report will display columns of data that mimics the Injury Tracking Application (ITA) published by OSHA.gov website. Our {{% system-name %}} OSHA Statistics report helps provide a method for injury and illness data submissions you may be required to submit by OSHA.  Our OSHA Statistics report displays OSHA recordable cases/incidents for the *PRIOR year* of this current logged in session according to establishments (EO charts) that have that establishment/onsite work location noted as having any recordable injury/illness occurrences there. Meaning, it will look for and display information regarding OSHA recordable cases/incidents that have an injury/illness onset date of the *prior* year to today's logged in date, broken down by where it occurred (work location or site EO establishments) to result here.

More information from OSHA is at https://www.osha.gov/injuryreporting

![](../osha-statistics-report.assets/a153bc59d5459adf0bcdaa83bbd20910.png)

### OSHA Statistics Report Criteria

The OSHA Statistics report has the following logic criteria/logic built in order to be listed on the output of this report:

* Onsite Injury/Illness locations to be configured as EO charts must have a chart type of either <em>Work Location</em> <strong>or</strong> <em>Site</em>
    * <strong>and</strong> the EO onsite injury/illness work location/site chart should must have <em>Employer Organization Data</em> fields filled out in the <strong>Other Data</strong> section of Overview (EO) tab
    * <strong>and</strong> the EO onsite injury/illness work location/site chart must be configured as an onsite injury location within the Locations Hierarchy system editor
        * <strong>and</strong> its Chart ID entry (in Locations Hierarchy) must be linked to its own EO or PO chart
        * <strong>and</strong> its Status entry (in Locations Hierarchy) must active or inactive (deleted locations hierarchy locations are omitted from the system, the case/incident and from the OSHA Statistics Report)
* Your case/incident workflows must utilize the Case encounter section on specific encounter types deemed appropriate for your business
* The case/incident would be documented as <em>OSHA Recordable</em> to appear on this report (date determined recordable field)
* The OSHA recordable case/incident <em>Injury or Illness onset date</em> field must have any date in the <em>year prior</em> to today's logged in date when generating this OSHA Statistics report
* The OSHA recordable case/incident must have been documented as an <em>onsite location</em> (and the onsite location is configured as stated in first bullet above)
* Your case/incident workflows must utilize the Restrictions and Accommodation sections on specific encounter types when deemed appropriate

{{% tip %}}
Screenshot examples that describe the above criteria:



EO or PO Chart for the onsite work location example:

![](../osha-statistics-report.assets/0e5efcc177737cb5692bdb5ec818bf90.png)



Locations Hierarchy example:

![](../osha-statistics-report.assets/919cd464ac60bc9a4dfb8c38a16382e5.png)



Case encounter section for an OSHA recordable injury/illness example:

![](../osha-statistics-report.assets/ef819e90f6fdc12457017ef418e4854f.png)
{{% /tip %}}

### OSHA Statistics Report Datavis Columns

The OSHA Statistics report generates a list of results upon navigating to that report.  As stated above, the {{% system-name %}} OSHA Statistics report displays OSHA recordable cases/incidents for the *PRIOR year* of this current logged in session. Meaning, it will look for and display information and counts that involve OSHA recordable cases/incidents that have an injury/illness onset date of the *prior* year to today's logged in date, will result here and be easily downloadable into a CSV file that can be used for your electronic reporting submission needs.

A complete report requirements description and columns that the report output is to gather and produce is found in the OSHA Injury Tracking Application API Document found at https://www.osha.gov/sites/default/files/osha_ita_api_documentation_revised.pdf

The below list of columns from the OSHA Statistics report, will describe where the data comes from within {{% system-name %}} to populate our OSHA Statistics report, which can then be used to download and submit to help provide a method for injury and illness data submissions required by OSHA.

* <strong>establishment_name</strong> - pulls the Name field found on the EO work location/site chart with any acronym in parenthesis found in the Overview EO chart tab
* <strong>ein</strong> - pulls the EIN field from the EO work location/site chart's <em>Other Data</em> section found in the Overview EO chart tab
* <strong>company_name</strong> - will always be blank out of the box
* <strong>street_address</strong> - pulls the Address1 field found on the EO work location/site chart in the Overview EO chart tab
* <strong>city</strong> - pulls the City field found on the EO work location/site chart in the Overview EO chart tab
* <strong>state</strong> - pulls the State/Province field found on the EO work location/site chart in the Overview EO chart tab
* <strong>zip</strong> - pulls the Postal Code field found on the EO work location/site chart in the Overview EO chart tab
* <strong>naics_code -</strong> pulls the North American Industrial Classification (NAICS number) field from the EO work location/site chart's Other Data section found in the Overview EO chart tab
* <strong>industry_description</strong> - pulls the Industry Description field from the EO work location/site chart's <em>Other Data</em> section found in the Overview EO chart tab
* <strong>size</strong> - displays either a 1, 2 or a 3 value in this column depending on the Annual average number of employees field from the EO work location/site chart's <em>Other Data</em> section found in the Overview EO chart tab.  A value of 1 if less than 20 employees, a value of 2 if 20-249 employees, or a value of 3 if 250+ employees
* <strong>establishment_type</strong> - will always display a value of 1 out of the box
* <strong>year_filing_for</strong> - will always be the prior 4 digit year of today's logged in session when generating this report
* <strong>annual_average_employees</strong> - pulls the Annual average number of employees field from the EO work location/site chart's Other Data section found in the Overview EO chart tab
* <strong>total_hours_worked</strong> - pulls the Total hours worked by all employees last year field from the EO work location/site chart's Other Data section found in the Overview EO chart tab
* <strong>no_injuries_illnesses</strong> - displays either a 1 or 2 value in this column depending on whether the work location/site EO chart had any recordable onsite injury/illness cases noted with this onsite work location.  Value of 1 indicates the establishment had recordable injuries or illnesses, or value of 2 if the establishment did not have any recordable injuries or illnesses
* <strong>total_deaths</strong> - the total number of recordable cases that have the Employee died checkbox field in the case/incident is marked and the injury or illness occurrence was at this establishment (found within the case/incident encounter section)
* <strong>total_dafw_cases</strong> - the total number of recordable cases with days away from work noted as Lost Time accommodations linked to the case/incident and the injury or illness occurrence was at this establishment (found within the case/incident encounter section)
* <strong>total_djtr_cases</strong> - the total number of recordable cases that have any restrictions linked to the OSHA recordable case/incident and the injury or illness occurrence was at this establishment (found within the case/incident encounter section)
* <strong>total_other_cases</strong> - the total number of recordable cases that didn't fit any of the other criteria of Death, Lost Time, or Restrictions and the injury or illness occurrence was at this establishment (found within the case/incident encounter section)
* <strong>total_dafw_days</strong> - If any recordable cases had any Lost Time documented in the Accommodations encounter section and the accommodation is linked to the OSHA recordable case and the injury or illness occurrence was at this establishment (found within the case/incident encounter section) then the total number of Lost Time days will be calculated here and displays a total number
* <strong>total_djtr_days</strong> - If any recordable cases had any Restrictions documented in the restrictions section of the encounter that is linked to the OSHA recordable case and the injury or illness occurrence was at this establishment (found within the case/incident encounter section) then the total number of Restricted days will be calculated here and displays as a total number
* <strong>total_injuries</strong> - the total number of recordable cases where the injury/illness type was marked as an Injury (and not as a Skin Disorder, Respiratory, Poisoning, Hearing Loss or All Other Illnesses) and the injury or illness occurrence was at this establishment (found within the case/incident encounter section)
* <strong>total_skin_disorders</strong> - the total number of recordable cases where the injury/illness type was marked as a Skin Disorder (and not as an Injury, Respiratory, Poisoning, Hearing Loss or All Other Illnesses) and the injury or illness occurrence was at this establishment (found within the case/incident encounter section)
* <strong>total_respiratory_conditions</strong> - the total number of recordable cases where the injury/illness type was marked as Respiratory (and not as a Skin Disorder, Injury, Poisoning, Hearing Loss or All Other Illnesses) and the injury or illness occurrence was at this establishment (found within the case/incident encounter section)
* <strong>total_poisonings</strong> - the total number of recordable cases where the injury/illness type was marked as a Poisoning (and not as a Skin Disorder, Respiratory, Injury, Hearing Loss or All Other Illnesses) and the injury or illness occurrence was at this establishment (found within the case/incident encounter section)
* <strong>total_hearing_loss</strong> - the total number of recordable cases where the injury/illness type was marked as a Hearing Loss (and not as a Skin Disorder, Respiratory, Poisoning, Injury or All Other Illnesses) and the injury or illness occurrence was at this establishment (found within the case/incident encounter section)
* <strong>total_other_illnesses</strong> - the total number of recordable cases where the injury/illness type was marked as All Other Illnesses (and not as a Skin Disorder, Respiratory, Poisoning, Hearing Loss or Injury) and the injury or illness occurrence was at this establishment (found within the case/incident encounter section)
* <strong>change_reason</strong> - will always be blank out of the box

{{% note %}}
This report **does** respect the Locations Hierarchy **_Parent_** with the data outputs.  Meaning, if an onsite injury/illness work location/site EO chart has a Parent (in the Locations Hierarchy) of another onsite injury/illness work location/site EO chart, then all its child sites plus any recordable injury/illnesses at the parent site will be counted/displayed on the Parent's establishment line of this report.
{{% /note %}}

### Download OSHA Statistics report to a CSV format

The OSHA Statistics report is easily downloadable into a CSV format.  Simply click the *Generate CSV* icon (looks like a corner fold paper icon), which will then turn into a *Download CSV* icon to click (looks like an in-box tray icon) to generate the report's output into a CSV downloadable file.  Store to your folder location of choice.

![](../osha-statistics-report.assets/3e8d409c4ba1fae9733eba7015cc7207.png)

The CSV file will be in the specific column order with column titles labeled as the OSHA injury and illness data submission requires.

![](../osha-statistics-report.assets/d1028abf5ed9b799a02d098f96f60a20.png)
