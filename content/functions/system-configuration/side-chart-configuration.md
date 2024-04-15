---
id: '1MA8AzNlicKyg00XYAgsnYL-jDg0tk6nQ0Sb0TjTVkng'
title: 'Side Chart Configuration'
date: '2020-03-05T17:32:44.289Z'
version: 49
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1MA8AzNlicKyg00XYAgsnYL-jDg0tk6nQ0Sb0TjTVkng'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Side Chart Access

When working anywhere in {{% system-name %}} , you will see the ability to open a side chart.

Clicking this icon near the patient's MR# will expand and display a side chart on the right side. The side chart should be used for a **brief** overview of information found within the chart. Demographic information is in the blue section followed by default sections named *Notes, Medical Records and Summary Tests*. This offers the ability to browse and look at documents housed in these 3 sections without getting out of the encounter or going to the other chart tabs outside the encounter. The red *Comments* section expands to display any alert documents the chart may have on it.

![](../side-chart-configuration.assets/a9d31a355f725fb9ca91a5e15c6c728f.png)

To browse documents that may be housed in the *Notes, Medical Records or Summary Tests* sections, simply click on the section itself to expand the document contents. The sections expand to show a list view of the documents sorted with most recent at the top. To open and get into a specific document, simply click the date of service hyperlink.

![](../side-chart-configuration.assets/f871bddc9435f24e3e1fb8e6f384cf6d.png)

By default, the side chart access defaults to chart tabs named Notes, Medical Record and Test Results. However your MIE Implementer can set up any chart tabs to be seen/accessed here in the side chart feature. A chart tab named "Side Chart" simply needs to be programmed (as a hidden chart tab) with the sub-tabs that are to be in the Side Chart tab and that will immediately reflect in this Side Chart functionality feature.

To collapse the side chart access, simply click on the icon image near the patient's MR# to collapse it.

![](../side-chart-configuration.assets/366f7a86aa2b2b890424825e1e5058a2.png)

## Side Chart Custom Configuration

The side chart can be customized to house different sections or tabs than the 3 there by default. This affects the entire {{% system-name %}} system for all users. When you customize the sidechart, all sections of the side chart will inherit these new tabs. This includes the individual orange sections for Cases/Incidents, so consider that as you set these up. The orange Case/Incident sections also include additional, case-related information along with authorized providers & restrictions/accommodations.

To customize the sidechart tabs, you first need to decide which tabs you want on the side chart, and if they do not exist, create them.

Then create or activate a chart tab named "Side Chart". This tab will house your sub-tabs/sections that you deem to be in the side chart. If this chart tab does not exist, the default sidechart will be used with the 3 default sections of Notes, Medical Records, and Summary Tests.

**Step 1**: Decide on/create the tabs you want displayed within the chart tab called "Side Chart". These can be existing tabs or new tabs. *These need to be a Document List View type tab.*

**Step 2:**

* Create tab named: Side Chart
* Default View: Sub Tab View
* Display: Hidden
* Select the sub-chart tabs to display within the Side Chart, and select "force display" on those sub-chart tabs you are linking to this main Side Chart tab.
* If you do not include an "order" to display the tabs in, it defaults to alphabetic.

![](../side-chart-configuration.assets/68a2e55a96a3b9124e104f762fdcff0e.png)

{{% note %}}
The side chart only uses doctypes that are on chart tabs where the INCLUSIVE flag is used, NOT the Exclusive – so if your Document Summary tab uses EXCLUSIVE, do not program the Document Summary within your side chart custom configured chart tab.
{{% /note %}}
