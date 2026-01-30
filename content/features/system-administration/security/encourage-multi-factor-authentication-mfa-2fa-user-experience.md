---
id: "139a3TJ6w0Q3h8rV_1eIhWASQ8YaqteRgbP8dzvPci20"
title: "Encourage Multi-Factor Authentication MFA/2FA User Experience"
date: "2025-11-24T19:42:59.252Z"
version: 152
lastAuthor: "janderson"
mimeType: "text/x-markdown"
links:
  - "multi-factor-authentication-mfa-require-2fa-system-configuration.md"
  - "force-multi-factor-authentication-mfa-2fa-user-experience.md"
  - "one-time-password-otp-authentication-without-requiring-an-external-device-or-application.md"
source: "https://drive.google.com/open?id=139a3TJ6w0Q3h8rV_1eIhWASQ8YaqteRgbP8dzvPci20"
wikigdrive: "v2.15.30"
---

The {{% system-name %}} system supports Multi-Factor Authentication (MFA) or Two-Factor Authentication (2FA) using one-time passwords (OTP):

- Via authentication using an external device or app that generates the OTP
- Via authentication based on an email that generates the OTP

For information on system administrator configuration of MFA/2FA for the system and options, please refer to guide [Multi-Factor Authentication MFA/Require 2FA Configuration](multi-factor-authentication-mfa-require-2fa-system-configuration.md).

## Encourage MFA/2FA Security Permission

This guide is an overview of the ‘Encourage' permission to Require 2FA security permission. It requires an external device/authentication app by the user.

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/8d3034efd55f4adb6cc46dcafac2047d.png)

However, a permission to ‘require' to have users login using Multi-Factor Authentication (MFA) or 2FA is available and an overview of its user experience is in a separate guide. Systems that utilize SSO (single sign-on) will not be affected.

### User Experience as ‘Encourage' security permission users for Require 2FA

The user manually logs in with their username/email and then keys in their unique password.

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/cbd926de5557886a5334fce43eec1a6c.png)

The next screen regarding MFA/2FA will display contents based on what the system wide system setting for _Use 2FA_ is configured to.

However, users get a screen (after keying in their username and password) to set up MFA/2FA, but allows the user to select ‘_set up later'_ to bypass the MFA/2FA set up process. Users will be prompted each time they log in to set up MFA/2FA until they do so.

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/3b9b0d999ccf5522e448734183e278f8.png)

## Setting up MFA/2FA

### System Wide Setting Value 3 (allow both HOTP or TOTP) what user sees when logging in:

System setting ‘Use 2FA' is set to value 3 (offers either HOTP or TOTP for the user to select):

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/d61d4ff2d87469c31b58301f8c95ded9.png)

The User should click the _Create_ button to advance.

### System Wide Setting Value 2 (allow only TOTP) what user sees when logging in:

System setting ‘Use 2FA' is set to value 2 (TOTP time based):

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/57d05d3b7428ab161d3ebf52706571ee.png)

### SystemWide Setting Value 1 (allow only HOTP) what user sees when logging in:

System setting ‘Use 2FA' is set to value 1 (HOTP counter based):

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/a0e155f059e5f5baf070cc58bc3f12c1.png)

### Scan Barcode with Authentication Device App

Make sure to have some authenticator app installed on your external device/phone (ex: Google Authenticator, Microsoft Authenticator).

On the {{% system-name %}} system screen:

- Select Yes for <em>Does device support scanning a barcode</em>
- It is recommended to utilize Time Based
- Click the <em>Create</em> button

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/e2b555c8cc736fe97708cf322b334a9e.png)

The {{% system-name %}} system will generate a unique QR code and displays that on the next screen upon clicking _Create_ button.

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/d7e186bb1bde2f094fc409ff73e8e591.png)

On your external device (ex: smartphone), open the authenticator app you utilize (ex: Google Authenticator, Microsoft Authenticator).

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/6bb61372f006643a2f0bb0c5fb534dd8.png)

- Within the authenticator app, there is an icon ability to ‘Scan a QR code'.
- Point the device camera to the QR code on the {{% system-name %}} system screen.
- Your device authenticator app will now display a unique 6-digit OTP (one-time password) for you to use.

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/fe8437b07508a101d78b752f190fa468.png)

Go back to {{% system-name %}} system screen and _Enter the OTP from your device_. Next, click the _Complete Setup_ button.

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/5ba46b0e60c66685873a1eebd99c3876.png)

If successful, you will see that your 2 Step Verification setup is now complete. Click the _Continue_ button.

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/207c281f1a88463ecbf8b9e2a7aeadd7.png)

You will now advance and gain access into the {{% system-name %}} system.

### Cannot Scan Barcode with Authentication Device App

Make sure to have some authenticator app installed on your external device/phone (ex: Google Authenticator, Microsoft Authenticator).

On the {{% system-name %}} system screen:

- Select No for <em>Does device support scanning a barcode</em>
- It is recommended to utilize Time Based
- Click the <em>Create</em> button

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/f03dd7915b3db2f2f20c9473b22f2efc.png)

The {{% system-name %}} system will generate a unique secret Key and displays that on the next screen upon clicking the* Create* button.

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/26f5db673c182292d18a6e5991157c78.png)

On your external device (ex: smartphone), open the authenticator app you utilize (ex: Google Authenticator, Microsoft Authenticator).

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/6bb61372f006643a2f0bb0c5fb534dd8.png)

- Within the authenticator app, there is an ability to ‘add a new account' typically found within a plus (+) button.
- Click, within the authenticator app, what kind of account you are adding.
- Then select the option, within the authenticator app, to manually enter a setup key instead of scanning a QR barcode.
- Enter the account details by giving it an account name, enter in the Key that the {{% system-name %}} system generated on the {{% system-name %}} login screen. Make sure to type it exactly as it appears.
  - Tap the Finish button or ‘add' or the checkmark within the authenticator app to save the account.
- Your device authenticator app will now display a unique 6-digit OTP (one-time password) for you to use.

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/164dabfb2dd11ead2fbcdff8e9fac419.png)

Go back to {{% system-name %}} system screen and _Enter the OTP from your device_. Next, click the _Complete Setup_ button.

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/5ba46b0e60c66685873a1eebd99c3876.png)

If successful, you will see that your 2 Step Verification account setup is now complete. Click the _Continue_ button.

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/207c281f1a88463ecbf8b9e2a7aeadd7.png)

You will now advance and gain access into the {{% system-name %}} system.

## MFA/2FA Account Setup on an Authenticator

Once the user has setup their MFA/2FA account on an external device authenticator app, the next time they log in to the system, they will not have to create a new MFA/2FA account. They will get a screen (after manually keying in username & password), to key in a new OTP from their authenticator app on their external device.

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/23226df367e8b2c609c9fd8032dc94fd.png)

The user would open up their authenticator app on their other device, get the random generated 6 digit OTP from their authenticator app, and key it into the {{% system-name %}} system _extra authentication needed_ screen.

![](./encourage-multi-factor-authentication-mfa-2fa-user-experience.assets/de79e2aa6a3f7a0fe250f0a23c44ae3a.png)

## Additional Resources

- [Multi-Factor Authentication MFA/Require 2FA System Configuration](multi-factor-authentication-mfa-require-2fa-system-configuration.md)
- [Force Multi-Factor Authentication MFA/2FA User Experience](force-multi-factor-authentication-mfa-2fa-user-experience.md)
- [One Time Password Authentication via Email User Experience](one-time-password-otp-authentication-without-requiring-an-external-device-or-application.md)
