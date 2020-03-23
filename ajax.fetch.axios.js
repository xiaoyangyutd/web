

//jquery ajax
$.ajax({
	type: 'POST',
	url: url,
	data: data,
	dataType:dataType,
	succes: function() {},
	error: function() {}
});
/*
传统 Ajax 指的是 XMLHttpRequest（XHR）， 最早出现的发送后端请求技术，隶属于原始js中，
核心使用XMLHttpRequest对象，多个请求之间如果有先后关系的话，就会出现回调地狱。
JQuery ajax 是对原生XHR的封装，除此以外还增添了对JSONP的支持。

优缺点：

本身是针对MVC的编程,不符合现在前端MVVM的浪潮
基于原生的XHR开发，XHR本身的架构不清晰，已经有了fetch的替代方案
JQuery整个项目太大，单纯使用ajax却要引入整个JQuery非常的不合理（采取个性化打包的方案又不能享受CDN服务）

*/




//axios
axios({
	method: 'post',
	url:'/user/12345',
	data: {
		firstName: 'Fred',
		lastName: 'Flintstone'
	}
}).then(function (response) {
	console.log(response);
}).catch(function(error) {
	console.log(error);
});
/*
axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范，它本身具有以下特征：
1.从浏览器中创建 XMLHttpRequest
2.支持 Promise API
3.客户端支持防止CSRF
4.提供了一些并发请求的接口（重要，方便了很多的操作）
5.从 node.js 创建 http 请求
6.拦截请求和响应
7.转换请求和响应数据
8.取消请求
9.自动转换JSON数据

优缺点：

从 node.js 创建 http 请求
支持 Promise API
客户端支持防止CSRF
提供了一些并发请求的接口（重要，方便了很多的操作）
*/


//fetch
try {
	let response= await fetch(url);
	let data = response.json();
	console.log(data);
} catch(e){
	console.log("Oops, error", e);
}
/*
fetch号称是AJAX的替代品，是在ES6出现的，使用了ES6中的promise对象。Fetch是基于promise设计的。Fetch的代码结构比起ajax简单多了，
参数有点像jQuery ajax。但是，一定记住fetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象。
fetch的优点：
1.符合关注分离，没有将输入、输出和用事件来跟踪的状态混杂在一个对象里
2.更好更方便的写法

优缺点：

符合关注分离，没有将输入、输出和用事件来跟踪的状态混杂在一个对象里
更好更方便的写法
更加底层，提供的API丰富（request, response）
脱离了XHR，是ES规范里新的实现方式
1）fetchtch只对网络请求报错，对400，500都当做成功的请求，需要封装去处理
2）fetch默认不会带cookie，需要添加配置项
3）fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费
4）fetch没有办法原生监测请求的进度，而XHR可以

*/


//总结：axios既提供了并发的封装，也没有fetch的各种问题，而且体积也较小，当之无愧现在最应该选用的请求的方式
/*
axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，它本身具有以下特征：

从浏览器中创建 XMLHttpRequest
从 node.js 发出 http 请求
支持 Promise API
拦截请求和响应
转换请求和响应数据
取消请求
自动转换JSON数据
客户端支持防止CSRF/XSRF

*/
