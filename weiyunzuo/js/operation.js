	var liList = document.querySelectorAll(".fixed_r li");
	var indexUp = 0;
	var index = 0;//当前页数
	//设置左边导航栏的点击事件   left
	for(var i = 0; i < liList.length - 1; i++) {
		(function(i) {
			liList[i].onclick = function() {
				for(var j = 0; j < liList.length - 1; j++) {
					(function(j) {
						liList[j].className = "";
					})(j)
				}
				liList[i].className = "on";
				$(".numBox").css("top", -(i * 100) + "%");
				index = i;
				//用来判断是否点击的是当前页面
				indexUp = i;
			}
		})(i)
	}

	var scrHei = document.body.clientHeight;
	var scrWid = document.body.clientWidth;
	
	//让左边的导航居中
	$(".fixed_r").css("top",(scrHei-$(".fixed_r").height())/2+"px");
	
//	alert(scrWid+"   "+scrHei);
	var bannerData;
	$("input").focus(function() {
		clearInterval(bannerData);
	});
	$("input").blur(function() {
		bannerData = setInterval(function() {
//			bannerNowPage++;
//			if(bannerNowPage == 3) {
//				bannerNowPage = 0;
//			}
//			if((bannerUpPage != 0) && (bannerNowPage == 0)) {
//				goInit();
//				banAnimate1();
//			}
//			if((bannerUpPage != 1) && (bannerNowPage == 1)) {
//				goInit();
//				banAnimate2();
//			}
//			if((bannerUpPage != 2) && (bannerNowPage == 2)) {
//				goInit();
//				banAnimate3();
//			}
//			bannerUpPage++;
//			if(bannerUpPage == 3) {
//				bannerUpPage = 0;
//			}
//
//			for(var j = 0; j < bannerSpan.length; j++) {
//				(function(j) {
//					bannerSpan[j].className = "";
//				})(j)
//			}
//			bannerSpan[bannerNowPage].className = "activeBannerIndex";
//			switch(bannerNowPage) {
//				case 0:
//					bannerList[0].style.left = "0";
//					bannerList[1].style.left = "100%";
//					bannerList[2].style.left = "200%";
//					break;
//				case 1:
//					bannerList[0].style.left = "-100%";
//					bannerList[1].style.left = "0";
//					bannerList[2].style.left = "100%";
//					break;
//				case 2:
//					bannerList[0].style.left = "-200%";
//					bannerList[1].style.left = "-100%";
//					bannerList[2].style.left = "0";
//					break;
//			}
		},5000);
	});
	/****************************************************  主体内容  ********************************************************************/
	$(".content").eq(1).css("left", (document.querySelector(".innerBox").clientWidth - 1250) / 2 + "px");
	$(".content").eq(1).css("height","600px");
	//这是num的高度
	$(".num").height(scrHei);
	//设置滚动事件    每隔2秒可以滚动一次
	
	var flag = true;
	var bodyDate;
	//监听鼠标滚动事件  scroll
	$('body').mousewheel(function(evt, scrY) {
		if(window.console && console.log) {
			if(flag) {
				if(scrY == -1) { //向下
					index++;
				} else {
					index--;
				}
				if(index == -1) {
					index = 0;
					flag = true;
					clearTimeout(bodyDate);
				} else if(index == $(".num").length) {
					index = $(".num").length - 1;
					flag = true;
					clearTimeout(bodyDate);
				} else {
					//滑动
					$(".numBox").css("top", -(index * 100) + "%");
					//设置左边按钮的对应样式
					$(".fixed_r li").eq(index).addClass("on").siblings("li").removeClass("on");
					flag = false;
					bodyDate = setTimeout(function() {
						flag = true;
						console.log("可以滑动了");
					}, 2000);
				}
			}
		}
	});
	/****************************************************  banner  ********************************************************************/
	//设置banner下标的点击事件
	var bannerList = document.querySelectorAll(".banner");
	var bannerSpan = document.querySelectorAll(".bannerIndex span");
	var bannerUpPage = 0;
	var bannerNowPage = 0;
	for(var i = 0; i < bannerSpan.length; i++) {
		(function(i) {
			bannerSpan[i].onclick = function() {
				clearInterval(bannerData);
				bannerNowPage = i;
				if((bannerUpPage != 0) && (bannerNowPage == 0)) {
					goInit();
					banAnimate1();
				}
				if((bannerUpPage != 1) && (bannerNowPage == 1)) {
					goInit();
					banAnimate2();
				}
				if((bannerUpPage != 2) && (bannerNowPage == 2)) {
					goInit();
					banAnimate3();
				}
				bannerUpPage = i;
				for(var j = 0; j < bannerSpan.length; j++) {
					(function(j) {
						bannerSpan[j].className = "";
					})(j)
				}
				bannerSpan[i].className = "activeBannerIndex";
				switch(i) {
					case 0:
						bannerList[0].style.left = "0";
						bannerList[1].style.left = "100%";
						bannerList[2].style.left = "200%";
						break;
					case 1:
						bannerList[0].style.left = "-100%";
						bannerList[1].style.left = "0";
						bannerList[2].style.left = "100%";
						break;
					case 2:
						bannerList[0].style.left = "-200%";
						bannerList[1].style.left = "-100%";
						bannerList[2].style.left = "0";
						break;
				}
				bannerData = setInterval(function() {
//					bannerNowPage++;
//					if(bannerNowPage == 3) {
//						bannerNowPage = 0;
//					}
//					if((bannerUpPage != 0) && (bannerNowPage == 0)) {
//						goInit();
//						banAnimate1();
//					}
//					if((bannerUpPage != 1) && (bannerNowPage == 1)) {
//						goInit();
//						banAnimate2();
//					}
//					if((bannerUpPage != 2) && (bannerNowPage == 2)) {
//						goInit();
//						banAnimate3();
//					}
//					bannerUpPage++;
//					if(bannerUpPage == 3) {
//						bannerUpPage = 0;
//					}
//
//					for(var j = 0; j < bannerSpan.length; j++) {
//						(function(j) {
//							bannerSpan[j].className = "";
//						})(j)
//					}
//					bannerSpan[bannerNowPage].className = "activeBannerIndex";
//					switch(bannerNowPage) {
//						case 0:
//							bannerList[0].style.left = "0";
//							bannerList[1].style.left = "100%";
//							bannerList[2].style.left = "200%";
//							break;
//						case 1:
//							bannerList[0].style.left = "-100%";
//							bannerList[1].style.left = "0";
//							bannerList[2].style.left = "100%";
//							break;
//						case 2:
//							bannerList[0].style.left = "-200%";
//							bannerList[1].style.left = "-100%";
//							bannerList[2].style.left = "0";
//							break;
//					}
				}, 4000);

			}
		})(i)
	}

	//运营5大难题     浮动效果
	$(".singleBox").mouseover(function() {
		$(this).children("img").attr("src", "images/operation/2/red_icon" + ($(this).index() + 1) + ".png");
	})
	$(".singleBox").mouseout(function() {
		$(this).children("img").attr("src", "images/operation/2/gray_icon" + ($(this).index() + 1) + ".png");
	})

	//解决方案   浮动效果
	$(".solveBox").mouseover(function() {
		$(this).children("span").children("img").attr("src", "images/operation/3/redImg" + ($(this).index()) + ".png");
	})
	$(".solveBox").mouseout(function() {
		$(this).children("span").children("img").attr("src", "images/operation/3/grayImg" + ($(this).index()) + ".png");
	})

	var rIndex;
	var arrImg = [];
	var imgList = document.querySelectorAll(".rightInBox img");
	for(var i=0;i<imgList.length;i++){
		(function(i){
			arrImg.push(imgList[i].getAttribute("src"));
		})(i)
	}
	//经典案例   浮动效果
	$(".rightInBox div").mouseover(function() {
		rIndex = $(this).index();
		$(this).children("img").attr("src", $(".hiddenEr").children("img").eq(rIndex).attr("src"));
		$(".left img").eq(rIndex).css("opacity", "1").siblings().css("opacity", "0");
	});
	$(".rightInBox div").mouseout(function() {
		$(this).children("img").attr("src", arrImg[$(this).index()]);
	});

	

	//向下
	$("#goDown").click(function() {
		if($(".rightInBox").height()-20 <= $(".rightOutBox").height()){
			$(".rightInBox").css("top", "0px");	
		}else{
			$(".rightInBox").css("top", "-370px");	
		}
	});
	//向上
	$("#goUp").click(function() {
		$(".rightInBox").css("top", "0px");
	});

	/***********************************     banner动画     ***********************************************/
	//banner1动画
	function banAnimate1() {
		setTimeout(function() {
			$(".bannerBg").css("opacity", "1");
		}, 100);
		setTimeout(function() {
			$(".bannerP").css("opacity", "1");
		}, 500);
		setTimeout(function() {
			$(".bannerImg1").css("transform", "scale(1.2)");
		}, 1000);
		setTimeout(function() {
			$(".bannerImg1").css("transform", "scale(0.7)");
		}, 1300);
		setTimeout(function() {
			$(".bannerImg1").css("transform", "scale(1)");
		}, 1500);
	}
	banAnimate1();
	//banner2动画
	function banAnimate2() {
		setTimeout(function() {
			$(".bannerImg2").eq(0).css({
				"opacity": "1",
				"left": "15%"
			});
		}, 100);
		setTimeout(function() {
			$(".bannerImg2").eq(1).css({
				"opacity": "1",
				"left": "27%"
			});
		}, 200);
		setTimeout(function() {
			$(".bannerImg2").eq(2).css({
				"opacity": "1",
				"left": "41%"
			});
		}, 300);
		setTimeout(function() {
			$(".bannerImg2").eq(3).css({
				"opacity": "1",
				"left": "20.5%"
			});
		}, 400);
		setTimeout(function() {
			$(".bannerImg2").eq(4).css({
				"opacity": "1",
				"left": "49%"
			});
		}, 500);
		setTimeout(function() {
			$(".bannerImg2").eq(5).css({
				"opacity": "1",
				"left": "56%"
			});
		}, 600);
		setTimeout(function() {
			$(".bannerImg2").eq(6).css({
				"opacity": "1",
				"left": "70%"
			});
		}, 700);
		setTimeout(function() {
			$(".bannerImg2").eq(7).css({
				"opacity": "1",
				"left": "83.7%"
			});
		}, 800);
		setTimeout(function() {
			$(".bannerImg2").eq(8).css({
				"opacity": "1",
				"left": "83.7%"
			});
		}, 900);
		setTimeout(function() {
			$(".bannerImg2").eq(9).css({
				"opacity": "1",
				"left": "76%"
			});
		}, 1000);
		setTimeout(function() {
			$(".banner:nth-of-type(2) img:nth-of-type(1)").css("opacity", "1");
		}, 1100);
		setTimeout(function() {
			$(".bannerP1").css({
				"opacity": 1,
				"left": "20.5%"
			});
		}, 1200);
	}

	//banner3动画
	function banAnimate3() {
		setTimeout(function() {
			$(".banner:nth-of-type(3)>div>img:nth-of-type(1)").css("bottom", "9%");
		}, 100);
		setTimeout(function() {
			$(".outForm").css("transform", "scale(1) rotateZ(0deg)");
		}, 500);
		setTimeout(function() {
			$(".bannerP2").css("opacity", "1");
		}, 1200);
	}

	//初始化动画的元素
	function goInit() {
		//banner1
		$(".bannerImg1").css("transform", "scale(0)");
		$(".bannerP").css("opacity", "0");
		$(".bannerBg").css("opacity", "0");
		//banner2
		$(".bannerImg2").css({
			"left": "-10%",
			"opacity": "0"
		});
		$(".banner:nth-of-type(2) img:nth-of-type(1)").css("opacity", "0");
		$(".bannerP1").css({
			"left": "-50%",
			"opacity": 0
		});
		//banner3
		$(".outForm").css("transform", "scale(0) rotateZ(720deg)");
		$(".banner:nth-of-type(3)>img:nth-of-type(1)").css("bottom", "-20%");
		$(".bannerP2").css("opacity", "0");
	}

	//banner定时器
	bannerData = setInterval(function() {
//		bannerNowPage++;
//		if(bannerNowPage == 3) {
//			bannerNowPage = 0;
//		}
//		if((bannerUpPage != 0) && (bannerNowPage == 0)) {
//			goInit();
//			banAnimate1();
//		}
//		if((bannerUpPage != 1) && (bannerNowPage == 1)) {
//			goInit();
//			banAnimate2();
//		}
//		if((bannerUpPage != 2) && (bannerNowPage == 2)) {
//			goInit();
//			banAnimate3();
//		}
//		bannerUpPage++;
//		if(bannerUpPage == 3) {
//			bannerUpPage = 0;
//		}
//
//		for(var j = 0; j < bannerSpan.length; j++) {
//			(function(j) {
//				bannerSpan[j].className = "";
//			})(j)
//		}
//		bannerSpan[bannerNowPage].className = "activeBannerIndex";
//		switch(bannerNowPage) {
//			case 0:
//				bannerList[0].style.left = "0";
//				bannerList[1].style.left = "100%";
//				bannerList[2].style.left = "200%";
//				break;
//			case 1:
//				bannerList[0].style.left = "-100%";
//				bannerList[1].style.left = "0";
//				bannerList[2].style.left = "100%";
//				break;
//			case 2:
//				bannerList[0].style.left = "-200%";
//				bannerList[1].style.left = "-100%";
//				bannerList[2].style.left = "0";
//				break;
//		}
	}, 4000);
	





//当选中input标签的时候清除定时器
	$("input").focus(function(){
		clearInterval(bannerData);
	});
	$("textarea").focus(function(){
		clearInterval(bannerData);
		$(".banner").addClass("tranTop");
	});



if(scrHei <= 700){
		$(".Numl_Art p").css("margin","8px 0");
		$(".contentMun").css("margin-top","5px");
		$(".NumLeft_Text .NumL_Section").css("maring-top","10px");
		$(".NumContact_right .NumConR_article .NumR_a").css("margin-top","25px");
		$(".NumContact_right .NumConR_article").css("padding","30px 50px");
		$(".singleBox").css("margin","2.8% 9%");
	}