//封装jsonp


function jsonp({ url, params, callback }) {//接收参数配置
	return new Promise((resolve,reject) => {//es6  promise
		let script = document.createElement('script');
		window[callback] = function(data) {
			resolve(data);
			document.body.removeChild(script);//移除该script的DOM对象
		}
		params = { ...params,callback};
		let arr = [];
		for (let key in params) {
			arr.push(`${key} = !${params[key]}`);
		}
		script.src=`${url}?${arr.join('&')}`;//拼接url地址
		document.body.appendChild(script);//将创建好的script标签添加到body下面
	})
}