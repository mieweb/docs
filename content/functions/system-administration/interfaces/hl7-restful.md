---
id: '1cTfexHAjqrATjQBWLjf1QyHgX8r0DXDHCuEjVuazhAg'
title: 'HL7 - RESTful'
date: '2024-12-02T18:29:54.487Z'
version: 98
lastAuthor: 'djiamjirarat'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1cTfexHAjqrATjQBWLjf1QyHgX8r0DXDHCuEjVuazhAg'
wikigdrive: '14369108b4618bce79d4c23f4d172a439fb63721'
---
## CGI Vars Explained

<table>
<tr>
<td><strong>Attribute</strong></td>
<td><strong>Description</strong></td>
<td><strong>Value Type</strong> (O=Optional, R=Required, Rv=Required to be the value listed)</td>
<td><strong>Sample or Required Values</strong></td>
</tr>
<tr>
<td>f</td>
<td>Tells system you are requesting to do an HL7 upload.</td>
<td>Rv</td>
<td>wchl7</td>
</tr>
<tr>
<td>interface</td>
<td>Tells system the name of the configuration to use.</td>
<td>R</td>
<td>lab_abc</td>
</tr>
<tr>
<td>message</td>
<td>The actual HL7 to upload</td>
<td>R</td>
<td><pre>MSH|^~\&|SendingApp|SendingFac|ReceivingApp|ReceivingFac|20120411070545||ORU^R01|59689|P|2.3<br />
PID|1|12345|12345^^^MIE&1.2.840.114398.1.100&ISO^MR||MOUSE^MINNIE^S||19240101|F|||123 MOUSEHOLE LN^^FORT WAYNE^IN^46808|||||||||||||||||||<br />
PV1|1|O|||||71^DUCK^DONALD||||||||||||12376|||||||||||||||||||||||||20120410160227||||||<br />
ORC|RE||12376|||||||100^DUCK^DASIY||71^DUCK^DONALD|^^^||20120411070545|||||<br />
OBR|1||12376|cbc^CBC|R||20120410160227|||22^GOOF^GOOFY|||Fasting: No|201204101625||71^DUCK^DONALD||||||201204101630|||F||^^^^^R|||||||||||||||||85025|<br />
OBX|1|NM|wbc^Wbc^Local^6690-2^Wbc^LN||7.0|/nl|3.8-11.0||||F|||20120410160227|lab|12^XYZ LAB|<br />
OBX|2|NM|neutros^Neutros^Local^770-8^Neutros^LN||68|%|40-82||||F|||20120410160227|lab|12^XYZ LAB|<br />
OBX|3|NM|lymphs^Lymphs^Local^736-9^Lymphs^LN||20|%|11-47||||F|||20120410160227|lab|12^XYZ LAB|<br />
OBX|4|NM|monos^Monos^Local^5905-5^Monos^LN||16|%|4-15|H|||F|||20120410160227|lab|12^XYZ LAB|<br />
OBX|5|NM|eo^Eos^Local^713-8^Eos^LN||3|%|0-8||||F|||20120410160227|lab|12^XYZ LAB|<br />
OBX|6|NM|baso^Baso^Local^706-2^Baso^LN||0|%|0-1||||F|||20120410160227|lab|12^XYZ LAB|<br />
OBX|7|NM|ig^Imm Gran^Local^38518-7^Imm Gran^LN||0|%|0-2||||F|||20120410160227|lab|12^XYZ LAB|<br />
OBX|8|NM|rbc^Rbc^Local^789-8^Rbc^LN||4.02|/pl|4.07-4.92|L|||F|||20120410160227|lab|12^XYZ LAB|<br />
OBX|9|NM|hgb^Hgb^Local^718-7^Hgb^LN||13.7|g/dl|12.0-14.1||||F|||20120410160227|lab|12^XYZ LAB|<br />
OBX|10|NM|hct^Hct^Local^4544-3^Hct^LN||40|%|34-43||||F|||20120410160227|lab|12^XYZ LAB|<br />
OBX|11|NM|mcv^Mcv^Local^787-2^Mcv^LN||80|fl|77-98||||F|||20120410160227|lab|12^XYZ LAB|<br />
OBX|12|NM|mch^Mch||30|pg|27-35||||F|||20120410160227|lab|12^XYZ LAB|<br />
OBX|13|NM|mchc^Mchc||32|g/dl|32-35||||F|||20120410160227|lab|12^XYZ LAB|<br />
OBX|14|NM|plt^Platelets||221|/nl|140-400||||F|||20120410160227|lab|12^XYZ LAB|</pre></td>
</tr>
<tr>
<td>login_user</td>
<td>Username assigned to your posting account</td>
<td>R</td>
<td>username1</td>
</tr>
<tr>
<td>login_passwd</td>
<td>Password assigned to your posting account</td>
<td>R</td>
<td>p@ssw0rd</td>
</tr>
</table>

## Sample Webform Post

`  
`<FORM METHOD="POST" ACTION="POSTING-URL"  enctype="multipart/form-data">

Select file to upload: <input type="file" name="message" value="message" size="45" id="file"><BR>

Interface Name:<input size="40" type="text" name="interface" id="interface" value="Assigned Interface Name"><BR>

<input type='hidden' name='f' value='wchl7'>

<input type='hidden' name='login_user' value='username'>

<input type='hidden' name='login_passwd' value='password'>

<input type='submit' value='Submit'>

</FORM>

## Sample Bash Script

```

#!/bin/bash

if [ $# -lt 5 ]; then
	echo Usage: $0 interface message user password url
	exit 1
fi

INTERFACE=$1
MESSAGE=$2
LOGINUSER=$3
LOGINPASS=$4
URL=$5

curl -i \
-F "f=wchl7" \
-F "interface=$INTERFACE" \
-F "login_user=$LOGINUSER" \
-F "login_passwd=$LOGINPASS" \
-F "message=@$MESSAGE" \
"$URL"
```

## Supported Message Types

[Accepted HL7 Message types](#accepted-hl7-message-types)
