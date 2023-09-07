---
id: '1g8JJcZXl_9lx-H2Yp7EgvKwtUxquYk8aNTFl7ov1WtQ'
title: 'Asset Management Module'
date: '2020-02-27T20:30:03.349Z'
version: 54
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1g8JJcZXl_9lx-H2Yp7EgvKwtUxquYk8aNTFl7ov1WtQ'
wikigdrive: '74f4d1b504045661a4a97b0e3aea1d65b95f37ab'
menu:
  main:
    name: 'Asset Management Module'
    identifier: '1g8JJcZXl_9lx-H2Yp7EgvKwtUxquYk8aNTFl7ov1WtQ'
    parent: '1aHv0u59NGVLFrvGN1I8FETs0j2WrIH_elfLoJjkL-ek'
    weight: 5640
---
The Asset Management Module allows users to track equipment assigned to users, warranty information, maintenance request and calibration requirements. The module includes creating work orders, calibration requests and tracks these items over time. The module includes automation of notification 90 and 30 days prior to when calibration, service agreements, warranties and insurance policies are due or will expire. There is robust reporting included. Please verify with your MIE implementer that your system has been prepared to use the Asset Management Module. MIE Implementer must set up this module to be used in your  {{% system-name %}}  system and must have the two committed layout encounters & visit types enabled/activated on your system for use.
  
![](../asset-management-module.assets/934eec78e06393292df8c7538f6e6f2e.png)  

  
## Current Assets & Search Filter  
  
The Asset Management tab is located on the left sidemenu. Click the Asset tab to get into the module.
  
![](../asset-management-module.assets/bbdb77ebfc63a74b3c4929edb5b6f602.png)  

The Asset Module home page opens and lists all current Assets registered in the system on the left, while assets assigned to "you" (the logged in user) are listed on the right.
  
![](../asset-management-module.assets/17c2c7bc53ef5fe9bcdb2ed40886d683.png)  

Use the search criteria to filter and narrow down results by Asset Name, one or more location or one or more clinics (sites).
  
![](../asset-management-module.assets/8da54f805913b611a082b288b1118fe0.png)  

  
## Adding a New Asset  


Click the Add New Asset hyperlink found in the Asset module at the top left corner of the screen.

  
![](../asset-management-module.assets/b8b404740f0711675fb28982eafc9de1.png)  


The  
_  
Enter Asset Information  
_  
screen will appear. Type in the name of the asset you wish to add to the system and click  
_  
Register Asset  
_  
button.

  
![](../asset-management-module.assets/8716e81be8112811e9a21c06848d1de6.png)  


Once you've registered a new asset, the system will automatically assign it an Asset ID # (Asset Medical Record partition number) and will open you to the  
_  
Asset Details  
_  
screen. Here you enter in all the detailed information for the new asset.

  
![](../asset-management-module.assets/f10bca002576a07eb499c771e7bfc136.png)  


Complete each relevant field for your asset.

* Name
* Brand Name
* Serial number
* Cost Center
* Unit Number (Use this field when multiples of the same type are present as in 1 of 6)
* Status (Active, Inactive or Sold allows sorting in reports)
* Select Location from the drop down menu.

Select an Asset Type:

* Capital
* Non-Capital
* Third Party. <em>Note: If Third Party is selected, the section will expand to add more information regarding the Third Party Owner's specific information.</em>

Add an Asset Category using the auto-complete. You can hit the ↓ down arrow key on your keyboard to see the list of current choices. The Asset Category selection list is customizable. Please contact your MIE Implementer for assistance. This field will be available as a filter in reporting.


By default there is an AED asset category available which expands to open other component entry fields regarding dates of the AED.  
{{% system-name %}}
will monitor these expiration dates and send email notification to the asset custodian 90 days and 30 days in advance of the expiration dates so that replacements may be ordered.

  
![](../asset-management-module.assets/0ec12e8344d1b3096e80b98a212dc53e.png)  


Continue to complete the remaining fields for your asset if applicable:

* Vendor
* Purchase Date
* Purchase Price
* Usage Time Estimate
* Useful Life
* Sold Date (future – Displays when Status is Sold )
* Sold Price(future – Displays when Status is Sold)

Add the Custodian or Owner of the Asset. The username field is an auto-complete from the list of users in the system.
*
Custodian
*
is usually someone responsible in the department for all the maintenance, calibration schedules and the equipment is communal (such as an audiometer). An
*
owner
*
is someone that has possession of the equipment and it is dedicated to their use like a laptop or cell phone.


Select the appropriate Role from the drop-down and click the ADD button.

  
![](../asset-management-module.assets/474590c46780f8bc313106cc8d708c29.png)  


Calibration: Does the asset require routine calibration? If Yes, select the Yes radio button. The section will then expand to include fields to enter in calibration frequency.. The Last Calibration Date will display automatically when it's entered in from the Calibration Request encounter. The Next Calibration Date will auto-populate once a Calibration Request encounter has been completed.

  
![](../asset-management-module.assets/225b120c5d512c226ec803bd02acac6c.png)  


Maintenance: Enter maintenance tracking information in the maintenance section.

  
![](../asset-management-module.assets/bbaa2c7f3aecb438664d681dcf9c517f.png)  

* Warranty/Guarantee Expiration Date
* Insurance Policy
   * If Yes, the section will expand to record relevant insurance policy details.
* Maintenance Agreement
   * If Yes, the section will expand to record relevant maintenance agreement details.
   * The maintenance agreement <em>Contract Expiration</em> date field is used for automatic notification of expiration to the owner at 90 and 30 days prior to the date via email cron job.
* Date of Last Maintenance will be populated from the Maintenance encounter.
* Enter comments as needed.
* Link to Service Manual: Add the URL link for any service manual if available.
  
## Adding a Maintenance Request  

A Maintenance encounter is available to create a work order style document to track maintenance requests for each specific asset. There is also a report to track outstanding maintenance requests and a detailed list of maintenance completed on each asset.
To add a Maintenance request, you will be working in a Maintenance Request encounter.
First be in the Assets module via the left sidemenu tab.
Next you must get into the specific asset that you need to open a Maintenance Request for. This is just like getting into a patient's chart, you must first get into the specific asset chart you need to be in.
  
![](../asset-management-module.assets/d5dec5174113add3799e62d5c212cc0f.png)  

Once in the specific asset chart (Asset Details screen), click on the *Maintenance* tab at the top. Here you will see a history of Asset Maintenance Requests. The *open maintenance requests* is the top section that shows open/pending maintenance requests. The *closed maintenance requests* section is below that of closed requests. You can get into an existing one (open or closed), but to add a new request you would click the hyperlink New Maintenance Request to start a new request (new encounter). Please make sure to review the list of open maintenance requests prior to creating a new one.
  
![](../asset-management-module.assets/0a1aa818850e6d80500db6b790730df7.png)  

The Maintenance Request Encounter will open in another screen tab and pre-populate detailed information for the listed asset from previous entered info. Any Service Agreement vendor information will also be displayed in the encounter from the details page.
  
![](../asset-management-module.assets/ca6eea263724c736aa322bcc58cde2cc.png)  

Fill out the Maintenance Requested Date, Requested By and edit any Maintenance Provider info fields.
Enter the reason for maintenance in the *Issue Description* free text box.
You can then save the encounter and go to the "view "of the encounter and print that to use as a work order. Leave this encounter "open" in pending status until the maintenance has been completed. This encounter will continue to show in the *Open Maintenance Requests* for that specific asset until closed & archived (completed request).
  
![](../asset-management-module.assets/53ad8ed872623ec9a2b1c097c8b421b3.png)  

  
## Complete a Maintenance Request  

If a maintenance request on an asset is complete, you need to finish that open/pending request encounter and close/archive it. You would go to the Assets module and get into the specific asset chart you need. Then click the *Maintenance* tab at the top. Find the existing open/pending encounter for that specific asset. On the right side in the options column, click on the hyperlink to take you into the Asset Maintenance (hyperlink named Asset Maintenance).
  
![](../asset-management-module.assets/1fc69cb92f4a24ea1bddd8e9286cda26.png)  

The encounter will open in its current status. Go down and enter the resolution to the problem in the *Maintenance Resolution* free text box to assist with determining recurring problems with this asset. The field *Calibration Requirement* displays from the details page for your reference.
  
![](../asset-management-module.assets/a3d017d86a810ef2ef35df8d8c6e34c4.png)  

Click the MAINTENANCE COMPLETED button to close & archive this encounter to signify the Maintenance Request is complete. It will close this encounter and be placed *Closed Maintenance Requests* section of the encounter summary for Maintenance Requests in that specific asset.
  
![](../asset-management-module.assets/35df87b0709817144dba7154c02a948c.png)  

  
## Adding a Calibration Request  

Some equipment (assets) require calibration on a set time line such as annually. The Asset Management module will track completed calibration dates, automatically generate an email to the equipment owner/custodian at both 90 and 30 days prior to the due date, and create a work order type document for pending requests.
A Calibration encounter is available to create a work order style document to track calibration requests for each specific asset. There is also a report to track outstanding calibration requests and a detailed list of calibrations completed on each asset.
To add a Calibration request, you will be working in a Calibration Request encounter.
First be in the Assets module via the left sidemenu tab.
Next you must get into the specific asset that you need to open a Calibration Request for. This is just like getting into a patient's chart, you must first get into the specific asset chart you need to be in.
  
![](../asset-management-module.assets/f6fc79ea1e5215561001028eacc54c8d.png)  

Once in the specific asset chart (Asset Details screen), click on the *Calibration* tab at the top. Here you will see a history of Asset Calibration Requests. The *open calibration requests* is the top section that shows open/pending calibration requests. The *closed calibration requests* section is below that of closed requests. You can get into an existing one (open or closed), but to add a new request you would click the hyperlink New Calibration Request to start a new request (new encounter). Please make sure to review the list of open calibration requests prior to creating a new one.
  
![](../asset-management-module.assets/7283fca9a08e4963704344171559f543.png)  

The Calibration Request Encounter will open in another screen tab and pre-populate relative information for the listed asset from previous entered info.
  
![](../asset-management-module.assets/134f3bb129eb56ca29a510f05a8f9c14.png)  

Enter any relevant comments in the *Calibration Comments* free text box.
*Calibration Frequency* field displays information that was previously added in the Asset details page.
  
![](../asset-management-module.assets/df263ff55ee4c83a01967d0a0a24c426.png)  

You can then save the encounter and go to the "view "of the encounter and print that to use as a work order. Leave this encounter "open" in pending status until the calibration has been completed. This encounter will continue to show in the *Open Calibration Requests* for that specific asset until closed & archived (completed request).
  
![](../asset-management-module.assets/6c6bf6dba2e50b0b724ec242aa5dfc07.png)  

  
## Complete a Calibration Request  

If a calibration request on an asset is complete, you need to finish that open/pending request encounter and close/archive it. You would go to the Assets module and get into the specific asset chart you need. Then click the *Calibration* tab at the top. Find the existing open/pending encounter for that specific asset. On the right side in the options column, click on the hyperlink to take you into the Asset Calibration (hyperlink named Asset Calibration).
  
![](../asset-management-module.assets/14ceba23fd6daee8c705a8a5c71857ef.png)  

The encounter will open in its current status. Go down and enter the *Next Calibration Date* once this calibration request is completed. The date you enter here will also display on the asset details page.
  
![](../asset-management-module.assets/daf014525436f1bd0ed0492b0126b003.png)  

Click the CALIBRATION COMPLETED button to close & archive this encounter to signify the Calibration Request is complete. It will close this encounter and be placed *Closed Calibration Requests* section of the encounter summary for Calibration Requests in that specific asset.
  
![](../asset-management-module.assets/356dd11534d29faede2dac8aff239250.png)  

  
## Asset Management Reports  

There are several reports available for the Asset module. Go to the sidemenu tab named *Reports*. Click on the tab or report grouping named *Asset Management* to get into the reports that are offered.
  
![](../asset-management-module.assets/87ad76a948e25c934abec4eca7432ab3.png)  

Reports available include:
* <strong>Asset Details</strong> – Use search filters to result a detailed summary report for assets
* <strong>Asset Maintenance Report</strong> – Use search filters to result a detailed summary of pending and completed maintenance requests
* <strong>Asset Calibration Report</strong> – Use search filters to result a detailed summary of all pending and completed calibration requests
* <strong>Asset Calibration Due</strong> – Use search filters to result a detailed summary of assets according to Calibration Due dates. Automated emails can be generated to notify the custodian/owner at 90 and 30 days in advance.
* <strong>Warranty and Service Agreement Expiration Report</strong> – Use search filters to result a detailed summary of assets according to Service Agreements and when they will expire. Automated emails can be generated to notify the custodian/owner at 90 and 30 days in advance.
  
![](../asset-management-module.assets/48b71abed3fa9e86f115c9f9bff4a6d2.png)  

