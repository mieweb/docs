---
id: '1GA6KzM8KPyzphmOk3kccJLGA7D0gkzzRLHjVrhVIZo0'
title: 'Patient Registration Tab - Manual Patient Entry'
date: '2021-04-18T04:58:25.003Z'
version: 46
lastAuthor: 'Doug Horner'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1GA6KzM8KPyzphmOk3kccJLGA7D0gkzzRLHjVrhVIZo0'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
menu:
  main:
    name: 'Patient Registration Tab - Manual Patient Entry'
    identifier: '1GA6KzM8KPyzphmOk3kccJLGA7D0gkzzRLHjVrhVIZo0'
    parent: '1F5UITI13Xe991RVRXssmOWGPyAvgUbgXHk--KfZILV0'
    weight: 330
---
## Manual Patient Registration  
  
Click the *E-Chart* tab from the left sidebar menu.  
Click *Patient Registration* tab at the top.
  
![](../patient-registration-tab-manual-patient-entry.assets/100002010000040200000125D56E1636F0629848.png)  

Enter last name, first name, birthdate, and SSN, then click *Search* at the bottom.  
It will search and see if the patient exists or match any part of the information (last/first name, dob, ssn) and give you a match rating.  
If it finds a close match from the fields you entered, it will show those matches. These are possible matches of patient's already entered in your system. You may want to double check that the patient already exists in {{% system-name %}} from this search result. This helps eliminate entering duplicate patients.
  
![](../patient-registration-tab-manual-patient-entry.assets/1000020100000477000000F5C4F51E7D86CC17DB.png)  

It will then give you a choice of either selecting an existing patient record from the list of matching patients or continuing on with the registration/adding process for the patient and information you entered.  
If the patient you are entering pops up as a match and is already in the system, simply click on that matching patient's MR # and it will take you to their chart. Or simply get out of the module by clicking on any tab.  
If the patient you are entering is not the same as any of the matching patient's it is rating, then click Continue adding the patient ( *name )*. This will then let you continue to enter this patient manually into the system.  
If your patient does not appear as a possible match, then it will take you right to the registration screen.  
If you clicked Continue adding the Patient ( *name* ): then it will take you to the registration screen.  
All this information populates the *Demographics* tab of the patient's chart.  
Fill out the registration screen fields.
  
![](../patient-registration-tab-manual-patient-entry.assets/1000020100000470000001EC19505BA12450EADD.png)  

**The required fields are Last Name, First Name, and Birthdate**.  
Title field is for example: Mr, Mrs, etc.  
Suffix field is for example: Jr, III, Sr. etc.  
Note: Country field is first to populate for address in order to help with a Postal Code field. The Country field (in the patient registration screen) for the patient's address and their employer Country field is set to ‘United States' by default when a user preference for the default location has not been set by the logged in user. The Default Country can also be set system wide via a system setting.
  
![](../patient-registration-tab-manual-patient-entry.assets/10000201000002910000005C3CEB22CC40352E43.png)  

Upon keying in the postal code field, the system will auto-populate the county and city and state for you in the remaining fields. The Postal Code field will accommodate international postal codes and display as they are entered without auto-formatting.  
Note: There is a system setting to allow for international province/state selection. If system setting *US States Only* is disabled (value 0) then the State field in demographics will change to say *State/Province-Country* and you can use the autocomplete to select a state/province and country for the patient. It will result in international and US selections.
  
![](../patient-registration-tab-manual-patient-entry.assets/10000201000001880000006E4F5D04F8CDF74BE3.png)  

Your practice may be set up to have a check-box on the registration screen named **Exclude from patient quality care.** Check-mark this if you are entering a test patient or a fake patient to your system. If you checkmark this box, it will exclude that patient from any report data, etc. This is to be check-marked for fake or test patients only in your system.  
Click *SAVE* button at the bottom when done registering the patient in {{% system-name %}} .  
It then refreshes the screen back to the *Patient Demographics* screen for this new registered patient.  
It has also assigned a Medical Record number (account number) for the patient you manually registered.  
Manual Registration in {{% system-name %}} shows this patient in {{% system-name %}} only. It will not merge/appear in any other practice management system that your company uses (example: Medical Manager, Experior, Medic, etc.) or interfaces with.
