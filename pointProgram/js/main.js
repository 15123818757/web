window.onload = function(){
	var scrWid = document.body.clientWidth;
	$(".loginBox>div").css("left",(scrWid-$(".loginBox>div").width())/2.8+"px");
	$(".header img").eq(0).css("margin-top",(48-$(".header img").eq(0).height())/2+"px");	
	$(".header img").eq(1).css("margin-top",(48-$(".header img").eq(1).height())/2+"px");
	$(".navBox div").height($(".navBox div").width());
	$(".navBox div img").css("transform","translateY("+($(".navBox div").height()-$(".navBox div img").height())/2+"px)");
	$("footer>a>div").height($("footer>a>div").width()*0.9);
	$("footer>a>div img").css("transform","translateY("+($("footer>a>div").height()-$("footer>a>div img").height())/2+"px)");
	$("#hideDiv").height($("footer").height());
	$(".searchBox div").eq(1).height($(".searchBox").height()-$(".searchBox div").eq(0).height());
	
	
	
	//  点击底部导航 
	$("footer a").click(function(){
		var index = $(this).index();
		$("footer a").eq(0).children("div").children("img").attr("src","img/bImg1.png");
		$("footer a").eq(1).children("div").children("img").attr("src","img/bImg2.png");
		$("footer a").eq(2).children("div").children("img").attr("src","img/bImg3.png");
		$("footer a").eq(3).children("div").children("img").attr("src","img/bImg4.png");
		$("footer a").eq(4).children("div").children("img").attr("src","img/bImg5.png");
		$("footer p").removeClass("activeFont");	
		switch(index){
			case 0:
				$("footer a").eq(0).children("div").children("img").attr("src","img/bImgColor1.png");
				$("footer a").eq(0).children("p").addClass("activeFont");
				$("#shop").css("display","block");
				$("#article").css("display","none");
				break;
			case 1:
				$("footer a").eq(1).children("div").children("img").attr("src","img/bImgColor2.png");
				$("footer a").eq(1).children("p").addClass("activeFont");
				$("#shop").css("display","none");
				$("#article").css("display","block");
				break;
			case 2:
				$("footer a").eq(2).children("div").children("img").attr("src","img/bImgColor3.png");
				$("footer a").eq(2).children("p").addClass("activeFont");
				break;
			case 3:
				$("footer a").eq(3).children("div").children("img").attr("src","img/bImgColor4.png");
				$("footer a").eq(3).children("p").addClass("activeFont");
				break;
		}
	})
	
	
	
	//  点击搜索图片
	$("#search").click(function(){
		$(".searchBox").css("top","0");
	});
	
	$(".searchBox div").eq(1).click(function(){
		$(".searchBox").css("top","-110%");
	})

	//  文章导航切换
	$(".swiper-container_nav div div").click(function(){
		$(this).addClass("activeFont").siblings("div").removeClass("activeFont");
		var index = $(this).index();
		$(".conBox>div").eq(index).css("display","block").siblings("div").css("display","none");
	});
	
	//  文章页面显示前4条文章
	for(var i=0;i<4;i++){
		(function(i){
			for(var k=0;k<$('.conBox>div').length;k++){
				(function(k){
					$('.conBox>div').eq(k).children("a").eq(i).css("display","block");		
				})(k)
			}
		})(i)
	}
		
	$(".conBox>div>span").click(function(){
		var index = $(this).parent().index();
		//  总的文章数量
		var sumANum = $(this).siblings("a").length;
		//  已经显示出来的文章数量
		var showNum = 0;
		for(var i=0;i<sumANum;i++){
			(function(i){
				if($(".conBox>div").eq(index).children("a").eq(i).css("display") == "block"){
					showNum ++;					
				}
			})(i)
		}
		//  显示出后面4个文章
		showNum += 4;
		for(var j=0;j<showNum;j++){
			(function(j){
				$(".conBox>div").eq(index).children("a").eq(j).css("display","block");
			})(j)
		}
		if(showNum >= sumANum){
			$(this).children("label").html("没有更多的文章了");
		}
	});
	// PC端
	if(scrWid>640){
		$("body").css("min-width","1400px");
		$(".header").css("min-width","1400px");
		$(window).scroll(function(){
			if($(window).scrollTop() > 500){
				$(".goTop").css("opacity","1");
			}else{
				$(".goTop").css("opacity","0");
			}
		});
	}
	
	$("#goTop_pc").click(function(){
        $('body,html').animate({ scrollTop: 0 }, 500);
	});
	
	//  关闭登录界面
	$(".loginBox>div>span>span").click(function(){
		$(".loginBox").css("display","none");
	});
	//  打开登录页面
	$(".login").click(function(){
		$(".loginBox").css("display","block");
	});
	
	
}
