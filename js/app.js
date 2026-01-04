// 檔案位置：js/app.js

// 1. 模組化引入 (這裡的路徑 "./data/xxx.js" 是關鍵)
import { pathogenData } from './data/pathogens.js';
import { pastExamDB } from './data/exams.js';

// --- 以下為您的主程式邏輯 (Logic)，不需要再貼上資料 ---

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
let userSelectedExamIdx = null; 

// ==========================================
// A. 核心系統與導航 (Core System)
// ==========================================

function initSystem() {
    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey) {
        const input = document.getElementById('headerApiKey');
        if(input) input.value = savedKey;
        userApiKey = savedKey;
    }
    currentViewRestorer = () => renderDashboard();
    if (!history.state) history.replaceState({ type: 'root' }, '');
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
    if (viewHistory.length > 0) history.back();
}

function updateBackButtonState() {
    const btn = document.getElementById('globalBackBtn');
    if (!btn) return;
    if (viewHistory.length > 0) btn.classList.remove('hidden');
    else btn.classList.add('hidden');
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
// B. 儀表板與內容渲染
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
        </div>`).join('');
}

function renderDashboard() {
    updateView(() => renderDashboard());
    const container = document.getElementById('contentArea');
    const toc = document.getElementById('toc');
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('bg-medical-50', 'text-medical-800', 'ring-1', 'ring-medical-200'));
    toc.innerHTML = `<li><a href="#" class="text-medical-600 font-bold block py-1">儀表板總覽</a></li>`;
    
    container.innerHTML = `
        <div class="max-w-5xl mx-auto animate-fade-in pb-10">
            <div class="bg-gradient-to-br from-medical-800 to-medical-600 rounded-2xl shadow-xl p-8 text-white mb-10 relative overflow-hidden">
                <div class="relative z-10"><h2 class="text-3xl font-bold mb-2">微免期末考戰情室</h2><p class="text-medical-100 text-lg opacity-90">Virology & Mycology Review V11.0</p></div>
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
                </div>
                <div class="bg-gradient-to-br from-teal-500 to-emerald-700 p-6 rounded-xl shadow-sm border border-teal-400 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 dash-card cursor-pointer group relative overflow-hidden" onclick="renderExamDashboard()">
                    <div class="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition"></div>
                    <div class="flex items-center justify-between mb-4 relative z-10">
                        <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-teal-100 text-xl backdrop-blur-sm group-hover:bg-white/20 group-hover:text-white transition"><i class="fas fa-pen-alt"></i></div>
                        <span class="bg-teal-900/30 text-teal-100 text-[10px] px-2 py-1 rounded border border-teal-500/50 backdrop-blur-md">Exam</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-1 relative z-10">考古題衝刺模式</h3>
                </div>
            </div>
        </div>`;
    container.scrollTop = 0;
}

function createDashboardCard(category, icon, color, desc) {
    return `<div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-${color}-300 dash-card cursor-pointer group" onclick="renderCategoryOverview('${category}')"><div class="flex items-center justify-between mb-4"><div class="w-12 h-12 rounded-full bg-${color}-50 flex items-center justify-center text-${color}-600 text-xl group-hover:bg-${color}-600 group-hover:text-white transition-colors"><i class="${icon}"></i></div><i class="fas fa-arrow-right text-gray-300 group-hover:text-${color}-500 transition-transform group-hover:translate-x-1"></i></div><h3 class="text-xl font-bold text-gray-800 mb-1">${category}</h3><p class="text-sm text-gray-500 mb-3">${desc}</p></div>`;
}

function renderCategoryOverview(targetCategory) {
    updateView(() => renderCategoryOverview(targetCategory));
    const container = document.getElementById('contentArea');
    const toc = document.getElementById('toc');
    const items = Object.entries(pathogenData).filter(([key, data]) => data.category === targetCategory);
    if (items.length === 0) return;
    const cardsHTML = items.map(([key, data]) => `<div onclick="loadContent('${key}')" class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-${data.color}-300 transition cursor-pointer group relative overflow-hidden"><div class="absolute top-0 right-0 w-16 h-16 bg-${data.color}-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div><div class="relative z-10"><div class="flex justify-between items-start mb-2"><span class="text-[10px] font-bold text-${data.color}-600 bg-${data.color}-50 px-2 py-0.5 rounded border border-${data.color}-100 uppercase tracking-wider">${data.family}</span></div><h3 class="text-lg font-bold text-gray-800 mb-3 group-hover:text-${data.color}-700 transition-colors">${data.title}</h3></div></div>`).join('');
    container.innerHTML = `<div class="animate-fade-in pb-20 max-w-6xl mx-auto"><div class="mb-8 border-b border-gray-200 pb-4"><div class="flex items-center gap-2 mb-2"><button onclick="renderDashboard()" class="text-xs font-bold text-gray-400 hover:text-medical-600 transition uppercase tracking-wider flex items-center gap-1"><i class="fas fa-chevron-left"></i> 回儀表板</button></div><h1 class="text-3xl font-bold text-gray-900 flex items-center gap-3">${targetCategory}</h1></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">${cardsHTML}</div></div>`;
    toc.innerHTML = `<li><a href="#" onclick="renderDashboard(); return false;" class="text-medical-600 font-bold block py-1 hover:underline mb-2"><i class="fas fa-arrow-left mr-1"></i>回儀表板</a></li>`;
    container.scrollTop = 0;
}

function loadContent(key, fromSearch = false) {
    updateView(() => loadContent(key, fromSearch));
    const data = pathogenData[key];
    if (!data) return;
    const container = document.getElementById('contentArea');
    const toc = document.getElementById('toc');
    const highlight = (text) => fromSearch && currentSearchTerm ? highlightString(text, currentSearchTerm) : text;
    const tagsHTML = `<div class="flex flex-wrap gap-2 mb-6"><span class="tag-badge bg-indigo-50 text-indigo-700 border border-indigo-100"><i class="fas fa-dna mr-1.5 text-indigo-400"></i> ${data.tags.genome}</span></div>`;
    const quickFactsHTML = data.quickFacts.map(f => `<div class="bg-white p-3 rounded border border-gray-100 shadow-sm hover:border-medical-200 transition"><div class="text-[10px] text-gray-400 uppercase font-bold mb-1">${highlight(f.label)}</div><div class="text-sm font-medium text-gray-800 flex items-start justify-between gap-2"><span class="leading-tight">${fromSearch ? highlightString(f.val, currentSearchTerm) : f.val}</span></div></div>`).join('');
    const sectionsHTML = data.sections.map((sec, index) => `<section id="sec-${index}" class="mb-8 scroll-mt-20"><div class="flex items-center gap-3 mb-3 pb-2 border-b border-gray-200/60"><h2 class="text-lg font-bold text-medical-800 flex items-center gap-2"><span class="w-1 h-5 bg-medical-500 rounded-full"></span> ${highlight(sec.title)}</h2></div><div class="prose prose-sm max-w-none text-gray-600 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">${fromSearch ? sec.content.replace(new RegExp(`(${currentSearchTerm})(?![^<]*>|[^<>]*<\/)`, 'gi'), '<span class="search-highlight">$1</span>') : sec.content}</div></section>`).join('');
    container.innerHTML = `<div class="animate-fade-in pb-20 max-w-4xl mx-auto"><div class="mb-4"><h1 class="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">${highlight(data.title)}</h1>${tagsHTML}</div><div class="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-8">${quickFactsHTML}</div>${sectionsHTML}</div>`;
    toc.innerHTML = `<li><a href="#" onclick="renderDashboard(); return false;" class="text-medical-600 font-bold block py-1 hover:underline mb-2"><i class="fas fa-arrow-left mr-1"></i>回儀表板</a></li>${data.sections.map((sec, index) => `<li><a href="#sec-${index}" class="hover:text-medical-600 block py-1 border-l-2 border-transparent hover:border-medical-400 pl-2 transition truncate text-xs">${sec.title}</a></li>`).join('')}`;
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
// C. 搜尋系統
// ==========================================

function handleSearch(query) {
    currentSearchTerm = query.trim().toLowerCase();
    if (currentSearchTerm.length === 0) renderSidebar();
    else performSearch(currentSearchTerm);
}

function performSearch(term) {
    const nav = document.getElementById('sidebarNav');
    const results = [];
    for (const [key, data] of Object.entries(pathogenData)) {
        let score = 0;
        let context = '';
        if (data.title.toLowerCase().includes(term)) { score += 10; context = '標題符合'; }
        else if (data.quickFacts.some(f => f.val.toLowerCase().includes(term) || f.label.toLowerCase().includes(term))) { score += 5; context = '考點符合'; }
        else if (JSON.stringify(data.sections).toLowerCase().includes(term)) { score += 1; context = '內文符合'; }
        if (score > 0) results.push({ key, title: data.title, category: data.category, color: data.color, score, context });
    }
    results.sort((a, b) => b.score - a.score);
    if (results.length === 0) nav.innerHTML = `<div class="text-center py-8 text-gray-400"><p class="text-xs">找不到資料</p></div>`;
    else nav.innerHTML = results.map(item => `<button onclick="loadContent('${item.key}', true)" class="nav-btn w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-medical-50 transition mb-1 group border border-transparent hover:border-medical-100"><div class="flex items-center justify-between"><span class="truncate text-gray-700 font-bold">${highlightString(item.title, term)}</span></div></button>`).join('');
}

function highlightString(str, term) {
    if (!term) return str;
    return str.replace(new RegExp(`(${term})`, 'gi'), '<span class="search-highlight">$1</span>');
}

// ==========================================
// D. 考古題系統
// ==========================================

function renderExamDashboard(sourceFilter = null) {
    updateView(() => renderExamDashboard(sourceFilter));
    const container = document.getElementById('contentArea');
    const toc = document.getElementById('toc');
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('bg-medical-50', 'text-medical-800', 'ring-1', 'ring-medical-200'));

    if (!sourceFilter) {
        const sources = [...new Set(pastExamDB.map(q => q.source))];
        const stats = sources.map(src => ({ src, total: pastExamDB.filter(q => q.source === src).length }));
        container.innerHTML = `<div class="max-w-5xl mx-auto px-4"><h1 class="text-2xl font-bold mb-4">考古題圖書館</h1><div class="grid grid-cols-1 md:grid-cols-2 gap-4">${stats.map(s => `<div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-lg transition" onclick="renderExamDashboard('${s.src}')"><h3 class="text-lg font-bold text-gray-800">${s.src}</h3><p class="text-gray-500 text-sm">共 ${s.total} 題</p></div>`).join('')}</div></div>`;
        toc.innerHTML = `<li><a href="#" onclick="renderDashboard(); return false;" class="text-medical-600 font-bold block py-1 hover:underline mb-2"><i class="fas fa-arrow-left mr-1"></i>回儀表板</a></li>`;
    } else {
        const filteredDB = pastExamDB.filter(q => q.source === sourceFilter);
        container.innerHTML = `<div class="max-w-5xl mx-auto px-4"><div class="flex items-center gap-2 mb-4"><button onclick="renderExamDashboard()" class="text-gray-500 hover:text-teal-600"><i class="fas fa-chevron-left"></i></button><h1 class="text-xl font-bold">${sourceFilter}</h1></div><div class="grid gap-4">${filteredDB.map((q, index) => `<div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm cursor-pointer hover:shadow-md" onclick="openQuestionModal('${q.id}')"><span class="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Q${index + 1}</span><p class="mt-2 text-gray-800 font-medium">${q.question}</p></div>`).join('')}</div></div>`;
        toc.innerHTML = `<li><a href="#" onclick="renderExamDashboard(); return false;" class="text-medical-600 font-bold block py-1 hover:underline mb-2"><i class="fas fa-arrow-left mr-1"></i>回列表</a></li>`;
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
    content.innerHTML = `<div class="mb-6"><p class="text-lg font-bold text-gray-800 leading-relaxed">${q.question}</p></div><div class="grid gap-3" id="examOptionsArea">${q.options.map((opt, idx) => `<div id="exam-opt-${idx}" onclick="checkExamAnswer('${qid}', ${idx})" class="p-4 rounded-xl border border-gray-200 bg-white hover:bg-teal-50 cursor-pointer flex items-center gap-3"><span class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">${String.fromCharCode(65+idx)}</span><span>${opt}</span></div>`).join('')}</div><div id="aiAnalysisArea" class="hidden mt-6 border-t pt-4"><h3 class="font-bold mb-2">AI 解析</h3><div id="aiContent" class="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg"></div></div>`;
    footer.innerHTML = `<button onclick="history.back()" class="flex-1 py-3 bg-gray-100 rounded-xl font-bold text-gray-600">關閉</button><button onclick="callAIForExplanation('${qid}')" id="solveBtn" class="flex-[2] py-3 bg-teal-600 text-white rounded-xl font-bold shadow-md">AI 解題</button>`;
    if (q.aiExplanation) {
        document.getElementById('aiAnalysisArea').classList.remove('hidden');
        document.getElementById('aiContent').innerHTML = marked.parse(q.aiExplanation);
    }
}

function checkExamAnswer(qid, idx) {
    const q = pastExamDB.find(i => i.id === qid);
    userSelectedExamIdx = idx;
    document.querySelectorAll('[id^="exam-opt-"]').forEach(el => el.className = "p-4 rounded-xl border border-gray-200 bg-white cursor-pointer flex items-center gap-3");
    const selectedEl = document.getElementById(`exam-opt-${idx}`);
    if (!q.correctAnswer) {
        selectedEl.classList.add('border-blue-500', 'bg-blue-50');
    } else {
        const correctOpt = q.options.findIndex(opt => opt.includes(`(${q.correctAnswer})`));
        if (idx === correctOpt) {
            selectedEl.classList.add('border-green-500', 'bg-green-50');
        } else {
            selectedEl.classList.add('border-red-500', 'bg-red-50');
            if (correctOpt !== -1) document.getElementById(`exam-opt-${correctOpt}`).classList.add('border-green-500', 'bg-green-50');
        }
    }
}

async function callAIForExplanation(qid) {
    if (!userApiKey) { alert("請先輸入 API Key"); return; }
    const q = pastExamDB.find(i => i.id === qid);
    const btn = document.getElementById('solveBtn');
    btn.innerHTML = '思考中...';
    btn.disabled = true;
    try {
        const prompt = `Question: ${q.question}\nOptions: ${q.options}\nProvide correct answer (A/B/C/D) and explanation in Traditional Chinese. Start with "✅ **正確答案：(X)**"`;
        const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${userApiKey}`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        const data = await resp.json();
        const text = data.candidates[0].content.parts[0].text;
        q.aiExplanation = text;
        const match = text.match(/正確答案[：:]\s*[（(]?([A-D])[）)]?/i);
        if (match) q.correctAnswer = match[1].toUpperCase();
        document.getElementById('aiAnalysisArea').classList.remove('hidden');
        document.getElementById('aiContent').innerHTML = marked.parse(text);
        btn.innerHTML = '解析完成';
        if (userSelectedExamIdx !== null) checkExamAnswer(qid, userSelectedExamIdx);
    } catch (e) { alert("AI 請求失敗"); btn.disabled = false; btn.innerHTML = '重試'; }
}

// ==========================================
// E. AI 臨床實驗室
// ==========================================

function renderAILab() {
    updateView(() => renderAILab());
    const container = document.getElementById('contentArea');
    if (!userApiKey) {
        container.innerHTML = `<div class="max-w-md mx-auto mt-10 text-center"><h2 class="text-xl font-bold mb-4">AI 臨床實驗室</h2><input type="password" id="apiKeyInput" placeholder="輸入 API Key" class="w-full p-2 border rounded mb-2"><button onclick="saveApiKey()" class="bg-purple-600 text-white px-4 py-2 rounded">啟動</button></div>`;
    } else {
        container.innerHTML = `<div class="max-w-4xl mx-auto"><div class="flex justify-between mb-4"><h2 class="text-xl font-bold">AI 臨床模擬</h2><button onclick="logoutApiKey()" class="text-red-500 text-sm">登出</button></div><div class="mb-4"><button onclick="generateClinicalCase()" id="generateBtn" class="bg-purple-600 text-white px-4 py-2 rounded">生成病例</button></div><div id="loadingArea" class="hidden text-center text-gray-500">生成中...</div><div id="questionArea" class="hidden"><div class="bg-white p-6 rounded shadow mb-4" id="caseText"></div><div id="optionsArea" class="grid gap-2"></div><div id="explanationArea" class="hidden mt-4 p-4 bg-green-50 rounded"></div></div></div>`;
    }
}

function saveApiKey() {
    const key = document.getElementById('apiKeyInput').value.trim();
    if (key) { updateGlobalApiKey(key); renderAILab(); }
}

function logoutApiKey() {
    localStorage.removeItem('gemini_api_key');
    userApiKey = '';
    renderAILab();
}

async function generateClinicalCase() {
    document.getElementById('loadingArea').classList.remove('hidden');
    document.getElementById('questionArea').classList.add('hidden');
    try {
        const prompt = `Create a USMLE clinical vignette about Virology. JSON format: {"scenario": "...", "question": "...", "options": ["A", "B", "C", "D"], "correctIndex": 0, "explanation": "..."}. Traditional Chinese.`;
        const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${userApiKey}`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        const data = await resp.json();
        const json = JSON.parse(data.candidates[0].content.parts[0].text.match(/\{[\s\S]*\}/)[0]);
        currentQuestionData = json;
        document.getElementById('loadingArea').classList.add('hidden');
        document.getElementById('questionArea').classList.remove('hidden');
        document.getElementById('caseText').innerHTML = `<p>${json.scenario}</p><p class="font-bold mt-2">${json.question}</p>`;
        document.getElementById('optionsArea').innerHTML = json.options.map((opt, i) => `<button onclick="checkAnswer(${i})" id="opt-${i}" class="w-full text-left p-3 border rounded hover:bg-purple-50">${opt}</button>`).join('');
        document.getElementById('explanationArea').classList.add('hidden');
    } catch (e) { alert("生成失敗"); document.getElementById('loadingArea').classList.add('hidden'); }
}

function checkAnswer(idx) {
    const correct = currentQuestionData.correctIndex;
    document.getElementById(`opt-${idx}`).classList.add(idx === correct ? 'bg-green-200' : 'bg-red-200');
    document.getElementById(`opt-${correct}`).classList.add('bg-green-200');
    document.getElementById('explanationArea').innerHTML = currentQuestionData.explanation;
    document.getElementById('explanationArea').classList.remove('hidden');
}

// ==========================================
// F. 初始化
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initSystem();
    renderSidebar();
    renderDashboard();
    const style = document.createElement('style');
    style.innerHTML = `.animate-fade-in { animation: fadeIn 0.4s ease-out; } @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`;
    document.head.appendChild(style);
});

// 全域掛載
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
