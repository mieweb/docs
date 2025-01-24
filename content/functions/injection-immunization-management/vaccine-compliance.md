---
id: '1BFTv9CrwCht_nJNBaass0OiEzxp3Br2M6uwO7WZBOps'
title: 'Vaccine Compliance'
date: '2025-01-22T14:58:15.027Z'
version: 55
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/injection-immunization-management/injection-tab/'
  - 'https://docs.enterprisehealth.com/functions/injection-immunization-management/injection-program-tab-recording-mass-injections/'
  - 'https://docs.enterprisehealth.com/functions/encounters/tests-and-procedures-section-applying-adding-completing-resulting/'
source: 'https://drive.google.com/open?id=1BFTv9CrwCht_nJNBaass0OiEzxp3Br2M6uwO7WZBOps'
wikigdrive: '0008bcbb1563384efe0a28ada6f97e9432e65f10'
---
Enterprise Health utilizes the Preventive Care encounter section and custom quality measures to capture and report on Vaccine Compliance. The Enterprise Health system/database must be enrolled in the quality/vaccine programs

## Quality Enrollment

To enroll at a system level, navigate to the Quality Reporting portlet on the Quick View.

![](../vaccine-compliance.assets/888baa208a82e53a6c78167ec441090a.png)

Then, click on the Quality Advanced Enrollment link.

![](../vaccine-compliance.assets/ce0789f7f3e1dc30e6afa4a25c5f596f.png)

Select the "System" check box, enter a start and end date for the reporting period/year, select the vaccine compliance programs to participate in, then click the Enroll button.

![](../vaccine-compliance.assets/667a3ded4ea12956df7ac9b801010ba7.png)

## Compliance Definitions (Required Vaccines)

<table>
<tr>
<td>Measles</td>
<td>2 Measles Vaccines (CVX:94,03,04,05) <strong>OR</strong><br />
1 Titer Result demonstrating Immunity (LOINC:53536-9/Qual:Positive)(LOINC: 5244-9/Quant:>16.49)<strong> OR</strong><br />
1 completed Measles Program Compliance Order (Order id=3471)</td>
</tr>
<tr>
<td>Mumps</td>
<td>2 Mumps Vaccines (CVX:03,94,07,38) <strong>OR</strong><br />
1 Titer Result demonstrating Immunity (LOINC:6476-6/Qual:Positive)(LOINC:25418-5)/Quant:>10.9) <strong>OR</strong><br />
1 completed Mumps Program Compliance Order (Order id=3487)</td>
</tr>
<tr>
<td>Rubella</td>
<td>1 Rubella Vaccine (CVX:03,94,06,38,04) <strong>OR</strong><br />
1 Titer Result demonstrating Immunity<br />
(LOINC:29343-1/Qual:Positive)(LOINC:5334-8/Quant:>0.99)  <strong>OR</strong><br />
1 completed Rubella Program Compliance Order (Order id=3488)</td>
</tr>
<tr>
<td>Varicella</td>
<td>2 Varicella Vaccines (CVX:94,21,36,117) <strong>OR</strong><br />
1 Titer Result demonstrating Immunity (LOINC:17763-4/Qual: Positive)(LOINC:5403-1/Quant:>165 or Reactive**) <strong>OR</strong><br />
1 completed Varicella Program Compliance Order (Order id=3472)</td>
</tr>
<tr>
<td>Hepatitis B</td>
<td>6 Hepatitis B Vaccines (CVX:146,110,132,198,102,104,193,08,42,43,44,45,220,189,51) <strong>OR</strong><br />
1 Titer Result demonstrating Immunity (LOINC:22322-2/Qual:Reactive)(LOINC:5193-8/Quant: >or= 10) <strong>OR</strong><br />
1 completed Hepatitis B Program Compliance Order (Order id=3466) <strong>OR</strong><br />
1 Hepatitis B Declination Document (doc id=HEPBDEC)</td>
</tr>
<tr>
<td>Tdap</td>
<td>1 Tdap Vaccine (CVX:146, 110,132,198,102,104,193,08,42, 43,44,45,220,189,51) <strong>OR</strong><br />
1 completed Tdap Program Compliance Order within the last 10 years (Order id=3490)</td>
</tr>
</table>

** Some laboratories send a quantitative analysis + interpretation with the qualitative analysis, in this case either value noted will be accepted.

## Optional Immunization Surveillance

The optional immunization surveillance section is for non-required vaccines in the workplace, but they may still be tracked by Employee Health Services. These injections do not require a compliance order, but the module does provide forecasting if the immunization series has been started. If the first vaccine in a series has not been documented, then no forecasting will display in the module.

<table>
<tr>
<td>Pneumococcal (Poly)</td>
<td>1 Pneumococcal Vaccination (CVX:133,215,216,152,33,109,100) <strong>OR</strong><br />
1 Pneumococcal Declination Document (PNEUMODEC)</td>
</tr>
<tr>
<td>Meningococcal (ACWY)</td>
<td>1 Men ACWY Vaccination (CVX:191,192,108,136,114,147,203,148). No forecasting since this is a 1 time only injection.</td>
</tr>
<tr>
<td>Meningococcal (MenB)</td>
<td>2 MenB Vaccinations (CVX:162,163,164). Shot 2 due 1 month after shot 1.</td>
</tr>
<tr>
<td>Shingles</td>
<td>2 Shingles Vaccinations >age 50 (CVX:121,187,188). Shot 2 due 2-6 months after shot 1.</td>
</tr>
<tr>
<td>HPV</td>
<td>3 HPV Vaccinations (CVX:62,118,137,165). If 1 vaccination: second dose due 4 weeks after administration, If 2 vaccinations: third dose due 12 weeks after second dose or 5 months after first whichever is later.</td>
</tr>
<tr>
<td>Hepatitis A</td>
<td>2 Hepatitis A Vaccinations (CVX:52,169,83,84,31,85,104,193). If 1 vaccine, second dose due 6 months after administration, otherwise first dose due today.</td>
</tr>
</table>

Additionally, if customers require a vaccine in the Optional Immunization Surveillance section, these can be moved and configured to display and function as a required vaccine.

*Note for manual Legacy Installations: The LOINC code on the Titer results must have a corresponding LOINC on the lab order for that Titer.

## Preventive Care Encounter Section

The Preventive Care Encounter section contains a subset for Immunization measures. The Immunizations are broken down into 2 categories, those that are required for compliance, and those that are not, but may still be tracked by the Employee Health Services clinic.

![](../vaccine-compliance.assets/d36860d9f1b3555bc00cd5e93c0be986.png)

![](../vaccine-compliance.assets/ab260398eda536be7fe6f5bc78e88c7c.png)

![](../vaccine-compliance.assets/1059c2ceeda3f86bee53fd7c3699fe12.png)

Quality Measures (System Reports) have been added which will calculate vaccine compliance, as well as forecasting of future immunizations for optional immunization surveillance. These measures come standard with the product starting 202303, but can be installed manually for legacy systems.

The preventive care section displays a compliance factor of Yes or No based on the presence of immunization history and/or Titer history and in some cases a declination (Hep B and Pneumococcal only).

![](../vaccine-compliance.assets/3d7a3ae8ab23b32f15089f32fcfa55f2.png)

## Column definitions

### Immunizations:

This column lists the vaccine program being tracked. Hover over the program name to add orders specific to this program. If immunizations are needed, they must be manually added/ordered when/if appropriate by the clinician. Immunizations are not ‘automatically' added to the Due List. However, the module will forecast if an injection is recommended. If an immunization is forecasted, it will display in the *Pending* column.

![](../vaccine-compliance.assets/f86261e824e7af11947a80eb22f1c44a.png)

When adding an order, a list of orders that may help achieve compliance will display in the top right hand corner of the *Add Encounter Orde*r screen. Ordering a test or injection by itself does not constitute compliance, but rather the administration record or titer test result as a result of these orders will help factor into compliance.

![](../vaccine-compliance.assets/dfe5bfad05a674d25573036d044b8650.png)

### Complaint:

**ALWAYS!!!!  Recalculate this section to ensure you are looking at the most recent compliance evaluation. Do this by clicking the** **_Calculator Icon_**** next to the** **_Compliant _****column header.**

![](../vaccine-compliance.assets/71a203e22ae1044241b958543795b042.png)

This column will indicate ‘Yes' if the employee has met the requirements defined in the Quality Measure. This column will indicate ‘No' if the employee has NOT met the requirements defined in the Quality Measure.

### Past:

This column will display the last related **order** item for this program. This could be an order for an injection or titer test, or it could show the program compliance order. The program compliance order will only display if the employee/patient is calculated as being compliant. The Quality Measure logic will automatically add the compliance order when compliance is achieved.

### Last Documented:

This column will show the **last** document in the chart pertaining to this program. Examples include immunization record documents,declination documents,and titer results.

* Hover over the Injection document for links to view the documentation.

![](../vaccine-compliance.assets/b0820f8394c3717efa0fb9d90f4f03b4.png)

* Hover the <em>List</em> icon, to display all historical results/documents related to this program.

![](../vaccine-compliance.assets/be2e1a3b8e0f698668c64d1a561ffd62.png)

* Click on the underlined link in the <em>Last Documented</em> column or on the result/date in the <em>All History</em> pop up window to view the lab result/document.

![](../vaccine-compliance.assets/f23594dec4411608db0b391d5242c54f.png)

### Pending:

This column will list recommended immunizations. These injections are NOT ordered. Providers may order them from the Immunization column picklist. The Pending column will list forecasted vaccines and the date the injection was recommended to be administered. Immunizations must be manually added/ordered when/if appropriate by the clinician. Forecasting will only display for non-required vaccines if the individual has received the first dose of the optional vaccine and subsequent doses are recommended to complete the series. Forecasted immunizations will also display when the encounter section is in view and edit mode.

In the example below, a Measles injection was documented as being previously administered on 5/4/2001. The Pending column displays an **MMR injection (6/1/2001)**. This means that the system is forecasting and recommending a MMR injection to be administered after 6/1/2001. The system also shows this person as not being compliant for Measles, because logic calls for 2 Measles/MMR injections to be administered/documented or a Titer demonstrating immunity.

![](../vaccine-compliance.assets/2c02eff9585dd9bf564c86cc8fccdad5.png)

## Entering Immunization History

Immunization history should be added via the *Immunizations/Injections* encounter section.

![](../vaccine-compliance.assets/942a69acd68c910300e1ad17b225ed53.png)

Or through the MAR/Injections tab via the *Quick Add* link.

![](../vaccine-compliance.assets/4045a761cb2545df46ce40a54a9ee6df.png)

## Add Newly Administered Immunizations

Immunizations can be added via the [*MAR/Injections*](https://docs.enterprisehealth.com/functions/injection-immunization-management/injection-tab/) tab, [*Injection Program Tab - Recording Mass Injections*](https://docs.enterprisehealth.com/functions/injection-immunization-management/injection-program-tab-recording-mass-injections/), or the [*Tests and procedures*](https://docs.enterprisehealth.com/functions/encounters/tests-and-procedures-section-applying-adding-completing-resulting/)*.*

## Entering Titer Results

Prior Titer results can be entered via the Titer Results Flowsheet. For newer releases, click on the *Flowsheet* option now available under any *Add Document* link in the chart.

![](../vaccine-compliance.assets/3a2925a950042fbd8825042856d310cd.png)

For legacy systems, the flowsheet can be found under the Observations/Flowsheet chart tab. The Deployment Consultant or Support staff may also create custom chart tabs or encounters to capture information in the flowsheet.

## Preventive Care Portlet (Summary Tab)

The Preventive Care portlet will display the status of any/all items configured in the Preventive Care encounter section. This section is not limited to display vaccine compliance only. The Immunizations section will display the quality/surveillance measure name. Beneath the name, a green "**Yes**" will be displayed if the measure is in compliance. A red "**No**" will display if it is not. If the quality/surveillance measure has been satisfied, the date the compliance was achieved will display. For example, "Measles Program Compliance 09-25-2023". Additionally, the last item entered in the system for that measure (items identified in the picklist) will display as the last bulleted item in the quality/surveillance measure.

![](../vaccine-compliance.assets/fc658a55f10c986763fd15aa9846371d.png)

## Quality Reporting (System Wide)

Reports->Quality of Care->MIPS Quality Reports->Provider Quality of Care Status. Northwell Health is enrolled in the quality program as an entity and not as individual providers. Run the report for 2023 Or th, select which measures to recalc and click the Recalculate button (top left, currently needs the golden ticket).

![](../vaccine-compliance.assets/b52e32a6e2999af16bb6a2547c8b1f77.png)

 