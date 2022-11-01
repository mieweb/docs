---
id: '1w9f8JtLFV3PlNWcW2T97gFr_TyQYlorxhOBURxXSH4g'
title: 'E-ClinicalWorks'
date: '2022-03-23T14:52:39.698Z'
version: 11
lastAuthor: 'Kate Barton'
mimeType: 'text/x-markdown'
links:
  - 'http://www.eclinicalworks.com/'
  - 'gdoc:1dpBE40WHHZcXc2vs9jWtBsoHS-4NiCZPKXLbmG8-HX4'
source: 'https://drive.google.com/open?id=1w9f8JtLFV3PlNWcW2T97gFr_TyQYlorxhOBURxXSH4g'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
---
**E-ClinicalWorks**  
This page details how interfaces with e-ClinicalWorks (ecw) are installed.
  
## Overview  
  
ecw is a practice management vendor.
  
### Process Workflow  
  
We receive demographics (ADT) and scheduling (SIU) messages through this interface.
  
## Mapping File  
  
We may be required to load a mapping file for insurance plans.
  
## Technical Specs  

  
### Config  
  
**Command Line**  Expand source  
<profile name="COMMAND_LINE">  
<item name="x" value="3" />  
<item name="D" value="1" />  
<item name="r" value="0" />  
</profile>  
<profile name="TRANSLATE">  
<item name="DOC_TYPES" value="0" />  
<item name="DOC_LOCATIONS" value="0" />  
<item name="APT_TYPES" value="1" />  
<item name="APT_ROOMS" value="0" />  
<item name="APT_LOCATIONS" value="1" />  
<item name="PAT_ETHNICITY" value="1" />  
<item name="PAT_RACE" value="1" />  
<item name="OBS_CODE" value="0" />  
<item name="ENC_SERV_CODES" value="0" />  
<item name="ENC_LOCATIONS" value="0" />  
<item name="PATIENT_LOCATIONS" value="0" />  
<item name="INS_COMPANY_NAME" value="0" />  
<item name="ENC_TYPES" value="1" />  
</profile>  
<profile name="INTERFACE">  
<item name="MASTER" value="1" />  
<item name="NAME" value="eCW" />  
<item name="RULES_EXT" value=".v25" />  
<item name="PID_FILE" value="./hl7d.pid" />  
<item name="FORMAT_XTN_USE_PHONE2" value="1" />  
<item name="TXA_FIGURE_SERVICE_DATE_OUT" value="0" />  
<item name="XCN_REMOVE_LT_ALPHA_FROM_XID" value="0" />  
<item name="USE_ACCOUNT_NUMBER_FROM_PID" value="0" />  
</profile>  
<profile name="HACKS">  
<item name="NEURO_HACK" value="1" />  
<item name="EXPERIOR_SCHEDULING_HACK" value="1" />  
</profile>  
<profile name="SCHEDULING">  
<item name="NO_ENCOUNTERS" value="1" />  
<item name="GET_COMMENTS_FROM_SCH" value="1" />  
</profile>  
<profile name="INTERNAL_PMR">  
<item name="PARTITION" value="ECW" />  
<item name="FEILD" value="4" />  
<item name="TRIM_LEADING_ALPHA" value="0" />  
<item name="ADD_LEADING_ZEROS" value="0" />  
<item name="ADD_TRAILING_ZEROS" value="0" />  
</profile>  
<profile name="EXTERNAL_PMR">  
<item name="PARTITION" value="MR" />  
<item name="FEILD" value="2" />  
<item name="TRIM_LEADING_ALPHA" value="1" />  
<item name="TRIM_LEADING_ZEROS" value="0" />  
<item name="ADD_LEADING_ZEROS" value="0" />  
<item name="ADD_TRAILING_ZEROS" value="0" />  
</profile>  
<profile name="ATTENDING_USER">  
<item name="PROCESS" value="1" />  
<item name="DEPT" value="Physicians" />  
<item name="STATUS" value="2" />  
<item name="PASSWD" value="" />  
<item name="OPTIONS" value="5" />  
</profile>  
<profile name="ADMITTING_USER">  
<item name="DEPT" value="Physicians" />  
<item name="STATUS" value="2" />  
<item name="PASSWD" value="" />  
<item name="OPTIONS" value="4" />  
</profile>  
<profile name="SCHEDULED_USER">  
<item name="DEPT" value="Physicians" />  
<item name="STATUS" value="2" />  
<item name="PASSWD" value="" />  
<item name="OPTIONS" value="4" />  
</profile>  
<profile name="REFERRING_USER">  
<item name="PROCESS" value="1" />  
<item name="DEPT" value="Referring Physicians" />  
<item name="STATUS" value="2" />  
<item name="PASSWD" value="" />  
<item name="OPTIONS" value="5" />  
</profile>  
<profile name="FAMILY_USER">  
<item name="PROCESS" value="0" />  
<item name="DEPT" value="Referring Physicians" />  
<item name="STATUS" value="2" />  
<item name="PASSWD" value="" />  
<item name="OPTIONS" value="5" />  
</profile>  
<profile name="ORIGINATOR_USER">  
<item name="PROCESS" value="1" />  
<item name="DEPT" value="Physicians" />  
<item name="STATUS" value="2" />  
<item name="PASSWD" value="" />  
<item name="OPTIONS" value="0" />  
</profile>  
</interface>
  
### Connectivity  
  
This is a uni-directional over VPN. ecw may require that new VPNs are set up for future interfaces. This was the case when we set up the ecw interface for The Heart Institure of Venice.
  
## Application Information  

  
### Installation  
  
Currently we use a standard hl7_interlocutor setup to post the hl7 messages to the client system.  
/usr/local/webchart/hl7/pip_thiv/ecw]$ l  
total 80  
-rw-r--r-- 1 root root   605 Jun 20 11:13 hl7.conf  
-rw-rw-rw- 1 root root 	5 Jun 20 11:20 hl7d.pid  
lrwxrwxrwx 1 root root	22 Jun 20 11:08 hl7_interlocutor -> ../../hl7_interlocutor  
lrwxrwxrwx 1 root root	24 Jun 20 11:10 logs -> ../../logs/pip_thiv/ecw/  
-rwxr-xr-x 1 root root  1118 Jun 20 11:08 msgRules.v25  
lrwxrwxrwx 1 root root	24 Jun 20 11:10 msgs -> ../../msgs/pip_thiv/ecw/  
-rwxr-xr-x 1 root root  1497 Jun 20 11:10 run_hl7d  
-rwxr-xr-x 1 root root 62558 Jun 20 11:08 segDefs.v25
  
### Deinstallation  
  
To deinstall, edit run_hl7d to comment out the command to run hl7_interlocutor. Kill the process id in hl7d.pid and comment out the interface from the start script. The interface should be removed from the daemon monitor, also.
  
## Client Information  

  
### Contacts  
  
Dennis Jah Project Manager –Integration eClinicalWorks 555 North Point Center East, Suite 515 | Alpharetta, GA 30022 T: 508-475-0450 x11227 | M: 508-523-1634 F: 678-387-6950 dennis.jah@eclinicalworks.com |[ ](http://www.eclinicalworks.com/)[www.eclinicalworks.com](http://www.eclinicalworks.com/)
  
## Related Pages  
  
[Interface Specifications](gdoc:1dpBE40WHHZcXc2vs9jWtBsoHS-4NiCZPKXLbmG8-HX4)

