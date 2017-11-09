window.onload = function(){
	
	var audio_ = document.getElementById('audio');
	
	$(".roundList>div>span").width($(".roundList>div>span").height());
	$(".roundList>div>span").css("margin-top",($(".roundList>div").height()-$(".roundList>div>span").height())/2+"px");
	
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
	
	
	var dataT;
	var dataI;
	var index = 0;
	
	//  激活swiper
	var swiper = new Swiper('.swiper-container', {
		loop:true,
		direction: 'vertical', // 纵向
		effect : 'coverflow',
		speed:800,  // div移动的速度
        slidesPerView: 1,    //可见的div   相当于设置div的宽度
        spaceBetween: 0,  // 每个div之间的间距
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		},
		nextButton: '#next',
		prevButton: '#prev',
		onSlideChangeEnd: function(swiper){ 
		    console.log(swiper.activeIndex);
		    swiperAnimate(swiper); //初始化完成开始动画
		    if(swiper.activeIndex == 0 || swiper.activeIndex == 5){
		    	dataT = setTimeout(function(){
		    		dataI = setInterval(function(){
		    			$(".roundList").eq(0).children("div").eq(index).children("span").css("transform","scale(1) rotateZ(0deg)");
		    			$(".roundList").eq(1).children("div").eq(index).children("span").css("transform","scale(1) rotateZ(0deg)");
		    			index ++;
		    			if(index > 3){
		    				index = 0;
		    				clearTimeout(dataT);
		    				clearInterval(dataI);
		    			}
		    		},500)
		    	},2500)
		    }else{
		    	index = 0;
		    	clearTimeout(dataT);
		    	clearInterval(dataI);
		    	$(".roundList").eq(0).children("div").children("span").css("transform","scale(0) rotateZ(360deg)");
		    	$(".roundList").eq(1).children("div").children("span").css("transform","scale(0) rotateZ(360deg)");
		    }
		    
		}
    });
	
	
	
	$(".swiper_z>div>div:nth-of-type(1)>img").css("margin-top",(scrHei-$(".swiper_z>div>div:nth-of-type(1)>img").height())/2.8+"px");
	$(".swiper_z>div>div:nth-of-type(2)>img").css("margin-top",(scrHei-$(".swiper_z>div>div:nth-of-type(2)>img").height())/2.8+"px");
	$(".swiper_z>div>div:nth-of-type(3)>img").css("margin-top",(scrHei-$(".swiper_z>div>div:nth-of-type(3)>img").height())/2.8+"px");
	$(".swiper_z>div>div:nth-of-type(4)>img").css("margin-top",(scrHei-$(".swiper_z>div>div:nth-of-type(4)>img").height())/2.8+"px");
	
	$(".swiper_g1>div>div:nth-of-type(1)>img").css("margin-top",(scrHei-$(".swiper_g1>div>div:nth-of-type(1)>img").height())/2+"px");
	$(".swiper_g1>div>div:nth-of-type(2)>img").css("margin-top",(scrHei-$(".swiper_g1>div>div:nth-of-type(1)>img").height())/2+"px");
	$(".swiper_g1>div>div:nth-of-type(3)>img").css("margin-top",(scrHei-$(".swiper_g1>div>div:nth-of-type(1)>img").height())/2+"px");
	
	$(".swiper_g2>div>div:nth-of-type(1)>img").css("margin-top",(scrHei-$(".swiper_g2>div>div:nth-of-type(1)>img").height())/2+"px");
	$(".swiper_g2>div>div:nth-of-type(2)>img").css("margin-top",(scrHei-$(".swiper_g2>div>div:nth-of-type(1)>img").height())/2+"px");
	$(".swiper_g2>div>div:nth-of-type(3)>img").css("margin-top",(scrHei-$(".swiper_g2>div>div:nth-of-type(1)>img").height())/2+"px");
	
	$(".swiper_s1>div>div:nth-of-type(1)>img").css("margin-top",(scrHei-$(".swiper_s1>div>div:nth-of-type(1)>img").height())/2+"px");
	$(".swiper_s1>div>div:nth-of-type(2)>img").css("margin-top",(scrHei-$(".swiper_s1>div>div:nth-of-type(1)>img").height())/2+"px");
	
	$(".swiper_s2>div>div:nth-of-type(1)>img").css("margin-top",(scrHei-$(".swiper_s2>div>div:nth-of-type(1)>img").height())/2+"px");
	$(".swiper_s2>div>div:nth-of-type(2)>img").css("margin-top",(scrHei-$(".swiper_s2>div>div:nth-of-type(1)>img").height())/2+"px");
	$(".swiper_s2>div>div:nth-of-type(3)>img").css("margin-top",(scrHei-$(".swiper_s2>div>div:nth-of-type(1)>img").height())/2+"px");
	
	$(".swiper_s3>div>div:nth-of-type(1)>img").css("margin-top",(scrHei-$(".swiper_s3>div>div:nth-of-type(1)>img").height())/2+"px");
	$(".swiper_s3>div>div:nth-of-type(2)>img").css("margin-top",(scrHei-$(".swiper_s3>div>div:nth-of-type(1)>img").height())/2+"px");
	$(".swiper_s3>div>div:nth-of-type(3)>img").css("margin-top",(scrHei-$(".swiper_s3>div>div:nth-of-type(1)>img").height())/2+"px");
	//  激活工厂掠影swiper1
	var swiper_g1 = new Swiper('.swiper_g1', {
        slidesPerView: 1,    //可见的div   相当于设置div的宽度
    });
	
	//  点击不同的div显示不同的工厂掠影大图
	$(".showSwiper_g1>div").click(function(){
		swiper_g1.slideTo($(this).index(), 500, false);
		$(".swiper_g1").css({
			"visibility":"visible",
			"opacity":"1"
		});
	});
	$("#close_g1").click(function(){
		$(".swiper_g1").css({
			"visibility":"hidden",
			"opacity":"0"
		});
	})
	
	
	//  激活工厂掠影swiper2
	var swiper_g2 = new Swiper('.swiper_g2', {
        slidesPerView: 1,    //可见的div   相当于设置div的宽度
    });
	//  点击不同的div显示不同的工厂掠影大图
	$(".showSwiper_g2>div").click(function(){
		swiper_g2.slideTo($(this).index(), 500, false);
		$(".swiper_g2").css({
			"visibility":"visible",
			"opacity":"1"
		});
	});
	$("#close_g2").click(function(){
		$(".swiper_g2").css({
			"visibility":"hidden",
			"opacity":"0"
		});
	});
	
	//  激活工厂掠影swiper3
	var swiper_s3 = new Swiper('.swiper_s3', {
        slidesPerView: 1,    //可见的div   相当于设置div的宽度
    });
	//  点击不同的div显示不同的工厂掠影大图
	$(".showSwiper_s3>div").click(function(){
		swiper_s3.slideTo($(this).index(), 500, false);
		$(".swiper_s3").css({
			"visibility":"visible",
			"opacity":"1"
		});
	});
	$("#close_s3").click(function(){
		$(".swiper_s3").css({
			"visibility":"hidden",
			"opacity":"0"
		});
	});
	
	
	
	//  激活设备展示swiper1
	var swiper_s1 = new Swiper('.swiper_s1', {
        slidesPerView: 1,    //可见的div   相当于设置div的宽度
    });
	$(".showSwiper_s1>div").click(function(){
		swiper_s1.slideTo($(this).index(), 500, false);
		$(".swiper_s1").css({
			"visibility":"visible",
			"opacity":"1"
		});
	});
	$("#close_s1").click(function(){
		$(".swiper_s1").css({
			"visibility":"hidden",
			"opacity":"0"
		});
	})
	
	//  激活设备展示swiper2
	var swiper_s2 = new Swiper('.swiper_s2', {
        slidesPerView: 1,    //可见的div   相当于设置div的宽度
    });
	$(".showSwiper_s2>div").click(function(){
		swiper_s2.slideTo($(this).index(), 500, false);
		$(".swiper_s2").css({
			"visibility":"visible",
			"opacity":"1"
		});
	});
	$("#close_s2").click(function(){
		$(".swiper_s2").css({
			"visibility":"hidden",
			"opacity":"0"
		});
	})
	
	//  激活大证书swiper
	var swiper_z = new Swiper('.swiper_z', {
        slidesPerView: 1,    //可见的div   相当于设置div的宽度
        spaceBetween: 0,  // 每个div之间的间距
    });
	//  点击不同的证书显示对应的证书
	$(".roundList>div").click(function(){
		//  跳转到对应的banner
		swiper_z.slideTo($(this).index(), 500, false);
		$(".swiper_z").css({
			"visibility":"visible",
			"opacity":"1"
		});
	})
	//  关闭大证书按钮
	$("#close_zz").click(function(){
		$(".swiper_z").css({
			"visibility":"hidden",
			"opacity":"0"
		});
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
