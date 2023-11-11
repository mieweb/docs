---
id: '1WPu1ebqiVNNGUDb98AUfFb2E_d84QdNhfsHGhOGhojY'
title: 'Multilingual Feature'
date: '2020-03-16T22:57:36.970Z'
version: 105
lastAuthor: ''
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1WPu1ebqiVNNGUDb98AUfFb2E_d84QdNhfsHGhOGhojY'
wikigdrive: '532b27c0e6b6629c0700a7be5d1152af2683c121'
---
{{% system-name %}}  supports many different languages:  English, Indonesian/Bahasa, Portuguese, Chinese, Spanish, Thai, Dutch, Vietnamese.  
{{% note %}}

*{{% system-name %}}  is capable of translating Left to Right Languages only. Also current translations outside of English are not complete and clients are responsible for assisting in the translation of any custom layout or changes within their database. MIE cannot attest to the full accuracy of translations, as they are client assisted translations.*
{{% /note %}}
There is a system setting to set the default language for the  {{% system-name %}} system. By default it is set to English.

![](../multilingual-feature.assets/5c6590836f0df70f29fabee298035f81.png)

If a  {{% system-name %}} system needs to show in other languages, please make sure the system setting for Multilingual is enabled.

![](../multilingual-feature.assets/3e701c75fdd1f4c8328b4fc69d5a09f9.png)

If you want to show  {{% system-name %}} in other supported languages to be able to select and display  {{% system-name %}} in any of our supported languages, you must have the supported languages system setting value set with some JSON programming format. Please contact your MIE Implementer to have set the languages you wish to have your  {{% system-name %}} to offer. The system setting provides each  {{% system-name %}} system to show specified list of languages that  {{% system-name %}} can be shown in via the "globe" icon when working in {{% system-name %}} .

![](../multilingual-feature.assets/50fb799c011166f05617db1d20ec2635.png)

Once the system setting is set with the desired languages to make available, you will see a "world" or "globe" icon at the top right corner of your  {{% system-name %}} system. You can click that to have your  {{% system-name %}} view shown in different languages instead of always going to set preferred language via *My Settings* preference. The *My Settings* preference and the "world" or "globe" icon selection are the same thing; same method of changing your language you are viewing. This only affects your user logged in session; it doesn't change the language for all other users in {{% system-name %}} .

![](../multilingual-feature.assets/468a4e494655dd635cbaddf010c9cb35.png)

By clicking the "globe" icon, from the drop-down select the language you want  {{% system-name %}} shown in. Your MIE Implementer needs to copy in the specific language(s) files in the db background that you want your  {{% system-name %}} to support.

![](../multilingual-feature.assets/ef3b23485633d78ac5cb8943e0d2199a.png)

As soon as you select a different language, your screen will refresh and display in the language you selected. Every time you work in {{% system-name %}} , it will be shown in the language you have selected here. Meaning even if you log out, you will not be sent back to English version, etc.
You will see chart tabs, screens, titles, etc all translated to the language you selected from the "world" or "globe" icon or what you set via the auto-complete from your My Settings preference screen. This screenshot example shows my system in Spanish.

![](../multilingual-feature.assets/8b2a634b7e1d7e6dfbc76406c61d78db.png)

If you have security permission to "Manage Languages", you will see "balloons" next to any English words, that means there is currently no translation stored for that word and it will be shown in English but provides you the "balloon" to translate it for your system. Usually only users with translation expertise have security to translate so it's translated correctly for all users to see.

![](../multilingual-feature.assets/fd08768ca5a3d98d47b85b0e7ae73295.png)

 ![](../multilingual-feature.assets/274afbffacf4248357f0fcf6e0ce4b24.png)

If you have security permission to "manage languages" than you can translate any word ‘on the fly' that has a balloon next to it if you wish. You would click the "balloon" icon and a small pop-up window will appear to translate that English word into the language you are viewing  {{% system-name %}} in.

![](../multilingual-feature.assets/3910e14fea272e84dffeb91c07b92fb6.png)

The title of this pop-up means "Provide Translation". That will display in whatever language you are set to view (ex: Proveer traducci?n). The next line is the name of the specific word (in English) you are about to translate (ex: Print Chart). Then there is a free text box where you type in your translation words. You would type in the spelling/words in the language you are translating for (what you are set on your view).
After done typing in your foreign language translation for the English word, you will see 2 buttons at the bottom. These buttons are also "translatable" so if someone translated them – the buttons will display in the language you are set to. The left button is "add" (ex: Agregar) Click that to add your translation to the database tables and for all users to see that translation for that word instead of the English version. The right button is "cancel" (ex: Cancelar) Click that to get out and start over.
{{% tip %}}

If there were no translation for that English word, but you wanted to make the "balloon" icon go away since there is no translation (meaning you want to show keep the English word even in your translated view), you would copy and paste the English text and add that as the translation. Then the balloon will go away and the English text remains.
{{% /tip %}}
Once you translate an item (using the balloon method) and click "add" button, the pop-up screen will go away and the word will be shown in the translation that you just did and the balloon icon will be gone.
If you do not have security permission to translate (Manage Languages) then you will not see any "balloon" icons and cannot translate. You will see words that are translated and the words that aren't will be shown in English until someone translates any that haven't been done yet.

## Hover Method to Show English

You can be in a different language and still be able to access the English translations in  {{% system-name %}} while viewing  {{% system-name %}} in another language.
Go to *My Settings* and set your preference to **show** English Translations on Hover.

![](../multilingual-feature.assets/89f3a0fff2f23499e2160ce93cba1309.png)

If that is set to ‘show' then you can be in  {{% system-name %}} and use your mouse to hover over a translated/different language word, title, section, chart tabs, sidetabs, or anything that is translated and you will see it's English translation. Here is an example where my mouse is hovering over the Fecha de Conclusion column title and it shows me the English translation for that column title which is "Date Concluded".

![](../multilingual-feature.assets/5d363f9948fd178c176c48dd75910194.png)


## Language Manager Tab

The *Language Manager* or *Language Editor* tab is found in the Control sidemenu tab. You must have security permission to "Manager Languages" to access this tab.

![](../multilingual-feature.assets/c4bd05765994c92c444ef288b61e0df5.png)

Here in the *Language Manager* tab is where you can manage translations that someone did.
You can fix or remove translations already done or that someone does by using this tab.
You fill out any filter criteria to find the labeled translation you need and click the *SEARCH* button to see the results. The Label Translation results return data of which language, the context, the original value & the translation, then who created the translation (user initials/date/time) and if any modifications were done to it then it would show that last modification user initials/date/time.
To edit a translation already done, you would click edit in the options column. You can then retype the corrected translation in that field and submit. You can inactivate the label translation too.

![](../multilingual-feature.assets/6adac807430cbddd8099b5e927cd2836.png)

The *Language Manager* tab also has a link for "Script Translations" that allows convenient translation of some labels. This hyperlink *Script Translations* will only show/appear if your default language preference is something other than English. So to access this hyperlink, you must have your preferred language set to something other than English (either in the My Settings preference or via the "globe" icon).

![](../multilingual-feature.assets/7c35a9986885e681e13c5f6249a742b0.png)

When you click that hyperlink, a pop-up window will appear of some missing script translations (for the language that you are set on). You can see them listed and you can provide a translation for in an easy flowsheet type of method. If it's a long list, use the inner scroll bar to see the entire listing. Click Submit button to save your translation work.

![](../multilingual-feature.assets/32a6a0411600b8f885bd751515e41863.png)


## Date Formatting for Other Languages

For multilingual systems, the appointment start date and end date fields that are shown on confirmation emails can formatted in a way that depends on the patient's country. Many different countries/languages show a date format differently and you don't want the patient to read it wrong. In English, it's Month/Day/Year – but other countries change that around and you want to make sure the patient comes in on the correct date if sending a confirmation email in a different language. For each country that a practice needs to customize, a translation needs to be setup for WEBCHART-country-datetime. Contact your MIE Implementer to do this in the Translation Manager. The *Trans From* column is the country code (US) and the *Trans To* is a format understood by the C function strftime, eg: %m/%d/%Y %H:%M
Examples of translated date formats for different countries:

![](../multilingual-feature.assets/61529cb90fe8dae86efe009a3267e194.png)

There is a system setting that will prevent  {{% system-name %}} from trying to find translations. This can improve performance for systems that only use English. The system setting is: "Webchart", "i18n", "Show Translations". Value 0 = off

## Language Tab

The system has the ability customize help bubble text that is hard-coded with the product. So far, the supported hard-coded help bubbles that can be customized are the patient autocomplete and all help bubbles on the E-sign page.

### Create New Help Text

To customize the first time, click the Create New Help Text hyperlink found in the Languages tab.

![](../multilingual-feature.assets/22c1f3dc03fc16e73aa5d4fd11a480b4.png)

From the value drop-down select the specific hard-coded help bubble text you wish to change and customize. In the Translation field, type out exactly what you want that specific help bubble verbiage to display to users as. Click SAVE button when done.

![](../multilingual-feature.assets/1a1a1626d1e730534c63252c2a90625c.png)

After saving, the help bubble verbiage for the specific selected (value) standard help field will be changed to what you typed into Translation field. This is an example of help bubble verbiage we changed for patient autocomplete search help (?) bubble:

![](../multilingual-feature.assets/b8662e5752a0cb9d9c26674f224df86e.png)

Back in the Languages tab, you can click the *SEARCH* button and see all translations and help bubble translations. Help bubble translations are context *standard input help*.

![](../multilingual-feature.assets/4abffd07d619339cbb30ada1700ca222.png)

You can edit translated help bubble verbiage by clicking the edit hyperlink next to it and making changes.
You can also change a translated help bubble verbiage back to what the product default comes with (the hard-coded verbiage) by inactivating the stored custom translation. Simply click the edit hyperlink next to a customized translated standard input help bubble translation, then uncheckmark the ‘active' checkbox and Submit your edit.

![](../multilingual-feature.assets/cbfd8a20dac796a57cd646c5e8bc7621.png)

The standard input help specific bubble customized translation that is now inactive, the (?) help bubble verbiage for it will default back to the hard-coded default product verbiage. Here is an example of what it would revert back to in a patient autocomplete search (?) help bubble:

![](../multilingual-feature.assets/d9343aef1889a44da93a2afcbdb3d6cf.png)

A customized help bubble that we support can be translated again. Simply search by inactive translations (uncheckmark the active only in the search filter) and click search. Then click ‘edit' next to the inactive translated help bubble verbiage translation. Activate it and type something in the translation that you want shown to users for that specific help bubble in the product.

![](../multilingual-feature.assets/a41e3ca2a3848e7fb39423c98c864552.png)

