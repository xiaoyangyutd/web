// const extname = (filename) => {
//   /* TODO */
//   const name = filename.split('.');
//   const index = filename.lastIndexOf('.');
//   console.log(index);
//   const item= filename.slice(index);
//   console.log(item);
//   if(item && item === 'jpg' || item === 'png'|| item === 'gif'){
//     return '.'+item;
//   } else {
//     return '';
//   }
  
}
const extname = (filename) => {
  /* TODO */
  const name = filename.split('.');
  const index = filename.lastIndexOf('.');
  console.log(index);
  const item= filename.slice(index);
  console.log(item);
  if(item && item === 'jpg' || item === 'png'|| item === 'gif'){
    return '.'+item;
  } else {
    return '';
  }
  
}
extname('hello.jpg');




const extname = (filename) => {
	let s = '';
	let arr = ['.jpg','.png','.gif'];
	let num = filename.lastIndexOf('.');
	let left = filename.substring(0,num);
	if (num !== -1 && left !== '') {
		let str = filename.substring(num);
		for (let i = 0; i < arr.length; i++) {
			if(str == arr[i]) {
				s = str;
			}
		}
	}
	return s;
}
extname('hello.jpg');
