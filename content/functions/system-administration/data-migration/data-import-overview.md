---
id: '1XAl3AqJTGB3Hb7Cfm_ix2IOxF2hE23GI_ysA3cX8ZJk'
title: 'Data Import Overview'
date: '2020-02-27T21:30:32.809Z'
version: 24
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'gdoc:1FKm7Me6ryOw_1L4ja8i1Oj9NXzfRld-ybN-SDmcxpX8'
  - 'gdoc:1d6JDOjLPbEZ4hDhR-Qj9-DmT3-zskOyTRgJQaYmTfYg'
  - 'gdoc:12Y_7GUv00rJ2bDtFWGIHOpERDbH4nQeBH4uQI0gJ91Y'
source: 'https://drive.google.com/open?id=1XAl3AqJTGB3Hb7Cfm_ix2IOxF2hE23GI_ysA3cX8ZJk'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
menu:
  main:
    name: 'Data Import Overview'
    identifier: '1XAl3AqJTGB3Hb7Cfm_ix2IOxF2hE23GI_ysA3cX8ZJk'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 4940
---
This page provides an explanation of terminology related to importing data from an existing system to the {{% system-name %}} system.
  
### **Data Migration**  
  
Clients replacing an existing EHR with an {{% system-name %}} system undertake what is referred to as [data migration.](gdoc:1FKm7Me6ryOw_1L4ja8i1Oj9NXzfRld-ybN-SDmcxpX8) Multiple sets of data may be involved in a data migration, but the migration is a one-time event.
  
### **Data Imports**  
  
Imports essentially move data from one place to another, can be repeated at regular intervals, and may be an ongoing process. Imports may be part of the migration process, while data migration is considered to be a single event.
  
### **APIs**  
  
An application program interface (API), as utilized by MIE, is a specification that directs how the {{% sys-name %}} system interacts with data that is being imported from another system. CSV APIs have been developed to allow client users to import information into their own system.
  
### **CSV**  
  
Comma separated values (CSV) files are used to transfer data through an API. To simplify, CSV files are simply text files with data fields separated by commas (or another supported character/delimiter) . For more on file formatting standards, see [Data Migration File Format Standard](gdoc:1d6JDOjLPbEZ4hDhR-Qj9-DmT3-zskOyTRgJQaYmTfYg).
  
### **Import Tools**  
  
A number of developer tools have been designed to aide data import efforts. These tools require a developer to operate.
  
## **Related Pages**  

* [Data Import Master List](gdoc:12Y_7GUv00rJ2bDtFWGIHOpERDbH4nQeBH4uQI0gJ91Y)
