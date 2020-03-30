let a = {
	[Symbol.toPrimitive]() {
		return 2
	}
}


//实现双向绑定的原理：采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineproperty来劫





var obj = new Proxy({}, {
	get:function (target, propKey, receiver){
		console.log(`getting ${propKey}!`);
		return Reflect.get(target, propKey, receiver);
	},
	set: function(target, propKey, receiver){
		console.log(`setting ${propKey}!`);
		return Reflect.set(target, propKey, value, receiver);
	}
})


var object = { proxy: new Proxy(target, handler) };
let obj = Object.create(proxy);