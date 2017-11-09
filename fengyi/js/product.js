window.onload = function(){
	
	//$(".loading").fadeOut("fast");
	$(".swiper-container>div:nth-of-type(2),.swiper-container>div:nth-of-type(3)").css("line-height",scrHei+"px");
	
	var audio_ = document.getElementById('audio');
	
	
	
	$("#music").click(function(){
		if(audio_.paused){
			$("#music").addClass("music");
			$("#music").attr("src","img/p_music.png");
			audio_.play();
		}else{
			$("#music").removeClass("music");
			$("#music").attr("src","img/p_music_c.png");
			audio_.pause();			
		}
	});
	
	var cData;
	var cData2;
	var cIndex = 0;
	
	
	
	//  激活swiper插件
	var swiper = new Swiper('.swiper-container', {
		loop : true,
		effect : 'coverflow',
		speed : 800,  // div移动的速度
        slidesPerView: 1,    //可见的div   相当于设置div的宽度
        spaceBetween: 0,  // 每个div之间的间距
        freeMode: false,  //  是否可以自由的停在任何位置 
		 // 如果需要前进后退按钮
		nextButton: '#next',
		prevButton: '#prev',
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper){ 
		    console.log(swiper.activeIndex);
		    swiperAnimate(swiper); //初始化完成开始动画
//		    if( swiper.activeIndex == 0 || swiper.activeIndex == 2 || swiper.activeIndex == 5 || swiper.activeIndex == 8 || swiper.activeIndex == 11 || swiper.activeIndex == 14){
//		    	cData = setTimeout(function(){
//		   			cData2 = setInterval(function(){
//		   				$(".upP>span").eq(cIndex).css("opacity","1");
//		   				$(".upP6>span").eq(cIndex-80).css("opacity","1");
//		   				$(".upP2>span").eq(cIndex).css("opacity","1");
//		   				$(".upP3>span").eq(cIndex).css("opacity","1");
//		   				$(".upP4>span").eq(cIndex).css("opacity","1");
//		   				$(".upP5>span").eq(cIndex).css("opacity","1");
//		   				$(".swiper-wrapper>div:nth-of-type(15)>div:last-child p>span").eq(cIndex).css("opacity","1");
//		   				cIndex ++;
//		   				if(cIndex > 100){
//		   					cIndex = 0;
//		   					clearInterval(cData2);
//		   					clearTimeout(cData);
//		   				}
//		   			},65);
//		   		},4000);
//		    }else{
//		    	cIndex = 0;
//		   		clearInterval(cData2);
//		   		clearTimeout(cData);
//		   		$(".upP>span").css("opacity","0");
//		   		$(".upP2>span").css("opacity","0");
//		   		$(".upP3>span").css("opacity","0");
//		   		$(".upP4>span").css("opacity","0");
//		   		$(".upP5>span").css("opacity","0");
//		    }
		    
		    
		} 
    });
	
}
