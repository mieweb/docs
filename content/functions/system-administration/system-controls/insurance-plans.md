---
id: '1bWGS4nnTzQx6rf4OOzF1WHu5smgWhH5HYEOG42DKpBU'
title: 'Insurance Plans'
date: '2024-07-16T19:57:40.921Z'
version: 48
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - '../../e-chart/insurance-summary-in-demographics-tab.md'
source: 'https://drive.google.com/open?id=1bWGS4nnTzQx6rf4OOzF1WHu5smgWhH5HYEOG42DKpBU'
wikigdrive: '2aacb51f060d0354a678419290943a99bd16aad1'
---
With proper security rights, System Administrators can manage a list of insurance plans available for use in the system. **_Insurance Plans_** can be found under the Control Panel. For more information on how insurance plans are used in the registration and patient demographics see additional help labeled [Insurance Summary in Demographics Tab](../../e-chart/insurance-summary-in-demographics-tab.md).

There are different levels of security that can be assigned to specific security roles and should be considered when adding or modifying system controls. The *Manage Insurance Plans* security role setting only applies to the *Insurance Plans* manager under the Control Panel. This setting does not apply to the ability to add an insurance plan to a patient chart. This security is only for managing the master list of insurance plans utilized by staff.

![](../insurance-plans.assets/a84a87d88dc94e900889cef54d55cf61.png)

**None**: No access to the Insurance Plan manager.

**View**: Allows users to view the list of Insurance plans created in the system.

**Add**: Allows users to view the list of Insurance plans created in the system and add new insurance plans.

**Edit**: Allows users to view the list of Insurance plans created in the system, add new insurance plans and edit existing plans.

**Delete**: Allows users to view the list of Insurance plans created in the system, add new insurance plans,edit existing plans and delete insurance plans.

In the 202403 release the insurance plan list was changed to a datavis style format.

![](../insurance-plans.assets/04818efefe11a191681bc043b80a9fec.png)

## Add Plan

Click the Add Plan above the right hand side of the datavis.

![](../insurance-plans.assets/6f64814307f85ff97ccc14736dac9d71.png)

Enter the applicable information for the Insurance Company.  The Insurance Code can be manually created (often done for clients wishing to migrate and prior system codes or to match a billing system). However, if a unique code is desired so as not to clash with any other interface or external system, click the **_Generate_** button to create a system generated unique Insurance code. Additional fields include Address 1, Address 2, City, State, Zip, Phone, Fee Schdule, National Payor ID, Comments. When all fields are completed press the **_Save_** button.

![](../insurance-plans.assets/658a4285d4f8ed38ec56f201fba5fcc3.png)

## Edit

To edit an existing insurance plan, select the plan in the datavis, once selected, the Edit button at the bottom of the datavis will display. Click the Edit button to view the Insurance Details

![](../insurance-plans.assets/eccc86f6106b66d670410e88e1d7947b.png)

**_Edit Insurance Plan_** information displays, edit any information or mark as Inactive. Press the Save button when done and return to the main list of insurance plans.

![](../insurance-plans.assets/7f68c09d8609e8ccb2701dda572a04f3.png)

## Delete (Set Status)

While the status can be set in the **_Edit Insurance Plan_** screen, it can also be done by selecting the **_Set Status_** button. When this option is selected, the Edit Status screen displays, where only the status can be set to Active or Inactive. No additional insurance information is displayed.

![](../insurance-plans.assets/7c37fea34c32cf8ad2eee68f42a74de8.png)
