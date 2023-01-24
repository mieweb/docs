---
id: '10DpLTmdJcar4ZJVANM1AB7wCDKMtLUV3fUtrWwst2dk'
title: 'ODBC Install & Configuration'
date: '2020-03-16T23:23:27.283Z'
version: 57
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'http://dev.mysql.com/downloads/connector/odbc/'
  - 'http://dev.mysql.com/doc/connector-odbc/en/connector-odbc-installation-binary-windows.html#connector-odbc-installation-binary-windows-installer'
  - 'med-web-ssl-certificate-authority.md'
  - 'https://miewiki.med-web.com/wiki/images/7/72/Crystal10TurnOffSmartLinking.reg'
source: 'https://drive.google.com/open?id=10DpLTmdJcar4ZJVANM1AB7wCDKMtLUV3fUtrWwst2dk'
wikigdrive: '6c6f21d9d0a63cb86fd32dec4cec30d4b470cbf5'
menu:
  main:
    name: 'ODBC Install & Configuration'
    identifier: '10DpLTmdJcar4ZJVANM1AB7wCDKMtLUV3fUtrWwst2dk'
    parent: '1V2Lt_MnbYoDNFBtcoH6JHJKm4he3obo6_GmOlfyW-L8'
    weight: 4650
---
### **MySQL 5.3.6 ODBC Driver Install**  

1. Download the MySQL ODBC 5.3.6 Driver for your OS from [here](http://dev.mysql.com/downloads/connector/odbc/)
2. Install the Driver, follow the instructions provide by MySQL found [here](http://dev.mysql.com/doc/connector-odbc/en/connector-odbc-installation-binary-windows.html#connector-odbc-installation-binary-windows-installer)
  
### **Adding MySQL 5.3.6 ODBC Driver as a Data Source**  
  
{{% note %}}

These directions are from Windows XP, if you are running Vista or Windows 7 they could be slightly different.
{{% /note %}}

From the Windows Desktop:

1. Click "Start"
2. Search for "ODBC"
3. Under Programs you should see "Data Sources (ODBC)"

  
![](../odbc-install-and-configuration.assets/b27876f8434f9fc0876169edd2d38d5f.png)  


4. From there click, "System DSN"
5. Click "Add"
6. Choose "MySQL ODBC 5.2 Unicode Driver"
7. Click "Finish"
  
### **MySQL ODBC Data Source Configuration**  

Now that you have the driver installed successfully, you will need to configure it.
1. You will need MIE's CA, you can download from here: [Med-Web SSL CA](med-web-ssl-certificate-authority.md)
2. You should have received an e-mail containing information on how to obtain the follow elements for configuration:
   1. Hostname
   2. Port: 3306
   3. Username
   4. Password
   5. SSL Key
   6. SSL Cert
   7. SSL CA
   8. SSL Cipher

From the MySQL ODBC Configuration Screen
1. Click "Details >>" for advanced options.
2. Click "SSL Settings"

  
![](../odbc-install-and-configuration.assets/3be6847ee4964dadfb20e11b00274ffd.png)  


3. Fill in all fields provided from the configuration e-mail sent to you.
4. Test connection by clicking "Test".
   1. Insure that your certificates and keys are in the correct inputs.
  
### **3rd Party Tools**  

There are many tools out there that can utilize an ODBC connection. This section is to help configure the most common ones.
  
### **Crystal Reports 2008**  

Crystal Reports is a very powerful report tool that can be used in conjunction with the {{% system-name %}} ODBC connection to generate complex reports. This section is to help you configure Crystal Reports 2008 and fix a performance problem that will help speed up the mapping of tables and their relations.
* Install Crystal Reports 2008
{{% info %}}

Installing and using Crystal Reports is outside the scope of this wiki. Please consult Crystal's manual for help.
{{% /info %}}
  
#### **Turn Off Crystal's Smart Linking**  

**Before you run Crystal Reports 2008**, simply download the registry fix to turn off Crystal's Smart Linking.
{{% note %}}

If you already launched Crystal Reports 2008, simply close the application before moving on to the next step.
{{% /note %}}
1. Download this file [Crystal10TurnOffSmartLinking.reg](https://miewiki.med-web.com/wiki/images/7/72/Crystal10TurnOffSmartLinking.reg) by right clicking and choosing "Save As". Save the file to the "MIE ODBC" directory that you created earlier.
2. From the Windows desktop
3. Click "Start"
4. Click "Run..."

  
![](../odbc-install-and-configuration.assets/6292b01957c8d926ab5bb9d37cd33f36.png)  


5. Type "regedit" in the Open input box.
6. Click "Ok"

  
![](../odbc-install-and-configuration.assets/c7f4f7221b31f65a234a44507dbb214d.png)  


7. The Registry Editor will launch
8. Click "File"
9. Click "Import"

  
![](../odbc-install-and-configuration.assets/770694f23d4524149597217068fc9457.png)  


10. "Import Registry File" dialog will pop.
11. Navigate to the "MIE ODBC" folder that you saved the "Crystal10TurnOffSmartLinking.reg" file.
12. Choose "Crystal10TurnOffSmartLinking.reg"
13. Click "Open"

  
![](../odbc-install-and-configuration.assets/b5c0ee4fb236089f5f29ac89a59aea32.png)  


14. An information prompt will pop stating that the reg file was imported successfully. If you did not get this, something went wrong. Make sure you choose the right file.

  
![](../odbc-install-and-configuration.assets/4bd6b722ae16260ff54a402627cd0763.png)  


15. Done, you have successfully turned off Crystal's Smart Linking.
16. It is now Ok to launch Crystal Reports 2008.
