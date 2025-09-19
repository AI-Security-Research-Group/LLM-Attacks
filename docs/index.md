---
title: LLM Attacks - Comprehensive Security Vulnerability Database
description: A comprehensive database of Large Language Model (LLM) attack vectors and security vulnerabilities, including the latest 2025 research on agentic exploits, RAG attacks, and advanced ML security threats.
layout: default
---

# LLM Attacks - Wiki

A comprehensive collection of attack vectors and security vulnerabilities targeting Large Language Models (LLMs) and associated AI systems.

## Attack Database

| SN | Attack | Description |
|----|--------|--------------|
| 1 | Agentic Multi-Agent Exploitation | Exploiting inter-agent trust boundaries so that a malicious payload, initially rejected by one LLM agent, is processed if delivered via another trusted agent, including privilege escalation and cross-agent command execution. |
| 2 | RAG/Embedding Backdoor Attacks | Attacking LLMs with manipulated embedded documents retrieved during RAG, including poisoning vector DBs to force undesirable completions or disclosures. |
| 3 | System Prompt Leakage & Reverse Engineering | Forcing disclosure or deducing proprietary system prompts to subvert guardrails and expose internal instructions. |
| 4 | LLM Tooling/Plugin Supply Chain Attacks | Compromising the ecosystem via malicious plugins, infected models from public repos, or tainted integrations. |
| 5 | Excessive Agency/Autonomy Attacks | Exploiting/abusing LLM agent autonomy to perform unintended actions, escalate privileges, or cause persistent automated damage in agentic workflows. |
| 6 | Unbounded Resource Consumption ("Denial of Wallet") | Manipulating LLM behavior to consume excessive external/cloud resources, raising costs or disrupting operations. |
| 7 | Cross-Context Federation Leaks | Leveraging federated information contexts or cross-source retrievals to exfiltrate data by manipulating the model's knowledge context. |
| 8 | Vector Database Poisoning | Polluting indexing/embedding layers to disrupt or manipulate downstream LLM generations or leak/hallucinate info. |
| 9 | [Adversarial Examples](../attacks_list/adversarial.md) | Crafty manipulations of input data that trick models into making incorrect predictions, potentially leading to harmful decisions. |
| 10 | [Data Poisoning](../attacks_list/data_poisoning.md) | Malicious data injections into the training set that corrupt the model's performance, causing biased or incorrect behavior. |
| 11 | [Model Inversion Attacks](../attacks_list/model_inversion.md) | Inferring the input values used to train the model, exposing sensitive information. |
| 12 | [Membership Inference Attacks](../attacks_list/membership_inference.md) | Determining whether specific data points were part of the model's training set, leading to privacy breaches. |
| 13 | [Query Manipulation Attacks](../attacks_list/Query_Manipulation_Attacks.md) | Crafting malicious queries that cause the model to reveal unintended information or behave undesirably. |
| 14 | Model Extraction Attacks | Reverse-engineering the model by querying it to construct a copy, resulting in intellectual property theft. |
| 15 | Transfer Learning Attacks | Exploiting vulnerabilities in the transfer learning process to manipulate model performance on new tasks. |
| 16 | Federated Learning Attacks | Compromising client devices or server-side data in federated learning setups to corrupt the global model or extract sensitive information. |
| 17 | Edge AI Attacks | Targeting edge devices running AI models to exfiltrate data or manipulate behavior. |
| 18 | IoT AI Attacks | Attacking IoT devices using AI, potentially leading to data breaches or unauthorized control. |
| 19 | Prompt Injection Attacks | Manipulating input prompts in conversational AI to bypass safety measures or extract confidential information. |
| 20 | Indirect Prompt Injection | Exploiting vulnerabilities in systems integrating LLMs to inject malicious prompts indirectly. |
| 21 | Model Fairness Attacks | Intentionally biasing the model by manipulating input data, affecting fairness and equity. |
| 22 | Model Explainability Attacks | Designing inputs that make model decisions difficult to interpret, hindering transparency. |
| 23 | Robustness Attacks | Testing the model's resilience by subjecting it to various perturbations to find weaknesses. |
| 24 | Security Attacks | Compromising the confidentiality, integrity, or availability of the model and its outputs. |
| 25 | Integrity Attacks | Tampering with the model's architecture, weights, or biases to alter behavior without authorization. |
| 26 | Jailbreaking Attacks | Attempting to circumvent the ethical constraints or content filters in an LLM. |
| 27 | Training Data Extraction | Inferring specific data used to train the model through carefully crafted queries. |
| 28 | Synthetic Data Generation Attacks | Creating synthetic data designed to mislead or degrade AI model performance. |
| 29 | Model Stealing from Cloud | Extracting a trained model from a cloud service without direct access. |
| 30 | Model Poisoning from Edge | Introducing malicious data at edge devices to corrupt model behavior. |
| 31 | Model Drift Detection Evasion | Evading mechanisms that detect when a model's performance degrades over time. |
| 32 | Adversarial Example Generation with Deep Learning | Using advanced techniques to create adversarial examples that deceive the model. |
| 33 | Model Reprogramming | Repurposing a model for a different task, potentially bypassing security measures. |
| 34 | Thermal Side-Channel Attacks | Using temperature variations in hardware during model inference to infer sensitive information. |
| 35 | Transfer Learning Attacks from Pre-Trained Models | Poisoning pre-trained models to influence performance when transferred to new tasks. |
| 36 | Model Fairness and Bias Detection Evasion | Designing attacks to evade detection mechanisms monitoring fairness and bias. |
| 37 | Model Explainability Attack | Attacking the model's interpretability to prevent users from understanding its decision-making process. |
| 38 | Deepfake Attacks | Creating realistic fake audio or video content to manipulate events or conversations. |
| 39 | Cloud-Based Model Replication | Replicating trained models in the cloud to develop competing products or gain unauthorized insights. |
| 40 | Confidentiality Attacks | Extracting sensitive or proprietary information embedded within the model's parameters. |
| 41 | Quantum Attacks on LLMs | Using quantum computing to theoretically compromise the security of LLMs or their cryptographic protections. |
| 42 | Model Stealing from Cloud with Pre-Trained Models | Extracting pre-trained models from the cloud without direct access. |
| 43 | Transfer Learning Attacks with Edge Devices | Compromising knowledge transferred to edge devices. |
| 44 | Adversarial Example Generation with Model Inversion | Creating adversarial examples using model inversion techniques. |
| 45 | Backdoor Attacks | Embedding hidden behaviors within the model triggered by specific inputs. |
| 46 | Watermarking Attacks | Removing or altering watermarks protecting intellectual property in AI models. |
| 47 | Neural Network Trojans | Embedding malicious functionalities within the model triggered under certain conditions. |
| 48 | Model Black-Box Attacks | Exploiting the model using input-output queries without internal knowledge. |
| 49 | Model Update Attacks | Manipulating the model during its update process to introduce vulnerabilities. |
| 50 | Gradient Inversion Attacks | Reconstructing training data by exploiting gradients in federated learning. |
| 51 | Side-Channel Timing Attacks | Inferring model parameters or training data by measuring computation times during inference. |

## About This Project

Contribute if you come across any new vulnerabilities that are not on this list.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](../LICENSE) file for details.
