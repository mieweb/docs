---
id: '1RklkPtbPcgiQECYv2lY4FOjX_Tj9xLqFiz1kOOo5NWU'
title: 'Security Best Practices'
date: '2023-10-04T18:40:22.514Z'
version: 55
lastAuthor: 'wreiske'
mimeType: 'text/x-markdown'
links:
  - 'https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html'
  - 'https://pages.nist.gov/800-63-3/'
  - 'https://www.urbandictionary.com/define.php?term=leet+speak'
  - '../system-administration/security.md'
source: 'https://drive.google.com/open?id=1RklkPtbPcgiQECYv2lY4FOjX_Tj9xLqFiz1kOOo5NWU'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
{{% system-name %}} strives to maintain the highest standards of security with various guidelines and technical requirements intended to safeguard against outside threats and ensure secure and private interactions between the various systems across its networks. Below are various concepts important to understanding the significance of registration, identity proofing, authentication protocols, and the like. This information is in no way intended to replace or supersede any existing organization's policies and procedures regarding information technology and security; this information is simply intended to offer best practices. Clients shall always comply with their organization's policies and procedures.

{{% section %}}

{{% column width="50" %}}

## HIPAA Security Rule

Passwords are an important part of the [login credentials](#gjdgxs) and a critical component to safeguarding electronic protected health information (e-PHI). Secure passwords, in fact, are required according to the [HIPAA Security Rule Technical Safeguards](https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html), which state that a covered entity must implement technical policies and procedures that allow only authorized persons to access e-PHI.

{{% /column %}}

{{% column %}}

## NIST's Digital Identity Guidelines

The National Institute of Standards and Technology (NIST) develops Federal Information Processing Standards that all federal agencies must follow; however, many companies will elect to comply with the NIST guidelines, as well.

As part of the catalog of guidelines, NIST has developed [Digital Identity Guidelines](https://pages.nist.gov/800-63-3/).

{{% /column %}}

{{% /section %}}

## Tips & Key Concepts

### Login Credentials

The login process consists of two intertwined concepts: identification and authentication. *Identification* is the process of claiming an identity, whereas *authentication* is the process of proving an identity. The username assigned to the user by the organization, then, is the user's identification, and the system password authenticates, or provides proof of the claimed identity. Together, the username and password comprise the login credentials.

In order to have secure login credentials, passwords should:

* Comply with the organization's policies and procedures
* Be long and strong
* Be memorable to the user
* Not be revealed or shared with anybody
* Be unique across all systems

### Memorized Secret

Instead of the term *password*, NIST suggests *memorized secret*. The idea and anatomy of a memorized secret consists of the following:

* <strong>Length is strength</strong> – Eight (8) character minimum, when set by a human, and sixty-four (64) character maximum.
* <strong>Support all characters</strong> – The difference between a weak password and a strong password is the number of characters (i.e., upper- and lower-case letters, numbers, and special characters) available, and hence the number of possible combinations available to construct a password based on those characters.
* <strong>No password expiration period</strong> – Many studies have shown that users tend to choose weaker passwords when they know they have to change them in the near future.
* <strong>No password composition rules</strong> – Even though the full character set should be supported, requiring users to compose their passwords using lower-case, upper-case, digits, and/or special characters is no longer recommended. Imposing composition rules provides less benefit than might be expected, because users tend to use predictable methods for satisfying these requirements – often referred to as [leekspeak](https://www.urbandictionary.com/define.php?term=leet+speak).

### Passphrase

Because trying to remember passwords or memorized secrets for every system can be a daunting task, one recommendation that may help with making passwords more memorable is to use *passphrases*. A passphrase is similar to a password in usage, but is generally longer and easier to remember, because it has meaning to the user. A passphrase is comprised of a multiple-word phrase that is created with a secret strategy, which allows the user to picture the passphrase as a mental image.

An example would be using the first 3 letters of each word in "Sherlock Holmes 221B Baker Street."

The result is this passphrase: SheHol221BakStr (**DO NOT use this passphrase**)

A Sherlock Holmes buff would find this passphrase easy to remember. It also complies with the NIST Digital Identity Guidelines, while also being difficult for the bad actors to crack.

### Multi-Factor Authentication

Authentication with the password/passphrase is based on something the user knows. This is considered *one* factor of authentication. There are two additional possible factors of authentication:

1. Something the user has, such as a smart card or token, or
2. Something the user is, such as their fingerprints, voice patterns, facial recognition, or eye patterns

Using two (or more) methods of authentication in tandem, to verify a user's identity, creates a layered defense and makes it more difficult for an unauthorized person to access the system. In other words, if one factor is compromised or broken, the bad actor still has at least one more barrier to circumvent before successfully gaining access to the system.

### Single Sign-On

As mentioned earlier, an important guideline for strong passwords is to have a unique password for each application you access. In addition to using passphrases to remember login credentials, there are other tools that can help. Single sign-on (SSO) is an authentication service, for example, that allows an end user to input their login credentials once and be able to access multiple applications.

{{% system-name %}} recommends that our clients use SSO with the security assertion markup language (SAML). For more information, please refer to the [Online Product Documentation](../system-administration/security.md).
