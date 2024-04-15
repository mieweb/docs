---
id: '1ZhUOL7iD9PJzjgUtbgqs-P-OOiRL5JMLHIfOXC5yLtE'
title: 'E-Refills - All E-Refills Tab'
date: '2020-03-16T11:53:37.082Z'
version: 43
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - '../system-administration/system-controls/setting-up-e-prescribers.md'
  - 'e-refills-my-pending-refills-tab.md'
source: 'https://drive.google.com/open?id=1ZhUOL7iD9PJzjgUtbgqs-P-OOiRL5JMLHIfOXC5yLtE'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
You can get to this tab by clicking on the E-Refills link in the alert taskbar at the top (if you are an e-Prescriber and have pending e-refills that need done) OR you can access this tab by going into E-Chart sidemenu tab, then selecting the E-Rx tab at the top (this method of access would be for users who can manage e-refill requests for others).

At the top is a search filter that you can utilize to find specific e-refills in various buckets of this tab. One must set at minimum the prescriber field and click ‘search' to render results.

![](../e-refills-all-e-refills-tab.assets/3c2d62082d8fc6c973c451e711ae7f3c.png)

Under the search criteria, the ALL E-REFILLS results then could show e-refills history in two different ways.

1. If you are a certified e-prescriber and receive e-refill requests, your ALL E-REFILLS tab will show all your e-refill requests pending and refill requests ever received historically and have them categorized. You can show/hide each category. If you do <em>not</em> have security to manage e-rx refills for others, you will not see anyone else's e-refills history in this tab. This would be specific to you, the e-Prescriber.
2. If you have security to manage e-rx refills for others, then this is the tab would show you any pending refills you and other have and also will show any refill requests ever received historically and have them categorized for all prescribers in your system. The specific prescriber that the refill was requested from or who worked on it is listed in a column.

If this tab shows all zero, then it is because you are not an e-prescriber and also don't have security to work other's refills.

![](../e-refills-all-e-refills-tab.assets/9bb0102505222d34e1265955839aab70.png)

{{% tip %}}
If you are receiving e-refill requests from pharmacies for a physician who has left your practice, please see other help documentation named [*Setting Up E-Prescribers*](../system-administration/system-controls/setting-up-e-prescribers.md). That help documentation will guide you to make sure to follow the steps on how to correctly edit the username screen for that physician from {{% system-name %}} and terminate them from being certified with SureScripts from your practice and so SureScripts will know to disable them and pharmacies will remove them from sending refill requests to your practice.
{{% /tip %}}

If you **do** have security to manage e-rx refills for others, then this tab will show all categorized e-refill requests for all certified e-Prescribers. A quick way to know this is that you **do** see the *prescriber* name column in the summaries which distinguishes which e-refill request was whose.

![](../e-refills-all-e-refills-tab.assets/e1bf13ba2c6a10b8f8afc74f18922ac3.png)

If you are (for example) a nurse (which is not a certified e-prescriber according to SureScripts), yet you have the security on to be able to work the incoming e-refills queue for your physician who is on vacation for a few days, you will *not* see the e-refills alert at the top of your screen. You would work those e-refill requests from this tab. You would work them from the PENDING REFILLS REQUESTS category listed at the top of the summary of this tab. Please make sure to only work the refill requests for the prescriber you are designated to.

To work an e-refill request, please see other help documentation named [*E-Refills-MY PENDING REFILLS*](e-refills-my-pending-refills-tab.md)*.*

![](../e-refills-all-e-refills-tab.assets/e1bf13ba2c6a10b8f8afc74f18922ac3.png)

If you need to work or monitor or view other e-refills for other categories for e-Prescribers, it is done from this tab.

*It depends if you are an e-Prescriber or not AND/OR if you have security rights to manage e-refill requests for others as to what you will see in this tab.*

If you are not an e-prescriber AND do **not** have security to manage e-rx refills for others, then this tab will just show *zero* in each category.

If you have security rights to manage e-rx refills for others, then this tab will show any and all e-refills pending and others would be categorized.

If you are an e-prescriber but do **not** have security to manage other's e-rx refills, then only *your* e-refills will show here and be categorized.

From the Pending Refill Requests category, clicking the *ID* column will open up that specific pending e-refill to work on. If you click on the *ID* from any other category, it will open up the details of the e-refill request and any approval/denial, etc notes attached to it.

![](../e-refills-all-e-refills-tab.assets/c4209ae944406748b58d5b23ddfea442.png)

## Categories

This *All E-Refills* tab also shows e-refills that have been worked and puts them/sorts them into specific categories such as e-refills that were approved, denied, etc. Completed Refill Requests means the refill request was worked/completed. It could've been denied or approved or changed, but it's completed so it also stores in the completed category. Any refill request errors will also show in it's specific category and unmatched patient refill requests has it's own category to store those in.

![](../e-refills-all-e-refills-tab.assets/e1bf13ba2c6a10b8f8afc74f18922ac3.png)

### Refill Request Errors

If there were any errors upon transmission of an e-refill request back to a pharmacy, they will show in this category. If the error was due to a connectivity issue between {{% system-name %}} and SureScripts, you will see a RESEND button. This will allow you to resend the e-refill request message back to the pharmacy until it either falls into the completed refill requests category, any other category or remains in this category but returns with a specific error message other than connectivity issue.

![](../e-refills-all-e-refills-tab.assets/2236f6e05a07ad4bdb07617c3a1c1ed0.png)

If there is still a connectivity issue and you click the RESEND button – you will see a red message box and you will still have access to RESEND button to try again later when connectivity issues have been resolved.

![](../e-refills-all-e-refills-tab.assets/90270507685be6840fe1b0005c8661d4.png)

You can also get to the RESEND button by clicking on the specific refill *ID* link.

![](../e-refills-all-e-refills-tab.assets/e7cf69f47765db6765fc598ab16641c9.png)

![](../e-refills-all-e-refills-tab.assets/6c3cc6b4746441871a3c489bfda00f4a.png)

Only refill request messages back to pharmacies via SureScripts are *resendable* if it was a connectivity issue. Any other message that reached SureScripts but they rejected it for any reason – those will be in this category but with a specific error message and no *resend* method is available for those.

### Unmatched Prescribers

This section will probably not ever show anything because the e-Prescriber receives only its own requests, but the only way it would show something there is if somehow there was conflicting data between the MIE side and the client system. The MIE system is thinking that a particular prescriber belonged to a particular client, but for some reason that user doesn't exist on the client system.  It's doubtful anything will ever be stored in this section or anything like this would happen, but it is possible.

E-refill request messages for prescribers that are Active or Login Disabled show up in the All E-Refills list. To stop receiving these (ex: for a provider who terminated the practice and their login is disabled), the *Receive Refill Requests* checkbox needs to be unchecked for a user, regardless of their status.

![](../e-refills-all-e-refills-tab.assets/4cebd33b817efea0924981eff581f4d2.png)
