---
id: '1EAfp2EiYJj78zRMUjj4OSOFhBYGAvANCruMXOh8h5XE'
title: 'Multi-Factor Authentication MFA'
date: '2025-07-22T16:18:55.952Z'
version: 254
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1EAfp2EiYJj78zRMUjj4OSOFhBYGAvANCruMXOh8h5XE'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
## Multi-Factor Authentication

### Overview

WebChart EHR Multi-Factor Authentication (MFA) is available in all systems (RC202009+) but is disabled by default.  Once MFA is enabled for a system, each user requiring MFA needs to be set up individually.

### Security Level

WebChart EHR supports three levels of MFA.  The level of security can be selected on a per-user basis to meet your organization's needs.

* Only for Super-User functions (Least Security)
* When the system deems appropriate (More Security)
* At every login (Maximum Security)

### Password Type

WebChart EHR supports two options for the second factor password:

* Time-based
* Counter-based

MIE strongly recommends a time-based password; however, a counter-based password is an available option for those users that may have difficulty quickly typing a 6-digit number or have a device which does not reliably keep the current time.

### General Set Up

Once MFA is enabled for a system, each user can be configured from their Edit User page.  Setup is completed most easily on a device that has 2D barcode scanning capability by following the prompts in WebChart and on your device; however, setup can also be completed with a device that does not support barcode scanning.

## WebChart/Enterprise Health 2FA Provisioning

### Setup

Screen change in User Edit:

![](../multi-factor-authentication-mfa.assets/f3a5bd534a577f711cf79378036537be.png)

Setup Help Bubble:

![](../multi-factor-authentication-mfa.assets/d8b4ec6272fdcba0b04b05597990ef72.png)

Click the Setup link, JS Window (TOTP and HOTP available):

![](../multi-factor-authentication-mfa.assets/328b94e9af632da5d1225af24a1309cd.png)

Device setup, options selected (HOTP and TOTP available) or initial view (only HOTP or TOTP):

![](../multi-factor-authentication-mfa.assets/2bd6b56aa671b3becd298e46183f20b2.png)

Device setup, post-"Click Here":

![](../multi-factor-authentication-mfa.assets/67ed42fc854bfc8a8d550f67dc09bdab.png)

Enter the OTP from your device to enable the ‘Complete Setup' button

![](../multi-factor-authentication-mfa.assets/edf443908378eb59193f99783a461665.png)

Tabbing through the OTP input without entering a value actively prompts the user for an OTP

![](../multi-factor-authentication-mfa.assets/0ef0709315d858496a527f5bc177c81a.png)

Click ‘Complete Setup'

![](../multi-factor-authentication-mfa.assets/e3718eb48ef3a5d1e4c7b337a0c9ce80.png)

User Edit screen, with 2 Step enabled:

![](../multi-factor-authentication-mfa.assets/c14545e47aa72d39cf5612276694fbd7.png)

Click ‘Change' link, JS Window:

![](../multi-factor-authentication-mfa.assets/0294ec66e6df63bc3c622d49ab3bd727.png)

Click ‘Setup New Device' loads the original Setup link JS Window.

Click ‘Disable':

![](../multi-factor-authentication-mfa.assets/84a320dd1de9237ac0f0782eba9213a7.png)

Change to My Settings page:

![](../multi-factor-authentication-mfa.assets/8171bc52527fbd248439797c5bbd4d83.png)

Change to My Settings page, 2 Step enabled:

![](../multi-factor-authentication-mfa.assets/855a0fc4ed3664253d2a1e11fef3dbd5.png)

Change to View User, 2 Step disabled:

![](../multi-factor-authentication-mfa.assets/89131d34e76a260ffce347968f53442d.png)

Change to View User, 2 Step enabled:

![](../multi-factor-authentication-mfa.assets/16e29659674c430a3b2e3583b466dac7.png)

Verify help bubble:

![](../multi-factor-authentication-mfa.assets/28f002fcd5c9200d5d0f90fc5ff04fe5.png)

View User screen, after clicking ‘Verify':

![](../multi-factor-authentication-mfa.assets/9401ef90fb6235472ee7802b1cf947aa.png)

### User Experience

### Login validation using OTP

This workflow applies when the user's challenge level is set higher than ‘Only for Super-User functions'.

To receive the prompt on every login, select the ‘Every Login' option at signup.

![](../multi-factor-authentication-mfa.assets/832b67936e2e69857641ddda585d3829.png)

The login page functions as normal

![](../multi-factor-authentication-mfa.assets/a02753d18c86c50a9867f33472bae5e9.png)

The user will then be prompted for their OTP

![](../multi-factor-authentication-mfa.assets/f49960b3839d99289f85e5bdb997d3e4.png)

### Verify

Corresponds to the Check Key Value option in Google Authenticator:

![](../multi-factor-authentication-mfa.assets/8a1d5bc0488470dd86c631c7bb76dfef.png)

Which displays the OTP for counter=0:

![](../multi-factor-authentication-mfa.assets/644750822961920ba4100e9b4a478eb2.png)

## Require 2FA Upon Log In

### Setup

The Require 2FA (two factor authentication) system setting has been removed and replaced with a Security Role setting as of RC202509 and newer. System Administrators may select the Require 2FA (require it for all users in the designated security role), Encourage (request users in the designated security role to set up 2FA when logging in, but let the user choose to bypass the set up process, however, users will be prompted each time they log in to set up 2FA until they do so. Or Force, which will require all users in the designated security role to set up 2FA.

![](../multi-factor-authentication-mfa.assets/4963f432e9c42dcb8a786243747bc438.png)

The user must also have a valid username and password set.

### User Experience

Log in using your Enterprise Health or WebChart login

![](../multi-factor-authentication-mfa.assets/23c9b0b1485503242d4de2cc9229d456.png)

Enter your Enterprise Health or WebChart Password

![](../multi-factor-authentication-mfa.assets/6c2a16e1ac94e5a7433fac9ddda4a341.png)

Enter the appropriate response to the question, "Does your device support scanning a barcode?" Yes/No and "Which password type would you like to use" Time Based/Counter Based. Users can click the X in the upper right hand corner and bypass setting up the 2FA process. The user will continue to be prompted upon each login to set up 2FA until they do so.

![](../multi-factor-authentication-mfa.assets/b1bcbfe18b295abf04c12f7b8f9b5c2a.png)

If using a phone or other device with a camera, scan the QR code from your authentication application. (For example, Google authenticator, MS authentication, etc)

![](../multi-factor-authentication-mfa.assets/073e571209a590b31a62629bfd55a805.png)

Obtain the OTP (One Time Password)/code from the authenticator application.

![](../multi-factor-authentication-mfa.assets/8b5a1abc1c57d49f29dfd10086b68c86.png)

Enter the OTP (One Time Password) in the *Enter the OTP from your device* field and then click the *Complete Setup* button.

![](../multi-factor-authentication-mfa.assets/7bac61cb308f80988d45aaf548efffe4.png)

A confirmation message will display once the set up is complete.

![](../multi-factor-authentication-mfa.assets/5a7eebde04dad76358d7eea81822e52e.png)

## Super User Approval

### Setup

Update to View of 2FA'd Users when Super User is active.

![](../multi-factor-authentication-mfa.assets/6397e1d3118c1d1d9fe50b320819a8f6.png)

Authorize Help Bubble

![](../multi-factor-authentication-mfa.assets/d8f3b715da50771df9728765a1fffe97.png)

Authorize 2FA for Super User access

![](../multi-factor-authentication-mfa.assets/ba7c41aaa386095945ab66418ad6f788.png)

Successful Authorization

![](../multi-factor-authentication-mfa.assets/23859254b4397bd2ae0fa9429c361f62.png)

Update to View User when Super User is active and user has been Authorized.

![](../multi-factor-authentication-mfa.assets/f295b0b6864ba416bcd0b42e4f8f9619.png)

Remove Super User access

![](../multi-factor-authentication-mfa.assets/b8f3dd0b87a12fa0305ea1177b74d31b.png)

Super User authorization successfully revoked

![](../multi-factor-authentication-mfa.assets/f0f593a3320ddc1f8834418805202d91.png)

Super User Portlet without Super User access

![](../multi-factor-authentication-mfa.assets/25008f6e4b587c409e7ea4c644b01f31.png)

Super User Portlet with Super User access

![](../multi-factor-authentication-mfa.assets/64b73efe841dfb7c9b68d625339335cf.png)

### User Experience

Enter the OTP from the Super User authorized 2FA device

![](../multi-factor-authentication-mfa.assets/3e6f2dcccda5f97eb4c24326b86864c0.png)

If OTP is accepted:

![](../multi-factor-authentication-mfa.assets/1312dbf1cee3a544141ee868e11a1a3a.png)

## NMC 2FA Provisioning

### Setup

Addition of Account Security on Member Summary page:

![](../multi-factor-authentication-mfa.assets/d0d130a7e533ff5c5b602ff31f38c560.png)

New Account Security Page (More verbiage to follow):

![](../multi-factor-authentication-mfa.assets/cdc35d3ee3c6891271acb4f7c3f756ae.png)

After clicking Setup (TOTP and HOTP available):

![](../multi-factor-authentication-mfa.assets/025c0b1f93c54e2f60434701a1556c3e.png)

After clicking ‘Create' with barcode ‘Yes' selected (HOTP and TOTP available) or after clicking ‘Setup' (HOTP or TOTP only):

![](../multi-factor-authentication-mfa.assets/06898b06bab951b3f93cdf4a2514dc28.png)

After clicking ‘Create' with barcode ‘No' selected:

![](../multi-factor-authentication-mfa.assets/6ec038ad2e735ad0852b1ce375c6435c.png)

After clicking ‘Complete Setup':

![](../multi-factor-authentication-mfa.assets/d7b0c29f19ce8e6ff3a26a8a8fc56b69.png)

Account Security screen, with 2FA configured (more verbiage to follow):

![](../multi-factor-authentication-mfa.assets/a31e6772a873cd7d8df64510a37a0860.png)

After clicking ‘Change':

![](../multi-factor-authentication-mfa.assets/5b7d3315875c353a7ef380f3648bf0fa.png)

After clicking ‘Disable':

![](../multi-factor-authentication-mfa.assets/c16b56dc4dae2c8bf6c3c70bce415862.png)

After clicking ‘Setup New Device' (HOTP and TOTP available) else, barcode screen shows:

![](../multi-factor-authentication-mfa.assets/d08eaef1444f33fecf66a63d13263d24.png)

### User Experience

Login Screen:

![](../multi-factor-authentication-mfa.assets/9bbb179ff064ee6618c6d67703abf691.png)

After Log On:

![](../multi-factor-authentication-mfa.assets/013095ba1cc0a713cf28e482773b8ce2.png)

After failed Verification (increments failed login count):

![](../multi-factor-authentication-mfa.assets/925ce15cfff0fc4a85b40370ebf1c66d.png)

Correct Verification code allows login.

**Google Authenticator Images**

![](../multi-factor-authentication-mfa.assets/72ca0989d72e6f0b0709b48e9f99d1a0.png)

![](../multi-factor-authentication-mfa.assets/fcdb107112174b82cc90d437945a3236.png)

![](../multi-factor-authentication-mfa.assets/5e4ed6372b563b1e50af9e7eb269b1f6.png)

## ByPass 2FA OTP

System Administrators may opt to bypass 2FA from certain IP's. It is recommended that customers have reviewed this feature with their Network IT security department and have authorization before proceeding with configuration. Before enabling, define the IP's which 2FA is allowed to bypass. This can be done in the IP Settings (Control Panel->System->IP Settings)

![](../multi-factor-authentication-mfa.assets/8d6af9cbb73b44cd83ec85fb65c72b09.png)

Select the *Add Acceptable IP Rule* link in the upper right hand corner of the screen. Enter the appropriate IP address, Netmask, Timeout, and ensure the Bypass 2FA box is selected, then click Add.

![](../multi-factor-authentication-mfa.assets/6ca107ab3647017e7ad3777d6203a906.png)

Once the IP address(es) have been added to the IP Settings, enable the "Enable Bypass 2FA OTP" system setting value to "Enabled".

![](../multi-factor-authentication-mfa.assets/22da368b579efb1609908b116dfc9dae.png)
