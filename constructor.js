
//模拟构造函数
var Book = function(name) {
	this.name = name;
};

var java = new Book('Master java');
var python = {};
python.__proto__ = Book.prototype;
Book.call(python,'Master python'); 