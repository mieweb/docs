---
id: '19unVE5RmUD63_o6DY0srHZKSSROXk5WQe9OqWFJdGws'
title: 'Reset User Passwords'
date: '2024-07-16T19:55:34.082Z'
version: 181
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://mie.talentlms.com/shared/start/key:LTZIDNHR'
source: 'https://drive.google.com/open?id=19unVE5RmUD63_o6DY0srHZKSSROXk5WQe9OqWFJdGws'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
Must have security permissions to be able to add/edit/delete users

A user may have tried to log in using the wrong password too many times. It will then lock that user out. You will need to reset their password.

![](../reset-user-passwords.assets/d10fea4e44e3088b945498c0fb84cf85.png)

## Search for the User

Click *Control* tab on the left sidebar menu.

Click *Access Control* tab at the top.

You can search for a user if you know what department(s) they are attached to and view that way. Click the underlined department name and you will see all users tied to that department. However, it is much easier to search by a user's last name. In the Search box at the top of the Access Control tab you are in:

* <strong>Criteria:</strong> leave as Begins With
* <strong>Search:</strong> Type in the <strong>last name</strong> (or the first few letters of the last name) for the user you are searching for. Search for the user you need to reset a password for.
* <strong>By:</strong> Use the drop-down arrow and select NAME
* <strong>Show:</strong> Click the … box to open your choices. Show only Active users. Only Active users have password access.

This will pop-up any users that match to that last name (or first few letters of the last name if you entered).

![](../reset-user-passwords.assets/41da3840f4e2f467da7b854445021460.png)

Once your results produce, click on the underlined username (on the left column) that you want to edit or view. This pops up the summary screen of this user's information. You can view all the information for that user. There is also links in the summary to view when the user's last login failed and when the user last logged in.

![](../reset-user-passwords.assets/dd116686fc18841f167805c2ef0c1aea.png)

Click the Edit User link found at the top right of this user summary screen.

![](../reset-user-passwords.assets/e120c74e6420b79b91549055e42beb9d.png)

When you are in the user's username screen, scroll down to the password section towards the bottom right.

Do the following 6 steps to reset a password:

![](../reset-user-passwords.assets/5fa6387401647e40f139b6a3dfaf5caf.png)

1. <strong>Password Expire Date:</strong> Must make it today's date. Simply click the TODAY button. Make it today's date. That way it prompts the user (when they login) to create their own unique password since the generic one you are setting will expire today. Passwords expire every 30 days and the user gets prompted to change their password when logging into {{% system-name %}} 30 days from when the password is set/changed. However, when creating a new user, you want it to expire ‘today' so they will be prompted immediately upon initial login so they can set their own unique password.
2. <strong>Login Expire Date:</strong> Leave blank. If your company sets up a temporary user for a limited amount of time to access their {{% system-name %}} , they can enter a login expire date here and it will automatically (on this date entered) expire their login and they will not be allowed to log back in after the expiration date.
3. <strong>Your Current Password:</strong> You must type in <strong>your</strong> password (you–the superuser/ the administrator). Not the other user's password, but <strong>your</strong> specific {{% system-name %}} password you have/use when you log into your {{% system-name %}} system. This is to verify that you are indeed a superuser and have access to this {{% system-name %}} system and have security to change/reset passwords. Make sure you type in <strong>your</strong> {{% system-name %}} login password you use when you log into {{% system-name %}} .
4. <strong>New Password</strong>: Type in any generic password. Hover your mouse over the help bubble to see what password criteria your system is set to so you know what to program a password to. You must give this password to the new user so they know what to type in for the first time. It will then prompt them to change the password to their own unique one, which can hold up to 50 characters and can be configured with alpha, capital letters, lowercase, numbers or other extended characters and are stored using a one way encryption to prevent passwords from being decrypted. Any <em>active</em> users must have a password to access the system. Please have user read other help documentation named <em>Log On to |system|.pdf</em> for more specific information on passwords and the configurations, restrictions, and password expirations. If the user is disabled, no password is necessary as they aren't users who will be accessing the system so you can leave it blank

![](../reset-user-passwords.assets/c87a0a726234d718dc3fc3dbb20d6a63.png)

5. <strong>Verify Password</strong>: Retype in the generic password you are using as the reset password for the user.
6. <strong>Reset Fail Count:</strong> You must check-mark the <em>Reset Fail Count</em> box. If a user logs in too many times with the wrong information, the user gets locked out of the {{% system-name %}} system. You reset the password in the steps above <strong>and</strong> also checkmark this box. If you don't check-mark to reset the fail count, it still will not allow the user to login. You must check-mark this box to reset and unlock the user's login.

![](../reset-user-passwords.assets/c3481f041194c9c60e168704231899c5.png)

You must then click the **SUBMIT** button at the bottom of the user screen.

![](../reset-user-passwords.assets/4c1c0e22022fdb7307ece84d1117efc7.png)

The user is now unlocked and can now log back into {{% system-name %}} with the password you reset it to and be prompted to change it to their own unique password can hold up to 50 characters and can be configured with alpha, capital letters, lowercase, numbers or other extended characters. Please have user read other help documentation named *Log On to |system|.pdf* for more specific information on passwords and the configurations, restrictions, and password expirations.

## Portal Password Reset Option (Non-SSO portals only)

Users on 202403 and newer that log in a portal with a manual login and password, have the ability to change their password. To enable this feature, the portal user's security role setting "Manage Users" must be set to ‘Edit Self'. Once this security role setting is configured, users will be able to access the Change Password feature from the Portal Settings menu. SSO portal users will not see the option to reset passwords, as passwords are managed on the client side.

![](../reset-user-passwords.assets/66d68629efe1032af56c93940121602d.png)

![](../reset-user-passwords.assets/2bef8b0b45427c9a0eb4344afc97d7c6.png)

Security role setting "Manage Users" must be set to ‘Edit Self'.

![](../reset-user-passwords.assets/3ec990ae063884d89c07d3e583d2fe97.png)

## Learning Management System

To learn more about Resetting User Passwords, follow the link below to the Learning Management System course:

* [Access Control](https://mie.talentlms.com/shared/start/key:LTZIDNHR)
