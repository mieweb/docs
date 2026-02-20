---
id: '1EOhzGm1utIoDgMwAXYSgX21_R9PjjHjGErpdw56hqUM'
title: 'Patient Chart File Export'
date: '2025-11-12T18:58:03.590Z'
version: 63
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://docs.enterprisehealth.com/functions/e-chart/patient-summary-interactive-chart-tab/'
source: 'https://drive.google.com/open?id=1EOhzGm1utIoDgMwAXYSgX21_R9PjjHjGErpdw56hqUM'
wikigdrive: 'v2.16.0'
---
There are a few ways to export the patient's chart file into different formats. You can export the patient's chart files by using any of those methods.

## Patient Summary Tab

To export a patient's chart file, search for the patient chart from the E-Chart side menu. The Summary tab will display once the patient chart is selected.

![](./patient-chart-file-export.assets/ef2efb593321139d0dbe7318f87bc86e.png)

In the Patient Summary screen, you will see various portlets you have selected for your personal view. To export a patient's chart file, you need to find the section named **Patient Chart File Export**.

![](./patient-chart-file-export.assets/37a9bbc77b4c2838c6d7ae8195c2d5af.png)

If you do not see the *Patient Chart File Export* section in the summary view, please click *Select Portlets* at the top right corner of the screen.

![](./patient-chart-file-export.assets/9466e834c4b7971a1cf939dacb7aec6d.png)

The available portlets will open in a pop-up window for your selection. Checkmark *Patient Chart File Export* portlet then click the SAVE button. This will then add the section *Patient Chart File Export* to your Patient Summary view. This is a user preference selection and will not affect any other user.

![](./patient-chart-file-export.assets/21165481c7003413d848a204d61b1bd3.png)

It will refresh you back to the patient's summary view and it will show the section(s) you selected for your view at the end of the columns. You can ‘move' the section to where you want to on the Patient Summary view.

See other help documentation named [Patient Summary-Interactive Chart Tab](https://docs.enterprisehealth.com/functions/e-chart/patient-summary-interactive-chart-tab/) for instructions on how to move and more details on how to manage the Patient Summary view screen to your preference.

### Patient Chart File Export

In the Patient Chart File Export section of the Patient Summary tab view, you can click on a link to generate a file for a specific format. Once the file is created on the screen, you may choose to save the tile to your preferred location or preferred media type (flash drive, burn to cd, etc).

![](./patient-chart-file-export.assets/7d72430a1ffd779cb711f95923dc618a.png)

There are help bubbles next to each file type to help explain what that type of record or document is. Click on the help bubble or hover your mouse over it to expand and open the help window for each file type.

![](./patient-chart-file-export.assets/094e8b25b16e25620a8a4925d0ab8c4c.png)

* <strong>CCDA (Continuity of Care Document):</strong> The Continuity of Care Document Architecture (CCDA) specification is an XML-based markup standard intended to specify the encoding, structure and semantics of a patient summary clinical document for exchange. It is a constraint of the HL7 Clinical Document Architecture standard. Click this link to create a CCD document (Continuity of Care Document). CCD is a different XML format that is supported by some systems (instead of CCR).
* <strong>CCR (Continuity of Care Record)</strong> The CCR standard is a patient health summary standard. It is a way to create flexible documents that contain the most relevant and timely core health information about a patient, and to send these electronically from one caregiver to another.

Once you click on one of the file type links provided, it will open up the specially formatted XML version of their medical record in a separate window. The user can then choose to save it or onto a media device for the patient, or whatever they may choose.

![](./patient-chart-file-export.assets/bfe5596e2412e02f8f4bdede6bfd4636.png)

### Store Document

The link *store document* when clicked will store a CCDA document into the patient's chart. It stores as doc.type WCCDA and will be housed in the chart tab(s) your system has specified for that doc.type. You can easily *send* a CCDA from the document properties when it's stored in the patient's chart, etc. The ‘location' this document stores as is a system setting and is default set to OFFICE location type. Contact your MIE Implementer if you need that changed.

![](./patient-chart-file-export.assets/4d98e3d4644a3c144f6d92280adf75ba.png)

When you click *store document* from this portlet, you will then see this message in the portlet section:

![](./patient-chart-file-export.assets/e53700db1c90a5d1789b65832a0d71c4.png)

Your CCDA document is usually in the *doc.sum* chart tab or in a NoMoreClipboard chart tab (if applicable) as a doc.id and stored as doc.type WCCDA (Continuity of Care Record). CCR's and CCD's cannot be printed. They are used for electronic import or export only.

![](./patient-chart-file-export.assets/42bd987c99222a9fcedfde85988c1d6b.png)
