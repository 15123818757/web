window.onload = function(){
	$(".logo").height($(".logo img").eq(0).height());
	
	var audio_ = document.getElementById('audio');
	
	
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
	
	
	
	var cData;
	var cData2;
	var cIndex = 0;
	
	var last_Index = 0;
	var last_Data;
	var last_Data2;
	
	var last_Index_2 = 0;
	var last_Data_2;
	var last_Data2_2;
	
	var mySwiper = new Swiper('.swiper-container', {
		loop : true,
		effect : 'coverflow',
		direction: 'vertical', // 纵向
		speed:1000,  // div移动的速度
        slidesPerView: 1,    //可见的div   相当于设置div的宽度
        spaceBetween: 0,  // 每个div之间的间距
        freeMode: false,  //  是否可以自由的停在任何位置 
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ // 当滑动的时候进行的函数
		    console.log(swiper.activeIndex); // 显示当前的页数
		   swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画 
		   if(swiper.activeIndex == 2){
		   		cData = setTimeout(function(){
		   			cData2 = setInterval(function(){
		   				$(".c_content>div").eq(cIndex).css("opacity","1");
		   				cIndex ++;
		   				if(cIndex > 4){
		   					cIndex = 0;
		   					clearInterval(cData2);
		   					clearTimeout(cData);
		   				}
		   			},500)
		   		},3000);
		   }else{
		   		cIndex = 0;
		   		clearInterval(cData2);
		   		clearTimeout(cData);
		   		$(".c_content>div").css("opacity","0");
		   }
		   
		   if(swiper.activeIndex == 0){
		   		last_Data = setTimeout(function(){
		   			last_Data2 = setInterval(function(){
		   				$(".goUp1").children().eq(last_Index).css("opacity","1");
		   				if(last_Index > 9){
		   					$(".goUp2").children().eq(last_Index-10).css("opacity","1");
		   				}
		   				last_Index ++;
		   				if(last_Index > 21){
		   					last_Index = 0;
		   					clearInterval(last_Data2);
		   					clearTimeout(last_Data);
		   				}
		   			},150)
		   		},3300);
		   }else{
		   		last_Index = 0;
		   		clearInterval(last_Data2);
		   		clearTimeout(last_Data);
		   		$(".goUp1").children().css("opacity","0");
		   		$(".goUp2").children().css("opacity","0");
		   }
		   
		   if(swiper.activeIndex == 4){
		   		last_Data_2 = setTimeout(function(){
		   			last_Data2_2 = setInterval(function(){
		   				$(".swiper-wrapper>div:nth-of-type(5)>div:nth-of-type(2)").children(".goUp1").children().eq(last_Index_2).css("opacity","1");
		   				if(last_Index_2 > 9){
		   					$(".swiper-wrapper>div:nth-of-type(5)>div:nth-of-type(2)").children(".goUp2").children().eq(last_Index_2-10).css("opacity","1");
		   				}
		   				last_Index_2 ++;
		   				if(last_Index_2 > 21){
		   					last_Index_2 = 0;
		   					clearInterval(last_Data2_2);
		   					clearTimeout(last_Data_2);
		   				}
		   			},150)
		   		},3300);
		   }else{
		   		last_Index_2 = 0;
		   		clearInterval(last_Data2_2);
		   		clearTimeout(last_Data_2);
		   		$(".swiper-wrapper>div:nth-of-type(5)>div:nth-of-type(2)").children(".goUp1").children().css("opacity","0");
		   		$(".swiper-wrapper>div:nth-of-type(5)>div:nth-of-type(2)").children(".goUp2").children().css("opacity","0");
		   }
		   
		   
		} 
    });
	
	
	
//		var time = "";
//		var nonc = "";
//		var sign = "";
//		var lt = location.href;
//		$.post("http://m.weiyunzuo.com/h5-programmer/Default.aspx", {
//			"Code": "1001",
//			"url": lt
//		}, function(data) {
//			var s = new Array();
//			s = data.split("=");
//			time = s[0];
//			nonc = s[1];
//			sign = s[2];
//		});
//		setTimeout(function() {
//			wx.config({
//				debug: false,
//				appId: 'wxe6410c68c43bed1d',
//				timestamp: time,
//				nonceStr: nonc,
//				signature: sign,
//				jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
//			});
//			wx.ready(function() {
//				wx.checkJsApi({
//					jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
//				});
//				wx.onMenuShareTimeline({
//					title: '程序猿的那些事儿',
//					link: 'http://m.weiyunzuo.com/h5-programmer/',
//					imgUrl: 'http://m.weiyunzuo.com/h5-programmer/img/head.gif',
//					success: function() {},
//					cancel: function() {}
//				});
//				wx.onMenuShareAppMessage({
//					title: '程序猿的那些事儿',
//					desc: '微运作倾情奉献',
//					link: 'http://m.weiyunzuo.com/h5-programmer/',
//					imgUrl: 'http://m.weiyunzuo.com/h5-programmer/img/head.gif',
//					type: '',
//					dataUrl: '',
//					success: function() {},
//					cancel: function() {}
//				});
//				wx.onMenuShareQQ({
//					title: '程序猿的那些事儿',
//					desc: '微运作倾情奉献',
//					link: 'http://m.weiyunzuo.com/h5-programmer/',
//					imgUrl: 'http://m.weiyunzuo.com/h5-programmer/img/head.gif',
//					success: function() {},
//					cancel: function() {}
//				});
//				wx.onMenuShareWeibo({
//					title: '程序猿的那些事儿',
//					desc: '微运作倾情奉献',
//					link: 'http://m.weiyunzuo.com/h5-programmer/',
//					imgUrl: 'http://m.weiyunzuo.com/h5-programmer/img/head.gif',
//					success: function() {},
//					cancel: function() {}
//				});
//				wx.onMenuShareQZone({
//					title: '程序猿的那些事儿',
//					desc: '微运作倾情奉献',
//					link: 'http://m.weiyunzuo.com/h5-programmer/',
//					imgUrl: 'http://m.weiyunzuo.com/h5-programmer/img/head.gif',
//					success: function() {},
//					cancel: function() {}
//				});
//			});
//		}, 1000);
}
