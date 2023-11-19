---
id: '1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80'
title: 'HL7 Segment Definitions'
date: '2023-09-07T20:03:38.610Z'
version: 286
lastAuthor: 'Nick Wallace'
mimeType: 'text/x-markdown'
links:
  - 'sending-hl7-messages-to-system.md'
  - 'sample-hl7-messages.md'
source: 'https://drive.google.com/open?id=1UOWa1lEWNqb3lpaVgtPcU0rmNo5O_v_2udjcqVgZt80'
wikigdrive: 'dev'
---
{{% anchor sys="msh" %}}


## Message Header (MSH)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>1</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Field Separator</td>
</tr>
<tr>
<td>2</td>
<td>4</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Encoding Characters</td>
</tr>
<tr>
<td>3</td>
<td>15</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Sending Application</td>
</tr>
<tr>
<td>4</td>
<td>20</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Sending Facility</td>
</tr>
<tr>
<td>5</td>
<td>15</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Receiving Application</td>
</tr>
<tr>
<td>6</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Receiving Facility</td>
</tr>
<tr>
<td>7</td>
<td>19</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Date/Time of Message</td>
</tr>
<tr>
<td>8</td>
<td>40</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Security</td>
</tr>
<tr>
<td>9</td>
<td>7</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Message Type</td>
</tr>
<tr>
<td>10</td>
<td>20</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Message Control ID</td>
</tr>
<tr>
<td>11</td>
<td>1</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Processing ID</td>
</tr>
<tr>
<td>12</td>
<td>8</td>
<td>NM</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Version ID</td>
</tr>
<tr>
<td>13</td>
<td>15</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Sequence Number</td>
</tr>
<tr>
<td>14</td>
<td>180</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Continuation Pointer</td>
</tr>
<tr>
<td>15</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Accept Acknowledgment Type</td>
</tr>
<tr>
<td>16</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Application Acknowledgment Type</td>
</tr>
<tr>
<td>17</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Country Code</td>
</tr>
<tr>
<td>18</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Character Set</td>
</tr>

</table>

## **Master File Identification (MFI)**


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>60</td>
<td>CE</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Master File Identifier</td>
</tr>
<tr>
<td>2</td>
<td>180</td>
<td>HD</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Master File Application Identifier</td>
</tr>
<tr>
<td>3</td>
<td>3</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>File-Level Event Code</td>
</tr>
<tr>
<td>4</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Entered Date/Time</td>
</tr>
<tr>
<td>5</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Effective Date/Time</td>
</tr>
<tr>
<td>6</td>
<td>2</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Response Level Code</td>
</tr>

</table>

## **Master File Entry (MFE)**


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>3</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Record-Level Event Code</td>
</tr>
<tr>
<td>2</td>
<td>20</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>MFN Control ID</td>
</tr>
<tr>
<td>3</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Effective Date/Time</td>
</tr>
<tr>
<td>4</td>
<td>200</td>
<td>FT</td>
<td>REQ</td>
<td>NO_MAX</td>
<td>Primary Key Value - MFE</td>
</tr>
<tr>
<td>5</td>
<td>3</td>
<td>ID</td>
<td>REQ</td>
<td>NO_MAX</td>
<td>Primary Key Value Type</td>
</tr>

</table>
{{% anchor sys="msa" %}}


## Message Acknowledgement (MSA)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>2</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Acknowledgement Code</td>
</tr>
<tr>
<td>2</td>
<td>20</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Message Control ID</td>
</tr>
<tr>
<td>3</td>
<td>80</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Text Message</td>
</tr>
<tr>
<td>4</td>
<td>15</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Expected Sequence Number</td>
</tr>
<tr>
<td>5</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Delayed Ack Type</td>
</tr>

</table>
{{% anchor sys="evn" %}}


## Event Type (EVN)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>3</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Event Type Code</td>
</tr>
<tr>
<td>2</td>
<td>19</td>
<td>TS</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Date/Time of Event</td>
</tr>
<tr>
<td>3</td>
<td>19</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Date/Time Planned Event</td>
</tr>
<tr>
<td>4</td>
<td>3</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Event Reason Code</td>
</tr>

</table>
{{% anchor sys="mrg" %}}


## Merge Patient Information (MRG)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>250</td>
<td>CX</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Prior Patient Identifier List</td>
</tr>
<tr>
<td>2</td>
<td>250</td>
<td>CX</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Prior Alternate Patient ID</td>
</tr>
<tr>
<td>3</td>
<td>250</td>
<td>CX</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Prior Patient Account Number</td>
</tr>
<tr>
<td>4</td>
<td>250</td>
<td>CX</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Prior Patient ID</td>
</tr>
<tr>
<td>5</td>
<td>250</td>
<td>CX</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Prior Visit Number</td>
</tr>
<tr>
<td>6</td>
<td>250</td>
<td>CX</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Prior Alternate Visit ID</td>
</tr>
<tr>
<td>7</td>
<td>250</td>
<td>XPN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Prior Patient Name</td>
</tr>

</table>
{{% anchor sys="pid" %}}


## Patient Identification (PID)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Set ID - PID</td>
</tr>
<tr>
<td>2</td>
<td>20</td>
<td>CX</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Patient ID</td>
</tr>
<tr>
<td>3</td>
<td>250</td>
<td>CX</td>
<td>REQ</td>
<td>NO_MAX</td>
<td>Patient Identifier List</td>
</tr>
<tr>
<td>4</td>
<td>20</td>
<td>CX</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Alternate Patient ID - PID</td>
</tr>
<tr>
<td>5</td>
<td>250</td>
<td>XPN</td>
<td>REQ</td>
<td>NO_MAX</td>
<td>Patient Name</td>
</tr>
<tr>
<td>6</td>
<td>250</td>
<td>XPN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Mother's Maiden Name</td>
</tr>
<tr>
<td>7</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Date/Time of Birth</td>
</tr>
<tr>
<td>8</td>
<td>1</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Sex</td>
</tr>
<tr>
<td>9</td>
<td>250</td>
<td>XPN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Patient Alias</td>
</tr>
<tr>
<td>10</td>
<td>250</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Race</td>
</tr>
<tr>
<td>11</td>
<td>250</td>
<td>XAD</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Patient Address</td>
</tr>
<tr>
<td>12</td>
<td>4</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>County Code</td>
</tr>
<tr>
<td>13</td>
<td>250</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Phone Number - Home</td>
</tr>
<tr>
<td>14</td>
<td>250</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Phone Number - Business</td>
</tr>
<tr>
<td>15</td>
<td>250</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Primary Language</td>
</tr>
<tr>
<td>16</td>
<td>250</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Marital Status</td>
</tr>
<tr>
<td>17</td>
<td>250</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Religion</td>
</tr>
<tr>
<td>18</td>
<td>250</td>
<td>CX</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Patient Account Number</td>
</tr>
<tr>
<td>19</td>
<td>16</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>SSN Number - Patient (not used)</td>
</tr>
<tr>
<td>20</td>
<td>25</td>
<td>DLN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Driver's License Number - Patient (not used)</td>
</tr>
<tr>
<td>21</td>
<td>250</td>
<td>CX</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Mother's Identifier</td>
</tr>
<tr>
<td>22</td>
<td>250</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Ethnic Group</td>
</tr>
<tr>
<td>23</td>
<td>250</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Birth Place</td>
</tr>
<tr>
<td>24</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Multiple Birth Indicator</td>
</tr>
<tr>
<td>25</td>
<td>2</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Birth Order</td>
</tr>
<tr>
<td>26</td>
<td>250</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Citizenship</td>
</tr>
<tr>
<td>27</td>
<td>250</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Veterans Military Status</td>
</tr>
<tr>
<td>28</td>
<td>250</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Nationality</td>
</tr>
<tr>
<td>29</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Patient Death Date and Time</td>
</tr>
<tr>
<td>30</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Patient Death Indicator</td>
</tr>
<tr>
<td>31</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Identity Unknown Indicator</td>
</tr>
<tr>
<td>32</td>
<td>20</td>
<td>IS</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Identity Reliability Code</td>
</tr>
<tr>
<td>33</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Last Update Date/Time</td>
</tr>
<tr>
<td>34</td>
<td>241</td>
<td>HD</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Last Update Facility</td>
</tr>
<tr>
<td>35</td>
<td>250</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Species Code</td>
</tr>
<tr>
<td>36</td>
<td>250</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Breed Code</td>
</tr>
<tr>
<td>37</td>
<td>80</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Strain</td>
</tr>
<tr>
<td>38</td>
<td>250</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Production Class Code</td>
</tr>
<tr>
<td>39</td>
<td>250</td>
<td>CWE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Tribal Citizenship</td>
</tr>

</table>
{{% anchor sys="pd1" %}}


## Patient Additional Demographics (PD1)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Living Dependency</td>
</tr>
<tr>
<td>2</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Living Arrangement</td>
</tr>
<tr>
<td>3</td>
<td>90</td>
<td>XON</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Patient Primary Facility</td>
</tr>
<tr>
<td>4</td>
<td>90</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Patient Primary Care Provider Name & ID No.</td>
</tr>
<tr>
<td>5</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Student Indicator</td>
</tr>
<tr>
<td>6</td>
<td>2</td>
<td>IS</td>
<td>0PT</td>
<td>NO_RPT</td>
<td>Handicap</td>
</tr>
<tr>
<td>7</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Living Will</td>
</tr>
<tr>
<td>8</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Organ Donor</td>
</tr>
<tr>
<td>9</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Separate Bill</td>
</tr>
<tr>
<td>10</td>
<td>20</td>
<td>CX</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Duplicate Patient</td>
</tr>
<tr>
<td>11</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Publicity Code</td>
</tr>
<tr>
<td>12</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Protection Indicator</td>
</tr>

</table>
{{% anchor sys="pv1" %}}


## Patient Visit (PV1)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Set Id</td>
</tr>
<tr>
<td>2</td>
<td>1</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Patient Class</td>
</tr>
<tr>
<td>3</td>
<td>80</td>
<td>PL</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Assigned Patient Location</td>
</tr>
<tr>
<td>4</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Admission Type</td>
</tr>
<tr>
<td>5</td>
<td>250</td>
<td>CX</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Pre-Admit Number</td>
</tr>
<tr>
<td>6</td>
<td>80</td>
<td>PL</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Prior Patient Location</td>
</tr>
<tr>
<td>7</td>
<td>250</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Attending Doctor</td>
</tr>
<tr>
<td>8</td>
<td>250</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Referring Doctor</td>
</tr>
<tr>
<td>9</td>
<td>250</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Consulting Doctor (use ROL segment)</td>
</tr>
<tr>
<td>10</td>
<td>3</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Hospital Service</td>
</tr>
<tr>
<td>11</td>
<td>80</td>
<td>PL</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Temporary Location</td>
</tr>
<tr>
<td>12</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Pre-Admit Test Indicator</td>
</tr>
<tr>
<td>13</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Re-Admission Indicator</td>
</tr>
<tr>
<td>14</td>
<td>6</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Admit Source</td>
</tr>
<tr>
<td>15</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Ambulatory Status</td>
</tr>
<tr>
<td>16</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>VIP Indicators</td>
</tr>
<tr>
<td>17</td>
<td>250</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Admitting Doctor</td>
</tr>
<tr>
<td>18</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Patient Type</td>
</tr>
<tr>
<td>19</td>
<td>250</td>
<td>CX</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Visit Number</td>
</tr>
<tr>
<td>20</td>
<td>50</td>
<td>FC</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Financial Class</td>
</tr>
<tr>
<td>21</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Charge Price Indicator</td>
</tr>
<tr>
<td>22</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Courtesy Code</td>
</tr>
<tr>
<td>23</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Credit Rating</td>
</tr>
<tr>
<td>24</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Contract Code</td>
</tr>
<tr>
<td>25</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Contract Effective Date</td>
</tr>
<tr>
<td>26</td>
<td>12</td>
<td>NM</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Contract Amount</td>
</tr>
<tr>
<td>27</td>
<td>3</td>
<td>NM</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Contract Period</td>
</tr>
<tr>
<td>28</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Interest Code</td>
</tr>
<tr>
<td>29</td>
<td>4</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Transfer to Bad Debt Code</td>
</tr>
<tr>
<td>30</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Transfer to Bad Debt Date</td>
</tr>
<tr>
<td>31</td>
<td>10</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Bad Debt Agency Code</td>
</tr>
<tr>
<td>32</td>
<td>12</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Bad Debt Transfer Amount</td>
</tr>
<tr>
<td>33</td>
<td>12</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Bad Debt Recovery Amount</td>
</tr>
<tr>
<td>34</td>
<td>1</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Delete Account Indicator</td>
</tr>
<tr>
<td>35</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Delete Account Date</td>
</tr>
<tr>
<td>36</td>
<td>3</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Discharge Disposition</td>
</tr>
<tr>
<td>37</td>
<td>47</td>
<td>DLD</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Discharged to Location</td>
</tr>
<tr>
<td>38</td>
<td>250</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Diet Type</td>
</tr>
<tr>
<td>39</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Servicing Facility</td>
</tr>
<tr>
<td>40</td>
<td>1</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Bed Status (not used)</td>
</tr>
<tr>
<td>41</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Status</td>
</tr>
<tr>
<td>42</td>
<td>80</td>
<td>PL</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Pending Location</td>
</tr>
<tr>
<td>43</td>
<td>80</td>
<td>PL</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Prior Temporary Location</td>
</tr>
<tr>
<td>44</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Admit Date/Time</td>
</tr>
<tr>
<td>45</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Discharge Date/Time</td>
</tr>
<tr>
<td>46</td>
<td>12</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Current Patient Balance</td>
</tr>
<tr>
<td>47</td>
<td>12</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Total Charges</td>
</tr>
<tr>
<td>48</td>
<td>12</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Total Adjustments</td>
</tr>
<tr>
<td>49</td>
<td>12</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Total Payments</td>
</tr>
<tr>
<td>50</td>
<td>250</td>
<td>CX</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Alternate Visit ID</td>
</tr>
<tr>
<td>51</td>
<td>1</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Visit Indicator</td>
</tr>
<tr>
<td>52</td>
<td>250</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Other Healthcare Provider</td>
</tr>

</table>
{{% anchor sys="pv2" %}}


## Patient Visit - Additional Information (PV2)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>80</td>
<td>PL</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Prior Pending Location</td>
</tr>
<tr>
<td>2</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Accommodation Code</td>
</tr>
<tr>
<td>3</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Admit Reason</td>
</tr>
<tr>
<td>4</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Transfer Reason</td>
</tr>
<tr>
<td>5</td>
<td>25</td>
<td>ST</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Patient Valuables</td>
</tr>
<tr>
<td>6</td>
<td>25</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Patient Valuables Location</td>
</tr>
<tr>
<td>7</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Visit User Code</td>
</tr>
<tr>
<td>8</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Expected Admit Date/Time</td>
</tr>
<tr>
<td>9</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Expected Discharge Date/Time</td>
</tr>
<tr>
<td>10</td>
<td>3</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Estimated Length of Inpatient Stay</td>
</tr>
<tr>
<td>11</td>
<td>3</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Actual Length of Inpatient Stay</td>
</tr>
<tr>
<td>12</td>
<td>50</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Visit Description</td>
</tr>
<tr>
<td>13</td>
<td>90</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Referral Source Code</td>
</tr>
<tr>
<td>14</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Previous Service Date</td>
</tr>
<tr>
<td>15</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Employment Illness Related Indicator</td>
</tr>
<tr>
<td>16</td>
<td>1</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Purge Status Code</td>
</tr>
<tr>
<td>17</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Purge Status Date</td>
</tr>
<tr>
<td>18</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Special Program Code</td>
</tr>
<tr>
<td>19</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Retention Indicator</td>
</tr>
<tr>
<td>20</td>
<td>1</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Expected Number of Insurance Plans</td>
</tr>
<tr>
<td>21</td>
<td>1</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Visit Publicity Code</td>
</tr>
<tr>
<td>22</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Visit Protection Indicator</td>
</tr>
<tr>
<td>23</td>
<td>90</td>
<td>XON</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Clinic Organization Name</td>
</tr>
<tr>
<td>24</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Patient Status Code</td>
</tr>
<tr>
<td>25</td>
<td>1</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Visit Priority Code</td>
</tr>
<tr>
<td>26</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Previous Treatment Date</td>
</tr>
<tr>
<td>27</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Expected Discharge Disposition</td>
</tr>
<tr>
<td>28</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Signature on File Date</td>
</tr>
<tr>
<td>29</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>First Similar Illness Date</td>
</tr>
<tr>
<td>30</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Patient Charge Adjustment Code</td>
</tr>
<tr>
<td>31</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Recurring Service Code</td>
</tr>
<tr>
<td>32</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Billing Media Code</td>
</tr>
<tr>
<td>33</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Expected Surgery Date & Time</td>
</tr>
<tr>
<td>34</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Military Partnership Code</td>
</tr>
<tr>
<td>35</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Military Non-Availability Code</td>
</tr>
<tr>
<td>36</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Newborn Baby Indicator</td>
</tr>
<tr>
<td>37</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Baby Detained Indicator</td>
</tr>

</table>
{{% anchor sys="dg1" %}}


## Diagnosis (DG1)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Set ID - Diagnosis</td>
</tr>
<tr>
<td>2</td>
<td>2</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Diagnosis Coding Method</td>
</tr>
<tr>
<td>3</td>
<td>10</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Diagnosis Code</td>
</tr>
<tr>
<td>4</td>
<td>40</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Diagnosis Description</td>
</tr>
<tr>
<td>5</td>
<td>19</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Diagnosis Date/Time</td>
</tr>
<tr>
<td>6</td>
<td>2</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Diagnosis/DRG Type</td>
</tr>
<tr>
<td>7</td>
<td>4</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Major Diagnostic Category</td>
</tr>
<tr>
<td>8</td>
<td>4</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Diagnostic Related Group</td>
</tr>
<tr>
<td>9</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>DRG Approval Indicator</td>
</tr>
<tr>
<td>10</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>DRG Grouper Review Code</td>
</tr>
<tr>
<td>11</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Outlier Type</td>
</tr>
<tr>
<td>12</td>
<td>3</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Outlier Days</td>
</tr>
<tr>
<td>13</td>
<td>12</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Outlier Cost</td>
</tr>
<tr>
<td>14</td>
<td>4</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Grouper Version and Type</td>
</tr>
<tr>
<td>15</td>
<td>2</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Diagnosis/DRG priority</td>
</tr>
<tr>
<td>16</td>
<td>36</td>
<td>TX</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Diagnosing clinician</td>
</tr>

</table>
{{% anchor sys="ft1" %}}


## Financial Transaction (FT1)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>1 Set ID - Financial Trans</td>
</tr>
<tr>
<td>2</td>
<td>12</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>2 Transaction ID</td>
</tr>
<tr>
<td>3</td>
<td>5</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>3 Transaction Batch ID</td>
</tr>
<tr>
<td>4</td>
<td>8</td>
<td>DT</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>4 Transaction Date</td>
</tr>
<tr>
<td>5</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>5 Transaction Posting Date</td>
</tr>
<tr>
<td>6</td>
<td>8</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>6 Transaction Type</td>
</tr>
<tr>
<td>7</td>
<td>20</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>7 Transaction Code</td>
</tr>
<tr>
<td>8</td>
<td>40</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>8 Transaction Description</td>
</tr>
<tr>
<td>9</td>
<td>40</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>9 Transaction Desc. - Alt</td>
</tr>
<tr>
<td>10</td>
<td>4</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>10 Transaction Quantity</td>
</tr>
<tr>
<td>11</td>
<td>12</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>11 Transaction Amount - Ext.</td>
</tr>
<tr>
<td>12</td>
<td>12</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>12 Transaction Amount - Unit</td>
</tr>
<tr>
<td>13</td>
<td>16</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>13 Department Code</td>
</tr>
<tr>
<td>14</td>
<td>8</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>14 Insurance Plan ID</td>
</tr>
<tr>
<td>15</td>
<td>12</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>15 Insurance Amount</td>
</tr>
<tr>
<td>16</td>
<td>12</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>16 Patient Location</td>
</tr>
<tr>
<td>17</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>17 Fee Schedule</td>
</tr>
<tr>
<td>18</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>18 Patient Type</td>
</tr>
<tr>
<td>19</td>
<td>8</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>19 Diagnosis Code</td>
</tr>
<tr>
<td>20</td>
<td>60</td>
<td>CN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>20 Performed by Code</td>
</tr>
<tr>
<td>21</td>
<td>60</td>
<td>CN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>21 Ordered by Code</td>
</tr>
<tr>
<td>22</td>
<td>12</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>22 Unit Cost</td>
</tr>
<tr>
<td>23</td>
<td>22</td>
<td>EI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>23 Filler Order Number</td>
</tr>
<tr>
<td>24</td>
<td>120</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>24 Entered By Code</td>
</tr>
<tr>
<td>25</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>25 Procedure Code</td>
</tr>
<tr>
<td>26</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>26 Procedure Code Modifier</td>
</tr>

</table>
{{% anchor sys="gt1" %}}


## Guarantor (GT1)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Set ID - Guarantor</td>
</tr>
<tr>
<td>2</td>
<td>20</td>
<td>ID</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Guarantor Number</td>
</tr>
<tr>
<td>3</td>
<td>48</td>
<td>PN</td>
<td>REQ</td>
<td>NO_MAX</td>
<td>Guarantor Name</td>
</tr>
<tr>
<td>4</td>
<td>48</td>
<td>PN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Guarantor Spouse Name</td>
</tr>
<tr>
<td>5</td>
<td>106</td>
<td>AD</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Guarantor Address</td>
</tr>
<tr>
<td>6</td>
<td>40</td>
<td>TN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Guarantor Phone - Home</td>
</tr>
<tr>
<td>7</td>
<td>40</td>
<td>TN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Guarantor Phone - Bus</td>
</tr>
<tr>
<td>8</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Date of Birth</td>
</tr>
<tr>
<td>9</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Sex</td>
</tr>
<tr>
<td>10</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Type</td>
</tr>
<tr>
<td>11</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Relationship</td>
</tr>
<tr>
<td>12</td>
<td>11</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor SSN</td>
</tr>
<tr>
<td>13</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Date - Begin</td>
</tr>
<tr>
<td>14</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Date - End</td>
</tr>
<tr>
<td>15</td>
<td>2</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Priority</td>
</tr>
<tr>
<td>16</td>
<td>45</td>
<td>ST</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Guarantor Employer Name</td>
</tr>
<tr>
<td>17</td>
<td>106</td>
<td>AD</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Guarantor Employer Addr</td>
</tr>
<tr>
<td>18</td>
<td>40</td>
<td>TN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Guarantor Employer Phone</td>
</tr>
<tr>
<td>19</td>
<td>20</td>
<td>ST</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Guarantor Employee ID #</td>
</tr>
<tr>
<td>20</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Employmt Status</td>
</tr>
<tr>
<td>21</td>
<td>130</td>
<td>XON</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Guarantor Organization Name</td>
</tr>
<tr>
<td>22</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Billing Hold Flag</td>
</tr>
<tr>
<td>23</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Credit Rating Code</td>
</tr>
<tr>
<td>24</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Death Date And Time</td>
</tr>
<tr>
<td>25</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Death Flag</td>
</tr>
<tr>
<td>26</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Charge Adjustment Code</td>
</tr>
<tr>
<td>27</td>
<td>10</td>
<td>CP</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Household Annual Income</td>
</tr>
<tr>
<td>28</td>
<td>3</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Household Size</td>
</tr>
<tr>
<td>29</td>
<td>20</td>
<td>CX</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Guarantor Employer ID Number</td>
</tr>
<tr>
<td>30</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Marital Status Code</td>
</tr>
<tr>
<td>31</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Hire Effective Date</td>
</tr>
<tr>
<td>32</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Employment Stop Date</td>
</tr>
<tr>
<td>33</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Living Dependency</td>
</tr>
<tr>
<td>34</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Ambulatory Status</td>
</tr>
<tr>
<td>35</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Citizenship</td>
</tr>
<tr>
<td>36</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Primary Language</td>
</tr>
<tr>
<td>37</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Living Arrangement</td>
</tr>
<tr>
<td>38</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Publicity Code</td>
</tr>
<tr>
<td>39</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Protection Indicator</td>
</tr>
<tr>
<td>40</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Student Indicator</td>
</tr>
<tr>
<td>41</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Religion</td>
</tr>
<tr>
<td>42</td>
<td>48</td>
<td>XPN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Mother's Maiden Name</td>
</tr>
<tr>
<td>43</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Nationality</td>
</tr>
<tr>
<td>44</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Ethnic Group</td>
</tr>
<tr>
<td>45</td>
<td>48</td>
<td>XPN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Contact Person's Name</td>
</tr>
<tr>
<td>46</td>
<td>40</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Contact Person's Telephone Number</td>
</tr>
<tr>
<td>47</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Contact Reason</td>
</tr>
<tr>
<td>48</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Contact Relationship</td>
</tr>
<tr>
<td>49</td>
<td>20</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Job Title</td>
</tr>
<tr>
<td>50</td>
<td>20</td>
<td>JCC</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Job Code/Class</td>
</tr>
<tr>
<td>51</td>
<td>130</td>
<td>XON</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Guarantor Employer's Organization Name</td>
</tr>
<tr>
<td>52</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Handicap</td>
</tr>
<tr>
<td>53</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Job Status</td>
</tr>
<tr>
<td>54</td>
<td>50</td>
<td>FC</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor Financial Class</td>
</tr>
<tr>
<td>55</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Guarantor Race</td>
</tr>

</table>
{{% anchor sys="in1" %}}


## Insurance (IN1)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Set ID - Insurance</td>
</tr>
<tr>
<td>2</td>
<td>8</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Insurance Plan ID</td>
</tr>
<tr>
<td>3</td>
<td>8</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Insurance Company ID</td>
</tr>
<tr>
<td>4</td>
<td>45</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Insurance Company Name</td>
</tr>
<tr>
<td>5</td>
<td>106</td>
<td>AD</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Insurance Company Address</td>
</tr>
<tr>
<td>6</td>
<td>48</td>
<td>PN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Insurance Co Contact Pers</td>
</tr>
<tr>
<td>7</td>
<td>40</td>
<td>TN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Insurance Co Phone Number</td>
</tr>
<tr>
<td>8</td>
<td>12</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Group Number</td>
</tr>
<tr>
<td>9</td>
<td>35</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Group Name</td>
</tr>
<tr>
<td>10</td>
<td>12</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Insured's Group Emp. ID</td>
</tr>
<tr>
<td>11</td>
<td>45</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Insured's Group Emp. Name</td>
</tr>
<tr>
<td>12</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Plan Effective Date</td>
</tr>
<tr>
<td>13</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Plan Expiration Date</td>
</tr>
<tr>
<td>14</td>
<td>55</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Authorization Information</td>
</tr>
<tr>
<td>15</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Plan Type</td>
</tr>
<tr>
<td>16</td>
<td>48</td>
<td>PN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Name of Insured</td>
</tr>
<tr>
<td>17</td>
<td>10</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Insured's Relation to Pat</td>
</tr>
<tr>
<td>18</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Insured's Date of Birth</td>
</tr>
<tr>
<td>19</td>
<td>106</td>
<td>AD</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Insured's Address</td>
</tr>
<tr>
<td>20</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Assignment of Benefits</td>
</tr>
<tr>
<td>21</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Coordination of Benefits</td>
</tr>
<tr>
<td>22</td>
<td>2</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Coord. of Ben. Priority</td>
</tr>
<tr>
<td>23</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Notice of Admission Code</td>
</tr>
<tr>
<td>24</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Notice of Admission Date</td>
</tr>
<tr>
<td>25</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Rpt of Eligibility Code</td>
</tr>
<tr>
<td>26</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Rpt of Eligibility Date</td>
</tr>
<tr>
<td>27</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Release Information Code</td>
</tr>
<tr>
<td>28</td>
<td>15</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Pre-Admit Cert. (PAC)</td>
</tr>
<tr>
<td>29</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Verification Date</td>
</tr>
<tr>
<td>30</td>
<td>60</td>
<td>CM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Verification By</td>
</tr>
<tr>
<td>31</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Type of Agreement Code</td>
</tr>
<tr>
<td>32</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Billing Status</td>
</tr>
<tr>
<td>33</td>
<td>4</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Lifetime Reserve Days</td>
</tr>
<tr>
<td>34</td>
<td>4</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Delay Before L. R. Day</td>
</tr>
<tr>
<td>35</td>
<td>8</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Company Plan Code</td>
</tr>
<tr>
<td>36</td>
<td>80</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Policy Number</td>
</tr>
<tr>
<td>37</td>
<td>12</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Policy Deductible</td>
</tr>
<tr>
<td>38</td>
<td>12</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Policy Limit - Amount</td>
</tr>
<tr>
<td>39</td>
<td>4</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Policy Limit - Days</td>
</tr>
<tr>
<td>40</td>
<td>12</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Room Rate - Semi-Private</td>
</tr>
<tr>
<td>41</td>
<td>12</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Room Rate - Private</td>
</tr>
<tr>
<td>42</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Insured's Employ Status</td>
</tr>
<tr>
<td>43</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Insured's Sex</td>
</tr>
<tr>
<td>44</td>
<td>106</td>
<td>XAD</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Insured's Employer Addr</td>
</tr>
<tr>
<td>45</td>
<td>2</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Verification Status</td>
</tr>
<tr>
<td>46</td>
<td>8</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Prior Insurance Plan ID</td>
</tr>
<tr>
<td>47</td>
<td>3</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Coverage Type</td>
</tr>
<tr>
<td>48</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Handicap</td>
</tr>
<tr>
<td>49</td>
<td>12</td>
<td>CX</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Insured<92>s ID Number</td>
</tr>

</table>
{{% anchor sys="in2" %}}


## Insurance - Additional Information (IN2)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>59</td>
<td>CX</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Insured's Employee ID</td>
</tr>
<tr>
<td>2</td>
<td>11</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Insured's Social Security Number</td>
</tr>
<tr>
<td>3</td>
<td>130</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Insured's Employer's Name and ID</td>
</tr>
<tr>
<td>4</td>
<td>1</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Employer Information Data</td>
</tr>
<tr>
<td>5</td>
<td>1</td>
<td>IS</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Mail Claim Party</td>
</tr>
<tr>
<td>6</td>
<td>15</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Medicare Health Ins Card Number</td>
</tr>
<tr>
<td>7</td>
<td>48</td>
<td>XPN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Medicaid Case Name</td>
</tr>
<tr>
<td>8</td>
<td>15</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Medicaid Case Number</td>
</tr>
<tr>
<td>9</td>
<td>48</td>
<td>XPN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Military Sponsor Name</td>
</tr>
<tr>
<td>10</td>
<td>20</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Military ID Number</td>
</tr>
<tr>
<td>11</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Dependent Of Military Recipient</td>
</tr>
<tr>
<td>12</td>
<td>25</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Military Organization</td>
</tr>
<tr>
<td>13</td>
<td>25</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Military Station</td>
</tr>
<tr>
<td>14</td>
<td>14</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Military Service</td>
</tr>
<tr>
<td>15</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Military Rank/Grade</td>
</tr>
<tr>
<td>16</td>
<td>3</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Military Status</td>
</tr>
<tr>
<td>17</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Military Retire Date</td>
</tr>
<tr>
<td>18</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Military Non-Avail Cert On File</td>
</tr>
<tr>
<td>19</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Baby Coverage</td>
</tr>
<tr>
<td>20</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Combine Baby Bill</td>
</tr>
<tr>
<td>21</td>
<td>1</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Blood Deductible</td>
</tr>
<tr>
<td>22</td>
<td>48</td>
<td>XPN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Special Coverage Approval Name</td>
</tr>
<tr>
<td>23</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Special Coverage Approval Title</td>
</tr>
<tr>
<td>24</td>
<td>8</td>
<td>IS</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Non-Covered Insurance Code</td>
</tr>
<tr>
<td>25</td>
<td>59</td>
<td>CX</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Payor ID</td>
</tr>
<tr>
<td>26</td>
<td>59</td>
<td>CX</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Payor Subscriber ID</td>
</tr>
<tr>
<td>27</td>
<td>1</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Eligibility Source</td>
</tr>
<tr>
<td>28</td>
<td>25</td>
<td>CM</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Room Coverage Type/Amount</td>
</tr>
<tr>
<td>29</td>
<td>25</td>
<td>CM</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Policy Type/Amount</td>
</tr>
<tr>
<td>30</td>
<td>25</td>
<td>CM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Daily Deductible</td>
</tr>
<tr>
<td>31</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Living Dependency</td>
</tr>
<tr>
<td>32</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Ambulatory Status</td>
</tr>
<tr>
<td>33</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Citizenship</td>
</tr>
<tr>
<td>34</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Primary Language</td>
</tr>
<tr>
<td>35</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Living Arrangement</td>
</tr>
<tr>
<td>36</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Publicity Code</td>
</tr>
<tr>
<td>37</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Protection Indicator</td>
</tr>
<tr>
<td>38</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Student Indicator</td>
</tr>
<tr>
<td>39</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Religion</td>
</tr>
<tr>
<td>40</td>
<td>48</td>
<td>XPN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Mother's Maiden Name</td>
</tr>
<tr>
<td>41</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Nationality</td>
</tr>
<tr>
<td>42</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Ethnic Group</td>
</tr>
<tr>
<td>43</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Marital Status</td>
</tr>
<tr>
<td>44</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Insured's Employment Start Date</td>
</tr>
<tr>
<td>45</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Employment Stop Date</td>
</tr>
<tr>
<td>46</td>
<td>20</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Job Title</td>
</tr>
<tr>
<td>47</td>
<td>20</td>
<td>JCC</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Job Code/Class</td>
</tr>
<tr>
<td>48</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Job Status</td>
</tr>
<tr>
<td>49</td>
<td>48</td>
<td>XPN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Employer Contact Person Name</td>
</tr>
<tr>
<td>50</td>
<td>40</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Employer Contact Person Phone Number</td>
</tr>
<tr>
<td>51</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Employer Contact Reason</td>
</tr>
<tr>
<td>52</td>
<td>48</td>
<td>XPN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Insured's Contact Person's Name</td>
</tr>
<tr>
<td>53</td>
<td>40</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Insured's Contact Person Phone Number</td>
</tr>
<tr>
<td>54</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Insured's Contact Person Reason</td>
</tr>
<tr>
<td>55</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Relationship To The Patient Start Date</td>
</tr>
<tr>
<td>56</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Relationship To The Patient Stop Date</td>
</tr>
<tr>
<td>57</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Insurance Co. Contact Reason</td>
</tr>
<tr>
<td>58</td>
<td>40</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Insurance Co Contact Phone Number</td>
</tr>
<tr>
<td>59</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Policy Scope</td>
</tr>
<tr>
<td>60</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Policy Source</td>
</tr>
<tr>
<td>61</td>
<td>60</td>
<td>CX</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Patient Member Number</td>
</tr>
<tr>
<td>62</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Guarantor's Relationship To Insured</td>
</tr>
<tr>
<td>63</td>
<td>40</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Insured's Phone Number - Home</td>
</tr>
<tr>
<td>64</td>
<td>40</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Insured's Employer Phone Number</td>
</tr>
<tr>
<td>65</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Military Handicapped Program</td>
</tr>
<tr>
<td>66</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Suspend Flag</td>
</tr>
<tr>
<td>67</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Copay Limit Flag</td>
</tr>
<tr>
<td>68</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Stoploss Limit Flag</td>
</tr>
<tr>
<td>69</td>
<td>130</td>
<td>XON</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Insured Organization Name And ID</td>
</tr>
<tr>
<td>70</td>
<td>130</td>
<td>XON</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Insured Employer Organization Name And ID</td>
</tr>
<tr>
<td>71</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Race</td>
</tr>
<tr>
<td>72</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>HCFA Patient's Relationship to Insured</td>
</tr>

</table>

## **Insurance - Additional Information, Certification (IN3)**


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Set ID - IN3</td>
</tr>
<tr>
<td>2</td>
<td>59</td>
<td>CX</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Certification Number</td>
</tr>
<tr>
<td>3</td>
<td>60</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Certified By</td>
</tr>
<tr>
<td>4</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Certification Required</td>
</tr>
<tr>
<td>5</td>
<td>10</td>
<td>CM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Penalty</td>
</tr>
<tr>
<td>6</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Certification Date/Time</td>
</tr>
<tr>
<td>7</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Certification Modify Date/Time</td>
</tr>
<tr>
<td>8</td>
<td>60</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Operator</td>
</tr>
<tr>
<td>9</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Certification Begin Date</td>
</tr>
<tr>
<td>10</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Certification End Date</td>
</tr>
<tr>
<td>11</td>
<td>3</td>
<td>CM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Days</td>
</tr>
<tr>
<td>12</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Non-Concur Code/Description</td>
</tr>
<tr>
<td>13</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Non-Concur Effective Date/Time</td>
</tr>
<tr>
<td>14</td>
<td>60</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Physician Reviewer</td>
</tr>
<tr>
<td>15</td>
<td>48</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Certification Contact</td>
</tr>
<tr>
<td>16</td>
<td>40</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Certification Contact Phone Number</td>
</tr>
<tr>
<td>17</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Appeal Reason</td>
</tr>
<tr>
<td>18</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Certification Agency</td>
</tr>
<tr>
<td>19</td>
<td>40</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Certification Agency Phone Number</td>
</tr>
<tr>
<td>20</td>
<td>40</td>
<td>CM</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Pre-Certification Req/Window</td>
</tr>
<tr>
<td>21</td>
<td>48</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Case Manager</td>
</tr>
<tr>
<td>22</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Second Opinion Date</td>
</tr>
<tr>
<td>23</td>
<td>1</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Second Opinion Status</td>
</tr>
<tr>
<td>24</td>
<td>1</td>
<td>IS</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Second Opinion Documentation Received</td>
</tr>
<tr>
<td>25</td>
<td>60</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Second Opinion Physician</td>
</tr>

</table>
{{% anchor sys="pr1" %}}


## Procedures (PR1)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>REQ</td>
<td>NO_MAX</td>
<td>Set ID - Procedure</td>
</tr>
<tr>
<td>2</td>
<td>2</td>
<td>ID</td>
<td>REQ</td>
<td>NO_MAX</td>
<td>Procedure Coding Method</td>
</tr>
<tr>
<td>3</td>
<td>10</td>
<td>ID</td>
<td>REQ</td>
<td>NO_MAX</td>
<td>Procedure Code</td>
</tr>
<tr>
<td>4</td>
<td>40</td>
<td>ST</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Procedure Description</td>
</tr>
<tr>
<td>5</td>
<td>19</td>
<td>TS</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Procedure Date/Time</td>
</tr>
<tr>
<td>6</td>
<td>2</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Procedure Type</td>
</tr>
<tr>
<td>7</td>
<td>4</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Procedure Minutes</td>
</tr>
<tr>
<td>8</td>
<td>60</td>
<td>CN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Anesthesiologist</td>
</tr>
<tr>
<td>9</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Anesthesia Code</td>
</tr>
<tr>
<td>10</td>
<td>4</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Anesthesia Minutes</td>
</tr>
<tr>
<td>11</td>
<td>60</td>
<td>CN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Surgeon</td>
</tr>
<tr>
<td>12</td>
<td>60</td>
<td>CN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Resident Code</td>
</tr>
<tr>
<td>13</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Consent Code</td>
</tr>

</table>
{{% anchor sys="err" %}}


## Error (ERR)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>80</td>
<td>ID</td>
<td>REQ</td>
<td>NO_MAX</td>
<td>Error Code and Location</td>
</tr>

</table>
{{% anchor sys="zil" %}}


## ZIL


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>64</td>
<td>ID</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Dicom Study Ins UID</td>
</tr>

</table>
{{% anchor sys="ztn" %}}


## ZTN


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>100</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>System Handle</td>
</tr>
<tr>
<td>2</td>
<td>100</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>System OID</td>
</tr>
<tr>
<td>3</td>
<td>300</td>
<td><a href="#gjdgxs">TN</a></td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Translations used</td>
</tr>

</table>
{{% anchor sys="zdg" %}}


## ZDG


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>20</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Debug Message Type</td>
</tr>
<tr>
<td>2</td>
<td>500</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Debug Message</td>
</tr>

</table>
{{% anchor sys="nte" %}}


## Notes and Comments (NTE)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Set ID</td>
</tr>
<tr>
<td>2</td>
<td>8</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Source of Comment</td>
</tr>
<tr>
<td>3</td>
<td>64000</td>
<td>TX</td>
<td>REQ</td>
<td>NO_MAX</td>
<td>Comment</td>
</tr>
<tr>
<td>4</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Comment Type</td>
</tr>

</table>
{{% anchor sys="sch" %}}


## Scheduling Activity Information (SCH)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>75</td>
<td>EI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Placer Appointment ID</td>
</tr>
<tr>
<td>2</td>
<td>75</td>
<td>EI</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Filler Appointment ID</td>
</tr>
<tr>
<td>3</td>
<td>5</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Occurrence Number</td>
</tr>
<tr>
<td>4</td>
<td>22</td>
<td>EI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Placer Group Number</td>
</tr>
<tr>
<td>5</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Schedule ID</td>
</tr>
<tr>
<td>6</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Event Reason</td>
</tr>
<tr>
<td>7</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Appointment Reason</td>
</tr>
<tr>
<td>8</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Appointment Type</td>
</tr>
<tr>
<td>9</td>
<td>20</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Appointment Duration</td>
</tr>
<tr>
<td>10</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Appointment Duration Units</td>
</tr>
<tr>
<td>11</td>
<td>200</td>
<td>TQ</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Appointment Timing Quantity</td>
</tr>
<tr>
<td>12</td>
<td>48</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Placer Contact Person</td>
</tr>
<tr>
<td>13</td>
<td>40</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Placer Contact Phone Number</td>
</tr>
<tr>
<td>14</td>
<td>106</td>
<td>XAD</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Placer Contact Address</td>
</tr>
<tr>
<td>15</td>
<td>80</td>
<td>PL</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Placer Contact Location</td>
</tr>
<tr>
<td>16</td>
<td>38</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Filler Contact Person</td>
</tr>
<tr>
<td>17</td>
<td>40</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Filler Contact Phone Number</td>
</tr>
<tr>
<td>18</td>
<td>106</td>
<td>XAD</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Filler Contact Address</td>
</tr>
<tr>
<td>19</td>
<td>80</td>
<td>PL</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Filler Contact Location</td>
</tr>
<tr>
<td>20</td>
<td>48</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Entered by Person</td>
</tr>
<tr>
<td>21</td>
<td>40</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Entered by Phone Number</td>
</tr>
<tr>
<td>22</td>
<td>80</td>
<td>PL</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Entered by Location</td>
</tr>
<tr>
<td>23</td>
<td>75</td>
<td>EI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Parent Placer Appointment ID</td>
</tr>
<tr>
<td>24</td>
<td>75</td>
<td>EI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Parent Filler Appointment ID</td>
</tr>
<tr>
<td>25</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Filler Status Code</td>
</tr>

</table>
{{% anchor sys="rgs" %}}


## Resource Group (RGS)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Set ID</td>
</tr>
<tr>
<td>2</td>
<td>3</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Segment Action Code</td>
</tr>
<tr>
<td>3</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Resource Group ID</td>
</tr>

</table>
{{% anchor sys="ail" %}}


## Appointment Information - Location resource (AIL)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Set ID</td>
</tr>
<tr>
<td>2</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Segment Action Code</td>
</tr>
<tr>
<td>3</td>
<td>80</td>
<td>PL</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Location Resource ID</td>
</tr>
<tr>
<td>4</td>
<td>200</td>
<td>CE</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Location Type</td>
</tr>
<tr>
<td>5</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Location Group</td>
</tr>
<tr>
<td>6</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Start Date/Time</td>
</tr>
<tr>
<td>7</td>
<td>20</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Start Date/Time Offset</td>
</tr>
<tr>
<td>8</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Start Date/Time Offset Units</td>
</tr>
<tr>
<td>9</td>
<td>20</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Duration</td>
</tr>
<tr>
<td>10</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Duration Units</td>
</tr>
<tr>
<td>11</td>
<td>10</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Allow Substitution Code</td>
</tr>
<tr>
<td>12</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Filler Status Code</td>
</tr>

</table>
{{% anchor sys="aip" %}}


## Appointment Information - Personnel Resource (AIP)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Set ID</td>
</tr>
<tr>
<td>2</td>
<td>3</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Segment Action code</td>
</tr>
<tr>
<td>3</td>
<td>200</td>
<td>XCN</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Personnel Resource ID</td>
</tr>
<tr>
<td>4</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Resource Role</td>
</tr>
<tr>
<td>5</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Resource Group</td>
</tr>
<tr>
<td>6</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Start Date/Time</td>
</tr>
<tr>
<td>7</td>
<td>20</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Start Date/Time Offset</td>
</tr>
<tr>
<td>8</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Start Date/Time Offset Units</td>
</tr>
<tr>
<td>9</td>
<td>20</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Duration</td>
</tr>
<tr>
<td>10</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Duration Units</td>
</tr>
<tr>
<td>11</td>
<td>10</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Allow Substitution Code</td>
</tr>
<tr>
<td>12</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Filler Status Code</td>
</tr>

</table>
{{% anchor sys="aig" %}}


## Appointment Information - General Resource (AIG)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Set ID - AIG</td>
</tr>
<tr>
<td>2</td>
<td>3</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Segment Action Code</td>
</tr>
<tr>
<td>3</td>
<td>200</td>
<td>CE</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Resource ID</td>
</tr>
<tr>
<td>4</td>
<td>200</td>
<td>CE</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Resource Type</td>
</tr>
<tr>
<td>5</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Resource Group</td>
</tr>
<tr>
<td>6</td>
<td>5</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Resource Quantity</td>
</tr>
<tr>
<td>7</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Resource Quantity Units</td>
</tr>
<tr>
<td>8</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Start Date/Time</td>
</tr>
<tr>
<td>9</td>
<td>20</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Start Date/Time Offset</td>
</tr>
<tr>
<td>10</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Start Date/Time Offset Units</td>
</tr>
<tr>
<td>11</td>
<td>20</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Duration</td>
</tr>
<tr>
<td>12</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Duration Units</td>
</tr>
<tr>
<td>13</td>
<td>10</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Allow Substitution Code</td>
</tr>
<tr>
<td>14</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Filler Status Code</td>
</tr>

</table>

## **Accident (ACC)**


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Accident Date/Time</td>
</tr>
<tr>
<td>2</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Accident Code</td>
</tr>
<tr>
<td>3</td>
<td>25</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Accident Location</td>
</tr>
<tr>
<td>4</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Auto Accident State</td>
</tr>
<tr>
<td>5</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Accident Job Related Indicator</td>
</tr>
<tr>
<td>6</td>
<td>12</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Accident Death Indicator</td>
</tr>

</table>

## **UB82 (UB1)**


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Set ID - UB1</td>
</tr>
<tr>
<td>2</td>
<td>1</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Blood Deductible</td>
</tr>
<tr>
<td>3</td>
<td>2</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Blood Furnished-Pints Of</td>
</tr>
<tr>
<td>4</td>
<td>2</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Blood Replaced-Pints</td>
</tr>
<tr>
<td>5</td>
<td>2</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Blood Not Replaced-Pints</td>
</tr>
<tr>
<td>6</td>
<td>2</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Co-Insurance Days</td>
</tr>
<tr>
<td>7</td>
<td>14</td>
<td>IS</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Condition Code</td>
</tr>
<tr>
<td>8</td>
<td>3</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Covered Days -</td>
</tr>
<tr>
<td>9</td>
<td>3</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Non Covered Days</td>
</tr>
<tr>
<td>10</td>
<td>12</td>
<td>CM</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Value Amount & Code</td>
</tr>
<tr>
<td>11</td>
<td>2</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Number Of Grace Days</td>
</tr>
<tr>
<td>12</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Special Program Indicator</td>
</tr>
<tr>
<td>13</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>PSRO/UR Approval Indicator</td>
</tr>
<tr>
<td>14</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>PSRO/UR Approved Stay-Fm</td>
</tr>
<tr>
<td>15</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>PSRO/UR Approved Stay-To</td>
</tr>
<tr>
<td>16</td>
<td>20</td>
<td>CM</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Occurrence</td>
</tr>
<tr>
<td>17</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Occurrence Span</td>
</tr>
<tr>
<td>18</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Span Start Date</td>
</tr>
<tr>
<td>19</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Span End Date</td>
</tr>
<tr>
<td>20</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>UB-82 Locator</td>
</tr>
<tr>
<td>21</td>
<td>7</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>UB-82 Locator</td>
</tr>
<tr>
<td>22</td>
<td>8</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>UB-82 Locator</td>
</tr>
<tr>
<td>23</td>
<td>17</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>UB-82 Locator</td>
</tr>

</table>

## **UB92 Data (UB2)**


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Set ID - UB2</td>
</tr>
<tr>
<td>2</td>
<td>3</td>
<td>ST</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Co-Insurance Days</td>
</tr>
<tr>
<td>3</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Condition Code</td>
</tr>
<tr>
<td>4</td>
<td>3</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Covered Days</td>
</tr>
<tr>
<td>5</td>
<td>4</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Non-Covered Days</td>
</tr>
<tr>
<td>6</td>
<td>11</td>
<td>CM</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Value Amount & Code</td>
</tr>
<tr>
<td>7</td>
<td>11</td>
<td>CM</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Occurrence Code & Date</td>
</tr>
<tr>
<td>8</td>
<td>28</td>
<td>CM</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Occurrence Span Code/Dates</td>
</tr>
<tr>
<td>9</td>
<td>29</td>
<td>ST</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>UB92 Locator 2 (State)</td>
</tr>
<tr>
<td>10</td>
<td>12</td>
<td>ST</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>UB92 Locator 11 (State)</td>
</tr>
<tr>
<td>11</td>
<td>5</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>UB92 Locator 31 (National)</td>
</tr>
<tr>
<td>12</td>
<td>23</td>
<td>ST</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Document Control Number</td>
</tr>
<tr>
<td>13</td>
<td>4</td>
<td>ST</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>UB92 Locator 49 (National)</td>
</tr>
<tr>
<td>14</td>
<td>14</td>
<td>ST</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>UB92 Locator 56 (State)</td>
</tr>
<tr>
<td>15</td>
<td>27</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>UB92 Locator 57 (National)</td>
</tr>
<tr>
<td>16</td>
<td>2</td>
<td>ST</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>UB92 Locator 78 (State)</td>
</tr>
<tr>
<td>17</td>
<td>3</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Special Visit Count</td>
</tr>

</table>


## Next of Kin/Associated Parties (NK1)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Set ID - NK1</td>
</tr>
<tr>
<td>2</td>
<td>48</td>
<td>XPN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Name</td>
</tr>
<tr>
<td>3</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Relationship</td>
</tr>
<tr>
<td>4</td>
<td>106</td>
<td>XAD</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Address</td>
</tr>
<tr>
<td>5</td>
<td>40</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Phone Number</td>
</tr>
<tr>
<td>6</td>
<td>40</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Business Phone Number</td>
</tr>
<tr>
<td>7</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Contact Role</td>
</tr>
<tr>
<td>8</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Start Date</td>
</tr>
<tr>
<td>9</td>
<td>8</td>
<td>DT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>End Date</td>
</tr>
<tr>
<td>10</td>
<td>60</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Next of Kin / Associated Parties Job Title</td>
</tr>
<tr>
<td>11</td>
<td>20</td>
<td>JCC</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Next of Kin / Associated Parties JobCode/Class</td>
</tr>
<tr>
<td>12</td>
<td>20</td>
<td>CX</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Next of Kin / Associated Parties EmployeeNumber</td>
</tr>
<tr>
<td>13</td>
<td>90</td>
<td>XON</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Organization Name - NK1</td>
</tr>
<tr>
<td>14</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Marital Status</td>
</tr>
<tr>
<td>15</td>
<td>1</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Sex</td>
</tr>
<tr>
<td>16</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Date/Time of Birth</td>
</tr>
<tr>
<td>17</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Living Dependency</td>
</tr>
<tr>
<td>18</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Ambulatory Status</td>
</tr>
<tr>
<td>19</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Citizenship</td>
</tr>
<tr>
<td>20</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Primary Language</td>
</tr>
<tr>
<td>21</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Living Arrangement</td>
</tr>
<tr>
<td>22</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Publicity Code</td>
</tr>
<tr>
<td>23</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Protection Indicator</td>
</tr>
<tr>
<td>24</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Student Indicator</td>
</tr>
<tr>
<td>24</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Religion</td>
</tr>
<tr>
<td>25</td>
<td>48</td>
<td>XPN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Mother's Maiden Name</td>
</tr>
<tr>
<td>26</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Nationality</td>
</tr>
<tr>
<td>27</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Ethnic Group</td>
</tr>
<tr>
<td>28</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Contact Reason</td>
</tr>
<tr>
<td>29</td>
<td>48</td>
<td>XPN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Contact Person's Name</td>
</tr>
<tr>
<td>30</td>
<td>40</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Contact Person's Telephone Number</td>
</tr>
<tr>
<td>31</td>
<td>106</td>
<td>XAD</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Contact Person's Address</td>
</tr>
<tr>
<td>32</td>
<td>32</td>
<td>CX</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Next of Kin/Associated Party's Identifiers</td>
</tr>
<tr>
<td>33</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Job Status</td>
</tr>
<tr>
<td>34</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Race</td>
</tr>
<tr>
<td>35</td>
<td>2</td>
<td>IS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Handicap</td>
</tr>
<tr>
<td>36</td>
<td>16</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Contact Person Social Security Number</td>
</tr>

</table>

## ZMF


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Balance</td>
</tr>
<tr>
<td>2</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Balance Forward</td>
</tr>
<tr>
<td>3</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Unapplied Credit</td>
</tr>
<tr>
<td>4</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Creation Date</td>
</tr>
<tr>
<td>5</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Bill Type</td>
</tr>
<tr>
<td>6</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Monthly Payment Amount</td>
</tr>
<tr>
<td>7</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Date Last Payment</td>
</tr>
<tr>
<td>8</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Amount Last Payment</td>
</tr>
<tr>
<td>10</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Date Last Bill</td>
</tr>
<tr>
<td>11</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Amount Last Statement</td>
</tr>
<tr>
<td>12</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account YTD Charges</td>
</tr>
<tr>
<td>13</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Patient Due AR</td>
</tr>
<tr>
<td>14</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Account Status</td>
</tr>
<tr>
<td>15</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Discount Percent</td>
</tr>
<tr>
<td>16</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Date Last Procedure Posting</td>
</tr>
<tr>
<td>17</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Patient Class</td>
</tr>
<tr>
<td>18</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Patient Hist Balance</td>
</tr>
<tr>
<td>19</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Days before Enter Call</td>
</tr>
<tr>
<td>20</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Account Collection Priority</td>
</tr>

</table>
{{% anchor sys="orc" %}}


## Common Order (ORC)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>2</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Order Control Code</td>
</tr>
<tr>
<td>2</td>
<td>22</td>
<td>EI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Placer Order Number</td>
</tr>
<tr>
<td>3</td>
<td>22</td>
<td>EI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Filler Order Number</td>
</tr>
<tr>
<td>4</td>
<td>22</td>
<td>EI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Placer Group Number</td>
</tr>
<tr>
<td>5</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Order Status</td>
</tr>
<tr>
<td>6</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Response Flag</td>
</tr>
<tr>
<td>7</td>
<td>200</td>
<td>TQ</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Quantity/Timing</td>
</tr>
<tr>
<td>8</td>
<td>200</td>
<td>CM</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Parent</td>
</tr>
<tr>
<td>9</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Transaction Date/Time</td>
</tr>
<tr>
<td>10</td>
<td>120</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Entered By</td>
</tr>
<tr>
<td>11</td>
<td>120</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Verified By</td>
</tr>
<tr>
<td>12</td>
<td>120</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Ordering Provider</td>
</tr>
<tr>
<td>13</td>
<td>80</td>
<td>PL</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Enterer's Location</td>
</tr>
<tr>
<td>14</td>
<td>40</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Call Back Phone Number</td>
</tr>
<tr>
<td>15</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Order Effective Date/Time</td>
</tr>
<tr>
<td>16</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Order Control Code Reason</td>
</tr>
<tr>
<td>17</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Entering Organization</td>
</tr>
<tr>
<td>18</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Entering Device</td>
</tr>
<tr>
<td>19</td>
<td>120</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Action By</td>
</tr>
<tr>
<td>20</td>
<td>40</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Advanced Beneficiary Notice Code</td>
</tr>
<tr>
<td>21</td>
<td>60</td>
<td>XON</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Ordering Facility Name</td>
</tr>
<tr>
<td>22</td>
<td>106</td>
<td>XAD</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Ordering Facility Address</td>
</tr>
<tr>
<td>23</td>
<td>48</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Ordering Facility Phone Number</td>
</tr>
<tr>
<td>24</td>
<td>106</td>
<td>XAD</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Ordering Provider Address</td>
</tr>

</table>
{{% anchor sys="obr" %}}


## Observation request (OBR)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Set ID</td>
</tr>
<tr>
<td>2</td>
<td>22</td>
<td>EI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Placer Order Number</td>
</tr>
<tr>
<td>3</td>
<td>22</td>
<td>EI</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Filler Order Number</td>
</tr>
<tr>
<td>4</td>
<td>200</td>
<td>CE</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Universal Service ID</td>
</tr>
<tr>
<td>5</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Priority</td>
</tr>
<tr>
<td>6</td>
<td>26</td>
<td>TS</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Requested Date/Time</td>
</tr>
<tr>
<td>7</td>
<td>26</td>
<td>TS</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Observation Date/Time</td>
</tr>
<tr>
<td>8</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Observation End Date/Time</td>
</tr>
<tr>
<td>9</td>
<td>20</td>
<td>CQ</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Collection Volume</td>
</tr>
<tr>
<td>10</td>
<td>60</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Collector Identifier</td>
</tr>
<tr>
<td>11</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Specimen Action Code</td>
</tr>
<tr>
<td>12</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Danger Code</td>
</tr>
<tr>
<td>13</td>
<td>300</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Relevant Clinical Info</td>
</tr>
<tr>
<td>14</td>
<td>26</td>
<td>TS</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Specimen Received Date/Time</td>
</tr>
<tr>
<td>15</td>
<td>300</td>
<td>CM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Specimen Source</td>
</tr>
<tr>
<td>16</td>
<td>120</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Ordering Provider</td>
</tr>
<tr>
<td>17</td>
<td>40</td>
<td>XTN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Order Callback Phone Number</td>
</tr>
<tr>
<td>18</td>
<td>60</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Placer Field 1</td>
</tr>
<tr>
<td>19</td>
<td>60</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Placer Field 2</td>
</tr>
<tr>
<td>20</td>
<td>60</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Filler Field 1</td>
</tr>
<tr>
<td>21</td>
<td>60</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Filler Field 2</td>
</tr>
<tr>
<td>22</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Results Rpt/Change Date/Time</td>
</tr>
<tr>
<td>23</td>
<td>40</td>
<td>CM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Charge to Practice</td>
</tr>
<tr>
<td>24</td>
<td>10</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Diagnostic Serv Sect ID</td>
</tr>
<tr>
<td>25</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Result Status</td>
</tr>
<tr>
<td>26</td>
<td>200</td>
<td>CM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Parent Result</td>
</tr>
<tr>
<td>27</td>
<td>200</td>
<td>TQ</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Quantity/Timing</td>
</tr>
<tr>
<td>28</td>
<td>150</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Result Copies To</td>
</tr>
<tr>
<td>29</td>
<td>200</td>
<td>CM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Parent</td>
</tr>
<tr>
<td>30</td>
<td>20</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Transportation Mode</td>
</tr>
<tr>
<td>31</td>
<td>300</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Reason for Study</td>
</tr>
<tr>
<td>32</td>
<td>200</td>
<td>CM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Principal Result Interpreter</td>
</tr>
<tr>
<td>33</td>
<td>200</td>
<td>CM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Assistant Result Interpreter</td>
</tr>
<tr>
<td>34</td>
<td>200</td>
<td>CM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Technician</td>
</tr>
<tr>
<td>35</td>
<td>200</td>
<td>CM</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Transcriptionist</td>
</tr>
<tr>
<td>36</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Scheduled Date/Time</td>
</tr>
<tr>
<td>37</td>
<td>4</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Number of Sample Containers</td>
</tr>
<tr>
<td>38</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Transport Logistics of Collected Samples</td>
</tr>
<tr>
<td>39</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Collector's Comment</td>
</tr>
<tr>
<td>40</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Transport Arrangement Responsibility</td>
</tr>
<tr>
<td>41</td>
<td>30</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Transport Arranged</td>
</tr>
<tr>
<td>42</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Escort Required</td>
</tr>
<tr>
<td>43</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Planned Patient Transport Comment</td>
</tr>
<tr>
<td>44</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Procedure Code</td>
</tr>
<tr>
<td>45</td>
<td>80</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Procedure Code Modifier</td>
</tr>

</table>
{{% anchor sys="obx" %}}


## Observation/Result (OBX)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Set ID</td>
</tr>
<tr>
<td>2</td>
<td>3</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Value Type</td>
</tr>
<tr>
<td>3</td>
<td>80</td>
<td>CE</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Observation Identifier</td>
</tr>
<tr>
<td>4</td>
<td>20</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Observation Sub-Id</td>
</tr>
<tr>
<td>5</td>
<td>65536</td>
<td>FT</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Observation Value</td>
</tr>
<tr>
<td>6</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Units</td>
</tr>
<tr>
<td>7</td>
<td>60</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Reference Range</td>
</tr>
<tr>
<td>8</td>
<td>5</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Abnormal Flags</td>
</tr>
<tr>
<td>9</td>
<td>5</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Probability</td>
</tr>
<tr>
<td>10</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Nature of Abnormal Test</td>
</tr>
<tr>
<td>11</td>
<td>1</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Observation Result Status</td>
</tr>
<tr>
<td>12</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Date Last Obs Normal Value</td>
</tr>
<tr>
<td>13</td>
<td>20</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>User Defined Access Checks</td>
</tr>
<tr>
<td>14</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Date/Time of the Observation</td>
</tr>
<tr>
<td>15</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Producer's ID</td>
</tr>
<tr>
<td>16</td>
<td>80</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_RPT</td>
<td><a href="#30j0zll">Responsible Observer</a></td>
</tr>
<tr>
<td>17</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Observation Method</td>
</tr>

</table>

## Pharmacy/Treatment Administration (RXA)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>NM</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Give Sub-ID Counter</td>
</tr>
<tr>
<td>2</td>
<td>4</td>
<td>NM</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Administration Sub-ID Counter</td>
</tr>
<tr>
<td>3</td>
<td>26</td>
<td>TS</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Date/Time Start of Administration</td>
</tr>
<tr>
<td>4</td>
<td>26</td>
<td>TS</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Date/Time End of Administration</td>
</tr>
<tr>
<td>5</td>
<td>100</td>
<td>CE</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Administered Code ^CVX (CDC DB)</td>
</tr>
<tr>
<td>6</td>
<td>20</td>
<td>NM</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Administered Amount</td>
</tr>
<tr>
<td>7</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Administered Units</td>
</tr>
<tr>
<td>8</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Administered Dosage Form</td>
</tr>
<tr>
<td>9</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Administration Notes</td>
</tr>
<tr>
<td>10</td>
<td>200</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Administering Provider</td>
</tr>
<tr>
<td>11</td>
<td>200</td>
<td>CM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Administered-at Location</td>
</tr>
<tr>
<td>12</td>
<td>20</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Administered Per (Time Unit)</td>
</tr>
<tr>
<td>13</td>
<td>20</td>
<td>NM</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Administered Strength</td>
</tr>
<tr>
<td>14</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Administered Strength Units</td>
</tr>
<tr>
<td>15</td>
<td>20</td>
<td>ST</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Substance Lot Number</td>
</tr>
<tr>
<td>16</td>
<td>27</td>
<td>TS</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Substance Expiration Date</td>
</tr>
<tr>
<td>17</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Substance Manufacturer Name ^MVX</td>
</tr>
<tr>
<td>18</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Substance Refusal Reason</td>
</tr>
<tr>
<td>19</td>
<td>200</td>
<td>CE</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Indication</td>
</tr>
<tr>
<td>20</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Completion Status</td>
</tr>
<tr>
<td>21</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Action Code-RXA</td>
</tr>
<tr>
<td>22</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>System Entry Date/Time</td>
</tr>

</table>

## Pharmacy/Treatment Route (RXR)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>60</td>
<td>CE</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Route (p351 in pdf)</td>
</tr>
<tr>
<td>2</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Site (possibly SNOMED)</td>
</tr>
<tr>
<td>3</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Administration Device (p352 in pdf)</td>
</tr>
<tr>
<td>4</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Administration Method</td>
</tr>
<tr>
<td>5</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Routing Instruction</td>
</tr>

</table>
{{% anchor sys="txa" %}}


## Transcription Document Header (TXA)


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>4</td>
<td>SI</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Set ID- TXA</td>
</tr>
<tr>
<td>2</td>
<td>30</td>
<td>IS</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Document Type</td>
</tr>
<tr>
<td>3</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Document Content Presentation</td>
</tr>
<tr>
<td>4</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Activity Date/Time</td>
</tr>
<tr>
<td>5</td>
<td>60</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Primary Activity Provider Code/Name</td>
</tr>
<tr>
<td>6</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Origination Date/Time</td>
</tr>
<tr>
<td>7</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Transcription Date/Time</td>
</tr>
<tr>
<td>8</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Edit Date/Time</td>
</tr>
<tr>
<td>9</td>
<td>60</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Originator Code/Name</td>
</tr>
<tr>
<td>10</td>
<td>60</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Assigned Document Authenticator</td>
</tr>
<tr>
<td>11</td>
<td>48</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Transcriptionist Code/Name</td>
</tr>
<tr>
<td>12</td>
<td>30</td>
<td>EI</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Unique Document Number</td>
</tr>
<tr>
<td>13</td>
<td>30</td>
<td>EI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Parent Document Number</td>
</tr>
<tr>
<td>14</td>
<td>22</td>
<td>EI</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Placer Order Number</td>
</tr>
<tr>
<td>15</td>
<td>22</td>
<td>EI</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Filler Order Number</td>
</tr>
<tr>
<td>16</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Unique Document File Name</td>
</tr>
<tr>
<td>17</td>
<td>2</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Document Completion Status</td>
</tr>
<tr>
<td>18</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Document Confidentiality Status</td>
</tr>
<tr>
<td>19</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Document Availability Status</td>
</tr>
<tr>
<td>20</td>
<td>2</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Document Storage Status</td>
</tr>
<tr>
<td>21</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Document Change Reason</td>
</tr>
<tr>
<td>22</td>
<td>60</td>
<td>PPN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Authentication Person, Time Stamp</td>
</tr>
<tr>
<td>23</td>
<td>60</td>
<td>XCN</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Distributed Copies (Code and Name of Recipients)</td>
</tr>

</table>

## **Query Acknowledgement (QAK)**


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>32</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Query Tag</td>
</tr>
<tr>
<td>2</td>
<td>60</td>
<td>CE</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Event Identifier</td>
</tr>
<tr>
<td>3</td>
<td>256</td>
<td>QIP</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Input Parameter List</td>
</tr>

</table>

## **Original Style Query Definition (QRD)**


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>26</td>
<td>TS</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Query Date/Time</td>
</tr>
<tr>
<td>2</td>
<td>1</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Query Format Code - usually: R</td>
</tr>
<tr>
<td>3</td>
<td>1</td>
<td>ID</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Query Priority - usually: I</td>
</tr>
<tr>
<td>4</td>
<td>10</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Query ID (unique ID assigned by querying app)</td>
</tr>
<tr>
<td>5</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Deferred Response Type (not used w/ .3 == I)</td>
</tr>
<tr>
<td>6</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Deferred Response Date/Time (not used w/ .3 == I)</td>
</tr>
<tr>
<td>7</td>
<td>10</td>
<td>CQ</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Quantity Limited Request (not used)</td>
</tr>
<tr>
<td>8</td>
<td>60</td>
<td>XCN</td>
<td>REQ</td>
<td>NO_MAX</td>
<td>Who Subject Filter (Queried Patient information)</td>
</tr>
<tr>
<td>9</td>
<td>60</td>
<td>CE</td>
<td>REQ</td>
<td>NO_MAX</td>
<td>What Subject Filter - usually: VXI</td>
</tr>
<tr>
<td>10</td>
<td>60</td>
<td>CE</td>
<td>REQ</td>
<td>NO_MAX</td>
<td>What Department Data Code (specific for VXI)</td>
</tr>
<tr>
<td>11</td>
<td>20</td>
<td>CM</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>What Data Code Value Qual (result range criteria)</td>
</tr>
<tr>
<td>12</td>
<td>1</td>
<td>ID</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Query Results Level</td>
</tr>

</table>

## **Original Style Query Filter (QRF)**


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>20</td>
<td>ST</td>
<td>REQ</td>
<td>NO_MAX</td>
<td>Where Subject Filter (department,system,etc: LAB~HEMO)</td>
</tr>
<tr>
<td>2</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>When Data Start Date/Time - Backwards only</td>
</tr>
<tr>
<td>3</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>When Data End Date/Time - Backwards only</td>
</tr>
<tr>
<td>4</td>
<td>60</td>
<td>ST</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>What User Qualifier (extra limitation)</td>
</tr>
<tr>
<td>5</td>
<td>60</td>
<td>ST</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Other QRY Subject Filter (limit of 10 repeats for VXQ) see hl7_notes.txt</td>
</tr>
<tr>
<td>6</td>
<td>12</td>
<td>ID</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Which Date/Time Qualifier (range of .2/.3) - usually: ANY</td>
</tr>
<tr>
<td>7</td>
<td>12</td>
<td>ID</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Which Date/Time Status Qualifier - usually: CFN or FIN (current final value, final only)</td>
</tr>
<tr>
<td>8</td>
<td>12</td>
<td>ID</td>
<td>OPT</td>
<td>NO_MAX</td>
<td>Date/Time Selection Qualifier (value ordering (1ST,LST,ALL,REV) - usually:REV (reverse cronological)</td>
</tr>
<tr>
<td>9</td>
<td>60</td>
<td>TQ</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>When Quantity/Timing Qualifier (replaces .2/.3)</td>
</tr>

</table>

## **ZCL**


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>255</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Height</td>
</tr>
<tr>
<td>2</td>
<td>255</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Weight</td>
</tr>
<tr>
<td>3</td>
<td>255</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Urine Collection</td>
</tr>
<tr>
<td>4</td>
<td>255</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Fasting</td>
</tr>

</table>

## **ZBL**


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Patient Race</td>
</tr>
<tr>
<td>2</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Hispanic</td>
</tr>
<tr>
<td>3</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Blood Lead Type</td>
</tr>
<tr>
<td>4</td>
<td>255</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Blood Lead Purpose</td>
</tr>
<tr>
<td>5</td>
<td>255</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Blood Lead County</td>
</tr>

</table>

## **ZCY**


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Cervical</td>
</tr>
<tr>
<td>2</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Endocervical</td>
</tr>
<tr>
<td>3</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Labia-Vulva</td>
</tr>
<tr>
<td>4</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Vaginal</td>
</tr>
<tr>
<td>5</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Endometrial</td>
</tr>
<tr>
<td>6</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Swab-Spatula</td>
</tr>
<tr>
<td>7</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Brush-Spatula</td>
</tr>
<tr>
<td>8</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Spatula-Alone</td>
</tr>
<tr>
<td>9</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Brush-Alone</td>
</tr>
<tr>
<td>10</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Broom-Alone</td>
</tr>
<tr>
<td>11</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Other Collection Technique</td>
</tr>
<tr>
<td>12</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>LMP-Meno Date</td>
</tr>
<tr>
<td>13</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Prev Treatment</td>
</tr>
<tr>
<td>14</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Hyst-Prev Treatment</td>
</tr>
<tr>
<td>15</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Coniza-Prev Treatment</td>
</tr>
<tr>
<td>16</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Colp-BX-Prev Treatment</td>
</tr>
<tr>
<td>17</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Laser Vap-Prev Treatment</td>
</tr>
<tr>
<td>18</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Cyro-Prev Treatment</td>
</tr>
<tr>
<td>19</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Radiation-Prev Treatment</td>
</tr>
<tr>
<td>20</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Dates Results-prev cyto inf</td>
</tr>
<tr>
<td>21</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Pregnant</td>
</tr>
<tr>
<td>22</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Lactating</td>
</tr>
<tr>
<td>23</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Oral Contraceptive</td>
</tr>
<tr>
<td>24</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Menopausal</td>
</tr>
<tr>
<td>25</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Estro-RX</td>
</tr>
<tr>
<td>26</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>PMP-Bleeding</td>
</tr>
<tr>
<td>27</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Post-Part</td>
</tr>
<tr>
<td>28</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>IUD</td>
</tr>
<tr>
<td>29</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>All Other Pat Info</td>
</tr>
<tr>
<td>30</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Negative prev cyto info</td>
</tr>
<tr>
<td>31</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Atypical prev cyto info</td>
</tr>
<tr>
<td>32</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Dysplasia prev cyto info</td>
</tr>
<tr>
<td>33</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Ca-In-Situ prev cyto info</td>
</tr>
<tr>
<td>34</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Invasive prev cyto info</td>
</tr>
<tr>
<td>35</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Other prev cyto info</td>
</tr>

</table>

## **ZSA**


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Insulin Dependent</td>
</tr>
<tr>
<td>2</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Gestational Age</td>
</tr>
<tr>
<td>3</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Gest Age by LMP</td>
</tr>
<tr>
<td>4</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Gest Age by Ultrasound</td>
</tr>
<tr>
<td>5</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Gest Age by Est Date of Delivery</td>
</tr>
<tr>
<td>6</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Type of Pregnancy</td>
</tr>
<tr>
<td>7</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Routine Screening</td>
</tr>
<tr>
<td>8</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Prev Neural Tube Defects</td>
</tr>
<tr>
<td>9</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Advanced Maternal Age</td>
</tr>
<tr>
<td>10</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>History of Down Syndrome</td>
</tr>
<tr>
<td>11</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Hist of Cystic Fibrosis</td>
</tr>
<tr>
<td>12</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Other Indications</td>
</tr>
<tr>
<td>13</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Hand Written AFP Info</td>
</tr>
<tr>
<td>14</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Reason for Repeat: Elevated</td>
</tr>
<tr>
<td>15</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Early GA</td>
</tr>
<tr>
<td>16</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Hemolyzed</td>
</tr>

</table>

## **ZPS**


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Sequence Number</td>
</tr>
<tr>
<td>2</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Facility Mnemonic</td>
</tr>
<tr>
<td>3</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Facility Name</td>
</tr>
<tr>
<td>4</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Facility Address Info</td>
</tr>
<tr>
<td>5</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Facility Phone num</td>
</tr>
<tr>
<td>6</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Facility Contact</td>
</tr>
<tr>
<td>7</td>
<td>255</td>
<td>ST</td>
<td>REQ</td>
<td>NO_RPT</td>
<td>Facility Director</td>
</tr>

</table>

## **ZSV**


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Unused</td>
</tr>
<tr>
<td>2</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Unused</td>
</tr>
<tr>
<td>3</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Unused</td>
</tr>
<tr>
<td>4</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Unused</td>
</tr>
<tr>
<td>5</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Unused</td>
</tr>
<tr>
<td>6</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>Unused</td>
</tr>
<tr>
<td>7</td>
<td>60</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>VFC Code</td>
</tr>

</table>
{{% anchor sys="zpa" %}}


## ZPA


<table>
<tr>
<td><strong>Sequence</strong></td>
<td><strong>Length</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Repetition</strong></td>
<td><strong>Name</strong></td>
</tr>
<tr>
<td>1</td>
<td>10</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>employee_group</td>
</tr>
<tr>
<td>2</td>
<td>10</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>employee_class</td>
</tr>
<tr>
<td>3</td>
<td>10</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>job_code</td>
</tr>
<tr>
<td>4</td>
<td>10</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>company_code</td>
</tr>
<tr>
<td>5</td>
<td>10</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>cost_center_code</td>
</tr>
<tr>
<td>6</td>
<td>10</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>facility_code</td>
</tr>
<tr>
<td>7</td>
<td>10</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>building_code</td>
</tr>
<tr>
<td>8</td>
<td>10</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>floor_code</td>
</tr>
<tr>
<td>9</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>hire_datetime</td>
</tr>
<tr>
<td>10</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>rehire_datetime</td>
</tr>
<tr>
<td>11</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>retirement_datetime</td>
</tr>
<tr>
<td>12</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>termination_datetime</td>
</tr>
<tr>
<td>13</td>
<td>8</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>work_schedule_code</td>
</tr>
<tr>
<td>14</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>onboard_datetime</td>
</tr>
<tr>
<td>15</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>supervisor_mrn</td>
</tr>
<tr>
<td>16</td>
<td>10</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>supervisor_id</td>
</tr>
<tr>
<td>17</td>
<td>30</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>admin_assist_mrn</td>
</tr>
<tr>
<td>18</td>
<td>10</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>admin_assist_id</td>
</tr>
<tr>
<td>19</td>
<td>100</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>hr_rsn_typ_nm</td>
</tr>
<tr>
<td>20</td>
<td>2</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>hr_actn_typ_cd</td>
</tr>
<tr>
<td>21</td>
<td>100</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>hr_actn_typ_nm</td>
</tr>
<tr>
<td>22</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>actn_begin_dt</td>
</tr>
<tr>
<td>23</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>actn_end_dt</td>
</tr>
<tr>
<td>24</td>
<td>10</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>clinic_location</td>
</tr>
<tr>
<td>25</td>
<td>10</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>capacity_utilization_level</td>
</tr>
<tr>
<td>26</td>
<td>5</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>hours_worked_per_day</td>
</tr>
<tr>
<td>27</td>
<td>5</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>days_worked_per_week</td>
</tr>
<tr>
<td>28</td>
<td>4</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>status_code</td>
</tr>
<tr>
<td>29</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>edl_start_datetime</td>
</tr>
<tr>
<td>30</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>edl_end_datetime</td>
</tr>
<tr>
<td>31</td>
<td>5</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>personnel_area_code</td>
</tr>
<tr>
<td>32</td>
<td>5</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>personnel_area_text</td>
</tr>
<tr>
<td>33</td>
<td>10</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>location</td>
</tr>
<tr>
<td>34</td>
<td>50</td>
<td>CE</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>employee_union</td>
</tr>
<tr>
<td>35</td>
<td>20</td>
<td>ST</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>hourlyrate</td>
</tr>
<tr>
<td>36</td>
<td>26</td>
<td>TS</td>
<td>OPT</td>
<td>NO_RPT</td>
<td>seniority_date</td>
</tr>

</table>

## **Data Types**

{{% anchor sys="tn" %}}


### TN

The TN Data Type is an MIE Extension designed for notifying a sending system of translations used in the processing of the message. This can be thought of as an incremental approach to maintaining a MFN interface.

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Required</strong></td>
<td><strong>Use</strong></td>
</tr>
<tr>
<td>From ID</td>
<td>ID</td>
<td>REQ</td>
<td>the requesting system's local identifier (external vendor)</td>
</tr>
<tr>
<td>To ID</td>
<td>ID</td>
<td>REQ</td>
<td>the creating system's local identifier (webchart)</td>
</tr>
<tr>
<td>Type</td>
<td>ST</td>
<td>REQ</td>
<td>indication of type of translation created: user, or one of the WCMAP_ family of #defines</td>
</tr>
<tr>
<td>Context</td>
<td>ST</td>
<td>OPT</td>
<td>optional indication of the context of the translation created. for users, an indication of originating, authenticating, etc.</td>
</tr>

</table>

## **Related Pages**

[Sending HL7 Messages to System](sending-hl7-messages-to-system.md)
[Sample HL7 Messages](sample-hl7-messages.md)
