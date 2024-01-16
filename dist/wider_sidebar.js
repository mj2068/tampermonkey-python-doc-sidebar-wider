// ==UserScript==
// @name         docs.python.org - wider sidebar
// @namespace    http://tampermonkey.net/
// @version      2024-01-16
// @description  try to take over the world!
// @author       https://github.com/mj2068
// @match        https://docs.python.org/3*/reference/*.html
// @match        https://docs.python.org/3*/library/*.html
// @match        https://docs.python.org/3*/glossary.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=python.org
// @grant        none
// ==/UserScript==
"use strict";
(function () {
    // Your code here...
    console.log("This script widens the siderbar on the doc pages of python.org.");
    // specify how much wider
    const delta = 70;
    const bodywrapper = document.querySelector(".bodywrapper");
    // sidebar container, container actual sidebar and collapse button
    const sphinxsidebar = document.querySelector(".sphinxsidebar");
    // the actual list container, measures 13px less in width than sphinxsidebar
    const sphinxsidebarwrapper = document.querySelector(".sphinxsidebarwrapper");
    if (null !== bodywrapper &&
        sphinxsidebar !== null &&
        sphinxsidebarwrapper !== null) {
        const bodywrapperOriginalMarginLeft = parseInt(getComputedStyle(bodywrapper).marginLeft);
        const sphinxsidebarOriginalWidth = parseInt(getComputedStyle(sphinxsidebar).width);
        const sphinxsidebarwrapperOriginalWidth = parseInt(getComputedStyle(sphinxsidebarwrapper).width);
        bodywrapper.style.marginLeft = bodywrapperOriginalMarginLeft + delta + "px";
        sphinxsidebar.style.width = sphinxsidebarOriginalWidth + delta + "px";
        sphinxsidebarwrapper.style.width =
            sphinxsidebarwrapperOriginalWidth + delta + "px";
    }
})();
