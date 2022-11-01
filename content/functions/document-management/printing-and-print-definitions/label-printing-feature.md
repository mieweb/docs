---
id: '1GBdtPDh7IhPpfruWnKD_qi1WRONcy9p6XhabXBWXl10'
title: 'Label Printing Feature'
date: '2020-03-24T15:23:57.818Z'
version: 64
lastAuthor: ''
mimeType: 'text/x-markdown'
links:
  - 'gdoc:1vh7UsgREWhLDIYSS0IXhc9Z_2Rnzi1uplvp6c8ywc7o'
source: 'https://drive.google.com/open?id=1GBdtPDh7IhPpfruWnKD_qi1WRONcy9p6XhabXBWXl10'
wikigdrive: '8799ccfd58b47ed721e42eeadb589071776ed64f'
menu:
  main:
    name: 'Label Printing Feature'
    identifier: '1GBdtPDh7IhPpfruWnKD_qi1WRONcy9p6XhabXBWXl10'
    parent: '1NHBPyY_YvI92JSil-rc3O0Kpu5qYLkdKWZTNjlzQpNY'
    weight: 780
---
{{% system-name %}} offers a label generating feature that generates labels with predefined chart information. The data and information printed on the labels is provided as part of the system standard; however, label layouts can be customized for clients, as needed.  
{{% note %}}

Dymo Web Service is required for printing labels out of {{% system-name %}} .
{{% /note %}}
Dymo LabelWriter printers are recommended for printing labels from the {{% system-name %}} system. The Dymo LabelWriter models 300, 330, 400, and 450 Turbo have been tested with {{% system-name %}} and integrate with no problems. The Dymo LabelWriters are typically very easy to install at a workstation, consisting of simply plugging the USB port into the computer and installing the necessary drivers. Most Dymo printers will come with a starter roll of labels, and other sizes can be purchased for varying needs.
  
## Printing Labels  

By default, labels print with the following demographic information included:
* Today's Date
* MR#
* Gender
* Chart Name
* Date of Birth
MIE can customize this layout, if necessary.
Printing labels can be done from various places throughout {{% system-name %}} . Depending on the workflow and user role, accessing labels for printing can be accomplished several different ways. Below, information is provided for accessing and printing labels from quick links, the chart header, the scheduler, as well as from an order request.
  
### From Chart Quick Links  

Links for generating labels can be configured and made available on the **Quick Links** portlet of the **Summary** chart tab.
  
![](../label-printing-feature.assets/10000201000004B700000159F0F4F98B5669CD17.png)  

Whenever the **Dymo 450 1.25 x 2.25** link is clicked from the Quick Links portlet of the Summary chart tab, users will print a 1.25 x 2.25 sized label, with the standard demographic information, seen above.
Once the link has been clicked, a preview of the label data will show when the Print screen loads. Clicking the **Print** button will open the *Print Dialog* window, where the specific Dymo printer needs to be selected in order to print.
  
![](../label-printing-feature.assets/1000020100000422000001C775CC8965D2574A00.png)  

{{% tip %}}

Ensure the selected printer matches the Dymo installed for use. Also, to verify the label size being printed for the first time, click the **Preferences** button after selecting the appropriate Dymo LabelWriter printer. Then go into **Advanced**, and review the Paper/Dymo Label Size.
{{% /tip %}}
Another available link from the Quick Links portlet is the **Select Label** link. Clicking this will open a pop-up window, where the user can choose a different Dymo label size for printing. When an alternative size is selected, the label data preview will load, and clicking the **Print** button will open the Print Dialog box, as before.
  
![](../label-printing-feature.assets/10000201000004AE000002068A7151A9A45AA31D.png)  

  
### From Print Chart  

Labels can also be generated using the Print Chart functionality, which allows for printing established Print Definitions. Printing labels using the **Print Chart** link is not configured in {{% system-name %}} by default.
  
![](../label-printing-feature.assets/10000201000004B70000016741D7627F5E9858B2.png)  

In order to provide this functionality, MIE will need to create a custom layout, including all of the necessary data for the label. Then, the Print Definition can be established and programmed with a section mapped to the custom layout. Once the Print Definition is configured, users can print labels using the Print Chart link.
  
![](../label-printing-feature.assets/10000201000003FE000000DC358F32D9689B3592.png)  

  
### From Scheduler View  

A system setting ("Scheduler", "Settings", "Print Labels") is enabled, by default, so that users may generate and print labels for all scheduled appointments shown for the day in context. If the system setting is disabled, users will not see the **Print Labels** link in the upper-right corner of any of the Scheduler views.
  
![](../label-printing-feature.assets/10000201000004BE000001FCBD18F02E427CB7EF.png)  

Labels printed from the Scheduler contain the following demographic information, by default:
* Appointment Date
* Appointment Time
* MR#
* Gender
* Chart Name.
MIE can customize this layout, if necessary.
When the **Print Labels** link is clicked from a scheduler view, a preview of the data will load, with a Print button toward the top-middle of the page. Click the **Print** button to open the Print Dialog window and print one label for every scheduled patient appointment listed for the day. Otherwise, if the labels are no longer needed, instead of clicking the Print button, simply click the X in the upper-right corner to exit the screen.
  
![](../label-printing-feature.assets/100002010000022700000059961FD1686FF07CAB.png)  

  
### From Order Requests  

Though not available in the standard product by default, a label can be custom programmed to print chart information onto a label that can then be used for the order being sent out. For instance, when sending a vial with an order, a label with the relevant data can be printed and affixed to the vial, prior to sending.
The *Order Label* layout must be established within {{% system-name %}} , with configuration done by MIE. Once the layout exists, the **Label** link will usually display in the Orders module. To view the Label link and print any custom configured labels, ensure the appropriate system setting ("Orders", "Defaults", "Auto Print on Summary") is enabled.
To print a label associated with an Order Request, click the **Label** link after successfully creating the Order Request.
  
![](../label-printing-feature.assets/10000201000004A90000010CA1579027354474A7.png)  

Once the page loads, click the **Print** button. Verify the correct printer is selected, and click Print.
  
![](../label-printing-feature.assets/1000020100000278000001D1411B6B626433701C.png)  

Labels for Order Requests can also be generated and printed from the **Order Requests** chart tab. This is where all Order Requests for the chart are listed according to category. In the *Options* column of the grid, a **Print Label** link is provided. Users may print labels for Order Requests, as needed.
  
![](../label-printing-feature.assets/10000201000004A300000169D9508A3F07D62EFA.png)  

  
#### From Encounter View  

Orders are often created when working in an encounter. Because of this, {{% system-name %}} has made it so users may generate and print labels from the encounter view, whenever encounter-generated order requests are created.
At the end of the encounter view, a section is available for listing all encounter Order Requests: *This encounter has order requests*. There is a **Label** link in the *Options* column, which can be used for generating and printing a label for each Order Request.
  
![](../label-printing-feature.assets/100002010000035600000066A4D38F3C2DABB6CE.png)  

For more information, please review the [Order Requests Chart Tab](gdoc:1vh7UsgREWhLDIYSS0IXhc9Z_2Rnzi1uplvp6c8ywc7o) documentation.
