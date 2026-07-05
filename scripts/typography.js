var stage;

//动态调整侧边栏宽度
//修复要点：
//1. 桌面端先add col-sm-9再读offsetWidth，确保宽度计算基于75%布局（修复右偏）
//2. 直接覆盖sideBar.style.width，不先清除再设置（避免闪烁）
//3. isMobileMode判断需同时检查宽度和高度：(window.innerWidth <= 768 || window.innerHeight <= 600)
function updateSidebar() {
    var sideBar = document.getElementById('side-bar');
    var mainContainer = document.getElementById('main-container');
    var stageEl = document.getElementById('stage');
    
    if (window.innerWidth <= 768 || window.innerHeight <= 600) {
        //移动端模式：侧边栏宽度等于stage宽度，移除col-sm-9类
        sideBar.style.width = stageEl.offsetWidth + 'px';
        mainContainer.classList.remove('col-sm-9');
    } else {
        //桌面端模式：
        //先添加col-sm-9类确保mainContainer为75%宽度，这是计算sidebar宽度的基准
        //某些页面（标签页/标签详情页/分类页）初始没有col-sm-9类，必须在此处添加
        mainContainer.classList.add('col-sm-9');
        //计算侧边栏宽度：stage宽度 - mainContainer宽度 + 右侧留白的一半
        var sidebarW = stageEl.offsetWidth - mainContainer.offsetWidth + (window.innerWidth - stageEl.offsetWidth) / 2;
        //直接设置宽度值，不先清除sideBar.style.width，避免resize时产生闪烁
        sideBar.style.width = sidebarW + 'px';
    }
}

//页面加载完成后执行的初始化逻辑
document.addEventListener('DOMContentLoaded', function() {
    stage = document.getElementById('stage');
    
    window.addEventListener('resize', function() {
        updateSidebar();
    });
    
    updateSidebar();
    
    var mainContainer = document.getElementById('main-container');
    var sideBar = document.getElementById('side-bar');
    
    mainContainer.classList.remove('invisible');
    mainContainer.classList.add('fadeInTop');
    
    if (window.innerWidth <= 768) {
        sideBar.classList.remove('invisible');
        sideBar.classList.add('fadeInTop');
    } else {
        sideBar.classList.remove('invisible');
        sideBar.classList.add('fadeInRight');
    }
    
    var siteTitle = document.querySelector('.site-title');
    if (siteTitle) {
        siteTitle.addEventListener('click', function() {
            var firstLink = document.querySelector('.site-title a');
            if (firstLink) {
                firstLink.click();
            }
        });
    }
});
