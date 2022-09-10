---
id: '1SodJybXwsn7Dkvot25Uk3qEGz_vj6wMDpR0cpVXOzco'
title: 'Outbound Sample HL7 Messages'
date: '2022-06-13T19:32:37.257Z'
version: 59
lastAuthor: 'Nick Wallace'
mimeType: 'text/x-markdown'
links:
  - 'receiving-hl7-messages-from-system.md'
  - 'sending-hl7-messages-to-system.md'
  - 'hl7-segment-definitions.md'
source: 'https://drive.google.com/open?id=1SodJybXwsn7Dkvot25Uk3qEGz_vj6wMDpR0cpVXOzco'
wikigdrive: 'b7222904e37143b515987f6e0f083f595990e37a'
---
# SIU, Scheduling

{{% anchor sys="siu-s12" %}}


## SIU^S12


### New Appointment


```
MSH|^~\&|WCDataSend|handle|wc_hl7d|recv_facil|20210423091057||SIU^S12^SIU_S12|DSD1619205057152978|P|2.5|||||||||||||
SCH|2588939|2677255|||||ppd 2nd step|NURS^Nurse Encounter|15|MIN|^^^202104270815^202104270830||||||||||||||BOOKED
PID|1|123456|123456^^^MR&1.2.840.114398.1.5881.2&ISO^MR^1.2.840.114398.1.5881.2&MR&ISO~963258^^^ECW&1.2.840.114398.1.5881.3&ISO^MR^1.2.840.114398.1.5881.3&ECW&ISO~123456789^^^^SS|123456^^^MR&1.2.840.114398.1.5881.1&ISO|Lastname^Firstname^M||19830711000000|F||Asian|123 Main St^^Wailuku^HI^96793^US||5555550101^PRN^PH^test@email.com~5555550202^PRN^CP|5555550303^WPN^PH|EN|M|||123456789|||Not Hispanic or Latino|||||||||||||||||NK1|1||||||||||||||||||||||||||||||||||||||
PV1|1||^^^handle|||||||||||||||||||||||||||||||||||||||||||||||||
RGS|1||
AIL|1||^30^^^^^^^Kihei Clinic|||||||||
AIP|1||12029^Harrington^Cecilia^V^^^MD|RESOURCE|||||||SUBSTITUTE|
```
{{% anchor sys="siu-s14" %}}


## SIU^S14


### Updated Appointment


```
MSH|^~\&|WCDataSend|handle|wc_hl7d|recv_facil|20210429030025||SIU^S14^SIU_S12|DSD1619701225649131|P|2.5|||||||||||||
SCH|2581249||||||botox|COSP^Cosmetic Procedure|30|MIN|^^^202104281600^202104281630||||||||||||||O
NTE|1||04-15 pt r/s 04/21 appt, mc\X0A\4/27lc; lm reminder appt/loc/protocols (PLS CONF APPT TOMORROW AT 1:50PM W/EDIE W.)|
PID|1|456789|456789^^^MR&1.2.840.114398.1.5881.1&ISO^MR^1.2.840.114398.1.5881.1&MR&ISO~146054^^^ECW&1.2.840.114398.1.5881.3&ISO^MR^1.2.840.114398.1.5881.3&ECW&ISO~147852369^^^^SS|456789^^^MR&1.2.840.114398.1.5881.1&ISO|Ltest^Ftest^M||19730716000000|F||White|456 Avenue Pl^^Kula^HI^967908277^US||5555550404^PRN^PH^test1@email.com~5555550505^PRN^CP||EN|M|||147852369|||Not Hispanic or Latino|||||||||||||||||
NK1|1||||||||||||||||||||||||||||||||||||||
PV1|1||^^^handle||||||1336163237^MATHIAS^DEBORAH^^^^^N^NPI|||||||||||||||||||||||||||||||||||||||||||
RGS|1||
AIL|1||^40^^^^^^^Kahului Clinic|||||||||
AIP|1||135^Cook^Ellecia^L.^^^DO|RESOURCE|||||||SUBSTITUTE|
```
{{% anchor sys="siu-s15" %}}


## SIU^S15


### Canceled Appointment


```
MSH|^~\&|WCDataSend|maui|wc_hl7d|recv_facil|20210428235041||SIU^S15^SIU_S12|DSD1619689841639741|P|2.5|||||||||||||
SCH|2588939|2677255||||NOSHOW^NO SHOW|ppd 2nd step|NURS^Nurse Encounter|15|MIN|^^^202104270815^202104270830|||||||||29^Cronjobs|||||CANCELED
PID|1|123456|123456^^^MR&1.2.840.114398.1.5881.2&ISO^MR^1.2.840.114398.1.5881.2&MR&ISO~963258^^^ECW&1.2.840.114398.1.5881.3&ISO^MR^1.2.840.114398.1.5881.3&ECW&ISO~123456789^^^^SS|123456^^^MR&1.2.840.114398.1.5881.1&ISO|Lastname^Firstname^M||19830711000000|F||Asian|123 Main St^^Wailuku^HI^96793^US||5555550101^PRN^PH^test@email.com~5555550202^PRN^CP|5555550303^WPN^PH|EN|M|||123456789|||Not Hispanic or Latino|||||||||||||||||NK1|1||||||||||||||||||||||||||||||||||||||
NK1|1||||||||||||||||||||||||||||||||||||||
PV1|1||^^^maui|||||||||||||||||||||||||||||||||||||||||||||||||
RGS|1||
AIL|1||^30^^^^^^^Kihei Clinic|||||||||
AIP|1||12029^Harrington^Cecilia^V^^^MD|RESOURCE|||||||SUBSTITUTE|
```
{{% anchor sys="adt" %}}


# ADT, Patient Registration


## ADT^A04

Register a patient.

```
MSH|^~\&|WCDataSend|MIE|wc_hl7d|recv_facil|20210701123459||ADT^A04^ADT_A01|DSD1625157299701062|P|2.5|||||||||||||
EVN||20210701123459||
PID|1|1059319|1059319^^^MR&1.2.840.114398.1.90.1&ISO^MR^1.2.840.114398.1.90.1&MR&ISO~000001218^^^^SS||Tester^Cathy||19640423000000|F|||456 East Ave^^Royal Oak^MI^48073^US||5557770791^PRN^PH~5557770791^PRN^CP|||W|||000001218||||||||||||||||||||
PV1|1||^^^MIE||||15104^Barman^Stephen^^^^M.D.|89^LAFFER^MICHAEL|123^Belkin^Alan^^^^DO|||||||||||||||||||||||||||||||||||||||||||
GT1|1||TESTER^CATHY||456 EAST AVE^^ROYAL OAK^MI^48073|5557770791||19640423000000|F||||||||||||||||||||||||||||||||||||||||||||||
IN1|1|5273||HAP SENIOR PLUS|2850 W. GRAND BOULEVARD^^DETROIT^MI^48202|||100000291006|||||||HAP SENIOR PLUS|Tester^Cathy|Self|19640423000000|456 East Ave^^Royal Oak^MI^48073|||||||||||||||||10122060000|||||||F||||||
```
{{% anchor sys="adt-a08" %}}


## ADT^A08

Update patient information.

```
MSH|^~\&|WEBCHART|OMG|RECEIVING_APPLICATION|RECEIVING_FACILITY|20210701123459||ADT^A08^ADT_A01|DSD1625157299704299|P|2.5|||||||||||||
EVN||20210701123459||
PID|1|1025209|1025209^^^MR&1.2.840.114398.1.90.1&ISO^MR^1.2.840.114398.1.90.1&MR&ISO~98765321^^^^SS||Test^Bruce^Jay||19461001000000|M||White|789 Road^^West Bloomfield^MI^48322^US||5551238353^PRN^PH^test@email.com~5551238353^PRN^CP||English|M|||987654321|||Not Hispanic or Latino|||||||||||||||||
PV1|1||^^^OMG||||6^Margolis^Jeffrey^H.^^^MD|269^JACKSON^PAUL^D.|231^PANUSH^DANIEL|||||||||||||||||||||||||||||||||||||||||||
GT1|1||TEST^BRUCE^JAY||789 ROAD^^WEST BLOOMFIELD^MI^48322|5551238353||19461001000000|M||||||||||||||||||||||||||||||||||||||||||||||
IN1|1|4751|14079|AETNA |PO BOX 14079^^LEXINGTON^KY^40512-4079||||||||||AETNA |Test^Bruce^Jay|Self|19461001000000|789 Road^^West Bloomfield^MI^48322|||||||||||||||||W255837512|||||||M||||||

```
{{% anchor sys="oru" %}}

# ORU, Lab Results

{{% anchor sys="oru-r01" %}}


## ORU^R01


### Discrete


```
MSH|^~\&|WCDataSend|omg|wc_hl7d|recv_facil|20210709080455||ORU^R01^ORU_R01|DSD1625832295118172|P|2.5|||||||||||||
PID|1|5007|5007^^^MR&1.2.840.114398.1.5110.1&ISO^MR^MR&1.2.840.114398.1.5110.1&ISO||Testabc^Nathaniel||19830101|M|||4444 Ave^^Redwood City^CA^94061||||||||||||||||||||||||||||
ORC|CN||211820124^hexlab-lab|||||||||6^Margolis^Jeffrey^H.^^^MD|^^^^BIO^^^^^Biotech Labs||20210701120200||||||||||||||||
OBR|1||GROUP320^100|^H O R M O N E S||20210701120200|20210701120200||||||Patient: Testabc, Nathaniel\X0A\Ordering Physician: Margolis, Jeffrey\X0A\\X0A\-----------------------------------------------------------------------------------\X0A\211820124|20210701180500||||||||20210709080400|||F|||||||||||||||||||1||||||
OBX|1||3676^TESTOSTERONE, TOTAL|0|531.17|ng/dL|220 - 715||||F|20210701180500|0|20210701120200|00004140^^MS4R||||||||||
OBR|2||GROUP400^100|^INFECTIOUS DISEASE||20210701120200|20210701120200||||||Patient: Testabc, Nathaniel\X0A\Ordering Physician: Margolis, Jeffrey\X0A\\X0A\-----------------------------------------------------------------------------------\X0A\211820124|20210701180500||||||||20210709080400|||F|||||||||||||||||||2||||||
OBX|2||9472^*ACUTE HEPATITIS PANEL*|0|||||||I|20210701180500|0|20210701120200|HDR80074^^MS4R||||||||||
OBX|3||1139^HEP A IgM|0|NON-REACTIVE||NON-REACTI||||F|20210701180500|0|20210701120200|00001048^^MS4R||||||||||
OBX|4||579^HEP B SURF AG|0|NON-REACTIVE||NON-REACTI||||F|20210701180500|0|20210701120200|00002042^^MS4R||||||||||
OBX|5||699^HEP B CORE IGM|0|NON-REACTIVE||NON-REACTI||||F|20210701180500|0|20210701120200|00001049^^MS4R||||||||||
OBX|6||581^ANTI-HCV|0|NON-REACTIVE||NON-REACTI||||F|20210701180500|0|20210701120200|00002044^^MS4R||||||||||
NTE|1||This test was performed using the Siemens Advia Centaur immunoassay\X0A\method. Values obtained from different assay methods cannot be used\X0A\interchangeably.|TC
OBR|3||GROUP600^100|^I M M U N O L O G Y||20210701120200|20210701120200||||||Patient: Testabc, Nathaniel\X0A\Ordering Physician: Margolis, Jeffrey\X0A\\X0A\-----------------------------------------------------------------------------------\X0A\211820124|20210701180500||||||||20210709080400|||F|||||||||||||||||||3||||||
OBX|7||9486^ANTI CARDIOLIPIN ABS|0|||||||I|20210701180500|0|20210701120200|0HDR2501^^MS4R||||||||||
OBX|8||498^ANTI-CARDIOLIPIN IgG|0|<1.6|GPL|< 20||||F|20210701180500|0|20210701120200|00025012^^MS4R||||||||||
OBX|9||499^ANTI-CARDIOLIPIN IgM|0|20.3|MPL|< 20|H|||F|20210701180500|0|20210701120200|00025003^^MS4R||||||||||
NTE|1||LOW POSITIVE: 20 - 29\X0A\MODERATE: 30 - 79\X0A\HIGH POSITIVE: >=80|TC
OBR|4||GROUP601^100|^I M M U N O L O G Y||20210701120200|20210701120200||||||Patient: Testabc, Nathaniel\X0A\Ordering Physician: Margolis, Jeffrey\X0A\\X0A\-----------------------------------------------------------------------------------\X0A\211820124|20210701180500||||||||20210709080400|||F|||||||||||||||||||4||||||
OBX|10||5943^B2-GLYCOPROTEIN I IgA|0|<2.0|U/mL|< 20||||F|20210701180500|0|20210701120200|00076131^^MS4R||||||||||
OBX|11||5944^B2-GLYCOPROTEIN I IgM|0|8.5|U/mL|< 20||||F|20210701180500|0|20210701120200|00076132^^MS4R||||||||||
OBX|12||5945^B2-GLYCOPROTEIN I IgG|0|<1.4|U/mL|< 20||||F|20210701180500|0|20210701120200|00076133^^MS4R||||||||||
OBR|5||GROUP999^100|^MISCELLANEOUS TESTS||20210701120200|20210701120200||||||Patient: Testabc, Nathaniel\X0A\Ordering Physician: Margolis, Jeffrey\X0A\\X0A\-----------------------------------------------------------------------------------\X0A\211820124|20210701180500||||||||20210709080400|||F|||||||||||||||||||5||||||
OBX|13||5946^ANTI-CARDIOLIPIN IgA|0|<2.0|APL|< 20||||F|20210701180500|0|20210701120200|00025011^^MS4R||||||||||
OBX|14||6085^ANTIPHOSPHATIDYL IGG|0|2|GPS IgG|0-11||||F|20210701180500|0|20210701120200|0076421L^^MS4R|8763|||||||||
NTE|1||Reference Lab: LabCorp Burlington\X0A\1447 York Court\X0A\Burlington, NC 272153361\X0A\MD Nagendra Sanjai|TC
OBX|15||6084^ANTIPHOSPHATIDYL IGA|0|1|APS IgA|0-20||||F|20210701180500|0|20210701120200|0076422L^^MS4R|8763|||||||||
NTE|1||Reference Lab: LabCorp Burlington\X0A\1447 York Court\X0A\Burlington, NC 272153361\X0A\MD Nagendra Sanjai|TC
OBX|16||6083^ANTIPHOSPHATIDYL IGM|0|12|MPS IgM|0-25||||F|20210701180500|0|20210701120200|0076423L^^MS4R|8763|||||||||
NTE|1||Reference Lab: LabCorp Burlington\X0A\1447 York Court\X0A\Burlington, NC 272153361\X0A\MD Nagendra Sanjai|TC

```

### Discrete with Notes


```
MSH|^~\&|MIE|SHC|MIE|SU|20210621214932||ORU^R01^ORU_R01|DSD1624337372374298|P|2.5.1|||||||||||||
PID|1|5007|5007^^^MR&1.2.840.114398.1.5110.1&ISO^MR^MR&1.2.840.114398.1.5110.1&ISO||Testabc^Nathaniel||19830101|M|||4444 Ave^^Redwood City^CA^94061||||||||||||||||||||||||||||
PV1|||||||40^Wittman^Richard^I.^MD|||||||||||||||||||||||||||||||||||||||||||||
ORC|RE|7913|21S-160VI0363||CM||||||||||||||||||||||||||
OBR|1|7913|21S-160VI0363|LABSARSCOV2^NOVEL CORONAVIRUS 2019 (SARS-COV-2), RT PCR||20210609114100|20210609114100|||||||||40^Wittman^Richard^I.^MD||||0|||||F|||||||40^20210614112732||||20210609231214||||||||||||||
NTE|1||Patient: Testabc, Nathaniel (Nate)|
NTE|2||MR #: 5007|
NTE|3||Ordering Physician: Wittman, Richard Isaac|
NTE|4|||
OBX|1|ST|1230303009^SPECIMEN TYPE (SARS-COV-2)^MIE^7918^SPECIMEN TYPE (SARS-COV-2)^WEBCHART||Resp, Upper||||||F|||20210609114100|1020^Kong, Christina Suzan Stanford University School of Medic Department of Pathology Stanford, CA 94305|1020|||||||||
OBX|2|ST|1230303010^SPECIMEN SOURCE (SARS-COV-2)^MIE^7919^SPECIMEN SOURCE (SARS-COV-2)^WEBCHART||Mid Turbinate Nasal Swab||||||F|||20210609114100|1020^Kong, Christina Suzan Stanford University School of Medic Department of Pathology Stanford, CA 94305|1020|||||||||
OBX|3|ST|1230303011^SARS-COV-2 RNA^MIE^7920^SARS-COV-2 RNA^WEBCHART||Not Detected||Not Detected||||F|||20210609114100|1020^Kong, Christina Suzan Stanford University School of Medic Department of Pathology Stanford, CA 94305|1020|||||||||
NTE|1||Methodology: Nucleic Acid Amplification Test (NAAT): RT-PCR or TMA;(Hologic Panther System)|
NTE|2|||
NTE|3||The SARS-CoV-2 assay(TMA) is authorized by the U.S. Food and Drug Administration (FDA) under an Emergency Use Authorization (EUA) for use by laboratories certified under the Clinical Laboratory Improvement Amendments (CLIA) to perform high complexity tests.|
NTE|4|||
NTE|5||The SARS-CoV-2 assay(RT-PCR) was validated and its performance characteristics determined by Stanford Health Care Clinical Laboratory. Unless indicated otherwise, it has not been cleared or approved by the US FDA, although such approval is not required for analyte-specific reagents of this type.|
NTE|6|||
NTE|7||Validated specimen types: Nasopharyngeal (NP), Nasal, Oropharyngeal (OP) swab and Bronchoalveolar lavage (BAL) specimens. Sensitivity and Specificity are unknown for other specimen types and collection techniques.|

```

# ORM, Orders

{{% anchor sys="orm-o01" %}}


## ORM^O01


```
MSH|^~\&|WCDataSend|DEV|wc_hl7d|recv_facil|20210413152312||ORM^O01^ORM_O01|DSD1618345392293653|P|2.5|||||||||||||
PID|1|10018|10018^^^MR&1.2.840.114398.1.6629.1&ISO^MR||Test^AEL^^^^^L||20210413000000||||123 Main Street^^Schenectady^NY^12345^US^^^Schenectady||^PRN^PH|^WPN^PH|||||||||||||||||||||||||
PV1|1||^^^FREELM|||||||||||||||||||||||||||||||||||||||||||||||^^^^^1.2.840.114398.1.6629||
IN1|1||||||||||||||||||||||||||||||||||||||||||||||C||
ORC|NW|22|||Pending||^^^^^0||20210413152252|89^Medical Informatics Engineering^MIE||8^Freeman^Lucius^B^^^MD|^^^^OFFICE^^^^^Freeman Family Medicine, Lucius B Freeman, M.D.||||OFFICE||||Freeman Family Medicine, Lucius B Freeman, M.D.|645 McQueen Smith Rd^North Suite 105^Prattville^AL^36066^US|3343617656|645 McQueen Smith Rd^North Suite 105^Prattville^AL^36066|||||||
OBR|1|22||E693^PORPHOBILINOGEN (PBG) URINE - AEL|0|20210413152252|20210413161900|||||||||8^Freeman^Lucius^B^^^MD||||||||||||||||||||||||||||||||||
DG1|1|ICD|R05^COUGH^I10|COUGH||||||||||||
OBX|1|NM|C6806^HOURS COLLECTED||0.25||||||||||||||||||||
OBX|2|NM|C6804^TOTAL VOLUME||4||||||||||||||||||||

```

### COVID Order


```
MSH|^~\&|EH|EH|COVID LAB|COVID LAB|20210311091929||ORM^O01^ORM_O01|DSD1615472369786270|P|2.5|||||||||||||
PID|1|101394|101394^^^MR&1.2.840.114398.1.6391.5&ISO^MR||LAST^FIRST^^^^^L||19820101000000|M|||123 SOUTH ST^^COALINGA^CA^93210^US||5551234567^PRN^PH^email@test.com|55512345677^WPN^PH|||||||||||||||||||||||||
NTE|1|I|COMMENTS|
IN1|1||||||||||||||||||||||||||||||||||||||||||||||C||
ORC|NW|75055|||Pending||^^^^^0||20210311061912|12137^LOVERA^MARIA||1972697324^PAN^ERICA^^^^^N^NPI|^^^^COALINGA^^^^^Coalinga||||COALINGA||||Coalinga|24511 W Jayne Ave^^Coalinga^CA^93210^US||P.O. Box 997377^^Sacramento^CA|||||||
OBR|1|75055||94500-6^SARS coronavirus|0|20210311061912|20210311061900||||||||^^^covid_anterior_nares_swab|1972697324^PAN^ERICA^^^^^N^NPI|||||||||||||||COMMENTS|||||||||||||||||||
OBX|1|ST|^BODY SITE||COVID_ANTERIOR_NARES_SWAB||||||||||||||||||||

```

# MDM, Documents

{{% anchor sys="mdm-t02" %}}


## MDM^T02


### Plain text


```
MSH|^~\&|WCDataSend||wc_hl7d|recv_facil|20210716121708||MDM^T02^MDM_T02|DSD1626452228213830|P|2.5|||||||||
PID|1|55555|55555^^^FWR&1.2.840.114398.1.13.1&ISO^MR^1.2.840.114398.1.13.1&FWR&ISO~55555^^^TSMI&1.2.840.114398.1.77.1&ISO^MR^1.2.840.114398.1.77.1&TSMI&ISO~88888^^^CAMHBOC&1.2.840.114398.1.4.1&ISO^MR^1.2.840.114398.1.4.1&CAMHBOC&ISO~999999999^^^^SS||Name^Evelyn^K||19961110000000|F||W|3001 N Blvd^Apt 705^Angola^IN^46703^US||55555554073^PRN^PH|||S|||999999999||||||||||||||||||||
PV1|1|OUTPATIENT|CAM^^^^^^^^Cameron Memorial Community Hospital^fwr|||||||XR|||||||11094^Gregory^Adam^^^^MD||10391981|||||||||||||||0|||||||1|||20160502121300||||||341623620160502^^^^^CPSI||
TXA|1|PS|FT|20160502121300||20160502142755|20160502142755|20160502142755|11094^Gregory^Adam^^^^MD|||918711^Powerscribe|||||LA|||||11094^Gregory^Adam^^^^^^^^1^^^^20160502124809|9290^FORT WAYNE^RADIOLOGY
OBX|1|ST|14|PS|Cameron Memorial Community Hospital\X0A\416 East Maumee St\X0A\Angola, IN 46703\X0A\ORDERING PROVIDER: Thomas Nill, MD\X0A\\X0A\PATIENT NAME: Evelyn Name\X0A\MR: 85459\X0A\DOB: Nov 10, 1996\X0A\\X0A\EXAMINATION: CR THORACIC SPINE 3 VIEW.\X0A\DATE OF EXAM: May 02, 2016 12:13:00 PM.\X0A\INDICATION: back pain, nki, hx arthritis\X0A\Comparison: Chest x-ray 12/3/2014, 4/27/2015, nuclear medicine bone\X0A\scan 4/26/2016.\X0A\NUMBER OF IMAGES: 4\X0A\\X0A\DISCUSSION: There is diffuse bony demineralization, which limits\X0A\evaluation for nondisplaced fractures. Within this limitation,\X0A\vertebral body heights are grossly preserved, as well as can be seen.\X0A\There is multilevel disc space narrowing and associated endplate\X0A\degenerative changes in the thoracic and visualized upper lumbar\X0A\spine. There is mild dextro scoliotic curvature of the upper and mid\X0A\thoracic spine. Small focus of radiotracer activity in the mid\X0A\thoracic spine left of midline could represent chronic changes\X0A\associated with the mild dextroscoliotic curvature. Left ureteral\X0A\stent is incidentally noted.\X0A\\X0A\IMPRESSION: Diffuse bony demineralization, which limits evaluation for\X0A\nondisplaced fractures. No significant compression fracture\X0A\identified. Multilevel degenerative changes. See discussion above.\X0A\\X0A\\X0A\Professional Interpretation by FW RADIOLOGY\X0A\Electronically signed by: Gregory, M.D., Adam\X0A\||||||||||||||||||||
NTE|1||CR THORACIC SPINE 3 VIEW|RE

```

# DFT, Financials

{{% anchor sys="dft-p03" %}}


## DFT^P03


```
MSH|^~\&|WCDataSend|SENDING_FACILITY|wc_hl7d|recv_facil|20210723040307||DFT^P03^DFT_P03|DSD1627027387370313|P|2.5|||||||||||||
EVN||20210723040307||
PID|1||222222^^^MR&1.2.840.114398.1.6421.1&ISO^MR^1.2.840.114398.1.6421.1&MR&ISO~222222222^^^^SS||Test^Lisa||19860214000000|F|||3104 St^^Marion^OH^43302^US||5555551416^PRN^PH|||||506214^^^MNGWCTR1D|222222222||||||||||||||||||||
FT1|1|506214||20210719154000||CG|HAIR5PAN|Hair Test 5 Panel||1|79.000000|79.000000||||^^^^MNGWCTR1D^^^^WorkHealth Marion||VISIT||220^Nurse^WH Marion|||506214|47600^Dix^Amy^^^Mrs.^LPN|HAIR5PAN||||
PR1|1|CPT|HAIR5PAN|Hair Test 5 Panel|20210719154000|||||||220^Nurse^WH Marion||||
FT1|2|506214||20210719154000||CG|NON9|NONDOT 9 Panel (30GQ)||1|46.000000|46.000000||||^^^^MNGWCTR1D^^^^WorkHealth Marion||VISIT||220^Nurse^WH Marion|||506214|47600^Dix^Amy^^^Mrs.^LPN|NON9||||
PR1|2|CPT|NON9|NONDOT 9 Panel (30GQ)|20210719154000|||||||220^Nurse^WH Marion||||
MSH|^~\&|WCDataSend|SENDING_FACILITY|wc_hl7d|recv_facil|20210722191854||DFT^P03^DFT_P03|DSD162699593439233|P|2.5|||||||||||||
EVN||20210722191854||
PID|1|333333|333333^^^MR&1.2.840.114398.1.40.1&ISO^MR^1.2.840.114398.1.40.1&MR&ISO~444444^^^NMC&1.2.840.114398.1.35.1&ISO^MR^1.2.840.114398.1.35.1&NMC&ISO~555555^^^WC&1.2.840.114398.1.40.4&ISO^MR^1.2.840.114398.1.40.4&WC&ISO~7777777^^^^SS|333333^^^MR&1.2.840.114398.1.40.1&ISO|TEST^CHRISTOPHER^P||19740608000000|M|||1626 DR^^FORT WAYNE^IN^468191745^US||^PRN^PH^TEST123@EMAIL.COM~5555554281^PRN^CP|||M||252585^^^FWP|777777777||||||||||||||||||||
FT1|1|252585||20210722163000||CG|99213|Office visit est Exp PF||1|0.000000|0.000000||||^^^^FWP^^^^OFFICE||VISITPSYCH|F33.1^Major depressive disorder, recurrent, moderate^I10~F41.1^Generalized anxiety disorder^I10|4^Rustagi^Prevesh^K^^^M.D.|||252585|4^Rustagi^Prevesh^K^^^M.D.|99213||||
PR1|1|CPT|99213|Office visit est Exp PF|20210722163000|||||||4^Rustagi^Prevesh^K^^^M.D.|||F33.1^Major depressive disorder, recurrent, moderate^I10~F41.1^Generalized anxiety disorder^I10|
DG1|1|ICD10|F33.1^Major depressive disorder, recurrent, moderate^I10|Major depressive disorder, recurrent, moderate||F|||||||||0|4^Rustagi^Prevesh^K^^^M.D.
DG1|2|ICD10|F41.1^Generalized anxiety disorder^I10|Generalized anxiety disorder||F|||||||||0|4^Rustagi^Prevesh^K^^^M.D.

```

# VXU, Immunizations


## VXU^V04


```

MSH|^~\&|WebChart|SIISCLIENT23068|Impact|SIIS|20210723110514-0400||VXU^V04^VXU_V04|WCCHIRPA740231627052714|P|2.5.1|||AL|AL|||||Z22^CDCPHINVS|SIISCLIENT23068^^^^^NIST-AA-IZ-1&2.16.840.1.113883.3.72.5.40.9&ISO^XX^^^ohioHealth
PID|1||88888^^^MR^MR~999999999^^^MAA^SS||Test^Kevin^^^^^L||19890513000000|U||2106-3^White^HL70005|11045 Rd^^Orient^OH^43146^US^L^^Pickaway||^PRN^PH^^^555^5555394|||||||||2186-5^Not Hispanic or Latino^HL70189
ORC|RE||74023^ohiohealth^1.2.840.114398.1.6426^ISO|||||||81^Elkins^Robin^^^^^^ohiohealth&1.2.840.114398.1.6426&ISO^L^^^PRN^^^^^^^^RN||1669786117^Mazdeh^Fariba^^^^^^NPI^L^^^NPI^^^^^^^^CNP
RXA|0|999|20210723110400|20210723110400|115^Tdap^CVX|0.5|mL^MilliLiter [SI Volume Units]^UCUM||00^New immunization record^NIP001|81^Elkins^Robin^^^^^^ohiohealth&1.2.840.114398.1.6426&ISO^L^^^PRN^^^^^^^^RN|||||U6964AA|52020223000000|PMC^Sanofi Pasteur^MVX|||CP|A|20210723110508
RXR|IM^Intramuscular^HL70162|RD^Right Deltoid^HL70163
OBX|1|ST|VFC-STATUS^VFC STATUS^STC|1|V00||||||F|||20210723|||VXC40^Eligibility captured at the immunization level^CDCPHINVS
MSH|^~\&|WebChart|SIISCLIENT23091|Impact|SIIS|20210723082330-0400||VXU^V04^VXU_V04|WCCHIRPA740151627043010|P|2.5.1|||AL|AL|||||Z22^CDCPHINVS|SIISCLIENT23091^^^^^NIST-AA-IZ-1&2.16.840.1.113883.3.72.5.40.9&ISO^XX^^^ohioHealth
PID|1||22222^^^MR^MR~444444444^^^MAA^SS||Test^Angela^^^^^L||19791131000000|F||2106-3^White^HL70005|2263 Dr.^^Reynoldsburg^OH^43068^US^L||^PRN^PH^^^555^5550257~^NET^Internet^tester4@ohealth.com|||||||||2186-5^Not Hispanic or Latino^HL70189
ORC|RE||74015^ohiohealth^1.2.840.114398.1.6426^ISO|||||||130^Templin^Brooke^Noelle^^^^^ohiohealth&1.2.840.114398.1.6426&ISO^L^^^PRN^^^^^^^^RN
RXA|0|999|20210722000000|20210722000000|115^Tdap^CVX|999|||01^Historical immunization record^NIP001~ ^L Deltoid|||||||||||CP|A|20210723082317

```

# Related Pages

[Receiving HL7 Messages from System](receiving-hl7-messages-from-system.md)
[Sending HL7 Messages to System](sending-hl7-messages-to-system.md)
[HL7 Segment Definitions](hl7-segment-definitions.md)
