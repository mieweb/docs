---
id: '1eC-md4obi6TAx6H-ZIPmjxxvy24MpNym_FPqzjvfR00'
title: 'One-Time Password (OTP) Authentication without requiring an external device or application'
date: '2025-11-08T13:54:43.673Z'
version: 71
lastAuthor: 'anichols'
mimeType: 'text/x-markdown'
links:
  - 'multi-factor-authentication-mfa-require-2fa-system-configuration.md'
  - 'encourage-multi-factor-authentication-mfa-2fa-user-experience.md'
  - 'force-multi-factor-authentication-mfa-2fa-user-experience.md'
source: 'https://drive.google.com/open?id=1eC-md4obi6TAx6H-ZIPmjxxvy24MpNym_FPqzjvfR00'
wikigdrive: 'v2.15.30'
---
A One-Time Password (OTP) is an easy way to add an additional level of security to a user's sign-in to the system, using an OTP function to the user's email, without requiring the user to utilize an external device or application. Requiring an OTP (via email instead of a device app) as part of the sign in experience can be enabled in a user's security role using the permission.

## One-Time Password (OTP) Emailed

![](./one-time-password-otp-authentication-without-requiring-an-external-device-or-application.assets/2758271fa8310044c28b896c0d4b0bbc.png)

The *OTP Required* security permission setting controls whether users are required to provide an OTP when logging in. Users who are configured (via a different security permission) to be encouraged or required to setup an MFA/2FA account on an Authenticator App on an external device will use that for their MFA/2FA instead. Only one OTP will be requested at sign in.

### User Experience as OTP Required via Email

The user manually logs in with their username/email and then keys in their unique password.

![](./one-time-password-otp-authentication-without-requiring-an-external-device-or-application.assets/cbd926de5557886a5334fce43eec1a6c.png)

Once their username and password have been authenticated, they will be prompted to select an OTP notification method.

### Extra Authentication Needed

In order to utilize the OTP email method, the user must have their email address on their chart and/or user screen in the {{% system-name %}} system.

1. Their next screen will ask for Extra Authentication Needed.
2. The user will need to click on the bar/button to <em>Email</em> to their email address. Clicking on the email notification option will request an OTP (one-time password) be created and delivered by the {{% system-name %}} system.

![](./one-time-password-otp-authentication-without-requiring-an-external-device-or-application.assets/cbb4b091ae4a6e4cba4130bb6c9865e1.png)

The user will then be alerted that the OTP has been sent. For security reasons, replacement OTPs may only be requested after a certain amount of time has elapsed since the previous request. The time remaining will be shown, and decrement accordingly.

![](./one-time-password-otp-authentication-without-requiring-an-external-device-or-application.assets/44f3531ae2264691e8163f5a75dbe3f1.png)

Once the request timer terminates, and if the user had not entered their unique generated OTP (that was emailed to them), the screen will allow the user to request a new OTP and can click on the bar/button to *Email* to their email address again.

![](./one-time-password-otp-authentication-without-requiring-an-external-device-or-application.assets/c16d2f5d5f1afc688fb02bae3007e9f5.png)

However, if the user attempts to request a new OTP **before** the timer has expired, the user will receive a rejection notice if they click the bar/button to *Email* to their email address again.

![](./one-time-password-otp-authentication-without-requiring-an-external-device-or-application.assets/d6a8683cf8b458b8dad5c50f4a215eed.png)

Regardless of the number of OTPs requested, after 30 minutes have elapsed, a user will need to restart the login request before being permitted to request additional OTPs.

![](./one-time-password-otp-authentication-without-requiring-an-external-device-or-application.assets/87aaa07d0cc7ad98b7fa14a0755d6207.png)

#### Email Notification of OTP

The default email notification of OTP is the following, however your {{% system-name %}} system may have a customized OTP Email Layout to provide other verbiage.

![](./one-time-password-otp-authentication-without-requiring-an-external-device-or-application.assets/17b5c463e7ce20056dd8f69e6ffa0fe5.png)

#### Incorrect Entered OTP

Entering an incorrect OTP will result in an error message, as well as counting as a failed log in attempt.

![](./one-time-password-otp-authentication-without-requiring-an-external-device-or-application.assets/e944512f03c66a4d31ead46c3ab9b64c.png)

## Email OTP Configuration Options

### System Settings

The following system settings relate to the OTP Email functionality:

![](./one-time-password-otp-authentication-without-requiring-an-external-device-or-application.assets/d8a3fc92ebc8cc19283d86ed21f4a6be.png)

* <strong>Enable Bypass 2FA OTP</strong>: defaults as disabled, but when enabled allows users whose device is detected as having an IP Address within a configured "In Network" location are able to bypass the prompt for an OTP prior to sign in.  See other help guide [Multi-Factor Authentication MFA / Require 2FA System Configuration](multi-factor-authentication-mfa-require-2fa-system-configuration.md) on how System Administrators can configure IP addresses to bypass MFA/2FA.
* <strong>OTP CSRF Valid Minutes:</strong> defaults to 30 minutes and specifies the maximum amount of time that a user may continue to request OTPs before they must re-enter their manual username and password. This setting allows tightening the window of time when replay attacks are available against the user's account.
* <strong>OTP Length:</strong> defaults to 6 and sets the number of characters present in the generated OTP. This setting can allow for a longer OTP, up to 20 characters, to further increase the difficulty of attackers attempting to compromise a user account.
* <strong>OTP Request Delay Seconds:</strong> defaults to 30 seconds and specifies the minimum amount of time which must elapse before an additional OTP request may be made against the system. This setting allows rate-limitting a potential attacker in order to further protect a compromised account against unwanted OTP forcing.
* <strong>OTP Valid Seconds:</strong> defaults to 15 minutes (900 seconds) and specifies the maximum amount of time during which a generated OTP will be accepted by the system before it expires. User entry of expired OTPs count as a login failure and are counted as such, potentially resulting in locked user accounts. This setting allows shortening the window during which an OTP delivered to an account can be utilized for attacks against the account.
* <strong>Failure Delays:</strong> is shared with the standard sign-in system and introduces a set minimum processing duration for executing user credential validation in order to mitigate timing attacks against the system. This duration should be as close to the duration of a successful authentication as possible to minimize the delay experienced by the user while also hiding failure details from potential attackers.
* <strong>Autoreply:</strong> is shared with many other functions within the system and specifies the sending ‘<em>from'</em> email address used for email-based OTP notification messages.

### Translations

English strings presented to the end user are translatable using the context of "Login". These include UI prompts shown on the OTP screens, error strings returned by an OTP generation request and dynamically generated elements related to the OTP generation and validation.

### Compatibility with User 2FA

A user who has chosen to configure an Authentication Device or 2FA Mobile Application for themselves will be prompted for the OTP from their device or application instead of a system generated OTP delivered by the system via email.

While it is possible to "Encourage" or "Require" using the "Require 2FA" security permission, while at the same time setting a security role to "Yes" for the "OTP Required" security permission - only one OTP will be requested at sign in.

Instead, the user entering the generated OTP at their first sign in would then be prompted to also provision their 2FA application or device. Doing so would then allow them to skip the generated OTP request and only utilize the OTP from their 2FA device during future sign in attempts.

While the system setting "Enable Bypass 2FA OTP" allows specific configured IP addresses to bypass the OTP prompt, MFA/2FA device users who selected the "Every Login (Maximum Security)" option when they provisioned their device will ignore this ‘bypass 2FA' configuration and still be prompted for their 2FA OTP every time they attempt a sign in, regardless of their IP Address at the time.

## Additional Resources

* [Multi-Factor Authentication MFA / Require 2FA System Configuration](multi-factor-authentication-mfa-require-2fa-system-configuration.md)
* [Encourage Multi-Factor Authentication MFA/2FA User Experience](encourage-multi-factor-authentication-mfa-2fa-user-experience.md)
* [Force Multi-Factor Authentication MFA/2FA User Experience](force-multi-factor-authentication-mfa-2fa-user-experience.md)
