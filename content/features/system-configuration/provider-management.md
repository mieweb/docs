---
id: '1QBe4vrKi8pe2cLMbAEQKoUKC_kZpgecPjiUPejIpBog'
title: 'Provider Management'
date: '2026-03-05T16:29:36.618Z'
version: 99
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1QBe4vrKi8pe2cLMbAEQKoUKC_kZpgecPjiUPejIpBog'
wikigdrive: 'v2.16.0'
---
The Provider Management features allows users with the proper security to add New Providers and Provider Organizations within {{% system-name %}}. Provider Organizations are typically a location or an entity, where a Provider is typically an individual.

{{% system-name %}} also has the ability to help build a hierarchy of relationships between providers and provider organizations. For example, Internist Butler MD is a provider associated with Better Corp, which is a Business Entity/Provider Organization. Another example, Ashish Patel MD is a provider that works at EHS Office Clinic, which is a clinic location/Provider Organization. Creating a hierarchy between Provider and Provider Organizations is not required by {{% system-name %}}, but it can be helpful or necessary based on specific client requirements.

The Provider Management tab is located under the Control Panel side menu.

## Provider/Provider Organization Search

Enter the name of the provider or provider organization in the **Name** field and click the **Search** button. Check the box to the right of the **Name** field if the search should include deactivated providers/provider organizations. The **Name** field search provides a "contains" search and does not require an exact match to the data entered. Users may also click the *Provider Management* datavis header bar and a list of all providers/provider organizations will render in alphabetical order or click the **All Providers** link on the far right of the Provider Management module to view all providers/provider organizations.

![](./provider-management.assets/702bbea386aa8712bea7fdca84a761a8.png)

The list of providers/provider organizations display in a datavis. Simply click on the Provider or Provider organization name on the result to enter the provider/provider organization "chart". The provider/provider organization "chart" captures specific data related to that provider/provider organization, such as address, license information, etc.

![](./provider-management.assets/94fa59a47ba1a8565d78c9aa418a5dfd.png)

## Direct Trust Directory

For {{% system-name %}} systems that have Direct Messaging configured, a DirectTrust Directory will display in a datavis format under the Provider Management datavis. Clients not set up with Direct Messaging will not see a Direct Trust Directory in their system.

![](./provider-management.assets/bc812d654fc004e033afb4c5b0068e39.png)

## Add New Provider

Select the Add New Provider link on the right hand side of the Provider Management tool to add a new provider and follow the prompts to add a provider, then click the **Add New** button to create the provider.

![](./provider-management.assets/63fc2119b9e85643e26488d6d55d54e1.png)

The user will automatically be directed to the Provider chart where optional information can be added regarding this provider.

![](./provider-management.assets/66d446524a41b2b857e5081dbc4da818.png)

## Add New Provider Organization

Select the **Add New Provider Organization** link on the right hand side of the Provider Management tool to add a new provider organization. Enter the organization or location name, then click the **Add New** button to create the provider organization.

![](./provider-management.assets/908596278b234f87824f208ca0daab2f.png)

The user will automatically be directed to the Provider Organization chart where optional information can be added regarding the provider organization.

![](./provider-management.assets/d5c99faeb848b51d4244f319d5deaf71.png)

## Managing Provider Services/Service Plans

From the Provider or Provider Organization chart type, navigate to the service plans section. Click on the "hide/show quick list" ribbon icon.

![](./provider-management.assets/be94959619a3d71800cc8f57d6c7b108.png)

Then, click the "+" to open the **Add Service** box. Enter the "Effective Date" that the service may start being performed by this provider or provider organization, the "Item" which can be performed. Optional notes may be entered in the "Memo" box. The memo is an internal comment only and not displayed elsewhere. Click **Add Another** to clear the fields and add additional service items or click **Save** to close the Add Service box.

![](./provider-management.assets/931eb789a18a10c88fc98e1f47b5ec17.png)

The service item, the effective date and the optional memo will display in a bulleted list format in the Service Plan section.

![](./provider-management.assets/ea7eefb39653256f6f093f726b52fb7e.png)

Hover over the service items to view the Edit and Delete options.

![](./provider-management.assets/d407ed12816841d02054fc79be4951fe.png)

Edit allows the user to update the effective date and memo. The service item is not editable. If the wrong item was selected, the items should be deleted and reentered.

![](./provider-management.assets/9be3da8b5ef027c194328fbc62fb9ef4.png)

Delete allows the user to Delete the service item from the provider/provider organization. Users will be asked to confirm they wish to delete the item before the item is actually deleted.

![](./provider-management.assets/f31c9d1f243aae127c4166ffbeee5ddc.png)

The Provider Management tab displays all services associated with the provider/provider organization. Services display as a comma separated list in the Services column. The Provider Management tab is a DataVis, which users may create their own perspectives and move columns to display in their own desired location.

![](./provider-management.assets/8d38fbe885ee849ed6485d68bcde2ba6.png)

## Managing Multiple Provider Services

From the Provider Management tab, users may select multiple providers/provider organizations at once, then select the Service button.

![](./provider-management.assets/f808bf20e0311a5fe064bba5e5f1dc05.png)

The Manage Services box will open. Users may enter the effective date of the changes, as well as use the autocompletes to add or remove service order items all at once, then click the Save button.

![](./provider-management.assets/c1167fb17e8f425265ac4addb9dd96ce.png)

Users will see a confirmation that the provider/provider organizations have been updated and view the changes in the Services column of the Provider Management tab.

![](./provider-management.assets/54e5f9daa914c17df2a7674b4bb2a435.png)
