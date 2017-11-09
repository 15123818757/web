var mySwiper = new Swiper('.swiper-container_index',{
//		loop : true,
		autoplay : 2000,  //自动播放
		speed:1000,  // div移动的速度
        slidesPerView: 1,    //可见的div   相当于设置div的宽度
        paginationClickable: true,  //  是否可以点击小圆点
        spaceBetween: 0,  // 每个div之间的间距
        freeMode: false,  //  是否可以自由的停在任何位置 
		pagination: '.swiper-pagination',  // 是否显示小圆点
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		autoplayDisableOnInteraction : false
    });


// 移动端
var scrWid = document.body.clientWidth;
var scrHei = window.screen.height;
	if(scrWid <= 640){
		$(".index_swiper .swiper-wrapper div:nth-of-type(1) img").attr("src","images/mobile/banner1.jpg");
		$(".index_swiper .swiper-wrapper div:nth-of-type(2) img").attr("src","images/mobile/banner2.jpg");
		$(".index_swiper .swiper-wrapper div:nth-of-type(3) img").attr("src","images/mobile/banner3.jpg");
		$(".conBox>img:nth-of-type(1)").attr("src","images/contact/m_con.jpg");
	}
	
	
	
	
	
window.onload = function(){
	
	var roundDivWid = $(".pro_round>a").width();
//	$(".pro_round>div:nth-of-type(1)").css("margin-left",(scrWid-roundDivWid*3)/3.7+"px");
	
	$(".nav a").hover(function(){
		$(this).addClass("avtiveNav").siblings("a").removeClass("avtiveNav");
		
	});
	
	$(window).scroll(function(){
		if($(window).scrollTop() < 200){
				$(".goTop").css({
					"visibility": "hidden",
					"opacity": "0"
				});
			}
			if($(window).scrollTop() > 200){
				$(".goTop").css({
					"visibility": "visible",
					"opacity": "1"
				});
			}
		if(scrWid > 740){
			if($(window).scrollTop() > 180 ){
				$(".pro_round>a>div").addClass("roundAni");			
			}
			if($(window).scrollTop() > 350 ){
				//$(".con div").children().addClass("moveTopAni");
			}
			if($(window).scrollTop() > 640 ){
				$(".pro_title div p").addClass("scanAni");
			}	
		}
	});
	
	$(".teacImgBox>div").hover(function(){
		$(this).children("div").css("display","block");
		$(this).siblings("div").children("div").css("display","none");
	});
	
	$(".greenLine").height($(".pro_introduction").height());
	
//	$(".conBox div").width($(".conBox").width()-$(".conBox>img").eq(0).width());
	


	//  移动
	$(".m_navTop").click(function(){
		$(".nav").css("display","block");
	});
	$(".nav").click(function(){
		$(this).css("display","none");
	});
	if(scrWid <= 640){
		var roundDivWid = $(".pro_round>a").width();
		$(".pro_round>a:nth-of-type(1)").css("margin-left",(scrWid-roundDivWid*3)/5+"px");
		$(".pro_round>a").eq(0).height($(".pro_round>a").eq(0).width());
		$(".pro_round>a").eq(1).height($(".pro_round>a").eq(1).width());
		$(".pro_round>a").eq(2).height($(".pro_round>a").eq(2).width());
		$(".pro_round>a:nth-of-type(1) div").height($(".pro_round>a:nth-of-type(1) div").width());
		$(".pro_round>a:nth-of-type(2) div").height($(".pro_round>a:nth-of-type(2) div").width());
		$(".pro_round>a:nth-of-type(3) div").height($(".pro_round>a:nth-of-type(3) div").width());
		$("iframe").css({
			"width":"90%",
			"height":"400px",
		    "box-sizing":" border-box",
			"margin-top":"20px",
			"margin-bottom":"20px",
			"margin-left":"5%"
		});
		//$(document.getElementById('myIfa').contentWindow.document.body).find('.common_bottom').css("display","none");
		$("#myIfa").contents().find(".common_bottom").css("display","none");
	}


 	// 返回顶部
 	$(".goTop").click(function () {
 		$(".goTop").css({
 			"background": "url(images/goTop2.png)",
			"background-size":"100% 100%"
 		});
	    $('body,html').animate({ scrollTop: 0 }, 600);
	    setTimeout(function(){
	    	$(".goTop").css({
 				"background": "url(images/goTop1.png)",
				"background-size":"100% 100%"
 		});
	    },700);
	    return false;
	 });
	
	
}
