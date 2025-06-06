---
id: '1KDZp2b01JsGpUGfYwEoTrPT63oABCBFDOXXoGIsxVeM'
title: 'SpeechMike Dictation Instructions'
date: '2020-03-25T21:00:24.947Z'
version: 65
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1KDZp2b01JsGpUGfYwEoTrPT63oABCBFDOXXoGIsxVeM'
wikigdrive: '9b54d57b334ab6e65183ff1f8d720a685ad59e87'
---
## Using the Phone to Call in Dictation

1. Call phone number: (get your specific phone number for your company)
2. Enter User number (PIN number) and then hit the pound key ( # ).
3. You can skip the pre-recorded greeting by just pressing a choice.
4. To submit dictation, press 1
5. Enter Job Type and then hit the pound key ( # ). (Applicable to clients with Job Type set up with {{% system-name %}} .)
6. Begin dictating by stating patient name, DOS, location and MR# and then continue with dictation.
7. Press pound ( # ) to end dictation session, when done.
8. Press 1 to listen/add record
9. Press 2 to set a priority (if your company has priorities set up in {{% system-name %}} .)
10. Press pound (#) again to accept.
11. Either hang up, or begin another dictation by pressing # (from phone voice prompt).

### Phone Dictation Keypad Options

**2 – Continue Recording (if it is paused)**

**3 – Rewind 5 seconds**

**4 – Pause**

**5 – Go to next dictation (upload, and start a new one)**

**6 – Fast Forward to the end of the dictation**

**7 – Fast forward 5 seconds**

**8 – Rewind to the beginning of the dictation**

**9 – Start a new dictation**

**0 – Erase all the dictation and start over**

**(1 – not an option/does not work)**

**# - End dictation and get a menu to upload and set priority**

*** - In listen mode; will play next dictation for found patient. All other keys will start a new search90 for dictation.**

## Using the SpeechMike to Dictate

The below information is specific to **Model LFH5276** SpeechMike Pro hardware. Using the handheld SpeechMikes to dictate directly into the system. This tags dictation to the specific patient.

**There is a MY SETTINGS preference a user can set for the Control Device:** *You can choose which control device you use for the MIEplayer. This goes along with version 2.24 of the MIEplayer. The player supports generic HID devices that may conflict with the SpeechMike so we now need to specify which control device to use. This chooses which device your MIEplayer uses. If there is more than one control device hooked up to a computer, this tells it to use a certain one. Example: There may be a physician who likes to use a foot pedal but shares the computer with other physicians that uses the SpeechMike. The Configure in Player selection for this setting will use the setting that is stored on the computer and accessed in the player's config window. If a specific control device is selected (SpeechMike, USB Pedal, etc) then this preference setting will override what the player has configured.*

*There are also two user preferences in dictation named: Use SpeechMike for record and Use SpeechMike for playback. These can be se*t *to tell the dictation control to use the SpeechMike for playback and/or recording. This overrides the setting in the dictation control unless ‘configure in player' is what the preference is set to. If ‘configure in player' is set here, then the settings in the config of the MIEPlayer is what it will respect. These two new user preferences allow for multiple users to share a computer and have different settings.*

### Dictate from Chart

You must have security permission *Add Dictation* set to yes to be able to use Add Dictation links in  {{% system-name %}} and in encounter exams, var-tree's, etc.

Log into  {{% system-name %}} and search for the patient in *E-Chart* left sidebar tab.

Click on the patient's name to open their chart.

Click on the link named *Add Dictation* towards the top of any chart screen for that specific patient.

{{% note %}}
If your  {{% system-name %}}  system has the system setting *E-Chart*, *Dictation*, *Show Add Dictation Link* disabled then the add dictation link on this E-Chart page & patient demographics header is removed.
{{% /note %}}

{{% system-name %}}  automatically searches for tasks that the patient has requesting a dictation. If there are any, it will show those but will allow you to add a separate dictation. This is a double check incase you are adding dictation for the patient regarding something and there is already a task out there requesting the specific dictation.

![](../speechmike-dictation-instructions.assets/f85fde8a6a695a00cb2199adb4f8d660.png)

A dictation box called **MIE Player** will pop-up on your screen. You can have it appear at any corner of your screen through the MY SETTINGS preference. It will have the patient's name in it and options to select Location, Priority and Job Type if your system is set up for those options.

![](../speechmike-dictation-instructions.assets/60e524b0c5e8336d441ad1930e2ba787.png)

Select LOCATION by using the drop-down arrow. Location would be where this patient had the appointment. Select PRIORITY by using the drop-down arrow. (if your company has priorities set up)

0=low

1=normal

2=above normal

3=urgent

Select JOB TYPE by using the drop-down arrow. (if your company has job types set up) The drop-down arrow will describe your choices. It will also remember the last job type you selected.

Push the RECORD button on the LFH5276 SpeechMike Pro. Or you can click the middle red circle button in the MIEPlayer box to start recording mode.

![](../speechmike-dictation-instructions.assets/56458556fea3a98aa16341c071b481f0.png)

The MIEPlayer will show in a red bar that it is recording.

Begin dictating by stating DOS, location, and other company required information into the SpeechMike and continue with dictation.

*There is a user preference in MY SETTINGS to set a single click record or a hold record. A single click to record allows you to click the RECORD button and then you click again to stop/pause. You do not need to hold the RECORD button down the entire time you are dictating. The other option is the hold to record. This setting means you have to hold down the record button the entire time of dictation and when released, it will stop/pause. Please set your preference in the  {{% system-name %}} MY SETTTINGS.*

To edit a dictation (example: start at a certain point to redictate):

Click the very first button ? in the MIE Player (or the **??** button on the SpeechMike) to rewind the dictation all the way to the beginning. Click the play button to listen and click stop button at any point on MIE Player or SpeechMike. When you find the point you wish to redictate, click the record button and it will ask you to confirm by clicking record button again. *This will erase and record any dictation from this point on.*

Click EOL (End of Letter) button on the LFH5276 SpeechMike to **upload the dictation when complete.** You must press it 2 times because it asks for confirmation. You will see it upload on the screen. *(*Or click picture of the floppy disk icon on MIE Player with your computer mouse or SpeechMike mouse to **upload completed dictation.**

If you do **not** press the EOL button on the SpeechMike to upload (or don't click the floppy disk icon to upload) and you X out of the MIEPlayer, it does not save any dictation.

**SpeechMike LFH5276 Pro Buttons:**

![](../speechmike-dictation-instructions.assets/5eff402ac55a6cc081094a7594f4df49.png)

FI, F2, F3, F4 buttons on the LFH5276 SpeechMike Pro can be programmed by MIE to perform certain shortcut functions. Example: F4 could be programmed to Sign and Close, F2 & F3 could be programmed to function as forward and backspace arrows on the current toolbar, etc. Example:

* Upper left - "Sign as Preliminary"
* Upper right - "Sign and Close"
* Left/Right Arrows - same as forward and backspace arrows on the current toolbar.

Trigger on the backside of the SpeechMike – "enter button.

The trigger button underneath the SpeechMike Pro can be programmed to be an "enter" button.

![](../speechmike-dictation-instructions.assets/c2ae6d87d281ce6dabea0e8c1bc24f7c.png)

After you have uploaded your dictation, the MIEPlayer will close out automatically.

You can now do another dictation by following the above steps again, or search for another patient in the E-Chart left sidebar menu and do a dictation for another patient that you search for.

### Dictate From Scheduler

If your site uses the *Scheduler* module in {{% system-name %}} , you can also dictate from that screen into the patient's account using the SpeechMike. There are multiple ways to dictate into a patient's appointment. Below are ways to dictate into a patient's specific appointment date.

### Dictate from Scheduler Left Sidebar Tab

Click *Scheduler* left sidebar tab and find patient's appointment, or click *Appointments* top tab from a patient's E-Chart and select the appointment you want to view.

When in the Scheduler, click the **Add Dictation** link from the patient's appointment. (If you do not see the *add dictation* link, please change that MY SETTINGS preference to show add dictation link to Yes.)

Follow the previous steps in ‘Dictate from Patient's E-Chart'.

{{% system-name %}}  automatically searches for tasks that the patient has requesting a dictation. If there are any, it will show those but will allow you to add a separate dictation. This is a double check incase you are adding dictation for the patient regarding something and there is already a task out there requesting the specific dictation.

![](../speechmike-dictation-instructions.assets/50de58dcfaed606da9ff6c5bde9faf3b.png)

When done dictating for a patient from the Scheduler view and after you upload it, it will automatically insert the Dictation ID number next to the **Add Dictation** link. The Scheduler screen will stay appearing and you can continue to another patient if wish.

![](../speechmike-dictation-instructions.assets/8fef52f89184dad80a73dfd573b5e0b8.png)

### Dictate from Scheduler Using Dictate Day Option

Click the *Scheduler* left sidebar tab.

Find the specific day and correct resource (physician, etc) you wish to dictate on.

Click the **Dictate Day** link found towards the top of the Scheduler screen. The MY SETTINGS preference to ‘dictate day' must be set to Yes for this link to appear on your view.

![](../speechmike-dictation-instructions.assets/8cb1e02c70d075da2c49ed86428a603c.png)

Dictate day will allow you to dictate all patients in this day's schedule. It automatically skips any patient that already has dictation tied to their specific appointment date.

Click **Dictate Day** to go through all **un-dictated** patients and add dictation in schedule order. It will automatically pop-up the MIEPlayer with the first patient name in the scheduler view. Dictate then **upload** the dictation for that patient. After you upload, the next patient on the schedule will pop-up in the MIEPlayer to dictate for. If you do not want to dictate for a specific patient that pops-up in MIEPlayer, then close the window by X out the MIEPlayer box. It will then skip that particular patient and pop-up the next patient in the schedule order.

When you skip a patient, it considers it still as **un-dictated**. When you refresh and go back into the scheduler and click *Dictate Day*again, it will start with the first **un-dictated** patient and any others that are un-dictated in that schedule order. Meaning, it will pop-up any that you had previously skipped if applicable.

### Dictate from Dictation Left Sidebar Tab (with SpeechMike)

**The dictation will *not* be tied to a patient's E-Chart**

You can add a dictation without being in a specific patient's account. This dictation would show up for transcriptionist to do, but it would not be tied to a patient's account or patient's name. You would have to dictate verbally the patient, account # and any other information for the transcriptionist to complete and upload into a patient's chart. You can however manually search and tag the patient's name and/or birthdate to the dictation by using the auto-complete fields in MIE Player when it opens.

![](../speechmike-dictation-instructions.assets/b1716c73986c50a41a7ca12c1d8bbfa1.png)

The dictation box called MIE Player will pop-up on the on the screen. It will not have a patient's name in it, so it will not attach the dictation to any patient's chart. However, it does provide a Patient field if you wish to search for the patient to attach this dictation to.

![](../speechmike-dictation-instructions.assets/a74e062396f2acbf35edbdc5620f7990.png)

**D.O.B**. – can type the date of birth entry when a patient is not given. You would still dictate/voice the patient's name if applicable.

Select **PRIORITY** by using the drop-down arrow.

(if your company has priorities set up)

0=low, 1=normal, 2=above normal, 3=urgent

Select **JOB TYPE** by using the drop-down arrow.

(if your company has job types set up) The drop-down arrow will describe your choices. (It will remember the last job type you selected.)

Hold down the record button on the SpeechMike or in the MIEPlayer box can click the middle circle button.

{{% info %}}
The MIEPlayer will show in a red bar that it is recording.
{{% /info %}}

Begin dictating by stating patient's name, DOS, location, and other company required information. Then continue with dictation.

Release record button on SpeechMike to pause or stop (or in the MIEPlayer box click the square box button next to the record/circle button)

Click grey CMD button on SpeechMike to **upload the dictation when complete.** You must press it 2 times because it asks for confirmation. You will see it upload on the screen. *(*Or click picture of the floppy disk icon on MIE Player with your computer mouse to **upload completed dictation.**

If you do **not** press the CMD button on the SpeechMike to upload (or don't click the floppy disk icon to upload) and you X out of the MIEPlayer, it does not save anything.

After uploading, it then says *File uploaded successfully. (Record to begin another dictation)*. You can record another dictation that will not be tied to a specific patient, or you can click top right X out to exit out of the program. Each time you record and click the floppy disk icon to **upload** (or CMD button on SpeechMike) then it makes it a separate dictation entry, even though you are still in the same MIEPlayer.

## MIE Player

**Figure 1: MIE Player Buttons:**

![](../speechmike-dictation-instructions.assets/2ea7ae3d57163658fd85470b41d20d93.png)

![](../speechmike-dictation-instructions.assets/0b0cf699930daeda2450e9eace504143.png)
 = rewind dictation all the way to the very beginning/start

![](../speechmike-dictation-instructions.assets/591d14683864b1c5ade0d461a6917ff1.png)
 = rewind dictation back in 1 minute increments

![](../speechmike-dictation-instructions.assets/5c06da4149e1a9a32e79f29ad3c45771.png)
 = play

![](../speechmike-dictation-instructions.assets/d98af93ccd9e8bf5c73a78a3e5ec302d.png)
 = record

![](../speechmike-dictation-instructions.assets/23160bd1d653af571e53f53f742e4b30.png)
 = stop

![](../speechmike-dictation-instructions.assets/0375d7ea9f25785f5cf6f70d5529df23.png)
 = fast forward dictation in 1 minute increments

![](../speechmike-dictation-instructions.assets/14916bee3336460f98da9882a691cad4.png)
 = fast forward dictation to the very end

![](../speechmike-dictation-instructions.assets/eab8648c46d036c8cc1edc6d489b755b.png)
 = upload dictation into  {{% system-name %}} system

You cannot edit dictation done and uploaded. You would dictate a separate note/file stating the correction, etc. You could create a separate work type for "correction" and task upon "dictation add" for that worktype, etc.
