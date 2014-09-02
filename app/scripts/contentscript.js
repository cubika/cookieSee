'use strict';

chrome.extension.onRequest.addListener(function(msg, sender, response) {
	response(window.localStorage);
});