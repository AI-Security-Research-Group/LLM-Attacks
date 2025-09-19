# LLM Attacks Documentation Site

This documentation site has been migrated from Jekyll to Hugo for better performance and easier maintenance.

## 🚀 Quick Start

### Prerequisites
- [Hugo Extended](https://gohugo.io/installation/) (v0.150.0 or later)
- Git

### Local Development

1. **Clone the repository with submodules:**
   ```bash
   git clone --recursive https://github.com/AI-Security-Research-Group/LLM-Attacks.git
   cd LLM-Attacks/docs
   ```

2. **If you already cloned without submodules:**
   ```bash
   git submodule update --init --recursive
   ```

3. **Start the development server:**
   ```bash
   hugo server --buildDrafts
   ```

4. **Open your browser to:**
   ```
   http://localhost:1313/LLM-Attacks/
   ```

## 📁 Project Structure

```
docs/
├── archetypes/          # Content templates
├── assets/              # Asset processing (SCSS, JS, etc.)
├── content/             # Markdown content files
│   ├── _index.md        # Homepage
│   ├── attacks/         # Attack documentation
│   │   ├── _index.md    # Attacks section index
│   │   ├── adversarial.md
│   │   ├── data-poisoning.md
│   │   ├── model-inversion.md
│   │   ├── membership-inference.md
│   │   └── query-manipulation.md
│   └── menu/            # Navigation menu
│       └── index.md
├── data/                # Data files (YAML, JSON, TOML)
├── i18n/                # Internationalization
├── layouts/             # Custom templates
├── static/              # Static files (images, CSS, JS)
├── themes/              # Hugo themes
│   └── hugo-book/       # Book theme for documentation
├── hugo.toml            # Hugo configuration
└── README.md            # This file
```

## ✨ Features

- **Fast Performance**: Hugo's static site generation provides excellent performance
- **Modern Theme**: Using the hugo-book theme optimized for documentation
- **Search Functionality**: Built-in search capabilities
- **Mobile Responsive**: Fully responsive design
- **GitHub Integration**: Direct links to edit pages on GitHub
- **Automatic Deployment**: GitHub Actions workflow for automatic deployment

## 📝 Adding Content

### Creating New Attack Documentation

1. **Create a new markdown file:**
   ```bash
   hugo new content/attacks/new-attack.md
   ```

2. **Add front matter:**
   ```yaml
   ---
   title: "New Attack Type"
   weight: 60
   bookToc: true
   ---
   ```

3. **Write your content using standard Markdown**

### Updating the Menu

Edit `content/menu/index.md` to add new navigation items:

```markdown
- [New Attack]({{< relref "/attacks/new-attack" >}})
```

## 🎨 Customization

### Theme Configuration

The site uses the hugo-book theme. Key configuration options in `hugo.toml`:

- `BookRepo`: GitHub repository URL
- `BookEditPage`: Enable edit page links
- `BookSearch`: Enable search functionality
- `BookToC`: Enable table of contents

### Styling

- Custom CSS can be added to `assets/` directory
- Theme overrides can be placed in `layouts/` directory

## 🚀 Deployment

### Automatic Deployment (Recommended)

The site automatically deploys to GitHub Pages when changes are pushed to the main branch via GitHub Actions.

### Manual Deployment

1. **Build the site:**
   ```bash
   hugo --gc --minify
   ```

2. **Deploy the `public/` directory to your hosting provider**

## 🔧 Development Commands

```bash
# Start development server
hugo server --buildDrafts

# Start server with live reload
hugo server --buildDrafts --livereload

# Build for production
hugo --gc --minify

# Check for broken links
hugo --gc --minify --printPathWarnings

# Update theme
git submodule update --remote themes/hugo-book
```

## 📚 Hugo Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Book Theme](https://github.com/alex-shpak/hugo-book)
- [Markdown Guide](https://www.markdownguide.org/)

## 🆘 Troubleshooting

### Common Issues

1. **Theme not loading**: Ensure submodules are initialized
   ```bash
   git submodule update --init --recursive
   ```

2. **Build errors**: Check Hugo version compatibility
   ```bash
   hugo version
   ```

3. **Broken links**: Use relative links with Hugo's `relref` shortcode
   ```markdown
   [Link Text]({{< relref "/path/to/page" >}})
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `hugo server`
5. Submit a pull request

## 📄 License

This project is licensed under the GPL-3.0 License - see the [LICENSE](../LICENSE) file for details.
