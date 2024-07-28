# Large Language Model (LLM) Attacks - Wiki

This repository provides a comprehensive list of potential attacks on large language models (LLMs). These attacks are categorized based on their likelihood and severity, ranging from highly likely and severe to extremely rare and least severe.

## Highly Likely and Severe (1-5)

1. **[Adversarial Examples](https://github.com/AI-Security-Research-Group/llm-attacks/blob/main/adversarial.md)**: Manipulating input data in a way that causes the model to make incorrect predictions, potentially leading to harmful decisions.
2. **[Data Poisoning](https://github.com/AI-Security-Research-Group/llm-attacks/blob/main/data_poisoning.md)**: Injecting malicious data into the training set to corrupt the model's performance, causing it to behave incorrectly or make biased decisions.
3. **[Model Inversion Attacks](https://github.com/AI-Security-Research-Group/llm-attacks/blob/main/model_inversion.md)**: Inferring the input values that were used to train the model, potentially exposing sensitive information.
4. **[Membership Inference Attacks](https://github.com/AI-Security-Research-Group/llm-attacks/blob/main/membership_inference.md)**: Determining whether a specific data point was part of the model's training set, which can lead to privacy breaches.
5. **[Query Manipulation Attacks](https://github.com/AI-Security-Research-Group/llm-attacks/blob/main/Query_Manipulation_Attacks.md)**: Crafting malicious queries that cause the model to reveal unintended information or behave in an undesired manner.

## Moderately Likely and Severe (6-12)

6. **Model Extraction Attacks**: Reverse-engineering the model by querying it and using the outputs to construct a copy, leading to intellectual property theft.
7. **Transfer Learning Attacks**: Exploiting vulnerabilities in the transfer learning process to manipulate the model's performance on the new task.
8. **Federated Learning Attacks**: Compromising client devices or server-side data in a federated learning setup to corrupt the global model or extract sensitive information.
9. **Edge AI Attacks**: Targeting edge devices that run AI models, either to exfiltrate data or manipulate model behavior at the edge.
10. **IoT AI Attacks**: Attacking IoT devices that use AI, potentially leading to data breaches or unauthorized control over the devices.
11. **Prompt Injection Attacks**: Manipulating input prompts in conversational AI to bypass safety measures or extract confidential information.
12. **Indirect Prompt Injection**: Exploiting vulnerabilities in systems that integrate LLMs to inject malicious prompts indirectly.

## Less Likely and Less Severe (13-19)

13. **Model Fairness Attacks**: Intentionally biasing the model by manipulating input data to affect its fairness and equity in decision-making.
14. **Model Explainability Attacks**: Designing inputs that make the model's decisions difficult to interpret, hindering transparency and trust.
15. **Robustness Attacks**: Testing the model's resilience by subjecting it to various types of perturbations to find weaknesses.
16. **Security Attacks**: Compromising the confidentiality, integrity, or availability of the model and its outputs.
17. **Integrity Attacks**: Tampering with the model's architecture, weights, or biases to alter its behavior without authorization.
18. **Jailbreaking Attacks**: Attempting to circumvent the ethical constraints or content filters built into an LLM.
19. **Training Data Extraction**: Inferring specific pieces of data that were used to train the model through carefully crafted queries.

## Least Likely and Less Severe (20-26)

20. **Synthetic Data Generation Attacks**: Creating synthetic data that is designed to mislead or degrade the performance of AI models.
21. **Model Stealing from Cloud**: Extracting a trained model from a cloud service without having direct access to it.
22. **Model Poisoning from Edge**: Introducing malicious data at edge devices to corrupt the model’s behavior.
23. **Model Drift Detection Evasion**: Evading mechanisms that detect when a model’s performance starts to degrade over time.
24. **Adversarial Example Generation with Deep Learning**: Using advanced deep learning techniques to create adversarial examples that deceive the model.
25. **Model Reprogramming**: Repurposing an existing model for a different task in a way that bypasses security measures.
26. **Thermal Side-Channel Attacks**: Using temperature variations in hardware during model inference to infer sensitive information.

## Rare and Least Severe (27-33)

27. **Transfer Learning Attacks from Pre-Trained Models**: Poisoning pre-trained models to influence their performance when transferred to new tasks.
28. **Model Fairness and Bias Detection Evasion**: Designing attacks to evade detection mechanisms that monitor model fairness and bias.
29. **Model Explainability Attack**: Attacking the model’s interpretability to prevent users from understanding its decision-making process.
30. **Deepfake Attacks**: Creating realistic fake audio or video content to manipulate events or conversations.
31. **Cloud-Based Model Replication**: Replicating trained models in the cloud to develop competing products or gain unauthorized insights.
32. **Confidentiality Attacks**: Attempting to extract sensitive or proprietary information embedded within the model’s parameters.
33. **Quantum Attacks on LLMs**: Using quantum computing to theoretically compromise the security of LLMs or their cryptographic protections.

## Extremely Rare and Least Severe (34-43)

34. **Model Stealing from Cloud with Pre-Trained Models**: Extracting pre-trained models from the cloud without direct access.
35. **Transfer Learning Attacks with Edge Devices**: Compromising the knowledge transferred to edge devices.
36. **Adversarial Example Generation with Model Inversion**: Creating adversarial examples using model inversion techniques to deceive the model.
37. **Backdoor Attacks**: Embedding hidden behaviors within the model that can be triggered by specific inputs.
38. **Watermarking Attacks**: Removing or altering watermarks designed to protect intellectual property in AI models.
39. **Neural Network Trojans**: Embedding malicious functionalities within the model that can be triggered under certain conditions.
40. **Model Black-Box Attacks**: Exploiting the model by only using input-output queries without internal knowledge of the model.
41. **Model Update Attacks**: Manipulating the model during its update process to introduce vulnerabilities.
42. **Gradient Inversion Attacks**: Reconstructing training data by exploiting gradients in federated learning.
43. **Side-Channel Timing Attacks**: Inferring model parameters or training data by measuring computation times during inference.

## Contributing

If you have any suggestions or additional attacks to add to this list, please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
