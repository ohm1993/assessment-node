
export default function magicArray(arr) {
	 if(!arr.some(isNaN)){
          let sum = 0;
		  for (let arg of arr) {
		  	if(arg % 7 != 0){
		  		sum += arg;
		  	}
		  }	
		  return sum;
	}
}