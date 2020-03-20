function* myGenerator() {
	yield 'hello';
	yield 'world';
	yield 'ending';
}

var hw = myGenerator();
hw.next();
hw.next();
hw.next();