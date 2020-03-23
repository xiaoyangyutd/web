

//节流
var canRun = true;
document.getElementById("throttle").onscroll = function() {
	if(!canRun) {
		// 判断是否已空闲，如果在执行中，则直接return
		return;
	}
	canRun = false;
	setTimeout(function() {
		console.log("函数节流");
		canRun = true;
	},300);
}


//函数防抖
var timer = false;
document.getElementById("debounce").onscroll = function() {
	clearTimeout(timer);

	timer= setTimeout(function(){
		console.log("函数防抖");
	},300);
};


//sleep函数
// 这种实现方式是利用一个伪死循环阻塞主线程。因为JS是单线程的。所以通过这种方式可以实现真正意义上的sleep()。
function sleep(delay){
	var start = (new Date()).getTime();
	while ((new Date()).getTime() - start < delay) {
		continue;
	}
}

function test() {
	console.log("111");
	sleep(2000);
	console.log("222");
}



//函数柯里化
//只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。
function curringAdd(x){
	return function(y) {
		return x+y;
	}
}
curringAdd(1)(2);


//函数闭包
for(var i = 0; i < 5; i++) {
	setTimeout(console.log(i),i*1000);
}
//输出：0 1 2 3 4  设置的延迟时间没有生效,会一次性打出来
//因为 console.log() 是方法的执行调用,在调用这个方法后,是马上执行


for(var i = 0; i < 5; i++) {
	setTimeout(function(){
		console.log(i);
	},i*1000);
}
//5 5 5 5 5 设置的延迟时间有生效，但是打印的不对
//使用一个匿名函数包含了打印的console.log来打印i,所以 i这个值是共享的,还没等到执行第一个setTimeout的时候,for循环已经执行完成,最后的i = 5,所以i 会打印四次


//解决方案 1  全局变量存储
var j = 0;
function abc() {
	console.log("j = " + j);
	j++;
}
for(var i = 0; i < 5; i++) {
	setTimeout(abc,i*1000);
}

//方案二 闭包
for(var i = 0; i < 5; i++) {
	(function(x) {
		setTimeout(function(){
			console.log(x)
		},i*1000)
	})(i);
}
//因为闭包函数,每一次创建都会存在一个自己的空间来存储唯一的值
//i的每一次执行for循环的值,传给不同创建的闭包函数,这样每一个闭包函数里存储的i值,就都不会一样
