---
id: '14nZ_onNh6o0_pXmofucaruvpnQLpHygvPoPC4oL8g-g'
title: 'Password Rules and Settings'
date: '2026-11-13T14:08:58.428Z'
version: 82
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - '../system-controls/reset-user-passwords.md'
  - 'disabling-inactive-user-access-and-accounts.md'
  - 'multi-factor-authentication-mfa-require-2fa-system-configuration.md'
  - 'force-multi-factor-authentication-mfa-2fa-user-experience.md'
  - 'single-sign-on-login-trust.md'
source: 'https://drive.google.com/open?id=14nZ_onNh6o0_pXmofucaruvpnQLpHygvPoPC4oL8g-g'
wikigdrive: 'v2.16.0'
---
The {{% system-name %}} system supports three ways for users to sign in:

* Single sign-on (SSO) through the organization's identity provider (strongly preferred wherever possible),
* Local accounts accessed by pickup codes emailed to users with links to log into the system (typically used for pre-hire candidates for completing pre-placement workflows), and
* Local accounts with a username and password managed within {{% system-name %}} (typically used for contractors, Licensed Independent Practitioners (LIPs), and other non-employees requiring access).

This guide describes the password rules that apply to local accounts and the system settings administrators use to configure them, along with the related controls for account lockout, session timeout, inactive accounts, and account monitoring.

Password rules are configured system-wide, so organizations can align {{% system-name %}} with their own information security policies (for example, a minimum password length of 16 characters, or password rotation every 90 days).

## Which Accounts Use These Rules

* <strong>Single sign-on (SSO) users:</strong> Users who sign in through the organization's identity provider (SAML 2.0) do not have a {{% system-name %}} password. Password length, complexity, expiration, and multi-factor authentication are enforced by the organization's identity provider, so the settings in this guide do not apply to them. SSO is the recommended sign-in method for employees and staff.
* <strong>Applicant and self-registration portals:</strong> Applicants do not receive a password, and their username is not shared. Depending on how the portal is configured, an applicant either receives a <strong>pickup code</strong> to claim a chart that was created for them, or uses a self-registration link that opens a one-time session to enter their information. No password is created in either case. These types of accounts are available for portal-access only and strongly discouraged for clinical logins.
* <strong>Local accounts:</strong> Users who cannot use SSO (for example, non-employee providers or contractors without an organizational login) receive a local {{% system-name %}} account. All of the password rules in this guide apply to local accounts. These types of accounts are available for portal-access or clinical login. It is strongly encouraged that Multi-Factor Authentication (MFA) is configured for these accounts, especially if they are granted clinical login access.

## Password Rules for Local Accounts

### First-Time Passwords

{{% system-name %}} does not generate passwords. When an administrator creates a local account (or resets a password), the administrator sets a temporary password and sets the **Password Expire Date** to the current day and time. The temporary password is therefore expired immediately, and the user must create their own unique password the first time they sign in. For step-by-step instructions, see [Reset User Passwords](../system-controls/reset-user-passwords.md).

{{% info %}}
The temporary password should be given only to the user it was created for. Because it expires on first sign-in, it cannot be reused.
{{% /info %}}

### Password Complexity and Length

Minimum length and character requirements are each controlled by a separate system setting, so they can be configured independently:

* Minimum total number of characters (passwords can be up to 50 characters)
* Minimum number of numeric characters
* Minimum number of special characters
* The list of special characters that are allowed

When an administrator sets or resets a password, hovering over the help bubble next to the **New Password** field shows the password criteria currently configured for the system.

![](./password-rules-and-settings.assets/a2b4d2913433a09a7403720b4ce31482.png)

### Password Expiration (Aging)

Local passwords expire after a configurable number of days (for example, 90). When a password expires, the user is prompted to create a new password at their next sign-in.

### Email Notification

{{% system-name %}} sends an email notification to the user when a password reset is requested. The notification is sent only to the email address on file for that user. The email layout can be customized by the organization.

### Password Storage

Passwords are never stored in plain text. {{% system-name %}} stores passwords using one-way salted hashing with the SHA-512 algorithm, so stored passwords cannot be decrypted.

## Account Lockout, Session Timeout, and Inactive Accounts

* <strong>Failed sign-in lockout:</strong> After a configurable number of failed sign-in attempts, the account is locked. An administrator must reset the password and check the <strong>Reset Fail Count</strong> box to unlock it (see [Reset User Passwords](../system-controls/reset-user-passwords.md)).
* <strong>Session timeout:</strong> Sessions end automatically after a configurable period of inactivity, and the user must sign in again.
* <strong>Inactive accounts:</strong> Accounts that have not been used for a configurable number of days can be disabled automatically. See [Disabling Inactive User Access & Accounts](disabling-inactive-user-access-and-accounts.md). This is most useful for local accounts; for SSO users, access is typically removed in the organization's identity provider.
* <strong>Login expiration:</strong> For temporary users, a <strong>Login Expire Date</strong> can be set on the user record so access ends automatically on that date.

## Configuring Password Settings

1. Navigate to the Control Panel.
2. Go to the System Settings menu tab.

{{% warning %}}
System settings can only be maintained by those users with the appropriate security access of SuperUser, or higher.
{{% /warning %}}

3. Search for the system setting you want to change (see the table below). Click the <strong>Edit</strong> link of the setting, found in the <em>Options</em> column to the right of the page.
3. Update the <strong>Value</strong> according to your organization's password policy.
3. Provide a <strong>Reason</strong> for the change, and click the <strong>Change</strong> button.

![](./password-rules-and-settings.assets/0aa54360c468eaf2344ffda6eaa20333.png)

<table>
<tr>
<td>Control</td>
<td>System Setting</td>
<td>What It Does</td>
<td>Default</td>
</tr>
<tr>
<td>Minimum length</td>
<td><strong>System, Password, Minimum Characters</strong></td>
<td>Minimum total number of characters in a password</td>
<td>12</td>
</tr>
<tr>
<td>Numeric characters</td>
<td><strong>System, Password, Required Number of Numerics</strong></td>
<td>Minimum number of numeric characters</td>
<td>1</td>
</tr>
<tr>
<td>Special characters</td>
<td><strong>System, Password, Required Extended Characters</strong></td>
<td>Minimum number of special characters</td>
<td>1</td>
</tr>
<tr>
<td>Allowed special characters</td>
<td><strong>System, Password, Extended Character Set</strong></td>
<td>The list of special characters users may use</td>
<td>!@#$%^&*()_+|~-=\`{}[]:";'<>?,.</td>
</tr>
<tr>
<td>Password expiration</td>
<td><strong>System, Password, Password Expires in days</strong></td>
<td>Number of days before a local password must be changed</td>
<td>30</td>
</tr>
<tr>
<td>Failed sign-in attempts</td>
<td><strong>System, Login, Max Login Attempts</strong></td>
<td>Number of failed attempts before the account is locked</td>
<td>5</td>
</tr>
<tr>
<td>Session timeout</td>
<td><strong>System, Login, Timeout</strong></td>
<td>Minutes of inactivity before the session ends</td>
<td>1800 seconds (30 minutes)</td>
</tr>
<tr>
<td>Inactive accounts</td>
<td><strong>System, Security, Days Inactive</strong></td>
<td>Days of inactivity before the account is disabled by the <strong>Disable Inactive Users</strong> scheduled job</td>
<td>30</td>
</tr>
<tr>
<td>Multi-factor authentication</td>
<td><strong>WebChart, Login, Use 2FA</strong></td>
<td>Which one-time password methods are offered (HOTP, TOTP, or both)</td>
<td>See MFA guides</td>
</tr>
</table>

## Account Monitoring

Administrators can monitor account activity with the following tools:

* <strong>Audit Event Log:</strong> Records account and security events, including sign-ins, failed sign-ins, password changes, and changes to user accounts and permissions.
* <strong>Click Log:</strong> Records each user's activity within the system.
* <strong>User Watch:</strong> Shows which users are signed in right now.

The user summary screen in Access Control also shows when the user last signed in and when their last sign-in failed.

## Multi-Factor Authentication

Local accounts can also be required to use multi-factor authentication (MFA/2FA) with one-time passwords from an authenticator app or email. For SSO users, MFA is enforced by the organization's identity provider. For details, see the guides below.

## Additional Resources

* [Reset User Passwords](../system-controls/reset-user-passwords.md)
* [Disabling Inactive User Access & Accounts](disabling-inactive-user-access-and-accounts.md)
* [Multi-Factor Authentication MFA/Require 2FA System Configuration](multi-factor-authentication-mfa-require-2fa-system-configuration.md)
* [Force Multi-Factor Authentication MFA/2FA User Experience](force-multi-factor-authentication-mfa-2fa-user-experience.md)
* [Single Sign-On Login Trust](single-sign-on-login-trust.md)
