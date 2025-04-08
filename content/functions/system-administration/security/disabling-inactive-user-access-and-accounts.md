---
id: '1zemDHa5mw7bP9btK76mzaLNNRea9zxxrfwjVmAt2ZSY'
title: 'Disabling Inactive User Access & Accounts'
date: '2024-05-21T14:11:54.784Z'
version: 31
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin'
  - 'https://system/?f=admin&s=system_settings&tabmodule=admin&tabselect=System+Settings'
  - 'https://system/?f=admin&s=cron&tabmodule=admin&tabselect=Scheduled+Jobs'
  - 'https://system/?f=admin&s=cron&opp=add'
source: 'https://drive.google.com/open?id=1zemDHa5mw7bP9btK76mzaLNNRea9zxxrfwjVmAt2ZSY'
wikigdrive: '5455bbab25cad2721229bfc1e0cf5316add944a5'
---
As an  {{% system-name %}} standard, all user application access is regularly reviewed and validated, ensuring all user access–including of employees, clients, vendors, and partners–is appropriate, given the users' roles and responsibilities. This provides assurance that object access and account management practices support the MIE Information Security Policies. For example, the security principle of *least privilege* requires all users to be granted the most restrictive set of privileges needed for the performance of their authorized tasks. Simply applying this principle limits the damage that can result from accident, error, or unauthorized use.

As such, all {{% system-name %}} systems will automatically disable any client and/or user account (e.g., MIExxxx) that has been inactive for an established and configured number of days. In other words, employees, clients, vendors, and/or partners functioning as system administrators of any database on MIE servers, shall take the responsibility of their user access by way of the tools and automation available in the system, described in further detail, below.

## Days Inactive System Setting

To automatically disable a client and/or user account that has been inactive for a number of days, simply utilize the **Days Inactive** system setting, which allows the number of days of inactivity to be set, according to organizational preferences, or standards.

1. Navigate to the [Control Panel](https://system/?f=layout&module=Admin&name=Home&tabmodule=admin&t=Admin).
2. Go to the [System Settings](https://system/?f=admin&s=system_settings&tabmodule=admin&tabselect=System+Settings) menu tab.

{{% warning %}}
System settings can only be maintained by those users with the appropriate security access of SuperUser, or higher.
{{% /warning %}}

3. Search for the <strong>System, Security, Days Inactive</strong> security setting. Click the <strong>Edit</strong> link of the security setting, found in the <em>Options</em> column to the right of the page.
4. Update the <strong>Value</strong> with the preferred days of inactivity to trigger account deactivation (e.g, 5, 7, 14, etc.).
5. Provide a <strong>Reason</strong> for the change of the security setting, and click the <strong>Change</strong> button.

## Disable Inactive Users Scheduled Job

In addition to the Days Inactive system setting, the  {{% system-name %}} system comes equipped with a job scheduler, which allows for recurring, automated jobs that may need to run periodically, at fixed times, dates, or intervals. This tool allows administrators to easily maintain common and necessary functions for general administration purposes. The **Disable Inactive Users** scheduled job is enabled in every system, by default, and is set to trigger every day. To add, manage, or update scheduled jobs, simply navigate to the [Scheduled Jobs](https://system/?f=admin&s=cron&tabmodule=admin&tabselect=Scheduled+Jobs) menu tab.

{{% info %}}
From the [Scheduled Jobs](https://system/?f=admin&s=cron&tabmodule=admin&tabselect=Scheduled+Jobs) menu tab, users may search for existing scheduled jobs and edit, as needed, or use the [Add Scheduled Job](https://system/?f=admin&s=cron&opp=add) link, in the upper-right corner of the page.
{{% /info %}}

Unless updated, the default behavior of the Disable Inactive Users scheduled job is to run daily, at 05:00, where any user access flagged as inactive, based on the Days Inactive system setting, discussed in detail, above, will hit and perform the *disableacc* function, automatically.
