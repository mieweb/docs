---
title: "Patient Chart File Export"
date: 2020-02-27T20:24:55.247Z
url: "general-functionality/system-administration/data-migration/patient-chart-file-export.html"
version: 30
id: 1EOhzGm1utIoDgMwAXYSgX21_R9PjjHjGErpdw56hqUM
source: https://drive.google.com/open?id=1EOhzGm1utIoDgMwAXYSgX21_R9PjjHjGErpdw56hqUM
menu:
    main:
        name: "Patient Chart File Export"
        identifier: "1EOhzGm1utIoDgMwAXYSgX21_R9PjjHjGErpdw56hqUM"
        parent: "1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU"
        weight: 4850
---
There are a few ways to export the patient's chart file into different formats. You can export the patient's chart files by using any of those methods.

## Patient Summary Tab

To export a patient's chart file, get into the specific patient's E-Chart, then click on the Patient Summary chart tab.

![](../../../external_files/31342caa56d86169bf5afbd39d668b2a.png)

In the Patient Summary screen, you will see various portlets you have selected for your personal view. To export a patient's chart file, you need to find the section named **Patient Chart File Export**.

![](../../../external_files/0d9f964667beb2829d27d964fe55caf7.png)

If you do not see the *Patient Chart File Export* section in the summary view, please click *Select Portlets* at the top right corner of the screen.

![](../../../external_files/b4791f231c97344fcb3f179dfdc1981b.png)

The available portlets will open in a pop-up window for your selection. Checkmark *Patient Chart File Export* portlet then click the SAVE button. This will then add the section *Patient Chart File Export* to your Patient Summary view. This is a user preference selection and will not affect any other user.

![](../../../external_files/377f3cd6e64ff709629aac4d68c578f7.png)

It will refresh you back to the patient's summary view and it will show the section(s) you selected for your view at the end of the columns. You can ‘move' the section to where you want to on the Patient Summary view.

See other help documentation named *Patient Summary-Interactive Chart Tab.pdf* for instructions on how to move and more details on how to manage the Patient Summary view screen to your preference.

### Patient Chart File Export

In the Patient Chart File Export section of the Patient Summary tab view, you can click on a link to generate a file for a specific format. Once the file is created on the screen, you may choose to save the tile to your preferred location or preferred media type (flash drive, burn to cd, etc).

![](../../../external_files/5151a1a6ce40cb827adee4b7a30da7f3.png)

There are help bubbles next to each file type to help explain what that type of record or document is. Click on the help bubble or hover your mouse over it to expand and open the help window for each file type.

![](../../../external_files/d5a9ca94c61edb9038a779075b6a1842.png)

* <strong>CCD (Continuity of Care Document):</strong> The Continuity of Care Document (CCD) specification is an XML-based markup standard intended to specify the encoding, structure and semantics of a patient summary clinical document for exchange. It is a constraint of the HL7 Clinical Document Architecture standard. Click this link to create a CCD document (Continuity of Care Document). CCD is a different XML format that is supported by some systems (instead of CCR).
* <strong>CCR (Continuity of Care Record)</strong> The CCR standard is a patient health summary standard. It is a way to create flexible documents that contain the most relevant and timely core health information about a patient, and to send these electronically from one caregiver to another.

Once you click on one of the file type links provided, it will open up the specially formatted XML version of their medical record in a separate window. The user can then choose to save it or onto a media device for the patient, or whatever they may choose.

![](../../../external_files/4533afa5348c557ada588d4b637fb7bf.png)

### Store Document

The link *store document* when clicked will store a CCR document into the patient's chart. It stores as doc.type WCCCR and will be housed in the chart tab(s) your system has specified for that doc.type. You can easily *send* a CCR from the document properties when it's stored in the patient's chart, etc. The ‘location' this document stores as is a system setting and is default set to OFFICE location type. Contact your MIE Implementer if you need that changed.

![](../../../external_files/630d23f3260c2f50a79a0f9bcbfd609d.png)

When you click *store document* from this portlet, you will then see this message in the portlet section:

![](../../../external_files/9956709064a629bf9854974131c46937.png)

Your CCR document is usually in the *doc.sum* chart tab or in a NoMoreClipboard chart tab (if applicable) as a doc.id and stored as doc.type WCCCR (Continuity of Care Record). CCR's and CCD's cannot be printed. They are used for electronic import or export only.

![](../../../external_files/ca8919c8cbb45a1383d75cf7a076be49.png)

