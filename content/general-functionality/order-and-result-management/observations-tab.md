---
title: "Observations Tab"
date: 2020-02-27T20:03:08.015Z
url: "general-functionality/order-and-result-management/observations-tab.html"
version: 71
id: 13UOUobSDFmuMqHmgps91RswTip-sSvHqkiAncWNOtaw
source: https://drive.google.com/open?id=13UOUobSDFmuMqHmgps91RswTip-sSvHqkiAncWNOtaw
menu:
    main:
        name: "Observations Tab"
        identifier: "13UOUobSDFmuMqHmgps91RswTip-sSvHqkiAncWNOtaw"
        parent: "103elDMKyCQlA8uZjycHzAZ90L6BR3FTzxRLYOKrgpo8"
        weight: 1950
---
Click *E-Chart* on the left sidebar menu.

Search and select the patient.

Click *Observations* chart tab at the top in the patient's chart. You must have security permission to view, add, edit or delete observations from a patient's observations chart tab.

![](../../external_files/dc73cf3b4fe3bd566136a95521646cc6.png)

Once you click the Observations chart tab, you will see the Observations Search tool.

Here you can enter a date range or specific flow sheet to view narrowed down results of a list of observations the patient has stored.

If you wish to see the entire listing of observations the patient has stored entirely, simply leave the date ranges both blank, have Flowsheet set to *All Observations* and click search. It will render all the observations stored for this patient in the results.

## Search Specific Observation(s) or Date Range

If you click the *Search* link, it will open the observations search fields.

You can search for a specific observation(s) and/or a specific date range for the patient.

![](../../external_files/2dd3150c9534a86246cb6ce761fba6fb.png)

* <strong>Observed Start Date:</strong> You can enter a start date range for your observation search. If none entered, it will consider 00/00/0000 as the start date.
* <strong>Observed End Date:</strong> You can enter an end date range for your observation search. If none entered, it will consider today's date.
* <strong>Quick Range:</strong> You can select a quick date range from this list of drop-downs. It reads from <strong>today's date</strong>. Instead of entering in a specific date range, you can quickly go here and select <em>today</em> to show only today's entered observations, or select 180 days and it will show all observations entered 180 days ago up to now. This quick range goes back from <strong>today's date</strong>. It inserts quickly that date range into those date fields and then you must click the SEARCH button to show your results for that date range. The ‘quick range' is a hidden remembered user preference. If you prefer 365 days, you'd set this and whenever you come to the observations tab, the Start & End date will prefill with dates that correspond to that range, relative to today's current date. You can change it at anytime.

![](../../external_files/88fea48959bb90cc2ffebdf4f40041f5.png)

* <strong>Dates Along:</strong> Select horizontal or vertical to display the flowsheet in horizontal or vertical mode for the dates.
* <strong>Flowsheet:</strong> The default is to show all observations. You can however select a specific flowsheet these observations are for to narrow down your search even more. (See instructions further on next pages regarding flowsheets, editing or adding them.) Encounter data is stored as observations and flowsheets can be built for those.
* <strong>Additional Criteria:</strong> If you click the + button at Additional Criteria, it will open up another branch of search fields. You can search for observations by the <em>entered</em> observation date start and end date. You can also search for observations entered by a specific user.

![](../../external_files/c19c13b74ff1ff78d0a06aefa33733ef.png) ![](../../external_files/7dda0be71202fb95db4916d35dda3497.png)

* <strong>Entered By:</strong> To search for observations entered by a specific user, simply begin typing in first or last name of the user in the field and it will auto-complete choices for you to select.

Click *SEARCH* button to perform the search and show the observation results.

Your results will display beneath the search field tools.

![](../../external_files/b1a6792c1ae6146c8421c5c1caa039ee.png)

At the end of the results, it displays the total number of observations listed in the summary shown. In this case above, the patient's search result shows 12 observations that fit the criteria you entered.

Beneath that, it tells you there are *additional observations that exist, modify your search to view*. That means this patient has other observations stored in their chart which don't fit the search criteria you specified. If you want to view those, simply modify your search criteria. The above example patient has 22 stored observations in their chart. The search you entered displayed 12 matching observations. The patient still has 10 more stored observations that didn't fit your search criteria, so it's just notifying you of that incase you want to continue looking for more, etc.

If you selected a specific flowsheet to render, under the resulted flowsheet and under the message *additional observations exists*, etc will be the specific observation entry fields specific to this flowsheet you rendered. You can add specific observations for this patient related to the flowsheet from here.

![](../../external_files/0e639bb51189d03145432bf445b11b00.png)

![](../../external_files/f72d1e44aecad2fe3eeb06611a2cc4b3.png)

To view specifics of an observation, simply click on the underlined observation result. It will open a separate window where you can view the specifics entered for that observation along with any modifications done to that observation.

![](../../external_files/005543a950fcfd9da3711da44ddf7a79.png)

### Search Observations Link

This option is the same view as what you see when you open the Observations Tab. Vitals are considered observations. Lab test results are considered observations. This Search Observations link is also available in the Vitals tab.

![](../../external_files/2dda5d50a271dcc4c84832bb40528ac1.png)

If you click on the List Observations link in the top right corner you can view all observations for a patient.

![](../../external_files/1277f68235f750ce403a550386aa71ee.png)

When you click on Search Observations, it is arranged in date order. You can also click the view most recent first link and it will flip the order. The observation _name_s are listed in alphabetical order along the left side. The observation values (results) are in date order along the right of the name. Observation results with units of lbs (weights) will now display as a combination of pounds and ounces if the number of pounds is under 30.

To view a visual graph of the specific observation results according to date, simply click the graph icon in the *plot* column.

![](../../external_files/a746662f4c93fef8f183c73faf4f0d42.png)

Your MIE Implementer can hide the plot column from your system if you wish it to be turned off. This is done by MIE through a layout tag change.

Once you click the graph icon, a new window will open and visually show the plots of each result according to date for this specific observation name you selected. You can visually see in graph format how the results for this specific observation compare in date range.

![](../../external_files/07a34348bfa021139e88fc0ba0bdacf0.png)

To get out of this plotted graph, simply click the X at the top right corner of this screen. {{% system-name %}} observations should still be opened on your other screen to continue working.

If you hover your computer mouse (don't click the mouse) over a specific observation's underlined result then it will display a short summary of the observation result. It shows in a summary box the *name, date/time* and *units.* This is helpful if your date range causes the screen view to be very wide and you have to scroll over to the right, then you loose view of the first columns that specify name & ranges, etc.

![](../../external_files/eac4962432016b255ab83f6a1d03b7c2.png)

The hover for observation values also displays the result in the alternate unit system (English, Metric) according to the units specified for the observation code, provided.

![](../../external_files/c5fefb9cd4a08b096104426d2124ce32.png)

## Add an Observation

To add an observation, click *Add Observations* link at the top right corner of the Observations Tab.

![](../../external_files/2dda5d50a271dcc4c84832bb40528ac1.png)

The Add an Observation screen will appear.

These are fields that you manually enter data into and to add the observation to the patient's chart.

![](../../external_files/0d0664944036d4a4b4540464904d13df.png)

* <strong>Date/time observed:</strong> Enter the date and can enter a specific time of the observation.
* <strong>Observation Search by Name:</strong> Here you can add the observations to the flowsheet using the Observation Search field, which is an auto-complete. Or you can check the boxes beside the observations listed in the scrollable area below that. It will not allow free-text. You must select something from the list or auto-complete. Contact your administrator or MIE Implementer for any observation names not entered into your system. As soon as you select something from the auto-complete or check-mark a box, it adds it down as a summary list in the <em>Observations Added</em> section below.
* <strong>Observation Search by LOINC code:</strong> Searching will be done by observation name by default. To search by LOINC code, begin your search with a question mark <strong>Example:</strong> ‘?123' It will give you auto-complete choices that match and will display the LOINC code, units, and range after the name of the observation. Each is shown in separate brackets.

![](../../external_files/81dff01afb74f28484f2a2b3830beb74.png)

* <strong>Reference Range:</strong> Selecting the correct observation name may pop-up the reference ranges for that specific observation. These are reference ranges that are considered ‘normal' ranges for example: a lab test result. These must be pre-programmed by MIE for that observation name or by an administrator in your practice through the <em>Observation Codes</em> tab in the Control sidemenu. You cannot free-text in this field.
* <strong>Units:</strong> Selecting the correct observation name may pop-up the units the observation is measured in. These must be pre-programmed by MIE for that observation name or by an administrator in your practice through the <em>Observation Codes</em> tab in the Control sidemenu. You cannot free-text in this field. Units are example: mg/dl or lbs or degrees, etc.
* <strong>Result:</strong> Type in the result of the observation you are entering.
* <strong>Result Flag:</strong> Enter an H if the observation result is high or an L if the observation result is low according to the reference range or according to the lab result you are entering from. If a reference range has been programmed by MIE for a specific observation, it will automatically know if an H or L should go here according to what you entered in <em>result.</em> If you type anything in this field, it will highlight it in red in the list or tests observations view. You can free-text a few characters here. You do not have to only type an H or an L. If you leave this blank, it considers the result as within normal range and does not highlight it in the list or tests observations view.
* <strong>Result Free Text:</strong> Type any notes related to the observation's result. This does not show in the list or tests view. It only shows here when a specific observation is opened to view or edit or delete. This is also used for large report-style results that come in from interfaces for particular tests.
* <strong>Comments:</strong> Enter any comments here. They will show when you hover over the observation on the summary screen that lists all the patients observations. This is used for internal office comments.

Click *Submit* to enter this observation into the patient's chart.

You will get a confirmation message if you successfully added an observation.

![](../../external_files/d6cb75775c38254d446885e3479b74af.png)

### Edit or Delete Observations

You can edit or delete an observation if you have security permission to add, edit or delete observations.

Make sure you have selected the correct observation **and** the correct date for the observation you wish to edit or delete. To edit or delete an observation, simply find the observation and click on the specific underlined observation result you wish to edit or delete.

![](../../external_files/a746662f4c93fef8f183c73faf4f0d42.png)

A separate window will open showing this specific observation entry and a history list of any edits previously done to the observation.

![](../../external_files/abba1fd1145242633032a4a2c4e28be8.png)

![](../../external_files/005543a950fcfd9da3711da44ddf7a79.png)

You can change/edit any fields you wish and click *submit* when done.

If you wish to delete an observation, click *delete* and it will ask you to confirm deletion.

You will get a confirmation message if you successfully updated the observation.

Close (X) out of this edit screen to continue to work in {{% system-name %}} .

![](../../external_files/50c9bfbbcbf6cdad686e4241a40661f4.png)

If you chose to delete an observation, you will get a confirmation message if you successfully deleted the observation. It still shows the observation below this confirmation message, but to Close (X) out of this delete screen to continue to work in {{% system-name %}} .

![](../../external_files/4f221149b9740e49ba875e4a7e398329.png)

## Flowsheets

In the Observations Search tools, it defaults to show ALL OBSERVATIONS as the flowsheet. This then displays every stored observation (below that) from the patient's chart. If you wish to narrow down your results to a specific flowsheet, you can select a specific built flowsheet from the flowsheet drop-down.

![](../../external_files/cf953d4224c165edfc9f9cfd1b1e635c.png)

Flowsheets compile specific observations and results for the patient in a flowsheet display type manner. You can select a flowsheet name here and it will result below that. The flowsheet you are rendering will result below this search section. The flowsheets will show the specific observations (and results/values the patient has) according to the flowsheet contents that is set up for your system. Viewing in flowsheet mode just helps weed out other stored observations from the patient's chart so you can easily see and find the results you want and in a flowsheet/trending method.

![](../../external_files/412c10d36a2fc946e6dbe5656f7b8ea4.png)

If you have security permission to Manage Observation Flowsheets and are trained on this feature, you can edit or create new observation flowsheets to your entire system. If you do not have permission, you will **not** see the *manage flowsheets* button next to flowsheet line. Note: You can also manage flowsheets from Control → Observation Codes tab → and clicking Display Flowsheets

![](../../external_files/37cb8123a94324135e319ed57a6c7487.png)

For more information on managing flowsheets (like adding, editing, copying) for your system, please see help documentation titled *Observation Flowsheets.pdf*

## Charts

The chart data is found in database tables in a shared database (like the drug data).  Chart choices are programmed by MIE. Some basic charts are loaded into all systems. These can be turned on by your MIE Implementer through a system setting.

![](../../external_files/57fa195b7f4d24e3c082da8b1eafe9b4.png)

If you wish to have a specific chart programmed, please contact your MIE representative. If there is something you want to ‘chart' that will be compared to statistical averages, you would get us that data and we would put it in as a customized chart for your system. By default, {{% system-name %}} is equipped to show CDC and World Health Organization (WHO) pediatric growth charts.

![](../../external_files/b2454883ed0de6f24b96ebcbe0bfab9e.png)

Once you select a chart from the drop-down any matching observations would display as a summary for the chart. It lists the observation, values, alternate values, percentile, etc.

![](../../external_files/b2d3e5b8ec885eb2a17c8cf6df3c2159.png)

To view the chart, simply click the VIEW CHART button and a separate window will open. The ‘chart' shows the statistical averages and the charted patient's observations are charted in blue for comparison.

These are for pediatric growth charts and also for OB purposes.  They have curves that show where the different percentiles are.  You currently can only print these using the browser's print features.

![](../../external_files/6430339ebb7ad35fe5908d8f6fea76df.png)

## Metric

There is a MY SETTINGS preference if you wish to show/display observations in metric unit.

![](../../external_files/479f66c06fa5b8ec420d0837c15e1672.png)

The valid range for the weight/stature are:

Stature (Male)                  	  Height (cm)     - Minimum allowed:  24.0  Maximum allowed:   240.0

Stature (Female)                	Height (cm)     - Minimum allowed:  24.0  Maximum allowed:   240.0

Weight (Male)                   	 Weight (kg)     - Minimum allowed:  24.0   Maximum allowed:  240.0

Weight (Female)                    Weight (kg)     - Minimum allowed:  24.0   Maximum allowed:  240.0

Weight-Stature (Male)              Height (cm)   - Minimum allowed:  77.0   Maximum allowed:    121.5

Weight-Stature (Female)          Height (cm)   - Minimum allowed:  77.0   Maximum allowed:	121.5

The Stature and Weight charts will display observations outside the allowed ranges. They'll list them, but will give you the calculation errors.

The Weight-Stature will not acknowledge the existence of any height/weight observation pair whose height component falls outside of the allowed range.

