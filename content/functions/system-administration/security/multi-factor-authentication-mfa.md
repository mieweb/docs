---
id: '1EAfp2EiYJj78zRMUjj4OSOFhBYGAvANCruMXOh8h5XE'
title: 'Multi-Factor Authentication MFA'
date: '2021-07-16T20:36:51.028Z'
version: 29
lastAuthor: 'Doug Horner'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1EAfp2EiYJj78zRMUjj4OSOFhBYGAvANCruMXOh8h5XE'
wikigdrive: 'ea413e050e00b6645988e5c1b38ac902b1909cdd'
---
# Multi-Factor Authentication


## Overview

WebChart EHR Multi-Factor Authentication (MFA) is available in all systems (RC202009+) but is disabled by default.  Once MFA is enabled for a system, each user requiring MFA needs to be set up individually.

## Security Level

WebChart EHR supports three levels of MFA.  The level of security can be selected on a per-user basis to meet your organization's needs.

* Only for Super-User functions (Least Security)
* When the system deems appropriate (More Security)
* At every login (Maximum Security)

## Password Type

WebChart EHR supports two options for the second factor password:

* Time-based
* Counter-based

MIE strongly recommends a time-based password; however, a counter-based password is an available option for those users that may have difficulty quickly typing a 6-digit number or have a device which does not reliably keep the current time.

## General Set Up

Once MFA is enabled for a system, each user can be configured from their Edit User page.  Setup is completed most easily on a device that has 2D barcode scanning capability by following the prompts in WebChart and on your device; however, setup can also be completed with a device that does not support barcode scanning.
