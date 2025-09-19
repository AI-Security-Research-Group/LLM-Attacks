---
title: "Attack Types"
weight: 10
bookCollapseSection: false
---

<div class="hero-section" style="background: linear-gradient(135deg, #dc2626, #7c2d12); color: white; padding: 2rem; border-radius: 1rem; margin-bottom: 2rem; text-align: center;">
  <h1 style="font-size: 2.5rem; margin-bottom: 1rem; color: white;">🎯 Attack Types</h1>
  <p style="font-size: 1.1rem; opacity: 0.9;">Detailed documentation for various types of attacks against Large Language Models</p>
</div>

<div class="alert alert-info" style="margin: 2rem 0; padding: 1rem 1.5rem; border-radius: 0.75rem; background: #dbeafe; border-left: 4px solid #2563eb; color: #1e40af;">
  <strong>📚 Documentation Status:</strong> This section contains detailed guides for 5 major attack categories. Additional documentation for all 71 attacks is being developed.
</div>

## 🔍 Available Attack Documentation

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1.5rem; margin: 2rem 0;">

  <div class="attack-card" style="background: white; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(135deg, #2563eb, #059669);"></div>
    <h3 style="color: #2563eb; margin-bottom: 1rem;">🎭 Adversarial Examples</h3>
    <p style="color: #6b7280; margin-bottom: 1rem;">Crafty manipulations of input data that trick models into making incorrect predictions, potentially leading to harmful decisions.</p>
    <div style="margin-bottom: 1rem;">
      <span style="background: #dbeafe; color: #1e40af; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; font-weight: 500;">Input Manipulation</span>
    </div>
    <a href="adversarial" style="color: #2563eb; text-decoration: none; font-weight: 500;">Read More →</a>
  </div>

  <div class="attack-card" style="background: white; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(135deg, #dc2626, #991b1b);"></div>
    <h3 style="color: #dc2626; margin-bottom: 1rem;">☠️ Data Poisoning</h3>
    <p style="color: #6b7280; margin-bottom: 1rem;">Malicious data injections into the training set that corrupt the model's performance, causing biased or incorrect behavior.</p>
    <div style="margin-bottom: 1rem;">
      <span style="background: #fee2e2; color: #991b1b; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; font-weight: 500;">Foundational</span>
    </div>
    <a href="data-poisoning" style="color: #dc2626; text-decoration: none; font-weight: 500;">Read More →</a>
  </div>

  <div class="attack-card" style="background: white; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(135deg, #7c3aed, #5b21b6);"></div>
    <h3 style="color: #7c3aed; margin-bottom: 1rem;">🔍 Model Inversion</h3>
    <p style="color: #6b7280; margin-bottom: 1rem;">Inferring the input values used to train the model, potentially exposing sensitive information from the training data.</p>
    <div style="margin-bottom: 1rem;">
      <span style="background: #ede9fe; color: #5b21b6; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; font-weight: 500;">Privacy</span>
    </div>
    <a href="model-inversion" style="color: #7c3aed; text-decoration: none; font-weight: 500;">Read More →</a>
  </div>

  <div class="attack-card" style="background: white; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(135deg, #059669, #047857);"></div>
    <h3 style="color: #059669; margin-bottom: 1rem;">🕵️ Membership Inference</h3>
    <p style="color: #6b7280; margin-bottom: 1rem;">Determining whether specific data points were part of the model's training set, leading to privacy breaches.</p>
    <div style="margin-bottom: 1rem;">
      <span style="background: #d1fae5; color: #065f46; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; font-weight: 500;">Privacy</span>
    </div>
    <a href="membership-inference" style="color: #059669; text-decoration: none; font-weight: 500;">Read More →</a>
  </div>

  <div class="attack-card" style="background: white; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(135deg, #d97706, #92400e);"></div>
    <h3 style="color: #d97706; margin-bottom: 1rem;">🎯 Query Manipulation</h3>
    <p style="color: #6b7280; margin-bottom: 1rem;">Crafting malicious queries that cause the model to reveal unintended information or behave undesirably.</p>
    <div style="margin-bottom: 1rem;">
      <span style="background: #fef3c7; color: #92400e; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; font-weight: 500;">Prompt-Based</span>
    </div>
    <a href="query-manipulation" style="color: #d97706; text-decoration: none; font-weight: 500;">Read More →</a>
  </div>

</div>

## 📈 Attack Categories Overview

<div style="background: #f8fafc; padding: 1.5rem; border-radius: 0.75rem; border-left: 4px solid #2563eb; margin: 2rem 0;">
  <h3 style="color: #2563eb; margin-bottom: 1rem;">🏷️ Attack Classification</h3>
  <p style="color: #6b7280; margin-bottom: 1rem;">Our comprehensive database categorizes attacks into 8 main categories:</p>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
    <div style="background: white; padding: 1rem; border-radius: 0.5rem; text-align: center;">
      <div style="font-weight: 600; color: #2563eb;">Agentic AI</div>
      <div style="font-size: 0.875rem; color: #6b7280;">Multi-agent exploits</div>
    </div>
    <div style="background: white; padding: 1rem; border-radius: 0.5rem; text-align: center;">
      <div style="font-weight: 600; color: #dc2626;">Foundational</div>
      <div style="font-size: 0.875rem; color: #6b7280;">Core model attacks</div>
    </div>
    <div style="background: white; padding: 1rem; border-radius: 0.5rem; text-align: center;">
      <div style="font-weight: 600; color: #059669;">Privacy</div>
      <div style="font-size: 0.875rem; color: #6b7280;">Data inference</div>
    </div>
    <div style="background: white; padding: 1rem; border-radius: 0.5rem; text-align: center;">
      <div style="font-weight: 600; color: #d97706;">Prompt-Based</div>
      <div style="font-size: 0.875rem; color: #6b7280;">Input manipulation</div>
    </div>
  </div>
</div>

## 📋 What Each Guide Includes

<div style="background: white; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0;">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
    <div style="text-align: center; padding: 1rem;">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">📖</div>
      <div style="font-weight: 600; color: #2563eb;">Overview & Description</div>
      <div style="font-size: 0.875rem; color: #6b7280;">Comprehensive explanation</div>
    </div>
    <div style="text-align: center; padding: 1rem;">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
      <div style="font-weight: 600; color: #059669;">Attack Variations</div>
      <div style="font-size: 0.875rem; color: #6b7280;">Different attack methods</div>
    </div>
    <div style="text-align: center; padding: 1rem;">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">🛡️</div>
      <div style="font-weight: 600; color: #d97706;">Protection Strategies</div>
      <div style="font-size: 0.875rem; color: #6b7280;">Defense mechanisms</div>
    </div>
    <div style="text-align: center; padding: 1rem;">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">🌍</div>
      <div style="font-weight: 600; color: #7c3aed;">Real-world Examples</div>
      <div style="font-size: 0.875rem; color: #6b7280;">Practical case studies</div>
    </div>
  </div>
</div>
