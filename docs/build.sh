#!/bin/bash

# Build script for LLM Attacks Hugo site

set -e

echo "🚀 Building LLM Attacks Documentation Site..."

# Check if Hugo is installed
if ! command -v hugo &> /dev/null; then
    echo "❌ Hugo is not installed. Please install Hugo first:"
    echo "   https://gohugo.io/installation/"
    exit 1
fi

# Check Hugo version
HUGO_VERSION=$(hugo version | grep -oE 'v[0-9]+\.[0-9]+\.[0-9]+' | head -1)
echo "📦 Using Hugo $HUGO_VERSION"

# Initialize submodules if needed
if [ ! -d "themes/hugo-book/.git" ]; then
    echo "📥 Initializing theme submodule..."
    git submodule update --init --recursive
fi

# Clean previous build
if [ -d "public" ]; then
    echo "🧹 Cleaning previous build..."
    rm -rf public
fi

# Build the site
echo "🔨 Building site..."
hugo --gc --minify

# Check if build was successful
if [ -d "public" ] && [ "$(ls -A public)" ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Output directory: $(pwd)/public"
    echo "🌐 To serve locally: hugo server"
else
    echo "❌ Build failed!"
    exit 1
fi
