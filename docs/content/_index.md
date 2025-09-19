---
title: "LLM Attacks"
type: docs
bookToc: false
---

<div class="hero-section">
  <div class="hero-background"></div>
  <div class="hero-content">
    <div class="alert-badge">⚠️ CRITICAL SECURITY ALERT</div>
    <h1 class="hero-title">Your LLM is Under Attack</h1>
    <p class="hero-subtitle">
      <strong>71 documented attack vectors</strong> are actively targeting AI systems worldwide.<br>
      Is your organization prepared?
    </p>
    <div class="risk-stats">
      <div class="risk-card critical">
        <div class="risk-number">18</div>
        <div class="risk-label">Critical</div>
      </div>
      <div class="risk-card high">
        <div class="risk-number">35</div>
        <div class="risk-label">High Risk</div>
      </div>
      <div class="risk-card medium">
        <div class="risk-number">18</div>
        <div class="risk-label">Medium</div>
      </div>
    </div>
  </div>
</div>

<div class="impact-section">
  <h2>What's at Stake?</h2>
  <div class="impact-grid">
    <div class="impact-card">
      <div class="impact-icon">💰</div>
      <div class="impact-number">$4.45M</div>
      <div class="impact-label">Average cost of AI security breach</div>
    </div>
    <div class="impact-card">
      <div class="impact-icon">⚡</div>
      <div class="impact-number">287 Days</div>
      <div class="impact-label">Average time to detect AI attack</div>
    </div>
    <div class="impact-card">
      <div class="impact-icon">🎯</div>
      <div class="impact-number">89%</div>
      <div class="impact-label">Organizations unprepared for LLM attacks</div>
    </div>
  </div>
</div>

<div class="paths-section">
  <h2>Choose Your Path</h2>
  <div class="paths-grid">
    <div class="path-card security">
      <div class="path-icon">🔍</div>
      <h3>Security Professionals</h3>
      <p>Explore attack vectors, understand threats, and build robust defenses for your AI systems.</p>
      <a href="/LLM-Attacks/attacks/" class="path-button security-btn">Explore Attacks →</a>
    </div>
    <div class="path-card community">
      <div class="path-icon">🤝</div>
      <h3>Community Contributors</h3>
      <p>Join researchers worldwide in documenting and mitigating LLM security threats.</p>
      <a href="/LLM-Attacks/community/" class="path-button community-btn">Join Community →</a>
    </div>
    <div class="path-card enterprise">
      <div class="path-icon">💼</div>
      <h3>Enterprise Solutions</h3>
      <p>Protect your business with enterprise-grade LLM security solutions and expert guidance.</p>
      <a href="/LLM-Attacks/sponsors/" class="path-button enterprise-btn">View Solutions →</a>
    </div>
  </div>
</div>

<div class="search-section">
  <h2>Quick Attack Lookup</h2>
  <div class="search-container">
    <input type="text" id="search" placeholder="Search 71 documented attacks..." class="search-input" />
    <div class="search-suggestions">Try: "prompt injection", "data poisoning", "jailbreak"</div>
  </div>
</div>

## Attack Database {#database}

<div class="threat-intel-banner">
  <div class="threat-icon">⚡</div>
  <div class="threat-content">
    <div class="threat-title">Live Threat Intelligence</div>
    <div class="threat-subtitle">Updated with latest attack vectors and mitigation strategies</div>
  </div>
</div>

| SN  | Attack                                                                                                                  | Category        | Risk Level | Description                                                                                                                                                                                                                                            |
|-----|-------------------------------------------------------------------------------------------------------------------------|-----------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1   | Agentic Multi-Agent Exploitation                                                                                       | System-Level    | High       | Exploiting inter-agent trust boundaries so that a malicious payload, initially rejected by one LLM agent, is processed if delivered via another trusted agent, including privilege escalation and cross-agent command execution.                    |
| 2   | RAG/Embedding Backdoor Attacks                                                                                         | Data-Centric    | High       | Attacking LLMs with manipulated embedded documents retrieved during RAG, including poisoning vector DBs to force undesirable completions or disclosures.                                                                                              |
| 3   | System Prompt Leakage & Reverse Engineering                                                                            | Privacy         | High       | Forcing disclosure or deducing proprietary system prompts to subvert guardrails and expose internal instructions.                                                                                                                                      |
| 4   | LLM Tooling/Plugin Supply Chain Attacks                                                                                | Supply Chain    | Critical   | Compromising the ecosystem via malicious plugins, infected models from public repos, or tainted integrations.                                                                                                                                          |
| 5   | Excessive Agency/Autonomy Attacks                                                                                       | System-Level    | High       | Exploiting/abusing LLM agent autonomy to perform unintended actions, escalate privileges, or cause persistent automated damage in agentic workflows.                                                                                                   |
| 6   | Unbounded Resource Consumption ("Denial of Wallet")                                                                     | System-Level    | Medium     | Manipulating LLM behavior to consume excessive external/cloud resources, raising costs or disrupting operations.                                                                                                                                        |
| 7   | Cross-Context Federation Leaks                                                                                         | Privacy         | High       | Leveraging federated information contexts or cross-source retrievals to exfiltrate data by manipulating the model's knowledge context.                                                                                                                 |
| 8   | Vector Database Poisoning                                                                                              | Data-Centric    | High       | Polluting indexing/embedding layers to disrupt or manipulate downstream LLM generations or leak/hallucinate info.                                                                                                                                      |
| 9   | [Adversarial Examples](attacks/adversarial)                                                                            | Inference-Time  | High       | Crafty manipulations of input data that trick models into making incorrect predictions, potentially leading to harmful decisions.                                                                                                                       |
| 10  | [Data Poisoning](attacks/data-poisoning)                                                                               | Training-Time   | Critical   | Malicious data injections into the training set that corrupt the model's performance, causing biased or incorrect behavior.                                                                                                                             |
| 11  | [Model Inversion Attacks](attacks/model-inversion)                                                                     | Privacy         | High       | Inferring the input values used to train the model, exposing sensitive information.                                                                                                                                                                     |
| 12  | [Membership Inference Attacks](attacks/membership-inference)                                                           | Privacy         | Medium     | Determining whether specific data points were part of the model's training set, leading to privacy breaches.                                                                                                                                            |
| 13  | [Query Manipulation Attacks](attacks/query-manipulation)                                                               | Prompt-Based    | High       | Crafting malicious queries that cause the model to reveal unintended information or behave undesirably.                                                                                                                                                 |
| 14  | Model Extraction Attacks                                                                                               | Privacy         | Critical   | Reverse-engineering the model by querying it to construct a copy, resulting in intellectual property theft.                                                                                                                                             |
| 15  | Transfer Learning Attacks                                                                                               | Training-Time   | Medium     | Exploiting vulnerabilities in the transfer learning process to manipulate model performance on new tasks.                                                                                                                                               |
| 16  | Federated Learning Attacks                                                                                             | Training-Time   | High       | Compromising client devices or server-side data in federated learning setups to corrupt the global model or extract sensitive information.                                                                                                             |
| 17  | Edge AI Attacks                                                                                                        | System-Level    | Medium     | Targeting edge devices running AI models to exfiltrate data or manipulate behavior.                                                                                                                                                                     |
| 18  | IoT AI Attacks                                                                                                         | System-Level    | Medium     | Attacking IoT devices using AI, potentially leading to data breaches or unauthorized control.                                                                                                                                                           |
| 19  | Prompt Injection Attacks                                                                                               | Prompt-Based    | Critical   | Manipulating input prompts in conversational AI to bypass safety measures or extract confidential information.                                                                                                                                          |
| 20  | Indirect Prompt Injection                                                                                              | Prompt-Based    | High       | Exploiting vulnerabilities in systems integrating LLMs to inject malicious prompts indirectly.                                                                                                                                                          |
| 21  | Model Fairness Attacks                                                                                                 | Model-Centric   | Medium     | Intentionally biasing the model by manipulating input data, affecting fairness and equity.                                                                                                                                                              |
| 22  | Model Explainability Attacks                                                                                           | Model-Centric   | Medium     | Designing inputs that make model decisions difficult to interpret, hindering transparency.                                                                                                                                                               |
| 23  | Robustness Attacks                                                                                                     | Inference-Time  | Medium     | Testing the model's resilience by subjecting it to various perturbations to find weaknesses.                                                                                                                                                            |
| 24  | Security Attacks                                                                                                       | System-Level    | High       | Compromising the confidentiality, integrity, or availability of the model and its outputs.                                                                                                                                                              |
| 25  | Integrity Attacks                                                                                                      | Model-Centric   | High       | Tampering with the model's architecture, weights, or biases to alter behavior without authorization.                                                                                                                                                    |
| 26  | Jailbreaking Attacks                                                                                                   | Prompt-Based    | Critical   | Attempting to circumvent the ethical constraints or content filters in an LLM.                                                                                                                                                                          |
| 27  | Training Data Extraction                                                                                               | Privacy         | Critical   | Inferring specific data used to train the model through carefully crafted queries.                                                                                                                                                                      |
| 28  | Synthetic Data Generation Attacks                                                                                      | Training-Time   | Medium     | Creating synthetic data designed to mislead or degrade AI model performance.                                                                                                                                                                            |
| 29  | Model Stealing from Cloud                                                                                              | Privacy         | Critical   | Extracting a trained model from a cloud service without direct access.                                                                                                                                                                                  |
| 30  | Model Poisoning from Edge                                                                                              | Training-Time   | High       | Introducing malicious data at edge devices to corrupt model behavior.                                                                                                                                                                                   |
| 31  | Model Drift Detection Evasion                                                                                          | Model-Centric   | Medium     | Evading mechanisms that detect when a model's performance degrades over time.                                                                                                                                                                           |
| 32  | Adversarial Example Generation with Deep Learning                                                                      | Inference-Time  | High       | Using advanced techniques to create adversarial examples that deceive the model.                                                                                                                                                                        |
| 33  | Model Reprogramming                                                                                                    | Model-Centric   | Medium     | Repurposing a model for a different task, potentially bypassing security measures.                                                                                                                                                                      |
| 34  | Thermal Side-Channel Attacks                                                                                           | System-Level    | Low        | Using temperature variations in hardware during model inference to infer sensitive information.                                                                                                                                                          |
| 35  | Transfer Learning Attacks from Pre-Trained Models                                                                      | Training-Time   | High       | Poisoning pre-trained models to influence performance when transferred to new tasks.                                                                                                                                                                    |
| 36  | Model Fairness and Bias Detection Evasion                                                                              | Model-Centric   | Medium     | Designing attacks to evade detection mechanisms monitoring fairness and bias.                                                                                                                                                                           |
| 37  | Model Explainability Attack                                                                                            | Model-Centric   | Medium     | Attacking the model's interpretability to prevent users from understanding its decision-making process.                                                                                                                                                 |
| 38  | Deepfake Attacks                                                                                                       | Inference-Time  | High       | Creating realistic fake audio or video content to manipulate events or conversations.                                                                                                                                                                   |
| 39  | Cloud-Based Model Replication                                                                                          | Privacy         | Critical   | Replicating trained models in the cloud to develop competing products or gain unauthorized insights.                                                                                                                                                    |
| 40  | Confidentiality Attacks                                                                                                | Privacy         | High       | Extracting sensitive or proprietary information embedded within the model's parameters.                                                                                                                                                                 |
| 41  | Quantum Attacks on LLMs                                                                                                | System-Level    | Low        | Using quantum computing to theoretically compromise the security of LLMs or their cryptographic protections.                                                                                                                                           |
| 42  | Model Stealing from Cloud with Pre-Trained Models                                                                      | Privacy         | Critical   | Extracting pre-trained models from the cloud without direct access.                                                                                                                                                                                     |
| 43  | Transfer Learning Attacks with Edge Devices                                                                            | System-Level    | High       | Compromising knowledge transferred to edge devices.                                                                                                                                                                                                      |
| 44  | Adversarial Example Generation with Model Inversion                                                                    | Privacy         | High       | Creating adversarial examples using model inversion techniques.                                                                                                                                                                                         |
| 45  | Backdoor Attacks                                                                                                       | Training-Time   | Critical   | Embedding hidden behaviors within the model triggered by specific inputs.                                                                                                                                                                               |
| 46  | Watermarking Attacks                                                                                                   | Model-Centric   | Medium     | Removing or altering watermarks protecting intellectual property in AI models.                                                                                                                                                                          |
| 47  | Neural Network Trojans                                                                                                 | Training-Time   | Critical   | Embedding malicious functionalities within the model triggered under certain conditions.                                                                                                                                                                |
| 48  | Model Black-Box Attacks                                                                                                | Inference-Time  | High       | Exploiting the model using input-output queries without internal knowledge.                                                                                                                                                                             |
| 49  | Model Update Attacks                                                                                                   | System-Level    | High       | Manipulating the model during its update process to introduce vulnerabilities.                                                                                                                                                                          |
| 50  | Gradient Inversion Attacks                                                                                             | Privacy         | High       | Reconstructing training data by exploiting gradients in federated learning.                                                                                                                                                                             |
| 51  | Side-Channel Timing Attacks                                                                                            | System-Level    | Medium     | Inferring model parameters or training data by measuring computation times during inference.                                                                                                                                                             |
| 52  | Adversarial Suffix                                                                                                     | Prompt-Based    | High       | Appending a specifically crafted, often nonsensical string to a harmful prompt to cause the model to disregard its safety instructions.                                                                                                                |
| 53  | Prefix Injection & Refusal Suppression                                                                                 | Prompt-Based    | High       | Forcing a model's response to start with an affirmative phrase or explicitly instructing it not to use refusal phrases to lower its defenses.                                                                                                          |
| 54  | Encoding Obfuscation                                                                                                   | Prompt-Based    | Medium     | Hiding a malicious payload in an encoded format (e.g., Base64, Hex) that the LLM is instructed to decode and then execute, bypassing text-based filters.                                                                                              |
| 55  | Payload Splitting                                                                                                      | Prompt-Based    | Medium     | Breaking a malicious instruction into multiple, individually benign parts and asking the model to reassemble and execute them, bypassing filters that check instructions in isolation.                                                                |
| 56  | Markup Language Abuse                                                                                                  | Prompt-Based    | Medium     | Using structured data formats like Markdown or HTML to create ambiguity between system instructions and user input, potentially causing the model to execute instructions with higher privilege.                                                      |
| 57  | Prompt Recursive Injection                                                                                             | Prompt-Based    | High       | Crafting prompts that recursively redefine instructions and cause infinite loops or privilege escalation.                                                                                                                                              |
| 58  | Multi-Modal Adversarial Attacks                                                                                        | Inference-Time  | High       | Exploiting vulnerabilities in models that process both text and images/audio by injecting adversarial perturbations across modalities.                                                                                                                 |
| 59  | Reinforcement Learning from Human Feedback (RLHF) Poisoning                                                            | Training-Time   | High       | Attacking the feedback loops used for alignment to bias the model or weaken safety training.                                                                                                                                                           |
| 60  | Chain-of-Thought (CoT) Leakage                                                                                         | Privacy         | Medium     | Forcing the model to reveal hidden reasoning traces, which may contain sensitive or filtered knowledge.                                                                                                                                                |
| 61  | Model Compression/Distillation Attacks                                                                                 | Training-Time   | High       | Exploiting vulnerabilities during model compression/distillation to introduce backdoors or reduce robustness.                                                                                                                                          |
| 62  | Transferability Exploits                                                                                               | Inference-Time  | Medium     | Using adversarial examples crafted for one model to fool another (cross-model attacks).                                                                                                                                                                |
| 63  | Prompt Reset / Separator Injection                                                                                     | Prompt-Based    | Medium     | Injecting tokens or patterns that trick the model into resetting context or ignoring prior instructions.                                                                                                                                               |
| 64  | Shadow Model Exploitation                                                                                              | Privacy         | High       | Building a parallel "shadow" model via query logging and then exploiting it to predict or exfiltrate target model behavior.                                                                                                                            |
| 65  | Retrieval Data Exfiltration                                                                                            | Privacy         | High       | Crafting queries that force the LLM to retrieve and output sensitive data from connected corpora or knowledge bases.                                                                                                                                    |
| 66  | Long-Context Window Overload                                                                                           | Inference-Time  | Medium     | Flooding the model with extremely long context input to bypass filters or degrade performance, potentially causing memory leaks or dropping safety filters.                                                                                           |
| 67  | Fine-Tuning Data Injection                                                                                             | Training-Time   | High       | Poisoning during fine-tuning (instruction tuning, RLHF, or supervised fine-tuning) to inject malicious capabilities or suppress safety.                                                                                                                |
| 68  | Semantic Perturbation Attacks                                                                                          | Inference-Time  | Medium     | Altering benign-looking input with synonyms, typos, or semantic shifts that trick LLMs into misclassification or harmful behavior.                                                                                                                     |
| 69  | Context Switching Attacks                                                                                              | Prompt-Based    | High       | Tricking the model into switching "roles" or contexts mid-conversation, overriding safety policies.                                                                                                                                                     |
| 70  | Model Distillation IP Theft                                                                                            | Privacy         | High       | Extracting distilled student models that replicate proprietary teacher model behavior, leaking IP.                                                                                                                                                      |
| 71  | Hybrid Supply Chain Attacks                                                                                            | Supply Chain    | Critical   | Combining poisoned datasets, compromised plugins, and adversarial fine-tunes to inject coordinated backdoors across AI pipelines.                                                                                                                      |

## About This Project

Contribute if you come across any new vulnerabilities that are not on this list.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](https://github.com/AI-Security-Research-Group/LLM-Attacks/blob/main/LICENSE) file for details.
