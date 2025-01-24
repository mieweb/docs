---
id: '1buEjhEqeF7YkD4D8XltrDAHKHNbfICRz9wGqUqMz2ks'
title: 'Application Programming Interface (API)'
date: '2025-01-24T22:37:09.982Z'
version: 480
lastAuthor: 'bhamm'
mimeType: 'text/x-markdown'
links:
  - 'application-programming-interface-api/terms-of-api-use.md'
  - 'https://github.com/mieweb/mieapi-js'
  - 'https://github.com/mieweb/mieapi-meteor'
  - 'https://github.com/mieweb/wcexport/blob/master/wcjson.py'
  - 'https://github.com/mieweb/webchart-interface-examples'
  - 'https://www.healthit.gov/sites/default/2015Ed_CCG_g7-Application-access-patient-selection.pdf'
  - 'https://www.healthit.gov/sites/default/files/170_315g7_application_access_patient_selection_v1_0_1_1.pdf'
  - 'https://www.healthit.gov/sites/default/2015Ed_CCG_g8-Application-access-data-category-request.pdf'
  - 'https://www.healthit.gov/sites/default/2015Ed_CCG_CCDS.pdf'
  - 'https://www.healthit.gov/sites/default/files/170_315g8_application_access_data_category_request_v1_1_1.pdf'
  - 'https://www.healthit.gov/sites/default/files/ccds_reference_document_v1_1.pdf'
  - 'https://www.healthit.gov/sites/default/2015Ed_CCG_g9-Application-access-all-data-request.pdf'
  - 'https://www.healthit.gov/sites/default/files/170_315g9_application_access_all_data_request_v1_1_1.pdf'
  - 'https://docs.enterprisehealth.com/functions/system-administration/data-migration/mie-file-import/'
  - 'https://github.com/mieweb/wcexport'
  - 'https://github.com/mieweb/wcexport/blob/master/README.md'
source: 'https://drive.google.com/open?id=1buEjhEqeF7YkD4D8XltrDAHKHNbfICRz9wGqUqMz2ks'
wikigdrive: '0008bcbb1563384efe0a28ada6f97e9432e65f10'
---
[Terms of API Use](application-programming-interface-api/terms-of-api-use.md)

## Introduction

With {{% system-name %}}, System Administrators can enhance and configure the system to support a wide range of workflows and processes. This includes migrating valuable data from legacy applications, seamlessly integrating with HR systems, email platforms, laboratories, and medical devices, and facilitating secure data sharing across the solution. {{% system-name %}} also provides robust capabilities for aggregating data from multiple sources without encountering barriers.

This document outlines the framework that underpins these capabilities.

The core API is built on a RESTful architecture, supporting both GET and POST methods to retrieve or modify records. Access to the API requires an authenticated session, which can be established either through a cookie-based mechanism using a username and password by way of an HTTPS POST or via an OAuth 2.0 bearer token generated with an API key.

Explore the {{% system-name %}} API, below.

Interactive, dynamic documentation of the {{% system-name %}} API can be found inside the product. Navigate to the API tab of the Control Panel or use the Search tool located in the upper right hand corner of the application for full visibility of the various objects and their APIs.

![](../application-programming-interface-api.assets/8657b05072273ffb0c081e0e54e89de7.png)

System Administrators can explore each object type and then click on the Object to experiment with the javascript api.  The **>_Run Code** button on the lower right allows System Administrators to experiment in real time.

![](../application-programming-interface-api.assets/b0c6b56c82c6a95ebba7c679f5cf7ab3.png)

Every object has a URL. For example: patients:

![](../application-programming-interface-api.assets/611e76c09a736d9808e3ca2335ec13cb.png)

### JavaScript API

Node: https://github.com/mieweb/mieapi-js

Meteor: https://github.com/mieweb/mieapi-meteor

### Python API

Example in python: [wcjson.py](https://github.com/mieweb/wcexport/blob/master/wcjson.py)

### Example programs

Other examples can be found here: https://github.com/mieweb/webchart-interface-examples

![](../application-programming-interface-api.assets/d573f388d7e42804e6450203b5a315b0.png)

## Session Establishment

### Command-line

{{% pre language="bash" theme="RDark" %}}```

curl WEBCHARTURL?login_user=USERNAME&login_passwd=PASSWORD  
```
{{% /pre %}}

### Python example

```
{{% pre language="py" theme="RDark" %}}
data = urllib.urlencode({
  'login_user': USERNAME,
  'login_passwd': PASSWORD
})
# Ensures the request is a POST request
request = urllib2.Request(URL, data)

# Make the POST request
out = urllib2.urlopen(request)

# Extract the COOKIE from the response headers
COOKIE = out.headers.get('Set-Cookie').split('=')[1].split(';')[0] 
{{% /pre %}}

{{% info %}}
COOKIE represents the session and is sent in the response.
{{% /info %}}

```

## ONC Certification API 2015 Edition

Overall, this document is intended to comply with the established criteria laid out for the 2015 Edition ONC Certification–Patient Selection 170.315(g)(7), Data Category Request 170.315(g)(8), and All Data Request 170.315(g)(9). The following table provides access to the ONC specifications regarding these standards and requirements:

<table>
<tr>
<td>§ 170.315(g)(7)</td>
<td>Application Access – Patient Selection</td>
<td><a href="https://www.healthit.gov/sites/default/2015Ed_CCG_g7-Application-access-patient-selection.pdf">(g)(7) Guide</a></td>
<td><a href="https://www.healthit.gov/sites/default/files/170_315g7_application_access_patient_selection_v1_0_1_1.pdf">Test Procedure (PDF - 172 KB)</a></td>
</tr>
<tr>
<td>§ 170.315(g)(8)</td>
<td>Application Access – Data Category Request</td>
<td><a href="https://www.healthit.gov/sites/default/2015Ed_CCG_g8-Application-access-data-category-request.pdf">(g)(8) Guide</a><br />
<a href="https://www.healthit.gov/sites/default/2015Ed_CCG_CCDS.pdf">CCDS Guide</a></td>
<td><a href="https://www.healthit.gov/sites/default/files/170_315g8_application_access_data_category_request_v1_1_1.pdf">Test Procedure (PDF - 181 KB)</a><br />
<a href="https://www.healthit.gov/sites/default/files/ccds_reference_document_v1_1.pdf">CCDS Reference (PDF - 360 KB)</a></td>
</tr>
<tr>
<td>§ 170.315(g)(9)</td>
<td>Application Access – All Data Request</td>
<td><a href="https://www.healthit.gov/sites/default/2015Ed_CCG_g9-Application-access-all-data-request.pdf">(g)(9) Guide</a><br />
<a href="https://www.healthit.gov/sites/default/2015Ed_CCG_CCDS.pdf">CCDS Guide</a></td>
<td><a href="https://www.healthit.gov/sites/default/files/170_315g9_application_access_all_data_request_v1_1_1.pdf">Test Procedure (PDF - 236 KB)</a></td>
</tr>
<tr>
<td>§ 170.315(g)(10)</td>
<td>Application Access – All Data Request</td>
<td><a href="https://www.healthit.gov/sites/default/2015Ed_CCG_g9-Application-access-all-data-request.pdf">(g)(9) Guide</a><br />
<a href="https://www.healthit.gov/sites/default/2015Ed_CCG_CCDS.pdf">CCDS Guide</a></td>
<td><a href="https://www.healthit.gov/sites/default/files/170_315g9_application_access_all_data_request_v1_1_1.pdf">Test Procedure (PDF - 236 KB)</a></td>
</tr>
</table>

### § 170.315(g)(7) Application access – Patient Selection

http://system/?f=layout&module=JS&name=API_DOC&tabmodule=admin&tabselect=API

{{% pre language="py" theme="RDark" title="Patients Example" %}}```

requests = {
  'Last Name LIKE "Hart"': 'GET/db/patients/LIKE_last_name=Hart',
  'Last Name LIKE "Pregnant"': 'GET/db/patients/LIKE_last_name=Pregnan',
}
for title, url in requests.iteritems():
  print('\\nQuerying for patients: {0}'.format(title))
js = json.load(
  urllib2.urlopen(URL, urllib.urlencode({
    'f': 'json',
    'session_id': COOKIE,
    'apistring': base64.b64encode(url)
  })))
print(json.dumps(js))
```
{{% /pre %}}

Requests are URLs. urllib2.urlopen does the work of calling each request and outputting the response on the screen.

### § 170.315(g)(8) Application access – Data Category Request

URL-specific sections are returned in XML CCDA format.

<table>
<tr>
<td>Patient Name</td>
<td>?f=layout&module=StructDocAPI&name=Patient%20Name&XML&pat_id=XX</td>
</tr>
<tr>
<td>Sex</td>
<td>?f=layout&module=StructDocAPI&name=Gender%20Code&XML&pat_id=XX</td>
</tr>
<tr>
<td>Date of Birth</td>
<td>?f=layout&module=StructDocAPI&name=Birth%20Date&XML&pat_id=XX</td>
</tr>
<tr>
<td>Race</td>
<td>?f=layout&module=StructDocAPI&name=Patient%20Race&XML&pat_id=XX</td>
</tr>
<tr>
<td>Ethnicity</td>
<td>?f=layout&module=StructDocAPI&name=Patient%20Ethnicity&XML&pat_id=XX</td>
</tr>
<tr>
<td>Preferred Language</td>
<td>?f=layout&module=StructDocAPI&name=Patient%20Language&XML&pat_id=XX</td>
</tr>
<tr>
<td>Smoking Status</td>
<td>?f=layout&module=StructDocAPI&name=Smoking%20Status&XML&pat_id=XX</td>
</tr>
<tr>
<td>Problems</td>
<td>?f=layout&module=StructDocAPI&name=Problems&XML&pat_id=XX</td>
</tr>
<tr>
<td>Medications</td>
<td>?f=layout&module=StructDocAPI&name=Medications&XML&pat_id=XX</td>
</tr>
<tr>
<td>Medication Allergies</td>
<td>?f=layout&module=StructDocAPI&name=Allergies&XML&pat_id=XX</td>
</tr>
<tr>
<td>Laboratory Tests (Orders?)</td>
<td></td>
</tr>
<tr>
<td>Laboratory Values(s)/Result(s)</td>
<td>?f=layout&module=StructDocAPI&name=Results&XML&pat_id=XX</td>
</tr>
<tr>
<td>Vital Signs</td>
<td>?f=layout&module=StructDocAPI&name=Vital Signs&XML&pat_id=XX</td>
</tr>
<tr>
<td>Procedures</td>
<td>?f=layout&module=StructDocAPI&name=Procedures&XML&pat_id=XX</td>
</tr>
<tr>
<td>Care Team Member(s)</td>
<td>?f=layout&module=StructDocAPI&name=Care Team Members&XML&encounter_id=XX</td>
</tr>
<tr>
<td>Immunizations</td>
<td>?f=layout&module=StructDocAPI&name=Immunizations&XML&pat_id=XX</td>
</tr>
<tr>
<td>Unique Device Identifier(s) for a Patient's Implantable Device(s)</td>
<td>?f=layout&module=StructDocAPI&name=Medical_Equipment&XML&pat_id=XX</td>
</tr>
<tr>
<td>Assessment and Plan of Treatment</td>
<td>?f=layout&module=StructDocAPI&name=Assessments&XML&encounter_id=XX</td>
</tr>
<tr>
<td>Goals</td>
<td>?f=layout&module=StructDocAPI&name=Goals&XML&encounter_id=XX</td>
</tr>
<tr>
<td>Health Concerns</td>
<td>?f=layout&module=StructDocAPI&name=Health Concerns&XML&encounter_id=XX</td>
</tr>
<tr>
<td></td>
<td>&sdate=YYYY-MM-DD</td>
</tr>
<tr>
<td></td>
<td>&edate=YYYY-MM-DD</td>
</tr>
</table>

{{% pre language="py" theme="RDark" title="Data Category Example" %}}
```
#!/usr/bin/env python
import sys
import os
import urllib2
import urllib
import base64
import json
import re

USERNAME = 'dave'
PASSWORD = 'dave'
COOKIE = None

DTREG = '\\d{4}-\\d{2}-\\d{2}'
OUTPUT = 'output'
APIS = {
    'Patient Name': 'Patient Name',
    'Sex': 'Gender Code',
    'Date of Birth': 'Birth Date',
    'Race': 'Patient Race',
    'Ethnicity': 'Patient Ethnicity',
    'Preferred Language': 'Patient Language',
    'Smoking Status': 'Smoking Status',
    'Problems': 'Problems',
    'Medications': 'Medications',
    'Medication Allergies': 'Allergies',
    'Lab Values_Result': 'Results',
    'Vital Signs': 'Vital Signs',
    'Procedures': 'Procedures',
    'Immunizations': 'Immunizations',
}

def usage():
    print('Usage: {0} URL [startDate [endDate]] PatientLastName1 PatientLastName2 ...'.format(__file__))
    exit()

if __name__ == '__main__':
    if len(sys.argv) < 3:
        usage()
    URL = sys.argv[1]
    sdate = ''
    edate = ''
    names = sys.argv[2:]
    dtmatches = [x for x in names if re.match(DTREG, x)]
    if dtmatches:
        if len(dtmatches) == 1:
            sdate = dtmatches[0]
        else:
            sdate = dtmatches[0]
            edate = dtmatches[1]
    charts = {}
    print('Initializing session at {0}'.format(URL))
    try:
        # Create a POST request for session initialization
        data = urllib.urlencode({
            'login_user': USERNAME,
            'login_passwd': PASSWORD
        })
        request = urllib2.Request(URL, data)
        out = urllib2.urlopen(request)
        COOKIE = out.headers.get('Set-Cookie').split('=')[1].split(';')[0]
    except Exception as e:
        print('Session failed to initialize {0}'.format(e))

    if COOKIE:
        for name in names:
            # Create a POST request for patient data retrieval
            data = urllib.urlencode({
                'f': 'json',
                'session_id': COOKIE,
                'apistring': base64.b64encode('GET/db/patients/LIKE_last_name={0}'.format(name))
            })
            request = urllib2.Request(URL, data)
            try:
                js = json.load(urllib2.urlopen(request))
            except Exception as e:
                print(f"Failed to fetch data for {name}: {e}")
                continue

            if js and js['db']:
                for rec in js['db']:
                    charts[rec['pat_id']] = rec
        for cid, chart in charts.iteritems():
            patname = '{0},{1},{2}_{3}'.format(chart['last_name'], chart['first_name'],
                                               chart['middle_name'], cid)
            if not os.path.exists(os.path.join(OUTPUT, patname)):
                os.makedirs(os.path.join(OUTPUT, patname))
            print('Retrieving data for {0} {1} {2}'.format(patname,
                                                           'after' if not edate and sdate else 'between' if edate and sdate else '',
                                                           sdate if not edate else '{0} and {1}'.format(sdate, edate)))
            for k, v in APIS.iteritems():
                # Create a POST request for API-specific data retrieval
                data = urllib.urlencode({
                    'session_id': COOKIE,
                    'f': 'layout',
                    'module': 'StructDocAPI',
                    'XML': '1',
                    'name': v,
                    'pat_id': cid,
                    'sdate': sdate,
                    'edate': edate,
                })
                request = urllib2.Request(URL, data)
                try:
                    res = urllib2.urlopen(request)
                    with open(os.path.join(OUTPUT, patname, '{0}.xml'.format(k)), 'w') as fp:
                        fp.write(res.read())
                except Exception as e:
                    print(f"Failed to fetch {k} data for {patname}: {e}")
```
{{% /pre %}}

### § 170.315(g)(9) Application access – All Data Request

Receive documents stored in charts:

{{% pre language="py" theme="RDark" %}}
```
#!/usr/bin/env python
import urllib2
import urllib
import base64
import json
import os

URL = 'https://server/webchart.cgi'
USERNAME = 'dave'
PASSWORD = 'dave'
COOKIE = None

# Download a document
def downloadDocument(doc_id, filename):
    if not os.path.exists(filename):
        data = urllib.urlencode({
            'f': 'stream',
            'doc_id': doc_id,
            'session_id': COOKIE,
            'rawdata': '1'
        })
        request = urllib2.Request(URL, data)
        out = urllib2.urlopen(request)
        with open(filename, 'wb') as fp:
            fp.write(out.read())

def downloadDocumentMeta(pat_id):
    try:
        api = "GET/db/documents/storage_type=19&LIKE_service_date=2017-05-02%25&pat_id=" + pat_id
        print('\\nQuerying for documents: {0}'.format(pat_id))
        data = urllib.urlencode({
            'f': 'json',
            'session_id': COOKIE,
            'apistring': base64.b64encode(api)
        })
        request = urllib2.Request(URL, data)
        docs = json.load(urllib2.urlopen(request))
        return docs["db"][0]["doc_id"]
    except:
        return "" 

if __name__ == '__main__':
    print('Initializing session')
    try:
        # Perform login using POST
        data = urllib.urlencode({
            'login_user': USERNAME,
            'login_passwd': PASSWORD
        })
        request = urllib2.Request(URL, data)
        out = urllib2.urlopen(request)
        COOKIE = out.headers.get('Set-Cookie').split('=')[1].split(';')[0]
    except Exception as e:
        print('Session failed to initialize {0}'.format(e))

    print('Getting Patients')
    if COOKIE:
        requests = {
            'Last Name LIKE "Newman"': 'GET/db/patients/LIKE_last_name=Newman',
            'Last Name LIKE "Larson"': 'GET/db/patients/LIKE_last_name=Larson',
            'Last Name LIKE "Bates"': 'GET/db/patients/LIKE_last_name=Bates',
            'Last Name LIKE "Wright"': 'GET/db/patients/LIKE_last_name=Wright',
        }
        for title, url in requests.iteritems():
            print('\\nQuerying for patients: {0}'.format(title))
            # Perform POST request for patient data retrieval
            data = urllib.urlencode({
                'f': 'json',
                'session_id': COOKIE,
                'apistring': base64.b64encode(url)
            })
            request = urllib2.Request(URL, data)
            js = json.load(urllib2.urlopen(request))

            pat_id = js["db"][0]["pat_id"]
            name = js["db"][0]["last_name"]

            print("Getting Documents for Patient:" + pat_id)
            doc_id = downloadDocumentMeta(pat_id)

            if doc_id != "":
                print("Downloading Document:" + doc_id)
                downloadDocument(doc_id, name + "_" + doc_id + ".xml")
            else:
                print("No documents exist for that patient that meet the criteria.")


```
{{% /pre %}}

## Document Export Tool

{{% system-name %}}  has functional tools for importing and exporting documents to the system. The Export Tool is written in Python and can be run on Windows, Mac, or Linux. Conversely, importing documents is done with the [MIE File Import](https://docs.enterprisehealth.com/functions/system-administration/data-migration/mie-file-import/) utility.

![](../application-programming-interface-api.assets/e2b6a93dd8fecf5478d5122ba16e713d.png)

### Requirements

* <strong>Windows:</strong> compiled exe are provided so Windows 7+ is sufficient.
* <strong>Mac 10.8+:</strong> Python 2.7 is shipped with Mountain Lion and greater.
* <strong>Linux</strong>: Python 2.7 or Python 3.1 is required and python-tk. The user interface requires a GUI / window manager.

### Installing

* Download the project from GitHub at https://github.com/mieweb/wcexport
* Windows-compiled EXE files are provided so python does not have to be installed.
* Instructions for use are in the [README.md](https://github.com/mieweb/wcexport/blob/master/README.md) file within the git project.
