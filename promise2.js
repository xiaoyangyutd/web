function NewPromise(fn) {
	this.state = 'pending';
	this.fullfillList = [];
	this.rejectList = [];

	fn(this.resolve.bind(this),this.reject.bind(this));
}

NewPromise.prototype.resolve = function (data){
	this.state = 'fullfilled';
	var args = [].slice.call(arguments);
	setTimeout(function() {
		this.fullfillList.forEach(function (itemFn, key, arr) {
			itemFn.apply(null, args);
			arr.shift();
		})
	}.bind(this),0)
}

NewPromise.prototype.reject = function (data) {
	this.state = 'rejected';
	var args2 = [].slice.call(arguments);

	setTimeout(function() {
		this.rejectList.forEach(function (itemFn, key, arr) {
			itemFn.apply(null, args2);
			arr.shift();
		})
	}.bind(this),0)
}

NewPromise.prototype.done = function (handle) {
	if (typeof handle === 'function') {
		this.fullfillList.push(handle);
	} else {
		throw new Error('回调出错');
		return this;
	}
}

NewPromise.prototype.fail = function (handle) {
	if (typeof handle === 'function') {
		this.rejectList.push(handle);
	} else {
		throw new Error('回调出错');
		return this;
	}
}

NewPromise.prototype.then = function (fullfill, reject) {
	this.done(fullfill) || function () {}
	.fail(reject) || function (){}
	return this
}
NewPromise.prototype.always = function (handle) {     this.done(handle) || function () {}    .fail(handle) || function () {}    return this }





























// var PENDING = 0;
// var FULFILLED = 1;
// var REJECTED = 2;

// function Promise(fn) {
// 	var state = PENDING;
// 	var value = null;
// 	var handlers = [];

// 	function fullfill(result) {
// 		state = FULFILLED;
// 		value = result;
// 		handlers.forEach(handler);
// 		handlers = null;
// 	}

// 	function reject(error) {
// 		state = REJECTED;
// 		value = error;
// 		handlers.forEach(handler);
// 		handlers = null;
// 	}

// 	function resolve(result) {
// 		try {
// 			var then = getThen(result);
// 			if(then) {
// 				doResolve(then.bind(result), resolve, reject);
// 				return;
// 			}
// 			fullfill(result);
// 		} catch (e) {
// 			reject(e);
// 		}
// 	}

// 	doResolve(fn,resolve, reject);

// 	function handle(handler) {
// 		if (state === PENDING) {
// 			handlers.push(handler);
// 		} else {
// 			if (state === FULFILLED && typeof handler.onFullfilled === 'function') {
// 				handler.onFullfilled(value);
// 			}
// 			if (state === REJECTED && typeof handler.onRejected === 'function') {
// 				handler.onRejected(value);
// 			}
// 		}
// 	}

// 	this.done = function (onFullfilled, onRejected) {
// 		setTimeout(function (){
// 			handler({onFullfilled: onFullfilled,onRejected:onRejected});
// 		})
// 	}
// }

// function getThen(value) {
// 	var t = typeof value;
// 	if (value && (t === 'object' || t === 'function')) {
// 		var then = value.then;
// 		if ( typeof then === 'function') {
// 			return then;
// 		}
// 	}
// 	return null;
// }

// function doResolve(fn, onFullfilled, onRejected) {
// 	var done = false;
// 	try {
// 		fn(
// 			function(value) {
// 				if (done) return;
// 				done = true;
// 				onFullfilled(value);
// 			},
// 			function(reason) {
// 				if (done) return;
// 				done = true;
// 				onRejected(reason);
// 			}
// 		);
// 	} catch(ex) {
// 		if (done) return;
// 		done = true;
// 		onRejected(ex);
// 	}
// }