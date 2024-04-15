---
id: '1Ac4wN2_76DgVyWJwojqbeTzRDlcLPs18fcePYEADJRg'
title: 'Document Type Purge Rules'
date: '2020-03-23T18:15:06.981Z'
version: 61
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'https://system/?f=chart&s=dteditor&t=Document+Types&tabmodule=admin&tabselect=Document+Types'
  - 'https://system/?f=chart&s=dteditor&t=Document+Types&tabmodule=admin&dtopp=dtpurgerules'
  - 'https://system/?f=chart&s=dteditor&t=Document+Types&dtopp=dtpurgerules&opp=add'
source: 'https://drive.google.com/open?id=1Ac4wN2_76DgVyWJwojqbeTzRDlcLPs18fcePYEADJRg'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
Removing items from a {{% system-name %}} system requires establishing what are called *purge rules*. Purge rules are used for deleting an assortment of file types. Deleting documents in {{% system-name %}} is somewhat different than purging DICOM images, dictations, or batches. For instance, when DICOM images are purged, their database record is retained. Therefore, if a purged DICOM image was archived before purging, the purged image would be able to be restored.

The following describes how {{% system-name %}} documents are purged from the system. More specifically, information is provided regarding the different types of purge rules, the process of viewing, editing, and creating purge rules, and how documents are approved for removal and subsequently removed via a scheduled job, using the *rmdoc* program. This document only briefly discusses rmdoc, which is the program used for the removal of documents approved for deletion.

{{% warning %}}
When {{% system-name %}} documents are purged, they are permanently deleted. Retrieving them is not possible. Use caution when approving documents for purging.
{{% /warning %}}

## How to View Document Type Purge Rules

Navigate to the [Document Types tab](https://system/?f=chart&s=dteditor&t=Document+Types&tabmodule=admin&tabselect=Document+Types) found in the **Control Panel** sidemenu. Given the proper security permissions, there will be a link to [View Purge Rules](https://system/?f=chart&s=dteditor&t=Document+Types&tabmodule=admin&dtopp=dtpurgerules), found in the upper-right corner of the page.

![](../document-type-purge-rules.assets/46e2f887444f03d13709b7c178758f69.png)

Clicking the View Purge Rules link will load a list view of active and inactive Document Type Purge Rules in {{% system-name %}} .

![](../document-type-purge-rules.assets/1ba5f31b8037f0622d810fb0c10ff63c.png)

Once created, purge rules cannot be deleted, only inactivated. The active purge rules are listed in the top-most section, *Document Type Purge Rules*. All inactive purge rules are listed in the lower *Inactive Document Purge Rules* section. Inactive purge rules will not be considered when the purge rules are *evaluated*. Evaluating a purge rule is the trigger that marks documents matching the purge rule parameters for possible removal.

Because deleted documents are *unlinked* from associated orders, encounters, or the like, rather than being simply removed, like DICOM images, all documents picked up during evaluation must be reviewed by the user for approval. Only documents that are approved are inserted into a database table (herein, this table is referred to as the *Documents to be Purged* table), where they are stored until removal.

With the purge rule(s) evaluated and the appropriate documents approved for removal, a separate program set to run routinely on the server, checks the *Documents to be Purged* table, removing and deleting all listed files. This program is called *rmdoc* and may be scheduled via the server's cron service, to run nightly, weekly, monthly, or at intervals conducive to the business needs. Until rmdoc runs, the file(s) may be taken out of the *Documents to be Purged* table, at any time. This will be discussed in further detail, below.

## Adding a Document Type Purge Rule

The **Add Purge Rule** link is found at the upper-right of the *View Document Purge Rules* page_._

![](../document-type-purge-rules.assets/c7c78115a462f04b1debddae6b92d0a0.png)

Clicking the link will load the *Add Purge Rule* screen. Users given the appropriate security permissions may add new purge rules, as needed. As noted, at the bottom of the page is a list of purge rules that already exist in {{% system-name %}} . These may be used as references when creating new rules, as well.

![](../document-type-purge-rules.assets/64f9ad5e458225a47c1c21d297682ee6.png)

{{% note %}}
Creating purge rules does not delete any files. It only defines rules by which {{% system-name %}} can identify files that should potentially be purged. Evaluating these rules, which is discussed below, creates a list of files matching the purge criteria defined in the Add Purge Rule. These files must then be approved before deletion will occur.
{{% /note %}}

### Common Elements Defining Purge Rules

When creating or editing a purge rule, there are various elements to consider. Following is a brief outline of the common elements defining purge rules, with additional information on the types of purge rules and their setup.

**Match SQL Text**: This checkbox determines the type of purge rule being created. There are 2 basic types–Document Type-based rules and SQL-based rules. These are described in more detail in the following sections.

* Leave the <strong>Match SQL Text</strong> box unchecked for Document Type-based purge rules. These types of rules ensure document types will be matched after a specified lifetime, at which point they are eligible to be purged.
* Placing a checkmark in the box tells the system to <strong>Match SQL Text</strong> (SQL-based purge rules), removing the <em>Document Type(s)</em> field and the <em>Lifetime before Purging</em> box, replacing them with a <em>SQL Text</em> field for entering the Structured Query Language. SQL-based purge rules may be very complex, because they utilize an SQL query to find documents eligible for purging.

**Rule Description**: This is a free-text box, where a short description of the intent of the rule is required. The description is not used by {{% system-name %}} , it simply provides details of what the rule is programmed to accomplish.

**Activate Purge Rule**: This checkbox is used to enable/disable the purge rule for/from being evaluated. Only active purge rules will be evaluated.

### Document Type-Based Purge Rules

The first type of purge rule is the document type-based purge rule, which requires defining the document type(s), as well as the expected age of the document(s), before purging. In practice, these rules may not be used often. SQL-based purge rules allow for more flexibility and precision.

After clicking the [Add Purge Rule](https://system/?f=chart&s=dteditor&t=Document+Types&dtopp=dtpurgerules&opp=add) link, the first available field is a drop-down multi-select menu, which allows users to select which document type(s) will be evaluated by the rule. By clicking the ellipsis (**…**) button to the right of the drop-down menu, users can see which document types are available in the system. From here, users may *select all*, *un-select all*, or check off specific document types to be included in the purge rule. To retract the drop-down menu, click the ellipsis button, again.

![](../document-type-purge-rules.assets/50a9b9fd0b85409e55def8249f241636.png)

Together, the selection of **Document Type(s)** and **Lifetime Before Purging** define the documents and how long they are expected to be kept before purging. The **Lifetime Before Purging** textbox should be used to specify an age the document should reach before it is eligible for purging. Use the letters `y`, `m`, and `d` to specify *years*, *months*, and *days*. For example, 5y 4m 3d would specify an age of 5 years, 4 months, and 3 days before the document would be eligible to be purged.

### SQL-Based Purge Rules

As noted, when a checkmark is placed in the *Match SQL Text* box, the Document Type(s) drop-down and Lifetime Before Purging textbox will be removed and replaced with the **SQL Text** free-text field. Here, SQL statements may be entered. The Lifetime Before Purging field is no longer available with SQL-based purge rules, because lifetime will be included in the SQL query.

![](../document-type-purge-rules.assets/7e07f567572065c03ed24f9bc24d76c5.png)

This is how most rules will likely be created, as it provides more flexibility for accommodating all elements of data retention policies, such as last encounter date, patients in litigation, or specific stored document variables and data, like physicians, locations, or the like.

{{% info %}}
Further discussion of SQL is beyond the scope of this document. A {{% system-name %}} Developer will be needed to set up SQL queries. Once an SQL-based purge rule is written, the Check SQL Syntax (Explain) button can be clicked to check syntax correctness and query optimization.
{{% /info %}}

Click the **Add Purge Rule** button to create the purge rule. To discard it, click **Cancel**.

![](../document-type-purge-rules.assets/6c33bc837ba6c529080d8ed6d4338de1.png)

## Editing a Purge Rule

Editing an existing purge rule is very similar to adding a new one. To edit a purge rule, simply click the **Edit** link found under the *Options* column of the Document Type Purge Rules list view, found on the *View Purge Rules* page.

When the *Edit Purge Rule* page loads, an additional free-text field will be available for providing **Reason for Edit**. This is a required field and should be used for a short note describing what changes were made to the purge rule. This entry is shown when displaying the revision history for the purge rule.

### Viewing Revisions of a Purge Rule

Each time a purge rule is edited, a copy of the rule is saved before the rule is updated. A revision history may be viewed by clicking the **Rule ID** link of the purge rule within the *View Purge Rules* list view.

## Evaluating Purge Rules

Evaluating a purge rule is the trigger that marks documents matching the purge rule parameters for possible removal. Simply click the **Evaluate** link of the active purge rule needing triggered, and the purge rule will run, compiling a list of documents matching the specified criteria.

![](../document-type-purge-rules.assets/70494fd1bc04a6cbb8e6341560c100d5.png)

Depending on the complexity of the query and how many documents are in the system, this process may take a few moments to generate the list. When the list is ready, a *Matching Document(s) for Purge Rule* screen be presented, with the document matches.

![](../document-type-purge-rules.assets/ad43e465166bfa332fc242731b82a6e7.png)

Any documents that have already been added to the *Documents to be Purged* table will appear with the *Select* checkbox already checked. Documents that have not yet been added, or approved for deletion, will be listed without the checkbox checked. A **Select All** and **Select None** button can be found below the list view. Check all the documents approved for deletion, and uncheck any that are not needing purged.

Once all documents have been selected or unselected, click the **Approve Checked Files To Be Purged** button. This provides the authorization for marking and unmarking the corresponding documents, adding those necessary to the database table. Remember, the files that were approved for deletion are not actually deleted until the rmdoc program runs on the server. Rmdoc will run nightly, weekly, monthly, or according to the necessary schedule specified by the client.

Clicking the **Cancel** button on the *Evaluate Purge Rule* page will abort any selections or unselections.

{{% warning %}}
Once documents are deleted from {{% system-name %}} , they cannot be retrieved.
{{% /warning %}}

## Viewing All Documents to be Purged

From the *View Purge Rules* page, follow the link in the upper-right corner to **View Documents To Be Purged**. This loads the list view of all the documents on the *Documents to be Purged* table. These documents will be deleted unless removed from the table.

To remove a document from the *Documents to be Purged* table, uncheck any document(s) needing removed, and click the **Approve Checked Files To Be Purged** button. This will remove the unchecked documents from the table, returning the user to the *View Purge Rules* page.

## Security Permission Requirements for Document Type Purge Rules

The **E-Chart : Manage Doc Types** security permission must be set to **View** or higher, to see the *Doc Type Editor* page of the Control Panel.

The **E-Chart : Manage Doc Type Purge Rules** security permission must be set to **Yes** to view the *View Purge Rules* link, or any Document Type Purge Rule-related pages discussed throughout this documentation.
