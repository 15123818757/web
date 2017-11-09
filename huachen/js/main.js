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
		$(".nav>span").css("left",index*14.38+"%");
	});
	// 二级导航鼠标浮动
	$(".hideDiv span").hover(function(){
		$(this).addClass("navFont").siblings().removeClass("navFont");
	});
	// 搜索鼠标浮动
	$(".rightNav span:nth-of-type(1)").mouseover(function(){ $(this).children("img").attr("src","img/serach_red.png"); })
	$(".rightNav span:nth-of-type(1)").mouseout(function(){ $(this).children("img").attr("src","img/serach.png"); })
	$(".rightNav span:nth-of-type(2)").mouseover(function(){ $(this).children("img").attr("src","img/menu_red.png"); })
	$(".rightNav span:nth-of-type(2)").mouseout(function(){ $(this).children("img").attr("src","img/menu.png"); })
	// 显示地图导航
	$(".rightNav span:nth-of-type(2)").click(function(){
		$(".map").css({ "visibility":"visible","opacity":"1" });
		setTimeout(function(){ $(".mapBox").css("top","0"); },100);
	});
	$(".closeMap").click(function(){
		$(".mapBox").css("top","-150%");
		setTimeout(function(){ $(".map").css({ "visibility":"hidden","opacity":"0" }); },250);
	});
	// 地图a标签鼠标浮动
	$(".map a").hover(function(){ $(this).addClass("navFont").siblings("a").removeClass("navFont").parent().siblings().children("a").removeClass("navFont"); })
	$(".banner>img").css("left",($(".banner").width()-$(".banner>img").width())/2+'px');
	
	// 企业产品鼠标浮动
	$(".proNavBox").mousemove(function(){
		var index = $(this).index();
		$(this).children("p").addClass("proFont").parent().siblings().children().removeClass("proFont");
		$(this).addClass("proBg").siblings().removeClass("proBg");
		for(var i=0;i<$(".proNavBox").length;i++){
			(function(i){
				$(".proNavDiv div").eq(i).children("img").attr("src","img/icon"+(i+1)+"_gray.png");
			})(i)
		}
		$(".proNavDiv div").eq(index).children("img").attr("src","img/icon"+(index+1)+".png");
		for(var i=0;i<$(".proDetailBox").length;i++){
			(function(i){
				$(".proDetailBox").eq(i).css("bottom","-150%");
			})(i)
		}
		switch (index){
			case 0:
				$(".pd_1").css("bottom","-1px");
				break;
			case 1:
				$(".pd_2").css("bottom","-1px");
				break;
			case 2:
				$(".pd_3").css("bottom","-1px");
				break;
			case 3:
				$(".pd_4").css("bottom","-1px");
				break;
			case 4:
				$(".pd_5").css("bottom","-1px");
				break;
			case 5:
				$(".pd_6").css("bottom","-1px");
				break;
			case 6:
				$(".pd_7").css("bottom","-1px");
				break;
			case 7:
				$(".pd_8").css("bottom","-1px");
				break;
			default:
				break;
		}		
	});
	$(".proDetailBox div").height($(".proDetailBox").height());
	$(".proNavBox").mouseout(function(){
		for(var i=0;i<$(".proDetailBox").length;i++){
			(function(i){
				$(".proDetailBox").eq(i).css("bottom","-150%");
			})(i)
		}
	});
	
	//  左边新闻a标签鼠标浮动
	$(".left>a").hover(function(){
		var index = $(this).index();
		for(var i=0;i<$(".left>a").length;i++){
			(function(i){
				$(".left>a").eq(i).children("img").attr("src","img/left.png");
			})(i)
		}
		$(".left>a").eq(index-2).children("img").attr("src","img/leftRed.png");
	});
	//  离开的时候变灰
	$(".left>a").mouseout(function(){
		for(var i=0;i<$(".left>a").length;i++){
			(function(i){
				$(".left>a").eq(i).children("img").attr("src","img/left.png");
			})(i)
		}
	});
	
	$(".right").height($(".left").height()+40);
	
	//  底部鼠标浮动
	$(".btHover a").mousemove(function(){
		var index = $(this).index();
		for(var i=0;i<$(".btHover a").length;i++){
			(function(i){
				$(".btHover a").eq(i).children("img").attr("src","img/botIcon_"+(i+2)+".png");
			})(i)
		}
		$(".btHover a").eq(index).children("img").attr("src","img/botIcon_"+(index+2)+"red.png");
	});
	$(".btHover a").mouseout(function(){
		for(var i=0;i<$(".btHover a").length;i++){
			(function(i){
				$(".btHover a").eq(i).children("img").attr("src","img/botIcon_"+(i+2)+".png");
			})(i)
		}
	});
	
	
}
