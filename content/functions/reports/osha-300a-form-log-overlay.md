---
id: '1qHBp70qSV9LSeHEg056zXY8YfXpetOJv2L77zGKOCLI'
title: 'OSHA 300A Form Log Overlay'
date: '2024-05-20T19:28:43.207Z'
version: 206
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1qHBp70qSV9LSeHEg056zXY8YfXpetOJv2L77zGKOCLI'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## OSHA 300A Form Log Overlay

From an Employer Organization chart, an OSHA 300A chart tab is available which provides an overlay OSHA 300A Form Log ability.

![](../osha-300a-form-log-overlay.assets/03d652fd086ebb19da39f15a905c67da.png)

The OSHA 300A chart tab functions as *current logged in year* log form overlay.  Meaning, for the current year it's being run, it will look for any OSHA recordable cases/incidents that have an onsite injury/illness location of that Employer Organization (or any onsite injury/illness locations that wrap up to this parent Employer Organization) and overlay the OSHA 300A information onto this log/form overlay.

## How does it work

The OSHA 300A overlay on an Employer Organization chart, interoperates with our Case/Incident encounter section and Location Hierarchy of onsite location/injury choices. Only cases/incidents that are marked as OSHA Recordable, would overlay on the OSHA 300A form.

To utilize the OSHA 300A form chart tab overlay functionality, found on an Employer Organization chart, your system must:

* Utilize the Case section on specific encounter types deemed appropriate
* Utilize OSHA Recordable (date determined recordable) within the case when applicable
* Utilize Onsite injury/illness locations within the case when applicable
    * Onsite injury/illness location selections are configured using the Location Hierarchy system editor.  See other help documentation titled <em>Locations Hierarchy</em> for detailed information on configuration.
* Utilize Restrictions and Accommodation sections on specific encounter types deemed appropriate

Capturing case (incident) detail on a patient or employee is done through encounters using the *Case* encounter section.

![](../osha-300a-form-log-overlay.assets/d5415669225aa8aff61582f608e4fb0a.png)

Incidents **are** cases and that terminology is interchangeable in our product.

If a case/incident is OSHA recordable, the field *Date determined recordable* needs to be populated in the case encounter section.  Again, only cases/incidents that are marked as OSHA Recordable (using the Date determined recordable field), would overlay on the OSHA 300A form.  Having a date in the field *Date determined recordable* signifies this is an OSHA 300A reportable case.

![](../osha-300a-form-log-overlay.assets/eef974964e588aabb5ad355286db873f.png)

You can also tell if the case (linked to the encounter you are working in) is OSHA recordable by seeing it displayed in the light grey bar in the header.

![](../osha-300a-form-log-overlay.assets/b8777e234f04a6aa23f45aa35d5aedae.png)

Lastly, specific onsite location choices of where the onsite injury/illness occurred is within the Case encounter section.  Those auto-complete choices are configured in the Locations Hierarchy of the system editor and may be locations on a broad/vast level, or may have granular location choices that follow a location hierarchy within the company.

![](../osha-300a-form-log-overlay.assets/183dac260528f6ad4938967e9d0a6893.png)

## OSHA 300A Form Overlay

By default, when advancing to the OSHA 300A form/log chart tab, it will overlay any OSHA recordable case (with an onsite injury/illness location of this Employer Org or one that wraps up to this parent Employer Org) for the **current logged in session year.**

Any OSHA recordable cases (for the current logged in session year) will then overlay on the OSHA 300A form log here, if the onsite injury/illness location was this employer organization or any onsite injury/illness location that wraps up to that parent employer organization.

![](../osha-300a-form-log-overlay.assets/b9aa9cbe0eb591a640c06bb9ab28be6f.png)

## Overlaid Data on the OSHA 300A Form Log

The **Year** overlaid on the form log will be the current logged in session's year.

![](../osha-300a-form-log-overlay.assets/defa2b975d21dcc615853fb9bc0255df.png)

The **Establishment Information** overlaid on the form log will be the name, address of the Employer Organization chart this is being generated on.

![](../osha-300a-form-log-overlay.assets/ffbf64452e9e55e323b47dbcba473346.png)

The other information for the OSHA 300A form (regarding the establishment information) is populated from the EO (Employer Organization's) *Other Data* flowsheet, found in the Overview EO tab.

![](../osha-300a-form-log-overlay.assets/acd534f8d46038791f52e9b845bc9c7e.png)

From the Overview (EO) tab of the employer organization chart, find the *Other Data* section and click to expand it open.  The data entered in the flowsheet there, will pull to display on the OSHA 300A form overlay.

![](../osha-300a-form-log-overlay.assets/3e989db25c371218a8c1d4c272a5ec74.png)

The OSHA recordable** cases**/incidents that have an onsite location noted being at this Employer Organization (or any cases/incidents with onsite locations marked as locations that are children of this parent employer organization), will be overlaid on the form log with all relevant counts of information.

![](../osha-300a-form-log-overlay.assets/c31824442d13a0d1cf248606070c8a86.png)

## Number of Cases section - OSHA 300A Form log

The OSHA 300A Form log is broken into identified counts.  We overlay the data counts to create this OSHA 300A Form log for the respected Employer Organization/onsite injury/illness location and/or hierarchy of locations.

The following describes columns G-J of the log:

![](../osha-300a-form-log-overlay.assets/c60616bd0305236ba640e81d186268d7.png)

**G) Total number of deaths:** This gives the total number of recordable cases (for the year generated) where the *Employee died* checkbox field in the OSHA recordable case/incident is marked.  In columns G-J, only ONE of these categories is to apply to the recordable case and is classified by the OSHA recordable case having the most serious outcome with column G (Death) being the most serious and column J (Other recordable cases) being the least serious.

![](../osha-300a-form-log-overlay.assets/60dac98c0d870b04606b1345b34f8b2f.png)

**H) Total number of cases with days away from work:** This gives the total number of recordable cases (for the year generated) that have any Lost Time accommodations linked to the OSHA recordable case/incident.  In columns G-J, only ONE of these categories is to apply to the recordable case and is classified by the OSHA recordable case having the most serious outcome with column G (Death) being the most serious and column J (Other recordable cases) being the least serious.

Lost Time accommodation types are any of the 5** Lost Time** accommodation options.

![](../osha-300a-form-log-overlay.assets/f8f6f5f8706d5750c4ec2c11b7592406.png)

The accommodation drop-down choices deemed *lost time* are looked at in the system setting *Lost Time Type*.  By default the 5 Lost Time accommodation choices are counted for this, but the system setting controls that.

![](../osha-300a-form-log-overlay.assets/500c0eeded3e6676744c04238b6813c1.png)

****

**I) Total number of cases with job transfer or restriction:** This gives the total number of recordable cases (for the year generated) that have any restrictions linked to the OSHA recordable case/incident. Note: if the same recordable case had Lost Time accommodations, then it counts as a Lost Time case, not also a restriction case. In columns G-J, only ONE of these categories is to apply to the recordable case and is classified by the OSHA recordable case having the most serious outcome with column G (Death) being the most serious and column J (Other recordable cases) being the least serious.

![](../osha-300a-form-log-overlay.assets/57d05bc039766755fafcb0f463ff46d2.png)

**J) Total number of other recordable cases:** This gives the total number of recordable cases (for the year generated) where the recordable case didn't fit any of the other criteria of Death, Lost Time, or Restrictions.   In columns G-J, only ONE of these categories is to apply to the recordable case and is classified by the OSHA recordable case having the most serious outcome with column G (Death) being the most serious and column J (Other recordable cases) being the least serious.

## Number of Days section - OSHA 300A Form log

The following describes columns K & L of the log:

![](../osha-300a-form-log-overlay.assets/a1efc72f4539d377a6630895b098f3db.png)

**K) Total number days away from work:** If any recordable cases (for current year generated) had any Lost Time documented in the Accommodations encounter section and the accommodation is linked to the OSHA recordable case, the total number of Lost Time days will be calculated here and displays a total number.

* If Lost time is documented in the Accommodations section of an encounter that is linked to an OSHA reportable case even for a partial day, it counts as a full day in this calculated column.
* If Lost time is documented in the Accommodations section of an encounter that is linked to an OSHA reportable case, the start day of the lost time counts as a full day.
* The date of injury or onset of illness full day doesn't count as a day away from work in this calculated column if a documented lost time day started the same day.  Day of incident/case does not count as a lost time day, if the lost time started that same day.

**L) Total number of days of job transfer or restriction:** If any recordable cases (for current year generated) had any Restrictions documented in the restrictions section of the encounter that is linked to the OSHA recordable case, the total number of Restricted days will be calculated here and displays as a total number.

* Overlapping restriction days are only counted once.
* The calculation in this column does not include future days.
* The calculation looks at the restriction start date & time and the end date & time and makes the calculation for this column.  A full day is counted as a start day and the end day being a day apart.

## Injury and Illness Types section - OSHA 300A Form log

The following describes columns M of the log:

![](../osha-300a-form-log-overlay.assets/ed6658b7795eb3594a65d84a21232ce7.png)

**M)** The counts for each injury/illness type (Injury, Skin Disorder, Respiratory, Poisoning, Hearing Loss or All Other Illnesses) will populate with a total count in the appropriate column based on which *injury/illness type* was selected on the OSHA recordable cases for the current year being generated.

![](../osha-300a-form-log-overlay.assets/ed1a302d706d1a3fc4588d118b4572b0.png)

## Browser Print OSHA 300A Log document

You can use your browser's *print* ability, to generate and print the employer organization's OSHA 300A Form with the overlaid counts and information.

![](../osha-300a-form-log-overlay.assets/fb4724fd9c1f5df91cde1f0aec029f58.png)

## Create OSHA 300A Log document

Within the *Overview (EO)* chart tab, the Other Data section has an OSHA 300A Form document generation hyperlink available.  This hyperlink will display if your system has doc.type OSHA300A configured with a form image and form variable data overlay.

Click on the OSHA 300A Form hyperlink.

![](../osha-300a-form-log-overlay.assets/6b9a324e4150e2d14dd7912d741dba1f.png)

Clicking on that hyperlink will automatically create and store a document of the output.  Note: your system's doc.type OSHA300A must be configured to have the form configured with the form option of ‘archive form' checkmarked, for the system to automatically store the OSHA 300A Form document being generated.

![](../osha-300a-form-log-overlay.assets/e3fe4f517948d5db14d6339d43e6a647.png)

This is the ability to create the OSHA 300A Form as a snapshot in time (for the current year generated) and it stores as a document, within that EO's chart, but can be printed from the form log generated on the screen.

![](../osha-300a-form-log-overlay.assets/789024a8a167f74770cc03a9e8784305.png)

This stored document is accessible from the *Documents (EO/PO)* catch-all chart tab, and from any other EO chart tab(s) you may have OSHA300A doc.type mapped to in your system.  This stored document can be shared (printed, faxed, etc) from here or from any other EO chart tab(s) you may have OSHA300A doc.type mapped to in your system.

![](../osha-300a-form-log-overlay.assets/1ceb79304ba91f6ba28ce26892773180.png)

## OSHA 300A Report

When you access the OSHA 300A Report from the Safety reports tab, you will be taken to the *Common Case Search* report search criteria filters.

![](../osha-300a-form-log-overlay.assets/f493fa08516449db7a1a6b98d7b1c979.png)

In the Common Incident Search there are several search filter fields available to narrow down your search, but the OSHA 300A Log outputs total counts of cases that are OSHA recordable, according to any search filter criteria entered.

The *On Site Location* filter field (available in this report) respects the onsite injury/illness location selections on a case/incident (and any location hierarchy), just like the OSHA 300A Form log does on the Employer Organization chart.  You would get the same counts and information here from this report, as you would doing the OSHA 300A chart tab Form Log method from the EO chart(s) that also respects the hierarchy of onsite location configuration.

See other help documentation titled *Common Incident Search Report* for detailed information on each search criteria field.
