---
id: '1LUQDaYVkwIlzJeQVnhKNNptNldHsZFO23GmfXdkv_d8'
title: 'Password Reset - Non SSO'
date: '2025-11-25T18:36:17.519Z'
version: 105
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1LUQDaYVkwIlzJeQVnhKNNptNldHsZFO23GmfXdkv_d8'
wikigdrive: 'v2.15.30'
---
Though we recommend system access to be utilizing Single Signon (SSO) functionality, there may be a need for manual login and password configured access. Such as pickup code/activation code portal methods.  For any systems that do have a manual login/password configured access, password management can be cumbersome for a help desk.  There is a PINCODE method for those such users to manually reset their password themselves.

Manually being able to reset their password from the login screen can be done if there is at least a birthdate on the user's chart and an email on the user's chart.  Users being able to manually reset their own passwords do not require any unique security permission.

## Password Reset from Login Screen (Non-SSO only)

The user will key in their username, which is to be their unique email address, on the login screen.  Then click NEXT.

![](./password-reset-non-sso.assets/a0030147371d752c5352c183847addd2.png)

Next is the password screen.  If the user does not remember their password, the user can click *Forgot your* *password**?* hyperlink.

![](./password-reset-non-sso.assets/636d08c93b79dd083cf317bc74003932.png)

The user must verify a demographic element, before they can proceed to request to reset their password since they forgot their password.   From the drop-down, select the demographic element to verify a match to.

![](./password-reset-non-sso.assets/cf0c043dc26c0ff5b05ecd8881276f1d.png)

NOTE: Not all of these demographic field choices may appear in the drop-down.  It depends on what demographic elements exist in the user's chart itself.  At minimum, we require an email and birth date on the chart to use a manual login/password method.

![](./password-reset-non-sso.assets/06ae594174490af2a2bab583c9fadc57.png)

After the demographic validation, the user will be redirected to the *password reset* screen where the user has to key in their unique username once again (typically their email address) then click the SUBMIT button.

![](./password-reset-non-sso.assets/7c6f8740ff4c6f2f17c5e7a73f2b188a.png)

At the time of submit, an email will be sent to that user indicating that a password reset attempt has been made.

![](./password-reset-non-sso.assets/fadb5cffb317ade533c743974526969c.png)

Back on the *password reset* screen, the Identity Verification pop-up window will appear.  This is where the user can select the appropriate radio button as to how to receive the unique PIN code that will be sent to allow them to reset their password. Typically, only the *email* radio button option will appear for the PIN code to be sent to, however depending on how your system is set up to utilize other functions such as SMS or Phone Calls (and depending on what demographic data the chart contains), there may be other radio button options that appear.

![](./password-reset-non-sso.assets/31d391fc94e1a0546574dc0b27dd30f5.png)

Once a selection has been made (typically to email the code), the pop-up window will state the PIN Code has been sent.  Click OK to get out of that pop-up window.

![](./password-reset-non-sso.assets/1404a3e087bddd11a6fc8c0f0d2fe595.png)

The PIN Code is sent according to the method selected.  This is an example of the PIN Code being emailed and how the email will be received.

![](./password-reset-non-sso.assets/cc180f146583be2c15870e6fa9bef482.png)

Back on the *password reset* screen, key in the unique PIN Code received and then key in your new password in the *new password* field and again in the *verify password* field.  Click SUBMIT.

![](./password-reset-non-sso.assets/776d69285e4d0b501918d722e97749d0.png)

If successful, it will display that you have successfully updated your password on the screen and to click CONTINUE.

![](./password-reset-non-sso.assets/5c357f8e97cb26fb5cac14ab16be46fb.png)

Upon successful password reset, the user will also receive an email notification of the successful password reset.

![](./password-reset-non-sso.assets/1c521abcd10a4d52abd33bdedc23e24b.png)

After successfully resetting your password and clicked the Continue button on that successful reset notification screen, you will be prompted back to the Login Screen where you will key in your username (typically your email), then the NEXT button will take you to the password screen where you will key in your new password that you reset it to, and will be able to log into the system.

![](./password-reset-non-sso.assets/a0030147371d752c5352c183847addd2.png)

### Tech Support System Setting

The system setting value (contents) for the system setting System / Tech Support / Phone Number will be visible on the password reset screens and email notifications.  Please work with a Deployment Consultant to get this system setting updated to the verbiage and phone number needed for your system.

![](./password-reset-non-sso.assets/e00284c386582c0360566817507c8c1b.png)

Examples of where it is utilized in the password reset experience screens and/or emails:

![](./password-reset-non-sso.assets/dd5a202f70f31f1e2577490545183be6.png)

![](./password-reset-non-sso.assets/de07fe4d1501ab20b1e4cb2056db7e31.png)

![](./password-reset-non-sso.assets/f49285b4fed7eac15d44a6787638d226.png)

## Portal Password Change Option (Non-SSO portals only)

Users that log into a portal with a manual login and password, also have the ability to change their password while logged into the portal. To enable this feature, the portal user's security role setting "Manage Users" must be set to ‘Edit Self'.

![](./password-reset-non-sso.assets/3ec990ae063884d89c07d3e583d2fe97.png)

Once this security permission is configured, users will be able to access the Change Password feature from the Portal Settings menu. SSO portal users will not see the option to reset passwords, as passwords are managed on the client side.

When the user is successfully logged into the portal, click on the SETTINGS sidemenu item.

![](./password-reset-non-sso.assets/66d68629efe1032af56c93940121602d.png)

Once in SETTINGS of the portal, there is a red button *RESET PASSWORD*.  The user can click on that and change their current password and relog in using their new password.

![](./password-reset-non-sso.assets/2bef8b0b45427c9a0eb4344afc97d7c6.png)
