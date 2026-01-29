---
id: "1ynchkbKzWhhaIYl6ZC0JuArvelIFEa61YAf6pgsCn14"
title: "Accessibility Conformance Report VPAT2.5Rev_INT_February2025"
date: "2025-07-31T20:46:48.453Z"
version: 208
lastAuthor: "janderson"
mimeType: "text/x-markdown"
links:
  - "mailto:support@mieweb.com"
  - "https://www.mieweb.com"
  - "http://www.w3.org/TR/2008/REC-WCAG20-20081211"
  - "https://www.w3.org/TR/WCAG21"
  - "https://www.w3.org/TR/WCAG22/"
  - "https://www.access-board.gov/ict/"
  - "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.01.01_60/en_301549v030101p.pdf"
  - "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf"
  - "https://www.w3.org/TR/WCAG21/"
  - "http://www.w3.org/TR/WCAG20/"
  - "https://www.w3.org/WAI/WCAG20/errata/"
  - "https://www.w3.org/WAI/WCAG21/errata/"
source: "https://drive.google.com/open?id=1ynchkbKzWhhaIYl6ZC0JuArvelIFEa61YAf6pgsCn14"
wikigdrive: "v2.15.30"
---

- [<strong>Medical Informatics Engineering</strong> ](#medical-informatics-engineering)<strong>1</strong>
- [<strong>Accessibility Conformance Report</strong> ](#accessibility-conformance-report)<strong>1</strong>
- [Applicable Standards/Guidelines ](#applicable-standards-guidelines)3
- [Terms ](#terms)3
- [WCAG 2.x Report ](#wcag-2-x-report)4
- [Table 1: Success Criteria, Level A ](#table-1-success-criteria-level-a)4
- [Table 2: Success Criteria, Level AA ](#table-2-success-criteria-level-aa)22
- [Table 3: Success Criteria, Level AAA ](#table-3-success-criteria-level-aaa)35
- [Revised Section 508 Report ](#revised-section-508-report)35
- [Chapter 3: Functional Performance Criteria (FPC) ](#chapter-3-functional-performance-criteria-fpc)36
- [Chapter 4: Hardware ](#chapter-4-hardware)37
- [Chapter 5: Software ](#chapter-5-software)37
- [Chapter 6: Support Documentation and Services ](#chapter-6-support-documentation-and-services)40
- [EN 301 549 Report ](#en-301-549-report)40
- [Clause 4: Functional Performance Statements (FPS) ](#clause-4-functional-performance-statements-fps)41
- [Clause 5: Generic Requirements ](#clause-5-generic-requirements)42
- [Clause 6: ICT with Two-Way Voice Communication ](#clause-6-ict-with-two-way-voice-communication)42
- [Clause 7: ICT with Video Capabilities ](#clause-7-ict-with-video-capabilities)43
- [Clause 8: Hardware ](#clause-8-hardware)44
- [Clause 9: Web ](#clause-9-web)44
- [Clause 10: Non-Web Documents ](#clause-10-non-web-documents)45
- [Clause 11: Software ](#clause-11-software)45
- [Clause 12: Documentation and Support Services ](#clause-12-documentation-and-support-services)48
- [Clause 13: ICT Providing Relay or Emergency Service Access ](#clause-13-ict-providing-relay-or-emergency-service-access)49
- [Legal Disclaimer (Company) ](#legal-disclaimer-company)51

# Medical Informatics Engineering

# Accessibility Conformance Report

**International Edition**

**(Based on VPAT**®** Version 2.5Rev)**

**Name of Product/Version: Patient Portal for WebChart EHR / Enterprise Health EHR**

**Report Date: July 6th, 2025**

**Product Description:**

The **WebChart/EnterpriseHealth Patient Portal** is designed to meet the evolving accessibility and usability needs of all users, including individuals with disabilities. In alignment with Section 508 of the Rehabilitation Act and the Web Content Accessibility Guidelines (WCAG) 2.1, WebChart's portal interface is evaluated and documented using **VPAT® Version 2.5Rev**, ensuring transparency and compliance with accessibility standards.

Through a secure, user-friendly interface, the portal provides the following accessible features:

- <strong>Patient Engagement Tools</strong>: Review clinical documentation, lab results, and health summaries with screen reader support and keyboard navigation.
- <strong>Appointment Management</strong>: Easily schedule or cancel appointments through accessible forms and intuitive workflows.
- <strong>Communication</strong>: Securely message providers and support staff using accessible messaging tools.
- <strong>Health Tracking</strong>: Access due lists, work certifications, and wellness status with clearly structured and labeled data fields.
- <strong>Questionnaire Completion</strong>: Fill out pre-visit forms or assessments via accessible web forms that support assistive technologies.

The WebChart system ensures that individuals of all abilities can navigate the portal independently and effectively. Accessibility testing and documentation under VPAT 2.5Rev covers conformance to:

- WCAG 2.1 A & AA standards
- Revised Section 508 standards (2017)
- EN 301 549 (EU accessibility standard)

For procurement officers, clinicians, and IT teams evaluating accessibility, the WebChart Patient Portal VPAT 2.5Rev provides a comprehensive and standardized view of the portal's accessibility conformance.

**Contact Information:**

Phone: +1 (260) 459-6270

Email: [support@mieweb.com](mailto:support@mieweb.com)

Website: https://www.mieweb.com

Address:

Medical Informatics Engineering, Inc.

1690 Broadway, STE 550

Fort Wayne, IN 46802

USA

[Source Document](#source-document)

**Notes:**

This Accessibility Conformance Report reflects the current status of conformance for WebChart EHR / Enterprise Health EHR as evaluated against the applicable accessibility standards, including WCAG 2.1 and EN 301 549. The evaluation covers core functionality available through supported web browsers.

Custom configurations, third-party integrations, and user-generated content may impact accessibility and are not fully addressed in this report. Medical Informatics Engineering is committed to continuous improvement of product accessibility and will provide updated conformance reports upon significant changes or new releases.

For additional information or accessibility support, please contact us using the details provided above.

**Evaluation Methods Used:**

Medical Informatics Engineering conducted this accessibility evaluation using a combination of automated testing, manual inspection, and assistive technology testing. The evaluation was performed against the Web Content Accessibility Guidelines (WCAG) 2.1 Level A and AA success criteria, as well as applicable clauses of EN 301 549.

The assessment included:

*Automated testing using Axe to identify common accessibility issues
*Manual keyboard-only navigation testing
*Screen reader compatibility testing using NVDA and JAWS
*Visual inspection to verify semantic HTML, ARIA attributes, color contrast, and content structure
\*Functional testing in supported web browsers, including Chrome, Firefox, and Edge

This evaluation reflects the accessibility of the default configuration of WebChart EHR / Enterprise Health EHR in a representative usage environment.

Conformance Language and Terminology Clarification:

To ensure consistency, Medical Informatics Engineering is standardizing its use of conformance terms such as "Supports with Exceptions" and "Partially Supports." These terms are now applied more precisely to align with ITI VPAT 2.5Rev guidance and avoid ambiguity in borderline cases (e.g., between functional limitations vs. minor known defects).

Additionally, ongoing efforts are in place to ensure that Section 508 and EN 301 549 clauses are cross-referenced consistently with relevant WCAG Success Criteria throughout the report, enhancing traceability and clarity for evaluators.

## Applicable Standards/Guidelines

This report covers the degree of conformance for the following accessibility standard/guidelines:

<table>
<tr>
<td><strong>Standard/Guideline</strong></td>
<td><strong>Included In Report</strong></td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211">Web Content Accessibility Guidelines 2.0</a></td>
<td>Level A (Yes)<br />
Level AA (Yes)<br />
Level AAA (Yes)</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG21">Web Content Accessibility Guidelines 2.1</a></td>
<td>Level A (Yes)<br />
Level AA (Yes)<br />
Level AAA (Yes)</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG22/">Web Content Accessibility Guidelines 2.2</a></td>
<td>Level A (Yes)<br />
Level AA (Yes)<br />
Level AAA (Yes)</td>
</tr>
<tr>
<td><a href="https://www.access-board.gov/ict/">Revised Section 508 standards published January 18, 2017 and corrected January 22, 2018</a></td>
<td>(Yes)</td>
</tr>
<tr>
<td><a href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.01.01_60/en_301549v030101p.pdf">EN 301 549 Accessibility requirements for ICT products and services - V3.1.1 (2019-11)</a><em> AND</em> <a href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf">EN 301 549 Accessibility requirements for ICT products and services - V3.2.1 (2021-03)</a></td>
<td>(Yes)</td>
</tr>
</table>
## Terms

The terms used in the Conformance Level information are defined as follows:

- <strong>Supports</strong>: The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation.
- <strong>Partially Supports</strong>: Some functionality of the product does not meet the criterion.
- <strong>Does Not Support</strong>: The majority of product functionality does not meet the criterion.
- <strong>Not Applicable</strong>: The criterion is not relevant to the product.
- <strong>Not Evaluated</strong>: The product has not been evaluated against the criterion. This can only be used in WCAG Level AAA criteria.

- [<strong>Medical Informatics Engineering</strong> ](#medical-informatics-engineering)<strong>1</strong>
- [<strong>Accessibility Conformance Report</strong> ](#accessibility-conformance-report)<strong>1</strong>
- [Applicable Standards/Guidelines ](#applicable-standards-guidelines)3
- [Terms ](#terms)3
- [WCAG 2.x Report ](#wcag-2-x-report)4
- [Table 1: Success Criteria, Level A ](#table-1-success-criteria-level-a)4
- [Table 2: Success Criteria, Level AA ](#table-2-success-criteria-level-aa)22
- [Table 3: Success Criteria, Level AAA ](#table-3-success-criteria-level-aaa)35
- [Revised Section 508 Report ](#revised-section-508-report)35
- [Chapter 3: Functional Performance Criteria (FPC) ](#chapter-3-functional-performance-criteria-fpc)36
- [Chapter 4: Hardware ](#chapter-4-hardware)37
- [Chapter 5: Software ](#chapter-5-software)37
- [Chapter 6: Support Documentation and Services ](#chapter-6-support-documentation-and-services)40
- [EN 301 549 Report ](#en-301-549-report)40
- [Clause 4: Functional Performance Statements (FPS) ](#clause-4-functional-performance-statements-fps)41
- [Clause 5: Generic Requirements ](#clause-5-generic-requirements)42
- [Clause 6: ICT with Two-Way Voice Communication ](#clause-6-ict-with-two-way-voice-communication)42
- [Clause 7: ICT with Video Capabilities ](#clause-7-ict-with-video-capabilities)43
- [Clause 8: Hardware ](#clause-8-hardware)44
- [Clause 9: Web ](#clause-9-web)44
- [Clause 10: Non-Web Documents ](#clause-10-non-web-documents)45
- [Clause 11: Software ](#clause-11-software)45
- [Clause 12: Documentation and Support Services ](#clause-12-documentation-and-support-services)48
- [Clause 13: ICT Providing Relay or Emergency Service Access ](#clause-13-ict-providing-relay-or-emergency-service-access)49
- [Legal Disclaimer (Company) ](#legal-disclaimer-company)51

## WCAG 2.x Report

Tables 1 and 2 also document conformance with:

- EN 301 549:
  - Clause 9 - Web
  - Clauses 10.1-10.4 of Clause 10 - Non-Web documents
  - Clauses 11.1-11.4 and 11.8.2 of Clause 11 - Software
  - Clauses 12.1.2 and 12.2.4 of Clause 12 - Documentation and support services
- Revised Section 508:
  - Chapter 5 - 501.1 Scope and 504.2 Content Creation or Editing
  - Chapter 6 - 602.3 Electronic Support Documentation

Note: When reporting on conformance with the WCAG 2.x Success Criteria, they are scoped for full pages, complete processes, and accessibility-supported ways of using technology as documented in the [WCAG 2.1 Conformance Requirements](https://www.w3.org/TR/WCAG21/#conformance-reqs).

### Table 1: Success Criteria, Level A

Notes:

<table>
<tr>
<td><strong>Criteria</strong></td>
<td><strong>Conformance Level</strong></td>
<td><strong>Remarks and Explanations</strong></td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#text-equiv-all"><strong>1.1.1 Non-text Content</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.1.1.1 (Web)</li><li>10.1.1.1 (Non-web document)</li><li>11.1.1.1.1 (Open Functionality Software)</li><li>11.1.1.1.2 (Closed Functionality Software)</li><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li><li>12.2.4 (Support Docs)</li></ul>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li><li>602.3 (Support Docs)</li></ol></td>
<td>PARTIALLY SUPPORTS</td>
<td>The WebChart Patient Portal provides alternative text for most informative non-text content, including icons, buttons, and illustrative images used throughout the application and documentation. Complex graphics (e.g., charts or infographics) include accompanying descriptions or are linked to explanatory content.<br />
<br />
However, occasional decorative images or legacy elements may lack appropriate alternative text. These instances do not convey meaningful information and are generally marked appropriately for assistive technologies to ignore. Continuous audits are in place to enhance coverage and ensure all meaningful non-text content is accessible.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#media-equiv-av-only-alt"><strong>1.2.1 Audio-only and Video-only (Prerecorded)</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.1.2.1 (Web)</li><li>10.1.2.1 (Non-web document)</li><li>11.1.2.1.1 (Open Functionality Software)</li><li>11.1.2.1.2.1 and 11.1.2.1.2.2 (Closed Software)</li></ul><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal generally avoids the use of standalone audio-only or video-only prerecorded content. When such content is provided, it is accompanied by appropriate alternatives—such as transcripts for audio-only or descriptive text for video-only presentations. However, certain legacy or third-party media may not yet include complete alternatives.<br />
<br />
Efforts are ongoing to review and remediate such media to ensure compliance. All newly developed media content includes required alternatives at the time of publication.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#media-equiv-captions"><strong>1.2.2 Captions (Prerecorded)</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.2.2 (Web)</li><li>10.1.2.2 (Non-web document)</li><li>11.1.2.2 (Open Functionality Software)</li></ol><ol><li>11.1.2.2 (Closed Software)</li><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>Supports with Exceptions</td>
<td>The WebChart Patient Portal provides captions for essential prerecorded instructional and support videos when available. However, not all prerecorded media—particularly older support materials or third-party videos—include synchronized captions. For the best user experience and accessibility, captions will be added to remaining legacy content in upcoming accessibility-focused updates. All new media is produced with captioning standards in mind.<br />
<br />
We recommend users consult alternative formats (e.g., transcripts or help articles) when captions are unavailable.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#media-equiv-audio-desc"><strong>1.2.3 Audio Description or Media Alternative (Prerecorded)</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.2.3 (Web)</li><li>10.1.2.3 (Non-web document)</li><li>11.1.2.3.1 (Open Functionality Software)</li><li>11.1.2.3.2 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>Supports with Exceptions</td>
<td>The WebChart Patient Portal includes limited use of prerecorded multimedia content. For multimedia content that is essential to the clinical or user workflow, text-based alternatives such as transcripts are provided. However, audio descriptions are not consistently available for all prerecorded synchronized media, which may limit accessibility for users who rely on visual content descriptions. Support documentation and help videos may not all have media alternatives at this time.<br />
<br />
Future updates aim to improve conformance by integrating audio descriptions or equivalent alternatives for all prerecorded multimedia content as part of our accessibility roadmap.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic"><strong>1.3.1 Info and Relationships</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.3.1 (Web)</li><li>10.1.3.1 (Non-web document)</li><li>11.1.3.1.1 (Open Functionality Software)</li><li>11.1.3.1.2 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal is designed with semantic HTML, ARIA landmarks, proper heading levels, and form labeling to convey structure and relationships programmatically. This allows users of assistive technologies to understand groupings, hierarchies, and interactive associations such as form field labels, tables, and navigation menus.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#content-structure-separation-sequence"><strong>1.3.2 Meaningful Sequence</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.3.2 (Web)</li><li>10.1.3.2 (Non-web document)</li><li>11.1.3.2.1 (Open Functionality Software)</li><li>11.1.3.2.2 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal presents content in a logical reading order through the use of structured HTML, proper DOM sequencing, and accessible components. Assistive technologies are able to interpret the intended reading and navigation sequence for most content, including forms, tables, and instructional text.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#content-structure-separation-understanding"><strong>1.3.3 Sensory Characteristics</strong></a><strong></strong> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.3.3 (Web)</li><li>10.1.3.3 (Non-web document)</li><li>11.1.3.3 (Open Functionality Software)</li><li>11.1.3.3 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>Supports</td>
<td>The WebChart Patient Portal avoids instructions or cues that rely solely on sensory characteristics such as color, shape, size, or visual location. Interactive elements are described using clear textual labels and identifiers, ensuring that users with visual or cognitive impairments can understand and operate interface components.<br />
<br />
Where references to visual layout are necessary (e.g., tables or grouped form elements), additional contextual descriptions are provided to support comprehension by users relying on screen readers or alternative input methods.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-without-color"><strong>1.4.1 Use of Color</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.4.1 (Web)</li><li>10.1.4.1 (Non-web document)</li><li>11.1.4.1 (Open Functionality Software)</li><li>11.1.4.1 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>Supports</td>
<td>The WebChart Patient Portal does not rely solely on color to convey information, prompt a response, or indicate status. Visual cues such as icons, text labels, underlines, and patterns are used in conjunction with color to ensure accessibility for users with color vision deficiencies.<br />
<br />
Form fields, charts, alerts, and validation messages are implemented with redundant visual indicators (e.g., symbols and screen reader-friendly text) to ensure that information remains perceivable without color perception.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-dis-audio"><strong>1.4.2 Audio Control</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.4.2 (Web)</li><li>10.1.4.2 (Non-web document)</li><li>11.1.4.2 (Open Functionality Software)</li><li>11.1.4.2 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal does not include audio that plays automatically upon page load or without user initiation. In the event that audio content is presented, user-accessible controls (such as play/pause, volume, and mute) are provided to start and stop audio playback.<br />
<br />
This ensures that users can control audio independently and avoid interference with screen readers or other assistive technologies. The platform adheres to best practices for media playback accessibility and user autonomy.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#keyboard-operation-keyboard-operable"><strong>2.1.1 Keyboard</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.2.1.1 (Web)</li><li>10.2.1.1 (Non-web document)</li><li>11.2.1.1.1 (Open Functionality Software)</li><li>11.2.1.1.2 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal is largely operable via keyboard alone, with logical tab ordering and focus management implemented throughout menus, forms, modals, and interactive widgets. Standard keyboard interaction models (e.g., arrow keys for menus, Tab/Shift+Tab for navigation, Enter/Space for activation) are supported.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#keyboard-operation-trapping"><strong>2.1.2 No Keyboard Trap</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.2.1.2 (Web)</li><li>10.2.1.2 (Non-web document)</li><li>11.2.1.2 (Open Functionality Software)</li><li>11.2.1.2 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal is designed to avoid keyboard traps, allowing users to move into and out of all interactive elements using standard keyboard navigation. For the vast majority of interface components—including menus, dialogs, and forms—keyboard focus can be entered and exited without requiring a mouse.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG21/#character-key-shortcuts"><strong>2.1.4 Character Key Shortcuts</strong></a> (Level A 2.1 and 2.2)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.2.1.4 (Web)</li><li>10.2.1.4 (Non-web document)</li><li>11.2.1.4.1 (Open Functionality Software)</li><li>11.2.1.4.2 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508 – Does not apply</td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal does not implement single-character keyboard shortcuts (e.g., unmodified letter, number, punctuation, or symbol keys) in its interface. This avoids conflicts with assistive technologies and prevents accidental activation by users relying on speech input or alternative keyboards.<br />
<br />
Where keyboard shortcuts are used—for example, within administrative or documentation tools—they are either:<br />
<br />
Modifier-key dependent (e.g., Ctrl+ or Alt+ combinations),<br />
Remappable, or<br />
Disablable by the user.<br />
As such, the portal supports full compliance with this criterion by avoiding inaccessible shortcut behavior by design.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#time-limits-required-behaviors"><strong>2.2.1 Timing Adjustable</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.2.2.1 (Web)</li><li>10.2.2.1 (Non-web document)</li><li>11.2.2.1 (Open Functionality Software)</li></ul><ol><li>11.2.2.1 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>Supports with Exceptions</td>
<td>The WebChart Patient Portal minimizes the use of time limits in its design. Where time-based functionality exists—such as session timeouts due to security policies—users are generally provided with advance warnings and the opportunity to extend their session before timeout occurs.<br />
<br />
However, in some cases (e.g., third-party integrations or compliance-enforced session expiration), time adjustments may not be fully configurable by the user. These instances are typically related to privacy, security, or data integrity constraints.<br />
<br />
Where applicable, time-dependent interactions are being reviewed for flexibility, and future enhancements may include extended customization for timing parameters.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#time-limits-pause"><strong>2.2.2 Pause, Stop, Hide</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.2.2.2 (Web)</li><li>10.2.2.2 (Non-web document)</li><li>11.2.2.2 (Open Functionality Software)</li><li>11.2.2.2 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal does not use automatic moving, blinking, scrolling, or auto-updating content that would require user intervention.<br />
<br />
The interface avoids distractions that may interfere with user focus or screen reader comprehension, and conforms to WCAG guidance by ensuring motion is user-controllable or non-essential to content understanding.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#seizure-does-not-violate"><strong>2.3.1 Three Flashes or Below Threshold</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.2.3.1 (Web)</li><li>10.2.3.1 (Non-web document)</li><li>11.2.3.1 (Open Functionality Software)</li><li>11.2.3.1 (Closed Software)</li></ul><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal does not include any content that flashes more than three times per second. Visual elements such as animations, indicators, and notifications are designed with accessibility and user safety in mind, avoiding seizure-inducing content or effects.<br />
<br />
All media and interface components comply with flash and flicker thresholds defined in WCAG 2.1 and EN 301 549, ensuring a safe and comfortable experience for users with photosensitive conditions.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-skip"><strong>2.4.1 Bypass Blocks</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.2.4.1 (Web)</li><li>10.2.4.1 (Non-web document) – Does not apply</li><li>11.2.4.1 (Open Functionality Software) – Does not apply</li></ul><ol><li>11.2.4.1 (Closed Software) – Does not apply</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software) – Does not apply to non-web software</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs) – Does not apply to non-web docs</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal includes mechanisms that allow users to bypass repetitive navigation blocks and directly access main content. A "Skip to main content" link is consistently provided and accessible via keyboard for screen reader and keyboard-only users.<br />
<br />
Landmark regions (e.g., <main>, <nav>, <header>, <footer>) are programmatically defined, enabling assistive technologies to quickly navigate between major content areas. This enhances efficiency and usability, especially for users navigating long or complex pages.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-title"><strong>2.4.2 Page Titled</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.2.4.2 (Web)</li><li>10.2.4.2 (Non-web document)</li><li>11.2.4.2 (Open Functionality Software) - Does not apply</li><li>11.2.4.2 (Closed Software) – Does not apply</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal assigns descriptive and context-appropriate titles to all web pages and views. These titles accurately convey the purpose or content of the page and are programmatically set using the <title> element in the document head.<br />
<br />
This ensures that users of assistive technologies, such as screen readers or screen magnifiers, can quickly understand the context of the current page or task. Titles are dynamically updated for modal dialogs, multi-tab views, and dashboard panels to maintain clarity during navigation.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-order"><strong>2.4.3 Focus Order</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.2.4.3 (Web)</li><li>10.2.4.3 (Non-web document)</li><li>11.2.4.3 (Open Functionality Software)</li></ul><ol><li>11.2.4.3 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal maintains a logical and predictable focus order across all major workflows, ensuring that users navigating via keyboard or assistive technologies can move through content in an intuitive sequence. Focus is managed programmatically in dynamic components such as modal dialogs, form wizards, and interactive tables.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-refs"><strong>2.4.4 Link Purpose (In Context)</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.2.4.4 (Web)</li><li>10.2.4.4 (Non-web document)</li><li>11.2.4.4 (Open Functionality Software)</li><li>11.2.4.4 (Closed Software</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal ensures that the purpose of each hyperlink is clear from the link text alone or from its surrounding context. Links use descriptive phrases rather than ambiguous terms like "click here" or "read more," allowing screen reader users and keyboard navigators to efficiently understand where each link will take them.<br />
<br />
Contextual cues such as headings, adjacent text, and ARIA attributes are used to provide additional clarity when necessary. This design approach supports quick navigation, improves usability, and complies with accessibility best practices.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG21/#pointer-gestures"><strong>2.5.1 Pointer Gestures</strong></a> (Level A 2.1 and 2.2)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.2.5.1 (Web)</li><li>10.2.5.1 (Non-web document)</li><li>11.2.5.1 (Open Functionality Software)</li><li>11.2.5.1 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508 – Does not apply</td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal does not require complex multipoint or path-based gestures (e.g., pinch, swipe, drag) for essential functionality. All interactions can be performed using simple single-pointer inputs such as taps, clicks, or keyboard alternatives.<br />
<br />
Where gestures are available (e.g., swipe for navigation on mobile), they are implemented as enhancements and are always backed by accessible, alternative controls that support keyboard, switch, or voice input users.<br />
<br />
This ensures compatibility with a broad range of assistive technologies and input devices.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG21/#pointer-cancellation"><strong>2.5.2 Pointer Cancellation</strong></a> (Level A 2.1 and 2.2)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.2.5.2 (Web)</li><li>10.2.5.2 (Non-web document)</li><li>11.2.5.2 (Open Functionality Software)</li><li>11.2.5.2 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508 – Does not apply</td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal ensures that activation of pointer input (e.g., mouse click, touchscreen tap) is not triggered solely on the initial down event (e.g., mousedown, touchstart). Instead, actions are either triggered on the up event or are designed to be cancellable before completion, allowing users the opportunity to change their intent before committing to an action.<br />
<br />
This protects against accidental activation and supports users with tremors, touch instability, or alternate input methods. Wherever possible, the system also includes visible feedback (such as focus indication or button states) to reinforce safe interaction before final activation.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG21/#label-in-name"><strong>2.5.3 Label in Name</strong></a> (Level A 2.1 and 2.2)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.2.5.3 (Web)</li><li>10.2.5.3 (Non-web document)</li><li>11.2.5.3.1 (Open Functionality Software)</li><li>11.2.5.3.2 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508 – Does not apply</td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal ensures that user interface components with visible text labels—such as buttons, links, and form controls—have accessible names that include the visible text. This alignment supports compatibility with voice recognition technologies by enabling users to activate controls using the same text they see on screen.<br />
<br />
Accessible names are implemented via semantic HTML (<label> elements, aria-label, aria-labelledby) and tested to confirm that screen readers and voice input software can interpret and interact with these elements effectively.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG21/#motion-actuation"><strong>2.5.4 Motion Actuation</strong></a> (Level A 2.1 and 2.2)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.2.5.4 (Web)</li><li>10.2.5.4 (Non-web document)</li><li>11.2.5.4 (Open Functionality Software)</li><li>11.2.5.4 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508 – Does not apply</td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal does not require or rely on motion actuation (such as device tilting, shaking, or gestures based on device movement) for any functionality. All interactions can be completed using standard touch, mouse, keyboard, or assistive input methods.<br />
<br />
In the event that motion-based inputs are introduced in future versions (e.g., for mobile health integrations), they will be fully optional and accompanied by alternative input mechanisms to ensure accessibility for users with motor impairments or devices that do not support motion input.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#meaning-doc-lang-id"><strong>3.1.1 Language of Page</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.3.1.1 (Web)</li><li>10.3.1.1 (Non-web document)</li><li>11.3.1.1.1 (Open Functionality Software)</li></ul><ol><li>11.3.1.1.2 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>Supports with Exceptions</td>
<td>The WebChart Patient Portal sets the primary language of its web content programmatically using the lang attribute (e.g., <html lang="en">), and most official documentation includes appropriate language declarations in metadata.<br />
<br />
However, documents uploaded by end users (e.g., patients or external clinicians) may lack explicit language tagging. These files are not always programmatically reviewed or remediated at upload. As such, conformance to this criterion may depend on the language metadata embedded by the uploader.<br />
<br />
To mitigate this, the system encourages standardized file types (e.g., PDF, DOCX) and may include future enhancements such as:<br />
<br />
Auto-detection of document language<br />
Warnings or prompts during upload<br />
Language tagging tools for administrative review<br />
Despite this, core portal functionality and all official support materials conform to the language declaration requirements.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#consistent-behavior-receive-focus"><strong>3.2.1 On Focus</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.3.2.1 (Web)</li><li>10.3.2.1 (Non-web document)</li><li>11.3.2.1 (Open Functionality Software)</li><li>11.3.2.1 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal ensures that when elements receive focus (e.g., input fields, links, buttons), they do not automatically trigger a change of context, such as submitting a form, opening a new window, or navigating to another page.<br />
<br />
This design allows users—particularly those relying on screen readers, keyboard navigation, or alternative input methods—to move through the interface without unexpected behavior that could disrupt orientation or workflow.<br />
<br />
All state changes or navigations are initiated by explicit user action, such as pressing Enter or clicking a button, in accordance with accessibility best practices.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#consistent-behavior-unpredictable-change"><strong>3.2.2 On Input</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.3.2.2 (Web)</li><li>10.3.2.2 (Non-web document)</li><li>11.3.2.2 (Open Functionality Software)</li></ul><ol><li>11.3.2.2 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>Supports with Exceptions</td>
<td>The WebChart Patient Portal is designed to avoid unexpected changes of context (such as automatic navigation, submission, or refresh) when users provide input in form fields, dropdowns, or other controls. In most cases, user input is either:<br />
<br />
Accompanied by a confirmation mechanism (e.g., a submit button), or<br />
Clearly communicates the result of interaction (e.g., live search or filter feedback).<br />
However, a few legacy components or third-party modules may still trigger context changes (e.g., auto-submitting on dropdown change) without adequate warning or alternative. These instances are tracked and scheduled for remediation to align with WCAG 2.1 standards.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG22/#consistent-help"><strong>3.2.6 Consistent Help</strong></a><strong></strong> (Level A 2.2 only)<br />
EN 301 549 Criteria – Does not apply<br />
Revised Section 508 – Does not apply</td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#minimize-error-identified"><strong>3.3.1 Error Identification</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.3.3.1 (Web)</li><li>10.3.3.1 (Non-web document)</li><li>11.3.3.1.1 (Open Functionality Software)</li></ul><ol><li>11.3.3.1.2 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal clearly identifies input errors using accessible visual indicators, inline messages, and programmatic notifications. When users make a mistake in forms (e.g., missing required fields, invalid data formats), the system provides:<br />
<br />
Textual error messages near the affected fields<br />
ARIA attributes (e.g., aria-invalid, aria-describedby) for screen reader compatibility<br />
Focus management that helps users locate and correct errors efficiently<br />
These mechanisms ensure that all users—including those using assistive technologies—are notified of errors and can take corrective action.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#minimize-error-cues"><strong>3.3.2 Labels or Instructions</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.3.3.2 (Web)</li><li>10.3.3.2 (Non-web document)</li><li>11.3.3.2 (Open Functionality Software)</li></ul><ol><li>11.3.3.2 (Closed Software)</li><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal provides clear and descriptive labels and instructions for all user input fields. Required fields, input formats (e.g., date, phone number), and usage instructions are communicated through:<br />
<br />
Visible text labels adjacent to inputs<br />
Programmatic labels using label elements and aria-label or aria-labelledby attributes<br />
Placeholder text and inline hints when appropriate (not used as the sole label)<br />
These practices ensure that all users—including those using screen readers or voice input—can understand the purpose of each form control and complete tasks effectively.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG22/#redundant-entry"><strong>3.3.7 Redundant Entry</strong></a><strong></strong> (Level A 2.2 only)<br />
EN 301 549 Criteria – Does not apply<br />
Revised Section 508 – Does not apply</td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#ensure-compat-parses"><strong>4.1.1 Parsing</strong></a> (Level A)<br />
Applies to:<br />
WCAG 2.0 and 2.1 – Always answer ‘Supports'<br />
WCAG 2.2 (obsolete and removed) - Does not apply<br />
EN 301 549 Criteria<br />
<ul><li>9.4.1.1 (Web)</li><li>10.4.1.1 (Non-web document)</li><li>11.4.1.1.1 (Open Functionality Software)</li></ul><ol><li>11.4.1.1.2 (Closed Software) – Does not apply</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>Supports</td>
<td>For WCAG 2.0, 2.1, EN 301 549, and Revised 508 Standards, the September 2023 errata update indicates this criterion is always supported. See the <a href="https://www.w3.org/WAI/WCAG20/errata/#editorial">WCAG 2.0 Editorial Errata</a> and the <a href="https://www.w3.org/WAI/WCAG21/errata/#editorial">WCAG 2.1 Editorial Errata</a>.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#ensure-compat-rsv"><strong>4.1.2 Name, Role, Value</strong></a> (Level A)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.4.1.2 (Web)</li><li>10.4.1.2 (Non-web document)</li><li>11.4.1.2.1 (Open Functionality Software)</li></ul><ol><li>11.4.1.2.2 (Closed Software) – Does not apply</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal implements user interface components that expose their name, role, and state/values programmatically using semantic HTML and appropriate ARIA attributes. These elements are compatible with assistive technologies such as screen readers and voice input systems.<br />
<br />
The majority of custom widgets (e.g., modals, tabs, accordions, toggle switches) are developed in accordance with WAI-ARIA specifications and tested to ensure that dynamic updates are communicated to users appropriately.<br />
<br />
However, some isolated legacy or third-party UI elements may not consistently expose state or role (e.g., toggle buttons missing aria-pressed, or custom dropdowns missing ARIA roles). These exceptions are tracked and prioritized for remediation in ongoing accessibility updates.</td>
</tr>
</table>

### Table 2: Success Criteria, Level AA

Notes:

<table>
<tr>
<td><strong>Criteria</strong></td>
<td><strong>Conformance Level</strong></td>
<td><strong>Remarks and Explanations</strong></td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#media-equiv-real-time-captions"><strong>1.2.4 Captions (Live)</strong></a> (Level AA)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.2.4 (Web)</li><li>10.1.2.4 (Non-web document)</li><li>11.1.2.4 (Open Functionality Software)</li><li>11.1.2.4 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>Supports with Exceptions</td>
<td>The WebChart Patient Portal does not typically include live multimedia content as part of its core functionality. However, when live audio or video features (such as telehealth sessions, webinars, or streamed content) are used, captions may not always be provided in real-time.<br />
<br />
Live captioning is offered on a limited basis depending on the technology platform used and the context of the event. Where live captions are not natively supported, alternate accommodations (e.g., transcripts, live support, or ASR integrations) may be provided upon request.<br />
<br />
Improvements are planned to expand real-time captioning support across all live communication channels, particularly in clinical and support settings.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#media-equiv-audio-desc-only"><strong>1.2.5 Audio Description (Prerecorded)</strong></a> (Level AA)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.2.5 (Web)</li><li>10.1.2.5 (Non-web document)</li><li>11.1.2.5 (Open Functionality Software)</li><li>11.1.2.5 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS with Exceptions</td>
<td>The WebChart Patient Portal includes limited prerecorded multimedia content. When such content contains important visual information not conveyed by audio alone, efforts are made to provide audio descriptions either as separate tracks or within the main content.<br />
<br />
However, not all legacy or third-party prerecorded media currently includes audio descriptions. Where feasible, equivalent alternatives such as descriptive transcripts or summaries are provided to support accessibility.<br />
<br />
Future updates aim to ensure all critical visual information in multimedia is accessible to users who are blind or have low vision, in alignment with WCAG 2.1 Level AA requirements.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG21/#orientation"><strong>1.3.4 Orientation</strong></a> (Level AA 2.1 and 2.2)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.3.4 (Web)</li><li>10.1.3.4 (Non-web document)</li><li>11.1.3.4 (Open Functionality Software)</li><li>11.1.3.4 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508 – Does not apply</td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal does not restrict content or functionality to a single display orientation. The platform supports both portrait and landscape modes, ensuring that users who fix their device orientation (e.g., due to assistive technology mounts or motor disabilities) can still access and interact with all content.<br />
<br />
No critical information is lost or obscured when switching orientations, and layouts are responsive across a range of screen sizes and device types. Fixed orientation is not used unless essential for a specific function (e.g., signature input), and alternative input options are provided in such cases.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG21/#identify-input-purpose"><strong>1.3.5 Identify Input Purpose</strong></a> (Level AA 2.1 and 2.2)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.3.5 (Web)</li><li>10.1.3.5 (Non-web document)</li><li>11.1.3.5.1 (Open Functionality Software)</li><li>11.1.3.5.2 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508 – Does not apply</td>
<td>Supports with Exceptions</td>
<td>The WebChart Patient Portal supports identifying common input purposes by assigning appropriate HTML autocomplete attributes (e.g., autocomplete="name", email, tel, address-line1, etc.) to form fields when applicable. This allows assistive technologies, browsers, and user agents to help users autofill information and personalize their experience.<br />
<br />
However, not all fields consistently implement these attributes, especially in older forms or third-party components. Review and remediation are ongoing to ensure all user-input fields that collect personal data or common information types expose their purpose programmatically.<br />
<br />
Future updates will expand consistent use of semantic autocomplete values to improve support for cognitive accessibility and user efficiency.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast"><strong>1.4.3 Contrast (Minimum)</strong></a> (Level AA)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.4.3 (Web)</li><li>10.1.4.3 (Non-web document)</li><li>11.1.4.3 (Open Functionality Software)</li><li>11.1.4.3 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>Supports with Exceptions</td>
<td>The WebChart Patient Portal has been designed with accessible color contrast in mind, ensuring that text elements—including headings, labels, and body content—meet or exceed the minimum 4.5:1 contrast ratio against their background, as required for normal text under WCAG 2.1 AA.<br />
<br />
Large-scale text (18pt+ or 14pt bold) meets the minimum 3:1 contrast requirement. However, a limited number of legacy UI elements or third-party widgets may contain insufficient contrast in labels, placeholder text, or low-priority controls (e.g., disabled buttons or hint text). These instances are being identified and updated through ongoing accessibility reviews.<br />
<br />
Color contrast is validated during development using automated tools and manual inspection to maintain conformance.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-scale"><strong>1.4.4 Resize text</strong></a> (Level AA)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.4.4 (Web)</li><li>10.1.4.4 (Non-web document)</li><li>11.1.4.4.1 (Open Functionality Software)</li><li>11.1.4.4.2 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>Supports with Exceptions</td>
<td>The WebChart Patient Portal supports text resizing up to 200% without loss of content or functionality. Text remains readable, interface components retain their relationships and visibility, and horizontal scrolling is avoided in most layouts.<br />
<br />
Responsive design principles and relative units (e.g., em, rem, %) are used throughout the interface. However, some legacy components, fixed containers, or third-party integrations may not consistently adapt when text is enlarged using browser settings or assistive tools.<br />
<br />
Ongoing reviews are addressing these issues to improve consistent scalability across all views and devices.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-text-presentation"><strong>1.4.5 Images of Text</strong></a> (Level AA)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.4.5 (Web)</li><li>10.1.4.5 (Non-web document)</li><li>11.1.4.5.1 (Open Functionality Software)</li><li>11.1.4.5.2 (Closed Software) – Does not apply</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>Supports with Exceptions</td>
<td>The WebChart Patient Portal avoids the use of images of text in favor of real, styled text that can be resized, recolored, and interpreted by assistive technologies. Heading elements, labels, buttons, and interface text are rendered using accessible HTML/CSS, ensuring clarity and flexibility.<br />
<br />
In rare cases, images containing text may appear—such as logos, scanned documents, or externally supplied graphics. Where these are necessary, alternative text or captions are provided to convey the same information.<br />
<br />
Ongoing efforts focus on reducing reliance on text-in-images, especially in support content and UI design patterns, in favor of live, accessible text wherever possible.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG21/#reflow"><strong>1.4.10 Reflow</strong></a> (Level AA 2.1 and 2.2)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.4.10 (Web)</li><li>10.1.4.10 (Non-web document)</li><li>11.1.4.10 (Open Functionality Software)</li><li>11.1.4.10 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508 – Does not apply</td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal supports responsive layouts and allows content to reflow appropriately when viewed at up to 400% zoom (CSS pixel width equivalent of 320px), without requiring horizontal scrolling for blocks of text. Layouts adjust fluidly across devices, including tablets and smartphones, preserving usability and readability.<br />
The platform follows responsive design principles using relative units (em, %, rem) and modern CSS techniques to meet WCAG 2.1 AA requirements wherever possible.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG21/#non-text-contrast"><strong>1.4.11 Non-text Contrast</strong></a> (Level AA 2.1 and 2.2)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.4.11 (Web)</li><li>10.1.4.11 (Non-web document)</li><li>11.1.4.11 (Open Functionality Software)</li><li>11.1.4.11 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508 – Does not apply</td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal provides sufficient contrast (minimum 3:1) between user interface components (e.g., buttons, focus indicators, form field outlines, icons) and adjacent background colors. These visual distinctions allow users with visual impairments to clearly perceive interactive controls, boundaries, and visual states (such as hover and focus).</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG21/#text-spacing"><strong>1.4.12 Text Spacing</strong></a> (Level AA 2.1 and 2.2)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.4.12 (Web)</li><li>10.1.4.12 (Non-web document)</li><li>11.1.4.12 (Open Functionality Software)</li><li>11.1.4.12 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508 – Does not apply</td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal supports user overrides of text spacing without loss of content or functionality. When the following CSS styles are applied to body text—<br />
<br />
Line height (1.5× font size)<br />
Spacing following paragraphs (2× font size)<br />
Letter spacing (0.12× font size)<br />
Word spacing (0.16× font size)<br />
—content remains readable and functional, with no overlapping elements, cutoff text, or content clipping.<br />
The system uses relative units (em, rem, %) and avoids fixed-height containers where possible. Testing has confirmed compatibility with common browser extensions and user style sheets that adjust spacing preferences for accessibility.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus"><strong>1.4.13 Content on Hover or Focus</strong></a> (Level AA 2.1 and 2.2)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.1.4.13 (Web)</li><li>10.1.4.13 (Non-web document)</li><li>11.1.4.13 (Open Functionality Software)</li><li>11.1.4.13 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508 – Does not apply</td>
<td>Supports with Exceptions</td>
<td>The WebChart Patient Portal uses tooltips, popovers, and other supplemental content that may appear on hover or focus. In most cases:<br />
<br />
The additional content is dismissible without moving pointer focus (e.g., via Esc or blur),<br />
Remains visible as long as the pointer or keyboard focus is maintained, and<br />
Is not triggered in a way that interferes with accessibility.<br />
However, some legacy or third-party widgets may use hover-only tooltips that cannot be accessed or dismissed via keyboard. These elements are under review for improved accessibility and compliance with WCAG 2.1/2.2 guidelines.<br />
<br />
Standardization of hover/focus behavior and keyboard accessibility for dynamic content is an ongoing accessibility initiative within the platform.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-mult-loc"><strong>2.4.5 Multiple Ways</strong></a> (Level AA)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.2.4.5 (Web)</li><li>10.2.4.5 (Non-web document) – Does not apply</li><li>11.2.4.5 (Open Functionality Software) – Does not apply</li></ul><ol><li>11.2.4.5 (Closed Software) – Does not apply</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software) – Does not apply to non-web software</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs) – Does not apply to non-web docs</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal provides users with multiple ways to locate and access information and functionality, enhancing navigation flexibility and accessibility. Primary navigation methods include:<br />
<br />
A consistent top-level menu structure<br />
Search functionality<br />
Keyboard-accessible tabbing and landmarks<br />
These mechanisms allow users to choose the method of navigation that best suits their needs or assistive technology setup. Navigation paths are also consistent across authenticated roles and screen sizes.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-descriptive"><strong>2.4.6 Headings and Labels</strong></a> (Level AA)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.2.4.6 (Web)</li><li>10.2.4.6 (Non-web document)</li><li>11.2.4.6 (Open Functionality Software)</li></ol><ol><li>11.2.4.6 (Closed Software)</li><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal uses descriptive headings and meaningful labels throughout its user interface to clearly communicate structure and functionality. Headings follow a logical hierarchy (e.g., <h1> through <h4>) to support assistive technologies and content navigation.<br />
<br />
Form controls and interactive elements include clear labels that describe their purpose, and those labels are programmatically associated with their corresponding controls using semantic HTML and ARIA attributes.<br />
<br />
The consistent use of descriptive headings and labels enhances usability for all users, including those relying on screen readers or voice navigation.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-visible"><strong>2.4.7 Focus Visible</strong></a> (Level AA)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.2.4.7 (Web)</li><li>10.2.4.7 (Non-web document)</li><li>11.2.4.7 (Open Functionality Software)</li></ul><ol><li>11.2.4.7 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS with EXCEPTIONS</td>
<td>The WebChart Patient Portal provides a visible keyboard focus indicator for all standard interactive elements (e.g., links, buttons, input fields). This ensures that users navigating via keyboard or assistive technologies can clearly determine which element is currently active or ready for interaction.<br />
<br />
In most components, the default browser outline or a custom high-contrast visual style is retained. However, in some legacy or third-party UI elements, the visible focus indicator may be inconsistent or visually insufficient under certain themes or zoom levels. These cases are being tracked and addressed in an ongoing accessibility enhancement process.<br />
<br />
Focus visibility is tested during accessibility QA using keyboard-only navigation and browser zoom to verify consistency across themes and device types.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum"><strong>2.4.11 Focus Not Obscured (Minimum)</strong></a> (Level AA 2.2 only)<br />
EN 301 549 Criteria – Does not apply<br />
Revised Section 508 – Does not apply</td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG22/#dragging-movements"><strong>2.5.7 Dragging Movements</strong></a><strong></strong> (Level AA 2.2 only)<br />
EN 301 549 Criteria – Does not apply<br />
Revised Section 508 – Does not apply</td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG22/#target-size-minimum"><strong>2.5.8 Target Size (Minimum)</strong></a><strong></strong> (Level AA 2.2 only)<br />
EN 301 549 Criteria – Does not apply<br />
Revised Section 508 – Does not apply</td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#meaning-other-lang-id"><strong>3.1.2 Language of Parts</strong></a> (Level AA)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.3.1.2 (Web)</li><li>10.3.1.2 (Non-web document)</li><li>11.3.1.2 (Open Functionality Software) – Does not apply</li></ul><ol><li>11.3.1.2 (Closed Software) – Does not apply</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal primarily delivers content in English and programmatically identifies the default language of pages using the lang attribute. For portions of content in other languages (e.g., translated instructions, multilingual labels, or patient-supplied documentation), the appropriate lang attributes are used where implemented.<br />
<br />
However, not all instances of multilingual content within dynamic modules or user-uploaded materials are marked with accurate language metadata. While this does not affect most core portal functionality, it may reduce the accuracy of pronunciation for screen reader users encountering foreign language passages.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-locations"><strong>3.2.3 Consistent Navigation</strong></a> (Level AA)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.3.2.3 (Web)</li><li>10.3.2.3 (Non-web document) – Does not apply</li><li>11.3.2.3 (Open Functionality Software) – Does not apply</li></ul><ol><li>11.3.2.3 (Closed Software) – Does not apply</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software) – Does not apply to non-web software</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs) – Does not apply to non-web docs</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal maintains consistent navigation mechanisms across pages and user workflows. Elements such as main menus, sidebars, and action buttons appear in the same relative locations and order throughout the application for each user role.<br />
<br />
Navigation labels, icons, and sequences remain uniform, ensuring a predictable user experience and supporting efficient access for keyboard and screen reader users. Where dynamic content is introduced (e.g., role-based dashboards), core navigation structures remain stable.<br />
<br />
This consistency improves usability and reduces cognitive load for all users, including those with memory, attention, or processing disabilities.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-functionality"><strong>3.2.4 Consistent Identification</strong></a> (Level AA)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.3.2.4 (Web)</li><li>10.3.2.4 (Non-web document) – Does not apply</li><li>11.3.2.4 (Open Functionality Software) – Does not apply</li></ul><ol><li>11.3.2.4 (Closed Software) – Does not apply</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software) – Does not apply to non-web software</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs) – Does not apply to non-web docs</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal uses consistent identification for user interface elements that serve the same function across the platform. Controls such as buttons, links, icons, and labels are reused with the same visual presentation, text description, and accessible name when performing identical actions in different contexts.<br />
<br />
This includes standardizing elements like "Submit," "Cancel," "Schedule," and "Download" across pages and modules to ensure clarity for users, including those using screen readers or speech input systems.<br />
<br />
Consistent identification improves learnability, reduces confusion, and enhances the accessibility of repeat tasks.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#minimize-error-suggestions"><strong>3.3.3 Error Suggestion</strong></a> (Level AA)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.3.3.3 (Web)</li><li>10.3.3.3 (Non-web document)</li><li>11.3.3.3 (Open Functionality Software)</li></ul><ol><li>11.3.3.3 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS with EXCEPTIONS</td>
<td>The WebChart Patient Portal provides suggestions to help users correct errors in forms and interactive workflows. When an input error is detected—such as a missing required field or invalid data format—an error message is displayed with clear guidance on how to resolve the issue (e.g., "Please enter a valid date in MM/DD/YYYY format").<br />
<br />
Most common form interactions include inline error text, ARIA associations with inputs (aria-describedby), and dynamic feedback after submission attempts. However, in a few legacy or third-party forms, error suggestion may be less specific or missing altogether.<br />
<br />
Continued efforts are in place to improve consistency and expand user guidance throughout the platform, especially in more complex or conditional form scenarios.</td>
</tr>
<tr>
<td><a href="http://www.w3.org/TR/WCAG20/#minimize-error-reversible"><strong>3.3.4 Error Prevention (Legal, Financial, Data)</strong></a> (Level AA)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ul><li>9.3.3.4 (Web)</li><li>10.3.3.4 (Non-web document)</li><li>11.3.3.4 (Open Functionality Software)</li></ul><ol><li>11.3.3.4 (Closed Software)</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508<br />
<ol><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li></ol><ol><li>602.3 (Support Docs)</li></ol></td>
<td>SUPPORTS</td>
<td>The WebChart Patient Portal provides multiple safeguards to prevent errors in user-submitted legal, financial, or personal health data. These include:<br />
<br />
Clear input instructions and labels<br />
Inline and summary validation messages<br />
Opportunities to review, confirm, or cancel data submissions (e.g., appointment requests, consent forms, financial disclosures)<br />
For high-risk transactions, such as confirming medical history or submitting billing information, users are typically presented with a confirmation step or summary screen before submission.</td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum"><strong>3.3.8 Accessible Authentication (Minimum)</strong></a> (Level AA 2.2 only)<br />
EN 301 549 Criteria – Does not apply<br />
Revised Section 508 – Does not apply</td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://www.w3.org/TR/WCAG21/#status-messages"><strong>4.1.3 Status Messages</strong></a><strong></strong> (Level AA 2.1 and 2.2)<br />
Also applies to:<br />
EN 301 549 Criteria<br />
<ol><li>9.4.1.3 (Web)</li><li>10.4.1.3 (Non-web document)</li><li>11.4.1.3 (Open Functionality Software)</li><li>11.4.1.3 (Closed Software) – Does not apply</li></ol><ol><li>11.8.2 (Authoring Tool)</li><li>12.1.2 (Product Docs)</li></ol><ol><li>12.2.4 (Support Docs)</li></ol>Revised Section 508 – Does not apply</td>
<td>SUPPORTS with EXCEPTIONS</td>
<td>The WebChart Patient Portal uses ARIA live regions (e.g., aria-live="polite" or aria-atomic="true") to programmatically communicate status messages—such as success confirmations, error alerts, and asynchronous updates—without requiring a change of focus. This ensures screen reader users are notified of important state changes in forms, dashboards, or data refreshes.<br />
<br />
Standard patterns are in place for toast notifications, real-time validation messages, and dynamic content updates. However, a few legacy components or third-party widgets may not consistently implement ARIA live regions, causing status messages to go unnoticed by assistive technologies.<br />
<br />
Accessibility enhancements are planned to ensure uniform use of live region announcements across all modules.</td>
</tr>
</table>

### Table 3: Success Criteria, Level AAA

Notes:

EN 301 549 Criteria – Does not apply

Revised Section 508 – Does not apply

## Revised Section 508 Report

Notes:

### Chapter 3: [Functional Performance Criteria](https://www.access-board.gov/ict/#chapter-3-functional-performance-criteria) (FPC)

Notes:

<table>
<tr>
<td><strong>Criteria</strong></td>
<td><strong>Conformance Level</strong></td>
<td><strong>Remarks and Explanations</strong></td>
</tr>
<tr>
<td><strong>302.1 Without Vision</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>The WebChart Patient Portal is largely accessible via screen readers using semantic HTML, ARIA roles, and keyboard navigation. Some legacy or third-party components may not fully expose state or role, which is being addressed through ongoing remediation.</td>
</tr>
<tr>
<td><strong>302.2 With Limited Vision</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Most text and interface components meet contrast and resize requirements. However, some low-contrast icons or text in third-party widgets may still present issues at high zoom levels. Text resizing and responsive layout are generally supported.</td>
</tr>
<tr>
<td><strong>302.3 Without Perception of Color</strong></td>
<td><em>Supports</em></td>
<td>Color is never the sole means of conveying information. Redundant cues (icons, text labels, underline, shapes) are provided throughout the portal for alerts, form validation, and status indicators.</td>
</tr>
<tr>
<td><strong>302.4 Without Hearing</strong></td>
<td><em>Supports</em></td>
<td>All essential content is visual or text-based. Prerecorded media includes captions or transcripts, and there is no reliance on audio-only content.</td>
</tr>
<tr>
<td><strong>302.5 With Limited Hearing</strong></td>
<td><em>Supports</em></td>
<td>No critical auditory cues are used. Visual notifications, transcripts, and captions are provided for prerecorded content. Live audio accommodations may be provided by request.</td>
</tr>
<tr>
<td><strong>302.6 Without Speech</strong></td>
<td><em>Supports</em></td>
<td>All functionality is accessible via keyboard, mouse, and touch input. No speech input is required to operate the system or complete workflows.</td>
</tr>
<tr>
<td><strong>302.7 With Limited Manipulation</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>The portal supports keyboard-only navigation and screen reader compatibility. Some legacy components or non-standard controls may have inconsistent focus behavior or small target sizes, which are being addressed.</td>
</tr>
<tr>
<td><strong>302.8 With Limited Reach and Strength</strong></td>
<td><em>Supports</em></td>
<td>The interface is operable without fine motor control and is compatible with a wide range of assistive technologies. No timed gestures or path-based inputs are required. Mobile responsiveness supports one-handed use.</td>
</tr>
<tr>
<td><strong>302.9 With Limited Language, Cognitive, and Learning Abilities</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>The portal uses clear, concise language and predictable navigation. However, some complex workflows (e.g., multi-step forms or clinical data views) may benefit from improved guidance, summaries, or simplification. Enhancements are under consideration, including the introduction of:<br />
<br />
Simplified summaries at the beginning of complex forms or workflows (e.g., clinical data entry).<br />
<br />
Step indicators for multi-stage processes to support task orientation.<br />
<br />
Inline definitions or hover tips for medical terminology to assist users with limited health literacy or cognitive disabilities.</td>
</tr>
</table>

### Chapter 4: [Hardware](https://www.access-board.gov/ict/#chapter-4-hardware)

Notes: N/A

### Chapter 5: [Software](https://www.access-board.gov/ict/#chapter-5-software)

Notes:

<table>
<tr>
<td><strong>Criteria</strong></td>
<td><strong>Conformance Level</strong></td>
<td><strong>Remarks and Explanations</strong></td>
</tr>
<tr>
<td><strong>501.1 Scope – Application</strong></td>
<td><em>Supports</em></td>
<td>This criterion establishes scope. WebChart Patient Portal is a software-based web application and is evaluated under applicable provisions for software and web content.</td>
</tr>
<tr>
<td><strong>501.2.1 User Control of Accessibility Features</strong></td>
<td><em>Supports</em></td>
<td>The portal does not override user-configured accessibility settings (e.g., high contrast mode, screen magnification, screen readers). It honors platform-level accessibility preferences.</td>
</tr>
<tr>
<td><strong>501.2.2 No Disruption of Accessibility Features</strong></td>
<td><em>Supports</em></td>
<td>The application does not interfere with or disable accessibility features of the platform or assistive technologies.</td>
</tr>
<tr>
<td><strong>501.3 Application</strong></td>
<td><em>Supports</em></td>
<td>All software functionality provided by the WebChart Patient Portal is subject to accessibility evaluation per applicable success criteria (e.g., WCAG 2.1/2.2 AA).</td>
</tr>
<tr>
<td><strong>502.2 Accessibility Services</strong></td>
<td><em>Supports</em></td>
<td>The portal is compatible with standard accessibility APIs and services, such as screen readers and speech recognition tools.</td>
</tr>
<tr>
<td><strong>502.3.1 Object Information</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Most interactive components expose role, state, and name using standard HTML/ARIA. Some legacy widgets may not provide complete programmatic information. Remediation is ongoing. As part of the remediation roadmap, a focused Legacy Widget Audit is planned to assess and modernize legacy UI components. This includes:<br />
Ensuring consistent keyboard focus indicators,<br />
<br />
Reviewing and correcting ARIA roles and state exposure<br />
<br />
Enforcing WCAG-compliant minimum target sizes.</td>
</tr>
<tr>
<td><strong>502.3.2 Modification of Object Information</strong></td>
<td><em>Supports</em></td>
<td>Users can interact with, modify, and submit form values using supported assistive technologies. Object states update dynamically.</td>
</tr>
<tr>
<td><strong>502.3.3 Row, Column, and Headers</strong></td>
<td><em>Supports</em></td>
<td>Data tables are properly marked up using thead, th, scope, or ARIA roles to expose relationships to assistive technologies.</td>
</tr>
<tr>
<td><strong>502.3.4 Values</strong></td>
<td><em>Supports</em></td>
<td>Values of user interface elements are exposed programmatically and updated when modified.</td>
</tr>
<tr>
<td><strong>502.3.5 Label Relationships</strong></td>
<td><em>Supports</em></td>
<td>Labels are associated with form fields using <label> and for attributes or aria-labelledby.</td>
</tr>
<tr>
<td><strong>502.3.6 Text</strong></td>
<td><em>Supports</em></td>
<td>All interface text is accessible to assistive technologies using appropriate markup.</td>
</tr>
<tr>
<td><strong>502.3.7 Hierarchical Relationships</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Structural relationships such as tree views, menus, and nested regions use ARIA roles or semantic HTML. Some third-party widgets may lack hierarchical cues.</td>
</tr>
<tr>
<td><strong>502.4 Platform Accessibility Features</strong></td>
<td><em>Supports</em></td>
<td>The portal does not override or interfere with platform accessibility features.</td>
</tr>
<tr>
<td><strong>503.2 User Preferences</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>The platform does not restrict use of system-defined contrast, font size, or zoom, though user preference persistence may vary across sessions.</td>
</tr>
<tr>
<td><strong>503.3 Alternative User Interfaces</strong></td>
<td><em>Not Applicable</em></td>
<td>The portal does not offer a separate alternative user interface. All functionality is included in the primary experience.</td>
</tr>
<tr>
<td><strong>503.4.1 Caption Controls</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Prerecorded video content with captions is supported, but the availability and customization of caption controls may vary based on video delivery method.</td>
</tr>
<tr>
<td><strong>503.4.2 Audio Description Controls</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Audio description is available on some media where applicable, but user controls for toggling audio descriptions may not be universally implemented.</td>
</tr>
<tr>
<td><strong>504.2 Content Creation or Editing</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>The portal includes features for users to enter data (e.g., messaging, form filling), which generally meet accessibility criteria. Some rich-text editors may present barriers for assistive technologies.</td>
</tr>
<tr>
<td><strong>504.3 Prompts</strong></td>
<td><em>Supports</em></td>
<td>Where applicable, users are prompted to enter accessible information (e.g., alt text for uploaded images or accessible file formats).</td>
</tr>
<tr>
<td><strong>504.4 Templates</strong></td>
<td><em>Supports</em></td>
<td>Standardized templates for forms and workflows follow accessibility best practices. Templates are reviewed regularly for semantic markup and clarity.</td>
</tr>
</table>

### Chapter 6: [Support Documentation and Services](https://www.access-board.gov/ict/#chapter-6-support-documentation-and-services)

Notes:

The WebChart Patient Portal is provided as a software solution to third-party organizations. The responsibility for accommodating communication needs of end users (e.g., through auxiliary aids, interpreters, or alternate communication channels) rests with the deploying organization. The vendor does not provide direct end-user support or accommodations.

​​

## EN 301 549 Report

Notes:

### Clause [4: Functional Performance Statements](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=20) (FPS)

Notes:

<table>
<tr>
<td><strong>Clause</strong></td>
<td><strong>Conformance Level</strong></td>
<td><strong>Remarks and Explanations</strong></td>
</tr>
<tr>
<td><strong>4.2.1 Usage without vision</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>The WebChart Patient Portal is navigable via screen readers and keyboard input using semantic HTML and ARIA roles. Some third-party or legacy elements may lack complete screen reader support.</td>
</tr>
<tr>
<td><strong>4.2.2 Usage with limited vision</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>The portal supports zoom up to 200%, responsive layout, and sufficient color contrast in most areas. Some legacy components or tooltips may not scale optimally or meet minimum contrast in all states.</td>
</tr>
<tr>
<td><strong>4.2.3 Usage without perception of colour</strong></td>
<td><em>Supports</em></td>
<td>Information is not conveyed by color alone. All critical visual indicators are supplemented by text labels, icons, or patterns.</td>
</tr>
<tr>
<td><strong>4.2.4 Usage without hearing</strong></td>
<td><em>Supports</em></td>
<td>No essential content relies on audio alone. Captions or transcripts are provided for multimedia when available.</td>
</tr>
<tr>
<td><strong>4.2.5 Usage with limited hearing</strong></td>
<td><em>Supports</em></td>
<td>Visual indicators are used for notifications and alerts. Captions support comprehension where audio is used.</td>
</tr>
<tr>
<td><strong>4.2.6 Usage without vocal capability</strong></td>
<td><em>Supports</em></td>
<td>No functionality in the software requires speech input. All tasks are operable via keyboard, mouse, or alternative input.</td>
</tr>
<tr>
<td><strong>4.2.7 Usage with limited manipulation or strength</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>The portal supports keyboard navigation and alternative input devices. However, some controls may have small activation areas or limited focus handling. Improvements are ongoing.</td>
</tr>
<tr>
<td><strong>4.2.8 Usage with limited reach</strong></td>
<td><em>Supports</em></td>
<td>All controls are operable using standard input methods and do not require simultaneous multi-touch or extended reach. Mobile layout accommodates one-handed use.</td>
</tr>
<tr>
<td><strong>4.2.9 Minimize photosensitive seizure triggers</strong></td>
<td><em>Supports</em></td>
<td>The product does not include flashing content exceeding WCAG thresholds. No known seizure-inducing patterns are present.</td>
</tr>
<tr>
<td><strong>4.2.10 Usage with limited cognition, language, or learning</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>The portal is designed with clear language and predictable navigation. However, complex medical terminology or workflows may pose challenges. Instructional enhancements are under evaluation.</td>
</tr>
</table>

### Clause [5: Generic Requirements](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=23)

Notes: The WebChart Patient Portal does not rely on closed functionality. All interactions are exposed through standard platform accessibility services and assistive technologies.

### Clause [6: ICT with Two-Way Voice Communication](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=30)

Notes: WebChart Patient Portal does not include real-time text (RTT) during telehealth sessions. Two-way voice and video communication is supported via accessible web interfaces. Accessibility accommodations for patients with hearing or speech disabilities are the responsibility of the deploying provider or organization.

<table>
<tr>
<td><strong>Clause</strong></td>
<td><strong>Conformance Level</strong></td>
<td><strong>Remarks and Explanations</strong></td>
</tr>
<tr>
<td><strong>6.1 General</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>The WebChart Patient Portal includes a telehealth feature that supports two-way voice and video communication. Accessibility features vary based on implementation (native vs. third-party).</td>
</tr>
<tr>
<td><strong>6.2 Real-time text functionality</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Real-time text is not currently built into the telehealth session interface. Patients and providers may communicate via secure messaging outside the video visit.</td>
</tr>
<tr>
<td><strong>6.3 Video communication</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Video calls support visual communication. However, support for sign language interpretation or video relay services depends on the clinical or administrative implementation.</td>
</tr>
<tr>
<td><strong>6.4 User control of volume</strong></td>
<td><em>Supports</em></td>
<td>Users have control over audio output via standard system/browser controls. No in-app restriction is imposed.</td>
</tr>
<tr>
<td><strong>6.5 Magnetic coupling</strong></td>
<td><em>Not Applicable</em></td>
<td>The platform is software-only and does not include hardware. Magnetic coupling would be provided via user's chosen device (e.g., mobile phone or headset).</td>
</tr>
<tr>
<td><strong>6.6 Acoustic output</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>The system provides audio output through the device's default hardware, with volume and output settings controlled by the user. Audio quality may vary by third-party video framework.</td>
</tr>
<tr>
<td><strong>6.7 Audio quality</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Audio quality is dependent on device, bandwidth, and third-party video platform. Audio encoding aims to meet common clarity thresholds but is not explicitly optimized for assistive hearing.</td>
</tr>
<tr>
<td><strong>6.8 Echo cancellation</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Echo cancellation is handled by the underlying teleconferencing platform (browser or integrated service). The WebChart Portal itself does not implement low-level echo management.</td>
</tr>
</table>

### Clause [7: ICT with Video Capabilities](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=35)\*\*

Notes:

<table>
<tr>
<td><strong>Clause</strong></td>
<td><strong>Conformance Level</strong></td>
<td><strong>Remarks and Explanations</strong></td>
</tr>
<tr>
<td><strong>7.1 User control of video</strong></td>
<td><em>Supports</em></td>
<td>The WebChart Patient Portal allows users to start, pause, and stop video streams where applicable. For prerecorded video (e.g., help content or instructions), playback is user-controlled via standard HTML5 or embedded player interfaces.</td>
</tr>
<tr>
<td><strong>7.2 Caption processing technology</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Some prerecorded video content includes captions using embedded players that support caption rendering. However, not all player instances expose caption toggle controls consistently across browsers and platforms.</td>
</tr>
<tr>
<td><strong>7.3 Display of captions</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Captions are available for certain prerecorded instructional materials and tutorials. In some cases, captions are hardcoded or provided through external transcripts. Live captions for telehealth sessions are not natively supported.</td>
</tr>
<tr>
<td><strong>7.4 User control of captions</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Caption controls (e.g., show/hide, text size) depend on the capabilities of the underlying video player. In some implementations, captions may be fixed (burned-in) or controlled externally.</td>
</tr>
<tr>
<td><strong>7.5 Video description processing technology</strong></td>
<td><em>Does Not Support</em></td>
<td>Audio descriptions (AD) are not currently embedded in prerecorded video playback, and the platform does not support user-selectable AD tracks.</td>
</tr>
<tr>
<td><strong>7.6 User control of video description</strong></td>
<td><em>Does Not Support</em></td>
<td>No user control is currently available for toggling audio descriptions. Where necessary, descriptive transcripts are provided instead.</td>
</tr>
</table>

### Clause [8: Hardware](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=37)

Notes: N/A

### Clause [9: Web](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=45)

Notes:_see_ [_WCAG 2.x section_](#wcag-2-x-section)

### Clause [10: Non-Web Documents](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=52)

Notes: All applicable accessibility requirements for non-web documents in Clause 10 (Non-Web Documents) are met through conformance with WCAG 2.1 Level AA, as addressed in Section 2.2 of this report. Specific document formats (e.g., PDF, DOCX) are authored using semantic structure, appropriate tagging, and alternative text where applicable. For exceptions, refer to individual WCAG SC entries.

### Clause [11: Software](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=64)

Notes:

<table>
<tr>
<td><strong>Clause</strong></td>
<td><strong>Conformance Level</strong></td>
<td><strong>Remarks and Explanations</strong></td>
</tr>
<tr>
<td><strong>11.1 General (All software)</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>The WebChart Patient Portal is a browser-based application that conforms to WCAG 2.1 Level AA. Some accessibility requirements depend on runtime environment and third-party modules.</td>
</tr>
<tr>
<td><strong>11.1.1.1 Non-text Content</strong></td>
<td><em>See WCAG 1.1.1</em></td>
<td>Covered under Section 2.2 – WCAG SC 1.1.1.</td>
</tr>
<tr>
<td><strong>11.1.2.1 Audio-only and Video-only (Prerecorded)</strong></td>
<td><em>See WCAG 1.2.1</em></td>
<td>Audio or video-only content is not typically used. Where present, transcripts or captions are provided.</td>
</tr>
<tr>
<td><strong>11.1.2.2–1.2.5 Multimedia Requirements</strong></td>
<td><em>See WCAG 1.2.x</em></td>
<td>Captions, transcripts, and alternatives are provided for prerecorded media, where applicable. Live captions not yet supported.</td>
</tr>
<tr>
<td><strong>11.1.3.1 Info and Relationships</strong></td>
<td><em>See WCAG 1.3.1</em></td>
<td>Content structure is preserved through semantic HTML and ARIA.</td>
</tr>
<tr>
<td><strong>11.1.3.2 Meaningful Sequence</strong></td>
<td><em>See WCAG 1.3.2</em></td>
<td>Tab and reading order is logical and programmatically defined.</td>
</tr>
<tr>
<td><strong>11.1.3.3 Sensory Characteristics</strong></td>
<td><em>See WCAG 1.3.3</em></td>
<td>Instructions do not rely on color, shape, or location alone.</td>
</tr>
<tr>
<td><strong>11.1.4.x Visual Presentation and Contrast</strong></td>
<td><em>See WCAG 1.4.x</em></td>
<td>Text, images, and UI components meet contrast and resizing requirements.</td>
</tr>
<tr>
<td><strong>11.2.1.1 Keyboard</strong></td>
<td><em>See WCAG 2.1.1</em></td>
<td>All functionality is operable via keyboard. Some minor exceptions in legacy modules.</td>
</tr>
<tr>
<td><strong>11.2.1.2 No Keyboard Trap</strong></td>
<td><em>See WCAG 2.1.2</em></td>
<td>Focus does not get trapped in any interactive component.</td>
</tr>
<tr>
<td><strong>11.2.1.4 Character Key Shortcuts</strong></td>
<td><em>See WCAG 2.1.4</em></td>
<td>No character-only shortcuts are used.</td>
</tr>
<tr>
<td><strong>11.2.2.1 Timing Adjustable</strong></td>
<td><em>See WCAG 2.2.1</em></td>
<td>Session timeouts are adjustable where possible. Warnings are shown before logout.</td>
</tr>
<tr>
<td><strong>11.2.2.2 Pause, Stop, Hide</strong></td>
<td><em>See WCAG 2.2.2</em></td>
<td>Rarely used animations or carousels can be paused/stopped.</td>
</tr>
<tr>
<td><strong>11.2.3.1 Three Flashes or Below Threshold</strong></td>
<td><em>See WCAG 2.3.1</em></td>
<td>No flashing or seizure-inducing content present.</td>
</tr>
<tr>
<td><strong>11.2.4.1–11.2.4.7 Navigability and Focus</strong></td>
<td><em>See WCAG 2.4.x</em></td>
<td>Logical focus order, visible focus indicators, headings, and link descriptions are provided.</td>
</tr>
<tr>
<td><strong>11.3.1.1 Language of Page</strong></td>
<td><em>See WCAG 3.1.1</em></td>
<td>Default language is defined using <html lang="en">.</td>
</tr>
<tr>
<td><strong>11.3.1.2 Language of Parts</strong></td>
<td><em>See WCAG 3.1.2</em></td>
<td>Language tags are applied when multilingual content is present (limited use).</td>
</tr>
<tr>
<td><strong>11.3.2.1 On Focus</strong></td>
<td><em>See WCAG 3.2.1</em></td>
<td>No context changes are triggered by focus alone.</td>
</tr>
<tr>
<td><strong>11.3.2.2 On Input</strong></td>
<td><em>See WCAG 3.2.2</em></td>
<td>No unexpected behavior occurs when input values are entered or changed.</td>
</tr>
<tr>
<td><strong>11.3.3.1 Error Identification</strong></td>
<td><em>See WCAG 3.3.1</em></td>
<td>Inline error messages with ARIA associations are provided for most forms.</td>
</tr>
<tr>
<td><strong>11.3.3.2 Labels or Instructions</strong></td>
<td><em>See WCAG 3.3.2</em></td>
<td>All form inputs have visible labels and programmatic label bindings.</td>
</tr>
<tr>
<td><strong>11.3.3.3 Error Suggestion</strong></td>
<td><em>See WCAG 3.3.3</em></td>
<td>Suggestions are provided when input errors occur (e.g., "Please use MM/DD/YYYY").</td>
</tr>
<tr>
<td><strong>11.3.3.4 Error Prevention</strong></td>
<td><em>See WCAG 3.3.4</em></td>
<td>Confirmations and summaries are used for high-stakes actions (e.g., submitting clinical data).</td>
</tr>
<tr>
<td><strong>11.4.1.1 Parsing</strong></td>
<td><em>Supports</em></td>
<td>HTML and markup are validated for syntax correctness. Note: This SC is deprecated in WCAG 2.2.</td>
</tr>
<tr>
<td><strong>11.4.1.2 Name, Role, Value</strong></td>
<td><em>See WCAG 4.1.2</em></td>
<td>UI components expose proper roles and states via ARIA or semantic HTML.</td>
</tr>
<tr>
<td><strong>11.4.1.3 Status Messages</strong></td>
<td><em>See WCAG 4.1.3</em></td>
<td>Screen readers are informed of changes using aria-live, role="status", or alert regions.</td>
</tr>
<tr>
<td><strong>11.5 Assistive Technology Compatibility</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Platform is tested with major screen readers and magnifiers (JAWS, NVDA, VoiceOver). Some third-party components may be less consistent.</td>
</tr>
<tr>
<td><strong>11.6 Documented Accessibility Features</strong></td>
<td><em>Supports</em></td>
<td>Accessibility features are described in help documentation and support materials.</td>
</tr>
<tr>
<td><strong>11.7 User Preferences</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Browser/OS settings for font size and zoom are honored. Persistent user preferences are limited.</td>
</tr>
<tr>
<td><strong>11.8.2 Authoring Tools – Content Accessibility Support</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Built-in content entry forms are accessible. However, user-generated content (e.g., uploaded files) may not be accessible unless remediated by the content creator.</td>
</tr>
<tr>
<td><strong>11.8.3 Preservation of Accessibility Information</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Most accessibility metadata (e.g., headings, alt text) is preserved in export features. Manual review is recommended for user-uploaded content.</td>
</tr>
</table>

### Clause [12: Documentation and Support Services](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=84)

Notes: As a software vendor, we provide accessible software and documentation to our customers. The responsibility for ensuring accessible support and communication with end users (e.g., patients or public users) lies with the organizations that deploy and operate the platform.

<table>
<tr>
<td><strong>Clause</strong></td>
<td><strong>Conformance Level</strong></td>
<td><strong>Remarks and Explanations</strong></td>
</tr>
<tr>
<td><strong>12.1.1 Scope</strong></td>
<td><em>Supports</em></td>
<td>This clause applies to all support documentation and services provided by the vendor. Documentation is reviewed for accessibility and distributed electronically.</td>
</tr>
<tr>
<td><strong>12.1.2 Accessibility of documentation</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Documentation is primarily provided in accessible formats (e.g., structured HTML, tagged PDF, or DOCX). Most materials meet WCAG 2.1 Level AA. Some legacy or customer-contributed files may lack complete semantic markup or alt text.</td>
</tr>
<tr>
<td><strong>12.2.1 Accessibility of support services</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Vendor-facing support channels (e.g., technical helpdesk, knowledge base) are designed for accessibility. However, the vendor does not provide direct patient-facing communication or accessibility accommodations (e.g., sign language or relay services).</td>
</tr>
<tr>
<td><strong>12.2.2 Information on accessibility and compatibility features</strong></td>
<td><em>Supports</em></td>
<td>Documentation includes information about accessibility features (e.g., screen reader support, keyboard navigation, contrast settings) relevant to the software.</td>
</tr>
<tr>
<td><strong>12.2.3 Effective communication</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Communication with customer organizations is conducted through accessible email and ticketing systems. Support for end-user accommodations (e.g., interpreters, alternate formats) is the responsibility of the deploying organization.</td>
</tr>
<tr>
<td><strong>12.2.4 Support for different disabilities</strong></td>
<td><em>Supports with Exceptions</em></td>
<td>Technical support staff are trained to address software accessibility concerns, but end-user accommodation policies (e.g., braille, large print, auxiliary aids) are managed by the implementing customer (e.g., healthcare provider).</td>
</tr>
</table>

### Clause [13: ICT Providing Relay or Emergency Service Access](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=86)

Notes:

<table>
<tr>
<td><strong>Clause</strong></td>
<td><strong>Conformance Level</strong></td>
<td><strong>Remarks and Explanations</strong></td>
</tr>
<tr>
<td><strong>13.1 General</strong></td>
<td><em>Not Applicable</em></td>
<td>The WebChart Patient Portal does not provide telecommunications relay services or access to emergency service systems (e.g., 112, 911). It is not intended for use as a primary means of contacting emergency services.</td>
</tr>
<tr>
<td><strong>13.2 Real-time text capability</strong></td>
<td><em>Not Applicable</em></td>
<td>The platform does not support real-time text (RTT) for emergency or relay service communications.</td>
</tr>
<tr>
<td><strong>13.3 Speech-to-text and text-to-speech</strong></td>
<td><em>Not Applicable</em></td>
<td>The software does not offer built-in speech-to-text or text-to-speech functionality for relay or emergency service interaction.</td>
</tr>
<tr>
<td><strong>13.4 Video communication for sign language</strong></td>
<td><em>Not Applicable</em></td>
<td>While the platform may support video for telehealth, it is not designed for or integrated with national sign language relay services or emergency interpreting.</td>
</tr>
<tr>
<td><strong>13.5 User interface for emergency services</strong></td>
<td><em>Not Applicable</em></td>
<td>The product does not present or control user interfaces for dialing, routing, or managing emergency service calls.</td>
</tr>
<tr>
<td><strong>13.6 Location and callback information</strong></td>
<td><em>Not Applicable</em></td>
<td>The software does not transmit caller location or enable emergency callback. Any location tracking or callback functionality would be the responsibility of the healthcare provider or network administrator.</td>
</tr>
</table>

## Legal Disclaimer

The information provided in this Voluntary Product Accessibility Template (VPAT®) is for informational purposes only and is intended to assist federal, state, and local government agencies in making preliminary assessments regarding the accessibility of the WebChart and Enterprise Health Patient Portal. This document is based on the product's current design and features as of the date of publication and reflects our good faith assessment of the product's conformance with applicable accessibility standards, including Section 508 of the Rehabilitation Act, WCAG 2.1, and EN 301 549 where applicable.

No warranties, express or implied, are made in this document. Accessibility features and conformance may vary based on product configuration, user environment, and assistive technology used. This VPAT does not constitute a legally binding commitment or representation, and no liability shall be assumed for any reliance on this document.

We recommend that purchasers and evaluators perform their own independent accessibility testing and due diligence prior to procurement or deployment.

VPAT® is a registered trademark of the Information Technology Industry Council (ITI).
