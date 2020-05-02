---
title: "Health Surveillance Panels - Automated Membership"
date: 2020-02-27T20:00:00.803Z
url: "general-functionality/health-surveillance/health-surveillance-panels-automated-membership.html"
version: 23
id: 1jZ5PGqbKCzAKcaFR6idH4tUAWnft-WvzAcuJY4pDj1I
source: https://drive.google.com/open?id=1jZ5PGqbKCzAKcaFR6idH4tUAWnft-WvzAcuJY4pDj1I
menu:
    main:
        name: "Health Surveillance Panels - Automated Membership"
        identifier: "1jZ5PGqbKCzAKcaFR6idH4tUAWnft-WvzAcuJY4pDj1I"
        parent: "13d8ccdFH7JxUSmcuuvP6MbeYsXaR-GYMpSLZpwYvERg"
        weight: 1810
---
Users must have security access to be in Health Surveillance Management control tab. On the sidemenu tab, click the CONTROL tab. Once in the Control tab, click the HEALTH SURVEILLANCE tab listed in the menu of tabs (or in your system it may be called Health Surveillance)

![](../../external_files/fae942d2400869a7034c5e39b8b9a351.png)

The listing of current Panels will display on the screen under the Panel Search fields.

## Viewing Memberships

You can view current members of panels and also current automated {{% system-name %}} panel membership rules set up for each specific panel from the Health Surveillance tab found in Control.

To view existing memberships & membership rules on existing panels go to Control tab→Health Surveillance tab→ Find the specific panel and click Membership hyperlink from the main panel listing.

![](../../external_files/149e8341028f2d7cc4719bf10bb35fb4.png)

OR you can instead get to membership when in the "actions" of any specific panel.

![](../../external_files/58b830ca94716a7eea8f5c7db19a1df0.png)

Then click membership hyperlink found at the top of the Panel Actions screen for that specific panel.

![](../../external_files/5f6dc7ad75ab3b32ebbab9804556ff51.png)

Either method, you gain access to the *Panel Membership* screen which shows 3 sections on that screen.  At the top you should see (in bold) the words *Panel Membership* and then the specific panel you accessed membership on.

The top section shows *Membership Rule* which is any {{% system-name %}} automated configuration rule(s) to get employees into this panel based on specific criteria determined. Automated {{% system-name %}} panel membership rules makes employee's members of the panel automatically (according to the criteria in the rule) as an Implicit Membership.

The next section shows *Individual Include/Exclude* which lists all current employees that are members of this specific panel and if they are included or excluded at the panel level.

At the very bottom you see *Membership Approval* where you can click the *Approve Membership Now* button and it essentially marks the last time a user (with a date/time stamp) that approved & validated this membership screen for the specific panel.

![](../../external_files/1f673a5f649abd143f7c16e51fe66583.png)

![](../../external_files/e49fc8e15995a6d27d5801db4848906c.png)

![](../../external_files/578b854f20fb840985bc8a2d47de99c2.png)

## View Automated Membership Rules

You can have {{% system-name %}} automate membership by including or excluding employees based on location, building, cost center, job class, or based on a custom query.  You may also explicitly include or exclude individual employees. This can only be done once the HR interface is done and in place. MIE developers will help write this query to manage membership automatically and can write custom queries if you need automated membership based off of any other type of field besides our 4 default fields of location, building, cost center or employee class.

If any automated membership rules exist for the specific panel viewing membership on, it will be listed in the *Membership Rule* section. This lists any CC (Cost Center), Loc (Location), Bld (Building), and EC (Employee Class) that the membership rules are looking at. If custom queries (additional criteria) are also or instead looked at to determine which employee charts are considered members of a panel automatically, then it would be listed in the *additional criteria* field which is only seen if you were to click edit on the membership rule. The start date for the automatic membership rule is also indicated.

![](../../external_files/5e49ce6cf9727e8cbc18232fbfb0da82.png)

## Add Automated Membership Rule

{{% system-name %}} automated configuration rule(s) to get employees into this panel based on specific criteria determined here in this screen on the specific individual panel. Automated {{% system-name %}} panel membership rules makes employee's members of the panel automatically (according to the criteria in the rule) as an Implicit Membership.  Implicit membership can change automatically when factors change (like change of cost center, class, building or location or any other additional criteria) and helps with automation and less manual work for staff in surveillance.  Ending implicit memberships is also automatically done if they do not fit the criteria anymore. This is set in the system setting *End implicit memberships automatically*.

MIE Developers would be the ones to program automated membership rules on any panels needed, but to add an automatic implicit membership rule to a specific panel you would click the Add Membership Rule hyperlink from the membership screen.

![](../../external_files/9b78aadc464961dbda9c3a6635bdf5d6.png)

That is where MIE sets any automatied panel membership rules or additional criteria programming. Location is the Facility_code field in demographics. Building, cost center & employee class fields are also found in employee demographics tab.

It's always best to do Health Surveillance panels and testing regarding memberships, etc in a DEV/QA system first – export/import panels in there, set up rules and test to validate and spot check using Panel Action Evaluator tab and Time Machine features.

If a panel membership rule's additional criteria contains invalid SQL or new invalid SQL is entered when editing a membership rule, a warning displays that there is a panel membership rule configuration problem. It will not end all implicit memberships in that panel after evaluating if there is invalid SQL. To fix the invalid SQL after receiving this warning message, simply click *edit* on the membership rule that was being inserted or edited.

![](../../external_files/57200f00222dd5956a9dfc95df241990.png)

Once an employee's chart is automatically made a member of the panel based on automated membership rules, the employee will show as "implicit" membership for that panel (not explicit). It's important for your MIE Implementer to have the scheduled job enabled for the panel membership evaluator and panel action items evaluator to run each night if you have automated membership rules set in place. These scheduled jobs are what makes the panel action evaluator run and the automated membership rules run once a night.

![](../../external_files/beacd010e8a8c0408d7449c054cc4c5c.png)

Automated membership rules also look at what charts are considered "active", so it's important to work with your MIE Implementer on what an "active" chart is considered in your system based on your HR interface feed fields being received.

![](../../external_files/ec48956f28a1e49fd82a7a88f363acb3.png)

Also, whenever the Panel Action Evaluator runs, any pending orders for patients with explicit panel memberships will be deleted if that patient fails the Active Patient Clause criteria.

