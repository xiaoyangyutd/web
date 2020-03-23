//js实现instanceof

function instanceof(l,r) {
	let R = r.prototype;
	while (l.__proto__) {
		if (l.__proto__ === R) return true;
	}
	return false;
}
