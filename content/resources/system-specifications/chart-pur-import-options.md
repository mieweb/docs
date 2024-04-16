---
id: '1HFEQEZgI72Fl5H3njRaQOgoLYNAIWkZenoyeiwMAR4s'
title: 'Chart PUR Import Options'
date: '2022-03-23T13:50:21.681Z'
version: 29
lastAuthor: 'kbarton'
mimeType: 'text/x-markdown'
links:
  - 'https://drive.google.com/file/d/146dlnHSaMpVmSybF84dGx03cnrOXIeoF/view?usp=sharing'
  - 'https://drive.google.com/file/d/1KIMrmLjp58wyKxLZEebiQoY6iLPvG4Lw/view?usp=sharing'
  - '../../functions/system-administration/data-migration/chart-data-csv-header-options.md'
source: 'https://drive.google.com/open?id=1HFEQEZgI72Fl5H3njRaQOgoLYNAIWkZenoyeiwMAR4s'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
**Chart PUR Import Options**

The following options are allowed. Any other options are unsupported and will be rejected.

### Insert Options

* REVISE
* INSERT
* DELETE_THEN_INSERT

### Blank Options

* DELETE_BLANK
* IGNORE_BLANK

### Distinct Options

DISTINCT is implied for all user patient records

## Default Options

For user patient records, the default options are REVISE and DELETE_BLANK..

## Examples

The following scenario provides examples of each type of processing possible for PUR import.

### Initial Data

We will start with the contents of File: [GenericImportTestPUR A.csv](https://drive.google.com/file/d/146dlnHSaMpVmSybF84dGx03cnrOXIeoF/view?usp=sharing).

@patient_mrns.MR,patients.first_name,patients.last_name,patients.birth_date,patients.username,@pur.Supervisor.id,@pur.Supervisor.id_type,@pur.Administrative Assistant.id,@pur.Administrative Assistant.id_type,users.universal_id

1111,Test1,Employee,01/01/2001,user1,,,user8,id:username,11

2222,Test2,Employee,02#02#2002,user2,user1,id:username,user9,id:username,22

3333,Test3,Employee,03/03/2003,user3,user1,id:username,,,33

4444,Test4,Employee,04-04-2004,user4,user2,id:username,,,44

5555,Test5,Employee,05/05/2005,user5,user2,id:username,,,55

6666,Test6,Employee,06/06/2006,user6,user3,id:username,,,66

7777,Test7,Employee,07/07/2007,user7,user3,id:username,,,77

8888,Test8,Employee,08/08/2008,user8,user2,id:username,,,88

9999,Test9,Employee,09/09/2009,user9,user3,id:username,,,99

After this file is loaded:

* user1 is the supervisor of user2 and user3 
    ![](../chart-pur-import-options.assets/3171c8e3ee59304f67f6e60829e359df.png)
* user2 is the supervisor of user4, user5, and user8 
    ![](../chart-pur-import-options.assets/6ae80f3bfdf8f898f1c2427784b1a093.png)
* user3 is the supervisor of user6, user7, and user9 
    ![](../chart-pur-import-options.assets/a49e45814858557f3a79bdc91302175d.png)
* user8 is the administrative assistant of user1 
    ![](../chart-pur-import-options.assets/09809a31ce8f0500ecb02a1a6c1283d3.png)
* user9 is the administrative assistant of user2 
    ![](../chart-pur-import-options.assets/5398c38fd1685657853f78a41c301520.png)

### Import Updated Data

The data will be changed by importing another file:[GenericImportTestPUR B.csv.](https://drive.google.com/file/d/1KIMrmLjp58wyKxLZEebiQoY6iLPvG4Lw/view?usp=sharing)

@patient_mrns.MR,patients.first_name,patients.last_name,patients.birth_date,patients.username,@pur.Supervisor.id,@pur.Supervisor.id_type,DELETE_THEN_INSERT @pur.Administrative Assistant.1.id,@pur.Administrative Assistant.1.id_type,INSERT IGNORE_BLANK @pur.Administrative Assistant.2.id,@pur.Administrative Assistant.2.id_type,users.universal_id

1111,Test1,Employee,01/01/2001,user1,,,,,,,11

2222,Test2,Employee,02#02#2002,user2,user3,id:username,user9,id:username,,,22

3333,Test3,Employee,03/03/2003,user3,,,user8,id:username,user4,id:username,33

4444,Test4,Employee,04-04-2004,user4,user3,id:username,,,,,44

5555,Test5,Employee,05/05/2005,user5,user2,id:username,,,,,55

6666,Test6,Employee,06/06/2006,user6,user4,id:username,,,,,66

7777,Test7,Employee,07/07/2007,user7,user4,id:username,,,,,77

8888,Test8,Employee,08/08/2008,user8,user2,id:username,,,,,88

9999,Test9,Employee,09/09/2009,user9,user2,id:username,,,,,99

### Import Logic

The imported file is processed as follows:

#### Supervisor

No options are specified, so the default options of REVISE and DELETE_BLANK are used. Changes to the Supervisor role are as follows:

* user1 is not a supervisor anymore 
    ![](../chart-pur-import-options.assets/6989e90e60202162e8aa026477d17342.png)
* user2 is the supervisor for user5, user8, and user9 
    ![](../chart-pur-import-options.assets/add60e64ec554dc53b46da036a5f1c74.png)
* user3 is the supervisor for user2 and user4 
    ![](../chart-pur-import-options.assets/475dd523b3e202bee3df41e59107a10e.png)
* user4 is the supervisor for user6 and user7 
    ![](../chart-pur-import-options.assets/3d4b256b35e3b53c8ef0dc441f454628.png)

#### Administrative Assistant (1)

The DELETE_THEN_INSERT option is used. Changes to the the Administrative Assistant role are as follows:

* user8 is the administrative assistant for user3 
    ![](../chart-pur-import-options.assets/ee8c950d8467cef921b10800df9d76da.png)
* user9 is the administrative assistant for user2 
    ![](../chart-pur-import-options.assets/344fbdc63dcd779463a55bc14edfeedc.png)

#### Administrative Assistant (2)

The INSERT and IGNORE_BLANK options are used. Changes to the Administrative Assistant role are as follows:

* user4 is also an administrative assistant for user3 
    ![](../chart-pur-import-options.assets/76a89d073e58371717549e913ef8864a.png)

## Related Pages

[Chart Data CSV Header Options](../../functions/system-administration/data-migration/chart-data-csv-header-options.md)
