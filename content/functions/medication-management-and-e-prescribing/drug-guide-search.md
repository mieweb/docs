---
id: '1yfB8xD-yey4VBd_Yzka0pkd_PGCMq8s9GmZHCCbZiLA'
title: 'Drug Guide Search'
date: '2020-02-27T20:04:35.130Z'
version: 36
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1yfB8xD-yey4VBd_Yzka0pkd_PGCMq8s9GmZHCCbZiLA'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
{{% system-name %}} currently imports the First DataBank (FDB) update files on a weekly basis on Saturday mornings at 2 am. MIE then does a complete dump and reload of our databases based on these files. At the end of this process, we update a table in the database that keeps track of changes in the database. A nightly job on each of the client servers checks for updates in the database file, and updates the rxdb database on the server from our "home" version of the database if necessary.

We do not "message" after updates these updates. However, we do have a message on the Drug Guide that you can see what the version is. The Drug Guide Search feature is usually found in the sidemenu tab named References, however in your particular {{% system-name %}} system, it could be found in the Omniscope side tab or in the E-Chart tab. It is also found while prescribing in the e-meds module. Wherever your particular Drug Guide Search program is, when you get to that program you will see under the Drug Guide search field bar for example: **Drug database version: 2.400, last updated 2010-06-12 02:16:17**

This shows the last time we have updated the Drug database (not the rxdb as a whole, it looks specifically only for updates called ‘FDB Update') on the server box the system is looking at. This mainly gives MIE information to make sure the client is getting the updates we are putting out in our "home" base version. If there is a problem with the home base version for some reason (even if this is up to date), this will have an issue, but MIE would be alerted internally that there is an issue with the mainline not getting updated properly.

![](../drug-guide-search.assets/f20e8ca2fd6c1fd4cdf5c6ff63a3b5a5.png)

The Drug Guide program offers a search where you can look up a specific drug and see all the drug guide information for that drug. There are two ways to access the Drug Guide Search: (a) through the Drug Guide Search tab usually found in the References sidemenu tab or in the Omniscope sidemenu tab or in the E-Chart sidemenu tab (b) while prescribing in the e-meds module.

## Drug Guide Search Tab

This is where the Drug Guide Search program is found within the References sidemenu tab:

![](../drug-guide-search.assets/f20e8ca2fd6c1fd4cdf5c6ff63a3b5a5.png)

This is where the Drug Guide Search program is found within the E-Chart sidemenu tab:

![](../drug-guide-search.assets/50d2fb5e541a6f4e98364513e377f6c2.png)

Once you are in the Drug Guide Search program, there are search criteria fields you can set to find the drug you want to view guide information on.

* <strong>Search For:</strong> If you start typing the name of the drug (brand or generic) and it will auto-complete to match your typing and give you choices. The search criteria of ‘drug name' is automatically the default. You can change ‘how' you want to find the drug you need by changing the drop-down choice (see next page).

![](../drug-guide-search.assets/a26b8285eedb9a6bf93bbdb382b44e74.png)

* <strong>Additional Criteria Dropdown:</strong> You can change ‘how' you want to find the drug you need by changing the drop-down choice. It automatically defaults to search by ‘drug name' but you can select any other method of search you wish. Simply click your mouse on the drop-down and it will open other selections.
* <strong>Only Active Drugs:</strong> This is automatically check-marked unless you system setting has been changed. Having this checkmarked means you are narrowing down your drug search to only search and find active drugs, not drugs that have been marked inactive by First DataBank.

![](../drug-guide-search.assets/93f64eb009f302d14003308112effef6.png)

Once you have your search criteria set in the above fields, click the SEARCH button. It will show any possible matches on your screen for you to select that match the search criteria you set. If you searched for something more specific and there was only one match, it will open your screen right to that drug and guide information.

The Drug Guide for the drug found is a lengthy document that shows various details of that drug when you scroll down the page.

![](../drug-guide-search.assets/057927465746bb54455596a4727926a5.png)

The drug guide also has a section for formulary. Currently {{% system-name %}} only displays Medicare Part D drug plans and formularies. You can select the patient's state/county and Medicare Part D drug plan and click the display button to show the applicable formulary for that drug and their drug plan.

![](../drug-guide-search.assets/5892825916408861a6c8a2235f38cf98.png)

There are various help bubbles in the formulary to explain each section and column. After viewing the formulary, click the CLOSE button to close out the formulary window.

![](../drug-guide-search.assets/ea980b6a353bc5337fe2f349805bf942.png)

## Drug Guide Display Customization

There are various System Settings your MIE Implementer can change regarding the Drug Guide Search. The Drug Guide ‘Search For' field can be set to be an auto-complete to give matches to your typing, or can be turned off. Other various sections within the Drug Guide Search can be turned off from displaying such as the hierarchy section, the NDC section and the dosing section. The default to have the check-mark to search only active drugs can also be turned off so it's not check-marked and will always search for active *and* inactive drugs that you are searching for. Any changes to these system settings will affect your practice's {{% system-name %}} system wide for all users.

![](../drug-guide-search.assets/5d361a2119e48c7218e32983d2548a8a.png)

## Drug Guide Search While Prescribing

You can access the Drug Guide Search program while prescribing in the e-meds module. When prescribing and after you've typed in the prescription medication name, you will see the blue drug info icon. You can click directly on that blue drug info icon and a separate window will open showing you the drug guide screen for that specific medication you entered to prescribe. See previous above documentation regarding the Drug Guide and information that displays for that medication.

![](../drug-guide-search.assets/ff0e4cfee84e5aee9b402e0310db77a7.png)
