---
id: '1SDPkh2H8ENB3bFSEOZw7Iif5xjRr9aaL1oxDitm3EhA'
title: 'Outbound Interface Install Instructions'
date: '2020-03-05T15:43:31.766Z'
version: 79
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1SDPkh2H8ENB3bFSEOZw7Iif5xjRr9aaL1oxDitm3EhA'
wikigdrive: '39bb83db6f8c4d7510a0836e889fb3cc29e60870'
---
## Overview  


1. Understanding the end point to configure the Refer To Systems (RTS).
2. Understanding the trigger that will take place in {{% system-name %}} to send the data to the end point to configure the Auto Route.

  
## Refer To Systems  
  
Refer To Systems (RTS) is used to manage connection details for vendors/services that receive data from {{% system-name %}}. The *{{% syslink "RTS Editor" "f=admin&subfunc=rts_editor&t=Refer+to+Systems" %}}* is found in the Control Panel.  It requires a permission level to access it.
  
![](../outbound-interface-install-instructions.assets/1000020100000546000002700E724961023BEB22.png)  

Each RTS entry contains: 
* <strong>System ID </strong>- This is a required unique identifier for the RTS
* <strong>System Name</strong> - This is a human readable name for the entry.  It is used when setting up Auto Routes and Performing Facilities on Lab Orders
* <strong>System Address</strong> - This is the end point information. This can be a URL, Filename, SFTP, among others.
* <strong>System Ability</strong> - This is a high level overview of what the connection is used for. HL7, Webchart to Webchart, among others
* <strong>Active</strong> - This tells if the RTS is available for use. Inactive RTS cannot be sent to.
* <strong>Options</strong> - This allows for Editing the RTS information, also to Deactivate, as well as Delete entirely. The Extended option is here as well to add special functionality when sending data over to this endpoint.
  
### System Address  

Here are the available connection options that the RTS editor supports
  
![](../outbound-interface-install-instructions.assets/10000201000003790000018456877259DE13E983.png)  

1. Socket
   1. Format: 'socket'|[IP address]|[port]|[SSL flag 1/0]
<pre>Example: socket|192.168.2.23|5321|0</pre>2. File
   1. Format: 'file'|[file directory and name relative to where the datasend binary lives]
<pre>Example: file|../testfile.hl7</pre>3. Multi-File
   1. Format: 'multi_file'|[file directory and beginning of filename to use]
<pre>Example: multi_file|../testmultifile</pre>4. SCP
   1. Format: 'scp'|[IP/hostname]|[port]|[subdir name]|[base filename]|[keyfile]
      1. Note username/password are on the RTS entry itself
<pre>Example: scp|192.168.34.27||data/outbound|testfile.dat|</pre>5. SFTP
   1. Format: 'sftp'|[IP/hostname]|[port]|[subdir name]|[base filename]|[keyfile]
      1. Note username/password are on the RTS entry itself
<pre>Example: sftp|192.168.34.27||data/outbound|testfile.dat|</pre>6. HTTPS (default)
   1. Format: [URL]|[username CGI variable name]|[password CGI variable name]|[message CGI variable name]
      1. Note username/password are on the RTS entry itself
<pre>Example: https://mywebchart.com/omg/webchart.cgi|login_user|login_passwd|message</pre>  
### System Ability  

Here are the types of outbound messages that can be configured for each RTS endpoint.  Selecting these determines how they are represented inside of Webchart and EH.
  
![](../outbound-interface-install-instructions.assets/100002010000044300000061DF73A21CC3EDA86A.png)  

1. Is WebChart?
   1. For sending messages between 2 Webchart systems
2. Is HAP Server?
   1. Specifies that this can be used as a remote chart HAP System endpoint in the ChartTabs editor.
3. Is HL7 Recipient?
   1. For sending HL7 data to a system
4. Is Text Export?
   1. Specifies that this can be used as a Text Export endpoint in the Send dialog and Auto Routes editor.
5. Is XDS Reg?
   1. For sending via XDS.
6. Is PIX?
   1. Specifies that this is a PIX Manager and is suitable as an endpoint for performing ITI-9 PIX queries.
7. Is HL7 Orders Outbound?
   1. For sending HL7 Orders to a system
8. Is PDQ?
   1. Specifies that this a Patient Demographics Supplier and is suitable as an endpoint for performing ITI-21 PDQ queries.
9. Is OnDemand?
   1. Specifies that any outgoing XDR submissions are to be registered as On-Demand documents rather than static documents.

  
## Auto Routes  

There are many available triggers
* <em>On Document Add/Update</em> - creates MDM, VXU or ORU
* <em>On Patient Add/Update</em> - creates ADT
* <em>On Appointments Add</em> - creates SIU
* <em>On Procedures for Billing Add</em> - creates DFT
  
![](../outbound-interface-install-instructions.assets/1000020100000387000001D4FFCDE23766FBB900.png)  


JOINs and WHERE clause
* This allows for more filtering to work with specific sets of patients.  Requires some understanding of the Webchart DB schema.  Generally requires MIE EDI team to build.  However, manually copying Auto Route JOINs and WHERE Clauses into new Auto Routes is also possible.
* The <em>Help Me</em> feature allows non-power users to build their own commonly used Join/Where clauses.
  
![](../outbound-interface-install-instructions.assets/1000020100000395000001DEDE929AF3379F7A0B.png)  


There are many available send options
* <em>HL7 Send</em> - this will send out HL7 messages
  
![](../outbound-interface-install-instructions.assets/10000201000003850000029F0D9EA6BAC58D88ED.png)  


  
## Testing and Verifying  

Once records are added into Webchart and the triggers are satisfied, the HL7 message should send out according to the RTS.  To validate that the data was sent outbound successfully, browse to the DataSend Queue in Control Panel -> Interfaces.

The Send Queue has reports that show the records
* <em>In Progress</em> - messages currently being sent to the RTS End point
* <em>Pending</em> - messages waiting to be sent to the RTS End point
* <em>Error</em> - messages that were unable to send successfully
* <em>Completed/Acknowledged</em> - messages that were sent successfully
  
![](../outbound-interface-install-instructions.assets/100002010000041F000002D9CB0CDE460D466837.png)  


Resending messages is possible for Completed messages using the Options *Resend* link
  
![](../outbound-interface-install-instructions.assets/10000201000005670000018007FBF4B9158C2E7A.png)  

