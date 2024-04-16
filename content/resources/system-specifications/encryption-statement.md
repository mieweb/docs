---
id: '15tLB374Dvnd8zPo3U-URgzCbbHjIOxekGfR71xc1dLA'
title: 'Encryption Statement'
date: '2020-02-27T20:35:59.932Z'
version: 35
mimeType: 'text/x-markdown'
links:
  - 'https://en.wikipedia.org/wiki/Encryption'
  - 'https://en.wikipedia.org/wiki/Symmetric-key_algorithm'
  - 'https://en.wikipedia.org/wiki/Public-key_cryptography'
  - 'https://en.wikipedia.org/wiki/Data_in_transit'
  - 'https://en.wikipedia.org/wiki/Data_at_rest'
  - 'https://en.wikipedia.org/wiki/Disk_encryption'
  - 'https://en.wikipedia.org/wiki/Filesystem-level_encryption'
  - 'https://en.wikipedia.org/wiki/Database_encryption'
  - 'https://www.mysql.com/products/enterprise/tde.html'
  - 'https://www.hhs.gov/hipaa/for-professionals/faq/2001/is-the-use-of-encryption-mandatory-in-the-security-rule/index.html?language=es'
  - 'https://www.cms.gov/Outreach-and-Education/Medicare-Learning-Network-MLN/MLNProducts/Downloads/HIPAAPrivacyandSecurityTextOnly.pdf'
  - 'https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html'
  - 'https://www.hhs.gov/hipaa/for-professionals/breach-notification/index.html'
  - 'https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html'
  - 'https://www.hhs.gov/ocio/policy/20080007001s.html'
  - 'https://www.hhs.gov/hipaa/for-professionals/breach-notification/guidance/index.html'
  - 'http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-111.pdf'
  - 'http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-52r1.pdf'
  - 'http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-113.pdf'
  - 'http://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.140-2.pdf'
  - 'http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-175B.pdf'
  - 'https://www.truecrypt71a.com/documentation/hardware-acceleration/'
  - 'http://www.phoronix.com/scan.php?page=search&q=disk+encryption'
  - 'http://www.digitalcitizen.life/what-performance-impact-system-encryption-truecrypt'
  - 'http://media-addicted.de/ssd-and-truecrypt-durability-and-performance-issues/744/'
  - 'https://www.gpo.gov/fdsys/pkg/CFR-2007-title45-vol1/content-detail.html'
  - 'https://www.hhs.gov/hipaa/for-professionals/'
  - 'https://www.hhs.gov/ocio/policy/'
  - 'https://www.datamotion.com/2015/12/best-practices-securing-data-at-rest-in-use-and-in-motion/'
  - 'https://www.hln.com/encrypting-data-at-rest-on-servers-what-does-it-get-you/'
  - 'http://healthitsecurity.com/news/encrypting-healthcare-data-at-rest-nist-best-practices'
source: 'https://drive.google.com/open?id=15tLB374Dvnd8zPo3U-URgzCbbHjIOxekGfR71xc1dLA'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
## Introduction

As part of {{% system-name %}} 's ( {{% sys-name %}} ) commitment to security, this document is intended to explain the position {{% sys-name %}} takes with encryption, in general, as well as with regard to data at rest. Though there are no specific regulations with regard to encryption, {{% sys-name %}} , nevertheless, focuses its strategy of securing information toward authenticity, integrity, and privacy for all of our clients' data.

## Background

First, it is important to be familiar with [encryption](https://en.wikipedia.org/wiki/Encryption), in general. As a layer of security, encryption prevents unwarranted access to sensitive data by way of encrypting, or scrambling, the data such that only the holder of a *key* can decrypt, or unscramble, the data and view it in original form.

There are two main strategies of encryption: [symmetric](https://en.wikipedia.org/wiki/Symmetric-key_algorithm) and asymmetric, or [public key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography). Symmetric encryption utilizes one key to decrypt and encrypt data. Public key cryptography uses a pair of keys: one to encrypt and one to decrypt. Though public key cryptography utilizes *computationally expensive algorithms*, it does come with its own disadvantages. For example, unlike most symmetric algorithms, public key cryptography allows messages to be passed through untrusted mediums (e.g.internet) without having to pre-coordinate a key exchange through a trusted medium.

Encryption is often used to ensure that [data in motion](https://en.wikipedia.org/wiki/Data_in_transit) (e.g. messages on a network) and [data at rest](https://en.wikipedia.org/wiki/Data_at_rest) (e.g. backups on a hard drive) cannot be understood without a decryption key. Another means for which encryption can be used is with data in use, the third classification of digital data. Data in use, for example, is when data is being manipulated by an application, or used from within the context of a database.

Next, aside from just types of encryption, there are also software- and hardware-based encryptions. For example, [hardware full-disk encryption](https://en.wikipedia.org/wiki/Disk_encryption) (FDE) provides the capability to encrypt hard disk drives. This uses a symmetric encryption key that a computer operator has to enter, perhaps by way of a passcode. This will, then, decrypt the hard disk drive at system boot, allowing access to the data. Typically, the passcode must be entered on the physical server, manually. Although, more commonly, through the use of a trusted platform module (TPM), crypto keys are being managed on a dedicated microprocessor within the hardware. That is not to say alternatives do not exist, such as some virtualized and cloud-based environments, which offer remote passphrase entry, or even varying degrees of passphrase management and automation options.

Within a standard FDE, installed software does not need additional configurations or granted privileges, in order to operate normally. The operating system provides transparent access to the encrypted data, as necessary, with very little performance loss. Do note that the initial encryption must be done on a new disk (or set of disks), as the process will wipe the existing disk clean. Because of this, it is easiest to perform an FDE during an initial deployment or migration to a new server.

Alternatively, there is [filesystem-level encryption](https://en.wikipedia.org/wiki/Filesystem-level_encryption), which allows for a more individualized approach to encryption. Consider how physical disks are typically divided into one or more file systems, to allow for easy storage and retrieval of data. Filesystem-level encryption allows administrators to encrypt only selected filesystems (or specific files/folders *within* file systems). This allows the server to boot without a passphrase, instead requiring a passphrase to access its encrypted filesystems, only after the system is up and running. Similar to FDE, this encryption is provided transparently to applications by the operating system; however, developers and administrators need to be careful not to store sensitive files on *non-encrypted* file systems.

And finally, there is [database encryption](https://en.wikipedia.org/wiki/Database_encryption). Another method for encrypting data at rest, database encryption can be done on the application level, on software such as MySQL, Oracle, or MS SQL Server. Like filesystem-level encryption, a key or passphrase is entered by an operator during the database startup process, after which all database operations can access the encrypted data transparently, hence the name Transparent Data Encryption (TDE), given by [MySQL](https://www.mysql.com/products/enterprise/tde.html), Oracle, and Microsoft SQL Server. It is important to note that for servers storing sensitive data in files outside the database, database encryption provides less protection than filesystem-level encryption, even though it will likely protect the most sensitive data on the system.

## Regulations

While there are [no mandates to use encryption](https://www.hhs.gov/hipaa/for-professionals/faq/2001/is-the-use-of-encryption-mandatory-in-the-security-rule/index.html?language=es), there are [guidelines](https://www.cms.gov/Outreach-and-Education/Medicare-Learning-Network-MLN/MLNProducts/Downloads/HIPAAPrivacyandSecurityTextOnly.pdf) for handling privacy, security, and breach notifications for HIPAA-covered entities, or those organizations, business associates, and/or professionals required to protect the integrity, confidentiality, and availability of Protected Health Information (PHI). Under the Health Insurance Portability and Accountability Act (HIPAA), three Rules establish the definitions, requirements, and criteria expected for privacy and protection of health information: 1) the Privacy Rule, 2) the Security Rule, and 3) the Breach Notification Rule.

The United States Department of Health & Human Services (HHS) defines the HIPAA [Privacy Rule](https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html), 45 CFR §§ 164.500-534, as establishing the standards by which PHI must be handled. The Privacy Rule is simply intended to define how an individual's PHI may be used or disclosed. In relation to the Privacy Rule, the [Breach Notification Rule](https://www.hhs.gov/hipaa/for-professionals/breach-notification/index.html), 45 CFR §§ 164.400-414, defines what HIPAA-covered entities and their business associates must provide as sufficient notification following a breach of unsecured protected health information.

The HIPAA [Security Rule](https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html), 45 CFR §§ 164.302-318, goes a step further and is the primary consideration for the purposes of encryption and its importance, because it outlines the requirements to be taken to handle and safeguard PHI. Additionally, the HHS [Standard for Encryption](https://www.hhs.gov/ocio/policy/20080007001s.html) specifically calls for a risk-based decision to be made on whether or not encryption should be used in servers:

Whole-disk encryption solutions are acceptable as are solutions that protect individual files or folders containing sensitive information. The decision to employ physical protections over an encryption solution is a risk-based decision, as these protections cannot completely remove the risk of theft or loss of sensitive data at all offices. The risk-based decision to use any alternatives to encryption shall be formally documented and approved by the appropriate Designated Approval Authority (DAA).

The Security Rule goes on to define encryption as "the use of an algorithmic process to transform data into a form in which there is a low probability of assigning meaning without use of a confidential process or a key" (45 CFR §§ 164.304). This allows the Security Rule to be a primary source for suggested methods of [rendering PHI unusable, unreadable, and indecipherable](https://www.hhs.gov/hipaa/for-professionals/breach-notification/guidance/index.html) to unauthorized users.

Because of this, HHS looks to the National Institute of Standards and Technology (NIST) for best practices and standards for encryption processes.

* Valid encryption processes for data at rest are consistent with NIST Special Publication 800-111, [Guide to Storage Encryption Technologies for End User Devices](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-111.pdf).
* Valid encryption processes for data in motion are those which comply, as appropriate, with NIST Special Publications 800-52, [Guidelines for the Selection and Use of Transport Layer Security (TLS) Implementations](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-52r1.pdf); 800-77, [Guide to IPsec VPNs; or 800-113, ](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-113.pdf)[<strong>Guide to SSL VPNs</strong>](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-113.pdf), or others which are [Federal Information Processing Standards (FIPS) 140-2](http://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.140-2.pdf) validated.

Also available for information regarding encryption processes of data in motion and data at rest is NIST Special Publication 800-175B, [Guideline for Using Cryptographic Standards in the Federal Government: Cryptographic Mechanisms.](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-175B.pdf)

As a resource for encryption technologies that mitigate potential threats, NIST has also developed 800-111, [Guide to Storage Encryption Technologies for End User Devices](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-111.pdf), where the information provided is summarized in a useful grid seen below.

![](../encryption-statement.assets/1f745477860bb16c6fc999eb767ae2f8.png)

## Overhead

Our testing has shown that, depending on read/write size and randomness, without using specialized hardware, encryption of hard drives can range from 25-50% performance degradation in IO with significant impact on CPU. Utilizing Intel's [AES-NI instructions](https://www.truecrypt71a.com/documentation/hardware-acceleration/) significantly reduces the performance impact to about 5-10%.

As a point of reference, several articles are available for reviewing disk encryption, performance issues, and durability.

* Phoronix Media has compiled [several articles and reviews](http://www.phoronix.com/scan.php?page=search&q=disk+encryption) regarding disk encryption since their Phoronix launch in 2004.
* Digital Citizen has provided a very interesting article about TrueCrypt encryption: [What is the Performance Impact of System Encryption with TrueCrypt](http://www.digitalcitizen.life/what-performance-impact-system-encryption-truecrypt) (20-30% performance)
* Likewise, Media Addicted has summarized findings of: [SSDs and TrueCrypt: Durability and Performance Issues](http://media-addicted.de/ssd-and-truecrypt-durability-and-performance-issues/744/) (18-46%)

### Benchmarking

Benchmarking can be seen below, where we have utilized the Sysbench tool for File I/O testing with various mount devices:

* <strong>sdased</strong> - SDA / SED is a Spinning 15K disk with Self Encryption
* <strong>ssd-r10wbLUKSc7</strong> - SSD RAID 1+0 LUKS / CentOS 7 AES-IN encryption

![](../encryption-statement.assets/b63673422b4cf082965426a736310adc.png)

### Comparison

Based on benchmarking findings, it is clear that SSD is faster than a 7200 RPM hard disk with SED. At 128 threads, the SSD with LUKS AES-IN is 261 times faster.

![](../encryption-statement.assets/4db7653485e198114cbc7e2abc231717.png)

## Encryption is NOT a panacea

While encrypting data at rest can be a useful component in a data security toolbox, it must be implemented with a full understanding of the protection it may (or may not) provide. Organizations should consult with their vendors, data security staff, system staff, and application staff to determine an appropriate set of actions to secure institutional data.

### Limitations of Encrypting

* Encryption provides little protection against intrusions from a hacker gaining remote access to a server, where the passphrase has already been entered.
* Data in use must be unencrypted in order to be consumed by users; therefore, to ensure data in use is secure and inaccessible to unauthorized individuals, policies and procedures should be in place to address proper disposal of printed data, or to supply necessary security for on-screen information.
* Applications accessing encrypted files or databases (e.g. web applications, query systems, etc.) may not be secure. Hackers can penetrate one of these applications and gain access to the data, whether it is encrypted or not.
* Some database management systems only support data encryption in more expensive, proprietary versions of the software.
* While full-disk and database-level encryptions offer greater protection, it is important to remember the human element required for access. Due to the required manual entry of a passcode, these encryption types carry with them a certain level of inconvenience, not to mention risk, as human fallibility can lead to data being inaccessible by way of a lost passphrase. Filesystem-level encryption can assuage some of these issues.
* Even the strongest encryption can be easily undermined by poor key management. Consider, for example, a running server requires the key to be in memory, to be able to read encrypted data. This is analogous to a running locked car with the keys inside it.

### Special Considerations for Virtualized and Cloud-based Environments

* As mentioned, some virtualized and cloud-based environments offer remote passphrase entry and varying degrees of passphrase management and automation for full-disk encryption – but be aware that there is often a tradeoff between convenience and security with automated solutions. For example, if a cloud provider keeps your passphrase and automatically provides it to the operating system at boot time, the level of security offered by the full-disk encryption solution is largely dependent on how securely the cloud provider manages the passphrase.

## References

*Code of Federal Regulations*. *Public Welfare*. Department of Health and Human Services, 01 Oct. 2007. Web. 31 Mar. 2017. <https://www.gpo.gov/fdsys/pkg/CFR-2007-title45-vol1/content-detail.html>.

"HIPAA for Professionals." *HHS.gov*. Department of Health and Human Services, 13 Feb. 2017. Web. 31 Mar. 2017. <https://www.hhs.gov/hipaa/for-professionals/>.

Office of the Chief Information Officer. "HHS OCIO Policies, Standards and Charters." *HHS.gov*. U.S. Department of Health and Human Services, 13 Sept. 2006. Web. 31 Mar. 2017. <https://www.hhs.gov/ocio/policy/>.

Reglione, Andrea. "Best Practices: Securing Data at Rest, in Use, and in Motion."*DataMotion*. DataMotion, 01 Dec. 2015. Web. 31 Mar. 2017. <https://www.datamotion.com/2015/12/best-practices-securing-data-at-rest-in-use-and-in-motion/>.

Noam, Arzt H., and Michael Berry. "Encrypting Data at Rest on Servers: What Does It Get You?" *HLN Consulting, LLC*. HLN Consulting, LLC, 25 July 2016. Web. 31 Mar. 2017. <https://www.hln.com/encrypting-data-at-rest-on-servers-what-does-it-get-you/>.

"Encrypting Healthcare Data at Rest: NIST Best Practices." *HealthITSecurity*. Ed. Patrick Ouellette. Xtelligent Media, LLC, 17 Oct. 2013. Web. 31 Mar. 2017. <http://healthitsecurity.com/news/encrypting-healthcare-data-at-rest-nist-best-practices>.
