---
title: "To Restrict Report Access"
date: "2020-03-16T16:58:57.557Z"
url: "functions/reports/to-restrict-report-access.html"
version: 43
id: "1GYFmbEH6_WAX9FHm6nAfTpxTCeVvx5NVvpAh1ZNdkUg"
source: "https://drive.google.com/open?id=1GYFmbEH6_WAX9FHm6nAfTpxTCeVvx5NVvpAh1ZNdkUg"
menu:
    main:
        name: "To Restrict Report Access"
        identifier: "1GYFmbEH6_WAX9FHm6nAfTpxTCeVvx5NVvpAh1ZNdkUg"
        parent: "1tumzkTBh0NospSPjdaGGHBFgQH6_k5j-sFMaSI0VnSY"
        weight: 4310
---
Though MIE will restrict reports for clients, upon request, those users with System Report security permissions may restrict access to reports accessible in the {{% system-name %}} system, via the **System Report** editor. Restricting reports permits ONLY *allowed users* and/or *realms* permission to run/access those reports.



{{% note %}}

If the user has the **Limit to Restricted Items **security setting set to **Yes**, then the user *will not* have access to reports that are unrestricted (i.e., reports that do not have the Restricted box checked in the System Report editor).

{{% /note %}}


## How to Restrict Reports

MIE programs and names all layouts. If a user has the **Manage Layouts** security preference set to **Yes**, that user will be able to access the layout name directly from the report needing restricted. In order to restrict a report, the name of the system report layout to which the report is pointed is necessary. 

![](to-restrict-report-access.images/image1.png)

1. To begin, go to the Reports sidemenu and locate the report needing restricted. Click the <strong>Show Rendered Layout Information</strong> (Inline) icon (![](to-restrict-report-access.images/image2.png)) in the upper-right corner of the window.



![](to-restrict-report-access.images/image3.png)



2. The <strong>Rendered Layouts</strong> dialog box will open. Click the SystemReport link to go to the appropriate layout for editing.



![](to-restrict-report-access.images/image4.png)



3. Once clicked, a warning will be presented emphasizing that a system layout is about to be edited. Click the <strong>Yes, edit this layout</strong> button. 



![](to-restrict-report-access.images/image5.png)



4. Acknowledging the warning will immediately load the Layout Manager, where the user is able to acquire and write down the <strong>Name</strong> of the system report needing restricted. If the necessary security permissions are not provided to access the Layout Manager, contact your MIE Implementer to determine the name of the system report needing restricted.



![](to-restrict-report-access.images/image6.png)



5. With the name of the report (e.g., PatientReferrals) acquired, close the window and navigate to the <strong>Control Panel</strong>.



{{% warning %}} It is very important not to type or make edits or save changes to the system report layout. Any programming changes can cause the system report to break. {{% /warning %}}


6. When clicking the Control Panel sidemenu, users may be warned that they are navigating away from the page. Click to continue.



![](to-restrict-report-access.images/image7.png)



7. Once in the Control Panel, navigate to the <strong>System</strong> tab and locate and select <strong>System Report</strong>.



![](to-restrict-report-access.images/image8.png)



8. Begin typing the name of the report acquired in Step 4, and click <strong>Search</strong>. There may or may not be spaces in the name, but if you need any help, contact your MIE Implementer to determine the correct report to restrict.



![](to-restrict-report-access.images/image9.png)



9. Once the report has been located, click the <strong>Edit</strong> link found to the right, under the Options column. If the option is not available, ensure the proper security permissions have been granted.



![](to-restrict-report-access.images/image10.png)



10. Once clicked, the Edit System Report page will load, defaulted to the Report Info tab. Locate and select the <strong>Restricted</strong> checkbox and utilize the <strong>Allowed Users</strong> and <strong>Allowed Realms</strong> autocompletes to populate any allowed user(s) and/or realm(s).



![](to-restrict-report-access.images/image11.png) 



{{% warning %}} It is very important not to type or make edits to the SQL. Any programming changes can cause the system report to break. Only utilize this page to restrict the report and designate allowed users/realms. {{% /warning %}}




11. With the Restricted box checked, begin typing the user/realm in the appropriate field and select. A restricted report can be allowed for entire realms or individual or groups of users, as appropriate. Populate as many as necessary. Any users or realms not listed will be restricted.



![](to-restrict-report-access.images/image12.png) 



{{% tip %}} To remove an allowed user/realm, simply highlight the name of the user/realm and click the **Remove** button. {{% /tip %}}


12. When all Allowed Users/Realms are added, simply click the <strong>Save</strong> button.



![](to-restrict-report-access.images/image13.png)



13. When a user is restricted from a report, they will be presented with the following message:  ![](to-restrict-report-access.images/image14.png)
