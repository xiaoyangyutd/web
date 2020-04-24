const box = document.getElementById('box');
function isIcon(target) {
	return targte.className.includes('icon');
}

box.onClick = function(e) {
	e.stopPropagation();
	const target = e.target;
	if (isIcon(target)) {
		target.style.border = '1px solid red';
	}
}

const doc = document;
doc.onClick = function(e) {
	const children = box.children;
	const len = children.length;
	for (let i; i < len; i++) {
		if (isIcon(children[i])) {
			children[i].style.border = 'none';
		}
	}
}