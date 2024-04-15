---
id: '1vx8LBCalWpRi7ldroS_qb4pD7m3CrJaS2ynbYMVu4kE'
title: 'E/M Calculator'
date: '2021-08-30T16:38:08.151Z'
version: 46
lastAuthor: 'sriecke'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1vx8LBCalWpRi7ldroS_qb4pD7m3CrJaS2ynbYMVu4kE'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
An encounter can have a section named Billing. This can include items like Time Factor, Charge Capture and also an EM Calculator (Evaluation & Management Codes).

![](../e-m-calculator.assets/8a7a03888281739c004ad6d958c8cd43.png)

An older look of the Billing section that has EM Calculator and charge capture may look like this:

![](../e-m-calculator.assets/ca19cf1c9faefe7a327e3df69705f9af.png)

The EM Calculator is a coding wizard works when you manually change the dropdowns and will attempt to also auto-calculate but depends on the type of data and method of capturing that data in the encounter. A reason it may not be able to auto-calculate is because when someone free-texts notes (such as the HPI, etc.) the calculator doesn't know how many areas they are observing to count, or if they dictate in the exam the calculator can't count that either because it doesn't know what specific levels/areas/systems etc were dictated. That makes it impossible to auto-calculate a recommended code. The more areas that a physician touches/documents and examines, the more thorough and detailed the examination. The more thorough the examination is, the higher the level at which the physician can be reimbursed. Another component of an evaluation and management session is the assessment and planning. This is where the physician determines the diagnosis, the management options to care for this diagnosis, and the risks involved in treating this diagnosis. Also involved is the review of medical records and research in formulating the decision about the diagnosis and formulating the plan. Usually the more diagnoses, complex treatment, and higher the risk, the higher the reimbursement level the physician will be reimbursed. The EM Calculator can help calculate the Service Type and CPT Code for you based on what you are documenting in the encounter.Auto-calculates work off of var-tree's and selections documented for everything. Most providers want the option of free-texting or dictating. It will auto-calculate based on what is filled out as long as the var-tree selections are also coded to be in which specific level section. What the system excludes when trying to auto-calculate is free-text/dictation, but the provider can manually adjust it and mark the specifics in the E&M Calculator section levels.

![](../e-m-calculator.assets/e4ad3ff26a8ebcb88aa451cdaa565e15.png)

If going to use the EM Calculator and want the system to help auto-calculate the code based on var-tree items, you will need to go thru and code each var-tree item to an exam section via the Var-Tree editor.

When adding a new var-tree item or going thru to code your existing var-tree items, the **Exam Section** drop-down to set is what this item should be counted towards in the EM Calculator section. Then when a provider selects that var-tree item, the EM Calculator automatically marks it for that level and helps to calculate the code based on what is marked.

![](../e-m-calculator.assets/d79bfe6b0ce2ff994c01a124226fde30.png)

The var-tree item is coded to an Exam Section. Then in the EM Calculator, that exam section gets checkmarked if that item was selected in the encounter var-tree documentation automatically and helps calculate the code based on what was documented.

![](../e-m-calculator.assets/013138caad82625cff759432da174558.png)
