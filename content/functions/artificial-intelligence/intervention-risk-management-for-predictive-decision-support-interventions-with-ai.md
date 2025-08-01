---
id: '1mphjZQnaF0HQMYPS7fSLpWbV_RrGNG5Huc2NGRbzHHw'
title: 'Intervention Risk Management for Predictive Decision Support Interventions with AI '
date: '2025-05-15T16:33:51.775Z'
version: 172
lastAuthor: 'bhamm'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1mphjZQnaF0HQMYPS7fSLpWbV_RrGNG5Huc2NGRbzHHw'
wikigdrive: '7bd2b52c5cf9bba91d376203703e860806d2a208'
---
## Introduction of MIE's IRM Practices

MIE is committed to the responsible development and deployment of artificial intelligence (AI) in healthcare. As part of this commitment, MIE has implemented robust Intervention Risk Management (IRM) practices for Predictive Decision Support Interventions (DSIs) supplied through its **Ozwell platform, which is integrated into MIE's certified WebChart EHR**. This document aims to provide summary information about these practices, in compliance with the requirements outlined in § 170.523(f)(1)(xxi) of the Federal Register. These regulations mandate the public disclosure of summary information regarding IRM practices for any Predictive DSIs supplied by health IT developers as part of a Health IT Module.

**WebChart EHR is ONC-ACB and EPCS certified by Drummond Group, ensuring that it meets the criteria for eligible provider technology and that e-prescribing of controlled substances is in full compliance with DEA requirements**. This certification does not represent an endorsement by the U.S. Department of Health and Human Services. **Ozwell is MIE's advanced model engine router, designed to support multiple AI models across multiple modalities, including text, images, and voice, making it a powerful tool within the WebChart EHR ecosystem**.

Instead of relying solely on the AI model's training data, Retrieval-Augmented Generation (RAG) dynamically fetches the latest and most relevant information, ensuring responses are both accurate and aligned with current standards of care. WebChart empowers physicians by enabling them to upload their own trusted guidelines from professional organizations, such as the American College of Cardiology (ACC), the National Comprehensive Cancer Network (NCCN), and the American College of Occupational and Environmental Medicine (ACOEM). This capability ensures that clinical decision support tools, including those powered by RAG technology, are tailored to reflect the most relevant, evidence-based standards specific to the physician's specialty, institution, or patient population. By integrating these physician-supplied guidelines into the system, WebChart facilitates personalized, up-to-date, and context-specific recommendations, enhancing efficiency and improving alignment with best practices in clinical care.

MIE recognizes the transformative potential of AI in healthcare but also acknowledges the importance of addressing potential risks and ensuring the safe, effective, and ethical use of AI-powered tools. MIE's IRM practices are designed to ensure that Predictive DSIs supplied through Ozwell are developed and deployed in a manner that prioritizes patient safety, data privacy, and fairness.

This document will provide an overview of MIE's IRM framework, highlighting key aspects of risk analysis, risk mitigation, and governance. It will also describe how **Ozwell's integration with WebChart** contributes to mitigating risks and promoting responsible AI deployment in healthcare settings.

## Overview of IRM Practices

**Intervention Risk Management (IRM)** is a critical process for ensuring the responsible development and deployment of Predictive DSIs in healthcare. MIE recognizes the transformative potential of AI while acknowledging the need to mitigate potential risks and ensure patient safety, data privacy, and fairness.

MIE's IRM framework encompasses the entire AI system lifecycle, from conception to deployment and ongoing monitoring, aligning with the principles outlined in the NIST AI Risk Management Framework (AI RMF). **While the NIST AI RMF is a voluntary framework, MIE leverages it as a guide, selectively implementing aspects based on specific needs and resources.**

MIE's approach to IRM prioritizes transparency, accountability, and continuous improvement, reflecting its commitment to responsible AI development.

### Key Principles of MIE's IRM Framework:

* <strong>Proactive Risk Identification:</strong> MIE conducts thorough risk analyses throughout the development and deployment lifecycle, anticipating and identifying potential risks associated with each Predictive DSI supplied through its Ozwell platform. This includes considering the eight characteristics of trustworthy AI, as defined by the NIST AI RMF:  <strong>validity, reliability, robustness, fairness, intelligibility, safety, security, and privacy</strong>.
* <strong>Tailored Risk Mitigation:</strong> MIE develops and implements risk mitigation strategies specific to each Predictive DSI, addressing identified risks with appropriate measures. These strategies may involve data preprocessing techniques, model monitoring, user training, and ongoing evaluation to ensure responsible use.
* <strong>Robust Data Governance:</strong> MIE has established policies and controls to govern the acquisition, management, and use of data for Predictive DSIs supplied through Ozwell. These policies prioritize data security, privacy, and responsible use, ensuring compliance with relevant regulations and ethical considerations.
* <strong>Ozwell as an IRM Facilitator:</strong> MIE's Ozwell platform plays a crucial role in supporting and operationalizing IRM practices. Its design and functionality contribute to mitigating risks and enabling responsible AI deployment.  <strong>Key Ozwell features include secure API connections to organizational datasets, access controls for both users and APIs, and audit trails to track all interactions and changes.</strong>
* <strong>Continuous Monitoring and Improvement:</strong> MIE is committed to continuous monitoring and improvement of its IRM practices. Processes are in place for regularly reviewing and updating IRM procedures, documentation, and risk assessments. MIE incorporates feedback from stakeholders, leverages industry best practices, and stays abreast of advancements in AI risk management to enhance its framework.

By adhering to these principles, MIE aims to ensure that Predictive DSIs supplied through Ozwell are developed and deployed responsibly, maximizing their potential benefits while mitigating potential risks. MIE's proactive approach to IRM contributes to building trust in the use of AI in healthcare, paving the way for its safe and ethical integration into clinical practice.

## Risk Analysis - IRM Practices

A crucial aspect of MIE's commitment to responsible AI involves a thorough risk analysis of each Predictive DSI supplied through the Ozwell platform. **This process aims to identify and understand potential risks and adverse impacts associated with each Predictive DSI across various characteristics, aligning with the principles of the NIST AI RMF**.

The sources emphasize that MIE is not required to disclose specific risk analysis metrics or mitigation practices beyond the eight characteristics listed in § 170.315(b)(11)(vi)(A). **This allows MIE to protect its intellectual property while providing meaningful information about its approach to risk analysis**.

### Characteristics of Trustworthy AI:

MIE's risk analysis process focuses on evaluating potential risks and adverse impacts related to the following eight characteristics of trustworthy AI:

* <strong>Validity:</strong> Assessing whether the Predictive DSI produces accurate and reliable outputs consistent with its intended purpose. This involves evaluating the DSI's performance on relevant datasets, considering factors such as accuracy, sensitivity, and specificity.
* <strong>Reliability:</strong> Determining the consistency and stability of the Predictive DSI's outputs over time and across different conditions. This includes evaluating the DSI's robustness to changes in input data and operating environments.
* <strong>Robustness:</strong> Evaluating the Predictive DSI's ability to withstand unexpected inputs, disruptions, or adversarial attacks. This includes assessing the DSI's resilience to data errors, system failures, and malicious attempts to manipulate its behavior.
* <strong>Fairness:</strong> Analyzing whether the Predictive DSI's outputs are unbiased and equitable for all individuals and groups. This involves assessing the DSI for potential biases related to sensitive attributes like race, gender, or socioeconomic status.
* <strong>Intelligibility:</strong> Determining the degree to which the Predictive DSI's decision-making process can be understood and explained. This includes assessing the transparency and interpretability of the DSI's logic, algorithms, and outputs.
* <strong>Safety:</strong> Evaluating the potential for the Predictive DSI to cause harm to individuals or systems. This includes assessing the DSI's safety mechanisms, failure modes, and potential consequences of incorrect or unexpected outputs.
* <strong>Security:</strong> Assessing the Predictive DSI's vulnerability to unauthorized access, modification, or disclosure of data. This includes evaluating the security measures implemented to protect the DSI and its associated data from cyberattacks and breaches.
* <strong>Privacy:</strong> Analyzing how the Predictive DSI collects, stores, uses, and shares data, ensuring compliance with privacy regulations and ethical considerations. This includes evaluating data anonymization techniques, access controls, and data retention policies.

### Examples of Potential Risks and Adverse Impacts:

To illustrate the practical implications of its risk analysis, MIE considers potential risks and adverse impacts such as:

* <strong>Bias in Training Data</strong>: Predictive DSIs are susceptible to inheriting biases present in the data they are trained on. This can lead to biased outputs and perpetuate existing health disparities. MIE acknowledges this risk and takes steps to identify and mitigate potential biases during data collection, preprocessing, and model training.
* <strong>Model Accuracy in Different Clinical Settings</strong>: The performance of a Predictive DSI can vary across different clinical settings due to factors like patient demographics, care practices, and data quality. MIE considers these variations during risk analysis, evaluating the generalizability and applicability of the DSI across diverse settings.
* <strong>Security Vulnerabilities</strong>: Predictive DSIs, like any software system, can be vulnerable to security breaches and cyberattacks. These attacks could compromise patient data, disrupt healthcare operations, or manipulate the DSI's outputs. MIE recognizes these risks and implements robust security measures to protect its systems and data from unauthorized access.
* <strong>Retrieval Augmented Generation (RAG) with Outdated Guidelines:</strong> MIE recognizes risks in user-suppled guidelines. Since WebChart does not supply guidelines directly, the quality, accuracy, and currency of the guidelines depend entirely on what physicians or organizations upload. Variations in sources or discrepancies in versions can result in:
    * Conflicting guidance (e.g., outdated protocols uploaded alongside newer recommendations).
    * Incomplete or poorly formatted guidelines that may not integrate well with the RAG system, leading to ambiguous or unreliable outputs.

**By meticulously analyzing potential risks and adverse impacts across these characteristics, MIE aims to ensure that Predictive DSIs supplied through Ozwell are safe, effective, and ethically sound**. This thorough risk analysis is a cornerstone of MIE's responsible AI development process.

## Risk Mitigation for Predictive DSIs

### Risk Mitigation for Predictive DSIs

The sources emphasize the need for a robust risk mitigation strategy when developing and deploying Predictive DSIs. MIE recognizes this need and has implemented practices that minimize potential risks and ensure the safety and effectiveness of its AI-powered solutions.

___

### Leveraging Existing Certification Criteria and Frameworks:

* <strong>Safety-Enhanced Design:</strong> MIE has adhered to the safety-enhanced design processes described in § 170.315(g)(3) of the Federal Register document. This includes conducting thorough risk assessments, incorporating user-centered design principles, and implementing rigorous testing protocols to ensure the safe operation of its Predictive DSIs.
* <strong>Quality Management Systems (QMS):</strong> MIE has leveraged established QMS principles as outlined in § 170.315(g)(4) of the Federal Register document. This involves implementing systematic processes for quality planning, control, assurance, and improvement throughout the lifecycle of Predictive DSIs.
* <strong>NIST AI Risk Management Framework (AI RMF):</strong> While the sources do not mandate the use of any specific risk management framework, they acknowledge the NIST AI RMF as a valuable resource. MIE has drawn upon the AI RMF's guidance, particularly the sections on risk mitigation strategies and governance practices, to enhance its risk management approach.

___

### Addressing Specific Risks Identified in the Risk Analysis:

* <strong>Validity, Reliability, Robustness, Fairness, and Bias:</strong>
    * <strong>Action:</strong> MIE does not rely on representative datasets or automated systems to ensure these characteristics. Instead, clinicians play a critical role in identifying and reporting any issues related to the validity, reliability, robustness, fairness, and bias of Predictive DSIs.
    * <strong>Implementation:</strong> Through WebChart's "flagging" functionality, clinicians can report concerns or defects they encounter in real-world usage. These flagged issues are reviewed by MIE, and a root cause analysis is conducted to resolve the issue and prevent its recurrence.

* <strong>Intelligibility and Explainability:</strong>
    * <strong>Action:</strong> MIE ensures that Predictive DSIs include mechanisms to provide intelligible outputs, but relies on clinicians to identify when explanations or decision rationales are insufficient.
    * <strong>Implementation:</strong> Feedback from clinicians is gathered through the WebChart platform to continually refine and improve the intelligibility and explainability of the system's recommendations.

* <strong>Safety and Risk Mitigation for Inaccurate or Outdated Content:</strong>
    * <strong>Action:</strong> MIE relies on clinicians to ensure that outdated or inaccurate content is replaced within the system. WebChart does not automatically validate the accuracy or timeliness of uploaded guidelines.
    * <strong>Implementation:</strong> Clinicians are empowered to upload the most current, accurate guidelines and flag any content they identify as outdated or problematic. MIE reviews flagged content and works collaboratively with clinicians to ensure timely updates and corrections.

* <strong>Security and Privacy:</strong>
    * <strong>Action:</strong> MIE has implemented appropriate technical and administrative safeguards to protect patient data and ensure compliance with HIPAA and other relevant regulations.
    * <strong>Implementation:</strong> This includes employing encryption, access controls, secure data storage, and regular security audits to prevent unauthorized access, use, or disclosure of patient information.

### Ongoing Monitoring and Improvement:

* <strong>Continuous Monitoring:</strong> MIE has implemented systems for continuous monitoring of its Predictive DSIs, primarily relying on clinician feedback and flagged issues to track performance, detect potential problems, and ensure ongoing compliance with regulatory requirements.
* <strong>Flagging and Feedback:</strong> The WebChart platform empowers clinicians to flag conversations, content, or outputs that exhibit defects or issues. Flagged threads automatically generate alerts for MIE to review, enabling root cause analysis and corrective action to improve system performance and prevent recurrence.
* <strong>Regular Review and Updates:</strong> MIE conducts regular reviews of its risk management practices, including risk analysis, mitigation strategies, and governance policies. These reviews incorporate user feedback, industry best practices, and evolving regulatory guidance to ensure the effectiveness and relevance of the risk mitigation approach.
* <strong>Transparency and Communication:</strong> MIE is committed to transparency in its risk management efforts. This includes providing users with clear and accessible information about the potential risks associated with Predictive DSIs, the mitigation strategies employed, and the channels for reporting concerns or feedback.

By adopting this clinician-centered and proactive approach to risk mitigation, including issue flagging through WebChart, MIE ensures the safe, effective, and responsible implementation of AI-powered solutions within its healthcare platforms while maintaining a strong reliance on the expertise and vigilance of its clinical users.

## Governance

MIE has established a governance framework to ensure the responsible development and deployment of its Predictive Decision Support Interventions (DSIs). This governance framework addresses the integration of Retrieval-Augmented Generation (RAG) and prompt engineering techniques into its DSI offerings, while providing flexibility for clients to implement their own governance structures for guideline management.

### MIE Governance Framework

* <strong>Defined Procedures for DSI Development:</strong>
    * MIE incorporates structured processes for prompt engineering and RAG within the development of its DSIs to ensure outputs are relevant, accurate, and aligned with clinical needs.
    * The internal <strong>DSI and Quality Committee</strong> at MIE oversees the design, testing, and validation of core prompts and RAG guidelines. This committee ensures that all DSIs meet safety, efficacy, and usability standards before deployment.  The committee will rely on consensus

* <strong>Public and Professional Guidelines:</strong>
    * MIE integrates public, non-proprietary guidelines from trusted sources such as the Centers for Medicare & Medicaid Services (CMS) and other professional organizations. These guidelines form the baseline knowledge used in DSIs.
    * To promote transparency and adaptability, MIE allows healthcare providers to customize guideline use within their systems, enabling them to add or remove specific guidelines based on their institutional preferences or clinical priorities.

* <strong>Client-Driven Governance:</strong>
    * Each client organization has the autonomy to establish its own governance structure for managing guidelines incorporated into their systems. This includes decision-making processes for adopting, modifying, or removing guidelines.
    * Governance decisions at the client level should be made by senior leadership, such as the <strong>Chief Medical Officer (CMO)</strong> or the designated system owner, to ensure alignment with clinical and organizational goals.

* <strong>Customization and Oversight:</strong>
    * Providers have the ability to upload proprietary guidelines or adopt additional guidelines from professional organizations specific to their needs or specialties.
    * MIE provides tools and support to ensure that client-uploaded guidelines are seamlessly integrated and tracked within the system.

* <strong>Transparency and Accountability:</strong>
    * MIE provides detailed documentation and auditing capabilities within its systems to track guideline usage and changes, ensuring accountability for both MIE and its clients.
    * The WebChart platform includes features that allow clinicians to flag issues with guidelines or DSIs. Flagged concerns are reviewed by MIE and, when necessary, escalated to the DSI and Quality Committee for root cause analysis and remediation.

### Collaborative Governance:

* <strong>Client-MIE Partnership:</strong> MIE works collaboratively with clients to ensure their governance structures align with MIE's safety and risk mitigation standards. Recommendations and guidance are offered to clients, but the ultimate responsibility for guideline decisions resides with the client's leadership team.
* <strong>Continuous Improvement:</strong> Feedback from clinicians and system users is incorporated into governance processes to drive ongoing improvements in both MIE's DSIs and client-level governance practices.

By formalizing governance at both MIE and client levels, this framework ensures that Predictive DSIs are deployed responsibly and effectively, while providing clients with the flexibility needed to address their unique clinical and operational requirements.

## Continuous Monitoring and Improvement of Predictive DSIs

MIE is committed to ensuring that its Predictive Decision Support Interventions (DSIs) subsystem remains effective, safe, and aligned with evolving clinical and regulatory standards through a robust framework for continuous monitoring and improvement. This approach integrates principles from the ONC Health IT Certification Program, the NIST AI Risk Management Framework, and MIE's own governance practices, emphasizing ongoing compliance, user feedback, and proactive system enhancements.

### Leveraging Maintenance of Certification Requirements

MIE adheres to the **Maintenance of Certification requirements** outlined by the ONC Health IT Certification Program. These requirements ensure that health IT modules are not only initially certified but also regularly updated to reflect new standards, implementation specifications, and capabilities. Updates are delivered to customers in a timely manner to enhance interoperability, promote safety, and improve healthcare outcomes.

### Intervention Risk Management (IRM) Practices

Continuous monitoring is a key element of MIE's IRM framework. Predictive DSIs are subject to ongoing review and updates to address identified risks, ensure the accuracy of source attributes, and maintain the effectiveness of risk mitigation strategies.

* <strong>Source Attribute Transparency:</strong> MIE ensures that users have access to up-to-date descriptions of the source attributes driving DSIs, enabling clinicians to assess their appropriateness in real-world contexts.
* <strong>Performance Degradation and Bias Mitigation:</strong> Continuous monitoring processes are in place to identify and address issues such as performance degradation, hallucinations, and bias. Real-time system monitoring and clinician feedback loops are leveraged to maintain system accuracy and relevance.

### User Feedback as a Driver of Improvement

Clinician feedback plays a central role in MIE's continuous monitoring and improvement framework. The WebChart platform includes features that allow clinicians to flag issues or defects in real-time, providing actionable insights for system enhancements. Flagged content and feedback are reviewed by MIE, and root cause analyses are conducted to implement corrective measures and prevent future issues.

* <strong>Feedback Mechanisms:</strong> Clinicians are empowered to report concerns related to DSI performance, validity, reliability, or robustness through WebChart's flagging functionality.
* <strong>Actionable Insights:</strong> MIE reviews flagged content, conducts root cause analyses, and implements necessary updates to DSIs to enhance their performance and reliability.
* <strong>Transparency:</strong> Feedback-driven updates and changes are communicated transparently to users, fostering trust and accountability.

### Proactive Monitoring and Reporting

MIE collects, analyzes, and acts on performance data to ensure that DSIs meet user expectations and regulatory requirements.

* <strong>Ongoing Monitoring:</strong> Regular evaluations are conducted to assess the effectiveness of DSIs, including their alignment with current guidelines and clinical needs.
* <strong>Metric-Driven Improvements:</strong> Data on system usage and flagged issues are aggregated and analyzed to identify trends, prioritize updates, and inform governance decisions.

### Commitment to Long-Term Improvement

Continuous improvement is an iterative, long-term process. MIE's framework incorporates a forward-looking perspective, aligning with the evolving nature of healthcare and AI trustworthiness as outlined in the NIST AI Risk Management Framework.

* <strong>Evolving Standards:</strong> MIE ensures that DSIs are adaptable to changes in clinical guidelines, interoperability requirements, and regulatory standards.
* <strong>Living Framework:</strong> Feedback from clinicians, updates to certification requirements, and advancements in AI technology are integrated into MIE's continuous improvement efforts to maintain relevance and effectiveness.

By embedding continuous monitoring and improvement into the lifecycle of its Predictive DSIs, MIE ensures that its AI-powered tools deliver safe, effective, and reliable support for clinicians while maintaining alignment with the highest standards of care and regulatory compliance.

## Conclusion

MIE's Predictive Decision Support Interventions (DSIs), powered by the Ozwell subsystem, exemplify the organization's dedication to advancing responsible, effective, and safe AI solutions in healthcare. Ozwell, with its cutting-edge capabilities in integrating clinician-provided guidelines and Retrieval-Augmented Generation (RAG), empowers providers to deliver personalized, evidence-based care while maintaining full control over the guidelines and data used. By embedding robust governance, clinician feedback mechanisms, and continuous monitoring into the lifecycle of its DSIs, MIE ensures that Ozwell remains a reliable and adaptable subsystem, aligned with evolving clinical and regulatory standards. Through Ozwell, MIE is redefining how AI supports clinicians, fostering trust, accountability, and innovation in the healthcare landscape.
