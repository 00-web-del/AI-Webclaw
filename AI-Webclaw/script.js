// ===== 数据存储 =====
const newsData = {
    1: {
        id: 1,
        title: 'OpenAI发布新一代推理模型，编程能力大幅提升',
        category: '行业动态',
        badge: '热门',
        time: '2小时前',
        views: '3.2k',
        icon: 'cpu',
        body: `<p>OpenAI今日正式发布了新一代推理模型，该模型在代码生成、调试和优化方面的表现实现了质的飞跃。</p>
<p>根据官方测试数据，新模型在LeetCode竞赛题目上的通过率提升了65%，在代码调试准确率上提升了80%。这意味着开发者可以更高效地完成复杂的编程任务，大幅减少调试时间。</p>
<p>此外，新模型还支持更长的上下文窗口，最大支持128K token，可以同时处理多个文件的大型项目。这对于代码重构、架构分析等任务具有重要意义。</p>
<p>企业用户方面，新模型提供了更强的安全控制和API管理功能，帮助企业更好地集成AI能力到现有工作流中。</p>`
    },
    2: {
        id: 2,
        title: 'Google Gemini 2.0全面开放，支持多模态实时交互',
        category: '产品更新',
        badge: '新发布',
        time: '4小时前',
        views: '2.8k',
        icon: 'brain-circuit',
        body: `<p>Google今日宣布Gemini 2.0正式全面开放，这是迄今为止最强大的多模态AI模型。</p>
<p>Gemini 2.0新增了视频通话、实时语音对话等功能，用户可以直接与模型进行面对面的交互。模型还能同时理解文本、图像、音频、视频等多种输入形式。</p>
<p>在性能方面，Gemini 2.0的速度比上一代提升了40%，成本降低了30%。这使得更多开发者能够负担得起使用该模型。</p>`
    },
    3: {
        id: 3,
        title: 'AI产品经理必备：7个提效工具推荐',
        category: '工具推荐',
        badge: '推荐',
        time: '6小时前',
        views: '1.9k',
        icon: 'toolbox',
        body: `<p>作为AI产品经理，掌握合适的工具可以大幅提升工作效率。以下是我们精心挑选的7个必备工具：</p>
<p><strong>1. Claude Pro</strong> - 用于需求分析和PRD撰写，理解力强，输出质量高。</p>
<p><strong>2. Figma AI</strong> - 一键生成原型图，节省设计时间。</p>
<p><strong>3. Notion AI</strong> - 智能生成文档、会议纪要。</p>
<p><strong>4. Maze</strong> - AI驱动的用户测试工具。</p>
<p><strong>5. UserTesting AI</strong> - 自动分析用户反馈。</p>
<p><strong>6. Miro AI</strong> - 协作白板，AI辅助头脑风暴。</p>
<p><strong>7. Mixpanel AI</strong> - 智能数据分析与洞察。</p>`
    },
    4: {
        id: 4,
        title: 'Anthropic研究：大模型推理成本有望降低80%',
        category: '行业动态',
        badge: '研究',
        time: '8小时前',
        views: '2.4k',
        icon: 'chart-line',
        body: `<p>Anthropic今日发布了一项突破性研究成果，该研究有望将大模型的推理成本降低80%。</p>
<p>这项名为"推理路径优化"的技术，通过智能选择最优推理路径，减少了不必要的计算量。在测试中，该技术在保持99%准确率的情况下，大幅降低了API调用成本。</p>
<p>这对于企业大规模部署AI应用意义重大。许多之前因成本考虑而无法落地的场景，现在有望成为现实。</p>`
    },
    5: {
        id: 5,
        title: 'Midjourney V7即将发布，主打3D生成能力',
        category: '产品更新',
        badge: '预告',
        time: '10小时前',
        views: '1.7k',
        icon: 'image-plus',
        body: `<p>Midjourney官方今日宣布，V7版本即将在下周发布，最大亮点是3D生成能力。</p>
<p>新版本支持直接生成3D模型文件，包括OBJ、GLTF等格式。用户只需输入文字描述，就能得到可直接用于游戏、动画的3D素材。</p>
<p>此外，V7还改进了生成质量，细节更丰富，风格更多样化。创作者生态将迎来重大变革。</p>`
    },
    6: {
        id: 6,
        title: '微软Copilot新增企业级自定义功能',
        category: '产品更新',
        badge: '企业',
        time: '12小时前',
        views: '2.1k',
        icon: 'building',
        body: `<p>微软今日宣布Copilot新增企业级自定义功能，帮助企业打造专属的AI助手。</p>
<p>企业现在可以上传内部文档、知识库，训练专属的Copilot模型。Copilot将深度集成到企业的工作流中，提供更加贴合业务的智能建议。</p>
<p>安全方面，新增的数据隔离、访问控制等功能，确保企业数据安全无虞。</p>`
    }
};

// ===== 收藏管理 =====
let favorites = JSON.parse(localStorage.getItem('aiWebclaw_favorites')) || [];

function saveFavorites() {
    localStorage.setItem('aiWebclaw_favorites', JSON.stringify(favorites));
}

function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(id);
    }
    saveFavorites();
    updateFavoriteButtons();
    renderFavorites();
}

function isFavorite(id) {
    return favorites.includes(id);
}

function updateFavoriteButtons() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const id = parseInt(btn.dataset.id);
        if (isFavorite(id)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function renderFavorites() {
    const widget = document.getElementById('favoritesWidget');
    if (favorites.length === 0) {
        widget.innerHTML = `
            <div class="favorites-empty">
                <i data-lucide="bookmark-off" style="width: 32px; height: 32px; margin-bottom: 8px;"></i>
                <p>暂无收藏内容</p>
            </div>
        `;
    } else {
        widget.innerHTML = favorites.map(id => {
            const news = newsData[id];
            if (!news) return '';
            return `
                <div class="favorite-item">
                    <h4>${news.title}</h4>
                    <p>${news.category} · ${news.time}</p>
                </div>
            `;
        }).join('');
    }
    lucide.createIcons();
}

// ===== 点击计数 =====
let clickCounts = JSON.parse(localStorage.getItem('aiWebclaw_clickCounts')) || {};

function incrementClickCount(id) {
    if (!clickCounts[id]) {
        clickCounts[id] = 0;
    }
    clickCounts[id]++;
    localStorage.setItem('aiWebclaw_clickCounts', JSON.stringify(clickCounts));
    updateTopItemsDisplay();
}

function updateTopItemsDisplay() {
    document.querySelectorAll('.top-item').forEach(item => {
        const id = item.dataset.id;
        if (id && clickCounts[id]) {
            const countEl = item.querySelector('.click-count');
            if (countEl) {
                const baseCount = parseInt(countEl.textContent);
                countEl.textContent = (baseCount + clickCounts[id]).toLocaleString();
            }
        }
    });
}

// ===== 新闻弹窗 =====
let currentModalNewsId = null;

function openModal(newsId) {
    const news = newsData[newsId];
    if (!news) return;

    currentModalNewsId = newsId;

    document.getElementById('modalBadge').textContent = news.badge;
    document.getElementById('modalCategory').textContent = news.category;
    document.getElementById('modalTitle').textContent = news.title;
    document.getElementById('modalBody').innerHTML = news.body;

    // 更新收藏按钮状态
    const favBtn = document.getElementById('modalFavoriteBtn');
    if (isFavorite(newsId)) {
        favBtn.innerHTML = '<i data-lucide="heart"></i> 已收藏';
        favBtn.classList.add('active');
    } else {
        favBtn.innerHTML = '<i data-lucide="heart"></i> 收藏文章';
        favBtn.classList.remove('active');
    }

    document.getElementById('newsModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function closeModal() {
    document.getElementById('newsModal').classList.remove('active');
    document.body.style.overflow = '';
    currentModalNewsId = null;
}

// ===== 搜索功能 =====
function searchNews(query) {
    const cards = document.querySelectorAll('.news-card');
    const lowerQuery = query.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const category = card.dataset.category.toLowerCase();

        if (title.includes(lowerQuery) || category.includes(lowerQuery)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== 深色模式 =====
function initDarkMode() {
    const savedTheme = localStorage.getItem('aiWebclaw_theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('aiWebclaw_theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    const icon = document.getElementById('themeIcon');
    if (icon) {
        icon.setAttribute('data-lucide', isDark ? 'moon' : 'sun');
        lucide.createIcons();
    }
}

// ===== 加载更多 =====
function loadMoreNews() {
    const btn = document.getElementById('loadMoreBtn');
    const grid = document.getElementById('newsGrid');

    // 模拟加载更多新闻
    btn.disabled = true;
    btn.innerHTML = '<i data-lucide="loader-2" class="spin"></i> 加载中...';
    lucide.createIcons();

    setTimeout(() => {
        // 添加3条新新闻
        const newNews = [
            { id: 7, title: 'Meta发布Llama 4，性能超越GPT-4', category: '产品更新', badge: '新发布', time: '14小时前', views: '1.5k', icon: 'cpu' },
            { id: 8, title: 'AI医疗突破：新模型可早期诊断阿尔茨海默症', category: '行业动态', badge: '研究', time: '16小时前', views: '1.3k', icon: 'heart-pulse' },
            { id: 9, title: 'AI写作工具对比：Claude vs GPT-4 vs Gemini', category: '工具推荐', badge: '评测', time: '18小时前', views: '1.1k', icon: 'pen-tool' }
        ];

        newNews.forEach(news => {
            newsData[news.id] = {
                id: news.id,
                title: news.title,
                category: news.category,
                badge: news.badge,
                time: news.time,
                views: news.views,
                icon: news.icon,
                body: `<p>${news.title}的详细内容...</p>`
            };

            const card = document.createElement('article');
            card.className = 'news-card';
            card.dataset.id = news.id;
            card.dataset.category = news.category;
            card.innerHTML = `
                <div class="news-image">
                    <div class="news-badge">${news.badge}</div>
                    <div class="news-actions">
                        <button class="news-action-btn favorite-btn" data-id="${news.id}"><i data-lucide="heart"></i></button>
                    </div>
                    <div class="news-placeholder"><i data-lucide="${news.icon}"></i></div>
                </div>
                <div class="news-content">
                    <span class="news-category">${news.category}</span>
                    <h3>${news.title}</h3>
                    <p class="news-excerpt">这里是新闻摘要内容...</p>
                    <div class="news-meta">
                        <span><i data-lucide="clock"></i> ${news.time}</span>
                        <span><i data-lucide="eye"></i> ${news.views}</span>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        lucide.createIcons();
        updateFavoriteButtons();
        bindNewsCardEvents();

        btn.disabled = false;
        btn.innerHTML = '<i data-lucide="refresh-cw"></i> 加载更多';
    }, 1000);
}

// ===== 产品经理板块切换 =====
function initPMTabs() {
    const tabs = document.querySelectorAll('.pm-tab');
    const cards = document.querySelectorAll('.pm-card');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const targetTab = tab.dataset.tab;

            cards.forEach(card => {
                if (card.dataset.tab === targetTab) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ===== 绑定事件 =====
function bindNewsCardEvents() {
    document.querySelectorAll('.news-card').forEach(card => {
        // 点击卡片打开详情
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.news-action-btn')) {
                const id = parseInt(card.dataset.id);
                openModal(id);
            }
        });

        // 收藏按钮
        const favBtn = card.querySelector('.favorite-btn');
        if (favBtn) {
            favBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(favBtn.dataset.id);
                toggleFavorite(id);
            });
        }
    });

    // 热门文章点击计数
    document.querySelectorAll('.top-item').forEach(item => {
        item.addEventListener('click', () => {
            const id = item.dataset.id;
            incrementClickCount(id);
        });
    });
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // 初始化深色模式
    initDarkMode();

    // 深色模式切换
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }

    // 移动端菜单切换
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchNews(e.target.value);
            }, 300);
        });
    }

    // 加载更多
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreNews);
    }

    // 弹窗关闭
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('newsModal');

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // 弹窗收藏按钮
    const modalFavBtn = document.getElementById('modalFavoriteBtn');
    if (modalFavBtn) {
        modalFavBtn.addEventListener('click', () => {
            if (currentModalNewsId) {
                toggleFavorite(currentModalNewsId);
                if (isFavorite(currentModalNewsId)) {
                    modalFavBtn.innerHTML = '<i data-lucide="heart"></i> 已收藏';
                    modalFavBtn.classList.add('active');
                } else {
                    modalFavBtn.innerHTML = '<i data-lucide="heart"></i> 收藏文章';
                    modalFavBtn.classList.remove('active');
                }
                lucide.createIcons();
            }
        });
    }

    // 订阅表单
    const subscribeForm = document.getElementById('subscribeForm');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = subscribeForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();

            if (email && isValidEmail(email)) {
                showSuccessMessage(subscribeForm);
                emailInput.value = '';
            } else {
                showError(subscribeForm, '请输入有效的邮箱地址');
            }
        });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#news' && href !== '#pm-section') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 初始化产品经理标签
    initPMTabs();

    // 绑定新闻卡片事件
    bindNewsCardEvents();

    // 更新收藏按钮状态
    updateFavoriteButtons();

    // 渲染收藏列表
    renderFavorites();

    // 更新点击计数显示
    updateTopItemsDisplay();

    // ESC关闭弹窗
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// ===== 辅助函数 =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showSuccessMessage(form) {
    const successMsg = document.createElement('div');
    successMsg.className = 'subscribe-success';
    successMsg.style.cssText = `
        background: rgba(34, 197, 94, 0.2);
        color: #22c55e;
        padding: 10px;
        border-radius: 8px;
        font-size: 0.875rem;
        margin-top: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
    `;
    successMsg.innerHTML = '<i data-lucide="check-circle"></i> 订阅成功！感谢您的关注';

    form.parentNode.insertBefore(successMsg, form.nextSibling);
    lucide.createIcons();

    setTimeout(() => {
        successMsg.style.opacity = '0';
        successMsg.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            successMsg.remove();
        }, 300);
    }, 3000);
}

function showError(form, message) {
    const errorMsg = document.createElement('div');
    errorMsg.className = 'subscribe-error';
    errorMsg.style.cssText = `
        background: rgba(239, 68, 68, 0.2);
        color: #ef4444;
        padding: 10px;
        border-radius: 8px;
        font-size: 0.875rem;
        margin-top: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
    `;
    errorMsg.innerHTML = '<i data-lucide="alert-circle"></i> ' + message;

    const existingError = form.parentNode.querySelector('.subscribe-error');
    if (existingError) {
        existingError.remove();
    }

    form.parentNode.insertBefore(errorMsg, form.nextSibling);
    lucide.createIcons();

    setTimeout(() => {
        errorMsg.style.opacity = '0';
        errorMsg.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            errorMsg.remove();
        }, 300);
    }, 3000);
}
