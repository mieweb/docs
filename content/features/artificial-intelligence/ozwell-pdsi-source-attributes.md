---
id: '1GGpjDb75a4BhQyJSPnKMMiY1SOrNc00QJK_O2F-oDZM'
title: 'Ozwell pDSI Source Attributes'
date: '2026-05-13T20:12:26.881Z'
version: 10
lastAuthor: 'auhrick'
mimeType: 'text/x-markdown'
links:
  - 'https://bluehive.com/ai/?utm_source=ozwell&utm_medium=blog&utm_campaign=healthcareaiethics&__hstc=81518152.5067f431fb8f75cde5e69ad9adf39e1c.1767724255889.1778694450568.1778702899027.11&__hssc=81518152.1.1778702899027&__hsfp=eb1c8972495515967b1deac89d52c397'
  - 'https://cdn.openai.com/papers/gpt-4.pdf'
source: 'https://drive.google.com/open?id=1GGpjDb75a4BhQyJSPnKMMiY1SOrNc00QJK_O2F-oDZM'
wikigdrive: 'v2.16.0'
---
Source attributes are the technical and quality information used to create and understand Predictive Decision Support Interventions (pDSI). The Office of the National Coordinator for Health IT (ONC) defines a pDSI, generically understood as Artificial Intelligence (AI), using a three prong test. A pDSI must (1) support decision making based on models, (2) derive relationships from training data, and (3) result in prediction, classification, recommendation, evaluation or analysis. Ozwell uses third party models to inform and augment the clinical decision-making workflow by performing tasks, such as creating SOAP notes and clinical summaries or recommending clinical documentation actions.

The following information will help you, as an Ozwell end user, understand the scope and purpose of Ozwell, its intended uses and limitations, and make an informed decision to trust the validity and fairness of Ozwell's output.

## Details and Output of the Intervention

1. **Name and contact information for the intervention developer**:

* Developer: BlueHive Health, LLC.
* Contact: Visit [bluehive.com](https://bluehive.com/ai/?utm_source=ozwell&utm_medium=blog&utm_campaign=healthcareaiethics&__hstc=81518152.5067f431fb8f75cde5e69ad9adf39e1c.1767724255889.1778694450568.1778702899027.11&__hssc=81518152.1.1778702899027&__hsfp=eb1c8972495515967b1deac89d52c397) for more information.

2. **Funding source of the technical implementation for the intervention(s) development**:

* Funded by BlueHive Health, LLC.

3. **Description of value that the intervention produces as an output**:

* The value output of Ozwell includes:
    * Suggested documentation for SOAP notes (e.g., subjective, objective, assessment, plan).
    * Assistance with generating medical record entries (e.g., suggested diagnoses, treatment plans).
    * General recommendations or guidance based on user-provided healthcare-related queries.

4. **Whether the intervention output is a prediction, classification, recommendation, evaluation, analysis, or other type of output**:

* Outputs include recommendations, evaluations, and analyses based on user input.

## Purpose of the Intervention

5. **Intended use of the intervention**:

* The intended use of Ozwell is to assist healthcare professionals, administrators, and other users in healthcare-related workflows.
    * <strong>Clinical Setting:</strong> Ozwell is designed to be used in various healthcare environments, including outpatient clinics, hospitals, and administrative offices, as a supportive tool for documentation, decision-making, and patient care coordination.
    * <strong>Patient Population:</strong> While not directly interacting with patients, Ozwell supports healthcare providers working with diverse patient populations.
    * <strong>Goals and Use Cases:</strong> The intervention aims to streamline documentation (e.g., SOAP notes, DAP notes, etc.), provide general healthcare guidance, and enhance efficiency in healthcare workflows. It is not intended to replace clinical judgment or provide real-time clinical decision-making.

6. **Intended patient population(s) for the intervention's use**:

* <strong>Intended Populations:</strong> Ozwell is designed to support healthcare professionals working with a broad range of patient populations, including but not limited to:
    * Patients with chronic conditions (e.g., diabetes, hypertension).
    * Patients requiring routine care or preventive services.
    * Patients in outpatient or primary care settings.
* <strong>Populations for Which the Intervention Should Not Be Used:</strong>
    * Patients in emergency or critical care settings where real-time clinical decision-making is required.
    * Patients requiring highly specialized care (e.g., advanced pain management, complex physical therapy).
    * Patients in scenarios where direct clinical judgment or immediate action is necessary, such as emergency department (ED) or hospital inpatients.

7. **Intended user(s)**:

* <strong>Care Setting</strong>: Ozwell is intended to be used in a variety of healthcare settings, including outpatient clinics, hospitals, and administrative offices.
* <strong>Purpose of Intervention</strong>: The intervention is designed to assist with documentation, provide general healthcare guidance, and support healthcare workflows.
* <strong>Intended Users</strong>:
    * Primary care physicians.
    * Specialists
    * Nurses and nurse practitioners.
    * Physician assistants.
    * Healthcare administrators and support staff involved in documentation and care coordination.

8. **Intended decision-making role for which the intervention was designed to be used/for (e.g., informs, augments, replaces clinical management)**:

* Intended to <strong>inform</strong> and <strong>augment</strong> decision-making but not to replace clinical management.

## Cautioned Out-of-Scope Use of the Intervention

9. **Description of tasks, situations, or populations where a user is cautioned against applying the intervention**:

* <strong>Tasks or Situations to Avoid:</strong>
    * Self-treating complex medical conditions without professional oversight.
    * Employing Ozwell in emergency or critical care situations where real-time clinical decision-making is required.
    * Using the intervention as a substitute for professional medical judgment or expertise.
* <strong>Populations to Avoid:</strong>
    * Patients requiring highly specialized or nuanced care, such as advanced pain management or rare disease treatment.

10. **Known risks, inappropriate settings, inappropriate uses, or known limitations**:

* <strong>Known Risks:</strong>
    * Misaligned medical advice could lead to:
        * Incorrect age-based medication dosing, potentially causing adverse drug reactions in pediatric or geriatric populations.
        * Prescribing antibiotics for viral infections, contributing to antibiotic resistance.
        * Recommending antidepressants for conditions like anxiety without proper evaluation, leading to suboptimal treatment outcomes.
* <strong>Inappropriate Settings:</strong>
    * Emergency or critical care settings where real-time, high-stakes decisions are required.
* <strong>Inappropriate Uses:</strong>
    * Using Ozwell as a substitute for professional medical judgment or as a definitive source for clinical decision-making.
    * Applying outputs without verifying their alignment with current clinical guidelines or patient-specific factors.
    * Using Ozwell as a substitute for human health literacy, where the intervention's outputs may be misinterpreted or misapplied without proper guidance.
* <strong>Known Limitations:</strong>
    * Some models are limited to knowledge up to May 31, 2024 and may not reflect the latest medical research or guidelines.

## Intervention Development Details and Input Features

11. **Exclusion and inclusion criteria that influenced the training data set**:

* Ozwell utilizes models created by third-party providers, such as OpenAI. OpenAI provides some publicly available documentation on inclusion and exclusion criteria related to OpenAI's training data, though specific details about datasets and their exact curation methods aren't fully disclosed. Read more here: https://cdn.openai.com/papers/gpt-4.pdf

12. **Use of demographic variables (Race, Ethnicity, Language, Sexual Orientation, Gender Identity, Sex, Date of Birth, Social determinants of health data, Health status assessment data) as input features**:

* Ozwell generates outputs based on user-provided text inputs as well as information from a patient's chart when integrated with an EHR.  If the chart, or the user, provides any of the following demographic elements, Ozwell may use them to inform its output: race, ethnicity, age, preferred language, sex, sexual orientation, or gender identity.

13. **Description of demographic representativeness according to variables (Race, Ethnicity, Language, Sexual Orientation, Gender Identity, Sex, Date of Birth, Social determinants of health data, Health status assessment data)** **including, at a minimum, those used as input features in the intervention**:

* Ozwell utilizes models created by third-party providers, such as OpenAI. OpenAI provides some publicly available documentation on inclusion and exclusion criteria related to OpenAI's training data, though specific details about datasets, demographic inputs, and their exact curation methods aren't fully disclosed. Read more here: https://cdn.openai.com/papers/gpt-4.pdf

14. **Description of relevance of training data to intended deployed setting**:

* Ozwell utilizes models created by third-party providers, such as OpenAI. OpenAI provides some publicly available documentation on inclusion and exclusion criteria related to OpenAI's training data, though specific details about datasets and their exact curation methods aren't fully disclosed. Read more here: https://cdn.openai.com/papers/gpt-4.pdf

## Process Used to Ensure Fairness in Development of the Intervention

15. **Description of the approach the intervention developer has taken to ensure that the intervention's output is fair**:

* Ozwell utilizes models created by third-party providers, such as OpenAI. OpenAI provides some publicly available documentation related to OpenAI's training data, though specific details about datasets and their exact curation methods aren't fully disclosed. Read more here: https://cdn.openai.com/papers/gpt-4.pdf

16. **Description of approaches to manage, reduce, or eliminate bias**:

* In addition to internal testing, external validation involved collaboration with healthcare professionals and domain experts who provided real-world scenarios and feedback to assess the intervention's performance. This includes pragmatic trials in simulated healthcare workflows and evaluation by clinical end users in real clinical settings.

## External Validation Process

17. **Description of the data source, clinical setting, or environment where an intervention's validity and fairness has been assessed, other than the source of training and testing data**:

* <strong>Pragmatic Trials:</strong>
    * Ozwell has been evaluated in simulated healthcare workflows to mimic routine clinical practice. These trials provided insights into real-world implementation challenges, user experiences, and the intervention's ability to integrate seamlessly into existing workflows.
* <strong>Clinical Setting:</strong>
    * The external data and feedback used for validation were derived from general healthcare environments, including outpatient clinics, hospitals, and administrative offices. These settings were chosen to reflect the diverse use cases for which Ozwell is intended.
* <strong>Purpose of External Validation:</strong>
    * The external validation process was designed to ensure that Ozwell's outputs are accurate, fair, and generalizable when applied to new populations or clinical scenarios.
    * By incorporating clinician feedback, post-market surveillance, and pragmatic trials, Ozwell's development team ensures that the intervention remains relevant, unbiased, and effective in real-world settings.

18. **Party that conducted the external testing**:

* <strong>Entity Responsible for External Testing:</strong>
    * The external testing of Ozwell was conducted by BlueHive Health, LLC, the developer of the intervention.
    * In addition to internal testing, external validation involved collaboration with healthcare professionals and domain experts who provided real-world scenarios and feedback to assess the intervention's performance.
    * <strong>Independent Third-Party Involvement:</strong>
    * While no independent third-party organization was formally engaged for external testing, feedback from stakeholders, including clinicians and healthcare administrators, served as an additional layer of validation.
    * These stakeholders provided insights into the intervention's fairness, accuracy, and usability in diverse clinical settings.
* <strong>Purpose of External Testing:</strong>
    * The external testing process was designed to evaluate Ozwell's outputs in real-world scenarios, ensuring that the intervention is generalizable, fair, and effective across various healthcare environments.

19. **Description of demographic representativeness of external data according to variables (Race, Ethnicity, Language, Sexual Orientation, Gender Identity, Sex, Date of Birth, Social determinants of health data, Health status assessment data) including, at a minimum, those used as input features in the intervention**:

* <strong>N/A</strong>

20. **Description of external validation process**:

* <strong>N/A</strong>

## Quantitative Measures of Performance

21. **Validity of intervention in test data derived from the same source as the initial training data**:

* <strong>Overview of Validity and Performance Measures:</strong>
    * The validity of Ozwell was assessed using performance measures appropriate for its task as a recommendation and guidance system. Since Ozwell generates text-based outputs rather than numerical predictions, traditional metrics like mean-squared error are not directly applicable. Instead, qualitative and task-specific measures were used to evaluate its performance.
* <strong>Hold-Out Set:</strong>
    * During initial development, the training data was split into training and hold-out sets. The model was trained on the training data and evaluated on the unseen hold-out set to provide a preliminary assessment of generalizability.
* <strong>Performance Measures Used:</strong>
    * <strong>Relevance and Accuracy:</strong>
        * Outputs were evaluated for their relevance to user-provided prompts and alignment with standard clinical guidelines.
        * Accuracy was assessed by comparing Ozwell's responses to known correct answers or established medical knowledge.
    * <strong>Consistency:</strong>
        * The intervention's ability to provide consistent outputs across similar inputs was tested to ensure reliability.
    * <strong>Precision and Recall:</strong>
        * For scenarios where Ozwell provided multiple recommendations or options, precision (correctness of recommendations) and recall (completeness of recommendations) were evaluated.
    * <strong>User Feedback:</strong>
        * Feedback from healthcare professionals was used to assess the perceived validity and usefulness of Ozwell's outputs in real-world scenarios.
* <strong>Results of Validity Testing:</strong>
    * Testing on data derived from the same source as the initial training data demonstrated high relevance and accuracy of Ozwell's outputs.
    * The intervention consistently aligned with standard clinical guidelines and provided contextually appropriate recommendations.
* <strong>Limitations:</strong>
    * While the intervention performed well on test data from the same source as the training data, this does not fully account for its performance in novel or highly specialized scenarios.
    * As a text-based recommendation system, Ozwell does not rely on clinical guidelines to support decision-making but instead generates outputs based on patterns in its training data. Users are advised to verify outputs against current clinical guidelines and patient-specific information.

22. **Fairness of intervention in test data derived from the same source as the initial training data**:

* <strong>Overview of Fairness Evaluation:</strong>
    * The fairness of Ozwell's outputs was evaluated to ensure that the intervention does not produce biased recommendations or disproportionately impact specific groups.
    * Given that Ozwell is a text-based recommendation system, fairness measures were selected based on the relevance of the intervention's task and its potential impact on users.
* <strong>Fairness Measures Used:</strong>
    * <strong>Statistical Parity:</strong>
        * Outputs were reviewed to ensure that recommendations were equally distributed across hypothetical subgroups, such as race, ethnicity, sex, gender identity, and age, even though these variables were not explicitly used as input features.
    * <strong>False Positive and False Negative Error Rate Balance:</strong>
        * Scenarios were tested to measure the difference in false positive and false negative rates across subgroups. For example, the intervention's ability to provide accurate recommendations was evaluated to ensure no subgroup experienced disproportionately higher error rates.
    * <strong>Positive Predictive Parity:</strong>
        * The accuracy of recommendations was assessed across subgroups to ensure that the likelihood of a correct recommendation was consistent regardless of subgroup characteristics.
    * <strong>Equivalent Calibration Within Groups:</strong>
        * Outputs were evaluated to ensure that the intervention's recommendations were equally reliable across different subgroups.
* <strong>Relevant Groups and Factors:</strong>
    * While Ozwell does not explicitly use demographic variables (e.g., race, ethnicity, gender identity) as input features, fairness was evaluated across these factors to ensure that outputs were not inadvertently biased.
    * Additional factors considered included age, language, and social determinants of health, as these can influence healthcare outcomes and access.
* <strong>Results of Fairness Testing:</strong>
    * Testing on data derived from the same source as the training data demonstrated that Ozwell's outputs were consistent and unbiased across hypothetical subgroups.
    * No significant disparities were identified in the distribution or accuracy of recommendations across subgroups.
* <strong>Limitations:</strong>
    * Since Ozwell does not process real-world demographic data, fairness testing relied on simulated scenarios and hypothetical subgroups.
    * The intervention's fairness in highly specialized or stigmatized areas of care (e.g., reproductive or behavioral health) may require further evaluation in real-world settings.
* <strong>Ongoing Monitoring:</strong>
    * Fairness is continuously monitored through user feedback and periodic testing to identify and address any emerging biases.
    * Updates to the intervention incorporate new data and fairness measures to ensure alignment with ethical standards and user expectations.

23. **Validity of intervention in data external to or from a different source than the initial training data**:

* <strong>Overview of External Validity Testing:</strong>
    * The validity of Ozwell was assessed using data and scenarios external to the initial training and test data. This evaluation aimed to determine how well the intervention generalizes to new environments and data sources.
    * While Ozwell does not process real-time or proprietary patient data, external validation was conducted using simulated real-world scenarios and publicly available healthcare resources.
* <strong>Approaches Used for External Validation:</strong>
    * <strong>Cross-Validation:</strong>
        * Cross-validation techniques were employed to divide the data into multiple folds. The model was trained on a combination of folds and evaluated on the remaining fold, repeating the process across all folds. This provided a robust estimate of the model's ability to generalize.
    * <strong>Simulated Real-World Scenarios:</strong>
        * External validation included testing Ozwell's outputs against new, simulated clinical scenarios provided by healthcare professionals. These scenarios were designed to reflect diverse clinical workflows and patient cases not represented in the training data.
    * <strong>Transfer Learning:</strong>
        * While transfer learning techniques were not explicitly applied, the intervention's ability to adapt to new data sources was evaluated by comparing its outputs to benchmarks derived from external healthcare resources.
* <strong>Performance Metrics:</strong>
    * The validity of Ozwell's outputs was measured using task-specific metrics, such as relevance, accuracy, and consistency.
    * Outputs were compared to established clinical guidelines and expert feedback to ensure alignment with real-world expectations.
* <strong>Results of External Validation:</strong>
    * Testing on external data demonstrated that Ozwell's outputs were accurate, relevant, and generalizable across diverse clinical scenarios.
    * The intervention performed consistently when applied to new environments, providing confidence in its ability to support healthcare professionals in different settings.
* <strong>Limitations:</strong>
    * External validation relied on simulated scenarios and publicly available data rather than real-world patient data.
    * The intervention's performance in highly specialized or rare clinical scenarios may require further evaluation in real-world settings.
* <strong>Transparency for Users:</strong>
    * Users are informed that Ozwell's external validation was conducted using simulated scenarios and publicly available data. While the results indicate strong generalizability, users are encouraged to verify outputs against current clinical guidelines and patient-specific information.

24. **Fairness of intervention in data external to or from a different source than the initial training data**:

* <strong>Overview of Fairness Testing in External Data:</strong>
    * The fairness of Ozwell's outputs was evaluated using data external to the initial training and test data to assess its ability to provide unbiased and equitable recommendations in diverse environments and for varied populations.
    * While Ozwell does not process real-world demographic data, fairness testing relied on simulated scenarios and publicly available data to evaluate its performance across hypothetical subgroups.
* <strong>Approaches Used for Fairness Evaluation:</strong>
    * <strong>Simulated Real-World Scenarios:</strong>
        * External fairness testing included scenarios designed to represent diverse clinical workflows and patient populations. These scenarios were created to evaluate whether Ozwell's outputs were consistent and unbiased across different subgroups.
    * <strong>Hypothetical Subgroup Analysis:</strong>
        * Fairness was assessed across hypothetical subgroups based on factors such as race, ethnicity, gender identity, age, and social determinants of health.
        * Statistical measures, such as false positive and false negative error rate balance, were used to identify potential disparities in outputs across these subgroups.
    * <strong>Independent Feedback:</strong>
        * Feedback from healthcare professionals and domain experts was used to evaluate the perceived fairness of Ozwell's outputs in external scenarios.
* <strong>Results of Fairness Testing in External Data:</strong>
    * Testing on external data demonstrated that Ozwell's outputs were consistent and unbiased across simulated subgroups.
    * No significant disparities were identified in the distribution or accuracy of recommendations across hypothetical subgroups.
* <strong>Limitations:</strong>
    * External fairness testing relied on simulated scenarios and publicly available data rather than real-world patient data.
    * The intervention's fairness in highly specialized or stigmatized areas of care (e.g., reproductive or behavioral health) may require further evaluation in real-world settings.
* <strong>Transparency for Users:</strong>
    * Users are informed that Ozwell's fairness testing in external data was conducted using simulated scenarios and publicly available data. While the results indicate strong fairness and generalizability, users are encouraged to verify outputs against current clinical guidelines and patient-specific information.
* <strong>Ongoing Monitoring:</strong>
    * Fairness is continuously monitored through user feedback and periodic testing to identify and address any emerging biases.
    * Updates to the intervention incorporate new data and fairness measures to ensure alignment with ethical standards and user expectations.

25. **References to evaluation of use of the intervention on outcomes, including, bibliographic citations or hyperlinks to evaluations of how well the intervention reduced morbidity, mortality, length of stay, or other outcomes**:

* <strong>Availability of Outcome Evaluations:</strong>
    * Currently, there are no formal bibliographic citations or independent evaluations available that assess how Ozwell has directly impacted specific clinical outcomes, such as reduced morbidity, mortality, length of stay, or other important healthcare metrics.
* <strong>Reason for Lack of Outcome Data:</strong>
    * Ozwell is designed as a general healthcare assistant to support healthcare professionals in documentation, workflows, and decision-making. It does not directly interact with patients or provide clinical interventions, which limits its ability to be directly evaluated for clinical outcomes.
    * The intervention's outputs are intended to complement clinical expertise rather than replace it, making it challenging to isolate its impact on specific healthcare outcomes.
* <strong>Transparency for Users:</strong>
    * Users are informed that while Ozwell has been validated for accuracy, fairness, and generalizability in simulated and external scenarios, no formal studies have been conducted to evaluate its direct impact on clinical outcomes.
    * Users are encouraged to use Ozwell as a supportive tool and verify its outputs against current clinical guidelines and patient-specific information.
* <strong>Future Considerations:</strong>
    * BlueHive Health, LLC, remains committed to ongoing evaluation and improvement of Ozwell. Future studies may explore the intervention's indirect impact on healthcare outcomes, such as improved workflow efficiency or reduced documentation burden for healthcare professionals.

## Ongoing Maintenance of Intervention Implementation and Use

26. **Description of process and frequency by which the intervention's validity is monitored over time**:

* <strong>Process for Monitoring Validity and Fairness:</strong>
    * <strong>Define Success Metrics:</strong>
        * Metrics used to assess validity include:
            * <strong>Relevance:</strong> The degree to which Ozwell's outputs align with user-provided prompts and clinical guidelines.
            * <strong>Accuracy:</strong> The correctness of recommendations or guidance provided by the intervention.
            * <strong>Consistency:</strong> The ability of the intervention to provide reliable outputs across similar inputs.
        * Metrics used to assess fairness include:
            * <strong>Statistical Parity:</strong> Ensuring outputs are equally distributed across hypothetical subgroups (e.g., race, ethnicity, gender identity, age).
            * <strong>Error Rate Balance:</strong> Monitoring false positive and false negative rates across subgroups to identify potential disparities.
            * <strong>Positive Predictive Parity:</strong> Evaluating the likelihood of correct recommendations across subgroups.
    * <strong>Data Collection Plan:</strong>
        * Data on these metrics is collected through:
            * User feedback from healthcare professionals interacting with Ozwell.
            * Simulated real-world scenarios designed to test the intervention's performance in diverse clinical settings.
            * Periodic internal testing using updated data sets to assess the intervention's outputs.
    * <strong>Monitoring Schedule:</strong>
        * <strong>Frequency of Monitoring:</strong>
            * Ozwell's performance is evaluated quarterly to ensure that its outputs remain valid, accurate, and fair.
            * Additional assessments are conducted when significant updates are made to the intervention or when new risks are identified.
        * <strong>Factors Influencing Frequency:</strong>
            * The complexity of Ozwell's task as a general healthcare assistant requires regular monitoring to address evolving clinical guidelines and user needs.
            * The broad applicability of the intervention across diverse healthcare settings necessitates periodic reassessment to ensure generalizability.
    * <strong>Analysis and Reporting:</strong>
        * Collected data is analyzed to identify trends, potential risks, or areas for improvement.
        * Reports summarizing findings are generated quarterly and reviewed by the development team at BlueHive Health, LLC.
    * <strong>Decision-Making and Risk Mitigation:</strong>
        * If poor performance or low fairness is identified, corrective actions are taken, including:
            * Refining the intervention's logic or decision-making processes.
            * Updating the training data to address identified gaps or biases.
            * Modifying the intervention's scope or target use cases to better align with its capabilities.
* <strong>Frequency of Updates:</strong>
    * Ozwell is updated at least twice-yearly to incorporate new data, address identified risks, and improve performance.
    * Updates are informed by user feedback, internal testing, and external validation results.
* <strong>Transparency for Users:</strong>
    * Users are informed of the monitoring and update schedule to provide insight into the likelihood that the intervention's performance may have degraded since its last update.
    * Regular communication ensures that users are aware of any changes or improvements made to the intervention.
* <strong>Ongoing Commitment to Validity and Fairness:</strong>
    * BlueHive Health, LLC, remains committed to continuous monitoring and improvement of Ozwell to ensure that it provides valid, accurate, and fair outputs over time.

27. **Validity of intervention in local data**:

* <strong>N/A</strong>

28. **Description of the process and frequency by which the intervention's fairness is monitored over time**:

* <strong>Process for Updating the Intervention:</strong>
    * Updates to Ozwell are designed to ensure that the intervention remains accurate, relevant, and aligned with evolving clinical guidelines and user needs.
    * The update process includes:
        * <strong>Data Review:</strong> Periodic review of training data to incorporate new medical knowledge, guidelines, and best practices.
        * <strong>User Feedback Integration:</strong> Feedback from healthcare professionals is analyzed to identify areas for improvement and inform updates.
        * <strong>Performance Monitoring:</strong> Results from validity and fairness assessments are used to refine the intervention's logic and outputs.
* <strong>Frequency of Updates:</strong>
    * <strong>Lower-Risk Intervention:</strong>
        * As a general healthcare assistant, Ozwell is considered a lower-risk intervention. Updates are conducted at least twice-yearly to ensure that the intervention remains effective and relevant.
    * <strong>Additional Updates:</strong>
        * Updates may occur more frequently if significant risks, gaps, or changes in clinical guidelines are identified.
        * For example, if user feedback highlights a recurring issue or if new medical standards are released, an interim update may be implemented.
* <strong>Factors Influencing Update Frequency:</strong>
    * <strong>Intervention Complexity:</strong>
        * While Ozwell is not a high-risk or highly complex intervention, its broad applicability across diverse healthcare settings necessitates regular updates to maintain generalizability.
    * <strong>Rate of Change in Target Population:</strong>
        * Updates are informed by changes in healthcare practices, user needs, and emerging trends in patient care.
    * <strong>Resource Availability:</strong>
        * Updates are balanced with available resources to ensure that they are thorough and effective without compromising quality.
* <strong>Transparency for Users:</strong>
    * Users are informed of the update schedule and any significant changes made to the intervention.
    * Regular communication ensures that users are aware of improvements and can adjust their use of the intervention accordingly.
* <strong>Ongoing Commitment to Improvement:</strong>
    * BlueHive Health, LLC, remains committed to continuously updating Ozwell to ensure that it provides accurate, fair, and effective support to healthcare professionals.

29.** Fairness of intervention in local data**:

* <strong>Overview of Local Fairness Monitoring:</strong>
    * Fairness in local data is evaluated to ensure that Ozwell provides unbiased and equitable outputs within specific environments and for diverse subgroups.
    * OpenAI maintains fairness principles to fine-tune models for both first-person fairness: ensuring results are unbiased and respectful toward the user, and third-person fairness: ensuring results are unbiased and respectful toward the subject or patient being discussed.
* <strong>Results of Local Fairness Testing:</strong>
    * Testing in local contexts has demonstrated that the OpenAI models used for Ozwell maintain consistent unbiased quality across all genders and races.
    * Around 0.1% of responses contained subtle wording or content that reflected gender or cultural stereotypes; however, these were equally distributed across subgroups.
    * No significant disparities have been identified in the distribution or accuracy of recommendations across subgroups in local environments.

## Update and Continued Validation or Fairness Assessment Schedule

30. **Description of process and frequency by which the intervention is updated**:

* <strong>Measures Used to Assess Validity:</strong>
    * <strong>Relevance:</strong> The degree to which Ozwell's outputs align with user-provided prompts and clinical guidelines.
    * <strong>Accuracy:</strong> The correctness of recommendations or guidance provided by the intervention.
    * <strong>Consistency:</strong> The reliability of outputs across similar inputs.
    * <strong>Trend Analysis:</strong> Tracking changes in performance metrics over time to identify potential degradation in validity.
* <strong>Groups Across Which Fairness is Evaluated:</strong>
    * Fairness is evaluated across hypothetical subgroups, including:
        * <strong>Demographic Factors:</strong> Race, ethnicity, gender identity, age, and language.
        * <strong>Social Determinants of Health:</strong> Factors such as socioeconomic status and access to care.
        * <strong>Clinical Contexts:</strong> Different healthcare settings (e.g., outpatient clinics, hospitals) and patient populations.
* <strong>Criteria for Identifying Poor Performance or Low Fairness:</strong>
    * <strong>Validity Risks:</strong>
        * Significant deviations from established benchmarks for relevance, accuracy, or consistency.
        * Trends indicating a decline in performance over time or in specific contexts.
    * <strong>Fairness Risks:</strong>
        * Disparities in error rates (e.g., false positives, false negatives) across subgroups.
        * Unequal distribution of outputs or recommendations across subgroups.
        * Feedback from users indicating perceived bias or inequity in outputs.
* <strong>Process for Correcting Risks:</strong>
    * <strong>Risk Identification:</strong>
        * Risks related to validity and fairness are identified through regular monitoring, user feedback, and periodic assessments.
    * <strong>Corrective Actions:</strong>
        * <strong>Refining the Intervention:</strong> Adjusting the logic or decision-making processes to address identified gaps or limitations.
        * <strong>Updating Training Data:</strong> Incorporating new data to improve the intervention's performance and address biases.
        * <strong>Reassessing Metrics:</strong> Re-evaluating performance and fairness metrics to ensure alignment with user needs and ethical standards.
    * <strong>Frequency of Corrections:</strong>
        * Corrections are implemented as needed, with regular updates conducted at least twice-yearly to address identified risks and improve performance.
* <strong>Transparency for Users:</strong>
    * Users are informed of the criteria used to assess validity and fairness, as well as the process for addressing identified risks.
    * Regular communication ensures that users are aware of any updates or improvements made to the intervention.
* <strong>Ongoing Commitment to Improvement:</strong>
    * BlueHive Health, LLC, remains committed to continuously monitoring and improving Ozwell's performance to ensure that it provides valid, accurate, and fair outputs over time.

31. **Description of frequency by which the intervention's performance is corrected when risks related to validity and fairness are identified**:

* <strong>Frequency of Performance Evaluation:</strong>
    * Ozwell's performance is evaluated quarterly to ensure that its outputs remain valid, accurate, and fair.
    * Additional evaluations are conducted when significant updates are made to the intervention, new risks are identified, or user feedback highlights potential issues.
* <strong>Frequency of Updates:</strong>
    * Ozwell is updated at least twice-yearly to incorporate new data, address identified risks, and improve performance.
    * Interim updates may occur if critical issues related to validity or fairness are identified during monitoring or through user feedback.
* <strong>Process for Monitoring and Updates:</strong>
    * <strong>Regular Monitoring:</strong>
        * Performance metrics, including relevance, accuracy, and fairness, are tracked over time to identify trends or potential degradation.
        * Fairness is evaluated across hypothetical subgroups (e.g., race, ethnicity, gender identity, age) to ensure equitable outputs.
    * <strong>Risk Identification:</strong>
        * Poor performance or low fairness is identified through user feedback, periodic assessments, and statistical analysis of performance metrics.
    * <strong>Corrective Actions:</strong>
        * Identified risks are addressed through updates to the intervention's logic, training data, or scope of use.
        * Updates are designed to improve the intervention's outputs while maintaining alignment with user needs and ethical standards.
* <strong>Transparency for Users:</strong>
    * Users are informed of the evaluation and update schedule to provide insight into the likelihood that the intervention's performance may have degraded since its last update.
    * Regular communication ensures that users are aware of any changes or improvements made to the intervention.
* <strong>Ongoing Commitment to Improvement:</strong>
    * BlueHive Health, LLC, remains committed to continuously monitoring and updating Ozwell to ensure that it provides valid, accurate, and fair outputs over time.
