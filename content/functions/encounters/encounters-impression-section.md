---
id: '1cty4Ad6aB1dD-jT6ToDSxPtwxwM6LZt8PizcAGtrWXQ'
title: 'Encounters Impression Section'
date: '2020-03-13T14:24:55.091Z'
version: 52
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1cty4Ad6aB1dD-jT6ToDSxPtwxwM6LZt8PizcAGtrWXQ'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The Impression area of the encounter is where you select your diagnosis/findings. This is where you are documenting reasons/diagnoses for *today's* visit. This section may also be named *Assessment* in your encounters.

![](../encounters-impression-section.assets/ded43af120043aca641575f11cdac1fd.png)

## Patient's Current Condition(s)

The top section of the Impression area lists all conditions/problems the patient currently has (entered in their {{% system-name %}} system). It pulls in that conditions section so you don't have to re-type/re-enter.

![](../encounters-impression-section.assets/ded43af120043aca641575f11cdac1fd.png)

The Impression is simply a summary of all ACTIVE patient conditions for being the reason for *today's* visit. The impression will include all conditions the patient currently has. More than likely at least one or more of these conditions will be the reason for today's visit.

Below the listing of the patient's current condition history is the entry fields to add a new condition/problem to document for the patient in relation to today's visit.

* <strong>Status:</strong> In the listing of the patient's conditions in the top portion of the Impression area, you now select whether the condition is active or N/A (not applicable to today's encounter visit for this visit) on each problem listed for the patient's encounter visit. To select the conditions that are indeed specific to today's visit/reason for today's visit, simply select <em>Active</em> from the Status drop down.  If any presenting patient conditions are not related to today's visit, you would mark as status N/A (not applicable to today's reason of visit – but the patient still has that condition). Marking a condition as N/A doesn't alter the status of this condition in the patient's history. It's simply noting that condition as Not Applicable to today's visit/reason for today's visit/diagnoses. The status selections are hard-coded and wording cannot be changed.
* <strong>Active Conditions</strong> are patient conditions as active; patient has this condition presently and will be marked as the diagnosis/reason for today's visit on the encounter document. If you have a billing interface, these ICD9's will also go over in the billing message as diagnosis for today's visit/billing event.
* <strong>Resolve Conditions</strong> are patient conditions they once had but are now you are marking them as concluded/resolved. This also stores a conclusion date and/or any notes if user wishes to document that condition – meaning the patient no longer has this condition as of the date you enter in as concluded - but patient did have this condition at one point.
* <strong>Inactive Conditions</strong> are patient conditions that is sort of like concluded, but, has possibility of returning.
* <strong>Deleted Conditions</strong> are patient conditions that were entered in error and are now deleted from the patient's history.
* <strong>Differential</strong> status is used if the doctor is suspecting 1 or more possibilities for what a patient might be suffering from, but, is awaiting further information (test results, etc) before making a definitive diagnosis.  Then once he/she makes a diagnosis, he/she would change the status of the correct one to "positive/active", and the rest to deleted (since they never really had the condition to begin with).

![](../encounters-impression-section.assets/cc8410f7a6a18464f1eb80d7709895a5.png)

The impression will include all conditions, even those not necessarily related to your practice, so if you don't want all of those others on the view, change the status to N/A. Selecting Active or N/A has no effect on the patient's current condition list, this is encounter specific.  However, if you Delete or add a new condition in this section, this will update and affect the patient's Active Condition list. Any problem/impression marked as status ACTIVE displays on the view/final encounter document.

You can change your MY SETTINGS preference to show the patient's current conditions in the impressions list area as N/A or as Active or Display as a previous encounter for the patient was rendered (ranked, status, etc.) They user preference setting is *Impressions Linked as Active* and there are 6 choices, but the system default is set to **None**.

{{% note %}}
Whoever creates the patient's encounter – this is what is respected.  So if you have other staff members creating patient encounters for the physician's visit; the encounter impression section for anyone working in that encounter will display and respect as whatever the user that created the encounter is set to for this.
{{% /note %}}

This setting controls the conditions linked to a newly created encounter in the ‘Impressions' section. Options range from ‘None' to ‘All Active Conditions' with intermediate options to pull the active conditions from either a previous encounter or one with the same visit type and whether to default to ‘None' or ‘All' in case of not finding a matching encounter.

![](../encounters-impression-section.assets/14fe7c6ef6a06a014b9e470907d8ec81.png)

* <strong>None</strong>: no conditions will be linked at all. All ACTIVE conditions shown in this section for the patient's visit will be displayed with a [STRIKEOUT:strikethrough] and status is N/A. You would "activate" the ones that are applicable to today's visit by changing the "status" to active and you can also "rank" in that column if wish for those.
* <strong>Last Enc Visit Type (No match –none)</strong>: the linked conditions on the last previous encounter of the same visit type will be linked to this encounter (ranking and status is respected & displayed as was on previous matching encounter of same visit type); but of no match is found of the same encounter visit type previously then it means no conditions will be linked (all will be set as [STRIKEOUT:strikethrough] aka: N/A status). There may be some users who would rather have their ‘first' encounters always created with no linked conditions even though they will want subsequent ones to copy previous one. If that is desired, this is the setting to use.
* <strong>Last Enc Visit Type (No match – all</strong>): the linked conditions on the last previous encounter of the same visit type will be linked to this encounter (ranking & status is respected & displayed as was on previous matching encounter of same visit type); but if no match is found of the same encounter visit type previously then it means all the patient's conditions displayed will link to show as "active" status not as a strikethrough.
* <strong>Last Enc (No Match – none</strong>): the linked conditions on the last known encounter will be linked to this encounter (ranking & status is respected & displayed as was on last known encounter); but if no last encounter is found (patient has no previous encounter) then no conditions will be linked (all set as [STRIKEOUT:strikethrough]). There may be some users who would rather have their ‘first' encounters always created with no linked conditions even though they will want subsequent ones to copy previous one. If that is desired, this is the setting to use.
* <strong>Last Enc (No match – all</strong>): the linked conditions on the last known encounter will be linked to this encounter (ranking & status is respected & displayed as was on last known encounter); but if no last encounter is found (patient has no previous encounter) then all the patient's conditions displayed will link to show as "active" status, not as strikethrough.
* <strong>All Active Conditions:</strong> It shows all the active conditions the patient has as status "active"; regardless of any encounter you ever get into or last encounter. You would "N/A" the ones that are not applicable to today's visit by changing the "status" to N/A for those.

![](../encounters-impression-section.assets/fff7e4e230fc57b23a21a455cb19839b.png)

When you are working in encounters, it strikes out the patient's conditions in the listing and has them marked as N/A. All you have to do quickly is then set the status to the ones you want as ACTIVE that pertain to today's visit. It's just a reverse method to quickly mark conditions as active. Otherwise, the patient's conditions are listed as ACTIVE and you'd have to go thru and set a lot of the conditions to N/A status that don't pertain to today's visit. You can determine how you want to view this listing and how you want to set status and if you want to copy in the same status & rankings of the patient's previous encounter and decide between the options available.

When a condition/problem is set as N/A with the [STRIKEOUT:strikethrough] in the problem name, it isn't deleting that condition from the patient's history. It's simply showing it as striked out on your view for easy viewing.

* <strong>Notes:</strong> Type any notes regarding this specific condition/problem for the patient. Use the other <em>Impression Notes</em> to type notes in general about the assessment.
* <strong>Rank:</strong> The rank column is where you (the physician) can enter a number and ‘rank' the problems/findings/diagnosis for existing conditions pertaining to today's visit or for new problems that have been entered in the encounter here. Ranking is very important if you interface back to a billing system (ex: Kareo billing system).

![](../encounters-impression-section.assets/ded43af120043aca641575f11cdac1fd.png)

Entering a 1 will display/print/list it first that problem in your view and also on the final document, entering a 5 would put it towards the end of the list, etc.  It just allows you to put in order your findings/diagnosis or rank them in importance, etc. Upon next encounter the patient has, this impression section will retain this ordering/ranking also.

If you leave the Rank blank, we default those to rank of 100.  If you leave one problem blank and rank another as a 1, it will list the "ranked" ones in that order, followed by blank ones (defaulted as 100 then) last and in alphabetical order.

If you don't want to rank any problems more important than another, just simply leave as blank and nothing will change (lists and displays in alphabetical order then since all assume the rank of 100 being left blank).

![](../encounters-impression-section.assets/0b67537f2335d8e22dd32fac0b785574.png)

It will print them on the view/stored document version in the same ranking order you set them to. Ranked ones print first in specified ranking order and any left blank will render last, alphabetically as order ranking "100" of order.

![](../encounters-impression-section.assets/7a25267aa87c94f051eab231e147bc01.png)

Ranking can be "remembered" and utilized in future visit encounters by setting the *my settings preference* of **"Impressions Linked as Active"** to one of the 4 middle choices shown in the drop-down of selections. See above "status" section on page 2 for descriptions.

### Add New Condition/Problem

After you have set the status of the patient's current conditions/problems that are listed, you can add any new problems/conditions for today's visit that pertain to the patient using the *problem* auto-complete field. When typing in words/name of a condition, we result most used conditions towards the top of the choices. If typing in a specific ICD9 or ICD10 code (instead of words/name of the condition), we result at the top official ICD code selection and below that other options under snomed coding. Conditions shown in the auto-complete choices as *italics light grey* are non-billable ICD codes from the ICD tables we integrate with. This is a system setting that can be set to different settings to totally hide any conditions they state are non-billable or to leave all conditions as shown.

![](../encounters-impression-section.assets/ded43af120043aca641575f11cdac1fd.png)

When done, click the ADD button and continue to add another problem/condition for the patient pertaining to today's visit. This condition will also be added to the patient's conditions history tab in {{% system-name %}} .

You can have a *duplicate active condition* warning/message turned on for the Impression area if you wish. If turned on, it looks at the conditions auto-complete field which checks if the condition selected or newly entered already exists in an **active** state for the patient. If so, a pop-up box alert will appear and asks the user if they still want to add the condition even though it found an active condition that already exists for the patient.

Contact your MIE Implementer to have this attribute added/turned on for the encounter impression area in the encounter for your practice.

![](../encounters-impression-section.assets/9acafa9dae21ea81389678cd158cc3cd.png)

{{% note %}}
If linking an existing case/incident (in the Case section of the encounter) to the encounter, the assessments from the incident/case will be linked to the encounter. Meaning, a case/incident which already has an assessment/diagnosis(es) linked to it, the same diagnosis(es) will now auto link to the encounter as well in the Assessment section of the encounter.
{{% /note %}}
