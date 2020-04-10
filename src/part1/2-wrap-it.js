
export default function transformArgumentsToArray(transformingFunction) {
    function sumAll(...args) { 
	  let sum = 0;
	  
	  for (let arg of args[0]) sum += arg;

	  return sum;
	}
    return sumAll;
}
