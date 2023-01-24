---
id: '179G5TF3s37IzqNSRNBCsaa4GK6r678N4gB1dBk4TB_A'
title: 'Chart Observations Import Options'
date: '2020-02-27T21:31:09.639Z'
version: 31
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links:
  - 'https://miewiki.med-web.com/wiki/index.php/File:GenericImportTestOBS_A.csv'
  - 'https://miewiki.med-web.com/wiki/index.php/File:GenericImportTestOBS_B.csv'
  - 'chart-data-csv-header-options.md'
source: 'https://drive.google.com/open?id=179G5TF3s37IzqNSRNBCsaa4GK6r678N4gB1dBk4TB_A'
wikigdrive: '6c6f21d9d0a63cb86fd32dec4cec30d4b470cbf5'
menu:
  main:
    name: 'Chart Observations Import Options'
    identifier: '179G5TF3s37IzqNSRNBCsaa4GK6r678N4gB1dBk4TB_A'
    parent: '1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU'
    weight: 5140
---
The following options are allowed. Any other options are unsupported and will be rejected.
  
### **Insert Options**  

* REVISE
* UPDATE
* INSERT
* DELETE_THEN_INSERT
  
### **Blank Options**  

* ALLOW_BLANK
* DELETE_BLANK
* IGNORE_BLANK
  
### **Distinct Options**  

* ALLOW_DUPLICATE
* DISTINCT
  
## **Default Options**  
  
For most observation records, the default options are INSERT, IGNORE_BLANK, and ALLOW_DUPS.
  
## **Examples**  
  
The following scenario provides examples of each type of processing possible for PUR import.
  
### **Initial Data**  
  
We will start with the contents of [File:GenericImportTestOBS A.csv](https://miewiki.med-web.com/wiki/index.php/File:GenericImportTestOBS_A.csv).


```
  
  
{{% pre %}}  
  
  
@patient_mrns.MR,patients.first_name,patients.last_name,patients.birth_date,UPDATE IGNORE_BLANK DISTINCT @obs.Race.obs_result,INSERT @obs.RBC.1.obs_result,INSERT @obs.RBC.2.obs_result,UPDATE ALLOW_BLANK DISTINCT @obs.org level 1.obs_result,UPDATE ALLOW_BLANK DISTINCT @obs.org level 2.obs_result,DELETE_THEN_INSERT @obs.myObs1.1.obs_result,@obs.myObs1.2.obs_result,UPDATE DELETE_BLANK @obs.myObs2.obs_result  
1111,Test1,Employee,01/01/2001,R5,3.9,4.2,A,,25,23,Normal  
2222,Test2,Employee,02/02/2002,R5,4.24,4.87,B,E,13,14,Low  
3333,Test3,Employee,03/03/2003,R5,5.14,4.82,C,F,14,10,Normal  
4444,Test4,Employee,04/04/2004,R5,6,5.91,D,G,76,70,Normal  
5555,Test5,Employee,05/05/2005,R5,4.98,4.99,,H,27,30,High  
  
  
  
{{% /pre %}}  
  
  

```
After this file is loaded:
* Each of the patients has a race of R5.
* Each of the patients has two RBC results.
* Each of the patients has an org level 1 entry, but Test5 has no result for it.
* Each of the patients has an org level 2 entry, but Test1 has no result for it.
* Each of the patients has two myObs1 results.
* Each of the patients has a myObs2 result.
  
![](../chart-observations-import-options.assets/0f3e18d554c4bf28156130d42d6e0193.png)  

  
![](../chart-observations-import-options.assets/daf45c74540a615f3eb15a2ebd1e65de.png)  

  
![](../chart-observations-import-options.assets/720adf521d83e51a80666a5d957a3c81.png)  

  
![](../chart-observations-import-options.assets/4bdd37542ca6ae2141d402ff367f09e4.png)  

  
![](../chart-observations-import-options.assets/6713694d92ad5175cf753672b90c6c04.png)  

  
### **Import Updated Data**  

The data will be changed by importing another file [File:GenericImportTestOBS B.csv](https://miewiki.med-web.com/wiki/index.php/File:GenericImportTestOBS_B.csv).


```
  
  
{{% pre %}}  
  
  
@patient_mrns.MR,patients.first_name,patients.last_name,patients.birth_date,UPDATE IGNORE_BLANK DISTINCT @obs.Race.obs_result,@obs.Race.observed_datetime,INSERT @obs.RBC.1.obs_result,@obs.RBC.1.observed_datetime,INSERT @obs.RBC.2.obs_result,@obs.RBC.2.observed_datetime,UPDATE ALLOW_BLANK DISTINCT @obs.org level 1.obs_result,@obs.org level 1.observed_datetime,UPDATE ALLOW_BLANK DISTINCT @obs.org level 2.obs_result,@obs.org level 2.observed_datetime,DELETE_THEN_INSERT @obs.myObs1.obs_result,@obs.myObs1.observed_datetime,UPDATE DELETE_BLANK @obs.myObs2.obs_result,@obs.myObs2.observed_datetime  
1111,Test1,Employee,01/01/2001,R5,1/1/2016,4.11,1/2/2016,4.03,2/2/2016,A,1/1/2016,,1/1/2016,24,1/1/2016,High,1/1/2016  
2222,Test2,Employee,02/02/2002,,1/1/2016,4.57,1/2/2016,4.66,2/2/2016,B,1/1/2016,F,1/1/2016,15,1/1/2016,Low,1/1/2016  
3333,Test3,Employee,03/03/2003,R5,1/1/2016,5.01,1/2/2016,4.99,2/2/2016,B,1/1/2016,F,1/1/2016,,1/1/2016,Normal,1/1/2016  
4444,Test4,Employee,04/04/2004,R1,1/1/2016,5.84,1/2/2016,6.04,2/2/2016,D,1/1/2016,G,1/1/2016,75,1/1/2016,,1/1/2016  
5555,Test5,Employee,05/05/2005,R5,1/1/2016,4.9,1/2/2016,5.03,2/2/2016,,1/1/2016,H,1/1/2016,28,1/1/2016,Normal,1/1/2016  
  
  
  
{{% /pre %}}  
  
  

```
  
### **Import Logic**  

The imported file is processed as follows:
  
#### **Race**  

* Test2 is unchanged, because blanks are ignored in this column.
* Test4 is updated to R1 instead of R5.
  
#### **RBC**  

* All of the patients have two new RBC results, in addition to the previous results.
  
#### **org level 1**  

* Test3 is changed to B.
  
#### **org level 2**  

* Test2 is changed to F.
  
#### **myObs1**  

* All of the existing results are deleted and replaced with the new results (if any).
  
#### **myObs2**  

* Existing data is replaced with the new data.
* Test4's result is deleted.
  
![](../chart-observations-import-options.assets/c551ee278e6fb2d027cfb21cc5b634ce.png)  

  
![](../chart-observations-import-options.assets/86a727157bdd153faaed7dbfee2aae34.png)  

  
![](../chart-observations-import-options.assets/d567c84ce32d3cbd6bd0a198acdffe89.png)  

  
![](../chart-observations-import-options.assets/ce4a86a78957b28c21d9067a6ad0f5b3.png)  

  
![](../chart-observations-import-options.assets/e048e59a9a00e5898f172ee111e89ed8.png)  

  
## **Related Pages**  

[Chart Data CSV Header Options](chart-data-csv-header-options.md)
