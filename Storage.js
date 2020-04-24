var instance = null;
class Storage {
	static getInstance() {
		if(!instance) {
			instance = new Storage();
		}
		return instance;
	}
	setItme = (key,value) => localStorage.setItem(key, value),
	getItem = key => localStorage.getItem(key);
}