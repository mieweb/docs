---
id: "1c7lV7YbSrJoXkqOsc9gkQOl5MxuGwZpq71QVoq3Qo0g"
title: "First DataBank and RXDB Database Last Update and Version"
date: "2026-01-16T20:45:03.386Z"
version: 40
lastAuthor: "anichols"
mimeType: "text/x-markdown"
links: []
source: "https://drive.google.com/open?id=1c7lV7YbSrJoXkqOsc9gkQOl5MxuGwZpq71QVoq3Qo0g"
wikigdrive: "v2.15.30"
---

{{% system-name %}} currently imports the First DataBank (FDB) update files on a weekly basis on Saturday mornings at 2 am. {{% system-name %}} then does a complete dump and reload of our databases based on these files. At the end of this process, we update a table in the database that keeps track of changes in the database. A nightly job on all servers checks for updates in the database file, and updates the rxdb database on the server from our "home" version of the database if necessary.

{{% system-name %}} does not "notify" after these updates. However, {{% system-name %}} does offer visibility to the last date & time of its update as well as the version that the rxdb for your specific system.

From the **Control** sidemenu tab, go to the **Version** tab.

![](./first-databank-and-rxdb-database-last-update-and-version.assets/464e6072cbbd1f4e06de4948a8c87a8d.png)

Once in the **Version** tab, scroll down on the page to almost the bottom. You will see the **RXDB Database** line.

![](./first-databank-and-rxdb-database-last-update-and-version.assets/73836201d8d34a939cb221aefe821094.png)

- <strong>Name: rxdb_utf8</strong> is a hyperlink that can be clicked to see the RXDB Section Update Summary.

![](./first-databank-and-rxdb-database-last-update-and-version.assets/7d67821d44ee19d0ba7adec9b848353c.png)

When the RXDB section update summary screen opens, it displays a list of data sets on our servers that are utilized, along with dates of last updates.

![](./first-databank-and-rxdb-database-last-update-and-version.assets/340a057d7b3944dfc5d86de494908916.png)

- <strong>Version:</strong> This shows the version number of the RXDB database being used in the system. This version number is also visible in the rxdb_utf8 hyperlink details screen for RXDB Last Updated & Version.

![](./first-databank-and-rxdb-database-last-update-and-version.assets/d85a24e22931e72a29516559aeba9f57.png)
