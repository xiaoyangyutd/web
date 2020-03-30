let onWatch = (obj, setBind, getLogger) => {
	let handler = {
		get(target, property, receiver) {
			getLogger(target, property)
			return Reflect.get(target, property, receiver);
		},
		set(target, property, value, receiver){
			setBind(value);
			return Reflect.set(target, property, value);
		}
	};
	return new Proxy
}