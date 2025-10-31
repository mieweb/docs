---
id: '1lySyySgRXl4N6r39BGipnDhJL3ad8P3dZUDrm1nUYRM'
title: 'Vitals System Wide Defaults'
date: '2025-10-31T14:10:13.034Z'
version: 56
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1lySyySgRXl4N6r39BGipnDhJL3ad8P3dZUDrm1nUYRM'
wikigdrive: '9a3c47814c851f1e3ce25659ea66b7640ddaf209'
markup: 'pandoc'
---
When keying in vitals within the Vitals encounter section, or within the stand alone Vital Signs chart tab, certain fields are configured to automatically default, but can be changed manually by the user when documenting vitals data.

### Default Vitals Fields

The following 5 fields in the vitals section will default to a selection after keying in data for the vital:

* <strong>BP Site:</strong> defaults to Left Arm system wide if a Blood Pressure is keyed in
* <strong>BP Position:</strong> defaults to Sitting system wide if a Blood Pressure is keyed in
* <strong>Pulse Regularity:</strong> defaults to Regular system wide if a Pulse is keyed in
* <strong>Pulse Site:</strong> defaults to Radial system wide if a Pulse is keyed in
* <strong>Exertion:</strong> defaults to Resting system wide if a Pulse is keyed in

Users can always manually change the selection within the field's drop-down when needed.

![](../vitals-system-wide-defaults.assets/bf5a7e874d5139989104c5d864901319.png)

### Changing System Wide Vital Field Defaults

The default(s) for those 5 fields in the vitals section can be configured to default to a different discrete selection system wide. Defaults can be configured within the Observation Codes editor of the Control Panel.

NOTE: Configuring a different default will also change it system wide.

![](../vitals-system-wide-defaults.assets/d6722828d9c5198ad1c5ab9319d70fa2.png)

#### BP Site (obs name BP Site)

From within the Observation Codes editor, search and find **BP Site** observation. Then click on Edit.

![](../vitals-system-wide-defaults.assets/2056a06b1e233c70dbca80a8a8c5d0de.png)

1. Once in the Edit Observation Code screen for <strong>BP Site</strong>, first enter in the following 4 custom discrete values and sort order.
2. Next, go up to its Target field to key in the matching custom discrete value you want the new system wide default to be and make sure Target is selected next to it in the drop-down.
3. Save your work.

![](../vitals-system-wide-defaults.assets/d3e2ff6fc7bb081e4114d7e0268566d5.png)

#### BP Position (obs name Position)

From within the Observation Codes editor, search and find **Position** observation. Then click on Edit.

1. Once in the Edit Observation Code screen for <strong>Position</strong>, first enter in the following 3 custom discrete values and sort order.
2. Next, go up to its Target field to key in the matching custom discrete value you want the new system wide default to be and make sure Target is selected next to it in the drop-down.
3. Save your work.

![](../vitals-system-wide-defaults.assets/6775b30e33891562fb2a639a23fd5b78.png)

#### Pulse Regularity (obs name Pulse Regularity)

From within the Observation Codes editor, search and find **Pulse Regularity** observation. Then click on Edit.

1. Once in the Edit Observation Code screen for <strong>Pulse Regularity</strong>, first enter in the following 2 custom discrete values and sort order.
2. Next, go up to its Target field to key in the matching custom discrete value you want the new system wide default to be and make sure Target is selected next to it in the drop-down.
3. Save your work.

![](../vitals-system-wide-defaults.assets/7d5d1711d21af10a066839a1099af7e5.png)

#### Pulse Site (obs name Pulse Site)

From within the Observation Codes editor, search and find **Pulse Site** observation. Then click on Edit.

1. Once in the Edit Observation Code screen for <strong>Pulse Site</strong>, first enter in the following 6 custom discrete values and sort order.
2. Next, go up to its Target field to key in the matching custom discrete value you want the new system wide default to be and make sure Target is selected next to it in the drop-down.
3. Save your work.

![](../vitals-system-wide-defaults.assets/ff4775ea016b72a71df9d983ca988be1.png)

#### Exertion (obs name Exertion)

From within the Observation Codes editor, search and find **Exertion** observation. Then click on Edit.

1. Once in the Edit Observation Code screen for <strong>Exertion</strong>, first enter in the following 6 custom discrete values and sort order.
2. Next, go up to its Target field to key in the matching custom discrete value you want the new system wide default to be and make sure Target is selected next to it in the drop-down.
3. Save your work.

![](../vitals-system-wide-defaults.assets/95e294f57a32e92a27a0f29a1a3a1854.png)

### Remove System Wide Vital Field Defaults

If you would rather have the system not default any of the above Vital fields upon keying in specific vital details, you can configure the observation(s) to not default and thus a user would have to manually set each time or leave it not selected.

From within the Observation Codes editor, search and find the specific observation. Then click on Edit.

1. Once in the Edit Observation Code screen for the specific observation(s) and key in the custom discrete values and sort order from the above instructions, <strong>but</strong> add a selection of a space (keyboard space) as one custom discrete value selection being ordered first.
    a.  Simply hit the spacebar on your keyboard one time to set that as a discrete value and make it be first in sort order.
2. Next, go up to its Target field to key in the matching custom discrete value you want the new system wide default to be and make sure Target is selected next to it in the drop-down.
    a.  Simply hit the spacebar on your keyboard one time to set that as the Target.
3. Save your work.

![](../vitals-system-wide-defaults.assets/97e26b6041d021bf665665178a1c0cee.png)

Then when keying in the appropriate vital, the default will be blank and a user can keep it that way or use the drop-down to select (each time) the value they wish to set it as, without a default being automated.

![](../vitals-system-wide-defaults.assets/f169391401d2471c047c5eadb9920172.png)
