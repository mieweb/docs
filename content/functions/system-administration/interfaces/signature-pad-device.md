---
id: '1xeWrhLQg4nBW5PA6LPd1h7Q8vG1B7pI9xoRJhl2QyKo'
title: 'Signature Pad Device'
date: '2024-07-08T15:44:33.284Z'
version: 153
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://www.sigpluspro.com/sigplus.html'
  - 'https://www.sigpluspro.com/sigplus-bsb.html'
  - 'https://www.topazsystems.com/sdks/sigweb.html'
  - 'https://docs.webchartnow.com/functions/injection-immunization-management/injection-program-tab-recording-mass-injections/'
  - 'https://mie.talentlms.com/shared/start/key:AQQHRKMF'
source: 'https://drive.google.com/open?id=1xeWrhLQg4nBW5PA6LPd1h7Q8vG1B7pI9xoRJhl2QyKo'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
{{% system-name %}} interoperates with Topaz Signature Pad Devices.  In order for the signature pad device to work with the {{% system-name %}} program, the signature pad device must be hooked up to your PC (usually by a USB port) and installed using the Topaz software, [SigPlus](https://www.sigpluspro.com/sigplus.html) or [SigPlus BSB](https://www.sigpluspro.com/sigplus-bsb.html) and [SigWeb](https://www.topazsystems.com/sdks/sigweb.html).

The signature pad device allows patients to acknowledge a consent or declination (or any other document) by capturing an electronic signature on the pad device. The signature screen displays a brief canned statement and the patient uses the device pen to capture a signature. Once the signature is captured, it is uploaded as a specific document type into their chart. This helps eliminate the need for paper printing, clipboards, pens, and the need to scan & index the paper back into the chart.

Your Deployment Consultant or Implementer will help configure a sidemenu Signature tab that interoperates with a Topaz signature pad device.  The {{% system-name %}} Signature module points to a specific layout where radio button consent or declination choices are programmed, as well as each applicable canned statement. The canned statement verbiage is limited to a specific number of characters, depending on the Topaz device model.  After the signature is captured using the Topaz signature device, the canned statement along with electronic signature auto-stores as a document in the patient's chart.

Paper consent forms can still be used and scanned into the patient chart with a patient's hand-signature, as well as the on screen touch form options.

The example below shows the signature program utilized in an Immunization Consent form.

![](../signature-pad-device.assets/a5c60a8a1634c8473132665402b9f8fe.png)

When the Signature module is opened, the clinician/administrative user may search for the individuals' chart that needs to sign the acknowledgement. Then, select the specific radio button consent or declination for which the electronic signature is needed.  The predefined canned statement, based on which radio button option that was selected, appears on the {{% system-name %}} screen. Click the START SIGNATURE button on the {{% system-name %}} screen, to send the canned statement to the Topaz signature device screen. It is ready for the patient to sign.

![](../signature-pad-device.assets/e138e7a64dec9093565350b916aeaa86.png)

The patient can view the corresponding canned statement on the Topaz device screen and clicks *Tap to Continue*.

![](../signature-pad-device.assets/1c140a296726a58014aa22ed39cc2634.png)

The patient would use the electronic device to pen their signature on the pad using the electronic pen.

![](../signature-pad-device.assets/12bc33dfd5c4721e6326cbdfc860d6b6.png)

When the patient is done signing, they will click the OK button on the device pad.

The signature is captured and considered complete.  If the patient forgot to do this, the clinician or administrative user can click the *Save Signature* button on the {{% system-name %}} screen to save/upload it.

![](../signature-pad-device.assets/3658b26c92ab409305e4afcab63421ea.png)

What is seen on the clinician side:

![](../signature-pad-device.assets/28a780f464f76d223b19356814c00ce0.png)

Once the patient clicked OK after signing, or the clinician clicked *Save Signature*, the document is stored to the appropriate selected chart.

The document is saved using document type ESIG. 
![](../signature-pad-device.assets/abe990adfbc706dc1e0dff6ec786952d.png)

Signature pad devices can also be used in conjunction with the mass immunization record tab. See additional information regarding the [Mass Injection module](https://docs.webchartnow.com/functions/injection-immunization-management/injection-program-tab-recording-mass-injections/).

## Learning Management System

To learn more about Signature Pad Devices, follow the link below to the Learning Management System course:

* [Topaz Signature Pad Device](https://mie.talentlms.com/shared/start/key:AQQHRKMF)
