---
id: '1xeWrhLQg4nBW5PA6LPd1h7Q8vG1B7pI9xoRJhl2QyKo'
title: 'Signature Pad Device'
date: '2023-03-13T19:56:33.263Z'
version: 88
lastAuthor: 'Angie Nichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1xeWrhLQg4nBW5PA6LPd1h7Q8vG1B7pI9xoRJhl2QyKo'
wikigdrive: '2170bf47fa5a6c78b65673f5062de64818a1f71c'
menu:
  main:
    name: 'Signature Pad Device'
    identifier: '1xeWrhLQg4nBW5PA6LPd1h7Q8vG1B7pI9xoRJhl2QyKo'
    parent: '1J0bDKTGYlGAEqJraL-CUB3x3d976F4lBdUCSRKpIv2Q'
    weight: 5580
---
The  {{% system-name %}} interoperates with Topaz Signature Pad Devices.  In order for the signature pad device to work with the {{% system-name %}} program, the signature pad device must be hooked up to your PC (usually by a USB port) and you had to install the Topaz software for the SigPlus device.  
{{% system-name %}} is signature compatible with a pad device to allow patients to acknowledge a consent or declination (or any other document) by capturing an electronic signature from a pad device. The signature screen displays a brief canned statement and the patient uses the device pen to capture a signature that is uploaded as a specific document type into their chart. This helps eliminate the need for paper printing, pen signature capturing, clipboards, pens, and eliminates the need to scan & index the paper back in as an image into the chart.   
Your Deployment Consultant or Implementer would configure a sidemenu Signature tab that interoperates with a Topaz signature pad device.  The {{% system-name %}} Signature module points to a specific layout where radio button consent or declination choices are programmed, as well as each applicable canned statement. The canned statement verbiage only holds so many characters and after they sign using the Topaz signature device, the canned statement with electronic signature auto-stores as a document in the patient's chart.   
Paper consent forms can still be used and scanned into the patient chart with a patient's hand-signature as well as the on screen touch forms that *{{% system-name %}}* offers.

The example below shows the signature program utilized in an Immunization Consent form. 
  
![](../signature-pad-device.assets/a5c60a8a1634c8473132665402b9f8fe.png)  


The Signature module opens and you enter in the patient's name that needs to sign the acknowledgement. Then the clinician would select the specific radio button consent or declination that is needing to be captured by the patient.  A predefined canned statement, based on which radio button option that was selected, appears both on the signature pad device and on the {{% system-name %}} screen. It is ready for the patient to sign.
Click the START SIGNATURE button on the {{% system-name %}} screen, and that sends the canned statement to the Topaz signature device screen.
  
![](../signature-pad-device.assets/e138e7a64dec9093565350b916aeaa86.png)  


The patient can view the corresponding canned statement on the Topaz device screen and clicks *Tap to Continue*.
  
![](../signature-pad-device.assets/1c140a296726a58014aa22ed39cc2634.png)  


The patient would use the electronic device to pen their signature on the pad using the electronic pen.
  
![](../signature-pad-device.assets/12bc33dfd5c4721e6326cbdfc860d6b6.png)  

When the patient is done signing, they will click the OK button on the device pad.
The signature is captured and considered complete.  If the patient forgot to do this, the clinician can click the *Save Signature* button on the {{% system-name %}} screen to save/upload it.
  
![](../signature-pad-device.assets/3658b26c92ab409305e4afcab63421ea.png)  


What is seen on the clinician side:
  
![](../signature-pad-device.assets/28a780f464f76d223b19356814c00ce0.png)  



Once the patient clicked OK after signing, or the clinician clicked *Save Signature*, the document is stored to the appropriate selected chart.

  
The document is saved using document type ESIG. ![](../signature-pad-device.assets/abe990adfbc706dc1e0dff6ec786952d.png)  


Signature pad devices can also be used in conjunction with the mass immunization record tab. See other help documentation named *Mass Immunization Record Tab.pdf*
