function lunbo(num,over){
	for(nums=1;nums<=4;nums++){
		var img='img'+nums;
		var li='li'+nums;
		document.getElementById(li).className="";
		document.getElementById(img).style.display='none';
		}
		var imgs='img'+num;
		var lis='li'+num;
		document.getElementById(lis).className="bg";
		document.getElementById(imgs).style.display='block';
		num++;
		if(num>4){
			num=1;
			}
		if(over===1){
			return false;
			}
		time=setTimeout(function(){
			lunbo(num);
			},1000);
	}
lunbo(1);
function stop(num){
	lunbo(num,1);
	clearTimeout(time);
	}
function start(num){
	time=setTimeout(function(){
		lunbo(num);
		},1000);
	}