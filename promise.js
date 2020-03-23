var myPromise = new Promise((resolve,reject) => {
	//需要执行的代码
	if(/* 异步执行成功*/) {
		resolve(value);
	} else if (/*异步执行失败*/){
		reject(error)
	}
})

myPromise.then((value) => {
	//成功后调用，使用value值
}, (error)=> {
	//失败后调用，获取错误信息error
})




function promise() {
	this.msg = '';
	this.status = 'pending';
	var that = this;
	var process = arguments[0];

	process(function (){
		that.status='fulfilled';
		that.msg = arguments[0];
	}, function() {
		that.status = 'rejected';
		that.msg = arguments[0];
	})
	return this;
}

promise.prototype.then = function () {
	if (this.status ==='fulfilled') {
		arguments[0](this.msg);
	} else if (this.status === 'rejected' && arguments[1]) {
		arguments[1](this.msg);
	}
}


//promise.finally实现
Promise.prototype.finally = function (callback) {
	let p = this.constructor;
	return this.then(
			value => P.resolve(callback()).then(()=> value),
			reason => P.resolve(callback().then(()=>{throw reason}))
		);
};