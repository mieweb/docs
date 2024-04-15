---
id: '1NfgcM3b-g6oyM7u28jlav8HG9XoLCaau1JmfiH_U1w4'
title: 'Inbound Application Installation: dicomd'
date: '2020-03-24T15:49:30.238Z'
version: 46
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1NfgcM3b-g6oyM7u28jlav8HG9XoLCaau1JmfiH_U1w4'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
The following will assist users with installing the dicom inbound application. To begin, simply initiate the installation of the webchart-dicom RPM.
```


$] yum install webchart-master-dicom-5-1389208344.el6.i686.rpm   
Loaded plugins: changelog, downloadonly, fastestmirror, security, tmprepo, versionlock
Loading mirror speeds from cached hostfile
Setting up Install Process
Examining webchart-master-dicom-5-1389208344.el6.i686.rpm: webchart-master-dicom-5-1389208344.el6.i686
Marking webchart-master-dicom-5-1389208344.el6.i686.rpm to be installed
Resolving Dependencies
--> Running transaction check
---> Package webchart-master-dicom.i686 0:5-1389208344.el6 will be installed
--> Finished Dependency Resolution

Dependencies Resolved

====================================================================================================================================
 Package                        Arch          Version                   Repository                                             Size
====================================================================================================================================
Installing:
 webchart-master-dicom          i686          5-1389208344.el6          /webchart-master-dicom-5-1389208344.el6.i686           10 M

Transaction Summary
====================================================================================================================================
Install       1 Package(s)

Total size: 10 M
Installed size: 10 M
Is this ok [y/N]: y
Downloading Packages:
Running rpm_check_debug
Running Transaction Test
Transaction Test Succeeded
Running Transaction
  Installing : webchart-master-dicom-5-1389208344.el6.i686                                                                 1/1   
  Verifying  : webchart-master-dicom-5-1389208344.el6.i686                                                                 1/1   

Installed:
  webchart-master-dicom.i686 0:5-1389208344.el6                                                                   

Complete!

```

## dicomd Configuration

1. Under /usr/local/webchart/dicom/ users will find two files:
    1. a config file
    2. run.dicomd.RCXXXXXX file
2. Edit the config file and specify an AE title and EH configuration file. The first field is the AE Title for the PACS. The second field is the location of the EH configuration file used to connect to the EH database. The other fields may be left as default, as appropriate.
```
# Server AE, webchart.conf location, cache png 1/0, keep dcm after compressing 1/0, unused, look for encounter 1/0, Stage to set when study finishes (on disconnect)
DICOMTEST,"/usr/local/webchart/configs/dicomtest.conf",1,0,0,0,0
```

3. Rename the file to config.
4. Copy the run.dicomd.sample.RCXXXXXX file to run.dicomd. Verify the following script correctly references the config file, the apache user, and the desired port number.

```
#!/bin/bash
cd /usr/local/webchart/dicom
echo "Starting DICOM Daemon."
./dicomd -c -p -b -f -u apache config 3000

```

5. When ready, run ./run.dicomd. This script can be added to rc.local. Users may include dicom in /etc/inittab

{{% tip %}}
Users will need to include the ./dicomd command, because run.dicomd does not stay running. It spawns dicomd and exits.
{{% /tip %}}
