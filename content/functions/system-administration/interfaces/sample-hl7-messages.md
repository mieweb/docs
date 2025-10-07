---
id: '1ppKwQ2U2IjLKavWJZYVE7Rnh3v0ITFCl8BxqI1GJoeg'
title: 'Sample HL7 Messages'
date: '2023-02-21T21:14:54.696Z'
version: 210
lastAuthor: 'zbarrell'
mimeType: 'text/x-markdown'
links:
  - 'sending-hl7-messages-to-system.md'
  - 'hl7-segment-definitions.md'
source: 'https://drive.google.com/open?id=1ppKwQ2U2IjLKavWJZYVE7Rnh3v0ITFCl8BxqI1GJoeg'
wikigdrive: '9a3c47814c851f1e3ce25659ea66b7640ddaf209'
---
# SIU, Scheduling

{{% anchor sys="siu-s12" %}}

## SIU^S12

```
MSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613061611||SIU^S12|24916560|P|2.3||||||
SCH|10345^10345|2196178^2196178|||10345|OFFICE^Office visit|reason for the appointment|OFFICE|60|m|^^60^20110617084500^20110617093000|||||9^DENT^ARTHUR^||||9^DENT^ARTHUR^|||||Scheduled
PID|1||42||BEEBLEBROX^ZAPHOD||19781012|M|||1 Heart of Gold ave^^Fort Wayne^IN^46804||(260)555-1234|||S||999999999|||||||||||||||||||||
PV1|1|O|||||1^Adams^Douglas^A^MD^^^^|2^Colfer^Eoin^D^MD^^^^||||||||||||||||||||||||||||||||||||||||||99158||
RGS|1|A
AIG|1|A|1^Adams, Douglas|D^^
AIL|1|A|OFFICE^^^OFFICE|^Main Office||20110614084500|||45|m^Minutes||Scheduled
AIP|1|A|1^Adams^Douglas^A^MD^^^^|D^Adams, Douglas||20110614084500|||45|m^Minutes||Scheduled
```

{{% anchor sys="siu-s14" %}}

## SIU^S14

```
MSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613072836||SIU^S14|24916579|P|2.3||||||
SCH|10345^10345|2196178^2196178|||10345|OFFICE^Office visit|reason for the appointment|OFFICE|60|m|^^60^20110617084500^20110617093000|||||9^DENT^ARTHUR^||||9^DENT^ARTHUR^|||||Scheduled
PID|1||42||BEEBLEBROX^ZAPHOD||19781012|M|||1 Heart of Gold ave^^Fort Wayne^IN^46804||(260)555-1234|||S||999999999|||||||||||||||||||||
PV1|1|O|||||1^Adams^Douglas^A^MD^^^^|2^Colfer^Eoin^D^MD^^^^||||||||||||||||||||||||||||||||||||||||||99158||
RGS|1|U
AIG|1|U|1^Adams, Douglas|D^^
AIL|1|U|OFFICE^^^OFFICE|^Main Office||20110614084500|||60|m^Minutes||Scheduled
AIP|1|U|1^Adams^Douglas^A^MD^^^^|D^Adams, Douglas||20110614084500|||60|m^Minutes||Scheduled
```

{{% anchor sys="siu-s15" %}}

## SIU^S15

```
MSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613072836||SIU^S15|24916597|P|2.3||||||
SCH|10345^10345|2196178^2196178|||10345|OFFICE^Office visit|reason for the appointment|OFFICE|60|m|^^60^20110617084500^20110617093000|||||9^DENT^ARTHUR^||||9^DENT^ARTHUR^|||||Cancelled
PID|1||42||BEEBLEBROX^ZAPHOD||19781012|M|||1 Heart of Gold ave^^Fort Wayne^IN^46804||(260)555-1234|||S||999999999|||||||||||||||||||||
PV1|1|O|||||1^Adams^Douglas^A^MD^^^^|2^Colfer^Eoin^D^MD^^^^||||||||||||||||||||||||||||||||||||||||||99158||
RGS|1|C
AIG|1|C|1^Adams, Douglas|D^^
AIL|1|C|OFFICE^^^OFFICE|^Main Office||20110614084500|||60|m^Minutes||Cancelled
AIP|1|C|1^Adams^Douglas^A^MD^^^^|D^Adams, Douglas||20110614084500|||60|m^Minutes||Cancelled
```

{{% anchor sys="adt" %}}

# ADT, Patient Registration

{{% anchor sys="adt-a01" %}}

## ADT^A01

Admit a patient.
```
MSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613083617||ADT^A01|934576120110613083617|P|2.3||||
EVN|A01|20110613083617|||
PID|1||135769||MOUSE^MICKEY^||19281118|M|||123 Main St.^^Lake Buena Vista^FL^32830||(407)939-1289^^^theMainMouse@disney.com|||||1719|99999999||||||||||||||||||||
PV1|1|O|||||^^^^^^^^|^^^^^^^^
```

{{% anchor sys="adt-a04" %}}

## ADT^A04

Register a patient.
```
MSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613083617||ADT^A04|934576120110613083617|P|2.3||||
EVN|A04|20110613083617|||
PID|1||135769||MOUSE^MICKEY^||19281118|M|||123 Main St.^^Lake Buena Vista^FL^32830||(407)939-1289^^^theMainMouse@disney.com|||||1719|99999999||||||||||||||||||||
PV1|1|O|||||7^Disney^Walt^^MD^^^^|||||||||||||||||||||||||||||||||||||||||||||
```

{{% anchor sys="adt-a08" %}}

## ADT^A08

Update patient information.
```
MSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613072049||ADT^A08|934579920110613072049|P|2.3||||
EVN|A08|20110613072049|||
PID|1||135769||MOUSE^MICKEY^||19281118|M|||123 Main St.^^Lake Buena Vista^FL^32830||(407)939-1289^^^theMainMouse@disney.com|||||1719|99999999||||||||||||||||||||
PV1|1|O|||||7^Disney^Walt^^MD^^^^|||||||||||||||||||||||||||||||||||||||||||||
GT1|1|78|MOUSE^MARSHALL^||123 Main St.^^Lake Buena Vista^FL^32830|(407)939-1289^^^^^^||19190101|M||||||||||||||||||||||||||||||||||||||||||||||
IN1|1||1|ABC Insurance Medicaid|P O Box 12345^^Atlanta^GA^30348|Claims^Florida |(555)555-1234^^^^^^|G1234|||||||G|Mouse^Mickey|SELF|19281118|123 Main St.^^Lake Buena Vista^FL^32830|Y||||||||||||P||||ZYX1234589-1|||||||M||||M||
IN2||||||ZYX1234589-1||||ZYX1234589-1|||||||||||||||000079||||||||||||||||||||||||||||||||||||||(206)446-5080^^^^^260^4465080|||||||||SELF
```

{{% anchor sys="adt-a40" %}}

## ADT^A40

Merge patient.
```
MSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110613122406637||ADT^A40|1965403220110613122406637|P|2.3||||
EVN|A40|20110613122406637||01
PID|1||1765431||McTavish^Henry^J||19700101|M|||117 W Main St^Fort Wayne^IN^46808||(260)555-1234^^^^^|||M||1117112|999999999||||||||||||||||||||
MRG|1765475||||||
```

{{% anchor sys="oru" %}}

# ORU, Lab Results

{{% anchor sys="oru-r01" %}}

## ORU^R01

### Discrete

#### Numeric

```
MSH|^~\&|SendingApp|SendingFac|ReceivingApp|ReceivingFac|20120411070545||ORU^R01|59689|P|2.3
PID|1|12345|12345^^^MIE&1.2.840.114398.1.100&ISO^MR||MOUSE^MINNIE^S||19240101|F|||123 MOUSEHOLE LN^^FORT WAYNE^IN^46808|||||||||||||||||||
PV1|1|O|||||71^DUCK^DONALD||||||||||||12376|||||||||||||||||||||||||20120410160227||||||
ORC|RE||12376|||||||100^DUCK^DASIY||71^DUCK^DONALD|^^^||20120411070545|||||
OBR|1||12376|cbc^CBC|R||20120410160227|||22^GOOF^GOOFY|||Fasting: No|201204101625||71^DUCK^DONALD||||||201204101630|||F||^^^^^R|||||||||||||||||85025|
OBX|1|NM|wbc^Wbc^Local^6690-2^Wbc^LN||7.0|/nl|3.8-11.0||||F|||20120410160227|lab|12^XYZ LAB|
OBX|2|NM|neutros^Neutros^Local^770-8^Neutros^LN||68|%|40-82||||F|||20120410160227|lab|12^XYZ LAB|
OBX|3|NM|lymphs^Lymphs^Local^736-9^Lymphs^LN||20|%|11-47||||F|||20120410160227|lab|12^XYZ LAB|
OBX|4|NM|monos^Monos^Local^5905-5^Monos^LN||16|%|4-15|H|||F|||20120410160227|lab|12^XYZ LAB|
OBX|5|NM|eo^Eos^Local^713-8^Eos^LN||3|%|0-8||||F|||20120410160227|lab|12^XYZ LAB|
OBX|6|NM|baso^Baso^Local^706-2^Baso^LN||0|%|0-1||||F|||20120410160227|lab|12^XYZ LAB|
OBX|7|NM|ig^Imm Gran^Local^38518-7^Imm Gran^LN||0|%|0-2||||F|||20120410160227|lab|12^XYZ LAB|
OBX|8|NM|rbc^Rbc^Local^789-8^Rbc^LN||4.02|/pl|4.07-4.92|L|||F|||20120410160227|lab|12^XYZ LAB|
OBX|9|NM|hgb^Hgb^Local^718-7^Hgb^LN||13.7|g/dl|12.0-14.1||||F|||20120410160227|lab|12^XYZ LAB|
OBX|10|NM|hct^Hct^Local^4544-3^Hct^LN||40|%|34-43||||F|||20120410160227|lab|12^XYZ LAB|
OBX|11|NM|mcv^Mcv^Local^787-2^Mcv^LN||80|fl|77-98||||F|||20120410160227|lab|12^XYZ LAB|
OBX|12|NM|mch^Mch||30|pg|27-35||||F|||20120410160227|lab|12^XYZ LAB|
OBX|13|NM|mchc^Mchc||32|g/dl|32-35||||F|||20120410160227|lab|12^XYZ LAB|
OBX|14|NM|plt^Platelets||221|/nl|140-400||||F|||20120410160227|lab|12^XYZ LAB|
```

#### Numeric with Notes

```
MSH|^~\&|SendingApp|SendingFac|ReceivingApp|ReceivingFac|20120226102502||ORU^R01|Q161522306T164850327|P|2.3
PID|1||000168674|000168674|GUNN^BEBE||19821201|F||||||||M|||890-12-3456|||N||||||||N
PV1|1|I||EL|||00976^PHYSICIAN^DAVID^G|976^PHYSICIAN^DAVID^G|01055^PHYSICIAN^RUTH^K~02807^PHYSICIAN^ERIC^LEE~07019^GI^ASSOCIATES~01255^PHYSICIAN^ADAM^I~02084^PHYSICIAN^SAYED~01116^PHYSICIAN^NURUDEEN^A~01434^PHYSICIAN^DONNA^K~02991^PHYSICIAN^NICOLE|MED||||7|||00976^PHYSICIAN^DAVID^G||^^^Chart ID^Vis|||||||||||||||||||||||||20120127204900
ORC|RE|||||||||||00976^PHYSICIAN^DAVID^G
OBR|1|88855701^STDOM|88855701|4083023^PT|||20120226095400|||||||20120226101300|Blood|01255||||000002012057000145||20120226102500||LA|F||1^^^20120226040000^^R~^^^^^R|||||||||20120226040000
OBX|1|NM|PT Patient^PT||22.5|second(s)|11.7-14.9|H|||F|||20120226102500||1^SYSTEM^SYSTEM
OBX|2|NM|PT (INR)^INR||1.94||||||F|||20120226102500||1^SYSTEM^SYSTEM
NTE|1||The optimal INR therapeutic range for stable patients on oral anticoagulants is 2.0 - 3.0.  With mechanical heart valves,
NTE|2||the range is 2.5 - 3.5.
NTE|3
NTE|4||Studies published in NEJM show that patients treated long-term with low intensity warfarin therapy for prevention of recurrent
NTE|5||venous thromboembolism (with a target INR of 1.5 - 2.0) had a superior outcome.  These results were seen in patients after a median
NTE|6||6 months of full dose anti-coagulation.
```

### Report

#### Single OBX -- Can also be sent as ORU^R03

```
MSH|^~\&|SendingApp|SendingFac|ReceivingApp|ReceivingFac|20120920230252907||ORU^R01|2012092017490562|T|2.3
PID|||106281^^^1||WOMAN^GENERIC^S^^^^D||19811112|F||W^White^HL70005|1234 MAIN ROAD^^LINDSEY^OH^43442^USA^HOME^^SANDUSKY||5555551234^HOME^^^^555^5551234||EN^English|M|350|123456789^^^001|987654321|||10^NonHispanic^HL70189
PV1||O|60|1|||01931^PHYSICIAN^THOMAS^W.^^DR|||60||||1||N|01487^PHYSICIAN^JONATHAN^F|3|10478417|21|||||||||||||||||||01|||||201209201932|||||||V
ORC|RE|00013598436|R-GEN-378456-2-1||||1^^^201209202036^201209202036^S||201209202038|^INTERFACE^HL7|^INTERFACE^HL7|01931^GALLAGHER^THOMAS^W.^^DR|||||001^Memorial Hospital|482643|||Memorial Hospital^^001
OBR||00013598436|R-GEN-378456-2-1|CST2^CHEST 2 VIEWS|||201209202036|||||||||01931^PHYSICIAN^THOMAS^W.^^DR||888024||||20120920230242||XY|||1^^^201209202036^201209202036^S|WEB^PHYSICIAN^JONATHAN^F^^^^^^^^^ADMIT^WEB&WEBCHART OFFICES|||^fever|39023^PHYSICIAN^PAUL^R^^DR|39023^PHYSICIAN^PAUL^R^^DR
OBX|1|TX|||CHEST 2 VIEWS~~ANKLE 9/20/2012.~~INDICATION: Fever.~TECHNIQUE: 2 views of the chest are obtained.~~COMPARISON: Chest from 3/17/2012.~FINDINGS: The patient is status post sternotomy as before. Lung volumes are low.~There is motion on the lateral exposure. No focal consolidation is identified.~Vasculature is not congested. No gross effusion is noted. Heart is mildly~enlarged.~IMPRESSION:~~Status post sternotomy. Low inspiration.No definite acute process.~~Interpreted By: RYAN, PAUL R.~Date:  09/20/2012 23:02|||||||||20120920203600.0000-0400|Laboratory^Memorial Hospital^123 Road Avenue^Fremont^OH^43420^
```

#### Multiple OBXs -- Can also be sent as ORU^R03

```
MSH|^~\&|SendingApp|SendingFac|ReceivingApp|ReceivingFac|20120309132638||ORU^R01|Q162690178T166106789|P|2.3
PID|1||000734081|000734081|BAR^GRANOLA^||19690226|F||||011||||M|||123-89-4567|||N||||||||N
PV1|1|I||EM|||01255^PHYSICIAN^ADAM^I|1247^PHYSICIAN^LAWRENCE^J|02008^PHYSICIAN^SZILVIA~01116^PHYSICIAN^NURUDEEN^A~00976^PHYSICIAN^DAVID^G|MED||||7|||01255^PHYSICIAN^ADAM^I|||||||||||||||||||||||||||20120306145500
ORC|RE|||||||||||01255
OBR|1|126372120^STDOM|126372120|4050097^Surg Path Final Report|||20120307000000|20120308091200||||||||01255||||00000SP20120002103||20120309132541||AP|F||1~^^^^^R
OBX|1|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||||||||F|||20120309132541
OBX|2|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     Patient Name:  Blah||||||F|||20120309132541
OBX|3|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     Accession No.:  SP-12-0002103||||||F|||20120309132541
OBX|4|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||||||||F|||20120309132541
OBX|5|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||||||||F|||20120309132541
OBX|6|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||||||||F|||20120309132541
OBX|7|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||           A P -   S u r g   P a t h   F i n a l   R e p o r t||||||F|||20120309132541
OBX|8|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||||||||F|||20120309132541
OBX|9|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     Accession Number   Collected          Received    Pathologist||||||F|||20120309132541
OBX|10|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||                        Date/Time          Date/Time||||||F|||20120309132541
OBX|11|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     SP-12-0002103      03/07/2012         03/08/2012     Smith, Randall S||||||F|||20120309132541
OBX|12|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||                        12:00:00 AM CST    9:12:00 AM CST||||||F|||20120309132541
OBX|13|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||||||||F|||20120309132541
OBX|14|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     Diagnosis:||||||F|||20120309132541
OBX|15|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     BRAIN, 4TH VENTRICLE||||||F|||20120309132541
OBX|16|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||||||||F|||20120309132541
OBX|17|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     MILD GLIOSIS||||||F|||20120309132541
OBX|18|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||||||||F|||20120309132541
OBX|19|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     Randall S. Smith, MD||||||F|||20120309132541
OBX|20|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     (Electronically signed by)||||||F|||20120309132541
OBX|21|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     Verified:  03/09/12 1:25 PM||||||F|||20120309132541
OBX|22|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     RSS/PCW||||||F|||20120309132541
OBX|23|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||||||||F|||20120309132541
OBX|24|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     Comment:||||||F|||20120309132541
OBX|25|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     No evidence of granulomatous inflammation as seen in previous biopsies||||||F|||20120309132541
OBX|26|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     (SP03-6655)and no evidence of the psammoma bodies noted in the previous||||||F|||20120309132541
OBX|27|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     biopsy (SP07-11382).||||||F|||20120309132541
OBX|28|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||||||||F|||20120309132541
OBX|29|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     Specimen(s):||||||F|||20120309132541
OBX|30|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     4TH VENTRICULAR CYST||||||F|||20120309132541
OBX|31|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||||||||F|||20120309132541
OBX|32|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     Clinical Information:||||||F|||20120309132541
OBX|33|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     No clinical information submitted||||||F|||20120309132541
OBX|34|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||||||||F|||20120309132541
OBX|35|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     Gross Description:||||||F|||20120309132541
OBX|36|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     The specimen designated as "4th ventricular cyst" is received in formalin||||||F|||20120309132541
OBX|37|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     in a container labeled with the patient's name and medical record number||||||F|||20120309132541
OBX|38|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     and consists of an irregular shaped fragment of light tan tissue which||||||F|||20120309132541
OBX|39|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     measures 0.2 x 0.2 x 0.1 cm.  The specimen is totally submitted in||||||F|||20120309132541
OBX|40|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     cassette 1A.||||||F|||20120309132541
OBX|41|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||||||||F|||20120309132541
OBX|42|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     RSS/VB||||||F|||20120309132541
OBX|43|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||||||||F|||20120309132541
OBX|44|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     Microscopic Description:||||||F|||20120309132541
OBX|45|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     A microscopic exam was performed.||||||F|||20120309132541
OBX|46|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||||||||F|||20120309132541
OBX|47|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     RSS/PCW||||||F|||20120309132541
OBX|48|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||||||||F|||20120309132541
OBX|49|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     Intradepartmental Consultation:||||||F|||20120309132541
OBX|50|TX|4050097^Surg Path Final Report^^4050097^Surg Path Final Report||     T. A. ROSE, MD||||||F|||20120309132541
```

#### Multiple NTEs

```
MSH|^~\&|SendingApp|SendingFac|ReceivingApp|ReceivingFac|20150323144246||ORU^R01|91734|P|2.3
PID|1||6010022||SOFTTEST^HIECLIENT||19650601|F||||||||||60100222016
PV1|1|O|1893^^^ZHIE||||4098^Physician^Sheldon|4098^Physician^Sheldon|||||||||4098^Physician^Sheldon|R||||||||||||||||||||||||||201503201114
ORC|RE|528527425|56083|||||||||4098^Physician^Sheldon^A
OBR|1|528527425|CTG150000145|LAB6460^Gene Bone Marrow||201503201114|201503231500|||||||201503231629||4098^Physician^Sheldon^^^^MD||||||201503231637||CTG|F||1
OBX|1|TX|LAB6460^Gene Bone Marrow||||||||||||RWBH
NTE|1||Physician: SHELDON A PHYSICIAN, MD
NTE|2||  NPI: 1881654887
NTE|3||Location: Oakland Medical Group III
NTE|4||    Loc ID: 1893
NTE|5
NTE|6||Collected: 3/23/2015 3:00 PM Received: 3/23/2015
NTE|7|| 4:29 PM Lab      642000066
NTE|8||
NTE|9||        Order#:
NTE|10
NTE|11||Clinical History: Testing field shows all data
NTE|12|| typed
NTE|13||CTG-15-145
NTE|14||
NTE|15
NTE|16||Specimen Type:               Bone Marrow No. of
NTE|17|| Cells Counted:  20
NTE|18||Modal Chromosome Number:     46          No. of
NTE|19|| Cells Analyzed: 20
NTE|20||No. and/or Type of Cultures: ST
NTE|21|| Hypermodal Cells:      0
NTE|22||Staining Method:             GTL
NTE|23|| Hypomodal Cells:       0
NTE|24||Band Level:                  400-450     No. of
NTE|25|| Karyotypes:     3
NTE|26
NTE|27||KARYOTYPE:      46,XX[20]
NTE|28||
NTE|29
NTE|30||CYTOGENETIC DIAGNOSIS:        Normal Female
NTE|31|| Chromosome Complement
NTE|32
NTE|33||INTERPRETATION: Cytogenetic examination of twenty
NTE|34|| metaphase cells revealed a
NTE|35||normal female diploid karyotype with no
NTE|36|| consistent numerical or structural
NTE|37||chromosome aberrations observed. This chromosome
NTE|38|| study does not eliminate the
NTE|39||possibility of single gene defects, chromosomal
NTE|40|| mosaicism involving abnormal
NTE|41||cell lines of low frequency, small structural
NTE|42|| chromosome abnormalities, or
NTE|43||failure to sample any malignant clones(s) that
NTE|44|| may be present.
NTE|45
NTE|46||Test Person NODOC
NTE|47||
NTE|48||Medical Director, Clinical Cytogenomics
NTE|49|| Laboratory
NTE|50||Board Certified Clinical Cytogeneticist/Clinical
NTE|51|| Molecular Geneticist
NTE|52||3/23/2015 4:37 PM
NTE|53||
NTE|54||All results from conventional karyotyping,
NTE|55|| molecular cytogenetics (FISH), and
NTE|56||chromosome microarray studies, as well as the
NTE|57|| final report, have been reviewed
NTE|58||by a staff cytogeneticist.
NTE|59||
```

{{% anchor sys="oru-r03" %}}

## ORU^R03

### PDF Report

```
MSH|^~\&|SendingApp|SendingFac|ReceivingApp|ReceivingFac|201607060811||ORU^R03|5209141|D|2.3
PID|1|123456|123456||SPARROW^JACK^||19600101|M|||123 BLACK PEARL^^DETROIT^MI^48217||3138363978|||||1036557|123456789
PV1|||^^
ORC|RE||161810162||||00001^ONCE^^^^||201607060811|||00007553^PHYSICIAN^RICHARD^ ^^^|||||||||BIOTECH CLINICAL LAB INC^^23D0709666^^^CLIA|25775 MEADOWBROOK^^NOVI^MI^48375|^^^^^248^9121700|OFFICE^1234 MILE ROAD  SUITE # 2^ROYAL OAK^MI^48073
OBR|8|455648^LA01|1618101622^GROUP951|GROUP951^CHROMOSOMAL ANALYSIS^L|||201606291253|||||||201606291631||00007553^PHYSICIAN^RICHARD^ ^^^||||||201607060811|||F||1^^^^^9
OBX|1|ED|00008510^INTELLIGENT FLOW PROFILE^L||^^^^JVBERi0xLjQKJeLjz9MKCjEgMCBvYmoKPDwvVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFI+PgplbmRvYmoKCjIgMCBvYmoKPDwvVHlwZSAvUGFnZXMKL0tpZHMgWzMgMCBSXQovQ291bnQgMT4+CmVuZG9iagoKMTIgMCBvYmoKPDwvTGVuZ3RoIDEzIDAgUgovRmlsdGVyIC9GbGF0ZURlY29kZT4+CnN0cmVhbQp4nM1c3ZPUOJJ/569QxMRFMLtgrG+buBfoHmZ6BxgW+u5iN3hxV7m7feMqF3Y...T0YK||||||C|||201606291631
NTE|1|L|Reference Lab: GENOPTIX|L
NTE|2|L|2110 ROUTHERFORD RD|L
NTE|3|L|CARLSBAD, CA  92008|L
```

# ORM, Orders

{{% anchor sys="orm-o01" %}}

## ORM^O01

```
MSH|^~\&|SendingApp|SendingFac|ReceivingApp|ReceivingFac|20120411070545||ORM^O01|59689|P|2.3
PID|1|12345|12345^^^MIE&1.2.840.114398.1.100&ISO^MR||MOUSE^MICKEY^S||19281118|M|||123 Main St.^^Lake Buena Vista^FL^3283|||||||||||||||||||
PV1|1||7^Disney^Walt^^MD^^^^|||||||||||||||||||||||||||||||||||||||||||||||^^^^^1.2.840.114398.1.668.11999116110119971081089799101||
IN1|1||1|ABC Insurance Medicaid|P O Box 12345^^Atlanta^GA^30348|Claims^Florida |(555)555-1234^^^^^^|G1234|||||||G|Mouse^Mickey|SELF|19281118|123 Main St.^^Lake Buena Vista^FL^32830|Y||||||||||||P||||ZYX1234589-1|||||||M||||M||
ORC|NW|23|||Pending||^^^^^0||20150325170228|26^David^Dave||8^Selenium^Selenium|^^^^OFFICE^^^^^Office|^^^test@email.com||||||||||
OBR|1|23||123^CREATININE|0|||||||||||8^Selenium^Selenium||||||||||||||||||||||||||||||||||
DG1|1|ICD|B60.0^BABESIOSIS^I10|BABESIOSIS||||||||||||
OBR|2|23||80061^LIPID PROFILE|0|||||||||||8^Selenium^Selenium||||||||||||||||||||||||||||||||||
DG1|1|ICD|B60.0^BABESIOSIS^I10|BABESIOSIS||||||||||||
```

# MDM, Documents

{{% anchor sys="mdm-t02" %}}

## MDM^T02

### Plain text

```
MSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20141003102429||MDM^T02^MDM_T02|89739|P|2.3|||||||||
PID|1||10046||Testpatient^Tester||20030303000000||||||||||||||||||||||||||||||||
TXA|1|TYPE|FT|20141002162958||20141002162958|20141002162958|20141002162958|4119531^Physician^Dr||4119531^Physician^Dr|1111|||||LA|||||4119531^Physician^Dr^^^^^^^^1^^^^20141002162958|
OBX|1|TX|4|1|I am an example free text Document||||||||||||||||||||
```

### PDF Report

```
MSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20120321145031||MDM^T02|000000315|P|2.3
EVN|T02|20120321110832
PID|||4851672||TEST^ELIZABETH||19640924|F||||||||||485436722001
PV1|||8 ST M/O TEAM CARE E^8413/14^8413^6|||||2782^Physician^Samer|||||||||2782^Physician^Samer|||||||||||||||||||||||||||20120316
TXA|1|100015^Nsg Progress Note|AP|20120321110718|2782^Physician^Samer|20120321110718||20120321110718|10003286^PHYSICIAN^BETTY|||415758537|||TRANS||AU
OBX|1|ED|100015^Nsg Progress Note||^PDF^^base64^JVBERi0xLjQNCiXi48/TDQoxIDAgb2JqDQogIDw8DQogICAgL0F1dGhvcigpL1RpdGxlKCkvU3ViamVjdCgpL1Byb2R1Y2VyKCkvS2V5d29yZHMoKS9DcmVhdGlvbkRhdGUoMDMvMjEvMTIgMTE6MTU6NTYpL01vZERhdGUoKS9Dcm...T0YNCg==||||||F
```

# DFT, Financials

{{% anchor sys="dft-p03" %}}

## DFT^P03

```
MSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|201504201347|12|DFT^P03|24885|P|2.5
EVN||20150420134725||
PID|1|12345|12345^^^MIE&1.2.840.114398.1.100&ISO^MR||MOUSE^MICKEY^S||19281118|M|||123 Main St.^^Lake Buena Vista^FL^3283|||||||||||||||||||
FT1|1|1133||20150325000000||CG|99244|Consultation-Level 4||1|0.000000|||||^^^^OFFICE^^^^Office||BILLING|B69^Cysticercosis^I10~B60.0^Babesiosis^I10|123^Physician^Dr|||1133|1^Adams^Douglas|99244|
PR1|1|CPT|99244|Consultation-Level 4|20150325000000|||||||123^Physician^Dr|B69^Cysticercosis^I10~B60.0^Babesiosis^I10|
FT1|2|1133||20150325000000||CG|71020|Chest Xray, PA and Lateral||1|0.000000|||||^^^^OFFICE^^^^Office||BILLING|B69^Cysticercosis^I10~B60.0^Babesiosis^I10|123^Physician^Dr|||1133|1^Adams^Douglas|71020|
PR1|2|CPT|71020|Chest Xray, PA and Lateral|20150325000000|||||||123^Physician^Dr|||B69^Cysticercosis^I10~B60.0^Babesiosis^I10|
DG1|1|ICD10|B69^Cysticercosis^I10|Cysticercosis|20150325000000|F|||||||||0|123^Physician^Dr
DG1|2|ICD10|B60.0^Babesiosis^I10|Babesiosis|20150325000000|F|||||||||0|123^Physician^Dr
MSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|201305171259|12|DFT^P03|24885|P|2.5
EVN||201305171259||
PID|1|12345|12345^^^MIE&1.2.840.114398.1.100&ISO^MR||MOUSE^MICKEY^S||19281118|M|||123 Main St.^^Lake Buena Vista^FL^3283|||||||||||||||||||
FT1|1|1133||20150325000000||CG|99244|Consultation-Level 4||1|0.000000|||||^^^^OFFICE^^^^Office||BILLING|123.1^Cysticercosis^I9~088.82^Babesiosis^I9|123^Physician^Dr|||1133|1^Adams^Douglas|99244|
PR1|1|CPT|99244|Consultation-Level 4|20150325000000|||||||123^Physician^Dr|||123.1^Cysticercosis^I9~088.82^Babesiosis^I9|
FT1|2|1133||20150325000000||CG|71020|Chest Xray, PA and Lateral||1|0.000000|||||^^^^OFFICE^^^^Office||BILLING|123.1^Cysticercosis^I9~088.82^Babesiosis^I9|123^Physician^Dr|||1133|1^Adams^Douglas|71020|
PR1|2|CPT|71020|Chest Xray, PA and Lateral|20150325000000|||||||123^Physician^Dr|||123.1^Cysticercosis^I9~088.82^Babesiosis^I9|
DG1|1|ICD9|123.1^Cysticercosis^I9|Cysticercosis|20150325000000|F|||||||||0|123^Physician^Dr
DG1|2|ICD9|088.82^Babesiosis^I9|Babesiosis|20150325000000|F|||||||||0|123^Physician^Dr
```

{{% anchor sys="ack" %}}

# VXU, Immunizations

VXU^V04

```
MSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|201305171259|12|VXU^V04|2244455|P|2.3||||||
PID|1||123456||DUCK^DAISY^L||19690912|F|||123 NORTHWOOD ST APT 9^^NEW CITY^NC^27262-9944|||||||||||||||||||
ORC|OK|664443333^EEE|33994499||||^^^20220301||20220301101531|DAVE^DAVID^DAVE^D||444999^DAVID JR^JAMES^DAVID^^^^^LAB&PROVID&ISO^L^^^PROVID^FACILITY_CODE&1.2.888.444999.1.13.308.2.7.2.696969&ISO|1021209999^^^10299^^^^^WD999 09 LABORATORY NAME|^^^^^333^8022999||||CCC528Y73^CCC-528Y73||||||
RXA|0|999|20220301|20220301|217^PFIZER 12 YEARS \T\ UP SARS-COV-2 VACCINE^LIM_CVX|0.3|ML||00^New immunization record^NIP001|459920^DUCK^DAISY^L^^^^^LAB&PROVID&ISO^L^^^PROVID^FACILITY_CODE&1.2.888.444999.1.13.308.2.7.2.696969&ISO|1021209999^^^10299^^^^^WD999 09 LABORATORY NAME||||FK9999|20220531|PPR|||CP|A|20220301101531
RXR|IM^Intramuscular^HL70162|LD^Left Deltoid^HL70163|||
```

# ACK, Acknowledgement

A response ACK message is sent after a message is processed.

## Success

```
MSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110614075841||ACK|1407511|P|2.3||||||
MSA|AA|1407511|Success||
```

## Error

```
MSH|^~\&|SENDING_APPLICATION|SENDING_FACILITY|RECEIVING_APPLICATION|RECEIVING_FACILITY|20110614075841||ACK|1407511|P|2.3||||||
MSA|AE|1407511|Error processing record!||
```

# Related Pages

[Sending HL7 Messages to System](sending-hl7-messages-to-system.md)

[HL7 Segment Definitions](hl7-segment-definitions.md)
