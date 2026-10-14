---
title: "Unified Inbox"
date: "2026-07-08"
---

The Unified Inbox consolidates all items that require your attention — e-signature requests, assigned encounters, incoming documents, incoming faxes, open tasks, and pending Rx refill requests — into a single list. Rather than checking each queue separately, you can review, act on, and work every pending item from one place.

## Enabling the Unified Inbox (Experiment)

The Unified Inbox is an opt-in experimental feature and is **disabled by default**. To turn it on, enable the **Enable Unified Inbox** experiment in your user preferences:

1. Open **My Settings** (from the user/gear menu).
2. Expand the **Experiments** section.
3. Set **Enable Unified Inbox** to _Enabled_.

When the experiment is enabled, the Inbox landing page shows the unified list described below and the **Inbox** count badge appears in the system header bar. When it is disabled, the Inbox uses the legacy portlet landing and no system-bar Inbox badge is shown.

## Accessing the Inbox

The **Inbox** badge in the system header bar shows a live count of your pending items. Click it to open the Unified Inbox.

{{% info %}}
_Inbox (5)_ in the header bar indicates five items currently need your attention.
{{% /info %}}

You can also navigate directly to the inbox at any time using the URL:
`?f=layout&module=Inbox&name=Unified&tabmodule=+`

## The Inbox Grid

When you open the inbox, a sortable grid lists all your pending items. Each row represents one item and displays the following columns:

| Column       | Description                                                                                                                                                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Type**     | The category of the item: E-Sign, Encounter, Incoming Document, Incoming Fax, Task, or Rx Refill.                                                           |
| **Chart**    | The patient associated with the item (where applicable). Click the patient name to open their chart.                                                        |
| **Subject**  | A brief description of the item — the document name for E-Signs, chief complaint for Encounters, task description for Tasks, drug name for Rx Refills, etc. |
| **Date**     | The relevant date for the item type (e.g., service date, due date, date received).                                                                          |
| **Priority** | The priority level (Normal, High, Low) where the item type supports one.                                                                                    |

You can click any column header to sort the list ascending or descending. Use the filter icon on each column header to narrow the grid to specific values.

## Per-Row Action Buttons

Each row shows small action buttons immediately to the left of the **Type** column. These buttons are specific to the item's type, so you only see relevant actions for each row.

| Item Type                   | Available Quick Actions                                                                 |
| --------------------------- | --------------------------------------------------------------------------------------- |
| **Task**                    | Complete, Edit, Reply, View Regarding, View Task                                        |
| **Encounter**               | Add Task, Delete/Undelete                                                               |
| **Rx Refill**               | View (opens E-Rx Worklist detail)                                                       |
| **E-Sign**                  | (Use E-Sign Multi Review for batch signing; individual actions are in the detail panel) |
| **Incoming Document / Fax** | (Actions are in the detail panel)                                                       |

Click the action button icon to perform the action directly without opening the full detail panel.

## Detail Panel

Clicking anywhere on a row (other than the action buttons or patient name link) opens a **detail panel** that slides in from the right side of the screen. The detail panel shows the full information for the selected item and offers additional actions.

Click the **×** button at the top-right of the panel to close it. Clicking a different row in the grid automatically switches the panel to show that item's details.

### Task Detail

The Task detail panel shows:

- **Description** — the task description
- **Patient** — the associated patient, if any
- **Regarding** — the document, encounter, or other entity the task is about, with a live preview of the regarding document embedded below the task fields when the task regards a document
- **Priority** — Normal, High, or Low
- **Owner** — the user or department (realm) assigned to this task
- **Sender** — who created the task
- **Due Date** — when the task is due
- **Notes** — any additional notes

**Actions available:**

- **Complete** — marks the task complete immediately. The task is removed from the inbox automatically.
- **Open Task** — opens the full task view in the Tasklist.

### Encounter Detail

The Encounter detail panel shows:

- **Patient** — the patient associated with the encounter
- **Visit Type** — the type of visit
- **Reason** — the reason for the visit (if entered)
- **Service Date** — the date of service
- **Priority** — the encounter priority
- **Performing Dr** — the performing provider
- **Assigned User** — the user to whom this encounter is assigned

**Actions available:**

- **Open Encounter** — opens the encounter for documentation.
- **Open Chart** — opens the patient's chart.

### E-Sign Detail

The E-Sign detail panel shows the document summary (patient, document type, subject, service date, requested date, author, priority, and any request comment), along with an inline preview of the document to be signed.

**Actions available:**

- **Sign** — signs the document immediately.
- **Set Low Priority** — lowers the priority of the signature request (it remains on the list but is de-emphasized).
- **Reject to Department** — rejects the signature request and routes it to a department you select. You can add a rejection note before confirming.

### Rx Refill Detail

The Rx Refill detail panel shows:

- **Patient** — the patient who requested the refill (blank if unmatched)
- **Drug** — the medication being requested
- **Prescriber** — the prescribing provider
- **Date Received** — when the pharmacy sent the request

For requests that arrived via SureScripts, the full approve / deny / change refill workflow is embedded inline in the panel — the same controls available in the E-Rx Worklist. Working the request from the panel (approving, denying, or changing it) automatically removes it from your inbox.

For synthetic or test entries that do not have a full pharmacy message body, a banner is shown and an **Open E-Rx Worklist** button lets you navigate to the worklist to work the request there.

### Incoming Document Detail

The Incoming Document detail panel shows the document summary (temp patient name, document type, subject, service date) and, when a potential duplicate patient match exists, a **Suggested Match** with the match patient name and confidence rating.

**Actions available:**

- **Merge into Top Match** — merges the temporary patient and their document into the best-matched existing chart. A confirmation prompt appears before the merge is performed. On success the inbox refreshes and the item is removed.
- **Open Document Queue** — opens the Document Queue for full manual review and routing.

The document is previewed inline below the action buttons.

### Incoming Fax Detail

The Incoming Fax detail panel shows the fax metadata (sender, recipient, subject, category, pages, and received date) with an inline preview of the fax image.

**Actions available:**

- **Open / Distribute** — opens the full Inbound Fax Queue interface to route, batch, or act on the fax.
- **Delete** — permanently deletes the fax after a confirmation prompt. This action cannot be undone.

## Multi-Review (E-Sign)

To sign multiple E-Sign items at once:

1. Click the **E-Sign Multi Review** button in the toolbar above the grid.

The shared E-Sign Review window opens with **every** E-Sign request in the inbox — you do not need to select any rows first. Use **Sign Marked Documents** to sign all of them in one step. After closing the window, the grid refreshes automatically and any signed documents are removed from your inbox.

## Viewing Another User's Inbox (Coverage)

If you need to cover for a colleague — for example, when they are out of office — you can view their inbox:

1. Clear the **User** field at the top of the page and type the name of the user whose inbox you want to view.
2. Click **Search**.

The grid reloads to show that user's pending items. The items displayed are subject to your own permissions:

- **E-Sign requests** — shown only if you have the **E-Sign / Proxy Signing** permission. Without it, the covered user's E-Sign rows do not appear in your view.
- **Tasks** — shown according to your **Tasklist / Manage Tasks** permission level (Own / Realm / All). You see only the tasks your permission level allows you to work on behalf of another user.
- **Encounters, Incoming Documents, Incoming Faxes, Rx Refill requests** — always shown for the target user (no additional permission gate beyond accessing the inbox itself).

When covering another user, E-Sign Multi Review signs documents on their behalf (proxy signing) — the E-Sign backend records the original signer and the proxy.

To return to your own inbox, clear the User field, type your own name, and click **Search** again.

## Grid Controls

The toolbar above the grid provides standard DataVis controls:

- **Sort** — click any column header to sort ascending; click again to sort descending.
- **Filter** — click the filter icon on any column header to enter a filter value and narrow the list.
- **Toggle search filter** — show or hide the full-text search bar across all columns.
- **Generate CSV** — download the current grid contents as a CSV file.
- **Refresh** — reload the grid to pick up any new items (e.g., after another user adds a task for you).
- **Perspectives** — save your current column sort/filter configuration as a named perspective that persists across sessions.
