// Custom JavaScript for LLM Attacks Documentation

document.addEventListener('DOMContentLoaded', function() {
    // Enhanced search functionality with highlighting
    const searchInput = document.getElementById('search');
    if (searchInput) {
        let searchTimeout;

        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();

            // Debounce search
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const rows = document.querySelectorAll('table tbody tr');
                let visibleCount = 0;

                rows.forEach(row => {
                    const text = row.textContent.toLowerCase();
                    const isVisible = !query || text.includes(query);

                    row.style.display = isVisible ? '' : 'none';
                    if (isVisible) {
                        visibleCount++;
                        // Add highlight effect
                        row.style.animation = 'fadeInScale 0.3s ease';
                    }
                });

                // Update search results count
                updateSearchResults(visibleCount, query);

                // Scroll to database if searching
                if (query && visibleCount > 0) {
                    document.getElementById('database')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 300);
        });

        // Add search suggestions
        const suggestions = ['prompt injection', 'data poisoning', 'jailbreak', 'adversarial', 'backdoor'];
        searchInput.addEventListener('focus', function() {
            if (!this.value) {
                this.placeholder = suggestions[Math.floor(Math.random() * suggestions.length)];
            }
        });
    }

    function updateSearchResults(count, query) {
        let resultDiv = document.getElementById('search-results');
        if (!resultDiv) {
            resultDiv = document.createElement('div');
            resultDiv.id = 'search-results';
            resultDiv.style.cssText = `
                text-align: center;
                margin: 1rem 0;
                padding: 0.5rem;
                color: #6b7280;
                font-size: 0.875rem;
            `;
            searchInput.parentNode.insertBefore(resultDiv, searchInput.nextSibling);
        }

        if (query) {
            resultDiv.textContent = `Found ${count} attack${count !== 1 ? 's' : ''} matching "${query}"`;
            resultDiv.style.display = 'block';
        } else {
            resultDiv.style.display = 'none';
        }
    }

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add copy button to code blocks
    document.querySelectorAll('pre code').forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        button.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: var(--primary-color);
            color: white;
            border: none;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.75rem;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.2s ease;
        `;
        
        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(button);
        
        pre.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
        });
        
        pre.addEventListener('mouseleave', () => {
            button.style.opacity = '0';
        });
        
        button.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            });
        });
    });

    // Add search highlighting
    function highlightSearchResults() {
        const urlParams = new URLSearchParams(window.location.search);
        const searchTerm = urlParams.get('q');
        
        if (searchTerm) {
            const content = document.querySelector('.book-page');
            if (content) {
                const walker = document.createTreeWalker(
                    content,
                    NodeFilter.SHOW_TEXT,
                    null,
                    false
                );
                
                const textNodes = [];
                let node;
                while (node = walker.nextNode()) {
                    textNodes.push(node);
                }
                
                textNodes.forEach(textNode => {
                    const parent = textNode.parentNode;
                    if (parent.tagName !== 'SCRIPT' && parent.tagName !== 'STYLE') {
                        const regex = new RegExp(`(${searchTerm})`, 'gi');
                        const highlighted = textNode.textContent.replace(regex, '<mark>$1</mark>');
                        if (highlighted !== textNode.textContent) {
                            const span = document.createElement('span');
                            span.innerHTML = highlighted;
                            parent.replaceChild(span, textNode);
                        }
                    }
                });
            }
        }
    }

    // Add table of contents generator
    function generateTableOfContents() {
        const headings = document.querySelectorAll('.book-page h2, .book-page h3, .book-page h4');
        if (headings.length > 3) {
            const toc = document.createElement('div');
            toc.className = 'table-of-contents';
            toc.innerHTML = '<h3>Table of Contents</h3>';
            
            const list = document.createElement('ul');
            list.style.cssText = `
                list-style: none;
                padding: 0;
                margin: 1rem 0;
                background: var(--light-bg);
                border-radius: 0.5rem;
                padding: 1rem;
                border-left: 4px solid var(--primary-color);
            `;
            
            headings.forEach((heading, index) => {
                const id = `heading-${index}`;
                heading.id = id;
                
                const listItem = document.createElement('li');
                listItem.style.cssText = `
                    margin: 0.5rem 0;
                    padding-left: ${(parseInt(heading.tagName.charAt(1)) - 2) * 1}rem;
                `;
                
                const link = document.createElement('a');
                link.href = `#${id}`;
                link.textContent = heading.textContent;
                link.style.cssText = `
                    color: var(--primary-color);
                    text-decoration: none;
                    font-size: 0.9rem;
                `;
                
                listItem.appendChild(link);
                list.appendChild(listItem);
            });
            
            toc.appendChild(list);
            
            const firstHeading = document.querySelector('.book-page h1, .book-page h2');
            if (firstHeading) {
                firstHeading.parentNode.insertBefore(toc, firstHeading.nextSibling);
            }
        }
    }

    // Add reading progress indicator
    function addReadingProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }

    // Add back to top button
    function addBackToTop() {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background: var(--primary-color);
            color: white;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: var(--shadow);
        `;
        
        document.body.appendChild(button);
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                button.style.opacity = '1';
                button.style.transform = 'scale(1)';
            } else {
                button.style.opacity = '0';
                button.style.transform = 'scale(0.8)';
            }
        });
        
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Add category filters for attack tables
    function addCategoryFilters() {
        const tables = document.querySelectorAll('table');
        tables.forEach(table => {
            const headers = table.querySelectorAll('th');
            let categoryColumnIndex = -1;
            
            headers.forEach((header, index) => {
                if (header.textContent.toLowerCase().includes('category')) {
                    categoryColumnIndex = index;
                }
            });
            
            if (categoryColumnIndex !== -1) {
                const categories = new Set();
                const rows = table.querySelectorAll('tbody tr, tr:not(:first-child)');
                
                rows.forEach(row => {
                    const cells = row.querySelectorAll('td');
                    if (cells[categoryColumnIndex]) {
                        categories.add(cells[categoryColumnIndex].textContent.trim());
                    }
                });
                
                if (categories.size > 1) {
                    const filterContainer = document.createElement('div');
                    filterContainer.style.cssText = `
                        margin: 1rem 0;
                        padding: 1rem;
                        background: var(--light-bg);
                        border-radius: 0.5rem;
                        border-left: 4px solid var(--accent-color);
                    `;
                    
                    const filterLabel = document.createElement('label');
                    filterLabel.textContent = 'Filter by Category: ';
                    filterLabel.style.cssText = `
                        font-weight: 600;
                        margin-right: 0.5rem;
                    `;
                    
                    const select = document.createElement('select');
                    select.style.cssText = `
                        padding: 0.5rem;
                        border-radius: 0.25rem;
                        border: 1px solid var(--border-color);
                        background: white;
                    `;
                    
                    const allOption = document.createElement('option');
                    allOption.value = '';
                    allOption.textContent = 'All Categories';
                    select.appendChild(allOption);
                    
                    Array.from(categories).sort().forEach(category => {
                        const option = document.createElement('option');
                        option.value = category;
                        option.textContent = category;
                        select.appendChild(option);
                    });
                    
                    select.addEventListener('change', () => {
                        const selectedCategory = select.value;
                        rows.forEach(row => {
                            const cells = row.querySelectorAll('td');
                            if (cells[categoryColumnIndex]) {
                                const rowCategory = cells[categoryColumnIndex].textContent.trim();
                                if (!selectedCategory || rowCategory === selectedCategory) {
                                    row.style.display = '';
                                } else {
                                    row.style.display = 'none';
                                }
                            }
                        });
                    });
                    
                    filterContainer.appendChild(filterLabel);
                    filterContainer.appendChild(select);
                    table.parentNode.insertBefore(filterContainer, table);
                }
            }
        });
    }

    // Initialize all enhancements
    highlightSearchResults();
    generateTableOfContents();
    addReadingProgress();
    addBackToTop();
    addCategoryFilters();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // Add loading animation for cards
    const cards = document.querySelectorAll('div[style*="border-left: 4px solid"]');
    cards.forEach((card, index) => {
        card.style.animation = `slideInUp 0.6s ease ${index * 0.1}s both`;
    });

    // Add pulse animation to critical stats
    const criticalStats = document.querySelectorAll('div[style*="color: #ef4444"]');
    criticalStats.forEach(stat => {
        stat.style.animation = 'pulse 2s infinite';
    });

    // Enhanced hover effects for risk level badges
    const riskBadges = document.querySelectorAll('td:nth-child(4)');
    riskBadges.forEach(badge => {
        const text = badge.textContent.trim();
        if (text === 'Critical') {
            badge.style.cssText += 'background: #fee2e2; color: #dc2626; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-weight: 600;';
        } else if (text === 'High') {
            badge.style.cssText += 'background: #fed7aa; color: #ea580c; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-weight: 600;';
        } else if (text === 'Medium') {
            badge.style.cssText += 'background: #fef3c7; color: #d97706; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-weight: 600;';
        } else if (text === 'Low') {
            badge.style.cssText += 'background: #dcfce7; color: #16a34a; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-weight: 600;';
        }
    });
});
