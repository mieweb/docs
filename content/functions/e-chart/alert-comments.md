---
id: '1jFGn402HVgpH5kbNBiv8SjeLXVTEcdfup_IfNmjaD-0'
title: 'Alert Comments'
date: '2025-11-07T19:22:53.512Z'
version: 92
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/system-configuration/document-type-tab/'
  - 'https://docs.enterprisehealth.com/functions/document-management/documents-and-forms/text-documents/'
  - 'https://docs.enterprisehealth.com/functions/document-management/documents-and-forms/document-properties/'
  - 'https://docs.enterprisehealth.com/functions/document-management/documents-and-forms/delete-move-lock-documents/'
source: 'https://drive.google.com/open?id=1jFGn402HVgpH5kbNBiv8SjeLXVTEcdfup_IfNmjaD-0'
wikigdrive: 'v2.15.27'
---
The **Alert Comments** document (WCALERT document type) is found in the [Document Types editor](https://docs.enterprisehealth.com/functions/system-configuration/document-type-tab/) of the  {{% system-name %}} system.  It is an alert comment document you can add to a patient's chart via text method. You can add multiple alert comments to a patient's chart, as needed.

![](../alert-comments.assets/4ee9922b66a83eb55922ed7161fcc963.png)

The alert comments will usually appear in a red Alert Comments banner in the patient's chart.

![](../alert-comments.assets/6066b1f84968e596d3ee8cc3e0f10446.png)

If there is more than one alert comment in a patient's chart, they will be shown in the banner separated by a slash (/) symbol. The most recent alert comment is listed first, followed by older alert comments.

![](../alert-comments.assets/1450848810701dcca5627c963965dddb.png)

To add an alert comment, go to **Add Document** from the patient's chart and filter by **Text**.

Select **Alert Comment**.  (For more information, see our [Text Documents](https://docs.enterprisehealth.com/functions/document-management/documents-and-forms/text-documents/) online help.)

![](../alert-comments.assets/980b96ecdf487c728314032ca537dadd.png)

Begin typing your alert comment regarding the patient in the body of the document.

![](../alert-comments.assets/8043424b89289f89d17738c6525b4ea2.png)

When you have entered in the alert comment, click the **Add Document** button below the text field. This will save and upload the alert comment into the patient's chart.  The alert comment is also saved as its own document within the patient's chart.

![](../alert-comments.assets/334dd9703350ea2ad35c0479dde31ce7.png)

To edit an alert comment you can click on the specific alert in the patient's header that you wish to edit (you must have security permission to edit documents).

![](../alert-comments.assets/60f08dad68e7844fcbfbb2722086cc59.png)

The alert document will open, and the user can then select the **Edit** hyperlink to begin editing the alert comment.

![](../alert-comments.assets/80271a10303303fa8390fe3bf863dbf9.png)

To delete an alert comment, simply click on the specific alert from the patient header needing deleted. Then, click the **Properties** hyperlink to get into the alert document properties.

![](../alert-comments.assets/21bd742399401ae7b3268648c6af1e4a.png)

From there, with the proper security permissions, the user will be able to select the **Delete** hyperlink and provide a reason for the deletion.  Once deleted, the alert comment is removed from the red banner of the patient header.

![](../alert-comments.assets/8bd60e4e0eb4cf679c6bec2a1967b0c8.png)

See additional information in our [Document Properties](https://docs.enterprisehealth.com/functions/document-management/documents-and-forms/document-properties/) and [Delete-Move-Lock Documents](https://docs.enterprisehealth.com/functions/document-management/documents-and-forms/delete-move-lock-documents/) online help content.

{{% tip %}}
The system setting E-Chart, Defaults, Alert Comment Cutoff can be set with a numerical value.  The number set here as the value will be the number of characters an alert comment will cut off within the Warnings & Alerts portlet of the Patient Summary chart tab.  This system setting does not affect or cut any alert text off the patient header where alerts show or the sidechart feature.



![](../alert-comments.assets/fbbc9105f3b5f825ad6e5a88e2ebe2d9.png)



In this example, the system setting is set to cut off after 10 characters on an alert comment.  It will respect as such in the portlet named Warnings & Alerts.  To see the entire alert comment text, simply hover your mouse over the alert comment and you will see the full comment.



![](../alert-comments.assets/111ec2dc29aae1ee2325f2721bfc863b.png)




{{% /tip %}}
