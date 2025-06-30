---
id: '1kvN6W9kFSzR6njvg1ufm3anrTBixBWLJZacjdLmYra4'
title: 'System Report Writing'
date: '2025-02-12T17:02:46.167Z'
version: 1020
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1kvN6W9kFSzR6njvg1ufm3anrTBixBWLJZacjdLmYra4'
wikigdrive: '1f3be24cb6d0e684833cf8ee6161c6af8024a3bd'
---
This documentation applies to writing a system report in the system report writer as well as in layouts with a query in an {{#each}} statement or the legacy <WCQUERY> tag. For our customers with ODBC connections, this document is a good primer for understanding key parts of the schema.

# Starting a System Report

Start by adding a report. Control Panel -> System -> System reports -> Add Report

Enter a name and this SQL example that will find recently archived encounters and some related information.

```
SELECT d.doc_id,e.encounter_id, pc.cond_id,d2.doc_id

FROM documents d
-- encounter_documents has the documents created by archiving the encounter
INNER JOIN encounter_documents e ON e.doc_id=d.doc_id

-- module=6 are conditions in the assessment
LEFT JOIN encounters_link el ON el.encounter_id=e.encounter_id AND el.module=6
LEFT JOIN patient_conditions pc ON pc.cond_id=el.linked_id

-- module=5 are any documents linked to the encounter such as 
-- order requisitions created while the encounter was current
LEFT JOIN encounters_link el2 ON el2.encounter_id=e.encounter_id AND el2.module=5
LEFT JOIN documents d2 ON d2.doc_id=el.linked_id

-- Find documents that were archived in the last week by encounters that 
-- use the WCEXAM document type. storage_type=4 are HTML documents.
WHERE d.service_date>=DATE_SUB(CURDATE(), INTERVAL 1 WEEK) AND d.doc_type='WCEXAM'
AND d.storage_type=4
```

Save and Explain that. Then go back to System -> System reports and click edit on it.

![](../system-report-writing.assets/5e996a45de98daa15f199fe2c99afd1b.png)

There is a model tab that queries data from our model table. This table has information on each table (object) and its columns (field). The table can also be queried from an ODBC connection. One useful field is the fk column that will list all foreign keys. We do not have many actual foreign keys defined in the database, but we do enforce these relationships in the application.

![](../system-report-writing.assets/683a2fc85b9206baadb6f6134d07b986.png)

There is a newer model browser available from the Model button. You can search for a table name and it will display the columns on that table. Clicking a column name will give more information about it. The Referenced by section displays other tables that relate to this table.

![](../system-report-writing.assets/7f0c522b9842155b76143951c064fd34.png)

![](../system-report-writing.assets/d60156193299f89946e1d6d2c5b511db.png)

## Data linked to an encounter

Encounters_link is in this example because it is not easy to understand just by looking at the database. The module column is an integer with values defined in code. Here are those values from our code.

#define ENC_LINK_MOD_MEDS           0  // Table: rxlist

#define ENC_LINK_MOD_CONDS          1  // Table: patient_conditions

#define ENC_LINK_MOD_CONDS_FAM      2  // Table: patient_conditions_family

#define ENC_LINK_MOD_OBS            3  // Table: observations

#define ENC_LINK_MOD_ENC_EXT        4  // Table: NONE; I don't believe that this guy really belongs here. it's more of a hack for WCPATVIEWENCOUNTER tags.

#define ENC_LINK_MOD_DOCUMENT       5  // Table: documents

#define ENC_LINK_MOD_ASSESS         6  // Table: patient_conditions; An assessment is an encounter link with a condition signifying that it is relevant to the encounter

#define ENC_LINK_MOD_ENC_SELF       7  // Table: encounters; An identity relationship.  Just used for user_tran_stats right now.

#define ENC_LINK_MOD_INCIDENT       8  // Table: incidents

#define ENC_LINK_MOD_CLINRESTRICT   9  // Table: patient_clinical_restrictions

#define ENC_LINK_MOD_ENC_CC     10  // Table: NONE; I don't believe that this guy really belongs here. it's more of a hack for WCPATVIEWENCOUNTER tags.

#define ENC_LINK_MOD_PREOP_ASSESS 11  // Table: patient_conditions; Pre-operative Assessment -- Similar to Type ENC_LINK_MOD_ASSESS

#define ENC_LINK_MOD_POSTOP_ASSESS 12  // Table: patient_conditions; Post-operative Assessment -- Similar to Type ENC_LINK_MOD_ASSESS

#define ENC_LINK_MOD_PAT_PROC       13 // Table: patient_procedures

#define ENC_LINK_MOD_PROC_CODE      14 // Table: bill_procedure_codes

#define ENC_LINK_MOD_INSURANCE      15 // Table: insurance_policy

#define ENC_LINK_MOD_ACCOMMODATION  16 // Table: accommodations

#define ENC_LINK_MOD_APPOINTMENT    17

#define ENC_LINK_MOD_BILL_TRX       18 // Table: transactions.trx_id

#define ENC_LINK_MOD_LAB_REQUESTS   19 // Table: lab_requests

#define ENC_LINK_MOD_USER_ENTITY    20 // Table: users

#define ENC_LINK_MOD_ORGANIZER      21 // Table: Encounter (Represents a CDA "Organizer" for values that is connected to an encounter)

#define ENC_LINK_MOD_LOCATION       22 // Table: location

#define ENC_LINK_MOD_INJECTION      23 // Table: injections (immunizations)

#define ENC_LINK_MOD_ALLERGY        24 // Table: rxlist_allergylist

#define ENC_LINK_MOD_PROCEDURE      25 // Table: patient_procedures

#define ENC_LINK_MOD_CAREPLAN       26 //

#define ENC_LINK_MOD_PANEL_STATUS   27 // Table: patient_panel_status

#define ENC_LINK_MOD_PAT_TARGET     28 // Table: patient_targets

#define ENC_LINK_MOD_ENC_BILLING    29 // Table: encounter_billing

#define ENC_LINK_MOD_ENC_ORDER      30 // Table: encounter_orders

#define ENC_LINK_MOD_INVALID        31 // NOTE: place new modules before me and change my value

## Most patient data is a document

Many objects also reference documents.doc_id. Here is a query to illustrate a relationship. This is how an order requisition is stored

```
SELECT d.doc_id, req.request_id, req.set_name,
GROUP_CONCAT(ol.name) AS `Orders`,
GROUP_CONCAT(icd.icd10) AS `ICD Codes`

FROM documents d
-- order_requests
INNER JOIN order_requests req ON req.doc_id=d.doc_id

-- order_items has each order that is on the request
LEFT JOIN order_items oi ON oi.request_id=req.request_id

-- order_list has the catalogue of all orders that can be ordered
LEFT JOIN order_list ol ON ol.order_id=oi.order_id

-- order_request_icd9cm has all the conditions (ICD and snomed concept ID) related to the order
LEFT JOIN order_request_icd9cm icd ON icd.request_id=req.request_id

WHERE d.service_date>=DATE_SUB(CURDATE(), INTERVAL 1 WEEK) AND d.storage_type=15
GROUP BY d.doc_id
```

This is an example of how we store a lab result and also questionnaires
```
SELECT d.doc_id,o.obs_name,o.obs_result,o.obs_range,o.obs_units,o.obs_flag,
o.free_text,o.test_comments

FROM documents d
INNER JOIN lab_requests lr ON lr.doc_id=d.doc_id
INNER JOIN observations o ON o.request_id=lr.request_id
WHERE d.storage_type=13
AND d.service_date>=DATE_SUB(CURDATE(), INTERVAL 1 WEEK)

```

## Locations

![](../system-report-writing.assets/ca06c1adfb3ed3550f7e28289591fe6c.png)

## Using restrictions

In clinical reports we usually like to exclude test patients and respect partition restrictions, as well as locked charts.

### For test patients we do the following:

LEFT JOIN patient_extended_values AS px ON px.pat_id = p.pat_id AND px.ext_id = (SELECT ext_id FROM patient_extended_index WHERE name = ‘excluded_from_quality_care') AND px.value = ‘1'

…

WHERE px.pat_id IS NULL

### For restrictions we use this:

SELECT

….

FROM

….

$pat_restrict_join$

WHERE

1

$pat_restrict_where$

The reference of **pat_restrict_join** is actually replaced with:

LEFT JOIN patient_restrictions AS plcpr ON p.pat_id=plcpr.pat_id

LEFT JOIN patient_restrictions AS pulcpr ON p.pat_id=pulcpr.pat_id AND pulcpr.user_id=@user_id

LEFT JOIN user_patients up ON up.pat_id=p.pat_id AND up.id=@user_id AND up.id_type='user'

LEFT JOIN user_patients up2 ON up2.pat_id=p.pat_id AND up2.id_type='realm'

LEFT JOIN user_realms ur ON ur.realm=up2.id AND ur.user_id=@user_id

LEFT JOIN patient_mrns pprpm ON p.pat_id=pprpm.pat_id

LEFT JOIN patient_partitions pprpp ON pprpm.wc_partition=pprpp.wc_partition AND pprpp.active>0

LEFT JOIN patient_partitions_restricted pprppr ON pprpp.wc_partition=pprppr.wc_partition AND pprppr.id_type='user' AND pprppr.allowed_id=@user_id

LEFT JOIN patient_partitions_restricted pprppr2 ON pprpp.wc_partition=pprppr2.wc_partition AND pprppr2.id_type='realm'

LEFT JOIN user_realms pprur ON pprur.realm=pprppr2.allowed_id AND pprur.user_id='60634'

LEFT JOIN user_patients ppreup ON ppreup.pat_id=p.pat_id AND ppreup.id=@user_id AND ppreup.id_type='user'

LEFT JOIN user_patients ppreup2 ON ppreup2.pat_id=p.pat_id AND ppreup2.id_type='realm'

LEFT JOIN user_realms ppreur ON ppreur.realm=ppreup2.id AND ppreur.user_id=@user_id

The reference of **pat_restrict_where** is replaced with:

AND ((up.id IS NOT NULL OR ur.realm IS NOT NULL))

### ATTENTION

We **DO NOT** use the pat_restrict_join/where on Employer/Supervisor reports because that will require that Supervisors and Subordinates have to have the Portal User user-patient relationship!  If you need to restrict Employer/Supervisor reports, add restrictions right on the system report reference in the corresponding editor.

## SQL Variables

We support replacing SQL variables with data sent in CGI. It will set the variable's value to use in your SQL. Example below.

```
URL: webchart.cgi?f=ajaxget&s=system_report&report_name=MySystemReport&last_name=Smith
```

MySystemReport
```
SELECT first_name,last_name
FROM patients
WHERE last_name=@last_name
```

You can send multiple values for a given variable. We support some formatting of the data to create an IN clause of numbers or strings.

```
URL: webchart.cgi?f=ajaxget&s=system_report&report_name=MySystemReport&last_name=Smith&last_name=Jones&last_name=Johnson&pat_id=123&pat_id=456
```

MySystemReport
```
SELECT first_name,last_name
FROM patients
WHERE last_name IN (@last_name%s)
AND pat_id IN (@pat_id%u)
```

## Reusable SQL snippets

You can write SQL that you want to use in multiple reports and reference it. This helps simplify maintaining the shared SQL. $wcinclude|report name$ will be replaced with the SQL in the referenced system report.

MyTestPatientJoin
```
LEFT JOIN patient_extended_values AS px ON px.pat_id = p.pat_id AND px.ext_id = (SELECT ext_id FROM patient_extended_index WHERE name = ‘excluded_from_quality_care') AND px.value = ‘1'
```

MyTestPatientWhere
```
AND px.pat_id IS NULL

```

MySampleReport
```
SELECT p.last_name
FROM
patients p
$wcinclude|MyTestPatientJoin$

WHERE p.last_name='Smith'
$wcinclude|MyTestPatientWhere$
```
