//手写4种继承



function Father() {}
function Child(){}

//1  原型继承
Child.prototype = new Father();//缺点：实例化的子类对象公用一个原型链上的原型对象，修改一个对象同时也会影响到另一个对象


//2  构造继承
function Child(name) {
	Father.call(this,name);//把父级Father在子函数中执行，同时修改了父级构造函数的this指向，
	//也就是指向了child这个类实例化对象的引用，也就是this,改变this指向，导致父类执行时的属性都会挂载到child这个类的实例上。
	//原理：将父级构造函数的this指向子构造函数的实例，这样父级构造函数的属性在子类中也有
	//缺点：父级原型链上的东西没有被子类继承
}	

//3  组合继承
function Child(name) {//是真正面向对象编程的通用方式
	Father.call(this,name);//在子类构造函数中执行父级构造函数，父级构造函数第一次执行
}
Child.prototype = new Father();
//缺:1：在写子类原型链的时候实例化了父类，在后面实例化子类的时候，父类的构造函数执行了两次（父级构造函数第二次执行）
//缺点2：父类子类共用了原型对象，无法区分实例是由父类创造的还是子类创造的
//构造函数体内的东西会自动执行，所以没有必要将父级的内容放到原型链上去

//优化方案1
function Child(name) {
	Father.call(this,name);
}
//不用：Child.prototype = new Father();
Child.prototype = Father.prototype;//父级引用，构造函数没有执行
var s1 = new Child();
var s2 = new Child();
s1 instanceof Child   //true
s2 instanceof Father   //true
//缺点：无法区分实例是父类的构造函数还是子类的构造函数产生的，无法区分实例是由父类创造的还是子类创造的
s1.constructor  //指向的构造函数是父类，这是不对的，正常constructor指向的是实例化它的类



//优化方案2（完美写法）
function Child(name) {
	Father.call(this,name);
}
//不用：Child.prototype = new Father();
//不用：Child.prototype = Father.prototype;
Child.prototype = Object.create(Father.prototype);//创建一个中间对象，让子类的原型对象变成父类的，然后给子类加上构造函数处理，使得父类和子类对象的隔离
//Object.create创建的对象,父级原型对象就是参数

//实现了继承，还实现了父类和子类对象的隔离
Child.prototype.constructor = Child;//手动加constructor覆盖，不让它往上到达父类的




//4寄生继承
function cloneObj(o) {
	var clone = Object.create(o);
	clone.sayName = ...
	return clone
}

//5  寄生组合继承

//6  ES6 class extend 继承

class Child extends Father {
	constructor() {
		super()
	}
}






// function Father() {

// }
// function Child() {
// 	Father.call(this);
// }
// Child.prototype = Object.create(Father.prototype);
// Child.prototype.constructor = Child;

