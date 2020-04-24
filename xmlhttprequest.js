if(opt.url) {
	var xhr = XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject('Microsoft');
	var data = opt.data;
		url = opt.url,
		type= opt.type.toUpperCase();
		dataArr = [];
		for (var k in data) {
			dataArr.push(k + '=' + data[k]);
		}
		if (type === 'GET') {
			url = url + '?' + dataArr.join('&');
			xhr.open(type, url.replace(/\?$/g, ''),true);
			xhr.send();
		}

		if(type === 'POST') {
			xhr.open(type, url, true);
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xhr.send(dataArr.join('&'));
		}

		xhr.onload = function () {
			if (xhr.status === 200 && xhr.readyState = 4) {
				var res;
				if (opt.success && opt.success instanceof Function) {
					res = xhr.responseText;
					if (typeof res === 'string') {
						res = JSON.parse(res);
						opt.success.call(xhr, res);
					}
				}
			} else {
				if (opt.error && opt.error instanceof Function){
					opt.error.call(xhr,res);
				}
			}
		}
}