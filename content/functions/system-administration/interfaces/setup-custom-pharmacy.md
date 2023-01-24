---
id: '1A8PHeRveLK4ulUwZxjvEyWvkRIGM2vjyvo8vaDGuDe4'
title: 'Setup Custom Pharmacy'
date: '2020-02-27T20:29:02.852Z'
version: 20
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1A8PHeRveLK4ulUwZxjvEyWvkRIGM2vjyvo8vaDGuDe4'
wikigdrive: '6c6f21d9d0a63cb86fd32dec4cec30d4b470cbf5'
menu:
  main:
    name: 'Setup Custom Pharmacy'
    identifier: '1A8PHeRveLK4ulUwZxjvEyWvkRIGM2vjyvo8vaDGuDe4'
    parent: '1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q'
    weight: 5340
---
You must have security role of *Manage Custom Pharmacies* set to Yes to access the Custom Pharmacy tab found in the Control tab module.  
If your practice has a drug dispenser type machine that we interface with (example: InstyMeds), we can send the same type of prescription electronic message to that machine dispenser instead of a retail pharmacy. The interface uses SureScripts to send prescriptions electronically to pharmacies however we have the ability to add a custom "pharmacy", that will bypass sending the script to SureScripts and direct it to another url.   Practices that have this ‘machine-like medication dispensing machine', would have MIE add an in-house pharmacy for that dispensing machine (example: InstyMeds Dispenser).  The physician will prescribe as normal and instead of choosing a local retail pharmacy; the user searches the pharmacy database for the in-house pharmacy named example: "InstyMeds Dispenser".  {{% system-name %}} will route the electronic prescription to the Instymeds machine in the clinic lobby and bypass SureScripts.  The patient would then pick up their prescription on the way out the door.  This machine-like medication dispensing machine can receive messages in the same format as those that are sent to SureScripts.  We send those messages to a different URL than SureScripts so that it goes to the dispensing machine instead.  
The editor for setting up a dispensing machine to receive these electronic prescriptions and allow that in-house dispensing machine be set as a patient's preferred pharmacy is the tab named *Custom Pharmacy* which is found in the sidemenu tab named Control.
  
![](../setup-custom-pharmacy.assets/b17792894d92e5af124f465d8386551b.png)  

If you have security permission to the Custom Pharmacy tab, this is the listing of Custom Pharmacies your practice has. Custom Pharmacies are dispensing machines in-house. Contact your MIE Implementer to have one set up and get you information on an interface with your medication dispensing machine. MIE will program and set up the Custom Pharmacy using this tab. These fields are for MIE to use and enter. The listing in this tab will show all active and inactive custom pharmacies your practice has set up.
  
![](../setup-custom-pharmacy.assets/0f8066d1b2b91b6a2ca2ed265aa2cb21.png)  

