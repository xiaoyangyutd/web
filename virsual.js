

//判断进入文档的可视区域
$(window).scroll(function () {
	var documentClientHeight = document.documentElement.clientHeight || window.innerHeight;
	var htmlElementClientTop = documen.getElementById('#id').getBoundingClientRect().top;
	if (documentClientHeight >= htmlElementClientTop) {
		
	}
})