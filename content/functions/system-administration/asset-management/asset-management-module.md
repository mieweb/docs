---
id: "1g8JJcZXl_9lx-H2Yp7EgvKwtUxquYk8aNTFl7ov1WtQ"
title: "Asset Management Module"
date: "2026-01-15T18:58:03.086Z"
version: 293
lastAuthor: "janderson"
mimeType: "text/x-markdown"
links:
  - "https://mie.talentlms.com/shared/start/key:ZLLDNHRK"
source: "https://drive.google.com/open?id=1g8JJcZXl_9lx-H2Yp7EgvKwtUxquYk8aNTFl7ov1WtQ"
wikigdrive: "v2.15.30"
---

The Asset Manager module allows equipment tracking, warranty information, maintenance request and calibration requirements. The module includes creating work orders, calibration requests and tracks these items over time. The module includes automation of notification 90 and 30 days prior to when calibration, service agreements, warranties and insurance policies are due or will expire. There is robust reporting included. Please verify with your MIE implementer that your system has been prepared to use the Asset Management Module. MIE Implementer must set up this module to be used in your  {{% system-name %}}  system and must have the two committed layout encounters & visit types enabled/activated on your system for use.

![](./asset-management-module.assets/3f54b492d805a6dbfb21ecd055b80484.png)

## Current Assets & Search Filter

From the Control Panel left sidemenu, the Asset Manager module is available.

![](./asset-management-module.assets/c1f55984a43cfc9995e28b8808f50bf7.png)

The Asset Manager home page opens and lists all current Assets registered in the system. The list is displayed in a datavis grid and can have perspectives set to organize the data as needed.

![](./asset-management-module.assets/55526a08aee3cb6db0059167f27cd6db.png)

The datavis grid listing can be used to filter and narrow down results by Asset Name, one or more location or one or more clinics (sites), etc.

## Adding a New Asset

Click the Add New Asset hyperlink found in the Asset module at the top left corner of the screen.

![](./asset-management-module.assets/0784a283306b3dd155af9b9627b70806.png)

The Enter Asset Information screen will appear. Type in the name of the asset you wish to add to the system and click Add New button.

![](./asset-management-module.assets/74ce190f3bebaee92c9ff912958e2c7e.png)

Once you've registered a new asset, the system will automatically assign it an Asset ID # (Asset Medical Record partition number) and will open you to the Asset Details screen. Here you enter in all the detailed information for the new asset.

![](./asset-management-module.assets/1da66983819d8058de387394c5e36521.png)

Open the Information section by clicking on the gray bar titled Information. Add asset details to the following field:

- Name
- Manufacturer
- Model
- Manufactured Date
- Document Warranty
- Document Insurance
- Perform Calibration
- Perform Maintenance

Open the Other Data section by clicking on the gray bar titled Other Data. Additional asset details can be entered within the following fields:

- Serial Number
- Inspection Date
- Inspection Term
  - Every Month
  - Every Quarter
  - Every Year
- IAA Number
- SOW Number
- PE Number
- Prescription Date
- Original Serial No. When Stripped (For FEMA Only)
- Agency Barcode Number
- Status
  - Active
  - Inactive
  - Sold
- Unit Location
- Asset Category
  - Audiometer
  - AED
  - Cell Phone
  - FedHealth License
  - Laptop
  - Spirometer
- Assignment
  - Fixed
  - Deployed
- Installed Battery Lot Number
- Spare Battery Lot Number
- Installed Battery Installation Date
- Installed Battery Install by Date
- Installed Battery Expiration Date
- Spare Battery Install by Date
- Spare Battery Expiration Date
- Installed Pads Lot Number
- Spare Pads Lot Number
- Installed Pads Expiration Date
- Spare Pads Expiration Date
- Purchase Date
- Useful Life

The Asset Category selection list is customizable. Please contact your MIE Implementer for assistance. This field will be available as a filter in reporting.

If Deployed is selected for the Assignment, additional fields will display to enter in more detail about the deployment.

![](./asset-management-module.assets/29193ae6377b0f7a0021f052ca2d94d4.png)

{{% system-name %}} will monitor these expiration dates and send email notification to the asset custodian 90 days and 30 days in advance of the expiration dates so that replacements may be ordered.

Add the Contact for the Asset. The username field is an auto-complete from the list of users in the system. The Contact is usually someone responsible in the department for all the maintenance, calibration schedules and the equipment is communal (such as an audiometer). An owner is someone that has possession of the equipment and it is dedicated to their use like a laptop or cell phone. Select the appropriate Role from the drop-down and click the ADD button.

![](./asset-management-module.assets/0b365efb78bb951da95a233dde3e308f.png)

Calibration: Does the asset require routine calibration? If Yes, select the Yes radio button. The section will then expand to include fields to enter in calibration frequency.. The Last Calibration Date will display automatically when it's entered in from the Calibration Request encounter. The Next Calibration Date will auto-populate once a Calibration Request encounter has been completed.

![](./asset-management-module.assets/8cf55fe8bd77307c585cc523a48a89f8.png)

Maintenance: Enter maintenance tracking information in the maintenance section.

![](./asset-management-module.assets/a8fb9ea62be261fc44b22999f2d67416.png)

- Link to Service Manual: Add the URL link for any service manual if available.
- Maintenance Agreement
  - If Yes, the section will expand to record relevant maintenance agreement details.
  - The maintenance agreement <em>Contract Expiration</em> date field is used for automatic notification of expiration to the owner at 90 and 30 days prior to the date via email cron job.
- Provider

## Adding a Maintenance Request

A Maintenance encounter is available to create a work order style document to track maintenance requests for each specific asset. There is also a report to track outstanding maintenance requests and a detailed list of maintenance completed on each asset.

To add a Maintenance request, you will be working in a Maintenance Request encounter.

First be in the Assets module via the left sidemenu tab.

Next you must get into the specific asset that you need to open a Maintenance Request for. This is just like getting into a patient's chart, you must first get into the specific asset chart you need to be in.

![](./asset-management-module.assets/3af88d6468418e5c31c47602f58543a1.png)

Once in the specific asset chart (Asset Details screen), click on the New Maintenance Request.

![](./asset-management-module.assets/b4ac8eff17a53d145ac9a11bdf32930a.png)

The Maintenance Request Encounter will open and pre-populate detailed information for the listed asset from previous entered info. Any Service Agreement vendor information will also be displayed in the encounter from the details page.

![](./asset-management-module.assets/f6bbdfd624754c1adb8485adcbd80ebb.png)

Fill out the Maintenance Requested Date, Requested By and edit any Maintenance Provider info fields.

Enter the reason for maintenance in the *Issue Description* free text box.

You can then save the encounter and go to the "view "of the encounter and print that to use as a work order. Leave this encounter "open" in pending status until the maintenance has been completed. This encounter will continue to show in the *Open Maintenance Requests* for that specific asset until closed & archived (completed request).

![](./asset-management-module.assets/4eb3a18ec71275bac23e97bdfcd0af4b.png)

## Complete a Maintenance Request

If a maintenance request on an asset is complete, you need to finish that open/pending request encounter and close/archive it. You would go to the Assets module and get into the specific asset chart you need. Then click the *Maintenance* tab at the top. Find the existing open/pending encounter for that specific asset. On the right side in the options column, click on the hyperlink to take you into the Asset Maintenance (hyperlink named Asset Maintenance).

![](./asset-management-module.assets/465c1138e7725928d1fc9b4463c0bbf5.png)

The encounter will open in its current status. Go down and enter the resolution to the problem in the *Maintenance Resolution* free text box to assist with determining recurring problems with this asset.

![](./asset-management-module.assets/33e9a771291dd06631342ca9bd45e64a.png)

Click the Archive & Close button to close & archive this encounter to signify the Maintenance Request is complete. It will close this encounter and be placed *Closed Maintenance Requests* section of the encounter summary for Maintenance Requests in that specific asset.

![](./asset-management-module.assets/e1357f3e3ab97fbfe3e74fedfe69b44c.png)

## Adding a Calibration Request

Some equipment (assets) require calibration on a set time line such as annually. The Asset Management module will track completed calibration dates, automatically generate an email to the equipment owner/custodian at both 90 and 30 days prior to the due date, and create a work order type document for pending requests.

A Calibration encounter is available to create a work order style document to track calibration requests for each specific asset. There is also a report to track outstanding calibration requests and a detailed list of calibrations completed on each asset.

To add a Calibration request, you will be working in a Calibration Request encounter.

First be in the Assets module via the Control Panel sidemenu tab.

Next you must get into the specific asset that you need to open a Calibration Request for. This is just like getting into a patient's chart, you must first get into the specific asset chart you need to be in.

![](./asset-management-module.assets/f2112ffa311b596f5008d22e5544009f.png)

Once in the specific asset chart (Asset Details screen), to add a new request you would click the hyperlink New Calibration Request to start a new request (new encounter). Please make sure to review the list of open calibration requests prior to creating a new one.

![](./asset-management-module.assets/de1f3ebe172cd689677c10913e80a8e4.png)

The Calibration Request Encounter will open in another screen tab and pre-populate relative information for the listed asset from previous entered info.

![](./asset-management-module.assets/f1b2a6711addcc406d19a3a218ba5bf1.png)

Enter any relevant comments in the *Calibration Comments* free text box.

*Calibration Frequency* field displays information that was previously added in the Asset details page.

![](./asset-management-module.assets/3d90badfa297437e990be7ff233a12f8.png)

You can then save the encounter and go to the "view "of the encounter and print that to use as a work order. Leave this encounter "open" in pending status until the calibration has been completed. This encounter will continue to show in the *Open Calibration Requests* for that specific asset until closed & archived (completed request).

![](./asset-management-module.assets/556f3ed1812f740ae4844df78c196519.png)

## Complete a Calibration Request

If a calibration request on an asset is complete, you need to finish that open/pending request encounter and close/archive it. You would go to the Assets module and get into the specific asset chart you need. Then click the *Calibration* tab at the top. Find the existing open/pending encounter for that specific asset. On the right side in the options column, click on the hyperlink to take you into the Asset Calibration (hyperlink named Asset Calibration).

![](./asset-management-module.assets/f58bf9657766d924d28882e53f792566.png)

The encounter will open in its current status. Go down and enter the *Next Calibration Date* once this calibration request is completed. The date you enter here will also display on the asset details page.

![](./asset-management-module.assets/42849637bfa7d2a78a0ffa7d7d20ed3b.png)

Click the Archive & Close button to close & archive this encounter to signify the Calibration Request is complete. It will close this encounter and be placed *Closed Calibration Requests* section of the encounter summary for Calibration Requests in that specific asset.

![](./asset-management-module.assets/161e918f45d152e90c6c4e4bd6dd974e.png)

## Asset Management Reports

There are several reports available for the Asset module. Go to the sidemenu tab named *Reports*. Click on the tab or report grouping named *Asset Management* to get into the reports that are offered.

![](./asset-management-module.assets/c4dacfa8cc3ebeeb8bbe5e4e0c52942c.png)

Reports available include:

- <strong>Asset Details</strong> – Use search filters to result a detailed summary report for assets
- <strong>Maintenance History Report</strong> – Use search filters to result a detailed summary of pending and completed maintenance requests
- <strong>Calibration History Report</strong> – Use search filters to result a detailed summary of all pending and completed calibration requests
- <strong>Asset Calibration Due</strong> – Use search filters to result a detailed summary of assets according to Calibration Due dates. Automated emails can be generated to notify the custodian/owner at 90 and 30 days in advance.
- <strong>Warranty Expiration Report</strong> – Use search filters to result a detailed summary of assets according to Service Agreements and when they will expire. Automated emails can be generated to notify the custodian/owner at 90 and 30 days in advance.

![](./asset-management-module.assets/0d59cf13513973c43a9c92582bcd0d5c.png)

## Learning Management System

To learn more about the Asset Management Module, follow the link below to the Learning Management System course:

- [Asset Management](https://mie.talentlms.com/shared/start/key:ZLLDNHRK)
