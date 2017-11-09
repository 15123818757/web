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
	
	console.log("高"+scrHei);
	
	
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
	
	// 当前banner的下标
	var bannerIndex = 0;
	// ban定时器
	var banData;
	
	var treeData;
	var treeIndex = 0;
	// banner上一个
	$(".prev").click(function(){
		clearInterval(banData);
		treeIndex = 0;
		clearInterval(treeData);
		$(".banBox p").removeClass("pAniLeftShow pAniLeftHide pAniRightShow pAniRightHide");
		$(".box3 img").removeClass("box3Img2Ani box3Img3Ani box3Img4Ani");
		$(".banBox img").removeClass("imgAni");
		$(".box img").removeClass("cc1 cc2");
		$(".tree").removeClass("treeAni");
		switch(bannerIndex){
			case 0:
				$(".banBox:nth-of-type(1) p").addClass("pAniRightHide");
				$(".banBox:nth-of-type(3)").css("opacity","1").siblings().css("opacity","0");
				$(".banBox:nth-of-type(3) p").addClass("pAniLeftShow");
				$(".box3 img:nth-of-type(2)").addClass("box3Img2Ani");
				$(".box3 img:nth-of-type(3)").addClass("box3Img3Ani");
				$(".box3 img:nth-of-type(4)").addClass("box3Img4Ani");
				$(".tree").eq(0).addClass("treeAni");
				treeData = setInterval(function(){
					$(".tree").eq(treeIndex).addClass("treeAni");
					treeIndex ++;
					if(treeIndex == 12){
						treeIndex = 0;
						clearInterval(treeData);
					}
				},200);
				break;
			case 1:
				$(".banBox:nth-of-type(2) p").addClass("pAniRightHide");
				$(".banBox:nth-of-type(1)").css("opacity","1").siblings().css("opacity","0");
				$(".banBox:nth-of-type(1) p").addClass("pAniLeftShow");
				$(".box img:nth-of-type(3)").addClass("cc1");
				$(".box img:nth-of-type(4)").addClass("cc2");
				break;
			case 2:
				$(".banBox:nth-of-type(3) p").addClass("pAniRightHide");
				$(".banBox:nth-of-type(2)").css("opacity","1").siblings().css("opacity","0");
				$(".banBox:nth-of-type(2) p").addClass("pAniLeftShow");
				break;
		}
		if(bannerIndex == 0){
			bannerIndex = 2;
		}else{
			bannerIndex --;
		}
//		banData = setInterval(function(){
//			goNext();
//		},5000);
	});
	// banner下一个
	$(".next").click(function(){
		clearInterval(banData);
		goNext();
//		banData = setInterval(function(){
//			goNext();
//		},5000);
	});	
//	banData = setInterval(function(){
//		goNext();
//	},5000);
	var goNext = function(){
		treeIndex = 0;
		clearInterval(treeData);
		$(".banBox p").removeClass("pAniLeftShow pAniLeftHide pAniRightShow pAniRightHide");
		$(".banBox img").removeClass("imgAni");
		$(".box3 img").removeClass("box3Img2Ani box3Img3Ani box3Img4Ani");
		$(".box img").removeClass("cc1 cc2");
		$(".tree").removeClass("treeAni");
		switch(bannerIndex){
			case 0:
				$(".banBox:nth-of-type(1) p").addClass("pAniLeftHide");
				$(".banBox:nth-of-type(2)").css("opacity","1").siblings().css("opacity","0");
				$(".banBox:nth-of-type(2) p").addClass("pAniRightShow");
				break;
			case 1:
				$(".banBox:nth-of-type(2) p").addClass("pAniLeftHide");
				$(".banBox:nth-of-type(3)").css("opacity","1").siblings().css("opacity","0");
				$(".banBox:nth-of-type(3) p").addClass("pAniRightShow");
				$(".box3 img:nth-of-type(2)").addClass("box3Img2Ani");
				$(".box3 img:nth-of-type(3)").addClass("box3Img3Ani");
				$(".box3 img:nth-of-type(4)").addClass("box3Img4Ani");
				treeData = setInterval(function(){
					$(".tree").eq(treeIndex).addClass("treeAni");
					treeIndex ++;
					if(treeIndex == 12){
						treeIndex = 0;
						clearInterval(treeData);
					}
				},200);
				break;
			case 2:
				$(".banBox:nth-of-type(3) p").addClass("pAniLeftHide");
				$(".banBox:nth-of-type(1)").css("opacity","1").siblings().css("opacity","0");
				$(".banBox:nth-of-type(1) p").addClass("pAniRightShow");
				$(".box img:nth-of-type(3)").addClass("cc1");
				$(".box img:nth-of-type(4)").addClass("cc2");
				break;
		}
		if(bannerIndex == 2){
			bannerIndex = 0;
		}else{
			bannerIndex ++;
		}
	}
	$(".bubble p").each(function(index,item){
		
		if( $(".bubble p").eq(index).html().length == 5){
			//console.log($(".bubble p").eq(index).html());
			$(".bubble p").eq(index).css({
				"letter-spacing":"2px",
				"box-sizing": "border-box"
			});
		}
	})
	
	
	
	
	
	/*************    2    ****************/
	// 设置singleBox问正方形
	setTimeout(function(){
		$(".singleBox").height($(".singleBox").width());
		$(".caseBoxTop").css("left",($(".caseBox").width()-$(".caseBoxTop").width())/2+"px");
	},500)
	
	$(".caseBottom").width()
	
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
			$(".caseBottom div img").eq(index).attr("src",cbiArr[index]);
		});					
		var index = $(this).index();
		$(this).children("img").attr("src",$(".hideImg").children("img").eq(index).attr("src"));	
	})
	
	
	var moveIndex = 0;
	setTimeout(function(){
		$(".moveInBox").width(103*$(".moveInBox").children("div").length);
		var divNum = $(".moveInBox").children("div").length;
		if(divNum > 4){
			$(".moveBox").width(103*5);
			$("#right").click(function(){
				moveIndex ++;
				if(moveIndex >= divNum-4){
					moveIndex --;	
				}
				console.log(moveIndex);
				$(".moveInBox").css("left",-moveIndex*103);
			});	
			$("#left").click(function(){
				moveIndex --;
				if(moveIndex < 0){
					moveIndex ++;	
				}
				$(".moveInBox").css("left",-	moveIndex*103);
			});	
		}else{
			$(".moveBox").width(103*$(".moveInBox").children("div").length);
		}
	},2000);
	
	
	
	
	/*************    2    ****************/
	
	
	/*************    3    ****************/
	
	// 设置轮播盒子的宽度
	setTimeout(function(){
		$(".bannerBox div").width($(".content").width());
		$(".bannerBox").width($(".bannerBox div").length*$(".caseBox").width());	
	},2000);
	
	
	
	//  点击不同的logo出现不同的banner
	$(".moveInBox div").click(function(){
		var index = $(this).index();
		$(".bannerBox").eq(index).css("opacity","1").siblings("div").css("opacity","0");
	});
	
	
	
	//  兼容 
	if(scrHei <= 700){
		$(".Numl_Art p").css("margin","8px 0");
		$(".contentMun").css("margin-top","5px");
		$(".NumLeft_Text .NumL_Section").css("maring-top","10px");
		$(".NumContact_right .NumConR_article .NumR_a").css("margin-top","25px");
		$(".NumContact_right .NumConR_article").css("padding","30px 50px");
		$(".singleBox").css("margin","2.8% 9%");
	}
	
	
	//  自动轮播
	var createData = function(index){
		var baIndex = 0;
		var bannerData = setInterval(function(){
			$(".caseTop .bannerBox:nth-of-type("+index+")").css("left",-baIndex*100+"%");
			baIndex ++;
			var divSize = $(".caseTop .bannerBox:nth-of-type("+index+") div").length; 
			if(baIndex == divSize){
				baIndex = 0;
			}
		},4000);	
		return bannerData;
	};
	
	var banData1 = createData(1);
	var banData2 = createData(2);
	var banData3 = createData(3);
	var banData4 = createData(4);
	var banData5 = createData(5);
	var banData6 = createData(6);
	var banData7 = createData(7);
	var banData8 = createData(8);
	var banData9 = createData(9);
	var banData10 = createData(10);
	var banData11 = createData(11);
	var banData12 = createData(12);
	var banData13 = createData(13);
	var banData14 = createData(14);
	
	/*************    3    ****************/
