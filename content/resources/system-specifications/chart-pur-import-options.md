---
id: '1HFEQEZgI72Fl5H3njRaQOgoLYNAIWkZenoyeiwMAR4s'
title: 'Chart PUR Import Options'
date: '2022-03-23T13:50:21.681Z'
version: 29
lastAuthor: 'Kate Barton'
mimeType: 'text/x-markdown'
links:
  - 'https://drive.google.com/file/d/146dlnHSaMpVmSybF84dGx03cnrOXIeoF/view?usp=sharing'
  - 'https://drive.google.com/file/d/1KIMrmLjp58wyKxLZEebiQoY6iLPvG4Lw/view?usp=sharing'
  - '../../functions/system-administration/data-migration/chart-data-csv-header-options.md'
source: 'https://drive.google.com/open?id=1HFEQEZgI72Fl5H3njRaQOgoLYNAIWkZenoyeiwMAR4s'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
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
  
  user1 is the supervisor of user2 and user3 <img src="../chart-pur-import-options.assets/10000201000002DB0000009F13CE25A39E59A40A.png" />  

  
  user2 is the supervisor of user4, user5, and user8 <img src="../chart-pur-import-options.assets/10000201000002DB000000BA1E7745D841B11C74.png" />  

  
  user3 is the supervisor of user6, user7, and user9 <img src="../chart-pur-import-options.assets/10000201000002DB000000C094A464D0B70D66E3.png" />  

  
  user8 is the administrative assistant of user1 <img src="../chart-pur-import-options.assets/10000201000002DB00000091BB4BA2B6AAF89086.png" />  

  
  user9 is the administrative assistant of user2 <img src="../chart-pur-import-options.assets/10000201000002DB0000008BEA2347B861170B13.png" />  

  
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
  
  user1 is not a supervisor anymore <img src="../chart-pur-import-options.assets/10000201000002DB00000077FFC1401BDA3967AD.png" />  

  
  user2 is the supervisor for user5, user8, and user9 <img src="../chart-pur-import-options.assets/10000201000002DB000000BF754A6BF495ED0992.png" />  

  
  user3 is the supervisor for user2 and user4 <img src="../chart-pur-import-options.assets/10000201000002DB000000A4546E8BFB1756FB92.png" />  

  
  user4 is the supervisor for user6 and user7 <img src="../chart-pur-import-options.assets/10000201000002DB000000BCD44FB293A0E23E10.png" />  

  
#### Administrative Assistant (1)  
  
The DELETE_THEN_INSERT option is used. Changes to the the Administrative Assistant role are as follows:
  
  user8 is the administrative assistant for user3 <img src="../chart-pur-import-options.assets/10000201000002DB0000008E5AB0CF4362710142.png" />  

  
  user9 is the administrative assistant for user2 <img src="../chart-pur-import-options.assets/10000201000002DB000000910C92E0BE7B938A52.png" />  

  
#### Administrative Assistant (2)  
  
The INSERT and IGNORE_BLANK options are used. Changes to the Administrative Assistant role are as follows:
  
  user4 is also an administrative assistant for user3 <img src="../chart-pur-import-options.assets/10000201000002DB000000BC8C402C4D4FD9A999.png" />  

  
## Related Pages  
  
[Chart Data CSV Header Options](../../functions/system-administration/data-migration/chart-data-csv-header-options.md)

