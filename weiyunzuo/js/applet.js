	var liList = document.querySelectorAll(".fixed_r li");
	var indexUp = 0;
	var index = 0;//当前页数
	var num4Data;
	var num4Index = 0;
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
				if(index == 3){
					num4Data = setInterval(function(){
						$(".num4").children().eq(num4Index).addClass("showNum4");
						if(num4Index == 4){ $(".num4 img").addClass("showNum4Img"); }
						num4Index ++;
						if(num4Index == 5){ clearInterval(num4Data);num4Index = 0; }
					},300)
				}else{
					$(".num4").children().removeClass("showNum4 showNum4Img showNum4Img_m");
					clearInterval(num4Data);
					num4Index = 0;
				}
			}
		})(i)
	}


	var scrHei = document.body.clientHeight;
	var scrWid = document.body.clientWidth;
	
	if(scrWid <= 700){
		$(".sea").attr("src","images/applet/1/m_sea.png");
		$(".num4 img").attr("src","images/applet/4/m_img.png");
	}
	
//	console.log("高"+scrHei);
	
	
	//让左边的导航居中
	$(".fixed_r").css("top",(scrHei-$(".fixed_r").height())/2+"px");
	$(".prev").css("top",(scrHei-$(".prev").height())/2+"px");
	$(".next").css("top",(scrHei-$(".next").height())/2+"px");
	//这是num的高度
	$(".num").height(scrHei);
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
					if(index == 3){
						num4Data = setInterval(function(){
							$(".num4").children().eq(num4Index).addClass("showNum4");
							if(num4Index == 4){ $(".num4 img").addClass("showNum4Img"); }
							num4Index ++;
							if(num4Index == 5){ clearInterval(num4Data);num4Index = 0; }
						},300)
					}else{
						$(".num4").children().removeClass("showNum4 showNum4Img");
						clearInterval(num4Data);
						num4Index = 0;
					}
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
	
	var banImgData_1;
	var banImgIndex_1 = 0;
	banImgData_1 = setInterval(function(){
		switch (banImgIndex_1){
			case 0:
				$(".box img").eq(0).css("bottom","0");
				break;
			case 1:
				$(".box img").eq(1).css("left","0%");
				$(".box img").eq(2).css("left","58%");
				setTimeout(function(){
					$(".box img").eq(1).css("left","-7%");
					$(".box img").eq(2).css("left","65%");	
				},500);
				setTimeout(function(){
					$(".box img").eq(1).css("left","0%");
					$(".box img").eq(2).css("left","58%");	
				},700);
				break;
			case 2:
				//  38%
				$(".box img").eq(3).addClass("boatAni");
				break;
			case 6:
				$(".banFont").eq(0).css("transform","scale(1)");
				break;
			case 7:
				$(".banFont").eq(1).css("transform","scale(1)");
				break;
			case 8:
				$(".banFont").eq(2).css("transform","scale(1)");
				break;
			case 9:
				$(".banFont").eq(3).css("transform","scale(1)");
				break;
			case 11:
				$(".bird").css("opacity","1");
				$(".fish").eq(0).addClass("fishAni_1");
				$(".fish").eq(1).addClass("fishAni_2");
				break;
			default:
				break;
		}
		banImgIndex_1 ++;
		if(banImgIndex_1 == 20){ clearInterval(banImgData_1); banImgIndex_1 = 0; }
	},500);
	
	// 当前banner的下标
	var bannerIndex = 0;
	// ban定时器
	var banData;
	
	var treeData;
	var treeIndex = 0;
	
	var banImgData;
	var banImgIndex = 8;
	var ban3ImgTime;
	// banner上一个
	var goPrev = function(){
		banImgIndex = 8;
		clearInterval(banImgData);
		clearTimeout(ban3ImgTime);
		$(".box3 img").removeClass("ban3_Img1_Ani");
		$(".box3 img").eq(1).css({"top": "40%","left": "50%","opacity": "0"});
		$(".box3 img").eq(2).css({"top": "40%","left": "50%","opacity": "0"});
		$(".box3 img").eq(3).css({"top": "40%","left": "50%","opacity": "0"});
		$(".box3 img").eq(4).css({"top": "40%","left": "50%","opacity": "0"});
		$(".moveBanImg").removeClass("banImgActive_2");
		
		clearInterval(banImgData_1);
		banImgIndex_1 = 0;
		$(".box img").eq(0).css("bottom","-100%");
		$(".box img").eq(1).css("left","-50%");
		$(".box img").eq(2).css("left","100%");
		$(".box img").eq(3).removeClass("boatAni");
		$(".banFont").css("transform","scale(0)");
		$(".bird").css("opacity",'0');
		$(".fish").removeClass("fishAni_1 fishAni_2");
		
		
		$(".banBox p").removeClass("pAniLeftShow pAniLeftHide pAniRightShow pAniRightHide");
		$(".box3 img").removeClass("box3Img2Ani box3Img3Ani box3Img4Ani");
		$(".banBox img").removeClass("imgAni");
		$(".box img").removeClass("cc1 cc2");
		$(".tree").removeClass("treeAni");
		switch(bannerIndex){
			// 1 -> 3
			case 0:
				$(".banBox:nth-of-type(1) p").addClass("pAniRightHide");
				$(".banBox:nth-of-type(3)").css("opacity","1").siblings().css("opacity","0");
				$(".banBox:nth-of-type(3) p").addClass("pAniLeftShow");
				$(".box3 img").eq(0).addClass("ban3_Img1_Ani");
				ban3ImgTime = setTimeout(function(){
					if(scrWid <= 700){
						$(".box3 img").eq(1).css({"top": "80%","left": "84%","opacity": "1"});
						$(".box3 img").eq(2).css({"top": "4%","left": "10%","opacity": "1"});
						$(".box3 img").eq(3).css({"top": "15%","left": "81%","opacity": "1"});
						$(".box3 img").eq(4).css({"top": "70%","left": "4%","opacity": "1"});
					}else{
						$(".box3 img").eq(1).css({"top": "60%","left": "75%","opacity": "1"});
						$(".box3 img").eq(2).css({"top": "8%","left": "25%","opacity": "1"});
						$(".box3 img").eq(3).css({"top": "15%","left": "66%","opacity": "1"});
						$(".box3 img").eq(4).css({"top": "56%","left": "22%","opacity": "1"});	
					}
				},1000);
				break;
			// 2 -> 1
			case 1:
				$(".banBox:nth-of-type(2) p").addClass("pAniRightHide");
				$(".banBox:nth-of-type(1)").css("opacity","1").siblings().css("opacity","0");
				$(".banBox:nth-of-type(1) p").addClass("pAniLeftShow");
				$(".box img:nth-of-type(3)").addClass("cc1");
				$(".box img:nth-of-type(4)").addClass("cc2");
				banImgData_1 = setInterval(function(){
					switch (banImgIndex_1){
						case 0:
							$(".box img").eq(0).css("bottom","0");
							break;
						case 1:
							$(".box img").eq(1).css("left","0%");
							$(".box img").eq(2).css("left","58%");
							setTimeout(function(){
								$(".box img").eq(1).css("left","-7%");
								$(".box img").eq(2).css("left","65%");	
							},500);
							setTimeout(function(){
								$(".box img").eq(1).css("left","0%");
								$(".box img").eq(2).css("left","58%");	
							},700);
							break;
						case 2:
							//  38%
							$(".box img").eq(3).addClass("boatAni");
							break;
						case 6:
							$(".banFont").eq(0).css("transform","scale(1)");
							break;
						case 7:
							$(".banFont").eq(1).css("transform","scale(1)");
							break;
						case 8:
							$(".banFont").eq(2).css("transform","scale(1)");
							break;
						case 9:
							$(".banFont").eq(3).css("transform","scale(1)");
							break;
						case 11:
							$(".bird").css("opacity","1");
							$(".fish").eq(0).addClass("fishAni_1");
							$(".fish").eq(1).addClass("fishAni_2");
							break;
						default:
							break;
					}
					banImgIndex_1 ++;
					if(banImgIndex_1 == 20){ clearInterval(banImgData_1); banImgIndex_1 = 0; }
				},500);
				break;
			// 3 -> 2
			case 2:
				$(".banBox:nth-of-type(3) p").addClass("pAniRightHide");
				$(".banBox:nth-of-type(2)").css("opacity","1").siblings().css("opacity","0");
				$(".banBox:nth-of-type(2) p").addClass("pAniLeftShow");
				banImgData = setInterval(function(){
					$(".moveBanImg").eq(banImgIndex).addClass("banImgActive_2");
					banImgIndex --;
					if(banImgIndex == -1){
						banImgIndex = 8;
						clearInterval(banImgData);
					}
				},200);
				break;
		}
		if(bannerIndex == 0){
			bannerIndex = 2;
		}else{
			bannerIndex --;
		}
		$(".m_banner_nav span").eq(bannerIndex).addClass("activeBanner").siblings().removeClass("activeBanner");
	};
	
	// banner下一个
	$(".next").click(function(){
		clearInterval(banData);
		goNext();
	});	
	
	// banner上一个
	$(".prev").click(function(){
		goPrev();	
	});
	
	var goNext = function(){
		treeIndex = 0;
//		clearInterval(treeData);
		banImgIndex = 8;
		clearInterval(banImgData);
		clearTimeout(ban3ImgTime);
		$(".box3 img").removeClass("ban3_Img1_Ani");
		$(".box3 img").eq(1).css({"top": "40%","left": "50%","opacity": "0"});
		$(".box3 img").eq(2).css({"top": "40%","left": "50%","opacity": "0"});
		$(".box3 img").eq(3).css({"top": "40%","left": "50%","opacity": "0"});
		$(".box3 img").eq(4).css({"top": "40%","left": "50%","opacity": "0"});
		clearInterval(banImgData_1);
		banImgIndex_1 = 0;
		
		$(".box img").eq(0).css("bottom","-100%");
		$(".box img").eq(1).css("left","-50%");
		$(".box img").eq(2).css("left","100%");
		$(".box img").eq(3).removeClass("boatAni");
		$(".banFont").css("transform","scale(0)");
		$(".bird").css("opacity",'0');
		$(".fish").removeClass("fishAni_1 fishAni_2");
		
		$(".moveBanImg").removeClass("banImgActive_2");
		$(".banBox p").removeClass("pAniLeftShow pAniLeftHide pAniRightShow pAniRightHide");
		$(".banBox img").removeClass("imgAni");
		$(".box3 img").removeClass("box3Img2Ani box3Img3Ani box3Img4Ani");
		$(".box img").removeClass("cc1 cc2");
		$(".tree").removeClass("treeAni");
		
		switch(bannerIndex){
			// 第一张切换到第二张
			case 0:
				$(".banBox:nth-of-type(1) p").addClass("pAniLeftHide");
				$(".banBox:nth-of-type(2)").css("opacity","1").siblings().css("opacity","0");
				$(".banBox:nth-of-type(2) p").addClass("pAniRightShow");
//				$(".moveBanImg").addClass("banImgActive_2");
				banImgData = setInterval(function(){
					$(".moveBanImg").eq(banImgIndex).addClass("banImgActive_2");
					banImgIndex --;
					if(banImgIndex == -1){
						banImgIndex = 8;
						clearInterval(banImgData);
					}
				},200);
				break;
			case 1:
			// 第二张切换到第三张
				$(".moveBanImg").removeClass("banImgActive_2");
				$(".banBox:nth-of-type(2) p").addClass("pAniLeftHide");
				$(".banBox:nth-of-type(3)").css("opacity","1").siblings().css("opacity","0");
				$(".banBox:nth-of-type(3) p").addClass("pAniRightShow");
				$(".box3 img").eq(0).addClass("ban3_Img1_Ani");
				ban3ImgTime = setTimeout(function(){
					if(scrWid <= 700){
						$(".box3 img").eq(1).css({"top": "80%","left": "84%","opacity": "1"});
						$(".box3 img").eq(2).css({"top": "4%","left": "10%","opacity": "1"});
						$(".box3 img").eq(3).css({"top": "15%","left": "81%","opacity": "1"});
						$(".box3 img").eq(4).css({"top": "70%","left": "4%","opacity": "1"});
					}else{
						$(".box3 img").eq(1).css({"top": "60%","left": "75%","opacity": "1"});
						$(".box3 img").eq(2).css({"top": "8%","left": "25%","opacity": "1"});
						$(".box3 img").eq(3).css({"top": "15%","left": "66%","opacity": "1"});
						$(".box3 img").eq(4).css({"top": "56%","left": "22%","opacity": "1"});	
					}
				},1000);
				break;
			// 第三张切换到第一张
			case 2:
				$(".banBox:nth-of-type(3) p").addClass("pAniLeftHide");
				$(".banBox:nth-of-type(1)").css("opacity","1").siblings().css("opacity","0");
				$(".banBox:nth-of-type(1) p").addClass("pAniRightShow");
				banImgData_1 = setInterval(function(){
					switch (banImgIndex_1){
						case 0:
							$(".box img").eq(0).css("bottom","0");
							break;
						case 1:
							$(".box img").eq(1).css("left","0%");
							$(".box img").eq(2).css("left","58%");
							setTimeout(function(){
								$(".box img").eq(1).css("left","-7%");
								$(".box img").eq(2).css("left","65%");	
							},500);
							setTimeout(function(){
								$(".box img").eq(1).css("left","0%");
								$(".box img").eq(2).css("left","58%");	
							},700);
							break;
						case 2:
							//  38%
							$(".box img").eq(3).addClass("boatAni");
							break;
						case 6:
							$(".banFont").eq(0).css("transform","scale(1)");
							break;
						case 7:
							$(".banFont").eq(1).css("transform","scale(1)");
							break;
						case 8:
							$(".banFont").eq(2).css("transform","scale(1)");
							break;
						case 9:
							$(".banFont").eq(3).css("transform","scale(1)");
							break;
						case 11:
							$(".bird").css("opacity","1");
							$(".fish").eq(0).addClass("fishAni_1");
							$(".fish").eq(1).addClass("fishAni_2");
							break;
						default:
							break;
					}
					banImgIndex_1 ++;
					if(banImgIndex_1 == 20){ clearInterval(banImgData_1); banImgIndex_1 = 0; }
				},500);
				break;
		}
		if(bannerIndex == 2){
			bannerIndex = 0;
		}else{
			bannerIndex ++;
		}
		$(".m_banner_nav span").eq(bannerIndex).addClass("activeBanner").siblings().removeClass("activeBanner");
	}
	
	
	
	
	
	/*************    2    ****************/
	// 设置singleBox问正方形
	setTimeout(function(){
		$(".singleBox").height($(".singleBox").width());
		$(".caseBoxTop").css("left",($(".caseBox").width()-$(".caseBoxTop").width())/2+"px");
	},500)
	
	
	$("#show").click(function(){
		$(".caseBottom").css("transform","scale(1)");
		$(this).parent().css("transform","scale(0)");
	});
	$("#del").click(function(){
		$(".caseBoxTop").css("transform","scale(1)");
		$(this).parent().css("transform","scale(0)");
	})
	
	var cbiArr = [];
	$(".caseBottom div img").each(function(index,item){
		cbiArr.push($(".caseBottom div img").eq(index).attr("src"));
	});
		
	$(".caseBottom .moveBox .moveInBox div").hover(function(){
		$(".caseBottom div img").each(function(index,item){
			$(".caseBottom div img").eq(index).attr("src",cbiArr[index]).removeClass("activeImg");
		});					
		var index = $(this).index();
		$(this).children("img").attr("src",$(".hideImg").children("img").eq(index).attr("src")).addClass("activeImg");	
	})
	
	
	var moveIndex = 0;
	if(scrWid <= 700){
		setTimeout(function(){
			$(".moveInBox").width(80*($(".moveInBox").children("div").length+1.2));
			var divNum = $(".moveInBox").children("div").length;
			if(divNum > 4){
				$(".moveBox").width(80*6);
				$("#right").click(function(){
					moveIndex ++;
					if(moveIndex >= divNum-2){
						moveIndex --;	
					}
					console.log(moveIndex);
					if(scrWid <= 360){ 
						$(".moveInBox").css("left",-moveIndex*80-35); 
					}else{ 
						$(".moveInBox").css("left",-moveIndex*80);
					}
				});	
				$("#left").click(function(){
					moveIndex --;
					if(moveIndex < 0){
						moveIndex ++;	
					}
					$(".moveInBox").css("left",-moveIndex*80-10);
				});	
			}else{
				$(".moveBox").width(80*$(".moveInBox").children("div").length);
			}
		},2000);
	}else{
		setTimeout(function(){
			$(".moveInBox").width(120*$(".moveInBox").children("div").length);
			var divNum = $(".moveInBox").children("div").length;
			if(divNum > 4){
				$(".moveBox").width(113*6);
				$("#right").click(function(){
					moveIndex ++;
					if(moveIndex >= divNum-4){
						moveIndex --;	
					}
					console.log(moveIndex);
					$(".moveInBox").css("left",-moveIndex*117.5);
				});	
				$("#left").click(function(){
					moveIndex --;
					if(moveIndex < 0){
						moveIndex ++;	
					}
					$(".moveInBox").css("left",-	moveIndex*117.5);
				});	
			}else{
				$(".moveBox").width(117.5*$(".moveInBox").children("div").length);
			}
		},2000);	
	}
	
	
	
	
	
	/*************    2    ****************/
	
	
	/*************    3    ****************/
	
	// 设置轮播盒子的宽度
	setTimeout(function(){
		$(".bannerBox div").width($(".content").width());
		$(".bannerBox").width($(".bannerBox div").length*$(".caseBox").width());
		for(var i=0;i<$(".bannerBox").length;i++){
			(function(i){
				$(".bannerBox").eq(i).children("div").scrollLeft($(".content").width()/2.4);
			})(i)
		}
	},2000);
	
	$(".moveInBox div").click(function(){
		var moveIndex = $(this).index();
		$(".caseTop>div").eq(moveIndex).css("opacity","1").siblings("div").css("opacity","0");
	});
	
	
	//  兼容 
	if(scrHei <= 700){
		$(".Numl_Art p").css("margin","8px 0");
		$(".contentMun").css("margin-top","5px");
		$(".NumLeft_Text .NumL_Section").css("maring-top","10px");
		$(".NumContact_right .NumConR_article .NumR_a").css("margin-top","25px");
		$(".NumContact_right .NumConR_article").css("padding","30px 50px");
		$(".singleBox").css("margin","2.8% 9%");
		$(".sea").attr("src","images/applet/1/m_sea.png");
	}
	
	// banner添加触摸事件
	var banner = document.querySelector(".banner");
	var one;
	var x_start = 0;
	var x_end = 0;
	var x_final = 0;
	//  触摸开始
	banner.addEventListener("touchstart",function(e){
		one = e.touches[0];
		x_start = one.pageX;
	});
	//  触摸移动
	banner.addEventListener("touchmove",function(e){
		one = e.touches[0];
		x_end = one.pageX;
	});
	//  触摸结束
	banner.addEventListener("touchend",function(e){
		x_final = x_end - x_start;
		if(x_end != 0){
			if(x_final <= -50) goNext();
			if(x_final >= 50) goPrev();	
		}
		x_start = 0;
		x_end = 0;
	 	x_final = 0;
	});
	
	// banner导航点击事件
	$(".m_banner_nav span").click(function(){
		var this_index = $(this).index();
		switch (bannerIndex){
			case 0:
				if( this_index == 1 ) goNext();
				if( this_index == 2 ){
					goNext();
					goNext();
				} 
				break;
			case 1:
				if( this_index == 0 ) goPrev();
				if( this_index == 2 ) goNext();
				break;
			case 2:
				if( this_index == 0 ){
					goPrev();
					goPrev();
				}
				if( this_index == 1 ) goPrev();
				break;
		}
	});
	

	// numBox触摸事件
	var numOne;
	var numY_start = 0;
	var numY_end = 0;
	var numY_final = 0;
	var numBox = document.querySelector(".numBox");
	//  触摸开始
	numBox.addEventListener("touchstart",function(e){
		numOne = e.touches[0];
		numY_start = numOne.pageY;
	});
	//  触摸移动
	numBox.addEventListener("touchmove",function(e){
		numOne = e.touches[0];
		numY_end = numOne.pageY;
	});
	//  触摸结束
	numBox.addEventListener("touchend",function(e){
		numY_final = numY_end - numY_start;
		if(numY_end != 0){
			if(numY_final <= -50){
				if(index != 4) index ++; 
			}
			if(numY_final >= 50){
				if(index != 0) index --; 
			}
			if(index == 3){
						num4Data = setInterval(function(){
							$(".num4").children().eq(num4Index).addClass("showNum4");
							if(num4Index == 4){ $(".num4 img").addClass("showNum4Img_m"); }
							num4Index ++;
							if(num4Index == 5){ clearInterval(num4Data);num4Index = 0; }
						},300)
					}else{
						$(".num4").children().removeClass("showNum4 showNum4Img showNum4Img_m");
						clearInterval(num4Data);
						num4Index = 0;
					}
			$(".numBox").css("top", -(index * 100) + "%");
		}
		numY_start = 0;
		numY_end = 0;
	 	numY_final = 0;
	});
	
	
	// numBox触摸事件
	var enOne;
	var enY_start = 0;
	var enY_end = 0;
	var enY_final = 0;
	var enBox = document.querySelector(".m_page2");
	//  触摸开始
	enBox.addEventListener("touchstart",function(e){
		enOne = e.touches[0];
		enY_start = enOne.pageX;
	});
	//  触摸移动
	enBox.addEventListener("touchmove",function(e){
		enOne = e.touches[0];
		enY_end = enOne.pageX;
	});
	//  触摸结束
	enBox.addEventListener("touchend",function(e){
		enY_final = enY_end - enY_start;
		if(enY_end != 0){
			if(enY_final <= -50){
				$(".enMoveBox").css("transform","translateX(-50%)");
				$(".goRight").hide();
				$(".goLeft").show();
			} 
			if(enY_final >= 50){
				$(".enMoveBox").css("transform","translateX(0%)");
				$(".goRight").show();
				$(".goLeft").hide();
			} 
		}
		enY_start = 0;
		enY_end = 0;
	 	enY_final = 0;
	});
	
	
	
	// 小程序入口左右点击事件
	$(".goRight").click(function(){
		$(".enMoveBox").css("transform","translateX(-50%)");
		$(".goRight").hide();
		$(".goLeft").show();
	});
	
	$(".goLeft").click(function(){
		$(".enMoveBox").css("transform","translateX(0%)");
		$(".goLeft").hide();
		$(".goRight").show();
	});
	
	$(".enMoveBox>div>div").click(function(){
		var enMoveIndex = $(this).index();
		for(var i=0;i<$(".enMoveBox>div>div").length;i++){
			(function(i){
				$(".enMoveBox>div>div").eq(i).removeClass("avtiveEn");
				$(".enMoveBox>div>div").eq(i).children("span").removeClass("activeEnAni");
				$(".enMoveBox>div>div").eq(i).children("span").children("img").attr("src","images/applet/2/icon_"+(i+1)+"_gray.png");
			})(i)
		}
		$(".enMoveBox>div>div").eq(enMoveIndex).addClass("avtiveEn");
		$(".enMoveBox>div>div").eq(enMoveIndex).children("span").addClass("activeEnAni");
		$(".enMoveBox>div>div").eq(enMoveIndex).children("span").children("img").attr("src","images/applet/2/icon_"+(enMoveIndex+1)+".png");
	});
	
	$(".rightEnBox>div").click(function(){
		var enMoveIndex = $(this).index();
		for(var i=0;i<$(".rightEnBox>div").length;i++){
			(function(i){
				$(".rightEnBox>div").eq(i).removeClass("avtiveEn");
				$(".rightEnBox>div").eq(i).children("span").removeClass("activeEnAni");
				$(".rightEnBox>div").eq(i).children("span").children("img").attr("src","images/applet/2/icon_"+(i+6)+"_gray.png");
			})(i)
		}
		$(".rightEnBox>div").eq(enMoveIndex).addClass("avtiveEn");
		$(".rightEnBox>div").eq(enMoveIndex).children("span").addClass("activeEnAni");
		$(".rightEnBox>div").eq(enMoveIndex).children("span").children("img").attr("src","images/applet/2/icon_"+(enMoveIndex+6)+".png");
	});
	
	//组织在微信中下拉出现空白
//	    var overscroll = function (els) {
//      for (var i = 0; i < els.length; ++i) {
//          var el = els[i];
//          el.addEventListener('touchstart', function () {
//              var top = this.scrollTop
//                  , totalScroll = this.scrollHeight
//                  , currentScroll = top + this.offsetHeight;
//              //If we're at the top or the bottom of the containers
//              //scroll, push up or down one pixel.
//              //
//              //this prevents the scroll from "passing through" to
//              //the body.
//              if (top === 0) {
//                  this.scrollTop = 1;
//              } else if (currentScroll === totalScroll) {
//                  this.scrollTop = top - 1;
//              }
//          });
//          el.addEventListener('touchmove', function (evt) {
//              //if the content is actually scrollable, i.e. the content is long enough
//              //that scrolling can occur
//              if (this.offsetHeight < this.scrollHeight)
//                  evt._isScroller = true;
//          });
//      }
//  };
//  
//  //禁止body的滚动事件
//  document.body.addEventListener('touchmove', function (evt) {
//      //In this case, the default behavior is scrolling the body, which
//      //would result in an overflow.  Since we don't want that, we preventDefault.
//      if (!evt._isScroller) {
//          evt.preventDefault();
//      }
//  });
//  
//  //给class为.scroll的元素加上自定义的滚动事件
//  overscroll(document.querySelectorAll('.scroll'));