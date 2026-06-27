function updateSidebar() {
    var sideBar = document.getElementById('side-bar');
    var mainContainer = document.getElementById('main-container');
    
    if (!sideBar || !mainContainer) return;
    
    if (window.innerWidth <= 768 || window.innerHeight <= 600) {
        sideBar.style.width = '100%';
        mainContainer.classList.remove('col-sm-9');
    } else {
        if (!mainContainer.classList.contains('col-sm-9')) {
            mainContainer.classList.add('col-sm-9');
        }
        sideBar.style.width = '25%';
    }
}// Firefox 正常，但 Edge 存在兼容性问题

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('resize', function() {
        updateSidebar();
    });
    
    updateSidebar();
    
    window.addEventListener('load', function() {
        updateSidebar();
    });
    
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
