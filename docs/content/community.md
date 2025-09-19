---
title: "Community"
weight: 30
bookToc: true
---

# Community Hub

<div style="text-align: center; margin: 2rem 0;">
  <p style="color: #6b7280;">Join the LLM security community</p>
</div>

## 🤝 Contribute

<div style="display: grid; gap: 1rem; margin: 2rem 0;">
  <a href="https://github.com/AI-Security-Research-Group/LLM-Attacks/issues" style="display: block; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-decoration: none; color: inherit;">
    <div style="font-weight: 600; color: #2563eb;">💡 Report New Attack</div>
    <div style="color: #6b7280; font-size: 0.875rem;">Found a new vulnerability? Share it with the community</div>
  </a>
  
  <a href="https://github.com/AI-Security-Research-Group/LLM-Attacks/discussions" style="display: block; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-decoration: none; color: inherit;">
    <div style="font-weight: 600; color: #059669;">💬 Join Discussion</div>
    <div style="color: #6b7280; font-size: 0.875rem;">Discuss mitigation strategies and share experiences</div>
  </a>
  
  <a href="https://github.com/AI-Security-Research-Group/LLM-Attacks/pulls" style="display: block; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-decoration: none; color: inherit;">
    <div style="font-weight: 600; color: #dc2626;">🔧 Improve Documentation</div>
    <div style="color: #6b7280; font-size: 0.875rem;">Help improve attack descriptions and mitigations</div>
  </a>
</div>

## 📊 Community Stats

<div style="display: flex; justify-content: center; gap: 2rem; margin: 2rem 0; flex-wrap: wrap;">
  <div style="text-align: center;">
    <div style="font-size: 2rem; color: #2563eb;" id="contributors">-</div>
    <div style="color: #6b7280;">contributors</div>
  </div>
  <div style="text-align: center;">
    <div style="font-size: 2rem; color: #059669;" id="discussions">-</div>
    <div style="color: #6b7280;">discussions</div>
  </div>
  <div style="text-align: center;">
    <div style="font-size: 2rem; color: #dc2626;" id="issues">-</div>
    <div style="color: #6b7280;">issues</div>
  </div>
</div>

## 🏆 Top Contributors

<div id="top-contributors" style="margin: 2rem 0;">
  <p style="color: #6b7280; text-align: center;">Loading...</p>
</div>

<script>
// Fetch GitHub stats
fetch('https://api.github.com/repos/AI-Security-Research-Group/LLM-Attacks')
  .then(response => response.json())
  .then(data => {
    document.getElementById('issues').textContent = data.open_issues_count || 0;
  });

fetch('https://api.github.com/repos/AI-Security-Research-Group/LLM-Attacks/contributors')
  .then(response => response.json())
  .then(data => {
    document.getElementById('contributors').textContent = data.length || 0;
    
    const topContributors = data.slice(0, 5);
    const contributorsHtml = topContributors.map(contributor => `
      <a href="${contributor.html_url}" style="display: inline-block; margin: 0.5rem; text-decoration: none;">
        <img src="${contributor.avatar_url}" alt="${contributor.login}" style="width: 3rem; height: 3rem; border-radius: 50%; border: 2px solid #e5e7eb;">
      </a>
    `).join('');
    
    document.getElementById('top-contributors').innerHTML = contributorsHtml;
  });
</script>
