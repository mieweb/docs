---
id: '1jZ5PGqbKCzAKcaFR6idH4tUAWnft-WvzAcuJY4pDj1I'
title: 'Health Surveillance Panels - Automated Membership'
date: '2020-02-27T20:00:00.803Z'
version: 33
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1jZ5PGqbKCzAKcaFR6idH4tUAWnft-WvzAcuJY4pDj1I'
wikigdrive: '2abeb591fccd09f9dcebef69bca681875d9cdcb0'
menu:
  main:
    name: 'Health Surveillance Panels - Automated Membership'
    identifier: '1jZ5PGqbKCzAKcaFR6idH4tUAWnft-WvzAcuJY4pDj1I'
    parent: '13d8ccdFH7JxUSmcuuvP6MbeYsXaR-GYMpSLZpwYvERg'
    weight: 1810
---
Users must have security access to be in Health Surveillance Management control tab. On the sidemenu tab, click the CONTROL tab. Once in the Control tab, click the HEALTH SURVEILLANCE tab listed in the menu of tabs (or in your system it may be called Health Surveillance)
  
![](../health-surveillance-panels-automated-membership.assets/100002010000053F000001946B012D226089705B.png)  

The listing of current Panels will display on the screen under the Panel Search fields.
  
## Viewing Memberships  
  
You can view current members of panels and also current automated {{% system-name %}} panel membership rules set up for each specific panel from the Health Surveillance tab found in Control.  
To view existing memberships & membership rules on existing panels go to Control tab→Health Surveillance tab→ Find the specific panel and click Membership hyperlink from the main panel listing.
  
![](../health-surveillance-panels-automated-membership.assets/100002010000042B0000009D76F89B671B7210CA.png)  

OR you can instead get to membership when in the "actions" of any specific panel.
  
![](../health-surveillance-panels-automated-membership.assets/100002010000042500000094ACB96F8D8ED86ECF.png)  

Then click membership hyperlink found at the top of the Panel Actions screen for that specific panel.
  
![](../health-surveillance-panels-automated-membership.assets/1000020100000459000000EBD430A47C6195FC9B.png)  

Either method, you gain access to the *Panel Membership* screen which shows 3 sections on that screen.  At the top you should see (in bold) the words *Panel Membership* and then the specific panel you accessed membership on.  
The top section shows *Membership Rule* which is any {{% system-name %}} automated configuration rule(s) to get employees into this panel based on specific criteria determined. Automated {{% system-name %}} panel membership rules makes employee's members of the panel automatically (according to the criteria in the rule) as an Implicit Membership.  
The next section shows *Individual Include/Exclude* which lists all current employees that are members of this specific panel and if they are included or excluded at the panel level.  
At the very bottom you see *Membership Approval* where you can click the *Approve Membership Now* button and it essentially marks the last time a user (with a date/time stamp) that approved & validated this membership screen for the specific panel.
  
![](../health-surveillance-panels-automated-membership.assets/10000201000004540000011776BDB69687794A3B.png)  

  
![](../health-surveillance-panels-automated-membership.assets/10000201000000D70000004F9263040C6BC7887F.png)  

  
![](../health-surveillance-panels-automated-membership.assets/10000201000001040000004E4F6980F42045AE08.png)  

  
## View Automated Membership Rules  
  
You can have {{% system-name %}} automate membership by including or excluding employees based on location, building, cost center, job class, or based on a custom query.  You may also explicitly include or exclude individual employees. This can only be done once the HR interface is done and in place. MIE developers will help write this query to manage membership automatically and can write custom queries if you need automated membership based off of any other type of field besides our 4 default fields of location, building, cost center or employee class.  
If any automated membership rules exist for the specific panel viewing membership on, it will be listed in the *Membership Rule* section. This lists any CC (Cost Center), Loc (Location), Bld (Building), and EC (Employee Class) that the membership rules are looking at. If custom queries (additional criteria) are also or instead looked at to determine which employee charts are considered members of a panel automatically, then it would be listed in the *additional criteria* field which is only seen if you were to click edit on the membership rule. The start date for the automatic membership rule is also indicated.
  
![](../health-surveillance-panels-automated-membership.assets/100002010000040A0000007414E7212513B371E7.png)  

  
## Add Automated Membership Rule  
  
{{% system-name %}} automated configuration rule(s) to get employees into this panel based on specific criteria determined here in this screen on the specific individual panel. Automated {{% system-name %}} panel membership rules makes employee's members of the panel automatically (according to the criteria in the rule) as an Implicit Membership.  Implicit membership can change automatically when factors change (like change of cost center, class, building or location or any other additional criteria) and helps with automation and less manual work for staff in surveillance.  Ending implicit memberships is also automatically done if they do not fit the criteria anymore. This is set in the system setting *End implicit memberships automatically*.  
MIE Developers would be the ones to program automated membership rules on any panels needed, but to add an automatic implicit membership rule to a specific panel you would click the Add Membership Rule hyperlink from the membership screen.
  
![](../health-surveillance-panels-automated-membership.assets/1000000000000422000001B7C80B202FBADF0C2E.png)  

That is where MIE sets any automatied panel membership rules or additional criteria programming. Location is the Facility_code field in demographics. Building, cost center & employee class fields are also found in employee demographics tab.  
It's always best to do Health Surveillance panels and testing regarding memberships, etc in a DEV/QA system first – export/import panels in there, set up rules and test to validate and spot check using Panel Action Evaluator tab and Time Machine features.  
If a panel membership rule's additional criteria contains invalid SQL or new invalid SQL is entered when editing a membership rule, a warning displays that there is a panel membership rule configuration problem. It will not end all implicit memberships in that panel after evaluating if there is invalid SQL. To fix the invalid SQL after receiving this warning message, simply click *edit* on the membership rule that was being inserted or edited.
  
![](../health-surveillance-panels-automated-membership.assets/10000000000005560000020111020B7D06AFBF5F.png)  

Once an employee's chart is automatically made a member of the panel based on automated membership rules, the employee will show as "implicit" membership for that panel (not explicit). It's important for your MIE Implementer to have the scheduled job enabled for the panel membership evaluator and panel action items evaluator to run each night if you have automated membership rules set in place. These scheduled jobs are what makes the panel action evaluator run and the automated membership rules run once a night.
  
![](../health-surveillance-panels-automated-membership.assets/10000201000004A000000099731280BC87279565.png)  

Automated membership rules also look at what charts are considered "active", so it's important to work with your MIE Implementer on what an "active" chart is considered in your system based on your HR interface feed fields being received.
  
![](../health-surveillance-panels-automated-membership.assets/100002010000025700000054713C3343376FDD83.png)  

Also, whenever the Panel Action Evaluator runs, any pending orders for patients with explicit panel memberships will be deleted if that patient fails the Active Patient Clause criteria.
