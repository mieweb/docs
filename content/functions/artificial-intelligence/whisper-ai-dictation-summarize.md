---
id: '1XkMRMvXiMq4XzLhqN0yc8DXHbINhT7M7uTqpAKkaoHQ'
title: 'Whisper AI - Dictation - Summarize'
date: '2024-12-27T23:01:09.534Z'
version: 432
lastAuthor: 'horner'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1XkMRMvXiMq4XzLhqN0yc8DXHbINhT7M7uTqpAKkaoHQ'
wikigdrive: '9b54d57b334ab6e65183ff1f8d720a685ad59e87'
---
## Whisper AI

The Dictation module is an out-of-the-box offering that allows recording voice files that can be uploaded and manually transcribed by another user, either directly in an encounter or from the Dictation Module (side menu module). This module does not include Whisper AI/voice to text features. AI must be enabled to utilize voice to text features.

Whisper AI is a feature available when AI has been configured in the database. Whisper AI will transcribe the voice dictation (voice to text), as well as record the voice file for playback.

## Using Whisper AI In Flowsheets

Click the Dictation *"microphone"* icon in a flowsheet. The dictation will automatically begin recording.

![](../whisper-ai-dictation-summarize.assets/56a36f04f09ab2605ceecebcaf60cdcd.png)

The Red Square indicates the dictation is being recorded. Additionally, the dictation timer will begin counting. The user will also see an image of the voice waveform to let the user know their microphone is being picked up by AI. Click the Red Square to stop or pause recording.

![](../whisper-ai-dictation-summarize.assets/fe4cd84c39d5713af8428eee45a46a0d.png)

The Red Square will change to a Red Circle. Clicking the Red Circle will begin recording again. When the recording is stopped, the bolded counter will always reset to 00:00. The time/length of the voice files that have not been uploaded yet will display in the gray font above the playback button.

![](../whisper-ai-dictation-summarize.assets/6a051053c6b04e97463d3db6acf1e297.png)

Select the Red Circle to begin or append to a voice file before uploading.

Select the Play button (Green right arrow icon) to hear the voice recording back.

The timer above the green arrow indicates the time/length of the created recording.

Select the Trash can icon to delete the voice file.

The bolded timer  in the upper left hand corner of the dictation box is the time count for the recording in progress.

Select the Upload button (Green circled up arrow) to upload the voice file.

![](../whisper-ai-dictation-summarize.assets/6a8168e6225ebb1c80e72d88c2fa2c8f.png)

Click the Upload Dictation icon, to upload the dictation. If Whisper AI is enabled, the text will populate in the observation entry field. To hear the audio recording, click the green Play button.

![](../whisper-ai-dictation-summarize.assets/bddb255caba91d29a2803446a1a6d2df.png)

When the audio file is played, the user will see the voice waveform graph and the dictation timer. Users have the option to pause the playback or delete it.

![](../whisper-ai-dictation-summarize.assets/38c7f38a647970625bdfd1af50e320f4.png)

## Manually Editing AI translated dictation

As of 202309 and newer, AI-translated dictation within encounter sections is now editable whether the encounter section is opened or closed. Editing either way is acceptable.

If the encounter section is closed, simply click on the text, the text will display in an editable text box and make changes.

![](../whisper-ai-dictation-summarize.assets/21f3c012297facdd3be2ea79437216c2.png)

If the encounter section is opened, the user can click in the appropriate field and make changes.

![](../whisper-ai-dictation-summarize.assets/1fa9adbb6dfa4a2c283225dc19b4fc38.png)

## Using Whisper AI in Encounter Sections

If providers do not wish to use guided flowsheets, they may also use the dictation voice to text feature on encounter sections.Click the dictation *"microphone"* icon on any encounter section to begin recording.

![](../whisper-ai-dictation-summarize.assets/8e0f6e4664728138a563ff0bfe905e98.png)

The recorder will begin recording. The voice to text functionality works identically to that as described in flowsheets above.

![](../whisper-ai-dictation-summarize.assets/a6c053c1a4aea125573e35c76206fbd9.png)

Upon upload, the voice to text will display at the top of each encounter section. Playback and editing functionality is identical to the flowsheet functionality as described above.

![](../whisper-ai-dictation-summarize.assets/eb39a0669d2dd37a25111aba5c1ba3bd.png)

## Enhanced Voice to Text Tools

Whisper AI assists providers with grammar and sentence structure.

For example the provider dictates: "The dude said he was walking on the loading dock and looking at the tools and trucks and stuff like that and umm thinking about what he needed to pick up at the store and stuff umm on his way home when tripped on a ladder on the floor."

Whisper AI translates this to:

![](../whisper-ai-dictation-summarize.assets/5775d2e34e950aa82f3a87ed7d544ce2.png)

Whisper AI has also  been enhanced to assist providers when dictating. AI utilizes voice to text and will now remove commands such as "new paragraph" and "period" when dictating into an encounter section.

For example, the provider dictates: "I'd like to talk about the plan new paragraph. We're going to order some tests and change some meds period We'll see if we can get some things going exclamation mark"

Whisper AI translates this to:

![](../whisper-ai-dictation-summarize.assets/6474cb8e8839ba18e5ba8044b96ea3f9.png)

## AI Summarize

Providers can utilize Whisper AI in the encounter section and also populate values in a flowsheet by utilizing the Summarize feature. For example, after dictating the HPI, use the summarize button on each observation to pull data from the dictation into the flowsheet. In this instance, the questions in the HPI are used to populate the OSHA 300 log. Rather than dictating again or individually into each section the provider can simply click the summarize icon and AI will populate the fields with context from the encounter dictation to populate the fields.

![](../whisper-ai-dictation-summarize.assets/a7312dde31763cbfeb4d9227371fa8f9.png)

## Configure an observation for "AI Summarize"

As not all observations or flowsheets require the summarize feature, the summarize icon does not display by default. Additional configuration is needed to display the summarize icon. Individual observations must be configured with a calculation statement for the summarize feature to display.

Examples of calculations:

* Summarize the text for a work injury report
* Format for an OSHA report
* Format for the OSHA 300 report

![](../whisper-ai-dictation-summarize.assets/27d2788c0132148c04ec0ba763f4c81b.png)

The Summarize "*magic wand*" icon will display on each observation, regardless of what flowsheet it is associated with. If there isn't a calculation, the Summarize "*magic wand*" icon does not display.

![](../whisper-ai-dictation-summarize.assets/0b9b9fbd01d5ec36b4b024acfb960c0c.png)

## Whisper AI - Tasking

If Whisper AI has been enabled, users can utilize voice to text when adding notes in tasks.

![](../whisper-ai-dictation-summarize.assets/bf50825c7a6db35313258945be7e1ae8.png)
