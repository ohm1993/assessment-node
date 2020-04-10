
export default function waitAMinute(time1,time2) {
	if(new Date(time2) > new Date(time1)){
		let d = new Date(time2) - new Date(time1);
		let diff = Math.floor(d / 60e3);
		let count = 0;
		while(diff > 0){
			if(count % 4 == 0 && count != 0){
				if(diff >= 40){
					diff = diff - 40;
				    count = count + 1;
				}else{
					break;
				}
			}else{
				if(diff >= 30){
					diff = diff - 30;
					count = count + 1;
				}else{
					break;
				}
			}
		}
		return count;
	}
}