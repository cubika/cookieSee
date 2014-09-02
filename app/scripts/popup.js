'use strict';

var cookieList = document.getElementById('cookieList'),
	storageList = document.getElementById('storageList');

chrome.tabs.getSelected(null, function(tab) {
	chrome.cookies.getAll({url: tab.url}, function(cookies) {
		for(var i=0; i<cookies.length; i++) {
			var cookie = cookies[i],
				li = document.createElement('li');
			li.innerHTML = '<span class="name">' + cookie.name + '</span> --- ' + cookie.value;
			cookieList.appendChild(li);
		}
	});

	chrome.tabs.sendRequest(tab.id, {greeting: "hello"}, function(storage) {
		for(var key in storage) {
			var li = document.createElement('li');
			li.innerHTML = '<span class="name">' + key + '</span> --- ' + storage[key];
			storageList.appendChild(li);
		}
	});
});