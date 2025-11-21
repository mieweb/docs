---
id: '1EAfp2EiYJj78zRMUjj4OSOFhBYGAvANCruMXOh8h5XE'
title: 'Multi-Factor Authentication MFA / Require 2FA System Configuration'
date: '2025-11-19T19:43:06.564Z'
version: 605
lastAuthor: 'ashleyhorner'
mimeType: 'text/x-markdown'
links:
  - 'encourage-multi-factor-authentication-mfa-2fa-user-experience.md'
  - 'force-multi-factor-authentication-mfa-2fa-user-experience.md'
  - 'https://docs.enterprisehealth.com/functions/system-administration/security/one-time-password-otp-authentication-without-requiring-an-external-device-or-application/'
source: 'https://drive.google.com/open?id=1EAfp2EiYJj78zRMUjj4OSOFhBYGAvANCruMXOh8h5XE'
wikigdrive: 'v2.15.27'
---
The {{% system-name %}} system supports Multi-Factor Authentication (MFA) or Two-Factor Authentication (2FA) using one-time passwords (OTP):

* Via authentication using an external device or app that generates the OTP
* Via authentication based on an email that generates the OTP

## MFA/2FA Via External Device or App of One-Time Password (OTP)

### Security Role Permission - Require 2FA

Security Role based authentication via a security role permission.  Each individual security role of users can be configured to a specific option in Require 2FA security permission.  The **Require 2FA** security permission has 3 options:

* <strong>No</strong> - users can access the system with a username and password only.  MFA/2FA would not be utilized.
* <strong>Encourage</strong> - users get a screen (after keying in their username and password) to set up MFA/2FA, but allows the user to select ‘set up later' to bypass the set up process.  Users will be prompted each time they log in to set up MFA/2FA until they do so.
* <strong>Force</strong> - requires users to set up MFA/2FA after keying in their username and password.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/4963f432e9c42dcb8a786243747bc438.png)

* <strong>WARNING:</strong> Some interfaces utilize a user account for their functionality.  Typically these interface configured ‘users' are within the security role of <em>Interface User</em>.  An interface configured ‘user' should never be set to require 2FA nor OTP, for the interface to continue to function properly.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/aabb87ecd895f603a916a7e7c0f524a3.png)

### System Setting - Authentication Methods Selections of HOTP or TOTP or Both

If security role users are required to use MFA/2FA of ‘Encourage' or ‘Force', the {{% system-name %}} system supports the Multi-Factor Authentication (MFA) or Two-Factor Authentication (2FA) using one-time passwords (OTP). There are two types of OTP methods:

* HOTP (HMAC-based One-Time Password): Generates a password that changes each time you request it, based on a counter.
* TOTP (Time-based One-Time Password): Generates a password that changes automatically after a set period (usually every 30 seconds), based on the current time.

MIE strongly recommends utilizing the TOTP time-based password, however, an HOTP counter-based password is an available option for those users that may have difficulty quickly typing a specific digit number or have a device which does not reliably keep the current time.

The system setting can be set system wide to force users to use only HOTP (value 1), or only TOTP (value 2).  However, a third option allows the user choice of both methods (value 3) to select one from.  These options provide an extra layer of security when logging in using MFA/2FA. This means users may use an app or device that generates these codes, and users need to enter the one time password (OTP) to advance into the system.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/1789ae49cf7689d82b703a68180b6e08.png)

The difference between** HOTP and TOTP** is:

* <strong>HOTP:</strong> The code changes only when you request a new one (for example, by pressing a button in your app or device). Each code is used once and then a new one is generated the next time you need it.
* <strong>TOTP:</strong> The code changes automatically every set amount of time (usually every 30 seconds), whether you request it or not. You have to use the current code before it expires and a new one appears. MIE recommends this setting.

In short:

* <strong>HOTP</strong> = code changes when you ask for it
* <strong>TOTP</strong> = code changes on its own, based on an amount of time

#### Authentication Method Examples

Here are some examples of each MFA/2FA authentication method option for the system setting value.

System Setting Value 3 (allow both HOTP or TOTP) what user sees when logging in:

System setting ‘Use 2FA' is set to value 3 (offers either HOTP or TOTP for the user to select):

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/d61d4ff2d87469c31b58301f8c95ded9.png)

System Setting Value 2 (allow only TOTP) what user sees when logging in:

System setting ‘Use 2FA' is set to value 2 (TOTP time based):

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/57d05d3b7428ab161d3ebf52706571ee.png)

System Setting Value 1 (allow only HOTP) what user sees when logging in:

System setting ‘Use 2FA' is set to value 1 (HOTP counter based):

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/a0e155f059e5f5baf070cc58bc3f12c1.png)

## Extra Authentication via Email of One-Time Password (OTP)

### Security Role Permission - OTP Required

Security Role based authentication via a security role permission.  Each individual security role of users can be configured to Require OTP (via email) security permission.  The **OTP Required** security permission has 2 options:

* <strong>Yes</strong> - Requires users to sign in with their username and password but in addition requires them to include a one-time password (OTP) that will be generated by the system and emailed to them instead of using an external device or app to generate the OTP.  An email must be on the user's chart.
* <strong>No</strong> - will not require the user to receive an OTP emailed for login requirements

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/2f2ee56c22e0b10818559e5b7fe5f426.png)

While it is possible to "Encourage" or "Require" using the other *Require 2FA* security permission, while at the same time setting a security role to "Yes" for this *OTP Required* security permission - only one OTP will be requested at sign in.  The *Require 2FA* security permission of ‘encourage' or ‘force' would instead, have the user' OTP at their first sign in would be prompted to also provision their 2FA application or device. Doing so would then allow them to skip the generated OTP request and only utilize the OTP from their 2FA device during future sign in attempts.

#### Emailed OTP

Default email notification of OTP:

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/17b5c463e7ce20056dd8f69e6ffa0fe5.png)

#### Emailed OTP Layout

The system provides for a default OTP notification email. Custom notification emails may be generated utilizing a non-standard layout. module: "OTP", name: "OTP Notification Email" will have access to @user_id as well as @user_otp when generating an email notification to the end user.

What user sees when logging in:

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/cbb4b091ae4a6e4cba4130bb6c9865e1.png)

## IP's Allowed to Bypass 2FA Configuration

The system can be configured to bypass 2FA from specific known IP addresses. It is recommended that customers have reviewed this feature with their Network IT security department and have authorization before proceeding with configuration.

### System Setting - Enable Bypass 2FA OTP

The system setting *Enable Bypass 2FA OTP* is disabled by default.  This can be enabled by an MIE Deployment Consultant or a system administrator with specific security permission. When enabled, users whose device is detected as having an IP Address within a configured "In Network" location are able to bypass the prompt for an OTP prior to signing in.   However, 2FA device/app users who selected the "*Every Login (Maximum Security)*" radio button option when they provisioned their device will ignore this setting and still be prompted for their 2FA OTP every time they attempt a sign in, regardless of their IP Address at the time.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/2c282daaa8eee2b142e1f9eceacb1587.png)

If *OTP Required* security permission (emailed OTP) is yes, and this system setting to Enable Bypass 2FA OTP is enabled, the user is identified as "In Network" and has configured a 2FA device with the "When the system deems appropriate (More Security)" option, the user will be permitted to sign in *without* having entered an OTP (regardless of the "Require 2FA" level) as the individual selection for "When appropriate" coupled with the relaxing of requirements by the system setting of "allow in network" is given higher priority than the requirements of the general OTP options.

#### IP Settings

Gather the specific IP's which 2FA is allowed to bypass. Next, go to *IP Settings* found within the Control Panel.  Again, you must have security permission to Manage IP Settings to access this screen.  Verify the IP Address doesn't already exist to be allowed to Bypass 2FA in the datavis listing.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/ce520ab2dbea96119774ca78915b0e78.png)

NOTE: In order to configure IP addresses to be able to Bypass 2FA, you must have security permission to *Manage IP Settings* as Yes.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/9fc6b482b3bf9efaef5e43c39248d635.png)

#### Add Acceptable IP Rules

To add an IP address to be able to bypass 2FA, simply click the Add Acceptable IP Rule hyperlink found at the top right of the IP Settings.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/56e82e18898099f7a80d26bc9305283e.png)

Within the *Add Acceptable IP Rules*, type in the specific IP Address and have the *Bypass 2FA* checkbox marked.  Add to save your work.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/7b568f2bb8f5254e3fddfe478755cbfc.png)

Once the IP address(es) have been added to the IP Settings, set the system setting *Enable Bypass 2FA OTP* to enabled value.  This will allow those known configured IP addresses to skip MFA/2FA.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/d6360d957ba93ff846b45217155a8d52.png)

## Other System Settings Related to OTP

There are other system settings related to the OTP functionality:

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/d8a3fc92ebc8cc19283d86ed21f4a6be.png)

* <strong>OTP CSRF Valid Minutes:</strong> defaults to 30 minutes and specifies the maximum amount of time that a user may continue to request OTPs before they must re-enter their manual username and password. This setting allows tightening the window of time when replay attacks are available against the user's account.
* <strong>OTP Length:</strong> defaults to 6 and sets the number of characters present in the generated OTP. This setting can allow for a longer OTP, up to 20 characters, to further increase the difficulty of attackers attempting to compromise a user account.
* <strong>OTP Request Delay Seconds:</strong> defaults to 30 seconds and specifies the minimum amount of time which must elapse before an additional OTP request may be made against the system. This setting allows rate-limitting a potential attacker in order to further protect a compromised account against unwanted OTP forcing.
* <strong>OTP Valid Seconds:</strong> defaults to 15 minutes (900 seconds) and specifies the maximum amount of time during which a generated OTP will be accepted by the system before it expires. User entry of expired OTPs count as a login failure and are counted as such, potentially resulting in locked user accounts. This setting allows shortening the window during which an OTP delivered to an account can be utilized for attacks against the account.
* <strong>Failure Delays:</strong> is shared with the standard sign-in system and introduces a set minimum processing duration for executing user credential validation in order to mitigate timing attacks against the system. This duration should be as close to the duration of a successful authentication as possible to minimize the delay experienced by the user while also hiding failure details from potential attackers.
* <strong>Autoreply:</strong> is shared with many other functions within the system and specifies the sending ‘<em>from'</em> email address used for email-based OTP notification messages.

## Individual User MFA/2FA Managing by a System Admin via Access Control

Once MFA/2FA is configured for specific security roles, an individual user can be setup, reset, or re-provisioned from their Edit User page within Access Control by a System Administrator with rights.  Setup is completed most easily on a device that has 2D barcode scanning capability by following the prompts in {{% system-name %}}  and on your device; however, setup can also be completed with a device that does not support barcode scanning.

### Not Enabled - Setup (on Edit User in Access Control)

From within the Access Control screen, search for an individual user and click to Edit the User.  Once in the Edit User screen, there is a *2 Step Verification* field that will display. This shows if the user is enabled for MFA/2FA or not enabled.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/b1ddf3e84e30cc6d4654296117e90bea.png)

In most cases, the individual user will also need to be present with the system administrator to have their device ready in order to setup their 2FA/MFA.

Click the Setup hyperlink from the Edit User screen.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/88b3f48b48dd5ddd68c40900f874d040.png)

A pop-up window offering TOTP and/or HOTP (depending on system setting configured) will be displayed. Select the options and click the Create button.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/94ff7dea6d3e88992a38b61462a7caa9.png)

The rest of the steps will mimic the user experience side. Please refer to the other user experience guides:

* [Encourage Multi-Factor Authentication MFA/2FA User Experience](encourage-multi-factor-authentication-mfa-2fa-user-experience.md)
* [Force Multi-Factor Authentication MFA/2FA User Experience](force-multi-factor-authentication-mfa-2fa-user-experience.md)

After clicking *Complete Setup*, you will receive a pop-up message if 2 Step Verification was successfully completed for the user.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/48dd919e8de7fd0f21e78a271f96ab1c.png)

### Enabled - Change (on Edit User in Access Control)

From within the Access Control screen, search for an individual user and click to Edit the User.  Once in the Edit User screen, there is a *2 Step Verification* field that will display. This shows if the user is enabled for MFA/2FA or not enabled.

In most cases, the individual user will also need to be present with the system administrator to have their device ready in order to change their 2FA/MFA.

Click the Change hyperlink from the Edit User screen.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/61819ae3d9d89a2b257509b04d426855.png)

The *Change 2 Step Verification* pop-up window will display a message asking if you want to disable the user's MFA/2FA or want to set up MFA/2FA for the user on their new device.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/e33e533f7faa32a71537f0df0d99e743.png)

#### Disable

To disable the user's 2 step verification, hit the Disable button.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/aa013bbe84d0cdd532b77cf3f5f530c6.png)

Upon hitting the Disable button, the message displayed will alert you that their 2 Step Verification is now disabled.  The user should remove the account on their own authentication app being used on their device.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/c70ca1b4e7788d47f31b2f205c3f28ad.png)

Click the X on the pop-up window to close out.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/689785c4caa0685678f3120a09d5136a.png)

The user (once you exit the Edit User screen completely) will revert back to Not Enabled status for 2 Step Verification.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/4e793fc59f10e343c6c1ca78395a100e.png)

#### Setup New Device

To change and setup the user's 2 step verification on a new device, hit the Setup New Device button.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/b09753dfebd17fa84ba09a162dde7c0e.png)

Select the desired selections from the 2 Step Verification pop-up.  Selections depend on the system wide system setting configured.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/7bb926a815bb2f1ea7382706b0fb551d.png)

### One Time Password (OTP) Emailed

A One-Time Password (OTP) is an easy way to add an additional level of security to a user's sign-in to the system without requiring them to utilize an external device or application.

Requiring an OTP as part of the sign in experience can be enabled in a user's security role permissions using the **OTP Required** permission.

![](../multi-factor-authentication-mfa-require-2fa-system-configuration.assets/2758271fa8310044c28b896c0d4b0bbc.png)

For more information on utilizing an additional level of security to a user's sign-in to the system without requiring them to have an external device or app, please refer to [One-Time Password (OTP) without requiring an external device or application](https://docs.enterprisehealth.com/functions/system-administration/security/one-time-password-otp-authentication-without-requiring-an-external-device-or-application/) guide.

### Additional Resources

* [Encourage Multi-Factor Authentication MFA/2FA User Experience](encourage-multi-factor-authentication-mfa-2fa-user-experience.md)
* [Force Multi-Factor Authentication MFA/2FA User Experience](force-multi-factor-authentication-mfa-2fa-user-experience.md)
* [One Time Password Authentication via Email User Experience](https://docs.enterprisehealth.com/functions/system-administration/security/one-time-password-otp-authentication-without-requiring-an-external-device-or-application/)

{{% only sys="wc" type="INLINE" %}}

#### Enabling 2FA/MFA for users

{{< youtube m5bUwJ63xyI >}}

#### Enabling 2FA/MFA for admin

{{< youtube F2t7S0aCkAk >}}

{{% /only %}}
