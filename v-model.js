

/*
VUE实现双向数据绑定的原理就是利用了 Object.defineProperty() 这个方法  
重新定义了 
对象获取属性值(get) 
和设置属性值(set)的操作来实现的。
*/

//简化版
var obj = {};
var name;

Object.defineProperty(obj,"data",{
	get: function() {
		return name;
	},
	set: function(val) {
		name = val;//不能加上this
		console.log("val" + val);
	}
});

obj.data = "yytt";
console.log(obj.data);



//详细版
myVue.prototype._obverse = function (obj) {
	var value;
	for(key in obj) {
		if (obj.hasOwnProperty(key)) {
			value = obj[key];
			if (typeof value === 'object') {
				this._obverse(value);
			}
			Object.defineProperty(this.$data, key, {
				enumerable: true,
				configurable: true,
				get: function() {
					console.log(`获取${value}`);
				},
				set: function (newVal){
					console.log(`更新${value}`);
					if (value !== newVal) {
						value = newVal;
					}
				}
			})
		}
	}
}




myVue.prototype._obserse = function (obj) {
	var value;
	for(key in obj){
		if(obj.hasOwnProperty(key)) {
			value = obj[key];
			if(typeof value === 'object') {
				this._obserse(value);
			}

			Object.defineProperty(this.$data, key, {
				enumerable: true,
				configurable: true,
				get: function(){
					return value;
				},
				set: function(newVal) {
					if(value !== newVal) {
						value = newVal;
					}
				}
			})
		}
	}
}