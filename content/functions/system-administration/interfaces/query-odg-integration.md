---
id: '118KCb3m4jvyInhLS5YZ6H1wHpDtNEYweXH5nMzvFEgE'
title: 'Query ODG Integration'
date: '2025-10-09T17:48:35.718Z'
version: 153
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'https://www.mcg.com/odg/'
  - 'https://www.mcg.com/odg/wp-content/uploads/sites/2/2025/09/HowToUseTheODGDurationTab.pdf'
  - '../../reports.md'
  - '../../reports/using-datavis-grids-data-tools.md'
  - 'https://www.mcg.com/odg/solutions/the-odg-advantage/customer-experience/'
  - 'https://www.mcg.com/odg/solutions/workers-comp/return-to-work-guidelines-modeling/'
  - 'https://www.mcg.com/odg/solutions/workers-comp/treatment-guidelines/'
  - 'https://www.mcg.com/odg/solutions/workers-comp/reserving-cost-modeling/'
  - 'https://www.mcg.com/odg/client-resources/learning-resources/self-training-videos/'
  - 'https://www.mcg.com/odg/client-resources/learning-resources/self-training-pdfs/'
  - 'https://www.odgbymcg.com/help/Disability/Content/ODG/PDFLibrary/ODG%20by%20MCG%20Best%20Practices%20FAQ.pdf'
source: 'https://drive.google.com/open?id=118KCb3m4jvyInhLS5YZ6H1wHpDtNEYweXH5nMzvFEgE'
wikigdrive: '9a3c47814c851f1e3ce25659ea66b7640ddaf209'
---
An integration between {{% system-name %}} and [ODG by MCG ](https://www.mcg.com/odg/)is available in the 2025-09RC.  This integration can improve patient outcomes, reduce administrative costs, and streamline workflows by aligning with industry-standard guidelines. Integration with the ODG by MCG system to access evidence-based guidelines, benchmarking tools, and predictive modeling for best practice and average or maximum days away from work, improving return-to-work (RTW) timelines, medical costs, and quality of care. This integration provides a common framework based on extensive historical claims data (over 10 million lost-time cases), which helps manage costs, reduce inappropriate medical utilization, decrease indemnity costs, and improve worker and patient outcomes.

Our Phase 1 ODG by MCG Application Programming Interface (API) delivers ODG content directly into your

{{% system-name %}} system along with expedited access to the following endpoints:

* <strong>Calculator:</strong> Forecasts and benchmarks return-to-work (RTW) durations and costs at the claim level while scoring claims for risk assessments.

The Open ODG button to get into the ODG's own website application will also offer:

* <strong>Treatment Analyzer on Outcomes (TAO) | UR Advisor:</strong> Correlates medical interventions to outcomes and determines risk. The UR Adviser provides auto-adjudication of utilization (UR) and bill review operations, focusing resources only on those referrals facilitating early access to quality care.
* <strong>Fee Schedule:</strong> Retrieves the procedure code-specific medical fees listed by the state where treatment was obtained and billed. Fees can be filtered down to the region (by zip code), modifier, type of service, and place of service levels.
* <strong>Formulary:</strong> Provides the formulary advisor maps National Drug Codes (USA) and PBS codes (Australia) to the ODG Drug Formulary.
* <strong>Best Practice (BP) Guidelines:</strong> Proactively manages toward an appropriate return to work for injuries.

## Prerequisites of an integration

The following prerequisites are for organizations using the ODG by MCG API.

1. To use ODG by MCG web services, there must be a valid agreement in place with ODG by MCG.
2. You must first receive a client ID and client secret to obtain a bearer token before making a web services request from {{% system-name %}} to ODG.
3. Authorization for each available service must be given to access ODG content.
4. An {{% system-name %}} deployment consultant must set up the RTS (refer to systems) and enabled the system setting to initiate the ODG integration with your {{% system-name %}} system wide.

## Overview of the Calculator Portion of the Query ODG button functionality

Takes {{% system-name %}} encounter intake information (all diagnosis codes documented in the encounter, specific key demographics of the chart, specific Plan Narrative encounter data elements using the Case Management chief complaint protocol of {{% system-name %}} , and confounding factors to forecast projected disability return to work dates and risk factor score. ODG uses predictive analytics on the ODG claims database of over ten million claims.

Duration data is used to project target disability duration, benchmark lost time, and demonstrate savings.

Cost data for each data set are the sum of corresponding indemnity, medical, and administrative costs.

Outputs should be used to set baseline reserves, project expenditures, benchmark costs, and

demonstrate savings.

You can retrieve the following ODG data values/content in our Phase 1 integration within the Plan Narrative section of the Case Management encounter:

* Return-to-Work (RTW) Durations
    * Maximum (MDA) Duration in Days
    * Best Practice (BP) Duration in Days
    * Average Duration in Days

![](../query-odg-integration.assets/d6d13907be2b27f34c4ec37bf3c7ab5b.png)

* Risk Assessment Score (RAS)

![](../query-odg-integration.assets/ace1e95b9058a014cb14fdc2669896c2.png)

The ODG data values then populate into the {{% system-name %}}  Case Management encounter Plan Narrative flowsheet section.

![](../query-odg-integration.assets/566b60cefec1bccceff7fabc4826d277.png)

### Data Fields from our System Integration that get sent to Query ODG

These are the specific {{% system-name %}} encounter data elements of the Chart and Case Management encounter's Plan Narrative encounter data elements using the Case Management chief complaint protocol that will send to ODG when queried:

* <strong>Country (2 digit country code)</strong>: from the chart's demographics
    * ODG only supports US (United States), CA (Canada), and AU (Australia)
    * If country code is not in chart demographics nor passed to ODG, the ODG system will query to use US data
    * Any chart's demographic for any other country will return a query failed for invalid country because it is not supported by ODG

![](../query-odg-integration.assets/89f26c24c10115729adfc1c9c0be0972.png)

* <strong>State (state or province)</strong>: from the chart's demographics
* <strong>Age</strong>: from the chart's demographics)
* <strong>Diagnoses (ICD10 codes)</strong>: from the Case Management encounter Symptoms/Diagnosis section
    * ICD10 Diagnoses are not limited to a specific amount to query
    * ICD10 Diagnoses are not sent in a specific order, meaning the order the icd10s are sent in the calculation query to ODG is independent of the position order they appear on the encounter.
* <strong>Job Physical Strength Demand Level</strong>: from the Case Management encounter Plan Narrative flowsheet section
* <strong>First Day Missed Work/Date Absence Began</strong>: from the Case Management encounter Plan Narrative flowsheet section
* <strong>Work Related/Non-Work Related</strong>: from the Case Management encounter Plan Narrative flowsheet section
* <strong>Illness Category:</strong> from the Case Management encounter Plan Narrative flowsheet section
* <strong>Confounding Factors</strong>: from the Case Management encounter Plan Narrative flowsheet section
    * Confounding factor items in the Case Management encounter Plan Narrative flowsheet section will appear if system setting Query ODG is enabled
* <strong>Date of Surgery</strong>: from the Case Management encounter Plan Narrative flowsheet section
    * Illness type of Surgery selection can have a surgery date entered and/or Confounding Factors Surgery can have a surgery date entered.
        * Thus, if there happen to be both surgery date fields entered, we will send the earliest date that is today or in the future, otherwise will send the nearest past date

### ![](../query-odg-integration.assets/41a5b7d5154b94cf91e63499e091eba5.png)

### Query ODG Data that Sends Back Into Your Encounter

These 5 specific fields of data return from ODG into the {{% system-name %}} Case Management encounter once successfully queried (thus eliminating the need to manually key in data for these fields):

![](../query-odg-integration.assets/e54f3058ee427b984f3cf67917621cd1.png)

* <strong>Maximum Duration in Days:</strong> is the evidence-based upper limit for the expected length of disability or treatment for a specific medical condition or procedure based on the data elements sent in the query.
* <strong>Best Practice Duration in Day:</strong> is the recommended number of days for optimal recovery or work absence for a specific medical condition or procedure, based on evidence and typical outcomes.
* <strong>Average Duration in Days:</strong> is the average number of days that individuals typically require for recovery or work absence for a specific medical condition or procedure, based on collected case data.
* <strong>ODG Risk Score:</strong> is a numerical value that estimates the likelihood of delayed recovery or extended disability for a specific case, based on patient factors, diagnosis, and other clinical variables, helping to identify cases that may require additional attention or intervention.
    * The ODG system itself displays a round gauge chart and a thermometer chart for its risk score ranges, if you need an additional visual by going to the ODG site.

![](../query-odg-integration.assets/7cfae30e7572e1744b0bc5c809aa41c1.png)

* <strong>ODG URL:</strong> Inserts the specific URL that was passed back from ODG with all of the criteria used back into {{% system-name %}} to reference.  This URL deep links to ODG (when copy/pasted in a different browser that is logged into ODG) with the encounter entered field criteria and data passed to ODG being used to determine the days and risk score.  The ODG system url will take you to the specific ODG duration tab by prepopulating the data within this url and will allow you to use the ODG system in more detail for any other needs.  See ODG's [How to Use the Duration Tab](https://www.mcg.com/odg/wp-content/uploads/sites/2/2025/09/HowToUseTheODGDurationTab.pdf) self training PDF guide.

## Open ODG Functionality With or Without an Integration

The *Open ODG* button within the Plan Narrative flowsheet section of a Case Management encounter (utilizing the Chief Complaint protocol of Case Management) will be accessible with or without an ODG integration into your {{% system-name %}} system.

Your company must still have an ODG license initiated with ODG that includes a login/password to the ODG system, but you can easily access the ability to log in manually into the ODG system using the *Open ODG* button available directly here in the encounter.

![](../query-odg-integration.assets/7f8b5a333b0ccfa48b2185ab998649e0.png)

Once successfully logged into the ODG system, you can manually key in any data and include any refinement. See ODG's [How to Use the Duration Tab](https://www.mcg.com/odg/wp-content/uploads/sites/2/2025/09/HowToUseTheODGDurationTab.pdf) self training PDF guide.

![](../query-odg-integration.assets/0f80c1b87bea7e5e82cc8d9eb6f83c3c.png)

Then will be able to see the retrieved return to work duration guidelines and other information.  See ODG's [How to Use the Duration Tab](https://www.mcg.com/odg/wp-content/uploads/sites/2/2025/09/HowToUseTheODGDurationTab.pdf) self training PDF guide.

![](../query-odg-integration.assets/1d71bdd8a72c496dd02b8c75774d69df.png)

Then you can easily toggle between ODG's system and your {{% system-name %}} encounter to manually key in the days for benchmark durations, as well as capture the risk score and url manually.

![](../query-odg-integration.assets/f751b1f7b257835a51f464612ce2b379.png)

## Case Management Enc Details Report

The Case Management Enc (Encounter) Details report compiles detailed occupational health case management data for employees, including demographics, employment details, encounter information, diagnoses, restrictions, accommodations, and key case management milestones. It outputs a comprehensive, filterable summary of each case, supporting tracking, compliance, and analysis of employee health and return-to-work outcomes. The report searches for open or closed Case Management encounters that have a service date within the start/end date range selected (and any other search criteria entered). Note: Excluded from Quality Care charts are omitted from the report output.

A separate section of the report offers a visual with graphing on any grouped data.  You can favorite this report to be accessible more easily.  Simply follow the [Reports guide](../../reports.md) that provides the steps.

NOTE: If your system is on 202509RC and you do not see this report in your system, please contact your {{% system-name %}} helpdesk for assistance getting it configured for use.

### Search Filters of Case Management Enc Details Report

By default, the report will open up to be blank.  It is recommended that you key in at least a date range before rendering the report.  There are other search filter criteria data fields available to help narrow down your report results.  However, you can get report results for the lifetime of the system by simply clicking on the first title section *Case Management Enc Details Report* below the search filter criteria area.

![](../query-odg-integration.assets/6ef798307bb8b25e4ca8aea06b3a5035.png)

### Case Management Enc Details Report section

Based on any search filter criteria entered, the *Case Management Enc Details Report* section will output the data into a DataVis format.  This report offers a plethora of columns with the appropriate data captured for you to have visibility to the data needed.  For more information on utilizing reports in a DataVis format please refer to [Using DataVis Grids](../../reports/using-datavis-grids-data-tools.md) guide.

![](../query-odg-integration.assets/c59ec992e2d5f30aef4d792d0c6bd3f9.png)

### Case Management Enc Details Report - Graph section

If report data in the Case Management Enc Details Report section of the output is grouped, then the subsequent section titled *Case Management Enc Details Report-Graph* will output a graph.  The user can select the Graph Type from the drop-down to change the graph shown.

![](../query-odg-integration.assets/0c136f6c64b45c9287a2754aa1605b9e.png)

The graph can also be saved to your device as a PNG file image using the download icon available in that section.

![](../query-odg-integration.assets/4a0aef782897e718492c73a0741e24ff.png)

For more information on utilizing reports in a DataVis format or how to utilize grouping please refer to [Using DataVis Grids](../../reports/using-datavis-grids-data-tools.md) guide.

## Additional Resources

* [ODG Info](https://www.mcg.com/odg/solutions/the-odg-advantage/customer-experience/)
    * [Duration/Return to Work Goals](https://www.mcg.com/odg/solutions/workers-comp/return-to-work-guidelines-modeling/)
    * [Treatment Guidelines](https://www.mcg.com/odg/solutions/workers-comp/treatment-guidelines/)
    * [Risk Assessment Score](https://www.mcg.com/odg/solutions/workers-comp/reserving-cost-modeling/)
    * [Cost Modeling](https://www.mcg.com/odg/solutions/workers-comp/reserving-cost-modeling/)
* [ODG by MDG Self-Training Videos](https://www.mcg.com/odg/client-resources/learning-resources/self-training-videos/)
* [ODG by MDG Self-Training PDF Training Guides](https://www.mcg.com/odg/client-resources/learning-resources/self-training-pdfs/)
* [ODG by MDG Best Practices FAQ](https://www.odgbymcg.com/help/Disability/Content/ODG/PDFLibrary/ODG%20by%20MCG%20Best%20Practices%20FAQ.pdf)
* LMS Course (forthcoming)
