var mv = {};
var data = {

}

var key, value
for (key in data){
	(function (key) {
		Object.defineProperty(mv, key, {
			get: function() {
				return data[key];
			},
			set: function(newVal) {
				data[key] = newVal;
			}
		})
	})(key)
}