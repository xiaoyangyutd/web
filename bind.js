//手写实现bind

Function.prototype.bind = function () {
	// 保存原函数
	var self = this;
	 // 取出第一个参数作为上下文, 相当于[].shift.call(arguments)，因为第一个就是this对象
	var context = Array.prototype.shift.call(arguments);
	// 取剩余的参数作为arg; 因为arguments是伪数组, 所以要转化为数组才能使用数组方法
	var arg = Array.prototype.slice.call(arguments);
	// 返回一个新函数
	return function() {
		// 绑定上下文并传参
		self.apply(context,Array.prototype.concat.call(arg,Array.prototype.slice.call(arguments)))
	}
} 



//方法二
Function.prototype.myBind = function(thisArg){
	if (typeof this !== 'function') {
		return;
	}
	var _self = this;
	var args = Array.prototype.slice.call(arguments,1);
	return function() {
		return _self.apply(thisArg,args.concat(Array.prototype.slice.call(arguments)))
	}
}  



// Function.prototype.myBind = function (thisArg) {
// 	if (typeof this !== 'function') {
// 		return;
// 	}

// 	var _self = this;
// 	var args = [].slice.call(arguments,1);
// 	return function() {
// 		return _self.apply(thisArg,args.concat([].slice.call(arguments)))
// 	}
// }