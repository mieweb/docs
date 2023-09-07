---
id: '1vXuEhZGQF7tWWFw2i51IR52T3PGCilU7sCPtGQbfn58'
title: 'Med-Web SSL Certificate Authority'
date: '2022-10-05T17:42:38.445Z'
version: 66
lastAuthor: 'Dawn Case'
mimeType: 'text/x-markdown'
links:
  - 'http://www.mieweb.com/mie-ca2.crt'
source: 'https://drive.google.com/open?id=1vXuEhZGQF7tWWFw2i51IR52T3PGCilU7sCPtGQbfn58'
wikigdrive: '74f4d1b504045661a4a97b0e3aea1d65b95f37ab'
menu:
  main:
    name: 'Med-Web SSL Certificate Authority'
    identifier: '1vXuEhZGQF7tWWFw2i51IR52T3PGCilU7sCPtGQbfn58'
    parent: '1V2Lt_MnbYoDNFBtcoH6JHJKm4he3obo6_GmOlfyW-L8'
    weight: 4680
---
For SSL encrypted web pages, a certificate is used. MIE has created it's own Certificate Authority (CA) for generating certificates. In order to NOT get a warning, you need to install the CA into your web browsers.  
The CA can be found here: [CA](http://www.mieweb.com/mie-ca2.crt)  
This method varies, depending on the browser you are using:
  
## **Internet Explorer**  
  
Click the above link -> Open -> "Install Certificate" -> Next -> Next -> Finish -> [Verify that Thumbprint(sha1) is "46 a2 53 95 5c 65 bf c0 67 c2 58 bb 03 d2 17 d5 ba c6 16 46"] -> Yes.

  
## **Firefox**  
  
Click the above link -> Check off all three boxes (Trust this CA...) -> OK

  
## **Opera**  
  
Click the above link -> Install -> OK

  
## **Additional Notes about the Installation Process**  
  
For the sake of simplicity these instructions only apply to IE on a Windows PC.  
Before we begin consider skipping to step 44 and request that someone from Tech Support properly install this certificate for you.
1. Access the CA from here: [CA](http://www.mieweb.com/mie-ca2.crt)
2. Click on the CA link and then click Open
3. Once it opens the Certificate click "Install Certificate…"
4. At the Welcome screen click Next
5. At the Certificate Store screen click Next
6. Complete the installation by clicking Finish
7. You should see a message that says the import was successful
8. Now, since you are doing this on a Windows PC, Microsoft will have, more than likely, installed the cert in an entirely useless place. You see, there is a very specific structure to the way that certs are stored on a Windows PC, well, in any computer OS actually. So, regardless of the fact that the cert is for a trusted CA, it will have been placed in a seemingly random location, but most assuredly some other location than that which stores the trusted Certificate Authority certificates. You will most likely continue to see the same SSL error that you had seen prior to steps 1-7.
9. Repeat steps 1-4
10. Select "Place all certificates in the following store" then click Browse
11. Check the box to "Show physical stores"
12. Scroll to the top of the list of folders
13. Click on the + next to the "Trusted Root Certification Authorities" folder
14. Click on Local Computer
15. Click Next
16. You should now see "Trusted Root Certification Authorities\Local Computer" in the "Certificate store:" box
17. Click Next
18. Click Finish
19. You should see a message that say the import was successful – again
20. Should none of these steps work, move on the #21
21. Repeat step 1
22. This time click Save, then save it to your C drive
23. Now click your Windows Start button and select run and type "mmc" (no quotes please)
24. If you are using Windows 7 don't click run but type "mmc" in the text box (no quotes please)
25. Now we are going to get a little bit complicated
26. In the Console click File -> Add/Remove Snap-in..
27. Select "Certificates" on the Left and click Add in the middle
28. Select "Computer account" then click Next
29. Leave Local computer selected and click Finish
30. Click Ok
31. On the Left click the triangle next to Certificates and expand the group
32. Expand Trusted Root Certification Authorities
33. Click Certificates (this will list all the installed certificates.. most likely it will not include the one that you have painstakingly attempted to import)
34. Right click the Certificates folder on the Left pane, click All Tasks, Click Import
35. Click Next
36. Browse to the downloaded cert on your C drive named "mie-ca2.cer"
37. Select it then click Open
38. Click Next
39. Click Next
40. Click Finish
41. You should see a message that say the import was successful – again
42. Click the X in the upper right corner of the Console application
43. Click No when offered to save your settings.
