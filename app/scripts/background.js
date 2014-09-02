'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: '\'CookieSee'});

console.log('\'Allo \'Allo! Event Page for Browser Action');
