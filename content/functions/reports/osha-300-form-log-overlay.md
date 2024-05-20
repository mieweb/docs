---
id: '1a1tJA-GG4ImSovy154uFVTiIvCWOfBHwZcjXuMV0Fuk'
title: 'OSHA 300 Form Log Overlay'
date: '2024-05-20T19:06:25.256Z'
version: 170
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1a1tJA-GG4ImSovy154uFVTiIvCWOfBHwZcjXuMV0Fuk'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## OSHA 300 Form Log Overlay

From an Employer Organization chart, an OSHA300 chart tab is available which provides an overlay OSHA 300 Form Log ability.

![](../osha-300-form-log-overlay.assets/b18b1bfcfd2026f0adb4aa318fe83465.png)

The OSHA300 chart tab functions as a Year search and OSHA 300 Form overlay and document generation.  Meaning, for the year being run, it will look for any OSHA recordable cases/incidents that have an onsite injury/illness location of that Employer Organization (or any onsite injury/illness locations that wrap up to this parent Employer Organization) and overlay the OSHA 300 information onto this log/form overlay.

![](../osha-300-form-log-overlay.assets/b757035c27fd18261b4604ba5140dedd.png)

## How does it work

The OSHA 300 overlay on an Employer Organization chart, interoperates with our Case/Incident encounter section and Location Hierarchy of onsite location/injury choices. Only cases/incidents that are marked as OSHA Recordable, would overlay on the OSHA 300 form.

To utilize the OSHA 300 form chart tab overlay functionality, found on an Employer Organization chart, your system must:

* Utilize the Case section on specific encounter types deemed appropriate
* Utilize OSHA Recordable (date determined recordable) within the case when applicable
* Utilize Onsite injury/illness locations within the case when applicable
    * Onsite injury/illness location selections are configured using the Location Hierarchy system editor.  See other help documentation titled <em>Locations Hierarchy</em> for detailed information on configuration
* Utilize Restrictions and Accommodation sections on specific encounter types deemed appropriate

Capturing case (incident) detail on a patient or employee is done through encounters using the *Case* encounter section.

![](../osha-300-form-log-overlay.assets/d5415669225aa8aff61582f608e4fb0a.png)

Incidents **are** cases and that terminology is interchangeable in our product.

If a case/incident is OSHA recordable, the field *Date determined recordable* needs to be populated in the case encounter section.  Again, only cases/incidents that are marked as OSHA Recordable (using the Date determined recordable field), would overlay on the OSHA 300 form.  Having a date in the field *Date determined recordable* signifies this is an OSHA 300 reportable case.

![](../osha-300-form-log-overlay.assets/eef974964e588aabb5ad355286db873f.png)

You can also tell if the case (linked to the encounter you are working in) is OSHA recordable by seeing it displayed in the light grey bar in the header.

![](../osha-300-form-log-overlay.assets/b8777e234f04a6aa23f45aa35d5aedae.png)

Lastly, specific onsite location choices of where the onsite injury/illness occurred is within the Case encounter section.  Those auto-complete choices are configured in the Locations Hierarchy of the system editor and may be locations on a broad/vast level, or may have granular location choices that follow a location hierarchy within the company.

![](../osha-300-form-log-overlay.assets/183dac260528f6ad4938967e9d0a6893.png)

## OSHA 300 Form Overlay

By default, when advancing to the OSHA 300 form/log chart tab, it will overlay any OSHA recordable case (with an onsite injury/illness location of this Employer Org or one that wraps up to this parent Employer Org) for the **current logged in session year.**

You can change/update the year to run a prior year if wish.  Simply key in the Year in the YYYY format and click the *Update Year* button.  Any OSHA recordable case (for the year indicated) will then overlay on the OSHA 300 form log here, if the onsite injury/illness location was this employer organization or any onsite injury/illness location that wraps up to that parent employer organization.

![](../osha-300-form-log-overlay.assets/72efebcaa1d11e1f3e562824770ee227.png)

## Overlaid Data on the OSHA 300 Form Log

The **Year** overlaid on the form log will respect the year you've keyed into the search filter (or current logged in session Year will be the default if nothing indicated there).

{{% note %}}
Note: the year **must** be in a 4 digit YYYY format.
{{% /note %}}

![](../osha-300-form-log-overlay.assets/16e3e1717803c84a57f30f26a8850cc4.png)

The **Establishment Name** and information overlaid on the form log will be the name, city and state of the Employer Organization chart this is being generated on.

![](../osha-300-form-log-overlay.assets/252a579a3bb80359ec4e6791e4215d08.png)

The OSHA recordable** cases**/incidents that have an onsite location noted being at this Employer Organization (or any cases/incidents with onsite locations marked as locations that are children of this parent employer organization), will be overlaid on the form log with all relevant information.

![](../osha-300-form-log-overlay.assets/251ef8c889500b9f2532ecb79e7db250.png)

## Step 1-2 side of the OSHA 300 Form log

The OSHA 300 Form log is broken into steps and alpha identified columns.  We overlay the data and information to create this OSHA 300 Form log for the respected Employer Organization/onsite injury/illness location and/or hierarchy of locations.

The following describes the Step 1 and Step 2 side of the Form log, which is columns A-F.

![](../osha-300-form-log-overlay.assets/895d65eaaf82e7984b2447889908988e.png)

**A) Case No:** This is the unique case number identifier that the system assigns

**B) Name:** This displays the last name,first name of the Employee's OSHA recordable case/incident.  If the case/incident were marked as a *privacy case* in that checkbox field, then the OSHA 300 Form log will say *Privacy Case* as the Employee's name.

![](../osha-300-form-log-overlay.assets/1f1a89698a91f530d0a919c121d593ec.png)

![](../osha-300-form-log-overlay.assets/f8a6d82a7730b3d9feb34163483936ec.png)

**C) Job Title:** This pulls the data that is stored in the Job Code Description field of the employee's chart demographics tab.

![](../osha-300-form-log-overlay.assets/9190d85db02d9b470959fc2542af4120.png)

**D) Date of Injury or onset of illness:** This pulls the *date and time of injury or onset of illness* from the OSHA recordable case encounter section.

![](../osha-300-form-log-overlay.assets/a4f00943bf48960189aa8ee29b6c0312.png)

**E) Location:** This pulls the *where the event occurred* field from the OSHA recordable case/incident when an onsite location choice is selected.

![](../osha-300-form-log-overlay.assets/f1985a1f428e6e48b6090afef1e0dace.png)

**F) Describe injury or illness, parts of body affected, and object/substance that directly injured or made person ill:** This pulls the *Nature of Injury or Illness / Body parts* section details from the OSHA recordable case/incident and also pulls the *What object or substance directly harmed the employee* field from the OSHA recordable case/incident.

![](../osha-300-form-log-overlay.assets/be459c4f79380a047a3ec6082e1228ce.png)

## Step 3-5 side of the OSHA 300 Form log

The OSHA 300 Form log is broken into steps and alpha identified columns.  We overlay the data and information to create this OSHA 300 Form log for the respected Employer Organization/onsite injury/illness location and/or hierarchy of locations.

The following describes the Step 1 and Step 2 side of the Form log, which is columns G-M.

![](../osha-300-form-log-overlay.assets/382ad35593e832ba84705efdaee4340d.png)

**G) Death Case:** This column displays X if the *Employee died* checkbox field in the OSHA recordable case/incident is marked.  The column will be blank (meaning the employee did not die due to OSHA recordable injury/illness) if the checkbox is not checked on the OSHA recordable case/incident.

![](../osha-300-form-log-overlay.assets/60dac98c0d870b04606b1345b34f8b2f.png)

**H) Days Away from Work Case:** If the employee has any Lost Time accommodations linked to the OSHA recordable case/incident, then the column will display an X.  If the employee had no restrictions linked nor documented to the OSHA recordable case, then the column will be blank on the overlay.****

Lost Time accommodation types are any of the 5** Lost Time** accommodation options.

![](../osha-300-form-log-overlay.assets/f8f6f5f8706d5750c4ec2c11b7592406.png)

The accommodation drop-down choices deemed *lost time* are looked at in the system setting *Lost Time Type*.  By default the 5 Lost Time accommodation choices are counted for this, but the system setting controls that.

![](../osha-300-form-log-overlay.assets/500c0eeded3e6676744c04238b6813c1.png)

****

**I) Job Transfer or Restriction:** If the employee has any restrictions linked to the OSHA recordable case/incident, then the column will display an X.  If the employee had no restrictions linked nor documented to the OSHA recordable case, then the column will be blank on the overlay.

![](../osha-300-form-log-overlay.assets/57d05bc039766755fafcb0f463ff46d2.png)

**J) Other Recordable Case:** If the employee didn't fit any of the other criteria of Death, Lost Time, or Restrictions, then this column will display an X.  In columns G-J, only ONE of these categories is to have an X on it and is classified by the OSHA recordable case having the most serious outcome with column G (Death) being the most serious and column J (Other recordable cases) being the least serious.

**K) Days Away from Work:** If the employee had any Lost Time documented in the Accommodations encounter section and the accommodation is linked to the OSHA recordable case, the number of days of Lost Time will be calculated here and displays a total number.

* If Lost time is documented in the Accommodations section of an encounter that is linked to an OSHA reportable case even for a partial day, it counts as a full day in this calculated column.
* If Lost time is documented in the Accommodations section of an encounter that is linked to an OSHA reportable case, the start day of the lost time counts as a full day.
* The date of injury or onset of illness full day doesn't count as a day away from work in this calculated column if a documented lost time day started the same day.  Day of incident/case does not count as a lost time day, if the lost time started that same day.

**L) On Job Transfer or Restriction:** If the employee had any Restrictions documented in the restrictions section of the encounter that is linked to the OSHA recordable case, the number of days Restricted will be calculated here and displays as a total number.

* 180 days will be the max number it shows in this column.  Anything more than 180 days will still only display as 180 days here in the column and is considered then a permanent restriction.
* If the employee had Lost Time documented at any time for this OSHA recordable case, no days will display as calculations here in this Days Restricted column.  Instead, the Days Away from Work column would be populated with the Lost Days count.  The case is either Days Away from Work or Days Restricted, one or the other, even though the employee may have both lost time & restrictions on the OSHA recordable case.
* If the employee only had Lost Time and no restrictions for the OSHA recordable case, nothing would display here in this column.
* Overlapping restriction days are only counted once.  For example; if an employee had a Bending restriction for 5 days, and had another separate type of restriction for No Lifting also but for only 3 days. If those dates on those restrictions are any overlapping days, the count in this column will not count overlapping days.  So the column would display 5 as the calculation.
* The calculation in this column does not include future days.  For example; if the employee had a restriction from 1/1/2015 thru 1/31/2015 and you ran this OSHA 300 log on 1/15/2015, it would only show 14 as the calculation, not 30.  It would show 30 if you ran the report on 1/31/2015.
* The calculation looks at the restriction start date & time and the end date & time and makes the calculation for this column.  A full day is counted as a start day and the end day being a day apart.

**M)** The columns for Injury, Skin Disorder, Respiratory, Poisoning, Hearing Loss or All Other Illnesses will populate with an X in the appropriate column based on which *injury/illness type* was selected on the OSHA recordable case.

![](../osha-300-form-log-overlay.assets/ed1a302d706d1a3fc4588d118b4572b0.png)

## Page Totals

The OSHA 300 Form log overlay also has a **Page Totals** line, that adds up all the totals for all OSHA recordable listed cases (that have an onsite injury/illness location (or hierarchy) employer organization level) to the EO chart this is generated from.

![](../osha-300-form-log-overlay.assets/0ff310e678e58213de9ebe8c14c4c370.png)

## Create OSHA 300 Log document

At the very bottom of the OSHA 300 form/log chart tab output, there is a button *Create OSHA 300 Log*.

![](../osha-300-form-log-overlay.assets/d7517957c229abb55288a919c7be3cb8.png)

Clicking on that tab will automatically create and store a document of the output. This is the ability to create the OSHA 300 Form as a snapshot in time and it stores as a document, within that EO's chart. The screen will refresh to show you the on-screen output still, but when you scroll back down to the bottom, you will see the stored OSHA 300 document (doc.type OSHA300).

![](../osha-300-form-log-overlay.assets/edcf943ff45f6b246c9bcba62f964f11.png)

This stored document is accessible from this OSHA 300 chart tab, and from any other EO chart tab(s) you may have OSHA300 doc.type mapped to in your system.  This stored document can be shared (printed, faxed, etc) from here or from any other EO chart tab(s) you may have OSHA300 doc.type mapped to in your system.

![](../osha-300-form-log-overlay.assets/c68b3ab020c6fa66b8e55ebc89ed82b4.png)

## OSHA 300 Log Report

When you access the OSHA 300 Log from the Safety reports tab, you will be taken to the *Common Case Search* report search criteria filters.

![](../osha-300-form-log-overlay.assets/037309dd4a6730c5dcea1d8453e3d5d4.png)

In the Common Incident Search there are several search filter fields available to narrow down your search, but the OSHA 300 Log outputs any cases that are OSHA recordable, according to any search filter criteria entered.

The *On Site Location* filter field (available in this report) respects the onsite injury/illness location selections on a case/incident (and any location hierarchy), just like the OSHA 300 Form log does on the Employer Organization chart.  You would get the same counts and information here from this report, as you would doing the OSHA 300 chart tab Form Log method from the EO chart(s) that also respects the hierarchy of onsite location configuration.

See other help documentation titled *Common Incident Search Report* for detailed information on each search criteria field.
