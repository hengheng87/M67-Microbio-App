// ==========================================
// M67 微免系統主程式 (V11.0 Consolidated)
// ==========================================

// 1. 引入資料 (確保您的 js/data/ 資料夾內有這兩個檔案)
import { pathogenData } from './data/pathogens.js';
import { pastExamDB } from './data/exams.js';

// 2. 全域變數定義
let viewHistory = [];        
let currentViewRestorer = null; 
let isNavigatingBack = false;   
let userApiKey = localStorage.getItem('gemini_api_key') || '';
let currentQuestionData = null;
let isGenerating = false;
let currentExamQuestionId = null;
let currentExamSource = null;
let currentSearchTerm = '';
let userSelectedExamIdx = null; // 用於紀錄使用者選擇的選項

// ==========================================
// A. 核心系統與導航 (Core System)
// ==========================================

function initSystem() {
    // 讀取 API Key
    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey) {
        const input = document.getElementById('headerApiKey');
        if(input) input.value = savedKey;
        if (typeof userApiKey !== 'undefined') userApiKey = savedKey;
    }
    
    // 設定起點
    currentViewRestorer = () => renderDashboard();
    
    // 初始化歷史紀錄狀態
    if (!history.state) {
        history.replaceState({ type: 'root' }, '');
    }
    
    // 監聽硬體返回鍵
    window.addEventListener('popstate', (event) => {
        const modal = document.getElementById('examModal');
        if (modal && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
            return;
        }

        if (viewHistory.length > 0) {
            const previousView = viewHistory.pop();
            isNavigatingBack = true; 
            previousView();
        }
        
        updateBackButtonState();
    });

    updateBackButtonState();
    
    // 綁定開關事件
    const toggle = document.getElementById('examToggle');
    if(toggle) toggle.addEventListener('change', toggleExamMode);
}

function updateView(restorerFunc) {
    if (isNavigatingBack) {
        currentViewRestorer = restorerFunc;
        isNavigatingBack = false; 
    } else {
        if (currentViewRestorer) {
            viewHistory.push(currentViewRestorer);
            history.pushState({ type: 'view' }, '');
        }
        currentViewRestorer = restorerFunc;
    }
    updateBackButtonState();
}

function goBack() {
    if (viewHistory.length > 0) {
        history.back();
    }
}

function updateBackButtonState() {
    const btn = document.getElementById('globalBackBtn');
    if (!btn) return;
    if (viewHistory.length > 0) {
        btn.classList.remove('hidden');
    } else {
        btn.classList.add('hidden');
    }
}

function updateGlobalApiKey(val) {
    const cleanVal = val.trim();
    localStorage.setItem('gemini_api_key', cleanVal);
    userApiKey = cleanVal;
    
    const headerInput = document.getElementById('headerApiKey');
    const mobileInput = document.getElementById('mobileApiKeyInput');
    if(headerInput) headerInput.value = cleanVal;
    if(mobileInput) mobileInput.value = cleanVal;

    if(headerInput) {
        headerInput.parentElement.classList.add('ring-2', 'ring-green-400');
        setTimeout(() => headerInput.parentElement.classList.remove('ring-2', 'ring-green-400'), 500);
    }
}

// ==========================================
// B. 儀表板與內容渲染 (Dashboard & Content)
// ==========================================

function renderSidebar() {
    const nav = document.getElementById('sidebarNav');
    if(!nav) return;
    
    const categories = {};
    for (const [key, data] of Object.entries(pathogenData)) {
        if (!categories[data.category]) categories[data.category] = [];
        categories[data.category].push({ key, title: data.title, color: data.color });
    }
    nav.innerHTML = Object.entries(categories).map(([cat, items]) => `
        <div class="mb-4">
            <h4 class="px-4 text-[10px] font-bold text-gray-400 uppercase mb-2 border-b border-gray-100 pb-1 sticky top-0 bg-white z-10">${cat}</h4>
            <div class="space-y-0.5 px-2">
                ${items.map(item => `<button onclick="loadContent('${item.key}')" class="nav-btn w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-medical-50 hover:text-medical-800 transition flex items-center gap-2 text-gray-600 group" data-key="${item.key}"><div class="w-1.5 h-1.5 rounded-full bg-${item.color}-400 group-hover:scale-125 transition-transform"></div><span class="truncate">${item.title}</span></button>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderDashboard() {
    updateView(() => renderDashboard());
    const container = document.getElementById('contentArea');
    const toc = document.getElementById('toc');
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('bg-medical-50', 'text-medical-800', 'ring-1', 'ring-medical-200'));
    
    toc.innerHTML = `<li><a href="#" class="text-medical-600 font-bold block py-1">儀表板總覽</a></li><li class="mt-4 text-xs text-gray-400">選擇下方類別卡片，查看該分類的所有病原體比較整理。</li>`;
    
    container.innerHTML = `
        <div class="max-w-5xl mx-auto animate-fade-in pb-10">
            <div class="bg-gradient-to-br from-medical-800 to-medical-600 rounded-2xl shadow-xl p-8 text-white mb-10 relative overflow-hidden">
                <div class="relative z-10"><h2 class="text-3xl font-bold mb-2">微免期末考戰情室</h2><p class="text-medical-100 text-lg opacity-90">Virology & Mycology Review Dashboard V11.0</p></div>
                <i class="fas fa-dna absolute -right-6 -bottom-6 text-9xl text-white/10 rotate-12"></i>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${createDashboardCard('DNA Viruses', 'fas fa-dna', 'blue', 'Parvo, HPV, Adeno, Pox, Herpes')}
                ${createDashboardCard('RNA Viruses', 'fas fa-bacterium', 'red', 'Flu, Measles, Dengue, HIV, Polio')}
                ${createDashboardCard('Medical Mycology', 'fas fa-fungi', 'green', '表淺, 皮下, 全身性, 伺機性')}
                ${createDashboardCard('Hepatitis Viruses', 'fas fa-liver', 'yellow', 'HAV - HEV 比較與血清學')}
                ${createDashboardCard('Prions', 'fas fa-brain', 'purple', 'CJD, Kuru, Spongiform')}

                <div class="bg-gradient-to-br from-purple-800 to-indigo-900 p-6 rounded-xl shadow-sm border border-purple-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 dash-card cursor-pointer group relative overflow-hidden" onclick="renderAILab()">
                    <div class="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition"></div>
                    <div class="flex items-center justify-between mb-4 relative z-10">
                        <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-purple-300 text-xl backdrop-blur-sm group-hover:bg-white/20 group-hover:text-white transition"><i class="fas fa-robot"></i></div>
                        <span class="bg-purple-500/30 text-purple-200 text-[10px] px-2 py-1 rounded border border-purple-500/50 backdrop-blur-md">AI Lab</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-1 relative z-10">AI 臨床診斷實驗室</h3>
                    <p class="text-sm text-purple-200 mb-3 relative z-10">生成無限量臨床模擬試題 (USMLE Style)。</p>
                </div>

                <div class="bg-gradient-to-br from-teal-500 to-emerald-700 p-6 rounded-xl shadow-sm border border-teal-400 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 dash-card cursor-pointer group relative overflow-hidden" onclick="renderExamDashboard()">
                    <div class="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition"></div>
                    <div class="flex items-center justify-between mb-4 relative z-10">
                        <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-teal-100 text-xl backdrop-blur-sm group-hover:bg-white/20 group-hover:text-white transition"><i class="fas fa-pen-alt"></i></div>
                        <span class="bg-teal-900/30 text-teal-100 text-[10px] px-2 py-1 rounded border border-teal-500/50 backdrop-blur-md">Exam</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-1 relative z-10">考古題衝刺模式</h3>
                    <p class="text-sm text-teal-100 mb-3 relative z-10">歷屆試題庫，搭載 AI 解析引擎。</p>
                </div>
            </div>
        </div>`;
    container.scrollTop = 0;
}

function createDashboardCard(category, icon, color, desc) {
    return `
    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-${color}-300 dash-card cursor-pointer group" onclick="renderCategoryOverview('${category}')">
        <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 rounded-full bg-${color}-50 flex items-center justify-center text-${color}-600 text-xl group-hover:bg-${color}-600 group-hover:text-white transition-colors"><i class="${icon}"></i></div>
            <i class="fas fa-arrow-right text-gray-300 group-hover:text-${color}-500 transition-transform group-hover:translate-x-1"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-1">${category}</h3>
        <p class="text-sm text-gray-500 mb-3">${desc}</p>
    </div>`;
}

function renderCategoryOverview(targetCategory) {
    updateView(() => renderCategoryOverview(targetCategory));
    const container = document.getElementById('contentArea');
    const toc = document.getElementById('toc');
    
    const items = Object.entries(pathogenData).filter(([key, data]) => data.category === targetCategory);
    if (items.length === 0) return;

    const cardsHTML = items.map(([key, data]) => `
        <div onclick="loadContent('${key}')" class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-${data.color}-300 transition cursor-pointer group relative overflow-hidden">
            <div class="absolute top-0 right-0 w-16 h-16 bg-${data.color}-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div class="relative z-10">
                <div class="flex justify-between items-start mb-2">
                    <span class="text-[10px] font-bold text-${data.color}-600 bg-${data.color}-50 px-2 py-0.5 rounded border border-${data.color}-100 uppercase tracking-wider">${data.family}</span>
                    <i class="fas fa-arrow-right text-gray-300 group-hover:text-${data.color}-500 transition-transform group-hover:translate-x-1"></i>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-3 group-hover:text-${data.color}-700 transition-colors">${data.title}</h3>
                <div class="space-y-2">
                    <div class="flex items-center text-xs text-gray-600"><span class="w-6 text-center text-gray-400 mr-2"><i class="fas fa-dna"></i></span><span class="font-medium bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">${data.tags.genome}</span></div>
                    <div class="flex items-center text-xs text-gray-600"><span class="w-6 text-center text-gray-400 mr-2"><i class="fas ${data.tags.envelope === 'Naked' ? 'fa-ban' : 'fa-shield-virus'}"></i></span><span class="font-medium ${data.tags.envelope === 'Naked' ? 'text-orange-600 bg-orange-50 border-orange-100' : 'text-purple-600 bg-purple-50 border-purple-100'} px-1.5 py-0.5 rounded border">${data.tags.envelope}</span></div>
                    <div class="flex items-start text-xs text-gray-600"><span class="w-6 text-center text-gray-400 mr-2 mt-0.5"><i class="fas fa-notes-medical"></i></span><span class="flex-1 leading-relaxed">${data.tags.disease}</span></div>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="animate-fade-in pb-20 max-w-6xl mx-auto">
            <div class="mb-8 border-b border-gray-200 pb-4">
                <div class="flex items-center gap-2 mb-2"><button onclick="renderDashboard()" class="text-xs font-bold text-gray-400 hover:text-medical-600 transition uppercase tracking-wider flex items-center gap-1"><i class="fas fa-chevron-left"></i> 回儀表板</button></div>
                <h1 class="text-3xl font-bold text-gray-900 flex items-center gap-3">${targetCategory} <span class="text-lg font-normal text-gray-500">分類總覽</span></h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">${cardsHTML}</div>
        </div>`;
    
    toc.innerHTML = `
        <li><a href="#" onclick="renderDashboard(); return false;" class="text-medical-600 font-bold block py-1 hover:underline mb-2"><i class="fas fa-arrow-left mr-1"></i>回儀表板</a></li>
        <li class="border-t border-gray-100 my-2"></li>
        ${items.map(([key, data]) => `<li><a href="#" onclick="loadContent('${key}')" class="hover:text-medical-600 block py-1 border-l-2 border-transparent hover:border-medical-400 pl-2 transition truncate text-xs text-gray-600">${data.title}</a></li>`).join('')}`;
    container.scrollTop = 0;
}

function loadContent(key, fromSearch = false) {
    updateView(() => loadContent(key, fromSearch));
    const data = pathogenData[key];
    if (!data) return;
    
    const highlight = (text) => fromSearch && currentSearchTerm ? highlightString(text, currentSearchTerm) : text;
    const container = document.getElementById('contentArea');
    const toc = document.getElementById('toc');
    
    const tagsHTML = `<div class="flex flex-wrap gap-2 mb-6"><span class="tag-badge bg-indigo-50 text-indigo-700 border border-indigo-100"><i class="fas fa-dna mr-1.5 text-indigo-400"></i> ${data.tags.genome}</span><span class="tag-badge ${data.tags.envelope === 'Naked' ? 'bg-orange-50 text-orange-700 border-orange-100' : 'bg-purple-50 text-purple-700 border-purple-100'}"><i class="fas ${data.tags.envelope === 'Naked' ? 'fa-ban' : 'fa-shield-virus'} mr-1.5 opacity-60"></i> ${data.tags.envelope}</span><span class="tag-badge bg-red-50 text-red-700 border border-red-100"><i class="fas fa-notes-medical mr-1.5 text-red-400"></i> ${data.tags.disease}</span></div>`;
    
    const quickFactsHTML = data.quickFacts.map(f => {
        let displayVal = fromSearch ? highlightString(f.val, currentSearchTerm) : f.val;
        return `<div class="bg-white p-3 rounded border border-gray-100 shadow-sm hover:border-medical-200 transition"><div class="text-[10px] text-gray-400 uppercase font-bold mb-1">${highlight(f.label)}</div><div class="text-sm font-medium text-gray-800 flex items-start justify-between gap-2"><span class="leading-tight">${displayVal}</span>${f.src ? `<span class="bg-gray-50 border border-gray-200 text-gray-400 text-[9px] px-1 rounded whitespace-nowrap" title="Source">${f.src}</span>` : ''}</div></div>`;
    }).join('');
    
    const sectionsHTML = data.sections.map((sec, index) => {
        let content = sec.content;
        if(fromSearch && currentSearchTerm) {
            const regex = new RegExp(`(${currentSearchTerm})(?![^<]*>|[^<>]*<\/)`, 'gi');
            content = content.replace(regex, '<span class="search-highlight">$1</span>');
        }
        return `<section id="sec-${index}" class="mb-8 scroll-mt-20"><div class="flex items-center gap-3 mb-3 pb-2 border-b border-gray-200/60"><h2 class="text-lg font-bold text-medical-800 flex items-center gap-2"><span class="w-1 h-5 bg-medical-500 rounded-full"></span> ${highlight(sec.title)}</h2></div><div class="prose prose-sm max-w-none text-gray-600 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">${content}</div></section>`;
    }).join('');

    container.innerHTML = `<div class="animate-fade-in pb-20 max-w-4xl mx-auto"><div class="mb-4"><div class="flex items-center gap-2 mb-2"><span class="px-2 py-0.5 bg-${data.color}-100 text-${data.color}-700 text-[10px] font-bold rounded uppercase tracking-wider border border-${data.color}-200">${data.family}</span><span class="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold rounded uppercase tracking-wider border border-gray-200">${data.category}</span></div><h1 class="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">${highlight(data.title)}</h1>${tagsHTML}</div><div class="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-8">${quickFactsHTML}</div>${sectionsHTML}</div>`;
    
    toc.innerHTML = `<li><a href="#" onclick="renderDashboard(); return false;" class="text-medical-600 font-bold block py-1 hover:underline mb-2"><i class="fas fa-arrow-left mr-1"></i>回儀表板</a></li><li class="border-t border-gray-100 my-2"></li>${data.sections.map((sec, index) => `<li><a href="#sec-${index}" class="hover:text-medical-600 block py-1 border-l-2 border-transparent hover:border-medical-400 pl-2 transition truncate text-xs">${sec.title}</a></li>`).join('')}`;
    
    toggleExamMode();
    if (!fromSearch) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('bg-medical-50', 'text-medical-800', 'ring-1', 'ring-medical-200');
            if(btn.dataset.key === key) btn.classList.add('bg-medical-50', 'text-medical-800', 'ring-1', 'ring-medical-200');
        });
    }
    container.scrollTop = 0;
}

function toggleExamMode() {
    const isChecked = document.getElementById('examToggle')?.checked;
    if(!isChecked) return;
    document.querySelectorAll('.exam-target').forEach(el => {
        if (isChecked) {
            el.classList.add('exam-blur');
            el.title = "點擊顯示";
            el.onclick = function(e) { e.stopPropagation(); this.classList.remove('exam-blur'); };
        } else {
            el.classList.remove('exam-blur');
            el.onclick = null;
            el.title = "";
        }
    });
}

// ==========================================
// C. 搜尋系統 (Search System)
// ==========================================

function handleSearch(query) {
    currentSearchTerm = query.trim().toLowerCase();
    if (currentSearchTerm.length === 0) {
        renderSidebar(); 
    } else {
        performSearch(currentSearchTerm);
    }
}

function performSearch(term) {
    const nav = document.getElementById('sidebarNav');
    const results = [];

    for (const [key, data] of Object.entries(pathogenData)) {
        let score = 0;
        let context = '';

        if (data.title.toLowerCase().includes(term)) {
            score += 10;
            context = '標題符合';
        } else if (data.quickFacts.some(f => f.val.toLowerCase().includes(term) || f.label.toLowerCase().includes(term))) {
            score += 5;
            const match = data.quickFacts.find(f => f.val.toLowerCase().includes(term) || f.label.toLowerCase().includes(term));
            context = `考點: ${match.label} - ${stripHtml(match.val)}`;
        } else if (Object.values(data.tags).some(t => t.toLowerCase().includes(term))) {
            score += 3;
            context = '關鍵標籤符合';
        } else {
            for (const section of data.sections) {
                if (section.content.toLowerCase().includes(term) || section.title.toLowerCase().includes(term)) {
                    score += 1;
                    context = `內文: ${section.title}`;
                    break; 
                }
            }
        }

        if (score > 0) {
            results.push({ key, title: data.title, category: data.category, color: data.color, score, context });
        }
    }

    results.sort((a, b) => b.score - a.score);

    if (results.length === 0) {
        nav.innerHTML = `<div class="text-center py-8 text-gray-400"><i class="fas fa-robot text-2xl mb-2"></i><p class="text-xs">找不到與 "${term}" 相關的資料</p></div>`;
    } else {
        nav.innerHTML = `<div class="px-2 py-1 mb-2 text-[10px] font-bold text-medical-600 uppercase tracking-wider flex justify-between"><span>搜尋結果</span><span class="bg-gray-100 px-1.5 rounded text-gray-500">${results.length} 筆</span></div>` + 
        results.map(item => `
            <button onclick="loadContent('${item.key}', true)" class="nav-btn w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-medical-50 transition mb-1 group border border-transparent hover:border-medical-100">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2 overflow-hidden"><div class="w-1.5 h-1.5 rounded-full bg-${item.color}-400 shrink-0"></div><span class="truncate text-gray-700 font-bold">${highlightString(item.title, term)}</span></div>
                    <span class="text-[9px] bg-gray-100 text-gray-400 px-1 rounded">${item.category.split(' ')[0]}</span>
                </div>
                ${item.context ? `<span class="search-match-context pl-3.5">${highlightString(item.context, term)}</span>` : ''}
            </button>`).join('');
    }
}

function stripHtml(html) {
   let tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

function highlightString(str, term) {
    if (!term) return str;
    return str.replace(new RegExp(`(${term})`, 'gi'), '<span class="search-highlight">$1</span>');
}

// ==========================================
// D. 考古題系統 (Exam System)
// ==========================================

function renderExamDashboard(sourceFilter = null) {
    updateView(() => renderExamDashboard(sourceFilter));
    currentExamSource = sourceFilter;
    const container = document.getElementById('contentArea');
    const toc = document.getElementById('toc');
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('bg-medical-50', 'text-medical-800', 'ring-1', 'ring-medical-200'));

    if (!sourceFilter) {
        const sources = [...new Set(pastExamDB.map(q => q.source))];
        const stats = sources.map(src => {
            const questions = pastExamDB.filter(q => q.source === src);
            return { src, total: questions.length, solved: questions.filter(q => q.correctAnswer).length };
        });

        toc.innerHTML = `<li><a href="#" onclick="renderDashboard(); return false;" class="text-medical-600 font-bold block py-1 hover:underline mb-2"><i class="fas fa-arrow-left mr-1"></i>回儀表板</a></li><li class="border-t border-gray-100 my-2"></li><li class="text-xs font-bold text-gray-400 uppercase mb-2">試卷列表</li>${stats.map(s => `<li><span class="text-xs text-gray-600 block py-1 truncate">${s.src}</span></li>`).join('')}`;

        container.innerHTML = `
            <div class="animate-fade-in pb-24 max-w-5xl mx-auto px-1 md:px-0">
                <div class="mb-6 md:mb-10 text-center px-4"><h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2"><i class="fas fa-archive text-teal-600"></i> 考古題圖書館</h1><p class="text-sm text-gray-500">AI 助教隨時待命，請選擇試卷。</p></div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    ${stats.map(s => `
                        <div class="bg-white rounded-xl p-5 md:p-6 border border-gray-200 shadow-sm hover:shadow-lg active:scale-[0.98] transition cursor-pointer group relative overflow-hidden" onclick="renderExamDashboard('${s.src}')">
                            <div class="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-teal-50 rounded-bl-full -mr-4 -mt-4 transition group-hover:bg-teal-100"></div>
                            <div class="flex items-center gap-4 mb-4">
                                <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-lg font-bold shrink-0">${s.src.includes('113') ? '113' : '112'}</div>
                                <div class="min-w-0"><h3 class="text-base md:text-lg font-bold text-gray-800 truncate pr-2">${s.src}</h3><span class="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">Final Exam</span></div>
                            </div>
                            <div class="flex justify-between items-end">
                                <div class="text-xs md:text-sm text-gray-500"><div class="mb-1">題數: <span class="font-bold text-gray-800">${s.total}</span></div><div>解析: <span class="font-bold text-green-600">${s.solved}</span></div></div>
                                <button class="bg-teal-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-teal-700 shadow-teal-200 shadow-sm">練習 <i class="fas fa-arrow-right ml-1"></i></button>
                            </div>
                            <div class="w-full bg-gray-100 h-1 mt-4 rounded-full overflow-hidden"><div class="bg-teal-500 h-full rounded-full" style="width: ${(s.solved/s.total)*100}%"></div></div>
                        </div>`).join('')}
                </div>
            </div>`;
    } else {
        const filteredDB = pastExamDB.filter(q => q.source === sourceFilter);
        const solvedQ = filteredDB.filter(q => q.correctAnswer).length;

        toc.innerHTML = `<li><a href="#" onclick="renderExamDashboard(); return false;" class="text-medical-600 font-bold block py-1 hover:underline mb-2"><i class="fas fa-arrow-left mr-1"></i>回列表</a></li><li class="border-t border-gray-100 my-2"></li><li class="text-xs font-bold text-gray-400 uppercase mb-2">當前: ${sourceFilter}</li>`;

        container.innerHTML = `
            <div class="animate-fade-in pb-20 max-w-5xl mx-auto px-1 md:px-0">
                <div class="sticky top-0 bg-gray-50/95 backdrop-blur z-10 py-3 mb-4 border-b border-gray-200 flex justify-between items-center px-2 md:px-0">
                    <div class="flex items-center gap-2">
                        <button class="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-teal-600 active:scale-90 transition shadow-sm" onclick="renderExamDashboard()"><i class="fas fa-chevron-left"></i></button>
                        <h1 class="text-lg md:text-2xl font-bold text-gray-900 truncate max-w-[200px] md:max-w-none">${sourceFilter}</h1>
                    </div>
                    <div class="flex flex-col items-end"><span class="text-xl font-bold text-teal-600" id="progress-text">${solvedQ}/${filteredDB.length}</span><span class="text-[10px] text-gray-400 uppercase font-bold">Solved</span></div>
                </div>
                <div class="grid gap-3 md:gap-4 px-2 md:px-0">
                    ${filteredDB.map((q, index) => `
                        <div class="bg-white p-4 md:p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md active:scale-[0.99] transition cursor-pointer relative overflow-hidden" onclick="openQuestionModal('${q.id}')">
                            <div class="flex justify-between items-start mb-2">
                                <span class="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Q${index + 1}</span>
                                <span id="status-badge-${q.id}" class="text-[10px] font-bold ${q.correctAnswer ? 'text-green-600 bg-green-50' : 'text-gray-400 bg-gray-50'} px-2 py-0.5 rounded border border-gray-100">${q.correctAnswer ? '已解析' : '未解析'}</span>
                            </div>
                            <h3 class="text-sm md:text-base font-medium text-gray-800 mb-2 line-clamp-2 leading-relaxed">${q.question}</h3>
                            <div class="flex items-center gap-2 text-[10px] md:text-xs text-gray-400"><i class="fas fa-tag"></i> ${q.relatedPathogen || 'General'}</div>
                        </div>`).join('')}
                </div>
            </div>
            <div id="examModal" class="fixed inset-0 z-[60] hidden flex items-end md:items-center justify-center sm:p-4">
                <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" onclick="history.back()"></div>
                <div class="bg-white w-full h-[95vh] md:h-auto md:max-w-4xl md:max-h-[90vh] rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slide-up md:animate-fade-in relative z-10">
                    <div class="p-3 md:p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 shrink-0">
                        <h3 class="font-bold text-gray-700 flex items-center gap-2 text-sm md:text-base"><span class="w-1.5 h-5 bg-teal-500 rounded-full"></span> 題目解析</h3>
                        <button onclick="history.back()" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 transition"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="flex-1 overflow-y-auto p-4 md:p-8 custom-scroll bg-white" id="modalContent"></div>
                    <div class="p-3 md:p-4 border-t border-gray-100 bg-gray-50 flex justify-between gap-3 shrink-0 safe-pb" id="modalFooter"></div>
                </div>
            </div>`;
    }
}

function openQuestionModal(qid) {
    currentExamQuestionId = qid;
    const q = pastExamDB.find(i => i.id === qid);
    const modal = document.getElementById('examModal');
    const content = document.getElementById('modalContent');
    const footer = document.getElementById('modalFooter');
    
    history.pushState({ type: 'modal' }, '');
    modal.classList.remove('hidden');
    
    content.innerHTML = `
        <div class="mb-6"><span class="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded mb-2 inline-block tracking-wider">QUESTION</span><p class="text-lg md:text-xl font-bold text-gray-800 leading-relaxed text-justify">${q.question}</p></div>
        <div class="grid grid-cols-1 gap-3 mb-8" id="examOptionsArea">
            ${q.options.map((opt, idx) => `
                <div id="exam-opt-${idx}" onclick="checkExamAnswer('${qid}', ${idx})" class="p-4 rounded-xl border border-gray-200 bg-white hover:bg-teal-50 hover:border-teal-300 active:bg-teal-100 active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-start gap-3 group relative select-none">
                    <div class="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-bold text-xs md:text-sm group-hover:bg-teal-600 group-hover:text-white transition shrink-0 mt-0.5" id="exam-opt-icon-${idx}">${String.fromCharCode(65+idx)}</div>
                    <span class="text-sm md:text-base text-gray-700 font-medium leading-relaxed">${opt}</span><div class="ml-auto hidden status-icon self-center pl-2"></div>
                </div>`).join('')}
        </div>
        <div id="aiAnalysisArea" class="hidden animate-fade-in border-t border-gray-100 pt-6">
            <div class="flex items-center gap-2 mb-3"><div class="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white text-[10px] shadow-sm"><i class="fas fa-robot"></i></div><h3 class="font-bold text-gray-800 text-sm">Gemini 解析</h3></div>
            <div id="aiContent" class="bg-gray-50 p-4 rounded-xl border border-gray-200 text-gray-700 text-sm leading-relaxed prose prose-sm max-w-none"><div class="flex flex-col items-center justify-center py-6 text-gray-400"><i class="fas fa-circle-notch fa-spin text-purple-500 text-2xl mb-2"></i><span class="text-xs">AI 正在思考中...</span></div></div>
        </div>`;

    footer.innerHTML = `
        <button onclick="history.back()" class="flex-1 px-4 py-3 bg-white border border-gray-300 text-gray-600 font-bold rounded-xl hover:bg-gray-50 active:bg-gray-100 transition text-sm">關閉</button>
        <button onclick="callAIForExplanation('${qid}')" id="solveBtn" class="flex-[2] bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-4 py-3 rounded-xl font-bold hover:shadow-lg active:scale-95 transition text-sm flex items-center justify-center gap-2 shadow-teal-200"><i class="fas fa-lightbulb"></i> <span id="solveBtnText">AI 解題</span></button>
    `;

    if (q.aiExplanation) {
        document.getElementById('aiAnalysisArea').classList.remove('hidden');
        document.getElementById('aiContent').innerHTML = marked.parse(q.aiExplanation);
        const solveBtn = document.getElementById('solveBtn');
        solveBtn.innerHTML = `<i class="fas fa-check"></i> 解析完成`;
        solveBtn.classList.add('bg-gray-400', 'cursor-not-allowed', 'opacity-80');
        solveBtn.disabled = true;
    }

    if (q.correctAnswer) {
        let correctIdx = -1;
        q.options.forEach((opt, i) => {
             if (opt.toUpperCase().includes(`(${q.correctAnswer})`) || opt.startsWith(`${q.correctAnswer}.`)) {
                correctIdx = i;
            }
        });
        if (correctIdx !== -1) highlightCorrectAnswer(correctIdx);
    }
}

function checkExamAnswer(qid, idx) {
    const q = pastExamDB.find(i => i.id === qid);
    if (!q) return;
    userSelectedExamIdx = idx;
    const optionsArea = document.getElementById('examOptionsArea');
    if (!optionsArea) return;

    optionsArea.querySelectorAll('div[id^="exam-opt-"]').forEach(el => {
        el.className = "p-4 rounded-xl border border-gray-200 bg-white hover:bg-teal-50 hover:border-teal-300 transition cursor-pointer flex items-center gap-3 group relative overflow-hidden select-none";
        const iconDiv = el.querySelector('.status-icon');
        if(iconDiv) { iconDiv.innerHTML = ''; iconDiv.classList.add('hidden'); }
    });

    const selectedEl = document.getElementById(`exam-opt-${idx}`);
    if (!selectedEl) return;

    if (!q.correctAnswer) {
        selectedEl.className = "p-4 rounded-xl border-2 border-blue-500 bg-blue-50 transition cursor-pointer flex items-center gap-3 relative overflow-hidden select-none";
        const solveBtn = document.getElementById('solveBtn');
        if(solveBtn) solveBtn.classList.add('animate-pulse');
    } else {
        let correctIdx = -1;
        q.options.forEach((opt, i) => {
            if (opt.toUpperCase().includes(`(${q.correctAnswer})`) || opt.startsWith(`${q.correctAnswer}.`)) {
                correctIdx = i;
            }
        });

        if (idx === correctIdx) {
            selectedEl.className = "p-4 rounded-xl border-2 border-green-500 bg-green-50 transition cursor-pointer flex items-center gap-3 relative overflow-hidden select-none";
            selectedEl.querySelector('.status-icon').innerHTML = '<i class="fas fa-check-circle text-green-600 text-xl"></i>';
            selectedEl.querySelector('.status-icon').classList.remove('hidden');
        } else {
            selectedEl.className = "p-4 rounded-xl border-2 border-red-500 bg-red-50 transition cursor-pointer flex items-center gap-3 relative overflow-hidden select-none";
            selectedEl.querySelector('.status-icon').innerHTML = '<i class="fas fa-times-circle text-red-600 text-xl"></i>';
            selectedEl.querySelector('.status-icon').classList.remove('hidden');
            if (correctIdx !== -1) {
                const correctEl = document.getElementById(`exam-opt-${correctIdx}`);
                if (correctEl) {
                    correctEl.className = "p-4 rounded-xl border border-green-500 bg-green-50 transition cursor-pointer flex items-center gap-3 relative overflow-hidden select-none";
                    correctEl.querySelector('.status-icon').innerHTML = '<i class="fas fa-check-circle text-green-600 text-xl"></i>';
                    correctEl.querySelector('.status-icon').classList.remove('hidden');
                }
            }
        }
    }
}

function highlightCorrectAnswer(correctIdx) {
    const el = document.getElementById(`exam-opt-${correctIdx}`);
    if (el) {
        el.className = "p-4 rounded-xl border-2 border-green-500 bg-green-50 transition cursor-pointer flex items-center gap-3 relative overflow-hidden select-none";
        el.querySelector('.status-icon').innerHTML = '<i class="fas fa-check-circle text-green-600 text-xl"></i>';
        el.querySelector('.status-icon').classList.remove('hidden');
    }
}

async function callAIForExplanation(qid) {
    if (!userApiKey) { alert("請先在「AI 臨床實驗室」輸入 API Key 才能使用解題功能！"); return; }
    const q = pastExamDB.find(i => i.id === qid);
    const solveBtn = document.getElementById('solveBtn');
    const aiArea = document.getElementById('aiAnalysisArea');
    const aiContent = document.getElementById('aiContent');

    solveBtn.disabled = true;
    solveBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> AI 思考中...';
    aiArea.classList.remove('hidden');
    setTimeout(() => { const modalContent = document.getElementById('modalContent'); modalContent.scrollTo({ top: modalContent.scrollHeight, behavior: 'smooth' }); }, 100);

    const contextData = q.relatedPathogen && pathogenData[q.relatedPathogen] ? `Reference: ${pathogenData[q.relatedPathogen].title}, Facts: ${pathogenData[q.relatedPathogen].quickFacts.map(f => f.val).join(', ')}` : "";
    const prompt = `You are a medical professor explaining an exam question. Question: "${q.question}" Options: ${JSON.stringify(q.options)} ${contextData} Task: 1. Identify the Correct Answer Option (A, B, C, or D). 2. Provide explanation. Format: Return in Traditional Chinese. IMPORTANT: The first line MUST be strictly in this format: "✅ **正確答案：(X)**" where X is A, B, C, or D.`;

    const models = ['gemini-flash-latest', 'gemini-pro-latest']; 
    let success = false;

    for (const modelName of models) {
        if (success) break;
        try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${userApiKey}`;
            const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], safetySettings: [{ category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" }] }) });
            const data = await response.json();
            if (!response.ok) continue;
            
            if (data.candidates && data.candidates.length > 0) {
                const aiText = data.candidates[0].content.parts[0].text;
                aiContent.innerHTML = marked.parse(aiText);
                success = true;

                const match = aiText.match(/正確答案[：:]\s*[（(]?([A-D])[）)]?/i);
                if (match && match[1]) {
                    const ans = match[1].toUpperCase();
                    q.correctAnswer = ans;
                    q.aiExplanation = aiText;
                    q.userNote = "AI Solved"; 
                    
                    const badge = document.getElementById(`status-badge-${qid}`);
                    if (badge) { badge.innerText = '已解析'; badge.className = "text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-gray-100 transition-colors duration-300"; }
                    
                    const progressText = document.getElementById('progress-text');
                    if (progressText) { const solvedCount = pastExamDB.filter(x => x.correctAnswer).length; progressText.innerText = `${solvedCount}/${pastExamDB.length}`; }

                    if (userSelectedExamIdx !== null) { checkExamAnswer(qid, userSelectedExamIdx); } 
                    else { let correctIdx = -1; q.options.forEach((opt, i) => { if (opt.toUpperCase().includes(`(${ans})`) || opt.startsWith(`${ans}.`)) correctIdx = i; }); if(correctIdx !== -1) highlightCorrectAnswer(correctIdx); }
                }
                solveBtn.innerHTML = `<i class="fas fa-check"></i> 解析完成`;
                solveBtn.classList.remove('from-teal-600', 'to-emerald-600');
                solveBtn.classList.add('bg-gray-400', 'cursor-not-allowed');
            }
        } catch (e) { console.error(e); }
    }
}

// ==========================================
// E. AI 臨床實驗室 (AI Lab)
// ==========================================

function renderAILab() {
    updateView(() => renderAILab());
    const container = document.getElementById('contentArea');
    const toc = document.getElementById('toc');
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('bg-medical-50', 'text-medical-800', 'ring-1', 'ring-medical-200'));
    
    toc.innerHTML = `<li><a href="#" onclick="renderDashboard(); return false;" class="text-medical-600 font-bold block py-1 hover:underline mb-2"><i class="fas fa-arrow-left mr-1"></i>回儀表板</a></li><li class="border-t border-gray-100 my-2"></li><li class="text-xs text-gray-500">Key 僅存於本地。</li>`;

    if (!userApiKey) {
        container.innerHTML = `<div class="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg border border-gray-200 text-center animate-fade-in"><div class="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4"><i class="fas fa-robot"></i></div><h2 class="text-2xl font-bold text-gray-800 mb-2">啟動 AI 臨床診斷系統</h2><p class="text-gray-500 mb-6 text-sm">請輸入您的 Google Gemini API Key。</p><div class="flex gap-2 max-w-md mx-auto relative"><input type="password" id="apiKeyInput" placeholder="Paste your API Key here..." class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"><button onclick="saveApiKey()" class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition font-medium shadow-md">啟動</button></div><p class="mt-4 text-xs text-gray-400"><a href="https://aistudio.google.com/app/apikey" target="_blank" class="underline hover:text-purple-600">在此免費獲取 API Key</a></p></div>`;
    } else {
        container.innerHTML = `<div class="max-w-4xl mx-auto animate-fade-in pb-20"><div class="flex justify-between items-center mb-6"><div><h2 class="text-2xl font-bold text-gray-800 flex items-center gap-2"><i class="fas fa-user-md text-purple-600"></i> AI 臨床模擬測驗</h2><p class="text-xs text-gray-500">Based on M67 Virology & Mycology Syllabus</p></div><button onclick="logoutApiKey()" class="text-xs text-gray-400 hover:text-red-500 transition"><i class="fas fa-sign-out-alt"></i> 重設 Key</button></div><div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6 flex flex-wrap items-center gap-4"><div class="flex items-center gap-2"><span class="text-sm font-bold text-gray-600">出題範圍：</span><select id="topicSelect" class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-2"><option value="Random">隨機混和 (Random)</option><option value="DNA Viruses">DNA 病毒</option><option value="RNA Viruses">RNA 病毒</option><option value="Hepatitis">肝炎病毒</option><option value="Mycology">醫用黴菌</option></select></div><button id="generateBtn" onclick="generateClinicalCase()" class="ml-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-lg hover:shadow-lg transition transform active:scale-95 font-medium flex items-center gap-2"><i class="fas fa-magic"></i> 生成新病例</button></div><div id="loadingArea" class="hidden text-center py-12"><div class="inline-block w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4"></div><p class="text-gray-500 font-medium animate-pulse">正在研讀病歷資料中...</p></div><div id="questionArea" class="space-y-6 hidden"><div class="bg-white rounded-xl shadow-md border-l-4 border-purple-500 overflow-hidden"><div class="p-6"><h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2"><span class="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded uppercase">Case Scenario</span></h3><p id="caseText" class="text-gray-700 leading-relaxed text-lg font-serif"></p></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="optionsArea"></div><div id="explanationArea" class="hidden bg-green-50 border border-green-200 rounded-xl p-6 animate-fade-in"><div class="flex items-start gap-3"><i class="fas fa-check-circle text-green-600 text-xl mt-1"></i><div><h4 class="font-bold text-green-800 mb-1">解析與詳解</h4><p id="explanationText" class="text-gray-700 text-sm leading-relaxed"></p></div></div></div></div></div>`;
    }
}

function saveApiKey() {
    const input = document.getElementById('apiKeyInput').value.trim();
    if (input) { userApiKey = input; localStorage.setItem('gemini_api_key', userApiKey); renderAILab(); }
}

async function generateClinicalCase() {
    if (isGenerating) return;
    isGenerating = true;
    const loadingArea = document.getElementById('loadingArea');
    const questionArea = document.getElementById('questionArea');
    const generateBtn = document.getElementById('generateBtn');
    loadingArea.classList.remove('hidden');
    questionArea.classList.add('hidden');
    generateBtn.disabled = true;
    generateBtn.classList.add('opacity-50', 'cursor-not-allowed');

    const topic = document.getElementById('topicSelect').value;
    const prompt = `You are a medical professor creating a USMLE Step 1 style clinical vignette. Topic: ${topic} (Focus on Virology/Mycology). STRICTLY RETURN ONLY A VALID JSON OBJECT. NO MARKDOWN. Format: { "scenario": "Clinical case description...", "question": "Question stem...", "options": ["A", "B", "C", "D"], "correctIndex": 0, "explanation": "Detailed rationale..." } Constraints: Language: Traditional Chinese.`;

    const models = ['gemini-flash-latest', 'gemini-pro-latest'];
    let success = false;
    let finalErrorMsg = '';

    for (const modelName of models) {
        if (success) break;
        try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${userApiKey}`;
            const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], safetySettings: [{ category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" }] }) });
            const data = await response.json();
            if (!response.ok) { finalErrorMsg = data.error?.message; continue; }
            if (!data.candidates) continue;

            let rawText = data.candidates[0].content.parts[0].text;
            const jsonMatch = rawText.match(/\{[\s\S]*\}/);
            if (!jsonMatch) continue;
            
            try {
                currentQuestionData = JSON.parse(jsonMatch[0]);
                if(!currentQuestionData.options) throw new Error();
                displayQuestion(currentQuestionData);
                success = true;
            } catch (e) { continue; }
        } catch (e) { finalErrorMsg = e.message; }
    }

    if (!success) { alert(`生成失敗。${finalErrorMsg}`); loadingArea.classList.add('hidden'); }
    isGenerating = false;
    generateBtn.disabled = false;
    generateBtn.classList.remove('opacity-50', 'cursor-not-allowed');
}

function displayQuestion(data) {
    document.getElementById('loadingArea').classList.add('hidden');
    const qArea = document.getElementById('questionArea');
    qArea.classList.remove('hidden');
    document.getElementById('caseText').innerHTML = data.scenario + `<br><br><span class="font-bold text-medical-800">${data.question}</span>`;
    document.getElementById('optionsArea').innerHTML = data.options.map((opt, index) => `<button onclick="checkAnswer(${index})" id="opt-${index}" class="option-btn w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-purple-50 hover:border-purple-300 transition flex items-center gap-3 group"><span class="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-bold text-sm group-hover:bg-purple-200 group-hover:text-purple-700 transition">${String.fromCharCode(65+index)}</span><span class="font-medium text-gray-700">${opt}</span></button>`).join('');
    document.getElementById('explanationArea').classList.add('hidden');
}

function checkAnswer(selectedIndex) {
    if (!currentQuestionData) return;
    const correctIndex = currentQuestionData.correctIndex;
    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
    if (selectedIndex === correctIndex) {
        document.getElementById(`opt-${selectedIndex}`).classList.add('bg-green-100', 'border-green-500', 'ring-1', 'ring-green-500');
    } else {
        document.getElementById(`opt-${selectedIndex}`).classList.add('bg-red-100', 'border-red-500');
        document.getElementById(`opt-${correctIndex}`).classList.add('bg-green-100', 'border-green-500');
    }
    document.getElementById('explanationText').innerHTML = currentQuestionData.explanation;
    document.getElementById('explanationArea').classList.remove('hidden');
}

function logoutApiKey() {
    localStorage.removeItem('gemini_api_key');
    userApiKey = '';
    renderAILab();
}

// ==========================================
// F. 系統初始化與事件綁定 (Initialization)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initSystem();
    renderSidebar();
    renderDashboard();
    
    // 加入 fade-in 動畫樣式
    const style = document.createElement('style');
    style.innerHTML = `.animate-fade-in { animation: fadeIn 0.4s ease-out; } @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`;
    document.head.appendChild(style);
});

// ==========================================
// G. 全域橋樑 (Global Bridge)
// 解決 HTML onclick 找不到模組內函式的關鍵
// ==========================================

window.goBack = goBack;
window.updateGlobalApiKey = updateGlobalApiKey;
window.renderDashboard = renderDashboard;
window.renderSidebar = renderSidebar;
window.loadContent = loadContent;
window.renderCategoryOverview = renderCategoryOverview;
window.handleSearch = handleSearch;
window.renderExamDashboard = renderExamDashboard;
window.openQuestionModal = openQuestionModal;
window.checkExamAnswer = checkExamAnswer;
window.callAIForExplanation = callAIForExplanation;
window.renderAILab = renderAILab;
window.saveApiKey = saveApiKey;
window.generateClinicalCase = generateClinicalCase;
window.checkAnswer = checkAnswer;
window.logoutApiKey = logoutApiKey;
