window.onload = function(){
	var mySwiper = new Swiper('.swiper-container_index',{
			loop : true,
			autoplay : 3500,  //自动播放
			speed: 2000,  // div移动的速度
	        slidesPerView: 1,    //可见的div   相当于设置div的宽度
	        spaceBetween: 0,  // 每个div之间的间距
			autoplayDisableOnInteraction : false,
			pagination: '.swiper-pagination',  // 是否显示小圆点
	    });
	//  导航鼠标浮动
	$(".nav a").hover(function(){
		$(this).addClass("navFont").siblings("a").removeClass("navFont");
		var index = $(this).index();
		$(".nav>span").css("left",index*14.1+"%");
	});
	// banner图片文字的位置
	$(".banner>img").css("left",($(".banner").width()-$(".banner>img").width())/2+'px');
	//  招聘平台隐藏白色图片的位置
	$(".box_2 div img:nth-of-type(2)").css("left",($(".box_2 div").width()-$(".box_2 div img:nth-of-type(2)").width())/2+"px");
	$(".bigBox div a img:nth-of-type(2)").css("left",($(".bigBox div a").width()-$(".bigBox div a img:nth-of-type(2)").width())/2+"px");
	
	
	
	
	
	
	
	
}
