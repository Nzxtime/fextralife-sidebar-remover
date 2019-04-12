// ==UserScript==
// @name         fextralife-sidebar-remover
// @namespace    http://tampermonkey.net/
// @version      0.1b
// @description  Removes the sidebar from fextralife wiki
// @author       snay@snay.me
// @match        https://*.wiki.fextralife.com/*
// @grant        none
// ==/UserScript==

(function() {
    var sidebar = document.getElementById('sidebar-wrapper');
    sidebar.parentNode.removeChild(sidebar);
    var wrapper = document.getElementById('wrapper');
    wrapper.style.paddingLeft = 0;
})();
