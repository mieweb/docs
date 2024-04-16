---
id: '1glspsHJIbIIwntXYSIJp6TrCbCqMPhsVJY6BWmfe85U'
title: 'Insurance Eligibility Tab'
date: '2020-03-09T22:56:39.950Z'
version: 32
lastAuthor: 'aquandt'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1glspsHJIbIIwntXYSIJp6TrCbCqMPhsVJY6BWmfe85U'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
{{% system-name %}} can interface with RealMed insurance eligibility to provide real-time insurance eligibility information on a patient chart. Contact your MIE Implementer to inquire about this optional feature and setup.

From the **Insurance Eligibility** chart tab, the **Insurance Eligibility Request** screen will display. Users must have the *Patient Insurance Policies* security permission set to at least View, in order to run the individual eligibility inquiries.

![](../insurance-eligibility-tab.assets/f06138c371e652701d22fcdfed0fac0f.png)

The chart's information will populate on the screen along with the primary insurance policy number that is stored in the chart's insurance section of the demographics. You can change the **Policy Number** field if you wish to search for a policy on the chart besides what is defaulted.

In the **Service Provider** field, begin typing in the name of the provider who is performing the service for the patient. By default, it will populate with the logged-in user's name, but this field should be set to the provider performing the service(s). The system will autocomplete to give you valid choices. The provider you select will then automatically populate their NPI in that field. If the NPI for your provider does not populate, that means the provider does not have an NPI stored on the  {{% system-name %}} username screen. You can always manually type it in this field, also.

In the **Payer** field, begin typing in the name of the payer (patient's insurance) you wish to process and gather an insurance eligibility request from.  Click the **Send Request** button when ready.  The system will give you an error message if you do not have the fields properly filled out.

When you click the Send Request button, the request will be sent and eligibility information will be received in real-time. The **Eligibility Information** screen will appear with the subscriber information and eligibility information sections.

![](../insurance-eligibility-tab.assets/f87c22b33d8223b4c2c240af66331c79.png)

You can gather the information you need from that screen, you can scroll down to the bottom and click the **Save as Document** button.  This will save the entire page of information as a stored document in the patient's chart.

{{% note %}}
Upon initial set up, your MIE Implementer would have specified the name of the document type this will be saved and stored as--INSELIG--and mapped it to the appropriate chart tab(s) your practice wants these documents housed under.
{{% /note %}}

Once you click Save as Document, the screen will refresh back to the Insurance Eligibility screen and will display a message successfully created document (#) which gives you the Doc ID the document is saved as in the chart.  You can print/fax or refer to that stored document saved in the patient's chart, as needed.
