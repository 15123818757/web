	var scrWid = document.body.clientWidth;
	var scrHei = document.body.clientHeight;
	//alert(scrHei);
	if(scrWid >= scrHei){
		$(".cc").css("display","block");
	    $(".num_box scroll").css("display","none");
	}
	//判断手机横竖屏状态：
	function hengshuping(){ 
	  if(window.orientation==180||window.orientation==0){
	  	$(".num_box scroll").css("display","block");
	  	$(".cc").css("display","none");
	  	scrWid = document.body.clientWidth;
		scrHei = document.body.clientHeight;
	   } 
	if(window.orientation==90||window.orientation==-90){ 
	        $(".cc").css("display","block");
	        $(".num_box scroll").css("display","none");
	    } 
	 } 
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false); 	
	
	//阻止软键盘打乱布局
	$(document).ready(function () {
	　　$('body').height($('body')[0].clientHeight);
	});
	
	var bannerData;
	
		

	var indexY = 0;
	var one;
	var yStart = 0;
	var yEnd = 0;
	var yFinal = 0;
	var box = document.querySelector(".box");
	//下拉  上拉  拖动事件
	box.addEventListener("touchstart",function(evt){
		//清除banner定时器
		clearInterval(bannerData);
		one = evt.touches[0];
		yStart = one.pageY;
	});
	box.addEventListener("touchmove",function(evt){
		one = evt.touches[0];
	});
	box.addEventListener("touchend",function(evt){
		$(".banner").removeClass("tranTop");
		yEnd = one.pageY;
		yFinal = yEnd - yStart;
		if( yFinal != 0 ){
			if(yFinal <= -30){
				indexY ++;
				if(indexY == 4){
					indexY = 0;
				}
			}
			if(yFinal >= 30){
				indexY --;
				if(indexY == -1){
					indexY = 0;
				}
			}
			$(".box").css("top",-(indexY*scrHei)+"px");
		}
		yStart = 0;
		yEnd = 0;
		yFinal = 0;
		console.log("当前页数   "+indexY);
	});


	/*********************     banner     *********************/
	var treeData;
	var treeIndex = 0;
	
	
	var banner = document.querySelector(".banner");
	var banXStart = 0;
	var banXEnd = 0;
	var banXFinal = 0;
	var banIndex = 0;
	$("#banner1>img,#banner1>p").css("opacity","1");
	banner.addEventListener("touchstart",function(evt){
		one = evt.touches[0];
		banXStart = one.pageX;
	});
	banner.addEventListener("touchmove",function(evt){
		one = evt.touches[0];
	});
	banner.addEventListener("touchend",function(evt){
		//激活定时器
		bannerData = setInterval(function(){
			$(".tree").removeClass("treeAni");
			treeIndex = 0;
			clearInterval(treeData);
			$("#banner3Box img").removeClass("box3Img2Ani box3Img3Ani box3Img4Ani");
			$(".banner>div>img,.banner>div>p").css("opacity","0");
			banIndex ++;
			if(banIndex == 3){
				banIndex = 0;
			}
			switch (banIndex){
					case 0:
						$("#house").addClass("cc1");
						$("#lighthouse").addClass("cc2");
						$("#banner1>img,#banner1>p").css("opacity","1");
						break;
					case 1:
						$(".box img").removeClass("cc1 cc2");
						$("#banner2>img,#banner2>p").css("opacity","1");
						break;
					case 2:
						$(".box img").removeClass("cc1 cc2");
						$("#banner3>img,#banner3>p").css("opacity","1");
						$("#banner3Box img:nth-of-type(2)").addClass("box3Img2Ani");
						$("#banner3Box img:nth-of-type(3)").addClass("box3Img3Ani");
						$("#banner3Box img:nth-of-type(4)").addClass("box3Img4Ani");
						treeData = setInterval(function(){
							$(".tree").eq(treeIndex).addClass("treeAni");
							treeIndex ++;
							if(treeIndex == 12){
								treeIndex = 0;
								clearInterval(treeData);
							}
						},200);
						break;
				}
			$(".banner").css("left",-(banIndex*scrWid)+"px");
			$(".bannerIndex span").eq(banIndex).addClass("activeSpan").siblings().removeClass("activeSpan");
		},4000);
		banXEnd = one.pageX;
		banXFinal = banXEnd - banXStart;
		if( banXFinal != 0 ){
			if(banXFinal <= -30){
				//  向右
				$(".tree").removeClass("treeAni");
				treeIndex = 0;
				clearInterval(treeData);
				$("#banner3Box img").removeClass("box3Img2Ani box3Img3Ani box3Img4Ani");
				$(".banner>div>img,.banner>div>p").css("opacity","0");
				banIndex ++;
				if(banIndex == 3){
					banIndex = 0;
				}
				switch (banIndex){
					case 0:
						$("#house").addClass("cc1");
						$("#lighthouse").addClass("cc2");
						$("#banner1>img,#banner1>p").css("opacity","1");
						break;
					case 1:
						$(".box img").removeClass("cc1 cc2");
						$("#banner2>img,#banner2>p").css("opacity","1");
						break;
					case 2:
						$(".box img").removeClass("cc1 cc2");
						$("#banner3>img,#banner3>p").css("opacity","1");
						$("#banner3Box img:nth-of-type(2)").addClass("box3Img2Ani");
						$("#banner3Box img:nth-of-type(3)").addClass("box3Img3Ani");
						$("#banner3Box img:nth-of-type(4)").addClass("box3Img4Ani");
						treeData = setInterval(function(){
							$(".tree").eq(treeIndex).addClass("treeAni");
							treeIndex ++;
							if(treeIndex == 12){
								treeIndex = 0;
								clearInterval(treeData);
							}
						},200);
						break;
				}
			}
			if(banXFinal >= 30){
				//  向左
				$(".tree").removeClass("treeAni");
				treeIndex = 0;
				clearInterval(treeData);
				$("#banner3Box img").removeClass("box3Img2Ani box3Img3Ani box3Img4Ani");
				$(".banner>div>img,.banner>div>p").css("opacity","0");
				banIndex --;
				if(banIndex == -1){
					banIndex = 2;
				}
				switch (banIndex){
					case 0:
						$("#house").addClass("cc1");
						$("#lighthouse").addClass("cc2");
						$("#banner1>img,#banner1>p").css("opacity","1");
						break;
					case 1:
						$(".box img").removeClass("cc1 cc2");
						$("#banner2>img,#banner2>p").css("opacity","1");
						break;
					case 2:
						$(".box img").removeClass("cc1 cc2");
						$("#banner3>img,#banner3>p").css("opacity","1");
						$("#banner3Box img:nth-of-type(2)").addClass("box3Img2Ani");
						$("#banner3Box img:nth-of-type(3)").addClass("box3Img3Ani");
						$("#banner3Box img:nth-of-type(4)").addClass("box3Img4Ani");
						treeData = setInterval(function(){
							$(".tree").eq(treeIndex).addClass("treeAni");
							treeIndex ++;
							if(treeIndex == 12){
								treeIndex = 0;
								clearInterval(treeData);
							}
						},200);
						break;
				}
			}
			
			$(".banner").css("left",-(banIndex*scrWid)+"px");
			$(".bannerIndex span").eq(banIndex).addClass("activeSpan").siblings().removeClass("activeSpan");
		}
		banXStart = 0;
		banXEnd = 0;
		banXFinal = 0;
	});

	var ban3LineHeight = $(".formInput:nth-of-type(3)").height();
	$(".formInput:nth-of-type(3) textarea").css({
		"line-height":ban3LineHeight/3.5+"px",
		"padding-top":ban3LineHeight/10+"px"
	});
	$(".formInput:nth-of-type(3) img").css("transform","translateY(-"+ban3LineHeight/10+"px)");
	
	
	/*********************     难题     *********************/
	$(".problemBox div").click(function(){
		var pBoxIndex = $(this).index();
		for(var i=0;i<$(".problemBox div").length;i++){
			(function(i){
				$(".problemBox div").eq(i).children("img").attr("src","images/h5/2/icon"+(i+1)+".png");
			})(i)
		}
		$(this).children("img").attr("src","images/h5/2/iconColor"+(pBoxIndex+1)+".png");
	});
	$(".caseBox div").click(function(){
		var pBoxIndex = $(this).index();
		for(var i=0;i<$(".caseBox div").length;i++){
			(function(i){
				$(".caseBox div").eq(i).children("p").children("img").attr("src","images/operation/3/grayImg"+(i+1)+".png");
			})(i)
		}
		$(this).children("p").children("img").attr("src","images/operation/3/redImg"+(pBoxIndex)+".png");
	});

	/*********************     分享     *********************/


	//左滑动
	$(".smLeft").click(function(){
		$(".smMMoveBox").css("left",'0');	
	});
	$(".smRight").click(function(){
		if($(".imgBox").length == 1){
			$(".smMMoveBox").css("left",'0%');
		}
		else{
			$(".smMMoveBox").css("left",'-100%');	
		}
	});


	

	//bannr定时器
	bannerData = setInterval(function(){
		banIndex ++;
		if(banIndex == 3){
			banIndex = 0;
		}
		$(".tree").removeClass("treeAni");
		treeIndex = 0;
		clearInterval(treeData);
		$("#banner3Box img").removeClass("box3Img2Ani box3Img3Ani box3Img4Ani");
		$(".banner>div>img,.banner>div>p").css("opacity","0");
		switch (banIndex){
					case 0:
						$("#house").addClass("cc1");
						$("#lighthouse").addClass("cc2");
						$("#banner1>img,#banner1>p").css("opacity","1");
						break;
					case 1:
						$(".box img").removeClass("cc1 cc2");
						$("#banner2>img,#banner2>p").css("opacity","1");
						break;
					case 2:
						$(".box img").removeClass("cc1 cc2");
						$("#banner3>img,#banner3>p").css("opacity","1");
						$("#banner3Box img:nth-of-type(2)").addClass("box3Img2Ani");
						$("#banner3Box img:nth-of-type(3)").addClass("box3Img3Ani");
						$("#banner3Box img:nth-of-type(4)").addClass("box3Img4Ani");
						treeData = setInterval(function(){
							$(".tree").eq(treeIndex).addClass("treeAni");
							treeIndex ++;
							if(treeIndex == 12){
								treeIndex = 0;
								clearInterval(treeData);
							}
						},200);
						break;
				}
		$(".banner").css("left",-(banIndex*scrWid)+"px");
		$(".bannerIndex span").eq(banIndex).addClass("activeSpan").siblings().removeClass("activeSpan");
	},4000);

	

	
	if(scrHei >= 600){
		$(".shareTop img").css({
			"width":"80%",
			"left":"10%"
		});
		$(".caseBox>div>p:nth-of-type(2)").css({
			"font-size":"0.6rem",
			"padding":"3% 5%"
			
		});
		
	}
	if(scrHei >=660){
		$(".smMiddle div div").css({
			"width":"13%"
		});
	}

	


	//处理案例的布局
	
	setTimeout(function(){
		
		
		var smallList = document.querySelectorAll(".small");
		var smMMoveBox = document.querySelector(".smMMoveBox");
		//大盒子的数量
		var mBox_num;
		if(smallList.length/6 <= 1){
			mBox_num = 1;
		}else{
			if(smallList.length/6 != parseInt(smallList.length/6)){
				mBox_num = parseInt(smallList.length/6)+1;
			}else{
				mBox_num = parseInt(smallList.length/6);
			}	
		}
		smMMoveBox.style.width = (mBox_num*100)+"%";
		var imgBox = document.createElement("div");
		var imgDiv = document.createElement("div");
		imgDiv.className = "small";
		var img = document.createElement("img");
		imgBox.className = "imgBox";
		var ss = 0;
		if(smallList.length >6){
			ss = 6;
		}else{
			ss = smallList.length; 
		}
		for(var i=0;i<ss;i++){
			(function(i){
				img.setAttribute("src",smallList[i].children[0].getAttribute("src"));
				imgDiv.appendChild(img);
				imgBox.appendChild(imgDiv.cloneNode(true));
			})(i)
		}
		for(var i=0;i<mBox_num;i++){
			(function(i){
				smMMoveBox.appendChild(imgBox.cloneNode(true));
			})(i)
		}
		$(".imgBox").width($(".smMiddle").width()-10);
		$(".imgBox").height($(".smMiddle").height());	
		$(".imgBox .small").height($(".imgBox .small").width());
		
		if(mBox_num == 2){
			$(".imgBox").eq(1).children(".small").remove();
			for(var i=6;i<smallList.length;i++){
				(function(i){
					img.setAttribute("src",smallList[i].children[0].getAttribute("src"));
					imgDiv.appendChild(img);
					document.querySelectorAll(".imgBox")[1].appendChild(imgDiv.cloneNode(true));
				})(i)
			}
		}
		
		$(".smMMoveBox>.small").remove();
		
		
		
		//  点击logo出现不同的banner
		// $(".hideImg img");
		var showImgArr = [];
		$(".imgBox").eq(0).children("div").children("img").each(function(){
			showImgArr.push($(this).attr("src"));
		});
		var showImgArr1 = [];
		$(".imgBox").eq(1).children("div").children("img").each(function(){
			showImgArr1.push($(this).attr("src"));
		});
		$(".imgBox").eq(0).children("div").click(function(){
			// 恢复logo
			$(".imgBox").eq(0).children("div").children("img").each(function(index,item){
				$(this).attr("src",showImgArr[index]);
			});
			$(".imgBox").eq(1).children("div").children("img").each(function(index,item){
				$(this).attr("src",showImgArr1[index]);
			});
			// 点击出现相应的二维码
			var smMIndex = $(this).index();
			$(this).children(img).attr("src",$(".hideImg img").eq(smMIndex).attr("src"));
			$(this).css("border","1px solid #ac2528").siblings("div").css("border","1px solid #dedede");
			$(".shareTop div").eq(smMIndex).css("opacity","1").siblings().css("opacity","0");
		});
		$(".imgBox").eq(1).children("div").click(function(){
			// 恢复logo
			$(".imgBox").eq(0).children("div").children("img").each(function(index,item){
				$(this).attr("src",showImgArr[index]);
			});
			$(".imgBox").eq(1).children("div").children("img").each(function(index,item){
				$(this).attr("src",showImgArr1[index]);
			});
			var smMIndex = $(this).index();
			$(this).children(img).attr("src",$(".hideImg img").eq(smMIndex+6).attr("src"));
			$(this).css("border","1px solid #ac2528").siblings("div").css("border","1px solid #dedede");
			$(".shareTop div").eq(smMIndex+6).css("opacity","1").siblings().css("opacity","0");
		});
		
	},1000)
	


	//联系我们
	if(scrWid <= 380) {
		$(".con_topRed").css("top", "-527px");
	} else {
		$(".con_topRed").css("top", "-350px");
	}

	setTimeout(function() {
		//添加点击留言事件
		document.querySelector(".con_bottom").addEventListener("touchstart", function() {
			$(".con_moBox").show();
			setTimeout(function() {
				$("#moveBox").css("top", "17.5%");
			}, 1);
		});
		//关闭模态窗口
		document.querySelector("#del").addEventListener("touchstart", function() {
			$("#moveBox").css("top", "100%");
			setTimeout(function() {
				$(".con_moBox").hide();
				$("#moveBox").css("top", "-100%");
			}, 700);
		});
	}, 1000);


	
	//alert(scrWid+"  "+scrHei);
	//  兼容
	if(scrWid <= 374) {
		$(".con_topRed").css("top", "-70%");
		if(scrHei >= 600){	
			$(".con_topRed").css("top", "-55%");
		}
	} else {
		$(".con_topRed").css("top", "-50%");
	}
	if(scrHei <= 600){
		$("#banner1Box>img:nth-of-type(1)").css("margin-top","5%");
		$("#banner2Box>img:nth-of-type(1)").css("margin-top","20%");
		$("#banner3Box").css("transform","translateY(-25px)");
		$(".caseBanner img").css("margin-top","2%");
		$(".con_topRed").css("top", "-70%");
	}
	
	
	
	
	$(".caseBanner img").css({
		"margin-left" : scrWid*0.1+"px",
		"margin-right" : scrWid*0.1+"px",
	});
	
	/****  设置案例轮播的宽度  *****/
	$(".caseBanner img").width(scrWid*0.8);
	$(".caseBanner").each(function(index,item){
		$(this).width($(this).children("img").length*scrWid);
	});
	
	//  自动轮播
	var createData = function(index){
		var baIndex = 0;
		var bannerData = setInterval(function(){
			$(".caseBanner").eq(index).css("left",-baIndex*100+"%");
			baIndex ++;
			var divSize = $(".caseBanner").eq(index).children("img").length; 
			if(baIndex == divSize){
				baIndex = 0;
			}
		},4000);	
		return bannerData;
	};

	var banData1 = createData(0);
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










	/**********************************************       组织微信下拉出现空白       *********************************************/	    
	 var overscroll = function (els) {
	        for (var i = 0; i < els.length; ++i) {
	            var el = els[i];
	            el.addEventListener('touchstart', function () {
	                var top = this.scrollTop
	                    , totalScroll = this.scrollHeight
	                    , currentScroll = top + this.offsetHeight;
	                //If we're at the top or the bottom of the containers
	                //scroll, push up or down one pixel.
	                //
	                //this prevents the scroll from "passing through" to
	                //the body.
	                if (top === 0) {
	                    this.scrollTop = 1;
	                } else if (currentScroll === totalScroll) {
	                    this.scrollTop = top - 1;
	                }
	            });
	            el.addEventListener('touchmove', function (evt) {
	                //if the content is actually scrollable, i.e. the content is long enough
	                //that scrolling can occur
	                if (this.offsetHeight < this.scrollHeight)
	                    evt._isScroller = true;
	            });
	        }
	    };
	    
	    //禁止body的滚动事件
	    document.body.addEventListener('touchmove', function (evt) {
	        //In this case, the default behavior is scrolling the body, which
	        //would result in an overflow.  Since we don't want that, we preventDefault.
	        if (!evt._isScroller) {
	            evt.preventDefault();
	        }
	    });
	    
	    //给class为.scroll的元素加上自定义的滚动事件
	    overscroll(document.querySelector('.scroll'));
/**********************************************       组织微信下拉出现空白       *********************************************/	    
