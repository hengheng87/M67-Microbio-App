// 1. 引入模組 (路徑要對)
import { initSystem, goBack, updateGlobalApiKey } from './core/router.js';
import { renderDashboard, renderSidebar, renderCategoryOverview } from './modules/dashboard.js';
import { loadContent } from './modules/content.js';
import { handleSearch } from './modules/search.js';
import { renderExamDashboard, openQuestionModal, checkExamAnswer, callAIForExplanation } from './modules/exam.js';
import { renderAILab, saveApiKey, generateClinicalCase, checkAnswer, logoutApiKey } from './modules/aiLab.js';

// 2. 啟動系統
document.addEventListener('DOMContentLoaded', () => {
    initSystem();
    renderSidebar();
    renderDashboard();
    
    // 綁定開關事件 (如果有這個元素的話)
    const toggle = document.getElementById('examToggle');
    if(toggle) toggle.addEventListener('change', () => { /* 呼叫您的 toggle 邏輯 */ });
});

// 3. 全域橋樑 (讓 HTML 按鈕找得到函式)
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