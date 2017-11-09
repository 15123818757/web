window.onload = function(){
	var audio_ = document.getElementById('audio');
//
//  document.addEventListener("WeixinJSBridgeReady", function () {
//          audio_.play();
//  }, false);
//	
	
	//  如果暂停
	if(audio_.paused){
		$("#music").removeClass("music");
		$("#music").attr("src","img/c_music.png");
	}else{
		$("#music").addClass("music");
		$("#music").attr("src","img/music.png");
	}
	
	$("#music").click(function(){
		if(audio_.paused){
			$("#music").addClass("music");
			$("#music").attr("src","img/music.png");
			audio_.play();
		}else{
			$("#music").removeClass("music");
			$("#music").attr("src","img/c_music.png");
			audio_.pause();			
		}
	});
	
	$(".logo").height($(".logo img").eq(0).height());
	
	
	
	var index = 0;
	var indexData = setInterval(function(){
		if(index == 0) {
			$(".logo").eq(0).children("img").eq(index).addClass("logo1");
			//$(".logo img").eq(index).addClass("logo1");
		} else if(index == 1) {
			$(".logo").eq(0).children("img").eq(index).addClass("logo2");
			//$(".logo img").eq(index).addClass("logo2");
		} else if(index == 2) {
			$(".logo").eq(0).children("img").eq(index).addClass("logo3");
			//$(".logo img").eq(index).addClass("logo3");
		} else if(index > 9){
			console.log(index);
			$(".jump").eq(0).children().eq(index - 9).addClass("cc");
		}
		index ++;
		if(index == 18){
			index = 0;
			clearInterval(indexData);
		}
	},100);

	var index1 = 0;
	var indexData1 = setInterval(function(){
		if(index1 == 0) {
			$(".logo").eq(1).children("img").eq(index1).addClass("logo1");
		} else if(index1 == 1) {
			$(".logo").eq(1).children("img").eq(index1).addClass("logo2");
		} else if(index1 == 2) {
			$(".logo").eq(1).children("img").eq(index1).addClass("logo3");
		} else {
			$(".jump").eq(1).children().eq(index1 - 3).addClass("cc");
		}
		index1 ++;
		if(index1 == 19){
			index1 = 0;
			clearInterval(indexData1);
		}
	},100);

	clearInterval(indexData);
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1, //可见的div   相当于设置div的宽度
		loop:true,
		speed:800,
		effect : 'coverflow',
		direction: 'vertical', // 纵向
		spaceBetween: 0, // 每个div之间的间距
		freeMode: false, //  是否可以自由的停在任何位置 
		onSlideChangeEnd: function(swiper) {
			console.log(swiper.activeIndex); // 当前页数
			if(swiper.activeIndex == 1) {
				index = 0;
				indexData = setInterval(function(){
					if(index == 0) {
						$(".logo").eq(0).children("img").eq(index).addClass("logo1");
						//$(".logo img").eq(index).addClass("logo1");
					} else if(index == 1) {
						$(".logo").eq(0).children("img").eq(index).addClass("logo2");
						//$(".logo img").eq(index).addClass("logo2");
					} else if(index == 2) {
						$(".logo").eq(0).children("img").eq(index).addClass("logo3");
						//$(".logo img").eq(index).addClass("logo3");
					} else if(index > 9){
						$(".jump").eq(0).children().eq(index - 10).addClass("cc");
					}
					index ++;
					if(index == 20){
						index = 0;
						clearInterval(indexData);
					}
				},100);
				$("#next img").attr("src", "img/next.png");
				$(".bgImg1").removeClass("activeBanImg");
				$(".bannerContent p").removeClass("logo2 logo3 logo4");
			} else {
				index = 0;
				clearInterval(indexData);
				//$(".logo img").removeClass("logo1 logo2 logo3");
				$(".logo").eq(0).children("img").removeClass("logo1 logo2 logo3");
				$(".logo").eq(1).children("img").removeClass("logo1 logo2 logo3");
				$(".jump").eq(0).children().removeClass("cc");
				$(".jump").eq(1).children().removeClass("cc");
				$(".swiper-container").css("background","white");
				$(".bgImg1").removeClass("activeBanImg");
				$(".bgImg2").removeClass("activeBanImg");
				$(".bgImg3").removeClass("activeBanImg");
				$(".bannerContent p").removeClass("logo2 logo3 logo4");
			}
			if(swiper.activeIndex == 2){
				$("#next img").attr("src", "img/next2.png");
				$(".bgImg1").addClass("activeBanImg");		
				$(".bgImg1").siblings().children("p").eq(0).addClass("logo2");
				$(".bgImg1").siblings().children("p").eq(1).addClass("logo3");
				$(".bgImg1").siblings().children("p").eq(2).addClass("logo4");
			}
			if(swiper.activeIndex == 3){
				$("#next img").attr("src", "img/next2.png");
				$(".bgImg2").addClass("activeBanImg");		
				$(".bgImg2").siblings().children("p").eq(0).addClass("logo2");
				$(".bgImg2").siblings().children("p").eq(1).addClass("logo3");
				$(".bgImg2").siblings().children("p").eq(2).addClass("logo4");
			}
			if(swiper.activeIndex == 4 || swiper.activeIndex == 0 ){
				$("#next img").attr("src", "img/next2.png");
				$(".bgImg3").addClass("activeBanImg");		
				$(".bgImg3").siblings().children("p").eq(0).addClass("logo2");
				$(".bgImg3").siblings().children("p").eq(1).addClass("logo3");
				$(".bgImg3").eq(1).siblings().children("p").eq(0).addClass("logo2");
				$(".bgImg3").eq(1).siblings().children("p").eq(1).addClass("logo3");
			}
			if(swiper.activeIndex == 5){
				$("#next img").attr("src", "img/next.png");
				$(".swiper-container").css("background","#231f20");
				index1 = 0;
				indexData1 = setInterval(function(){
					if(index1 == 0) {
						$(".logo").eq(1).children("img").eq(index1).addClass("logo1");
					} else if(index1 == 1) {
						$(".logo").eq(1).children("img").eq(index1).addClass("logo2");
					} else if(index1 == 2) {
						$(".logo").eq(1).children("img").eq(index1).addClass("logo3");
					} else if(index1 > 9){
						$(".jump").eq(1).children().eq(index1 - 10).addClass("cc");
					}
					index1 ++;
					if(index1 == 30){
						index1 = 0;
						clearInterval(indexData1);
					}
				},100);
			}
		}
	});
	
	
	
	    
}
