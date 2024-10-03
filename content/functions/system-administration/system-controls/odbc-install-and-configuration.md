---
id: '10DpLTmdJcar4ZJVANM1AB7wCDKMtLUV3fUtrWwst2dk'
title: 'ODBC Install & Configuration'
date: '2023-09-29T16:21:27.559Z'
version: 166
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://help.tableau.com/current/pro/desktop/en-us/examples_mysql.htm'
  - 'https://learn.microsoft.com/en-us/power-query/connectors/mysql-database'
  - 'https://docs.informatica.com/integration-cloud/data-integration-connectors/h2l/1243-configuring-ssl-for-mysql-connector-in-cloud-data-integrati/configuring-ssl-for-mysql-connector-in-cloud-data-integration/installing-the-mysql-odbc-driver.html'
  - 'http://www.mieweb.com/mie-ca2.crt'
source: 'https://drive.google.com/open?id=10DpLTmdJcar4ZJVANM1AB7wCDKMtLUV3fUtrWwst2dk'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
As an add-on feature, some clients may choose to implement ODBC (Open Database Connectivity). ODBC access allows customers to access and datamine their {{% system-name %}} database tables. Clients familiar with MySQL, can create their own custom reports using 3rd party report data visualization software products.

### 3rd Party Tools

There are several data visualization software products that clients can utilize with an {{% system-name %}} ODBC connection. Examples of recommended products include Tableau, Power BI/Power Query and Informatica.

### Installation of the MySQL ODBC Driver

Navigate to the data visualization software products website and follow the on screen instructions to download and install the applicable MySQL ODBC drivers.

[Tableau](https://help.tableau.com/current/pro/desktop/en-us/examples_mysql.htm)

[Power BI/Power Query](https://learn.microsoft.com/en-us/power-query/connectors/mysql-database)

[Informatica Documentation](https://docs.informatica.com/integration-cloud/data-integration-connectors/h2l/1243-configuring-ssl-for-mysql-connector-in-cloud-data-integrati/configuring-ssl-for-mysql-connector-in-cloud-data-integration/installing-the-mysql-odbc-driver.html)

### ODBC Data Source Configuration

Once the drivers have been downloaded and installed, users will need to set up a connection and set up the data source. Your {{% system-name %}} deployment consultant or support contact will work with our development team to send you additional information for this step of the installation process.

1. You may download the {{% system-name %}} CA (Certificate Authority) from here: [Med-Web SSL CA](http://www.mieweb.com/mie-ca2.crt)[2](http://www.mieweb.com/mie-ca2.crt)
2. You should have received an e-mail from the {{% system-name %}} development team containing the following information needed for configuration:
    1. Hostname
    2. Port: 3306
    3. Username
    4. Password
    5. SSL Key
    6. SSL Cert
    7. SSL CA
    8. SSL Cipher

![](../odbc-install-and-configuration.assets/656f758b59bf8a742b7b69957828a0c9.png)

Instructions on connecting and setting up the data source will vary depending on the 3rd party report data visualization software utilized. If you are having trouble connecting via ODBC, your {{% system-name %}} deployment consultant or support contact will facilitate a meeting with the {{% system-name %}} database administrator.
