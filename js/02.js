//定义全局变量和定时器
var i=0;
var timer;
$(document).ready(function(e) {
	//用jq方法设置第一张图片显示，其余图片影藏
    $('.ig').eq(0).show().siblings('.ig').hide();
	//调用showTime()函数（轮播函数）
	showTime();
	//鼠标经过时触发两个事件（鼠标悬停和鼠标离开）
	$('.tab').hover(function(){
	 //获取当前i的值，并显示，同时还要清除定时器
		i=$(this).index();
		Show();
		clearInterval(timer);
		},function(){
			showTime();
			});
});
//创建一个showTime函数
function showTime(){
  //定时器
  timer = setInterval(function(){
    //调用一个Show()函数
    Show();
    i++;
    //当图片是最后一张的后面时，设置图片为第一张
    if(i==4){
      i=0;
    }
  },1500);
}
 
function Show(){
	$('.ig').eq(i).fadeIn(200).siblings('.ig').fadeOut(200);
	$('.tab').eq(i).addClass('bg').siblings('.tab').removeClass('bg');
	}