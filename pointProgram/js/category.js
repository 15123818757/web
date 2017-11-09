window.onload = function(){
	var scrWid = document.body.clientWidth;
	$("#back").click(function(){
		history.back();
	});
	
	$(".header img").eq(0).css("margin-top",(48-$(".header img").eq(0).height())/2+"px");	
	$(".header img").eq(1).css("margin-top",(48-$(".header img").eq(1).height())/2+"px");
	$(".evaluation>a").css("top",($(".evaluation").outerHeight()-$(".evaluation>a").height())/2+"px");
	$(".evaluation>a:nth-of-type(2)").css("top",($(".evaluation").outerHeight()-$(".evaluation>a:nth-of-type(2)").height())/2+"px");
	$("topNav span").width($("topNav a").width())
//	var left_span = $(".topNav a").eq(0).offset().left;
//	var right_span = $(".topNav label").eq(0).offset().left;
//	$(".topNav span").eq(0).css("left",left_span+scrWid*0.03+"px");	
//	$(".topNav span").eq(1).css("left",right_span+scrWid*0.03+"px");	
	
	//  点击选项卡事件
	$(".topNav a").click(function(){
			//$(".topNav span").eq(1).css("left",$("topNav a").eq(index).offset().left+scrWid*0.03+"px");
		$(this).addClass("activeFont").siblings().removeClass("activeFont");
	});
	
	$(".topNav label").click(function(){
		$(this).addClass("activeFont").siblings().removeClass("activeFont");
	});
	
	
	
	$(".searchBox div").eq(1).height($(".searchBox").height()-$(".searchBox div").eq(0).height());
	//  点击搜索图片
	$("#search").click(function(){
		$(".searchBox").css("top","0");
	});
	
	$(".searchBox div").eq(1).click(function(){
		$(".searchBox").css("top","-110%");
	})
	
	// 当前选显卡的下标
	var index = 0;
	var carNum1 = 9;
	var carNum2 = 9;
	var carNum3 = 9;
	var carNum4 = 9;
	
	$(".evaluation").css("display","none");
	// 显示前10条
	
	for(var i=0;i<4;i++){
		for(var j=0;j<10;j++){
			$(".contentBox>div").eq(i).children("div").eq(j).css("display","block");	
		}
	}
	
	console.log(index);
	$(document).scroll(function(){
		if($(window).height()+$(document).scrollTop() >= $("body").height()){
			console.log("加载更多 加载5条");
			switch(index){
				case 0:
					carNum1 += 5;
					for(var a=0;a<carNum1;a++){
						$(".contentBox>div").eq(0).children("div").eq(a).css("display","block");	
					}
					break;
				case 1:
					carNum2 += 5;
					for(var a=0;a<carNum2;a++){
						$(".contentBox>div").eq(1).children("div").eq(a).css("display","block");	
					}
					break;
				case 2:
					carNum3 += 5;
					for(var a=0;a<carNum3;a++){
						$(".contentBox>div").eq(2).children("div").eq(a).css("display","block");	
					}
					break;
				case 3:
					carNum4 += 5;
					for(var a=0;a<carNum4;a++){
						$(".contentBox>div").eq(3).children("div").eq(a).css("display","block");	
					}
					break;
			}
		}
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
			$(".contentBox>div>div>a").click(function(){
				$("#moBoxWx").css("display","block");
				setTimeout(function(){
					$("#moBoxWx>div").css("bottom","0");
				},100);
			});
		}else{
			//  点击点点
			$(".contentBox>div>div>a").click(function(){
				$("#moBox").css("display","block");
				setTimeout(function(){
					$("#moBox>div").css("bottom","0");
				},100);
			});
		}
    }
	isWeiXin();
	
	
}
