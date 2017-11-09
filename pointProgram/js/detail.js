	$(".header img").eq(0).css("margin-top",(48-$(".header img").eq(0).height())/2+"px");	
	$(".header img").eq(1).css("margin-top",(48-$(".header img").eq(1).height())/2+"px");
	$(".evaluation>a").css("top",($(".evaluation").height()-$(".evaluation>a").height())/1.2+"px");
	
	$(".searchBox div").eq(1).height($(".searchBox").height()-$(".searchBox div").eq(0).height());
	
	$(".hidePub").height($(".publish").height());
	//  评论点击星星
	$(".clickStart img").click(function(e){
		e.stopPropagation();
		var index = $(this).index();
		turnStart(index);
	});
	
	
	$(".pc_formDetail img").click(function(e){
		e.stopPropagation();
		var index = $(this).index();
		turnStart(index);
	});
	
	
	
	//  pc 改变为实星
	var turnStart = function(index){
		$(".clickStart img").attr("src","/img/detail/b_start2.png");
		$(".pc_formDetail img").attr("src","/img/detail/b_start2.png");
		for(var i=0;i<=index;i++){
			(function(i){
				$(".clickStart img").eq(i).attr("src","/img/detail/b_start1.png");
				$(".pc_formDetail img").eq(i).attr("src","/img/detail/b_start1.png");
			})(i)
		}
	}
	
	//  滚动事件
//	$(window).scroll(function() {
//		var scrollY = window.scrollY; 
//		if(scrollY > 50){
//			$(".header").css({
//				"border-bottom":"1px solid #e5e5e5",
//				"background":"white"
//			});
//			$(".header a").eq(0).children("img").attr("src","img/detail/back2.png");
//			$(".header a").eq(1).children("img").attr("src","img/search.png");
//		}else{
//			$(".header").css({
//				"border":"none",
//				"background":"none"
//			});
//			$(".header a").eq(0).children("img").attr("src","img/detail/back.png");
//			$(".header a").eq(1).children("img").attr("src","img/detail/d_search.png");
//		}
//	  	
//	});
	
	$("#back").click(function(){
		history.back();
	});
	
	//  只显示4个评论
	var comLength = $(".com_box").length;
	//  当前显示评论的条数
	var currentNum = 4;
	if(comLength > 4){
		$(".comment>div").eq(0).css("display","block");
		$(".comment>div").eq(1).css("display","block");
		$(".comment>div").eq(2).css("display","block");
		$(".comment>div").eq(3).css("display","block");
		for(var i=4;i<comLength;i++){
			(function(i){
				$(".com_box").eq(i).css("display","none");
			})(i)
		}
	}else{
		$(".com_box").css("display","block");
		$("#more").html("没有更多的评论了");
		
	}
	$(".com_box>div:nth-of-type(2)").css("margin-left",(46)+"px");
	
	
	// 点击加载更多
	$("#more").click(function(){
		currentNum += 10;
		if( currentNum > comLength){
			$(".com_box").css("display","block");
			$("#more").html("没有更多的评论了");		
		}else{
			for(var i=0;i<currentNum+10;i++){
				(function(i){
					$(".com_box").eq(i).css("display","block");
				})(i)
			}
		}
	});
	
	//  点击评论
	$(".publish").click(function(e){
		e.stopPropagation();
		$(".pubBox").css("transform","translateY(0)");
	});
	
	//  提交
	$("#btn").click(function(e){
		e.stopPropagation();
		$(".pubBox").css("transform","translateY(100%)");
		$("textarea").val("");
		$(".clickStart img").attr("src","img/detail/b_start2.png");
	});
	
	//  点击搜索图标
	$("#search").click(function(e){
		e.stopPropagation();
		$(".searchBox").css("top","0");
	});
	
	$(".searchBox div").eq(1).click(function(e){
		e.stopPropagation();
		$(".searchBox").css("top","-110%");
	});
	
	//  点击banner出现大的banner
	$(".swiper-container1").click(function(e){
		e.stopPropagation();
		$(".bigBan_mobile").css({
			"opacity":"1",
			"visibility":"visible"
		});
	});
	
	
	//  点击pcbannner出现放大的banner
	$(".swiper-container_pc img").click(function(e){
		e.stopPropagation();
		$(".bigBanPc").css({
			"opacity":"1",
			"visibility":"visible"
		});
	});
	//  点击大banner隐藏
	$(".swiper-container2>.swiper-wrapper>a").click(function(e){
		e.stopPropagation();
		$(".bigBanner").css({
			"opacity":"0",
			"visibility":"hidden"
		})
	});
	
	$(".pubBox").click(function(e){
		e.stopPropagation();
	})
	
	
	$("body").click(function(){
		$(".pubBox").css("transform","translateY(100%)");
		$("textarea").val("");
		$(".clickStart img").attr("src","img/detail/b_start2.png");
	});
	
	
	
	
	
	
	
	
	// 隐藏盒子
	$("#moBox").click(function(){
		$("#moBox>div").css("bottom","-100%");
		setTimeout(function(){
			$("#moBox").css("display","none");
		},300);
	});
	
	$("#moBoxWx").click(function(){
		$("#moBoxWx>div").css("bottom","-100%");
		setTimeout(function(){
			$("#moBoxWx").css("display","none");
		},300);
	});
		
	//  判断是否是微信浏览器
	function isWeiXin(){
        var ua = window.navigator.userAgent.toLowerCase();
		if(ua.match('micromessenger') == 'micromessenger'){
			//  在微信中打开
			$("#click").click(function(){
				$("#moBoxWx").css("display","block");
				setTimeout(function(){
					$("#moBoxWx>div").css("bottom","0");
				},100);
			});
		}else{
			//  点击点点
			$("#click").click(function(){
				$("#moBox").css("display","block");
				setTimeout(function(){
					$("#moBox>div").css("bottom","0");
				},100);
			});
		}
    }
	isWeiXin();
	
	
	//  返回
	$(".d_logo>img:nth-of-type(1)").click(function(){
		history.back();
	});
	
	
	
