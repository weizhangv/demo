$(function(){
	var timer;
	$(".list li").eq(0).show();//第一张显示
	$(".text li").mouseover(function(){//标题添加鼠标滑过
		var index=$(this).index(),//索引
		that=$(this);
	timer=setInterval(function(){//添加定时器
		that.addClass('wid').siblings().removeClass('wid');
		$(".list li").eq(index).fadeIn().siblings().fadeOut();
	},300);
	}).mouseout(function(){
		clearInterval(timer);
	});
})
